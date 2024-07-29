import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './SkillsPage.css'; // Import external CSS file for styles
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Add icons for a modern touch

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
];

const SkillsPage = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkillDescription = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  return (
    <Container className="custom-skills-container">
      <h1 className="custom-skills-heading">Skills</h1>
      <ul className="custom-skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className={`custom-skill-item ${expandedSkill === index ? 'expanded' : ''}`}>
            <div className="skill-header">
              <h3 className="custom-skill-title">{skill.title}</h3>
              <Button
                variant="link"
                className="skill-toggle-button"
                onClick={() => toggleSkillDescription(index)}
                aria-controls={`description-${index}`}
                aria-expanded={expandedSkill === index}
              >
                {expandedSkill === index ? <FaChevronUp /> : <FaChevronDown />}
              </Button>
            </div>
            <div
              id={`description-${index}`}
              className={`skill-description ${expandedSkill === index ? 'show' : ''}`}
            >
              <p>{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default SkillsPage;
