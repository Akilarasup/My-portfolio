import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import heroBackground from '../images/pexels-photo-2680270.webp'; // Ensure correct import path

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="position-relative overflow-hidden text-center"
        style={{
          height: '100vh', // Ensure hero section covers full viewport height
          width: '100%', // Ensure full width of viewport
          margin: 0,
          padding: 0,
          backgroundImage: `url(${heroBackground})`, // Set background image
          backgroundSize: 'cover', // Cover entire div with image
          backgroundPosition: 'center', // Center align the image
          backgroundRepeat: 'no-repeat', // Do not repeat the image
        }}
      >
        <div className="container position-relative py-5 d-flex flex-column align-items-center justify-content-center h-100">
          <h1 className="display-4 fw-bold text-white">Hey, I'm Akil</h1>
          <div className="rectangular-container mt-4">
            <StaticImage
              src="../images/akil.jpg" // Path to Akil's photo
              alt="Akil's photo"
              placeholder="blurred"
              layout="fixed"
              width={300} // Adjust width based on your design needs
              height={300} // Adjust height based on your design needs
              className="img-fluid rounded-circle shadow-lg custom-image image-medium"
              style={{ objectFit: 'cover' }} // Ensure the image covers the container
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
