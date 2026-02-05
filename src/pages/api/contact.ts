import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactResponse {
  message: string;
}

interface ContactErrorResponse extends ContactResponse {
  errors: Record<string, string>;
}

type ContactApiResponse = ContactResponse | ContactErrorResponse;

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const contactSchema = {
  safeParse: (payload: unknown) => {
    const errors: Record<string, string> = {};

    if (!payload || typeof payload !== 'object') {
      return { success: false, errors: { body: 'Request body must be a JSON object.' } };
    }

    const { name, email, message } = payload as ContactRequestBody;
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName) {
      errors.name = 'Name is required.';
    }

    if (!trimmedEmail) {
      errors.email = 'Email is required.';
    } else if (!isValidEmail(trimmedEmail)) {
      errors.email = 'Email must be valid.';
    }

    if (!trimmedMessage) {
      errors.message = 'Message is required.';
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    return {
      success: true,
      data: {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      },
    };
  },
};
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildEmailHtml = (name: string, email: string, message: string) => `
  <div style="font-family: Arial, sans-serif; font-size: 16px; color: #1f2937;">
    <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
    <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
    <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
    <p style="margin-bottom: 12px;"><strong>Message:</strong></p>
    <p style="white-space: pre-wrap; background-color: #f3f4f6; padding: 12px; border-radius: 8px;">${message}</p>
  </div>
`;

const getRequestOrigin = (req: NextApiRequest) => {
  if (typeof req.headers.origin === 'string') {
    return req.headers.origin;
  }

  if (typeof req.headers.referer === 'string') {
    try {
      return new URL(req.headers.referer).origin;
    } catch {
      return undefined;
    }
  }

  return undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactApiResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const parsedBody = contactSchema.safeParse(req.body);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const requestOrigin = getRequestOrigin(req);

  if (siteUrl && requestOrigin && requestOrigin !== siteUrl) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  if (!parsedBody.success) {
    return res
      .status(400)
      .json({ message: 'Invalid request body.', errors: parsedBody.errors });
  }

  const { name, email, message } = parsedBody.data;
  const apiKey = process.env.RESEND_API_KEY;
  const contactReceiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

  if (!apiKey || !contactReceiverEmail) {
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY environment variable.');
    }
    if (!contactReceiverEmail) {
      console.error('Missing CONTACT_RECEIVER_EMAIL environment variable.');
    }
    return res
      .status(500)
      .json({ message: 'Email service is not configured. Please try again later.' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: [contactReceiverEmail],
        reply_to: email,
        subject: `New message from ${name}`,
        html: buildEmailHtml(safeName, safeEmail, safeMessage),
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error('Failed to send email via Resend:', errorDetails);
      return res
        .status(502)
        .json({ message: 'Failed to send message. Please try again later.' });
    }

    return res
      .status(200)
      .json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Unexpected error while sending contact message:', error);
    return res
      .status(500)
      .json({ message: 'An unexpected error occurred. Please try again later.' });
  }
}
