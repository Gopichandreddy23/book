import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.classList.contains('hamburger')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img 
            src="/tech.jpg" 
            alt="Company Logo" 
            className="logo-image"
          />
          <div className="company-name">TECH BOOKS</div>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div 
          className="hamburger" 
          onClick={toggleMobileMenu}
        >
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </div>
        
        <nav 
          className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
          ref={mobileMenuRef}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <a 
                href="/" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/book" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOKS
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/practice" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRACTICE
              </a>
            </li>
            {/* <li className="nav-item">
              <a 
                href="/interview" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                INTERVIEW
              </a>
            </li> */}
            <li className="nav-item">
              <a 
                href="/about" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </a>
            </li>
            
          </ul>
        </nav>
      </header>
      {/* Add a spacer div to prevent content from being hidden behind the fixed header */}
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;