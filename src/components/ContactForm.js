// ContactForm.js
import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="max-w-lg mx-auto mt-8 contact-form" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
      </div>
      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
