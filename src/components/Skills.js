import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'C', 'JavaScript']
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'Bootstrap']
  },
  {
    category: 'Frameworks',
    items: ['Pandas', 'Numpy']
  },
  {
    category: 'Tools',
    items: ['Excel', 'PowerPoint', 'Git']
  },
  {
    category: 'Platforms',
    items: ['Jupyter Notebook', 'Visual Studio Code', 'GitHub']
  },
  {
    category: 'OS',
    items: ['Windows', 'Linux']
  },
  {
    category: 'CS concepts',
    items: ['DSA', 'OOPs']
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Teamwork', 'Time Management', 'Leadership']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills Summary</h2>
        <p className="section-subtitle">
          Here is a summary of my technical and professional skills.
        </p>
        <div className="skills-summary-grid">
          {skillsData.map((skill, idx) => (
            <div className="skills-summary-card" key={idx}>
              <h4 className="skills-summary-category">{skill.category}</h4>
              <ul className="skills-summary-list">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 