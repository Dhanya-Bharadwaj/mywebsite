import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import myPhoto from '../assets/myphoto.webp';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Creative Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-particles"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Akash Potti</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="animated-text">{texts[currentText]}</span>
            </h2>
            <p className="hero-description">
              Passionate about creating innovative digital solutions and turning ideas into reality. 
              I specialize in modern web technologies and user-centered design.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <img src={myPhoto} alt="Profile" className="profile-photo" />
              </div>
              <div className="profile-info">
                <h3>Akash Potti</h3>
                <p>Drone Engineer</p>
               
                <div className="social-links">
                  <a href="https://github.com/Akash-Potti" className="social-link">GitHub</a>
                  <a href="https://www.linkedin.com/in/akash-potti/?originalSubdomain=in" className="social-link">LinkedIn</a>
                  <a href="mailto:akashpotti07@gmail.com" className="social-link">Mail</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 