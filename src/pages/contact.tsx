import { useRouter } from 'next/router';
import { useState } from 'react';

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
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
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
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
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
    </div>
  );
};

export default Contact;
