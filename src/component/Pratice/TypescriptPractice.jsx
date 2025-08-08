import React, { useState } from 'react';

const TsPracticeApp = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // All practice questions organized by topic
  const questionsByTopic = {
  // ... (your existing topics)
  typescript: [
    {
      id: 1,
      question: "Create a function that takes two numbers and returns their sum, with proper type annotations.",
      difficulty: "Beginner",
      solutionHint: "Use type annotations for parameters and return type. Example: function add(a: number, b: number): number"
    },
    {
      id: 2,
      question: "Define an interface for a User object that has properties: id (number), name (string), and email (string).",
      difficulty: "Beginner",
      solutionHint: "Use the interface keyword to define the shape of the User object with required properties."
    },
    {
      id: 3,
      question: "Create a type alias for a union type that can be either a string or a number.",
      difficulty: "Beginner",
      solutionHint: "Use the type keyword with a union (|) operator: type StringOrNumber = string | number;"
    },
    {
      id: 4,
      question: "Write a function that accepts an array of mixed types (numbers and strings) and returns a new array with only numbers.",
      difficulty: "Intermediate",
      solutionHint: "Use type guards (typeof checks) to filter the array and properly type the return value."
    },
    {
      id: 5,
      question: "Implement a generic function that returns the first element of an array of any type.",
      difficulty: "Intermediate",
      solutionHint: "Use a generic type parameter <T> in the function signature to make it work with any array type."
    },
    {
      id: 6,
      question: "Create a mapped type that makes all properties of an interface optional.",
      difficulty: "Intermediate",
      solutionHint: "Use the Partial<T> built-in type or implement your own mapped type with ? modifier."
    },
    {
      id: 7,
      question: "Write a function overload that can accept either a string or Date parameter and returns a Date object.",
      difficulty: "Intermediate",
      solutionHint: "Use function overloads with multiple signatures before the implementation."
    },
    {
      id: 8,
      question: "Create a decorator that logs the execution time of a method.",
      difficulty: "Advanced",
      solutionHint: "Implement a method decorator that wraps the original method with timing logic using Date.now()."
    },
    {
      id: 9,
      question: "Implement a type-safe dictionary class using generics that allows getting/setting values by string keys.",
      difficulty: "Advanced",
      solutionHint: "Create a class with a generic type parameter and use an index signature for the dictionary storage."
    },
    {
      id: 10,
      question: "Create a conditional type that extracts the return type of a function type.",
      difficulty: "Advanced",
      solutionHint: "Use infer keyword in a conditional type: type ReturnType<T> = T extends (...args: any) => infer R ? R : never;"
    },
    {
      id: 11,
      question: "Write a utility type that removes null and undefined from a type's properties.",
      difficulty: "Advanced",
      solutionHint: "Use mapped types with conditional types to filter out null and undefined."
    },
    {
      id: 12,
      question: "Implement a type-safe event emitter class with on() and emit() methods using generics.",
      difficulty: "Advanced",
      solutionHint: "Use generics to type the event names and their associated callback signatures."
    },
    {
      id: 13,
      question: "Create a type that represents a React component's props with children.",
      difficulty: "Intermediate",
      solutionHint: "Use React.PropsWithChildren<T> or define your own type including children: ReactNode."
    },
    {
      id: 14,
      question: "Write a higher-order function that takes a function and returns a type-guarded version of it.",
      difficulty: "Advanced",
      solutionHint: "Use type predicates (x is T) in the return type of the guard function."
    },
    {
      id: 15,
      question: "Implement a type-safe reducer function for Redux with proper action type discrimination.",
      difficulty: "Advanced",
      solutionHint: "Use discriminated unions for action types and ensure the reducer handles all cases."
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

export default TsPracticeApp;