import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactResponse {
  message: string;
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

const buildEmailHtml = (name: string, email: string, message: string) => `
  <div style="font-family: Arial, sans-serif; font-size: 16px; color: #1f2937;">
    <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
    <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
    <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
    <p style="margin-bottom: 12px;"><strong>Message:</strong></p>
    <p style="white-space: pre-wrap; background-color: #f3f4f6; padding: 12px; border-radius: 8px;">${message}</p>
  </div>
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
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
      .json({ message: 'Please provide a valid name, email, and message.' });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Missing RESEND_API_KEY environment variable.');
    return res
      .status(500)
      .json({ message: 'Email service is not configured. Please try again later.' });
  }

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
    console.error('Unexpected error while sending contact message:', error);
    return res
      .status(500)
      .json({ message: 'An unexpected error occurred. Please try again later.' });
  }
}
