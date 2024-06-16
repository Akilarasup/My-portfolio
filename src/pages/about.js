// about.js
import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-12 mb-6">About Me</h1>
        <p className="text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod dolor id metus lacinia, ut lacinia orci fermentum.
        </p>
        <p className="text-lg leading-relaxed">
          Duis maximus bibendum sem, eget scelerisque libero gravida et.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
