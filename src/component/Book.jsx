import React from 'react';
import { motion } from 'framer-motion';
import './Book.css';

const BookItCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Backend',
      description: 'Server-side development with Node, Python, Java etc.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/backend'
    },
    {
      id: 2,
      title: 'Frontend',
      description: 'Client-side technologies like React, Vue, Angular',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/frontend'
    },
    {
      id: 3,
      title: 'Database',
      description: 'SQL, NoSQL, and data storage solutions',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/database'
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
    <div className="bookit-app">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bookit-title"
      >
        Book IT - Tech Learning
      </motion.h1>

      <div className="bookit-card-container">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="bookit-card"
            onClick={() => handleCardClick(card.link)}
          >
            <div className="bookit-card-image">
              <motion.img 
                src={card.image} 
                alt={card.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bookit-image"
              />
            </div>
            <div className="bookit-card-content">
              <h3 className="bookit-card-title">{card.title}</h3>
              <p className="bookit-card-desc">{card.description}</p>
              <div className="bookit-link-badge">
                Learn More
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookItCards;