import React from 'react';
import './Footer.css'; // Optional styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>At TECHBOOKS, we are dedicated to empowering learners of all levels with comprehensive, high-quality resources to master programming languages. Whether you are a beginner exploring your first lines of code or a professional aiming to upgrade your skills, our platform offers a vast library covering all major programming languages — from Python, Java, and C++ to JavaScript, HTML/CSS, SQL, AI/ML, and beyond.

With a focus on practical learning, real-world examples, and industry-relevant projects, TECHBOOKS ensures that learning to code is accessible, engaging, and career-focused. Our mission is simple: to help you code your future.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: teckbook@gmail.com</p>
          {/* <p>Phone: (123) 456-7890</p> */}
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {currentYear} TECH BOOK. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;