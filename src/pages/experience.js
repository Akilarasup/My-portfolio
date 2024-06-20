// src/pages/experience.js
import React from 'react';
import Layout from '../components/Layout'; // Import Layout component
import { Container } from 'react-bootstrap';

const ExperiencePage = () => {
  return (
    <Layout> {/* Use Layout component */}
      <Container className="mt-4">
        <h1>Experience</h1>
        <ul>
          <li>
            <h3>Senior Business Analyst - XYZ Corporation</h3>
            <p>January 2020 - Present</p>
            <ul>
              <li>Lead the requirements gathering process for multiple high-profile projects.</li>
              <li>Conducted data analysis to support business decisions and strategic planning.</li>
              <li>Collaborated with cross-functional teams to drive process improvements.</li>
            </ul>
          </li>
          <li>
            <h3>Business Analyst - ABC Inc.</h3>
            <p>June 2016 - December 2019</p>
            <ul>
              <li>Gathered and documented business requirements for IT projects.</li>
              <li>Performed gap analysis to identify areas for improvement.</li>
              <li>Developed process flow diagrams and use cases to support development teams.</li>
            </ul>
          </li>
          <li>
            <h3>Junior Business Analyst - DEF Ltd.</h3>
            <p>July 2014 - May 2016</p>
            <ul>
              <li>Assisted in requirements gathering and documentation.</li>
              <li>Supported senior analysts in data analysis and reporting tasks.</li>
              <li>Participated in stakeholder meetings and workshops.</li>
            </ul>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default ExperiencePage;
