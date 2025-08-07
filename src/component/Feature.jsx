import React, { useState, useEffect } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "Strategic Analysis and Planning",
      description: "Utilize advanced analytical tools and industry expertise to conduct comprehensive market analysis and develop tailored strategic plans for clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      title: "Financial Management Consulting",
      description: "Provide holistic financial management consulting services, including budgeting, cash flow management, and financial forecasting.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      title: "Creative Advertisement Campaigns",
      description: "Develop and execute innovative advertisement campaigns that leverage data-driven insights and creative storytelling.",
      image: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
    },
    {
      title: "Measurable Results and Performance Tracking",
      description: "Implement robust performance tracking mechanisms and analytics tools to measure effectiveness and demonstrate ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div style={styles.container} id="features">
      <h2 style={styles.heading}>
        FEATURES
      </h2>
      
      <div style={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              ...styles.featureCard,
              borderTop: activeFeature === index ? '4px solid #4299e1' : '4px solid transparent',
              transform: activeFeature === index ? 'scale(1.05)' : 'scale(1)',
              boxShadow: activeFeature === index ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            onClick={() => setActiveFeature(index)}
          >
            <div 
              style={{
                ...styles.imageContainer,
                transform: activeFeature === index ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                style={styles.featureImage}
                loading="lazy"
              />
            </div>
            
            <h3 style={styles.featureTitle}>
              {feature.title}
            </h3>
            
            <p
              style={{
                ...styles.featureDescription,
                display: activeFeature === index ? 'block' : 'none'
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '5rem 2rem',
    backgroundColor: '#f8fafc',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    fontWeight: '700',
    color: '#2d3748',
    position: 'relative',
    display: 'inline-block',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '0 1rem',
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  imageContainer: {
    width: '120px',
    height: '120px',
    margin: '0 auto 1.5rem',
    borderRadius: '50%',
    backgroundColor: '#ebf8ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  },
  featureImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  featureTitle: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    fontWeight: '600',
    color: '#2d3748',
  },
  featureDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#4a5568',
    overflow: 'hidden',
  },
};

export default Features;