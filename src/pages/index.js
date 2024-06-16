// index.js
import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'https://placehold.it/300x200',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'https://placehold.it/300x200',
  },
  // Add more projects as needed
];

const IndexPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-12 mb-6">Welcome to My Portfolio</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
