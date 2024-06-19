import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage for optimized images
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

const IndexPage = () => {
  return (
    <Layout>
      <Container className="mt-4 text-center">
        {/* Bigger Header Section */}
        <header style={{ marginBottom: '2rem' }}>
          <h1 className="display-4 mb-4 font-weight-bold">Hey, I'm Akil</h1>
          <div className="rectangular-container">
            <StaticImage
              src='src\images\shared image (3) - Copy.jpg' // Double backslashes for Windows path
              alt="Akil's photo"
              placeholder="blurred"
              layout="fullWidth" // Use fullWidth layout to display image in its original size
              className="img-fluid rounded" // Bootstrap class for responsive image and rounded corners
            />
          </div>
        </header>
      </Container>
    </Layout>
  );
};

export default IndexPage;
