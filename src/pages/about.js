import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';
import akilImage from '../images/akil-aboutme.jpg'; // Import the image
import './about.css'; // Import the CSS file for specific styles

const AboutPage = () => {
  return (
    <Layout>
      <Container className="about-container mt-4">
        <div className="about-content d-flex flex-column justify-content-between gap-4 gap-md-5 flex-md-row">
          <div className="about-text d-flex flex-column gap-3 max-w-xl order-md-first">
            <h3 className="text-dark about-title">About Me</h3>
            <p className="text-muted">
              I am a driven business analyst with a robust background in project management, specializing in delivering high-quality software projects within stringent timelines and budgets. My journey into business analysis began in 2022, and since then, I have immersed myself in mastering tools like Figma for streamlined UI/UX design and exploring cloud solutions such as AWS to enhance operational scalability.
            </p>
            <p className="text-muted">
              With a background in Electrical Engineering, I bring a unique perspective to analyzing complex business processes and identifying opportunities for improvement. My passion for learning extends to cutting-edge technologies like artificial intelligence, which I am integrating into my analytical toolkit to drive data-driven decisions.
            </p>
            <p className="text-muted">
              Outside of analyzing business requirements and developing comprehensive strategies, I am an avid learner, constantly expanding my skills in agile methodologies and predictive analytics. I am deeply interested in the intersection of technology and business, actively engaging in forums and online communities to stay abreast of industry trends and best practices.
            </p>
            <p className="text-muted">
              Finally, some quick bits about me:
            </p>
            <div className="d-flex flex-column gap-2 gap-md-3 flex-md-row">
              <ul className="list-unstyled">
                <li className="text-muted">&#8226; B.E. in Electrical Engineering</li>
                <li className="text-muted">&#8226; Avid learner</li>
              </ul>
              <ul className="list-unstyled">
                <li className="text-muted">&#8226; Full time Business Analyst</li>
                <li className="text-muted">&#8226; Data-driven problem solver</li>
              </ul>
            </div>
            <p className="text-muted">
              Let's connect on <a href="https://www.linkedin.com/in/akilarasu-p-b64803257/" target="_blank" rel="noopener noreferrer">LinkedIn</a> to explore how I can contribute to your organization's success through strategic business analysis and innovative solutions. I look forward to connecting with you!
            </p>
          </div>
          <div className="about-image-container d-flex justify-content-center justify-content-md-end">
            <img
              alt="Portrait of Akil"
              loading="lazy"
              className="about-image"
              src={akilImage} // Use the imported image variable
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;
