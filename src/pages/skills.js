import React from 'react';
import Layout from '../components/Layout'; // Import Layout component
import { Container } from 'react-bootstrap';

const SkillsPage = () => {
  return (
    <Layout> {/* Use Layout component */}
      <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '1.5rem' }}>Skills</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>Agile Methodologies</h3>
            <p>Proficient in Agile practices and methodologies, facilitating iterative development and continuous improvement.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>Microsoft Excel</h3>
            <p>Advanced skills in Microsoft Excel for data analysis, reporting, and complex calculations.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>Analytical Skills</h3>
            <p>Strong analytical capabilities to interpret data, identify trends, and make informed business decisions.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>Business Analysis</h3>
            <p>Experienced in gathering and analyzing business requirements to align technology solutions with business needs.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>Software Testing</h3>
            <p>Knowledgeable in software testing methodologies to ensure quality and functionality of applications.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>Project Management</h3>
            <p>Skilled in managing projects throughout the lifecycle, including planning, execution, monitoring, and closing.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>Figma</h3>
            <p>Proficient in Figma for UI/UX design, prototyping, and collaboration.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>AWS</h3>
            <p>Familiar with Amazon Web Services (AWS) cloud platform and services.</p>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <h3>DevOps</h3>
            <p>Understanding of DevOps principles and practices for continuous integration and deployment.</p>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default SkillsPage;
