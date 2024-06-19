// about.js
import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Layout>
      <Container className="mt-4">
        <h1 className="display-4 mb-4">About Me</h1>
        <p className="lead mb-4">
          I am an experienced Business Analyst with a robust background in project management, specializing in delivering high-quality software projects within stringent timelines and budgets. With a keen aptitude for wireframing, business process mapping, and meticulous software documentation, I excel in transforming intricate requirements into tangible, effective solutions. My proactive approach ensures that projects not only meet but exceed objectives, consistently driving measurable results. Leveraging strong attention to detail and exceptional communication abilities, I foster collaborative environments that optimize team performance and stakeholder satisfaction.
        </p>
        <p className="lead mb-4">
          Driven by a passion for innovation and problem-solving, I thrive in dynamic environments where complex challenges require strategic thinking and agile execution. My analytical mindset allows me to identify opportunities for process improvement and efficiency gains, contributing to streamlined workflows and enhanced project outcomes. I am adept at synthesizing data-driven insights to inform decision-making and adapt quickly to evolving project requirements. Committed to continuous learning, I stay abreast of industry trends and best practices, ensuring that my solutions are not only current but also future-proofed. With a collaborative approach and a commitment to excellence, I am dedicated to delivering value and driving success in every project I undertake.
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
