import React from 'react';
import './Herosection.css';

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text-container">
        <h2 className="hero-h2 fade-in">The Smartest Way to Learn Skills That Matter</h2>
        <p className="hero-p fade-in" style={{ animationDelay: '0.5s' }}>
          Learn anytime, anywhere.
        </p>
      </div>
    </div>
  );
};