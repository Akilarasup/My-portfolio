import React from 'react';
import { Card } from 'react-bootstrap'; // Import Card from react-bootstrap for consistent styling

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
