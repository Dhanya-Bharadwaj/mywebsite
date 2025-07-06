import React from 'react';
import '../styles/About.css';

const About = () => {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Drone Engineer",
      //company: "Tech Company",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      //company: "Startup Inc",
      description: "Developed and maintained multiple web applications, focusing on user experience and performance."
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      //company: "Digital Agency",
      description: "Created responsive and interactive user interfaces using modern JavaScript frameworks."
    }
  ];

  const education = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Computer Science",
      school: "Dr Ambedkar Institue of Technology",
      description: "Specialized in Software Engineering and Web Development"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better - my journey, experience, and what drives me in the world of technology.
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full Stack Developer with over 4 years of experience in creating 
                innovative digital solutions. I believe in writing clean, maintainable code and 
                creating user experiences that make a difference.
              </p>
              <p>
                My journey in technology started with curiosity and has evolved into a deep passion 
                for solving complex problems through elegant code. I specialize in modern web 
                technologies and enjoy staying up-to-date with the latest industry trends.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Technologies</p>
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <div className="timeline-section">
              <h3>Experience</h3>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-year">{exp.year}</div>
                      <h4>{exp.title}</h4>
                      <h5>{exp.company}</h5>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="timeline-section">
              <h3>Education</h3>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-year">{edu.year}</div>
                      <h4>{edu.degree}</h4>
                      <h5>{edu.school}</h5>
                      <p>{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3>What I Value</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Constantly exploring new technologies and approaches to solve problems creatively.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Quality</h4>
              <p>Writing clean, maintainable code that stands the test of time and scales effectively.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Working effectively with teams to deliver exceptional results and learn from others.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h4>Growth</h4>
              <p>Continuously learning and improving my skills to stay ahead in the ever-evolving tech landscape.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 