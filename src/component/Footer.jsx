import React from 'react';
import './Footer.css'; // Optional styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your company description goes here.</p>
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