// ContactForm.js
import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="mx-auto mt-8 contact-form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" name="name" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" name="message" rows="4" className="form-control" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
