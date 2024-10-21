import React from 'react';
import ComputerPartsImg from '../ComputerPartsProjectImage.png';
import Project from './Project';

const Projects = () => {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">Projects</h1>
      </section>
      <div className="grid-container">
				<Project title="Computer Parts" href="https://example.com" img={ComputerPartsImg} imgAlt="Computer Parts homepage." /> 
      </div>
    </main>
  );
};

export default Projects;
