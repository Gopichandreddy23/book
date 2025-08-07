import React from 'react';

export const HeroSection = () => {
  return (
    <div style={styles.heroSection}>
      <div style={styles.textContainer}>
        <h2 style={{ ...styles.h2, ...styles.fadeIn }}>The Smartest Way to Learn Skills That Matter</h2>
        <p style={{ ...styles.p, ...styles.fadeIn, animationDelay: '0.5s' }}>
         Learn anytime, anywhere.
        </p>
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '40px',
  },
  textContainer: {
    maxWidth: '800px',
    padding:"170px"
  },
  h2: {
    fontSize: '46px',
    color: '#0D47A1',
    fontWeight: '700',
    marginBottom: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    opacity: 0,
  },
  p: {
    fontSize: '23px',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '30px',
    fontFamily: 'Open Sans, sans-serif',
    opacity: 0.3,
  },
  fadeIn: {
    animation: 'fadeInLeft 1s ease-out forwards',
  },
};

// Add keyframes to your global CSS
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
