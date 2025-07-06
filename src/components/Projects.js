import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Eyantra GeoGuide',
    description: 'Successfully implemented the Eyantra GeoGuide Theme and was placed in the top 20 across the country',
    github: '#',
    icon: '🗺️',
    featured: true,
  },
  {
    title: 'Leaf Disease Segmentation',
    description: 'Leaf Disease Segmentation Using DeepLabV3',
    github: '#',
    icon: '🌱',
  },
  {
    title: 'Medical Recommendation System',
    description: 'A web-based Medical Recommendation System which helps users diagnose their medical condition.',
    github: '#',
    icon: '💊',
  },
  {
    title: 'Geospatial Context Retrieval',
    description: 'Web-based geospatial context retrieval system using LLMs and a graph database',
    github: '#',
    icon: '🌐',
  },
  {
    title: 'Community Hub',
    description: 'A community hub for people to share their thoughts inspired by Reddit',
    github: '#',
    icon: '💬',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of my featured projects.
        </p>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-title-row">
                <span className="project-title">{project.title}</span>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <div className="project-desc">{project.description}</div>
              <div className="project-links">
                <a href={project.github} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label="github">🐙</span> View On GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 