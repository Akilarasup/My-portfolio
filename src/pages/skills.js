import React, { useState, useEffect, useRef } from 'react';
import { Container, Button } from 'react-bootstrap';
import './SkillsPage.css'; // Import external CSS file for styles
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Add icons for a modern touch

const skillsData = [
  {
    title: 'Business Analysis',
    description: 'Experienced in gathering and analyzing business requirements to align technology solutions with business needs.'
  },
  {
    title: 'Requirements Analysis and Assessment',
    description: 'Gathers, analyzes, and validates business requirements to ensure they align with the overall project goals and objectives, facilitating successful project outcomes.'
  },
  {
    title: 'Data Analysis and Evaluation',
    description: 'Analyzes data and metrics to assess project outcomes and progress, providing insights and recommendations for continuous improvement.'
  },
  {
    title: 'Communication',
    description: 'Effectively conveys information, ideas, and updates to stakeholders, team members, and clients through clear and concise verbal and written communication.'
  },
  {
    title: 'Stakeholder Management',
    description: 'Builds and maintains strong relationships with stakeholders, ensuring their needs and expectations are understood and met throughout the project lifecycle.'
  },
  {
    title: 'Problem-Solving',
    description: 'Identifies issues, analyzes possible solutions, and implements effective resolutions to overcome challenges and improve processes.'
  },
  {
    title: 'Process Improvement',
    description: 'Continuously evaluates existing processes and identifies opportunities for enhancements to increase efficiency, effectiveness, and quality.'
  },
  {
    title: 'Project Coordination and Planning',
    description: 'Organizes and manages project tasks, timelines, and resources to ensure successful completion of projects within scope, time, and budget constraints.'
  },
  {
    title: 'Strategic Planning',
    description: 'Develops long-term strategies and plans that align with organizational goals, guiding the direction and priorities of projects and initiatives.'
  },
  {
    title: 'Risk Assessment and Management',
    description: 'Identifies potential risks, evaluates their impact, and develops mitigation strategies to minimize adverse effects on project success.'
  },
  {
    title: 'Agile Methodologies',
    description: 'Proficient in Agile practices and methodologies, facilitating iterative development and continuous improvement.'
  },
  {
    title: 'Project Management',
    description: 'Skilled in managing projects throughout the lifecycle, including planning, execution, monitoring, and closing.'
  }
];

const SkillsPage = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const containerRef = useRef(null);

  const toggleSkillDescription = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpandedSkill(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container className="custom-skills-container" ref={containerRef}>
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
