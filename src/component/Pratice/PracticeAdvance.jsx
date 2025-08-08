import React, { useState } from 'react';

const AdvancedJavaPracticeApp = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('jdbc');
  
  // All practice questions organized by topic
  const questionsByTopic = {
    jdbc: [
      {
        id: 1,
        question: "Write a JDBC program to connect to a MySQL database and display all records from the 'employees' table.",
        difficulty: "Beginner",
        solutionHint: "Use DriverManager.getConnection(), createStatement(), and executeQuery() methods."
      },
      {
        id: 2,
        question: "Create a Java application that uses PreparedStatement to insert new records into a 'products' table with transaction management.",
        difficulty: "Intermediate",
        solutionHint: "Use connection.setAutoCommit(false), prepareStatement(), and commit()/rollback()."
      },
      {
        id: 3,
        question: "Implement a JDBC batch update operation to insert 1000 records into a 'transactions' table efficiently.",
        difficulty: "Advanced",
        solutionHint: "Use addBatch() and executeBatch() methods on PreparedStatement."
      },
      {
        id: 4,
        question: "Develop a Java program that demonstrates the use of CallableStatement to execute a stored procedure in the database.",
        difficulty: "Intermediate",
        solutionHint: "Use prepareCall() and registerOutParameter() methods."
      },
      {
        id: 5,
        question: "Create a connection pooling implementation using JDBC and demonstrate its performance benefits.",
        difficulty: "Advanced",
        solutionHint: "Implement a basic connection pool with LinkedList to manage connections."
      }
    ],
    servlets: [
      {
        id: 1,
        question: "Create a simple Servlet that handles a GET request and returns 'Hello World' as the response.",
        difficulty: "Beginner",
        solutionHint: "Extend HttpServlet and override doGet() method."
      },
      {
        id: 2,
        question: "Implement a Servlet that processes form data (name, email, message) submitted via POST and displays the submitted values.",
        difficulty: "Intermediate",
        solutionHint: "Use request.getParameter() in doPost() method to retrieve form data."
      },
      {
        id: 3,
        question: "Develop a Servlet-based user authentication system with session management (login, logout, session timeout).",
        difficulty: "Advanced",
        solutionHint: "Use HttpSession for session management and store user credentials in context/session."
      },
      {
        id: 4,
        question: "Create a file upload Servlet that handles multipart/form-data requests and saves files to a specified directory.",
        difficulty: "Intermediate",
        solutionHint: "Use Apache Commons FileUpload or Servlet 3.0+ @MultipartConfig annotation."
      },
      {
        id: 5,
        question: "Implement a Servlet filter that logs request information (IP, URL, timestamp) and measures request processing time.",
        difficulty: "Advanced",
        solutionHint: "Implement Filter interface and use filter chain to measure time before and after request processing."
      }
    ],
    jsp: [
      {
        id: 1,
        question: "Create a JSP page that displays the current date and time using scriptlet tags.",
        difficulty: "Beginner",
        solutionHint: "Use <%= new java.util.Date() %> expression in JSP."
      },
      {
        id: 2,
        question: "Develop a JSP page that retrieves a list of products from a Servlet and displays them in a table using JSTL.",
        difficulty: "Intermediate",
        solutionHint: "Use <c:forEach> tag to iterate through the product list from request/session attributes."
      },
      {
        id: 3,
        question: "Implement a JSP custom tag that formats a given date according to a specified pattern.",
        difficulty: "Advanced",
        solutionHint: "Create a tag handler class extending TagSupport and use SimpleDateFormat for formatting."
      },
      {
        id: 4,
        question: "Create a JSP page with a form that submits to another JSP page which processes and displays the submitted data.",
        difficulty: "Intermediate",
        solutionHint: "Use JSP implicit request object to access form parameters."
      },
      {
        id: 5,
        question: "Develop a JSP application using MVC pattern where Servlets handle business logic and JSPs handle presentation.",
        difficulty: "Advanced",
        solutionHint: "Use Servlet as controller, JavaBeans as model, and JSPs with JSTL/EL as view."
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
    <div className="advanced-java-app">
      <header>
        <h1>Advanced Java Practice Questions</h1>
        <nav className="topic-nav">
          <button 
            className={activeTopic === 'jdbc' ? 'active' : ''}
            onClick={() => setActiveTopic('jdbc')}
          >
            JDBC
          </button>
          <button 
            className={activeTopic === 'servlets' ? 'active' : ''}
            onClick={() => setActiveTopic('servlets')}
          >
            Servlets
          </button>
          <button 
            className={activeTopic === 'jsp' ? 'active' : ''}
            onClick={() => setActiveTopic('jsp')}
          >
            JSP
          </button>
        </nav>
      </header>

      <main>
        <div className="questions-container">
          <h2>{activeTopic.toUpperCase()} Questions</h2>
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
        .advanced-java-app {
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
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .topic-nav button {
          padding: 8px 20px;
          border: none;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
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
          .advanced-java-app {
            padding: 15px;
          }
          
          .topic-nav {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default AdvancedJavaPracticeApp;