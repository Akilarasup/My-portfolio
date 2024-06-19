// Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark py-4 mt-4">
      <Container className="text-center text-light"> {/* Changed text-muted to text-light */}
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
