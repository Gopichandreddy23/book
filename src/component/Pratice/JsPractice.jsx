import React, { useState } from 'react';

const JsPracticeApp = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // All practice questions organized by topic
  const questionsByTopic = {
    basics: [
      {
        id: 1,
        question: "Write a function that takes two numbers as arguments and returns their sum.",
        difficulty: "Beginner",
        solutionHint: "Create a function with two parameters and return their sum using the + operator."
      },
      {
        id: 2,
        question: "Create a function that checks if a number is even or odd and returns 'Even' or 'Odd' accordingly.",
        difficulty: "Beginner",
        solutionHint: "Use the modulus operator (%) to check the remainder when divided by 2."
      },
      {
        id: 3,
        question: "Write a function that reverses a string (e.g., 'hello' becomes 'olleh').",
        difficulty: "Beginner",
        solutionHint: "Convert the string to an array, use the reverse() method, then join back to a string."
      },
      {
        id: 4,
        question: "Create a function that finds the maximum number in an array of numbers.",
        difficulty: "Beginner",
        solutionHint: "Use Math.max() with the spread operator or iterate through the array to find the max."
      },
      {
        id: 5,
        question: "Write a function that checks if a given string is a palindrome (reads the same backward as forward).",
        difficulty: "Beginner",
        solutionHint: "Compare the original string with its reversed version after cleaning (lowercase, remove non-alphanumeric)."
      }
    ],
    arrays: [
      {
        id: 1,
        question: "Write a function that removes duplicates from an array and returns a new array with unique elements.",
        difficulty: "Beginner",
        solutionHint: "Use Set or filter with indexOf to remove duplicates."
      },
      {
        id: 2,
        question: "Create a function that flattens a nested array (e.g., [1, [2, [3]]] becomes [1, 2, 3]).",
        difficulty: "Intermediate",
        solutionHint: "Use Array.flat() with Infinity depth or implement a recursive solution."
      },
      {
        id: 3,
        question: "Write a function that groups an array of objects by a specified property.",
        difficulty: "Intermediate",
        solutionHint: "Use reduce to create an object where keys are property values and values are arrays of matching objects."
      },
      {
        id: 4,
        question: "Implement a function that performs a deep comparison between two arrays (including nested arrays).",
        difficulty: "Advanced",
        solutionHint: "Recursively compare elements, checking for arrays and their contents."
      },
      {
        id: 5,
        question: "Create a function that merges two sorted arrays into one sorted array without using sort().",
        difficulty: "Intermediate",
        solutionHint: "Use a two-pointer technique to efficiently merge the arrays."
      }
    ],
    objects: [
      {
        id: 1,
        question: "Write a function that deep clones a JavaScript object (including nested objects).",
        difficulty: "Intermediate",
        solutionHint: "Use JSON methods or implement a recursive cloning function."
      },
      {
        id: 2,
        question: "Create a function that checks if two objects are equal (have the same properties and values).",
        difficulty: "Intermediate",
        solutionHint: "Compare keys and values recursively for nested objects."
      },
      {
        id: 3,
        question: "Implement a function that flattens a nested object (e.g., {a: {b: 1}} becomes {'a.b': 1}).",
        difficulty: "Advanced",
        solutionHint: "Use recursion to build flattened property paths."
      },
      {
        id: 4,
        question: "Write a function that safely accesses a nested object property (e.g., access obj.a.b.c without errors).",
        difficulty: "Intermediate",
        solutionHint: "Use optional chaining (?.) or implement a safe access function with reduce."
      },
      {
        id: 5,
        question: "Create a function that converts an object to a query string (e.g., {a: 1, b: 2} becomes 'a=1&b=2').",
        difficulty: "Beginner",
        solutionHint: "Use Object.entries() and map to create key-value pairs, then join with &."
      }
    ],
    functions: [
      {
        id: 1,
        question: "Implement a debounce function that limits how often a function can be called.",
        difficulty: "Intermediate",
        solutionHint: "Use setTimeout and clearTimeout to delay execution until after a pause in calls."
      },
      {
        id: 2,
        question: "Create a throttle function that limits function execution to once every specified time period.",
        difficulty: "Intermediate",
        solutionHint: "Track the last execution time and only allow new executions after the delay has passed."
      },
      {
        id: 3,
        question: "Write a curry function that converts a multi-argument function into a sequence of functions.",
        difficulty: "Advanced",
        solutionHint: "Return functions that accumulate arguments until enough are provided to execute the original function."
      },
      {
        id: 4,
        question: "Implement a memoize function that caches function results for given inputs.",
        difficulty: "Intermediate",
        solutionHint: "Create a cache object that stores results keyed by stringified arguments."
      },
      {
        id: 5,
        question: "Create a compose function that chains multiple functions together (right to left).",
        difficulty: "Intermediate",
        solutionHint: "Use reduceRight to apply functions in sequence, passing results from one to the next."
      }
    ],
    async: [
      {
        id: 1,
        question: "Write a function that fetches data from an API and returns a promise with the JSON response.",
        difficulty: "Beginner",
        solutionHint: "Use fetch() and handle the response with .then() or async/await."
      },
      {
        id: 2,
        question: "Implement a function that runs multiple API requests in parallel and returns when all complete.",
        difficulty: "Intermediate",
        solutionHint: "Use Promise.all() to wait for multiple promises to resolve."
      },
      {
        id: 3,
        question: "Create a function that retries a failed API request up to a specified number of times.",
        difficulty: "Intermediate",
        solutionHint: "Use a loop or recursion with a counter to implement retry logic."
      },
      {
        id: 4,
        question: "Write a function that processes an array of items sequentially with an async operation for each.",
        difficulty: "Advanced",
        solutionHint: "Use async/await with a for loop or reduce with promises to ensure sequential execution."
      },
      {
        id: 5,
        question: "Implement a simple promise-based queue that processes tasks one at a time in order.",
        difficulty: "Advanced",
        solutionHint: "Maintain a queue array and process items sequentially, resolving promises as tasks complete."
      }
    ],
    dom: [
      {
        id: 1,
        question: "Write a function that creates a new DOM element with specified attributes and children.",
        difficulty: "Beginner",
        solutionHint: "Use document.createElement(), set attributes, and append children."
      },
      {
        id: 2,
        question: "Create a function that toggles a CSS class on a DOM element when clicked.",
        difficulty: "Beginner",
        solutionHint: "Add a click event listener that uses classList.toggle()."
      },
      {
        id: 3,
        question: "Implement a simple drag-and-drop functionality for DOM elements.",
        difficulty: "Intermediate",
        solutionHint: "Use dragstart, dragover, and drop events with dataTransfer."
      },
      {
        id: 4,
        question: "Write a function that debounces scroll events to improve performance.",
        difficulty: "Intermediate",
        solutionHint: "Add a scroll event listener with your debounce function from earlier."
      },
      {
        id: 5,
        question: "Create a function that dynamically loads a script and returns a promise when loaded.",
        difficulty: "Intermediate",
        solutionHint: "Create a script element, set its src, and use onload/onerror to resolve/reject a promise."
      }
    ],
    algorithms: [
      {
        id: 1,
        question: "Implement a binary search algorithm for a sorted array.",
        difficulty: "Intermediate",
        solutionHint: "Use a while loop to repeatedly divide the search interval in half."
      },
      {
        id: 2,
        question: "Write a function that sorts an array using the bubble sort algorithm.",
        difficulty: "Beginner",
        solutionHint: "Use nested loops to repeatedly swap adjacent elements if they are in the wrong order."
      },
      {
        id: 3,
        question: "Create a function that generates all permutations of a string.",
        difficulty: "Advanced",
        solutionHint: "Use recursion to build permutations by selecting each character as the first character."
      },
      {
        id: 4,
        question: "Implement the Fibonacci sequence both recursively and with memoization.",
        difficulty: "Intermediate",
        solutionHint: "For memoization, store previously computed values to avoid redundant calculations."
      },
      {
        id: 5,
        question: "Write a function that finds the longest common prefix among an array of strings.",
        difficulty: "Intermediate",
        solutionHint: "Compare characters of the first string with others until a mismatch is found."
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
    <div className="js-practice-app">
      <header>
        <h1>JavaScript Practice Questions</h1>
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
        .js-practice-app {
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
          .js-practice-app {
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

export default JsPracticeApp;