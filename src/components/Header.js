// Header.js
import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Akilarasu P</Link>
        <nav>
          <Link to="/" className="text-gray-300 mx-2 hover:text-white">Home</Link>
          <Link to="/projects" className="text-gray-300 mx-2 hover:text-white">Projects</Link>
          <Link to="/about" className="text-gray-300 mx-2 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 mx-2 hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
