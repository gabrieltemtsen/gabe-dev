import { useRouter } from 'next/router';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', form);
  };
  

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
       {/* Back Button */}
       <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded mb-6"
          >
            &larr; Back
          </button>
      {/* Heading */}
      <h2 className="text-5xl font-serif font-bold text-foreground mb-10">Contact Me</h2>

      {/* Contact Form */}
      <form className=" bg-foreground p-8 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-gray-700  font-medium">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700  font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label className="block text-gray-700  font-medium">Message</label>
          <textarea
            className="w-full h-32 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
