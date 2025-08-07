import React from 'react';
import { motion } from 'framer-motion';

const Database = () => {
  const cards = [
    {
      id: 1,
      title: 'MySql',
      description: 'MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage data in tables with rows and columns.',
      image: '/mysql.jpg',
      link: '/mysql'
    },
    {
      id: 2,
      title: 'Oracle',
      description: 'Oracle Database is a powerful enterprise-grade RDBMS known for its performance, security, and scalability for mission-critical applications.',
      image: '/oracle.jpg',
      link: '/oracle'
    },
    {
      id: 3,
      title: 'Mango Db',
      description: 'MongoDB is a NoSQL, document-based database that stores data in flexible, JSON-like documents instead of tables.',
      image: '/mangodb.jpg',
      link: '/mangodb'
    }
  ];

  const handleCardClick = (link) => {
    // This will navigate within the same tab
    window.location.href = link;
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
        Backend Technology
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

export default Database;