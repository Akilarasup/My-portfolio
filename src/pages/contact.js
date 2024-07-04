import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaEnvelope, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './contact.css'; // Import the CSS file for specific styles

const Contact = () => {
  return (
    <Container className="contact-container mt-4 text-center">
      <div>
        <h1 className="display-4 mb-4">Get in Touch</h1>
        <h2 className="mb-4">Contact Me</h2>

        {/* Social Media Buttons */}
        <div className="contact-buttons">
          <Button variant="light" className="contact-button">
            <FaEnvelope className="icon" /> <a href="mailto:akilarasup2000@gmail.com">Email</a>
          </Button>
          <Button variant="light" className="contact-button">
            <FaInstagram className="icon" /> <a href="https://www.instagram.com/ak_akil_06?igsh=MXNidGFrZDI2bXM5Yw==" target="_blank" rel="noopener noreferrer">Instagram</a>
          </Button>
          <Button variant="light" className="contact-button">
            <FaLinkedin className="icon" /> <a href="https://www.linkedin.com/in/akilarasu-p-b64803257/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
          <Button variant="light" className="contact-button">
            <FaFacebook className="icon" /> <a href="https://www.facebook.com/akil.arasu.7161?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
