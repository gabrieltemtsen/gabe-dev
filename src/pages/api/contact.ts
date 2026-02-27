import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot
}

interface ContactResponse {
  message: string;
}

interface ContactErrorResponse extends ContactResponse {
  errors: Record<string, string>;
}

type ContactApiResponse = ContactResponse | ContactErrorResponse;

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

type ContactSchemaSuccess = {
  success: true;
  data: { name: string; email: string; message: string; website: string };
};
type ContactSchemaFailure = { success: false; errors: Record<string, string> };

const contactSchema = {
  safeParse: (payload: unknown) => {
    const errors: Record<string, string> = {};

    if (!payload || typeof payload !== 'object') {
      return { success: false, errors: { body: 'Request body must be a JSON object.' } };
    }

    const { name, email, message, website } = payload as ContactRequestBody;
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName) {
      errors.name = 'Name is required.';
    } else if (trimmedName.length > 80) {
      errors.name = 'Name is too long (max 80).';
    }

    if (!trimmedEmail) {
      errors.email = 'Email is required.';
    } else if (!isValidEmail(trimmedEmail)) {
      errors.email = 'Email must be valid.';
    } else if (trimmedEmail.length > 100) {
      errors.email = 'Email is too long (max 100).';
    }

    if (!trimmedMessage) {
      errors.message = 'Message is required.';
    } else if (trimmedMessage.length > 2000) {
      errors.message = 'Message is too long (max 2000).';
    }

    // Honeypot check: bots often fill extra fields
    if (typeof website === 'string' && website.trim().length > 0) {
      errors.website = 'Spam detected.';
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    const result: ContactSchemaSuccess = {
      success: true,
      data: {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        website: '',
      },
    };
    return result;
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

  const { name = '', email = '', message = '' } = req.body as ContactRequestBody;
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (trimmedName.length > MAX_NAME_LENGTH) {
    return res.status(400).json({
      message: `Name must be ${MAX_NAME_LENGTH} characters or fewer.`,
    });
  }

  if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
    return res.status(400).json({
      message: `Email must be ${MAX_EMAIL_LENGTH} characters or fewer.`,
    });
  }

  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      message: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    });
  }

  if (!trimmedName || !trimmedMessage || !isValidEmail(trimmedEmail)) {
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
        to: ['gabrieltemtsen@gmail.com'],
        reply_to: trimmedEmail,
        subject: `New message from ${trimmedName}`,
        html: buildEmailHtml(trimmedName, trimmedEmail, trimmedMessage),
        text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nMessage:\n${trimmedMessage}`,
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
// naive in-memory rate limiter per IP (resets with server)
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per minute
const hits = new Map<string, { count: number; resetAt: number }>();

const rateLimitOk = (ip: string | undefined) => {
  const key = ip || 'unknown';
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
};
    console.error('Unexpected error while sending contact message:', error);
    return res
      .status(500)
      .json({ message: 'An unexpected error occurred. Please try again later.' });
  }
}
