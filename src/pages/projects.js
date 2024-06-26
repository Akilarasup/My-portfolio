import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

// Import local images
import pathwayImg from '../images/pathway-img.jpg';
import adamcoxImg from '../images/adamcox.com-img.jpg';
import sustainionImg from '../images/sustainion-img.jpg';
import entrepreneurImg from '../images/entreprenuer-img.jpg';
import astarprepImg from '../images/astarprep-img.webp';

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
    description: "The diagnostic test is a self-diagnosis quiz designed to assess your entrepreneurial mindset through insightful questions.",
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
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <Layout>
      <Container className="mt-4" style={{ marginLeft: '5rem' }}>
        <h1 className="display-4 mb-4">Projects Worked</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
