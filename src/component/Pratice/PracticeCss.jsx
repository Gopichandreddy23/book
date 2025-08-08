import React, { useState } from 'react';

const CssPracticeApp = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('selectors');
  
  // All practice questions organized by topic
  const questionsByTopic = {
    selectors: [
      {
        id: 1,
        question: "Style all paragraphs with class 'intro' to have blue text and 18px font size.",
        difficulty: "Beginner",
        solutionHint: "Use the class selector: .intro { color: blue; font-size: 18px; }"
      },
      {
        id: 2,
        question: "Select and style only the direct children of a div with id 'container' to have a red border.",
        difficulty: "Intermediate",
        solutionHint: "Use the child combinator: #container > * { border: 1px solid red; }"
      },
      {
        id: 3,
        question: "Style all even-numbered list items in an unordered list to have a light gray background.",
        difficulty: "Intermediate",
        solutionHint: "Use :nth-child pseudo-class: ul li:nth-child(even) { background: #f0f0f0; }"
      },
      {
        id: 4,
        question: "Select all input elements that are not checkboxes and give them a 2px solid green border.",
        difficulty: "Advanced",
        solutionHint: "Use :not() pseudo-class: input:not([type='checkbox']) { border: 2px solid green; }"
      },
      {
        id: 5,
        question: "Style any element that has both 'btn' and 'primary' classes to have white text on a blue background.",
        difficulty: "Beginner",
        solutionHint: "Chain the class selectors: .btn.primary { color: white; background: blue; }"
      }
    ],
    layout: [
      {
        id: 1,
        question: "Create a centered 800px wide container with equal 20px padding on all sides.",
        difficulty: "Beginner",
        solutionHint: "Use: .container { width: 800px; margin: 0 auto; padding: 20px; }"
      },
      {
        id: 2,
        question: "Build a 3-column grid layout where each column takes equal space with 15px gaps between them.",
        difficulty: "Intermediate",
        solutionHint: "Use CSS Grid: .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }"
      },
      {
        id: 3,
        question: "Create a flexbox navbar with items spaced evenly and centered vertically.",
        difficulty: "Intermediate",
        solutionHint: "Use: .navbar { display: flex; justify-content: space-evenly; align-items: center; }"
      },
      {
        id: 4,
        question: "Implement a sticky header that stays at the top when scrolling but doesn't cover content.",
        difficulty: "Advanced",
        solutionHint: "Use: header { position: sticky; top: 0; } and add padding-top to body."
      },
      {
        id: 5,
        question: "Create a responsive two-column layout that stacks vertically on mobile screens.",
        difficulty: "Advanced",
        solutionHint: "Use media queries: @media (max-width: 768px) { .columns { flex-direction: column; } }"
      }
    ],
    boxmodel: [
      {
        id: 1,
        question: "Set up a box where padding is included in the total width calculation.",
        difficulty: "Beginner",
        solutionHint: "Use box-sizing: border-box; on the element."
      },
      {
        id: 2,
        question: "Create a circle with a 100px diameter using only CSS.",
        difficulty: "Beginner",
        solutionHint: "Use: .circle { width: 100px; height: 100px; border-radius: 50%; }"
      },
      {
        id: 3,
        question: "Add a drop shadow to a div that's 5px to the right, 5px down, with 10px blur and semi-transparent black color.",
        difficulty: "Intermediate",
        solutionHint: "Use box-shadow: 5px 5px 10px rgba(0,0,0,0.5);"
      },
      {
        id: 4,
        question: "Create a triangle pointing to the right using only CSS (no images).",
        difficulty: "Advanced",
        solutionHint: "Use borders with zero width/height: width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid green;"
      },
      {
        id: 5,
        question: "Style a div to maintain a 16:9 aspect ratio regardless of width.",
        difficulty: "Advanced",
        solutionHint: "Use padding-bottom: 56.25% (9/16 = 0.5625) and position: relative on parent."
      }
    ],
    typography: [
      {
        id: 1,
        question: "Set the base font size to 18px for the entire document and make h1 elements twice that size.",
        difficulty: "Beginner",
        solutionHint: "Use html { font-size: 18px; } h1 { font-size: 2rem; }"
      },
      {
        id: 2,
        question: "Create text that's all uppercase with 1px letter spacing and centered.",
        difficulty: "Beginner",
        solutionHint: "Use: text-transform: uppercase; letter-spacing: 1px; text-align: center;"
      },
      {
        id: 3,
        question: "Add a smooth text shadow to a heading that's 2px to the right and bottom with 3px blur in a semi-transparent black.",
        difficulty: "Intermediate",
        solutionHint: "Use text-shadow: 2px 2px 3px rgba(0,0,0,0.5);"
      },
      {
        id: 4,
        question: "Create a multi-line paragraph where the first line is bold and red, and the rest are normal.",
        difficulty: "Advanced",
        solutionHint: "Use ::first-line pseudo-element: p::first-line { font-weight: bold; color: red; }"
      },
      {
        id: 5,
        question: "Implement a custom font from Google Fonts and apply it to all headings.",
        difficulty: "Intermediate",
        solutionHint: "Link the font in HTML, then use: h1, h2, h3 { font-family: 'Font Name', sans-serif; }"
      }
    ],
    effects: [
      {
        id: 1,
        question: "Create a smooth hover effect that changes a button's background color and scales it slightly larger.",
        difficulty: "Beginner",
        solutionHint: "Use transition: all 0.3s ease; and :hover { background: newColor; transform: scale(1.05); }"
      },
      {
        id: 2,
        question: "Add a fade-in animation to an element when the page loads.",
        difficulty: "Intermediate",
        solutionHint: "Use @keyframes fadeIn and apply it with animation: fadeIn 1s ease-in;"
      },
      {
        id: 3,
        question: "Create a loading spinner using only CSS animations.",
        difficulty: "Advanced",
        solutionHint: "Use @keyframes with rotate transform on an element with border-radius: 50% and transparent borders."
      },
      {
        id: 4,
        question: "Implement a parallax scrolling effect where a background image moves slower than the content.",
        difficulty: "Advanced",
        solutionHint: "Use background-attachment: fixed; on the background element."
      },
      {
        id: 5,
        question: "Create a button that shows a tooltip with a fade and slide-up effect when hovered.",
        difficulty: "Advanced",
        solutionHint: "Use opacity and transform with transition on the tooltip, triggered by button:hover + .tooltip"
      }
    ],
    responsive: [
      {
        id: 1,
        question: "Make all images scale to fit their container width without exceeding their natural size.",
        difficulty: "Beginner",
        solutionHint: "Use img { max-width: 100%; height: auto; }"
      },
      {
        id: 2,
        question: "Create a media query that changes the background color when the screen is less than 768px wide.",
        difficulty: "Beginner",
        solutionHint: "Use @media (max-width: 768px) { body { background: newColor; } }"
      },
      {
        id: 3,
        question: "Implement a responsive navigation that changes from horizontal to vertical layout on mobile.",
        difficulty: "Intermediate",
        solutionHint: "Use flex-direction: column in a mobile media query."
      },
      {
        id: 4,
        question: "Create a responsive grid that shows 4 columns on desktop, 2 on tablet, and 1 on mobile.",
        difficulty: "Advanced",
        solutionHint: "Use CSS Grid with media queries changing grid-template-columns."
      },
      {
        id: 5,
        question: "Use CSS to hide an element on screens smaller than 600px but show it on larger screens.",
        difficulty: "Intermediate",
        solutionHint: "Use display: none in a mobile media query and display: block in desktop."
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
    <div className="css-practice-app">
      <header>
        <h1>CSS Practice Questions</h1>
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
        .css-practice-app {
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
          .css-practice-app {
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

export default CssPracticeApp;