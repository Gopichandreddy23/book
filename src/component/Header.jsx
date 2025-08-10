// import React, { useState, useRef, useEffect } from 'react';
// import './Header.css';

// const Header = () => {
//   const [showLoginOptions, setShowLoginOptions] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowLoginOptions(false);
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
//           !event.target.classList.contains('hamburger')) {
//         setMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleLoginClick = () => {
//     setShowLoginOptions(!showLoginOptions);
//   };

//   const handleOptionClick = (userType) => {
//     console.log(`${userType} login clicked`);
//     setShowLoginOptions(false);
//     setMobileMenuOpen(false);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//     setShowLoginOptions(false);
//   };

//   return (
//     <>
//       <header className="header">
//         <div className="logo-container">
//           <img 
//             src="/tech.jpg" 
//             alt="Company Logo" 
//             className="logo-image"
//           />
//           <div className="company-name">TECH BOOKS</div>
//         </div>
        
//         {/* Hamburger menu for mobile */}
//         <div 
//           className="hamburger" 
//           onClick={toggleMobileMenu}
//         >
//           <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
//           <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
//           <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
//         </div>
        
//         <nav 
//           className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
//           ref={mobileMenuRef}
//         >
//           <ul className="nav-links">
//             <li className="nav-item">
//               <a 
//                 href="/" 
//                 className="nav-link"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 HOME
//               </a>
//             </li>
//             <li className="nav-item">
//               <a 
//                 href="/book" 
//                 className="nav-link"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 BOOKS
//               </a>
//             </li>
//             <li className="nav-item">
//               <a 
//                 href="/practice" 
//                 className="nav-link"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 PRACTICE
//               </a>
//             </li>
//             <li className="nav-item">
//               <a 
//                 href="/interview" 
//                 className="nav-link"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 INTERVIEW
//               </a>
//             </li>
//             <li className="nav-item">
//               <a 
//                 href="#contact" 
//                 className="nav-link"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 CONTACT
//               </a>
//             </li>
//           </ul>
          
//           <div className="login-container" ref={dropdownRef}>
//             <div 
//               className={`login-dropdown ${showLoginOptions ? 'visible' : ''}`}
//               onMouseLeave={() => !mobileMenuOpen && setShowLoginOptions(false)}
//             >
//               <a 
//                 href="#admin-login" 
//                 className="login-option"
//                 onClick={() => handleOptionClick("Admin")}
//               >
//                 Admin Login
//               </a>
//               <a 
//                 href="#client-login" 
//                 className="login-option"
//                 onClick={() => handleOptionClick("Client")}
//               >
//                 Client Login
//               </a>
//               <a 
//                 href="#employee-login" 
//                 className="login-option"
//                 onClick={() => handleOptionClick("Employee")}
//               >
//                 Employee Login
//               </a>
//               <a 
//                 href="#professional-login" 
//                 className="login-option"
//                 onClick={() => handleOptionClick("Professional")}
//               >
//                 Professional Login
//               </a>
//             </div>
//           </div>
//         </nav>
//       </header>
//       {/* Add a spacer div to prevent content from being hidden behind the fixed header */}
//       <div className="header-spacer"></div>
//     </>
//   );
// };

// export default Header;


import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [festivalMode, setFestivalMode] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const festivalWaveRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLoginOptions(false);
      }
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

  // Festival mode effect
  useEffect(() => {
    if (festivalMode) {
      startFestivalAnimation();
      const timer = setTimeout(() => {
        setFestivalMode(false);
      }, 10000); // Festival mode lasts for 10 seconds
      return () => clearTimeout(timer);
    }
  }, [festivalMode]);

  const startFestivalAnimation = () => {
    // Create festival wave elements
    createFestivalWave();
  };

  const createFestivalWave = () => {
    const waveContainer = festivalWaveRef.current;
    if (!waveContainer) return;

    // Clear previous waves
    waveContainer.innerHTML = '';

    // Create multiple waves with different colors and timings
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const waveCount = 5;
    
    for (let i = 0; i < waveCount; i++) {
      const wave = document.createElement('div');
      wave.className = 'festival-wave';
      wave.style.backgroundColor = colors[i % colors.length];
      wave.style.height = `${Math.random() * 100 + 50}px`;
      wave.style.top = `${Math.random() * 50}%`;
      wave.style.animationDelay = `${i * 0.5}s`;
      
      waveContainer.appendChild(wave);
    }
  };

  const handleLoginClick = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  const handleOptionClick = (userType) => {
    console.log(`${userType} login clicked`);
    setShowLoginOptions(false);
    setMobileMenuOpen(false);
    // Activate festival mode when any login option is clicked
    setFestivalMode(true);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setShowLoginOptions(false);
  };

  return (
    <>
      <header className={`header ${festivalMode ? 'festival-mode' : ''}`}>
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
            <li className="nav-item">
              <a 
                href="/interview" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                INTERVIEW
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </a>
            </li>
          </ul>
          
          <div className="login-container" ref={dropdownRef}>
            <button 
              className="login-button"
              onClick={handleLoginClick}
            >
              LOGIN
            </button>
            <div 
              className={`login-dropdown ${showLoginOptions ? 'visible' : ''}`}
              onMouseLeave={() => !mobileMenuOpen && setShowLoginOptions(false)}
            >
              <a 
                href="#admin-login" 
                className="login-option"
                onClick={() => handleOptionClick("Admin")}
              >
                Admin Login
              </a>
              <a 
                href="#client-login" 
                className="login-option"
                onClick={() => handleOptionClick("Client")}
              >
                Client Login
              </a>
              <a 
                href="#employee-login" 
                className="login-option"
                onClick={() => handleOptionClick("Employee")}
              >
                Employee Login
              </a>
              <a 
                href="#professional-login" 
                className="login-option"
                onClick={() => handleOptionClick("Professional")}
              >
                Professional Login
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* Add a spacer div to prevent content from being hidden behind the fixed header */}
      <div className="header-spacer"></div>
      {/* Festival wave container */}
      <div className="festival-wave-container" ref={festivalWaveRef}></div>
    </>
  );
};

export default Header;