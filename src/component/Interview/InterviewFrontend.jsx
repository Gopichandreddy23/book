import React from 'react';
import { motion } from 'framer-motion';

const InterviewFrontend = () => {
  const cards = [
    {
      id: 1,
      title: 'HTML',
      description:
        `HTML Elements & Tags

Headings, Paragraphs, Lists

Links, Images, Tables

Forms & Input Elements

Semantic HTML5

Multimedia (Audio/Video)

Meta Tags & SEO Basics`,
      image: '/html.jpg',
      link: 'https://www.oracle.com/java/technologies/javase-overview.html'
    },
    {
      id: 2,
      title: 'CSS',
      description:
        `Selectors & Properties

Box Model

Flexbox & Grid

Positioning & Z-index

Colors, Gradients, Shadows

Transitions & Animations

Media Queries & Responsive Design`,
      image: '/css.jpg',
      link: 'https://www.geeksforgeeks.org/advanced-java/'
    },
    {
      id: 3,
      title: 'Java Script',
      description:
        `Variables, Data Types

Operators & Expressions

Functions & Scope

Loops & Conditionals

DOM Manipulation

Events & Event Listeners

Arrays & Objects

ES6+ Features (let/const, arrow functions, destructuring)

Promises & Async/Await

Fetch API / AJAX

Error Handling`,
      image: '/js.jpg',
      link: 'https://spring.io/projects/spring-boot'
    }
    ,
    {
      id: 4,
      title: 'BootStrap',
      description:
        `Grid System

Typography & Utilities

Buttons, Alerts, Cards

Navbar & Navigation

Forms & Inputs

Modal, Carousel, Collapse

Responsive Utilities

Bootstrap Icons`,
      image: '/bootstrap.jpg',
      link: 'https://spring.io/projects/spring-boot'
    },
    {
      id: 4,
      title: 'Type Script',
      description:
        `Basic Types & Interfaces

Type Inference & Annotations

Functions & Generics

Classes & Inheritance

Enums & Tuples

Type Narrowing

Modules & Namespaces

TypeScript with React / Node.js`,
      image: '/typescript.jpg',
      link: 'https://spring.io/projects/spring-boot'
    },
    {
      id: 5,
      title: 'React Js',
      description:
       `Components (Class & Functional)

JSX Syntax

Props & State

Hooks (useState, useEffect, etc.)

Event Handling

Forms in React

Conditional Rendering

Lists & Keys

Routing (React Router)

Context API

Redux (State Management)

React with TypeScript (Optional Advanced)`,
      image: '/react.jpg',
      link: 'https://spring.io/projects/spring-boot'
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
        Frontend Technology Interview
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

export default InterviewFrontend;