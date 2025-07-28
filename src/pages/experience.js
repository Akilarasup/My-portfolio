import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard'; // Import ProjectCard component

// Import local images for projects
import pathwayImg from '../images/pathway-img.jpg';
import adamcoxImg from '../images/adamcox.com-img.jpg';
import sustainionImg from '../images/sustainion-img.jpg';
import entrepreneurImg from '../images/entreprenuer-img.jpg';
import astarprepImg from '../images/astarprep-img.webp';

import './experience.css'; // Import the CSS file for specific styles

const ExperiencePage = () => {
  const projects = [
    {
      title: 'Sustainion',
      description: 'Sustainion is dedicated to fostering sustainability initiatives within communities, striving to cultivate environmental consciousness and encourage responsible living practices.',
      imageUrl: sustainionImg,
    },
    {
      title: 'Pathway',
      description: 'Pathway specializes in freight forwarding services with a core emphasis on enhancing shipment visibility.',
      imageUrl: pathwayImg,
    },
    {
      title: 'EntrepreneurMindset Survey',
      description: "The diagnostic test is a self-diagnosis quiz designed to assess your entrepreneurial mindset.",
      imageUrl: entrepreneurImg,
    },
    {
      title: 'AdamCox.com Survey',
      description: 'The diagnostic test serves as an organizational tool, assessing entrepreneurial mindsets through a series of questions.',
      imageUrl: adamcoxImg,
    },
    {
      title: 'Astarprep',
      description: "AStarPrep is an educational platform offering dashboards for students and staff, with AI-enhanced exam analysis.",
      imageUrl: astarprepImg,
    }
  ];

  return (
    <Container className="experience-container">
      {/* Experience section */}
      <div className="experience-section mb-5">
        <h1 className="mb-4">Experience</h1>
        <Row className="equal-height-cards">
          {/* Technical Consultant */}
          <Col xs={12} md={6} className="d-flex">
            <Card className="mb-4 p-3 shadow-sm current-experience technical-consultant flex-fill">
              <Card.Body>
                <Card.Title className="mb-3">Technical Consultant</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><strong>Full-time</strong></Card.Subtitle>
                <Card.Text className="text-muted mb-3">January 2025 – Present</Card.Text>
                <Card.Text>Responsibilities:</Card.Text>
                <ul>
                  <li>Consulting on software implementation and systems integration.</li>
                  <li>Working closely with developers, QA, and business stakeholders.</li>
                  <li>Leading technical solution design, documentation, and testing support.</li>
                  <li>Contributing to automation, performance improvements, and architecture decisions.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Business Analyst – Full-time */}
          <Col xs={12} md={6} className="d-flex">
            <Card className="mb-4 p-3 shadow-sm previous-experience flex-fill">
              <Card.Body>
                <Card.Title className="mb-3">Business Analyst - Agile Cyber Solutions</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><strong>Full-time</strong></Card.Subtitle>
                <Card.Text className="text-muted mb-3">August 2022 – January 2025 (2 years, 5 months)</Card.Text>
                <Card.Text>Responsibilities:</Card.Text>
                <ul>
                  <li>Worked with Agile methodologies.</li>
                  <li>Utilized Microsoft Excel for data analysis and reporting.</li>
                  <li>Demonstrated strong analytical skills in business analysis and software testing.</li>
                  <li>Managed projects effectively, ensuring successful outcomes.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Business Analyst – Apprenticeship */}
          <Col xs={12} md={6} className="d-flex">
            <Card className="mb-4 p-3 shadow-sm previous-experience flex-fill">
              <Card.Body>
                <Card.Title className="mb-3">Business Analyst - Agile Cyber Solutions</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><strong>Apprenticeship</strong></Card.Subtitle>
                <Card.Text className="text-muted mb-3">May 2022 - July 2022 (3 months)</Card.Text>
                <Card.Text>Responsibilities:</Card.Text>
                <ul>
                  <li>Acquired hands-on experience in business analysis processes.</li>
                  <li>Assisted in project management tasks and software testing.</li>
                  <li>Gained proficiency in Agile methodologies and project coordination.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Projects section */}
      <div className="projects-section">
        <h1 className="mb-4">Projects Worked</h1>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ExperiencePage;
