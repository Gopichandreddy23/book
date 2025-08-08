import React, { useState } from 'react';

const PracticeNode = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Node.js topics and questions
  const topics = {
    basics: {
      name: "Node.js Basics",
      questions: [
        {
          id: 1,
          question: "Create a simple HTTP server that responds with 'Hello World'",
          difficulty: "Beginner",
          solutionHint: "Use the http module's createServer method",
          codeExample: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`
        },
        {
          id: 2,
          question: "Read a file asynchronously and print its contents",
          difficulty: "Beginner",
          solutionHint: "Use fs.readFile with utf-8 encoding",
          codeExample: `const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});`
        },
        {
          id: 3,
          question: "Write a program that creates a new file with content",
          difficulty: "Beginner",
          solutionHint: "Use fs.writeFile",
          codeExample: `const fs = require('fs');

fs.writeFile('newfile.txt', 'This is some sample content', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File created successfully');
});`
        },
        {
          id: 4,
          question: "Create a function that checks if a file exists",
          difficulty: "Beginner",
          solutionHint: "Use fs.access",
          codeExample: `const fs = require('fs');

function fileExists(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    console.log(\`\${filePath} \${err ? 'does not exist' : 'exists'}\`);
  });
}

fileExists('example.txt');`
        },
        {
          id: 5,
          question: "Read a JSON file and parse its contents",
          difficulty: "Beginner",
          solutionHint: "Combine fs.readFile with JSON.parse",
          codeExample: `const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});`
        },
        {
          id: 6,
          question: "Create a simple TCP server",
          difficulty: "Intermediate",
          solutionHint: "Use the net module",
          codeExample: `const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Echo server\\r\\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');`
        },
        {
          id: 7,
          question: "Implement a basic CLI calculator",
          difficulty: "Intermediate",
          solutionHint: "Use readline module",
          codeExample: `const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    rl.question('Enter operation (+, -, *, /): ', (operation) => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      let result;
      
      switch(operation) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': result = n1 / n2; break;
        default: console.log('Invalid operation'); rl.close(); return;
      }
      
      console.log(\`Result: \${result}\`);
      rl.close();
    });
  });
});`
        },
        {
          id: 8,
          question: "Create a file watcher that logs changes",
          difficulty: "Intermediate",
          solutionHint: "Use fs.watch",
          codeExample: `const fs = require('fs');

fs.watch('watchfile.txt', (eventType, filename) => {
  console.log(\`File \${filename} was \${eventType}\`);
  console.log('Changes detected at: ' + new Date());
});`
        },
        {
          id: 9,
          question: "Read a directory and list all files",
          difficulty: "Beginner",
          solutionHint: "Use fs.readdir",
          codeExample: `const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Files in directory:');
  files.forEach(file => console.log(file));
});`
        },
        {
          id: 10,
          question: "Create a simple event emitter",
          difficulty: "Intermediate",
          solutionHint: "Use the events module",
          codeExample: `const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

myEmitter.emit('event');`
        }
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
    <div className="node-practice-app">
      <header>
        <h1>Node.js Practice Questions</h1>
        
        <nav className="topic-nav">
          {Object.keys(topics).map(topic => (
            <button 
              key={topic}
              className={activeTopic === topic ? 'active' : ''}
              onClick={() => setActiveTopic(topic)}
            >
              {topics[topic].name}
            </button>
          ))}
        </nav>
        
        <div className="search-container">
          <input
            type="text"
            placeholder={`Search ${topics[activeTopic].name} questions...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          )}
        </div>
      </header>

      <main>
        <div className="questions-container">
          <h2>{topics[activeTopic].name} Questions ({filteredQuestions.length})</h2>
          
          {filteredQuestions.length === 0 ? (
            <div className="no-results">No questions match your search criteria.</div>
          ) : (
            <ul className="questions-list">
              {filteredQuestions.map(q => {
                const questionKey = `${activeTopic}-${q.id}`;
                
                return (
                  <li 
                    key={q.id} 
                    className="question-card"
                  >
                    <div className="question-header">
                      <div className="question-meta">
                        <span className="question-number">Question {q.id}</span>
                        <span className={`difficulty ${q.difficulty.toLowerCase()}`}>
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <p className="question-text">{q.question}</p>
                    
                    <div className="question-actions">
                      <button 
                        className="solution-toggle"
                        onClick={() => toggleSolution(activeTopic, q.id)}
                      >
                        {showSolutions[questionKey] ? 'Hide Hint' : 'Show Hint'}
                      </button>
                      
                      {q.codeExample && (
                        <button 
                          className="code-toggle"
                          onClick={() => toggleCodeExample(activeTopic, q.id)}
                        >
                          {showCodeExamples[questionKey] ? 'Hide Code' : 'Show Code'}
                        </button>
                      )}
                    </div>
                    
                    {showSolutions[questionKey] && q.solutionHint && (
                      <div className="solution-hint">
                        <strong>Hint:</strong> {q.solutionHint}
                      </div>
                    )}
                    
                    {showCodeExamples[questionKey] && q.codeExample && (
                      <div className="code-example">
                        <strong>Code Example:</strong>
                        <pre>{q.codeExample}</pre>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>

      <style jsx>{`
        .node-practice-app {
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
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .topic-nav button {
          padding: 8px 15px;
          border: none;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
          font-size: 0.9em;
        }
        
        .topic-nav button:hover {
          background-color: #e0e0e0;
        }
        
        .topic-nav button.active {
          background-color: #3498db;
          color: white;
        }
        
        .search-container {
          margin: 20px auto;
          max-width: 500px;
          display: flex;
          gap: 10px;
        }
        
        .search-input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1em;
        }
        
        .clear-search {
          padding: 0 15px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
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
          transition: transform 0.2s, box-shadow 0.2s;
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
        
        .question-meta {
          display: flex;
          align-items: center;
          gap: 10px;
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
          color: white;
        }
        
        .difficulty.beginner {
          background-color: #2ecc71;
        }
        
        .difficulty.intermediate {
          background-color: #f39c12;
        }
        
        .difficulty.advanced {
          background-color: #e74c3c;
        }
        
        .question-actions {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .solution-toggle, .code-toggle {
          padding: 8px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9em;
          transition: background-color 0.3s;
        }
        
        .solution-toggle {
          background-color: #3498db;
          color: white;
        }
        
        .solution-toggle:hover {
          background-color: #2980b9;
        }
        
        .code-toggle {
          background-color: #9b59b6;
          color: white;
        }
        
        .code-toggle:hover {
          background-color: #8e44ad;
        }
        
        .solution-hint, .code-example {
          margin-top: 15px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 4px;
          font-size: 0.95em;
          line-height: 1.6;
        }
        
        .solution-hint {
          border-left: 4px solid #3498db;
        }
        
        .code-example {
          border-left: 4px solid #9b59b6;
        }
        
        .code-example pre {
          white-space: pre-wrap;
          background-color: #2c3e50;
          color: #ecf0f1;
          padding: 10px;
          border-radius: 4px;
          overflow-x: auto;
        }
        
        .no-results {
          text-align: center;
          padding: 40px;
          color: #7f8c8d;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .node-practice-app {
            padding: 15px;
          }
          
          .topic-nav button {
            padding: 6px 10px;
            font-size: 0.8em;
          }
          
          .question-actions {
            flex-direction: column;
          }
          
          .solution-toggle, .code-toggle {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PracticeNode;