import React from 'react';
import { motion } from 'framer-motion';
import './Java.css';

const Java = () => {
  const cards = [
    {
      id: 1,
      title: 'Core Java',
      description:
        'Provides the basic building blocks of Java like OOP, multithreading, and exception handling. Ideal for developing standalone and backend applications.',
      image: '/corejava.jpg',
      link: '/javapdf'
    },
    {
      id: 2,
      title: 'Advance Java',
      description:
        'Focuses on web and enterprise application development using Servlets, JSP, and JDBC. Helps build dynamic, data-driven websites and APIs.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/advpdf'
    },
    {
      id: 3,
      title: 'Spring & Spring Boot',
      description:
        'Spring and Spring Boot simplify backend development by enabling RESTful APIs, dependency injection, and seamless integration with SQL and NoSQL databases.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/spring'
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
    <div className="java-app">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="java-title"
      >
        Java Technology
      </motion.h1>

      <div className="java-card-container">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="java-card"
            onClick={() => handleCardClick(card.link)}
          >
            <div className="java-card-image">
              <motion.img 
                src={card.image} 
                alt={card.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="java-image"
              />
            </div>
            <div className="java-card-content">
              <h3 className="java-card-title">{card.title}</h3>
              <p className="java-card-desc">{card.description}</p>
              <div className="java-link-badge">
                Learn More
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Java;