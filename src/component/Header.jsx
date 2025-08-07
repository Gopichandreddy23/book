import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLoginOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        padding: '1rem',
        position: 'relative' // You might want to keep it fixed on mobile too
      }
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      '@media (max-width: 768px)': {
        marginBottom: '1rem'
      }
    },
    logoImage: {
      height: '70px',
      width: 'auto'
    },
    companyName: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#333333'
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        width: '100%'
      }
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        marginBottom: '1rem'
      }
    },
    navItem: {
      margin: '0 1rem',
      position: 'relative',
      transition: 'transform 0.3s ease',
      '@media (max-width: 768px)': {
        margin: '0.5rem 0',
        width: '100%',
        textAlign: 'center'
      }
    },
    navLink: {
      textDecoration: 'none',
      color: '#333333',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      padding: '0.5rem 0',
      display: 'block',
      '&:hover': {
        color: '#007bff',
        transform: 'translateY(-2px)'
      }
    },
    loginContainer: {
      position: 'relative',
      '@media (max-width: 768px)': {
        width: '100%',
        textAlign: 'center'
      }
    },
    loginButton: {
      padding: '0.5rem 1rem',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)'
      }
    },
    loginDropdown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: 'white',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      borderRadius: '4px',
      padding: '0.5rem 0',
      minWidth: '180px',
      zIndex: 1000,
      opacity: showLoginOptions ? 1 : 0,
      visibility: showLoginOptions ? 'visible' : 'hidden',
      transform: showLoginOptions ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'all 0.3s ease',
      '@media (max-width: 768px)': {
        right: 'auto',
        left: '50%',
        transform: showLoginOptions ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)'
      }
    },
    loginOption: {
      padding: '0.75rem 1.5rem',
      display: 'block',
      color: '#333',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#f0f7ff',
        color: '#007bff',
        paddingLeft: '1.75rem'
      }
    },
    // Add this to create space for the fixed header
    spacer: {
      height: '90px', // Adjust based on your header height
      '@media (max-width: 768px)': {
        height: 'auto'
      }
    }
  };

  const handleLoginClick = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  const handleOptionClick = (userType) => {
    console.log(`${userType} login clicked`);
    setShowLoginOptions(false);
  };

  // Convert style object to inline styles with media queries
  const getStyle = (styleObj) => {
    const baseStyle = {};
    const mediaStyles = {};
    
    Object.keys(styleObj).forEach(key => {
      if (key.startsWith('@media')) {
        mediaStyles[key] = styleObj[key];
      } else {
        baseStyle[key] = styleObj[key];
      }
    });
    
    return baseStyle;
  };

  return (
    <>
      <header style={getStyle(styles.header)}>
        <div style={getStyle(styles.logoContainer)}>
          <img 
            src="/tech.jpg" 
            alt="Company Logo" 
            style={getStyle(styles.logoImage)}
          />
          <div style={getStyle(styles.companyName)}>TECH BOOKS</div>
        </div>
        
        <nav style={getStyle(styles.navbar)}>
          <ul style={getStyle(styles.navLinks)}>
            <li style={getStyle(styles.navItem)}>
              <a href="/" style={getStyle(styles.navLink)}>HOME</a>
            </li>
            <li style={getStyle(styles.navItem)}>
              <a href="/book" style={getStyle(styles.navLink)}>BOOKS</a>
            </li>
            {/* <li style={getStyle(styles.navItem)}>
              <a href="#Services" style={getStyle(styles.navLink)}>SERVICES</a>
            </li> */}
            <li style={getStyle(styles.navItem)}>
              <a href="/practice" style={getStyle(styles.navLink)}>PRATICE</a>
            </li>
            <li style={getStyle(styles.navItem)}>
              <a href="/interview" style={getStyle(styles.navLink)}>INTERVIEW</a>
            </li>
            <li style={getStyle(styles.navItem)}>
              <a href="#contact" style={getStyle(styles.navLink)}>CONTACT</a>
            </li>
          </ul>
          
          <div style={getStyle(styles.loginContainer)} ref={dropdownRef}>
            {/* <button 
              style={getStyle(styles.loginButton)} 
              onClick={handleLoginClick}
              onMouseEnter={() => setShowLoginOptions(true)}
            >
              LOGIN
            </button> */}
            
            <div 
              style={getStyle(styles.loginDropdown)}
              onMouseLeave={() => setShowLoginOptions(false)}
            >
              <a 
                href="#admin-login" 
                style={getStyle(styles.loginOption)}
                onClick={() => handleOptionClick("Admin")}
              >
                Admin Login
              </a>
              <a 
                href="#client-login" 
                style={getStyle(styles.loginOption)}
                onClick={() => handleOptionClick("Client")}
              >
                Client Login
              </a>
              <a 
                href="#employee-login" 
                style={getStyle(styles.loginOption)}
                onClick={() => handleOptionClick("Employee")}
              >
                Employee Login
              </a>
              <a 
                href="#professional-login" 
                style={getStyle(styles.loginOption)}
                onClick={() => handleOptionClick("Professional")}
              >
                Professional Login
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* Add a spacer div to prevent content from being hidden behind the fixed header */}
      <div style={getStyle(styles.spacer)}></div>
    </>
  );
};

export default Header;