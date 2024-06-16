// Navbar.js
import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Your Name</Link>
        <div>
          <Link to="/" className="text-gray-300 mx-2 hover:text-white">Home</Link>
          <Link to="/projects" className="text-gray-300 mx-2 hover:text-white">Projects</Link>
          <Link to="/about" className="text-gray-300 mx-2 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 mx-2 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
