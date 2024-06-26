import React from 'react';
import Layout from '../components/Layout'; // Import Layout component
import { Container } from 'react-bootstrap';

const ExperiencePage = () => {
  return (
    <Layout> {/* Use Layout component */}
      <Container className="mt-4" style={{ marginLeft: '5rem' }}>
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
      </Container>
    </Layout>
  );
};

export default ExperiencePage;
