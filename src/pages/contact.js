// contact.js
import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Container } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Layout>
      <Container className="mt-4">
        <h1 className="display-4 mb-4">Contact Me</h1>
        <p className="lead mb-4">
          Have a question or want to work together? Drop me a message below!
        </p>
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default ContactPage;
