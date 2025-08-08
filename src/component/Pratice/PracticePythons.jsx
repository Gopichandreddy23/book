import React from 'react';
import { motion } from 'framer-motion';

const PraPython = () => {
  const cards = [
    {
      id: 1,
      title: 'Core Python',
      description:
        'Basic Python programming concepts like data types, loops, functions, and OOP used for writing simple scripts and applications.',
      image: '/corepython.jpg',
      link: '/practicepython'
    },
    {
      id: 2,
      title: 'Advance Python',
      description:
        'Covers complex features like decorators, generators, multithreading, and APIs for building efficient and scalable Python programs.',
      image: '/advancepython.jpg',
      link: '/practiceadvancepython'
    },
    {
      id: 3,
      title: 'Django',
      description:
        'A high-level Python web framework used to build secure, fast, and scalable web applications with built-in admin and ORM support.',
      image: '/django.jpg',
      link: '/practicedjango'
    }
  ];

  const handleCardClick = (link) => {
    window.location.href = link; // Changed from window.open to navigate in same tab
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div style={styles.app}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.title}
      >
        Python Technology
      </motion.h1>

      <div style={styles.cardContainer}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            style={styles.card}
            onClick={() => handleCardClick(card.link)}
          >
            <div style={styles.cardImage}>
              <motion.img 
                src={card.image} 
                alt={card.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={styles.image}
              />
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDesc}>{card.description}</p>
              <div style={styles.linkBadge}>
                Learn More
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  app: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '40px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px',
    marginBottom: '40px'
  },
  card: {
    width: '320px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer'
  },
  cardImage: {
    height: '200px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  cardContent: {
    padding: '20px',
    position: 'relative'
  },
  cardTitle: {
    marginTop: '0',
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '10px'
  },
  cardDesc: {
    color: '#666',
    marginBottom: '15px',
    fontSize: '1rem',
    lineHeight: '1.5'
  },
  linkBadge: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  }
};

export default PraPython;