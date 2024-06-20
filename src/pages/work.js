// src/pages/work.js
import React from 'react';
import Layout from '../components/Layout'; // Import Layout component
import { Container } from 'react-bootstrap';

const WorkPage = () => {
  return (
    <Layout> {/* Use Layout component */}
      <Container className="mt-4">
        <h1>Work</h1>
        <ul>
          <li>
            <h3>Project Management System Implementation</h3>
            <p>XYZ Corporation</p>
            <ul>
              <li>Managed the implementation of a new project management system, resulting in a 20% increase in project efficiency.</li>
              <li>Gathered and documented requirements from stakeholders across different departments.</li>
              <li>Coordinated with the IT team to ensure successful system integration and user training.</li>
            </ul>
          </li>
          <li>
            <h3>Data Analytics Dashboard Development</h3>
            <p>ABC Inc.</p>
            <ul>
              <li>Led the development of a comprehensive data analytics dashboard to provide real-time insights into business performance.</li>
              <li>Worked closely with data scientists and developers to design and implement the dashboard.</li>
              <li>Facilitated training sessions for end-users to ensure effective utilization of the dashboard.</li>
            </ul>
          </li>
          <li>
            <h3>Business Process Reengineering</h3>
            <p>DEF Ltd.</p>
            <ul>
              <li>Conducted a thorough analysis of existing business processes to identify inefficiencies and areas for improvement.</li>
              <li>Developed and implemented new processes, resulting in a 15% reduction in operational costs.</li>
              <li>Collaborated with stakeholders to ensure smooth transition and adoption of new processes.</li>
            </ul>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default WorkPage;
