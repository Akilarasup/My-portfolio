// src/pages/skills.js
import React from 'react';
import Layout from '../components/Layout'; // Import Layout component
import { Container } from 'react-bootstrap';

const SkillsPage = () => {
  return (
    <Layout> {/* Use Layout component */}
      <Container className="mt-4">
        <h1>Skills</h1>
        <ul>
          <li>
            <h3>Requirements Gathering</h3>
            <p>Experienced in eliciting, documenting, and managing requirements for various projects, ensuring all stakeholders' needs are captured.</p>
          </li>
          <li>
            <h3>Data Analysis</h3>
            <p>Proficient in analyzing and interpreting complex data sets using tools like Excel, SQL, and various BI tools to inform business decisions.</p>
          </li>
          <li>
            <h3>Process Improvement</h3>
            <p>Skilled in identifying inefficiencies and recommending process improvements to enhance productivity and efficiency.</p>
          </li>
          <li>
            <h3>Stakeholder Management</h3>
            <p>Adept at managing relationships with stakeholders at all levels, ensuring effective communication and alignment on project goals.</p>
          </li>
          <li>
            <h3>Project Management</h3>
            <p>Experienced in managing projects from inception to completion, ensuring they are delivered on time and within budget.</p>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default SkillsPage;
