import React from 'react';
import { motion } from 'framer-motion';

const Node = () => {
  const cards = [
    {
      id: 1,
      title: 'Node Js',
      description:
        'Node.js is a runtime environment that allows you to run JavaScript on the server side, enabling fast and scalable network applications.',
      image: '/nodejs.jpg',
      link: 'https://www.oracle.com/java/technologies/javase-overview.html'
    },
    {
      id: 2,
      title: 'Express Js',
      description:
        'Express.js is a minimal and flexible Node.js web application framework that simplifies building web APIs and servers.',
      image: '/express.jpg',
      link: 'https://www.geeksforgeeks.org/advanced-java/'
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
        Node Js Technology
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

export default Node;