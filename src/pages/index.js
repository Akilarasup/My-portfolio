import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby'; // Import Link from Gatsby
import Layout from '../components/Layout';
import heroBackground from '../images/pexels-photo-2680270.webp'; // Ensure correct import path
import './index.css'; // Import the CSS file for specific styles

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="container position-relative py-5 d-flex flex-column align-items-center justify-content-center">
          <StaticImage
            src="../images/akil.jpg" // Path to Akil's photo
            alt="Akil's photo"
            placeholder="blurred"
            layout="fixed"
            width={300} // Adjust width based on your design needs
            height={300} // Adjust height based on your design needs
            className="img-fluid rounded-circle shadow-lg"
            style={{ objectFit: 'cover' }} // Ensure the image covers the container
          />
          <h1 className="display-4 fw-bold">Hello, I'm Akil</h1>
          <p className="lead">Improving processes with analytical expertise.</p>
          
          {/* Modified button to navigate to About page */}
          <Link to="/about" className="btn btn-primary">Learn About Me</Link>
          
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
