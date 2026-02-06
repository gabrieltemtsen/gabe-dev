import Head from 'next/head';
import { getSiteUrl } from '@/utils/site';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<
    | { type: 'success' | 'error'; message: string }
    | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  //TODO add mailgun or postmark for real messaging

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message.');
      }

      setStatus({
        type: 'success',
        message: data.message || "Your message has been sent! I'll get back to you soon.",
      });
      setForm({ name: '', email: '', message: '', website: '' });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please try again later.';
      setStatus({
        type: 'error',
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-200 via-white to-cyan-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Head>
        <title>Contact | Let&apos;s Build Together</title>
        <meta
          name="description"
          content="Reach out to collaborate with Gabriel on product design, full-stack development, and Next.js builds."
        />
        <meta property="og:title" content="Contact | Let’s Build Together" />
        <meta property="og:description" content="Get in touch about product design, full‑stack work, and AI experiences." />
        <meta property="og:image" content="/og.svg" />
        <link rel="canonical" href={`${getSiteUrl()}/contact`} />
      </Head>
      {/* Back Button */}
      <button
        type="button"
        onClick={handleBack}
        className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
      >
        &larr; Back
      </button>

      {/* Heading */}
      <h2 className="text-5xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-10">Contact Me</h2>

      {/* Submission Status */}
      {status && (
        <div
          className={`mb-6 font-medium ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}

      {/* Contact Form */}
      <form
        className="glass p-8 rounded-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none bg-white dark:bg-gray-700 dark:text-gray-100"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
            autoComplete="name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none bg-white dark:bg-gray-700 dark:text-gray-100"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium">Message</label>
          <textarea
            id="message"
            className="w-full h-32 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none bg-white dark:bg-gray-700 dark:text-gray-100"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Write your message here"
            autoComplete="off"
            required
          ></textarea>
        </div>

        {/* Honeypot field for spam bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-500 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
          disabled={isSubmitting}
        >
          <span className="inline-flex items-center justify-center gap-2">
            {isSubmitting && (
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white"
                aria-hidden="true"
              />
            )}
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </span>
        </button>
      </form>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8 text-gray-700 dark:text-gray-200">
        <a
          href="https://github.com/gabrieltemtsen"
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Visit Gabriel's GitHub profile"
          className="hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/gabrieltemtsen"
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Visit Gabriel's LinkedIn profile"
          className="hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:gabrieltemtsen@gmail.com"
          aria-label="Send an email to Gabriel"
          className="hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
