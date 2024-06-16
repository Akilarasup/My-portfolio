// ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg project-card mb-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4 card-content">
        <div className="font-bold text-xl mb-2 card-title">{title}</div>
        <p className="text-gray-700 text-base card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
