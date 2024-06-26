import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Container, Button } from 'react-bootstrap'; // Assuming Button component is imported from react-bootstrap
import './SkillsPage.css'; // Import external CSS file for styles

const skillsData = [
  {
    title: 'Agile Methodologies',
    description: 'Proficient in Agile practices and methodologies, facilitating iterative development and continuous improvement.'
  },
  {
    title: 'Microsoft Excel',
    description: 'Advanced skills in Microsoft Excel for data analysis, reporting, and complex calculations.'
  },
  {
    title: 'Analytical Skills',
    description: 'Strong analytical capabilities to interpret data, identify trends, and make informed business decisions.'
  },
  {
    title: 'Business Analysis',
    description: 'Experienced in gathering and analyzing business requirements to align technology solutions with business needs.'
  },
  {
    title: 'Software Testing',
    description: 'Knowledgeable in software testing methodologies to ensure quality and functionality of applications.'
  },
  {
    title: 'Project Management',
    description: 'Skilled in managing projects throughout the lifecycle, including planning, execution, monitoring, and closing.'
  },
  {
    title: 'Figma',
    description: 'Proficient in Figma for UI/UX design, prototyping, and collaboration.'
  },
  {
    title: 'AWS',
    description: 'Familiar with Amazon Web Services (AWS) cloud platform and services.'
  },
  {
    title: 'DevOps',
    description: 'Understanding of DevOps principles and practices for continuous integration and deployment.'
  },
];

const SkillsPage = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkillDescription = (index) => {
    if (expandedSkill === index) {
      setExpandedSkill(null); // Collapse if already expanded
    } else {
      setExpandedSkill(index); // Expand the clicked skill
    }
  };

  return (
    <Layout>
      <Container className="custom-skills-container">
        <h1 className="custom-skills-heading">Skills</h1>
        <ul className="custom-skills-list">
          {skillsData.map((skill, index) => (
            <li key={index} className="custom-skill-item">
              <div className="skill-header">
                <h3 className="custom-skill-title">{skill.title}</h3>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => toggleSkillDescription(index)}
                  aria-controls={`description-${index}`}
                  aria-expanded={expandedSkill === index}
                >
                  {expandedSkill === index ? '-' : '+'}
                </Button>
              </div>
              <div
                id={`description-${index}`}
                className={`skill-description ${expandedSkill === index ? 'expanded' : 'collapsed'}`}
              >
                <p>{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default SkillsPage;
