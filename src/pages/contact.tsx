import { useRouter } from 'next/router';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  //TODO add mailgun or postmark for real messaging

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Handle form submission
    console.log('Form submitted', form);

    // Simulate successful form submission
    setSubmitted(true);

    // Reset the form
    setForm({ name: '', email: '', message: '' });
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

      {/* Success Message */}
      {submitted && (
        <div className="mb-6 text-green-600 font-medium">
          Your message has been sent! I&apos;ll get back to you soon. Thankyou!
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
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Send Message
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
          href="mailto:contact@example.com"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
