// contact.js
import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-12 mb-6">Contact Me</h1>
        <p className="text-lg leading-relaxed mb-6">
          Have a question or want to work together? Drop me a message below!
        </p>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
