import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import Skills from './skills';
import './index.css';

const IndexPage = () => {
  return (
    <Layout>
      <div id="hero" className="hero-section" style={{ backgroundColor: '#D6AE4C' }}>
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
            <a href="#about" className="btn btn-primary">Learn About Me</a>
          </div>
        </div>
      </div>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default IndexPage;
