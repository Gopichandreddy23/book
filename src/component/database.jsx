import React from 'react';
import { motion } from 'framer-motion';
import './Database.css';

const Database = () => {
  const cards = [
    {
      id: 1,
      title: 'MySql',
      description: 'MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage data in tables with rows and columns.',
      image: '/mysql.jpg',
      link: '/mysqlpdf'
    },
    {
      id: 2,
      title: 'Oracle',
      description: 'Oracle Database is a powerful enterprise-grade RDBMS known for its performance, security, and scalability for mission-critical applications.',
      image: '/oracle.jpg',
      link: '/oraclepdf'
    },
    {
      id: 3,
      title: 'Mango Db',
      description: 'MongoDB is a NoSQL, document-based database that stores data in flexible, JSON-like documents instead of tables.',
      image: '/mangodb.jpg',
      link: '/mongopdf'
    }
  ];

  const handleCardClick = (link) => {
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
    <div className="app">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        Database Technology
      </motion.h1>

      <div className="cardContainer">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="card"
            onClick={() => handleCardClick(card.link)}
          >
            <div className="cardImage">
              <motion.img 
                src={card.image} 
                alt={card.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="image"
              />
            </div>
            <div className="cardContent">
              <h3 className="cardTitle">{card.title}</h3>
              <p className="cardDesc">{card.description}</p>
              <div className="linkBadge">
                Learn More
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Database;