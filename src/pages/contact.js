import React from 'react';
import Layout from '../components/Layout';
import { Container, Button } from 'react-bootstrap';
import { FaEnvelope, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Removed FaTwitter

const ContactPage = () => {
  return (
    <Layout>
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <h1 className="display-4 mb-4">Get in Touch</h1>
          <h2 className="mb-4">Contact Me</h2>

          {/* Social Media Buttons */}
          <div className="mt-auto">
            {/* Email */}
            <Button variant="light" style={styles.contactButton}>
              <FaEnvelope style={styles.icon} /> <a href="mailto:akilarasup2000@gmail.com">Email</a>
            </Button>

            {/* Instagram */}
            <Button variant="light" style={styles.contactButton}>
              <FaInstagram style={styles.icon} /> <a href="https://www.instagram.com/ak_akil_06?igsh=MXNidGFrZDI2bXM5Yw==" target="_blank" rel="noopener noreferrer">Instagram</a>
            </Button>

            {/* LinkedIn */}
            <Button variant="light" style={styles.contactButton}>
              <FaLinkedin style={styles.icon} /> <a href="https://www.linkedin.com/in/akilarasu-p-b64803257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>

            {/* X (Replaced Twitter) */}
            <Button variant="light" style={styles.contactButton}>
              X <a href="https://x.com/ak_akil_06?t=Y3hEls09QyYOKghE9SlnCQ&s=09" target="_blank" rel="noopener noreferrer">Twitter</a>
            </Button>

            {/* Facebook */}
            <Button variant="light" style={styles.contactButton}>
              <FaFacebook style={styles.icon} /> <a href="https://www.facebook.com/akil.arasu.7161?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

// Inline styles (unchanged)
const styles = {
  contactButton: {
    border: '1px solid #333',
    borderRadius: '20px',
    padding: '10px 15px',
    marginBottom: '20px',
    display: 'inline-block',
    textAlign: 'left',
    width: 'auto',
    marginRight: '10px',
    marginLeft: '10px'
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.5rem'
  }
};

export default ContactPage;
