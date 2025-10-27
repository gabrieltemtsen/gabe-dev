import { useRouter } from 'next/router';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
      setForm({ name: '', email: '', message: '' });
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
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6"
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
          <label className="block text-gray-700 dark:text-gray-200 font-medium">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-gray-100"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-gray-100"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 font-medium">Message</label>
          <textarea
            className="w-full h-32 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-gray-100"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-500 dark:hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8 text-gray-700 dark:text-gray-200">
        <a
          href="https://github.com"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:gabrieltemtsen@gmail.com"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
