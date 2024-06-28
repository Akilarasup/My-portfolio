import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Import external CSS file for styles

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <Container fluid>
        <p>© {new Date().getFullYear()} Akilarasu P. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
