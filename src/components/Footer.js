// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-12">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
