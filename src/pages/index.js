import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import heroBackground from '../images/pexels-photo-2680270.webp'; // Ensure correct import path
import './index.css'; // Import the CSS file for specific styles

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="container position-relative py-5 d-flex flex-column align-items-center justify-content-center h-100">
          <h1 className="display-4 fw-bold text-white">Hello, I'm Akil</h1>
          <div className="rectangular-container mt-4">
            <div className="photo-container">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
