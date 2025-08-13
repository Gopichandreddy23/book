import React from 'react';
import { motion } from 'framer-motion';
import './Frontend.css';

const Frontend = () => {
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
    },
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
      link: '/reactpdf'
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
      link: 'reactpdf'
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
        Frontend Technology
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

export default Frontend;