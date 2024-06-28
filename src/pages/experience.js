import React from 'react';
import Layout from '../components/Layout'; // Import Layout component
import ProjectCard from '../components/ProjectCard'; // Import ProjectCard component
import { Container, Row, Col } from 'react-bootstrap';

// Import local images for projects
import pathwayImg from '../images/pathway-img.jpg';
import adamcoxImg from '../images/adamcox.com-img.jpg';
import sustainionImg from '../images/sustainion-img.jpg';
import entrepreneurImg from '../images/entreprenuer-img.jpg';
import astarprepImg from '../images/astarprep-img.webp';

import './experience.css'; // Import the CSS file for specific styles

const ExperiencePage = () => {
  // Define project data
  const projects = [
    {
      title: 'Sustainion',
      description: 'Sustainion is dedicated to fostering sustainability initiatives within communities, striving to cultivate environmental consciousness and encourage responsible living practices. By promoting sustainable actions and behaviors, Sustainion aims to create a positive impact on the environment and empower individuals to adopt sustainable lifestyles.',
      imageUrl: sustainionImg,
    },
    {
      title: 'Pathway',
      description: 'Pathway specializes in freight forwarding services with a core emphasis on enhancing shipment visibility. Utilizing advanced tracking technologies and streamlined logistics management, Pathway ensures real-time updates and transparent communication throughout the shipping process.',
      imageUrl: pathwayImg,
    },
    {
      title: 'EntrepreneurMindset Survey',
      description: "The diagnostic test is a self-diagnosis quiz designed to assess your entrepreneurial mindset through insightful questions, offering comprehensive insights into your strengths, weaknesses, and areas for improvement in just a few minutes of your time.",
      imageUrl: entrepreneurImg,
    },
    {
      title: 'AdamCox.com Survey',
      description: 'The diagnostic test serves as an organizational tool, assessing entrepreneurial mindsets through a series of insightful questions. Tailored for teams and companies, it aims to gauge strategic thinking, risk tolerance, and innovation potential, providing valuable insights into collective entrepreneurial strengths and areas for development within organizational contexts.',
      imageUrl: adamcoxImg,
    },
    {
      title: 'Astarprep',
      description: "AStarPrep is an educational platform offering tailored dashboards for students and staff. Students access subject materials, exams, and performance analytics, with payment through Stripe. Staff manage student details and performance. AI feedback enhances learning in 'exam' and 'instant' modes, ensuring personalized and effective education.",
      imageUrl: astarprepImg,
    }
  ];

  return (
    <Layout>
      <Container className="experience-container mt-4">
        {/* Experience section */}
        <div className="experience-section mb-5">
          <h1>Experience</h1>
          <ul className="list-unstyled">
            {/* Business Analyst - Full-time */}
            <li className="mb-4">
              <h3>Business Analyst - Agile Cyber Solutions</h3>
              <p><strong>Full-time</strong></p>
              <p>August 2022 - Present (1 year, 11 months)</p>
              <p>Responsibilities:</p>
              <ul className="ms-3">
                <li>Worked with Agile methodologies.</li>
                <li>Utilized Microsoft Excel for data analysis and reporting.</li>
                <li>Demonstrated strong analytical skills in business analysis and software testing.</li>
                <li>Managed projects effectively, ensuring successful outcomes.</li>
              </ul>
            </li>
            {/* Business Analyst - Apprenticeship */}
            <li className="mb-4">
              <h3>Business Analyst - Agile Cyber Solutions</h3>
              <p><strong>Apprenticeship</strong></p>
              <p>May 2022 - July 2022 (3 months)</p>
              <p>Responsibilities:</p>
              <ul className="ms-3">
                <li>Acquired hands-on experience in business analysis processes.</li>
                <li>Assisted in project management tasks and software testing.</li>
                <li>Gained proficiency in Agile methodologies and project coordination.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Projects section */}
        <div className="projects-section">
          <h1>Projects Worked</h1>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{ marginTop: 'calc(var(--bs-gutter-y) * -0.50)' }}>
            {projects.map((project, index) => (
              <Col key={index}>
                <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default ExperiencePage;
