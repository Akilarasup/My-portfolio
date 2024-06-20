// ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form className="mx-auto mt-8 contact-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className="form-control" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="form-control" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          className="form-control" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
