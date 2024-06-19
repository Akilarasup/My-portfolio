// projects.js
import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'EntrepreneurMindset survey',
    description: "The diagnostic test is a self-diagnosis quiz designed to assess your entrepreneurial mindset through insightful questions.",
    imageUrl: 'https://t3.ftcdn.net/jpg/01/73/78/44/360_F_173784455_qe5py23FErnZ3J8fiye124sd8CdBOcW4.jpg',
  },
  {
    title: 'Sustainion',
    description: '"Sustainion" focuses on sustainability initiatives within communities, aiming to promote environmental consciousness and responsible living.',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/94/44/22/360_F_294442294_rbVXn57x90rsH0I5gTvjTX5CL70OWTqE.webp',
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <Layout>
      <Container className="mt-4">
        <h1 className="display-4 mb-4">Projects</h1>
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
