import React, { useState } from 'react';
import './BootstrapPractice.css';

const BootstrapPracticeApp = () => {
  const [activeTopic, setActiveTopic] = useState('layout');
  const [showSolutions, setShowSolutions] = useState({});
  const [showCodeExamples, setShowCodeExamples] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // All practice questions organized by topic
  const topics = {
    layout: {
      name: "Layout",
      questions: [
        {
          id: 1,
          question: "Create a responsive container that becomes full-width on small screens and has max-width on larger screens.",
          difficulty: "Beginner",
          solutionHint: "Use Bootstrap's .container class which automatically handles responsive behavior.",
          codeExample: `<div class="container">
  <!-- Your content here -->
</div>`
        },
        {
          id: 2,
          question: "Implement a grid layout with three equal-width columns that stack vertically on mobile devices.",
          difficulty: "Beginner",
          solutionHint: "Use .row with .col-sm (or similar) classes to create responsive columns.",
          codeExample: `<div class="row">
  <div class="col-sm">Column 1</div>
  <div class="col-sm">Column 2</div>
  <div class="col-sm">Column 3</div>
</div>`
        },
        // ... other layout questions ...
      ]
    },
    content: {
      name: "Content",
      questions: [
        {
          id: 1,
          question: "Style a heading with Bootstrap's typography classes to make it display as a muted secondary heading.",
          difficulty: "Beginner",
          solutionHint: "Use classes like .text-muted and .h2 (or similar heading classes).",
          codeExample: `<h2 class="text-muted">Secondary Heading</h2>`
        },
        // ... other content questions ...
      ]
    },
    components: {
      name: "Components",
      questions: [
        {
          id: 1,
          question: "Create a navigation bar with brand logo, links, and a dropdown menu that collapses on mobile.",
          difficulty: "Intermediate",
          solutionHint: "Use .navbar with .navbar-brand, .navbar-nav, .dropdown, and .navbar-toggler for mobile.",
          codeExample: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`
        },
        // ... other component questions ...
      ]
    },
    forms: {
      name: "Forms",
      questions: [
        {
          id: 1,
          question: "Create a basic form with text input, checkbox, and submit button with proper Bootstrap styling.",
          difficulty: "Beginner",
          solutionHint: "Use .form-control on inputs, .form-check for checkboxes, and .btn for the submit button.",
          codeExample: `<form>
  <div class="mb-3">
    <label for="exampleInput" class="form-label">Text input</label>
    <input type="text" class="form-control" id="exampleInput">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck">
    <label class="form-check-label" for="exampleCheck">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`
        },
        // ... other form questions ...
      ]
    },
    utilities: {
      name: "Utilities",
      questions: [
        {
          id: 1,
          question: "Create a responsive margin and padding system that changes based on screen size.",
          difficulty: "Beginner",
          solutionHint: "Use Bootstrap's spacing utilities like .mt-sm-3, .px-lg-5, etc.",
          codeExample: `<div class="mt-3 mt-md-5 mb-2 mb-lg-4 p-1 p-sm-3">
  Content with responsive spacing
</div>`
        },
        // ... other utility questions ...
      ]
    },
    helpers: {
      name: "Helpers",
      questions: [
        {
          id: 1,
          question: "Implement a clearfix helper to properly contain floated elements.",
          difficulty: "Beginner",
          solutionHint: "Use .clearfix class on the parent container of floated elements.",
          codeExample: `<div class="clearfix">
  <div class="float-start">Floated left</div>
  <div class="float-end">Floated right</div>
</div>`
        },
        // ... other helper questions ...
      ]
    }
  };

  // Filter questions based on search term
  const filteredQuestions = topics[activeTopic].questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (q.solutionHint && q.solutionHint.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Toggle solution visibility
  const toggleSolution = (topic, id) => {
    setShowSolutions(prev => ({
      ...prev,
      [`${topic}-${id}`]: !prev[`${topic}-${id}`]
    }));
  };

  // Toggle code example visibility
  const toggleCodeExample = (topic, id) => {
    setShowCodeExamples(prev => ({
      ...prev,
      [`${topic}-${id}`]: !prev[`${topic}-${id}`]
    }));
  };

  return (
    <div className="bootstrap-practice-app">
      <header className="bg-primary text-white py-4 mb-4">
        <div className="container">
          <h1 className="display-4 mb-3">Bootstrap Practice</h1>
          
          <nav className="nav nav-pills justify-content-center">
            {Object.keys(topics).map(topic => (
              <button 
                key={topic}
                className={`nav-link mx-1 ${activeTopic === topic ? 'active bg-white text-primary' : 'text-white'}`}
                onClick={() => setActiveTopic(topic)}
              >
                {topics[topic].name}
              </button>
            ))}
          </nav>
          
          <div className="mt-3">
            <input
              type="text"
              placeholder={`Search ${topics[activeTopic].name} questions...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
      </header>

      <main className="container">
        <div className="questions-container">
          <h2 className="text-center mb-4">
            {topics[activeTopic].name} Questions
            <span className="badge bg-secondary ms-2">{filteredQuestions.length}</span>
          </h2>
          
          {filteredQuestions.length === 0 ? (
            <div className="alert alert-info">
              No questions match your search criteria.
            </div>
          ) : (
            <div className="row row-cols-1 g-4">
              {filteredQuestions.map(q => {
                const questionKey = `${activeTopic}-${q.id}`;
                
                return (
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
                      <div className="card-footer">
                        <div className="d-flex gap-2 mb-2">
                          <button 
                            className={`btn btn-sm ${
                              showSolutions[questionKey] ? 'btn-outline-primary' : 'btn-primary'
                            }`}
                            onClick={() => toggleSolution(activeTopic, q.id)}
                          >
                            {showSolutions[questionKey] ? 'Hide Hint' : 'Show Hint'}
                          </button>
                          
                          {q.codeExample && (
                            <button 
                              className={`btn btn-sm ${
                                showCodeExamples[questionKey] ? 'btn-outline-secondary' : 'btn-secondary'
                              }`}
                              onClick={() => toggleCodeExample(activeTopic, q.id)}
                            >
                              {showCodeExamples[questionKey] ? 'Hide Code' : 'Show Code'}
                            </button>
                          )}
                        </div>
                        
                        {showSolutions[questionKey] && (
                          <div className="alert alert-info mb-2">
                            <strong>Hint:</strong> {q.solutionHint}
                          </div>
                        )}
                        
                        {showCodeExamples[questionKey] && q.codeExample && (
                          <pre className="p-3 rounded bg-light">
                            <code>{q.codeExample}</code>
                          </pre>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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