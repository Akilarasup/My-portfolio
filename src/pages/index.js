import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import heroBackground from '../images/pexels-photo-2680270.webp';
import './index.css';

const IndexPage = () => {
  return (
    <Layout>
      <div className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="container position-relative py-5">
          <div className="d-flex flex-column align-items-center justify-content-center content-wrapper">
            <StaticImage
              src="../images/akil.jpg"
              alt="Akil's photo"
              placeholder="blurred"
              layout="fixed"
              width={300}
              height={300}
              className="img-fluid rounded-circle shadow-lg"
              style={{ objectFit: 'cover' }}
            />
            <h1 className="display-4 fw-bold">Hello, I'm Akil</h1>
            <p className="lead">Improving processes with analytical expertise.</p>
            <Link to="/about" className="btn btn-primary">Learn About Me</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
