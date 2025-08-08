import React, { useState } from 'react';

const HtmlPracticeApp = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basic');
  
  // All practice questions organized by topic
  const questionsByTopic = {
    basic: [
      {
        id: 1,
        question: "Create a basic HTML5 document structure with proper DOCTYPE, head, and body sections.",
        difficulty: "Beginner",
        solutionHint: "Use <!DOCTYPE html> declaration and include html, head, title, and body tags."
      },
      {
        id: 2,
        question: "Build a simple webpage with headings (h1-h6), paragraphs, and line breaks.",
        difficulty: "Beginner",
        solutionHint: "Use heading tags <h1> to <h6> and <p> for paragraphs, <br> for line breaks."
      },
      {
        id: 3,
        question: "Create an HTML page with different text formatting elements: bold, italic, underline, superscript, and subscript.",
        difficulty: "Beginner",
        solutionHint: "Use <b>, <i>, <u>, <sup>, and <sub> tags for formatting."
      },
      {
        id: 4,
        question: "Design a webpage with horizontal rules and preformatted text.",
        difficulty: "Beginner",
        solutionHint: "Use <hr> for horizontal rules and <pre> for preformatted text."
      },
      {
        id: 5,
        question: "Create an HTML page that displays special characters like ©, ®, €, and ♥.",
        difficulty: "Beginner",
        solutionHint: "Use HTML entities like &copy;, &reg;, &euro;, and &hearts;."
      }
    ],
    links: [
      {
        id: 1,
        question: "Create a webpage with different types of links: external, internal, email, and telephone links.",
        difficulty: "Beginner",
        solutionHint: "Use <a> tag with href attribute for all links. For email use mailto:, for tel use tel:."
      },
      {
        id: 2,
        question: "Build a navigation menu with links to different sections of the same page using anchor tags.",
        difficulty: "Intermediate",
        solutionHint: "Use id attributes on sections and link to them with # in href."
      },
      {
        id: 3,
        question: "Create a link that opens in a new tab and has a tooltip when hovered.",
        difficulty: "Beginner",
        solutionHint: "Use target='_blank' and title attribute in the <a> tag."
      },
      {
        id: 4,
        question: "Implement a download link for a PDF file with a custom filename.",
        difficulty: "Intermediate",
        solutionHint: "Use <a> tag with download attribute and specify the filename."
      },
      {
        id: 5,
        question: "Create a button that links to another page without using JavaScript.",
        difficulty: "Beginner",
        solutionHint: "Wrap a <button> element with an <a> tag or style an <a> to look like a button."
      }
    ],
    lists: [
      {
        id: 1,
        question: "Create an ordered list of your top 5 favorite books with roman numerals as markers.",
        difficulty: "Beginner",
        solutionHint: "Use <ol> with type='I' attribute and <li> for list items."
      },
      {
        id: 2,
        question: "Build a nested unordered list showing a folder structure with subfolders and files.",
        difficulty: "Intermediate",
        solutionHint: "Create <ul> elements nested inside <li> elements of parent <ul>."
      },
      {
        id: 3,
        question: "Create a description list (definition list) of programming terms with their definitions.",
        difficulty: "Beginner",
        solutionHint: "Use <dl> for the list, <dt> for terms, and <dd> for definitions."
      },
      {
        id: 4,
        question: "Style a list horizontally to create a navigation menu without using CSS.",
        difficulty: "Intermediate",
        solutionHint: "Use display: inline or display: inline-block on list items (but this requires CSS). Note: Pure HTML can't style lists horizontally."
      },
      {
        id: 5,
        question: "Create a custom ordered list that starts counting from 10.",
        difficulty: "Beginner",
        solutionHint: "Use <ol> with start='10' attribute."
      }
    ],
    tables: [
      {
        id: 1,
        question: "Create a simple table with 3 columns and 4 rows including a header row.",
        difficulty: "Beginner",
        solutionHint: "Use <table>, <tr>, <th>, and <td> elements."
      },
      {
        id: 2,
        question: "Build a timetable for a school week with merged cells for some periods.",
        difficulty: "Intermediate",
        solutionHint: "Use colspan and rowspan attributes to merge cells."
      },
      {
        id: 3,
        question: "Create a table with a caption, column groups, and different styling for header, body and footer.",
        difficulty: "Advanced",
        solutionHint: "Use <caption>, <colgroup>, <thead>, <tbody>, and <tfoot> elements."
      },
      {
        id: 4,
        question: "Design a responsive table that scrolls horizontally on small screens without breaking layout.",
        difficulty: "Advanced",
        solutionHint: "Wrap table in a div with overflow-x: auto (but this requires CSS)."
      },
      {
        id: 5,
        question: "Create a pricing comparison table with highlighted recommended option.",
        difficulty: "Intermediate",
        solutionHint: "Use different background colors for cells (requires CSS for styling)."
      }
    ],
    forms: [
      {
        id: 1,
        question: "Create a simple contact form with name, email, and message fields.",
        difficulty: "Beginner",
        solutionHint: "Use <form>, <input>, <textarea>, and <button> elements."
      },
      {
        id: 2,
        question: "Build a registration form with validation using HTML5 attributes (required, pattern, etc.).",
        difficulty: "Intermediate",
        solutionHint: "Use required, pattern, type='email', minlength, etc. attributes."
      },
      {
        id: 3,
        question: "Create a survey form with different input types: radio buttons, checkboxes, dropdowns, and sliders.",
        difficulty: "Intermediate",
        solutionHint: "Use <input type='radio'>, <input type='checkbox'>, <select>, and <input type='range'>."
      },
      {
        id: 4,
        question: "Design a login form with password field and remember me checkbox.",
        difficulty: "Beginner",
        solutionHint: "Use <input type='password'> and <input type='checkbox'>."
      },
      {
        id: 5,
        question: "Implement a file upload form with restrictions on file type and size.",
        difficulty: "Advanced",
        solutionHint: "Use <input type='file'> with accept attribute (client-side) and server-side validation."
      }
    ],
    multimedia: [
      {
        id: 1,
        question: "Embed an image in a webpage with alternative text and responsive sizing.",
        difficulty: "Beginner",
        solutionHint: "Use <img> tag with src, alt attributes and width/height or CSS for responsiveness."
      },
      {
        id: 2,
        question: "Create an image map with clickable areas linking to different pages.",
        difficulty: "Intermediate",
        solutionHint: "Use <map> and <area> elements with the image."
      },
      {
        id: 3,
        question: "Embed a YouTube video in a webpage with custom parameters.",
        difficulty: "Beginner",
        solutionHint: "Use YouTube's embed code with iframe and URL parameters."
      },
      {
        id: 4,
        question: "Add background music to a webpage that plays automatically (but consider accessibility).",
        difficulty: "Intermediate",
        solutionHint: "Use <audio> tag with autoplay attribute (not recommended for UX)."
      },
      {
        id: 5,
        question: "Create a simple slideshow of images using only HTML (no JavaScript).",
        difficulty: "Advanced",
        solutionHint: "Use <details> and <summary> elements or try marquee (deprecated). Note: Proper slideshows require CSS/JS."
      }
    ],
    semantic: [
      {
        id: 1,
        question: "Convert a div-based layout to use semantic HTML5 elements.",
        difficulty: "Intermediate",
        solutionHint: "Replace divs with <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>."
      },
      {
        id: 2,
        question: "Create a blog post page using proper semantic elements for the structure.",
        difficulty: "Intermediate",
        solutionHint: "Use <article> for the post, <time> for dates, <figure> for images, etc."
      },
      {
        id: 3,
        question: "Build a news website homepage with multiple articles and sections using semantic HTML.",
        difficulty: "Advanced",
        solutionHint: "Use <section> for different news categories, <article> for each story, <aside> for related content."
      },
      {
        id: 4,
        question: "Implement a navigation menu using the <nav> element with proper ARIA attributes.",
        difficulty: "Advanced",
        solutionHint: "Use <nav>, role='navigation', and aria-label for accessibility."
      },
      {
        id: 5,
        question: "Create a product card using semantic elements that works well with screen readers.",
        difficulty: "Intermediate",
        solutionHint: "Use <figure>, <figcaption>, proper heading hierarchy, and alt text for images."
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
    <div className="html-practice-app">
      <header>
        <h1>HTML Practice Questions</h1>
        <nav className="topic-nav">
          {Object.keys(questionsByTopic).map(topic => (
            <button 
              key={topic}
              className={activeTopic === topic ? 'active' : ''}
              onClick={() => setActiveTopic(topic)}
            >
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="questions-container">
          <h2>{activeTopic.charAt(0).toUpperCase() + activeTopic.slice(1)} Questions</h2>
          <ul className="questions-list">
            {questionsByTopic[activeTopic].map(q => (
              <li key={q.id} className="question-card">
                <div className="question-header">
                  <span className="question-number">Question {q.id}</span>
                  <span className={`difficulty ${q.difficulty.toLowerCase()}`}>
                    {q.difficulty}
                  </span>
                </div>
                <p className="question-text">{q.question}</p>
                
                <button 
                  className="solution-toggle"
                  onClick={() => toggleSolution(activeTopic, q.id)}
                >
                  {showSolutions[`${activeTopic}-${q.id}`] ? 'Hide Hint' : 'Show Hint'}
                </button>
                
                {showSolutions[`${activeTopic}-${q.id}`] && (
                  <div className="solution-hint">
                    <strong>Hint:</strong> {q.solutionHint}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <style jsx>{`
        .html-practice-app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        
        header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #eee;
        }
        
        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        
        h2 {
          color: #3498db;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        
        .topic-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .topic-nav button {
          padding: 8px 15px;
          border: none;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
          text-transform: capitalize;
        }
        
        .topic-nav button:hover {
          background-color: #e0e0e0;
        }
        
        .topic-nav button.active {
          background-color: #3498db;
          color: white;
        }
        
        .questions-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .question-card {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        
        .question-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .question-number {
          font-weight: bold;
          color: #2c3e50;
        }
        
        .question-text {
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .difficulty {
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.8em;
          font-weight: bold;
        }
        
        .difficulty.beginner {
          background-color: #2ecc71;
          color: white;
        }
        
        .difficulty.intermediate {
          background-color: #f39c12;
          color: white;
        }
        
        .difficulty.advanced {
          background-color: #e74c3c;
          color: white;
        }
        
        .solution-toggle {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9em;
          transition: background-color 0.3s;
        }
        
        .solution-toggle:hover {
          background-color: #2980b9;
        }
        
        .solution-hint {
          margin-top: 15px;
          padding: 15px;
          background-color: #f8f9fa;
          border-left: 4px solid #3498db;
          border-radius: 0 4px 4px 0;
          font-size: 0.95em;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .html-practice-app {
            padding: 15px;
          }
          
          .topic-nav {
            gap: 8px;
          }
          
          .topic-nav button {
            padding: 6px 12px;
            font-size: 0.9em;
          }
        }
      `}</style>
    </div>
  );
};

export default HtmlPracticeApp;