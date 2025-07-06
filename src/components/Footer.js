import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
          </div>
          <div className="footer-right">
            <a href="#" className="footer-link">GitHub</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 