import React, { useState } from 'react';
import './Bootstrap.css';
const BootstrapPracticeApp = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('layout');
  
  // All practice questions organized by topic
  const questionsByTopic = {
    layout: [
      {
        id: 1,
        question: "Create a responsive container that becomes full-width on small screens and has max-width on larger screens.",
        difficulty: "Beginner",
        solutionHint: "Use Bootstrap's .container class which automatically handles responsive behavior."
      },
      {
        id: 2,
        question: "Implement a grid layout with three equal-width columns that stack vertically on mobile devices.",
        difficulty: "Beginner",
        solutionHint: "Use .row with .col-sm (or similar) classes to create responsive columns."
      },
      {
        id: 3,
        question: "Create a layout with a sidebar (25% width) and main content (75% width) that stacks vertically on mobile.",
        difficulty: "Intermediate",
        solutionHint: "Use grid classes like .col-md-3 and .col-md-9 with appropriate responsive breakpoints."
      },
      {
        id: 4,
        question: "Implement a sticky footer that stays at the bottom of the viewport when content is short.",
        difficulty: "Intermediate",
        solutionHint: "Use Bootstrap's flexbox utilities with .d-flex, .flex-column, and .mt-auto on the footer."
      },
      {
        id: 5,
        question: "Create a complex nested grid with multiple rows and columns that reflow appropriately on different screen sizes.",
        difficulty: "Advanced",
        solutionHint: "Nest .row and .col-* classes, using appropriate responsive prefixes for each level."
      }
    ],
    content: [
      {
        id: 1,
        question: "Style a heading with Bootstrap's typography classes to make it display as a muted secondary heading.",
        difficulty: "Beginner",
        solutionHint: "Use classes like .text-muted and .h2 (or similar heading classes)."
      },
      {
        id: 2,
        question: "Create a responsive image that scales with its parent and has rounded corners.",
        difficulty: "Beginner",
        solutionHint: "Use .img-fluid for responsiveness and .rounded for corner styling."
      },
      {
        id: 3,
        question: "Implement a blockquote with proper Bootstrap styling including a citation source.",
        difficulty: "Intermediate",
        solutionHint: "Use .blockquote with .blockquote-footer for the citation."
      },
      {
        id: 4,
        question: "Create a list group with active and disabled items, with badges showing counts.",
        difficulty: "Intermediate",
        solutionHint: "Combine .list-group with .list-group-item, .active, .disabled classes and .badge."
      },
      {
        id: 5,
        question: "Style a table with striped rows, hover effects, and responsive behavior.",
        difficulty: "Beginner",
        solutionHint: "Use .table with .table-striped, .table-hover, and wrap in .table-responsive."
      }
    ],
    components: [
      {
        id: 1,
        question: "Create a navigation bar with brand logo, links, and a dropdown menu that collapses on mobile.",
        difficulty: "Intermediate",
        solutionHint: "Use .navbar with .navbar-brand, .navbar-nav, .dropdown, and .navbar-toggler for mobile."
      },
      {
        id: 2,
        question: "Implement a card component with an image, title, text, and button in the footer.",
        difficulty: "Beginner",
        solutionHint: "Use .card with .card-img-top, .card-body, .card-title, .card-text, and .card-footer."
      },
      {
        id: 3,
        question: "Create a modal dialog with a header, body, and footer containing action buttons.",
        difficulty: "Intermediate",
        solutionHint: "Use .modal with .modal-dialog, .modal-content, .modal-header, .modal-body, and .modal-footer."
      },
      {
        id: 4,
        question: "Build a carousel with indicators, controls, and captions on each slide.",
        difficulty: "Intermediate",
        solutionHint: "Use .carousel with .carousel-indicators, .carousel-control-prev/next, and .carousel-caption."
      },
      {
        id: 5,
        question: "Create an accordion component where only one item can be open at a time.",
        difficulty: "Intermediate",
        solutionHint: "Use .accordion with data-bs-parent attribute to create a proper accordion behavior."
      }
    ],
    forms: [
      {
        id: 1,
        question: "Create a basic form with text input, checkbox, and submit button with proper Bootstrap styling.",
        difficulty: "Beginner",
        solutionHint: "Use .form-control on inputs, .form-check for checkboxes, and .btn for the submit button."
      },
      {
        id: 2,
        question: "Implement a form with floating labels and validation styling for required fields.",
        difficulty: "Intermediate",
        solutionHint: "Use .form-floating for floating labels and .is-valid/.is-invalid for validation states."
      },
      {
        id: 3,
        question: "Create a horizontal form layout with labels and inputs aligned in a grid.",
        difficulty: "Intermediate",
        solutionHint: "Use .row and .col-* classes on form groups to create horizontal alignment."
      },
      {
        id: 4,
        question: "Build a custom file upload input with a styled button and filename display.",
        difficulty: "Advanced",
        solutionHint: "Use .form-file with custom styling or Bootstrap's custom file input component."
      },
      {
        id: 5,
        question: "Implement a range input with custom styling and a tooltip showing the current value.",
        difficulty: "Advanced",
        solutionHint: "Use .form-range and JavaScript to update a tooltip as the value changes."
      }
    ],
    utilities: [
      {
        id: 1,
        question: "Create a responsive margin and padding system that changes based on screen size.",
        difficulty: "Beginner",
        solutionHint: "Use Bootstrap's spacing utilities like .mt-sm-3, .px-lg-5, etc."
      },
      {
        id: 2,
        question: "Implement a responsive display utility that shows an element only on medium and larger screens.",
        difficulty: "Beginner",
        solutionHint: "Use .d-none with .d-md-block to control visibility across breakpoints."
      },
      {
        id: 3,
        question: "Create a flexbox layout with items that wrap, have space between them, and center vertically.",
        difficulty: "Intermediate",
        solutionHint: "Combine .d-flex, .flex-wrap, .justify-content-between, and .align-items-center."
      },
      {
        id: 4,
        question: "Style an element with responsive borders that change color and thickness at different breakpoints.",
        difficulty: "Intermediate",
        solutionHint: "Use border utilities like .border, .border-primary, and responsive variants."
      },
      {
        id: 5,
        question: "Create a responsive embed container for a 16:9 video that maintains aspect ratio.",
        difficulty: "Beginner",
        solutionHint: "Use .ratio with .ratio-16x9 class for proper responsive embeds."
      }
    ],
    helpers: [
      {
        id: 1,
        question: "Implement a clearfix helper to properly contain floated elements.",
        difficulty: "Beginner",
        solutionHint: "Use .clearfix class on the parent container of floated elements."
      },
      {
        id: 2,
        question: "Create a visually hidden element that remains accessible to screen readers.",
        difficulty: "Beginner",
        solutionHint: "Use .visually-hidden class for elements that should be hidden but remain accessible."
      },
      {
        id: 3,
        question: "Add a colored badge that appears as a notification counter in the top-right corner of an icon.",
        difficulty: "Intermediate",
        solutionHint: "Use .position-relative on the parent and .position-absolute with positioning utilities on the badge."
      },
      {
        id: 4,
        question: "Implement text truncation with an ellipsis for multi-line text in a fixed-height container.",
        difficulty: "Advanced",
        solutionHint: "Combine .text-truncate with custom line clamping (requires additional CSS in Bootstrap 5)."
      },
      {
        id: 5,
        question: "Create a sticky element that becomes fixed after scrolling past a certain point.",
        difficulty: "Intermediate",
        solutionHint: "Use .sticky-top class combined with proper z-index and positioning context."
      }
    ]
  };

  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});

  const toggleSolution = (topic, id) => {
    setShowSolutions(prev => ({
      ...prev,
      [`${topic}-${id}`]: !prev[`${topic}-${id}`]
    }));
  };

  return (
    <div className="bootstrap-practice-app">
      <header className="bg-primary text-white py-4 mb-4 rounded">
        <div className="container">
          <h1 className="display-4">Bootstrap Practice Questions</h1>
          <nav className="nav nav-pills justify-content-center">
            {Object.keys(questionsByTopic).map(topic => (
              <button 
                key={topic}
                className={`nav-link mx-1 ${activeTopic === topic ? 'active bg-white text-primary' : 'text-white'}`}
                onClick={() => setActiveTopic(topic)}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="questions-container">
          <h2 className="mb-4 text-center">
            <span className="badge bg-secondary p-3">
              {activeTopic.charAt(0).toUpperCase() + activeTopic.slice(1)} Questions
            </span>
          </h2>
          <div className="row row-cols-1 g-4">
            {questionsByTopic[activeTopic].map(q => (
              <div key={q.id} className="col">
                <div className="card shadow-sm h-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Question {q.id}</span>
                    <span className={`badge ${
                      q.difficulty === 'Beginner' ? 'bg-success' : 
                      q.difficulty === 'Intermediate' ? 'bg-warning text-dark' : 'bg-danger'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{q.question}</p>
                  </div>
                  <div className="card-footer bg-transparent">
                    <button 
                      className={`btn btn-sm ${
                        showSolutions[`${activeTopic}-${q.id}`] ? 'btn-outline-primary' : 'btn-primary'
                      }`}
                      onClick={() => toggleSolution(activeTopic, q.id)}
                    >
                      {showSolutions[`${activeTopic}-${q.id}`] ? 'Hide Hint' : 'Show Hint'}
                    </button>
                    
                    {showSolutions[`${activeTopic}-${q.id}`] && (
                      <div className="alert alert-info mt-3 mb-0">
                        <strong>Hint:</strong> {q.solutionHint}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-5 py-4 bg-light">
        <div className="container text-center">
          <p className="mb-0">Bootstrap Practice App &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default BootstrapPracticeApp;