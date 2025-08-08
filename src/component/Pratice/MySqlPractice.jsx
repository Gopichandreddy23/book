import React, { useState } from 'react';

const MySQLPractice = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // MySQL topics and questions
  const topics = {
    basics: {
      name: "MySQL Basics",
      questions: [
        {
          id: 1,
          question: "Create a new database named 'company'",
          difficulty: "Beginner",
          solutionHint: "Use the CREATE DATABASE statement",
          codeExample: `CREATE DATABASE company;`
        },
        {
          id: 2,
          question: "Create a table named 'employees' with columns for id, name, position, and salary",
          difficulty: "Beginner",
          solutionHint: "Use the CREATE TABLE statement with appropriate data types",
          codeExample: `CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  position VARCHAR(100),
  salary DECIMAL(10, 2)
);`
        },
        {
          id: 3,
          question: "Insert a new employee record into the employees table",
          difficulty: "Beginner",
          solutionHint: "Use the INSERT INTO statement",
          codeExample: `INSERT INTO employees (name, position, salary)
VALUES ('John Doe', 'Software Developer', 75000.00);`
        },
        {
          id: 4,
          question: "Select all records from the employees table",
          difficulty: "Beginner",
          solutionHint: "Use the SELECT statement with *",
          codeExample: `SELECT * FROM employees;`
        },
        {
          id: 5,
          question: "Update the salary of an employee with id 1 to 80000",
          difficulty: "Beginner",
          solutionHint: "Use the UPDATE statement with WHERE clause",
          codeExample: `UPDATE employees 
SET salary = 80000.00
WHERE id = 1;`
        }
      ]
    },
    queries: {
      name: "SQL Queries",
      questions: [
        {
          id: 1,
          question: "Select all employees with a salary greater than 50000",
          difficulty: "Beginner",
          solutionHint: "Use WHERE clause with comparison operator",
          codeExample: `SELECT * FROM employees
WHERE salary > 50000;`
        },
        {
          id: 2,
          question: "Select employees and order them by salary in descending order",
          difficulty: "Beginner",
          solutionHint: "Use ORDER BY with DESC",
          codeExample: `SELECT * FROM employees
ORDER BY salary DESC;`
        },
        {
          id: 3,
          question: "Count the number of employees in each position",
          difficulty: "Intermediate",
          solutionHint: "Use GROUP BY with COUNT aggregate function",
          codeExample: `SELECT position, COUNT(*) as employee_count
FROM employees
GROUP BY position;`
        },
        {
          id: 4,
          question: "Find the average salary for each position",
          difficulty: "Intermediate",
          solutionHint: "Use GROUP BY with AVG aggregate function",
          codeExample: `SELECT position, AVG(salary) as avg_salary
FROM employees
GROUP BY position;`
        },
        {
          id: 5,
          question: "Select employees whose names start with 'J'",
          difficulty: "Beginner",
          solutionHint: "Use LIKE with wildcard pattern",
          codeExample: `SELECT * FROM employees
WHERE name LIKE 'J%';`
        }
      ]
    },
    joins: {
      name: "Table Joins",
      questions: [
        {
          id: 1,
          question: "Create a departments table and establish a relationship with employees",
          difficulty: "Intermediate",
          solutionHint: "Use foreign key constraint",
          codeExample: `CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

ALTER TABLE employees
ADD COLUMN department_id INT,
ADD FOREIGN KEY (department_id) REFERENCES departments(id);`
        },
        {
          id: 2,
          question: "Perform an INNER JOIN between employees and departments",
          difficulty: "Intermediate",
          solutionHint: "Use INNER JOIN with ON clause",
          codeExample: `SELECT e.name, e.position, d.name as department
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;`
        },
        {
          id: 3,
          question: "Perform a LEFT JOIN to include all employees even if they don't have a department",
          difficulty: "Intermediate",
          solutionHint: "Use LEFT JOIN instead of INNER JOIN",
          codeExample: `SELECT e.name, e.position, d.name as department
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;`
        },
        {
          id: 4,
          question: "Find all departments that have no employees",
          difficulty: "Intermediate",
          solutionHint: "Use LEFT JOIN with WHERE condition checking for NULL",
          codeExample: `SELECT d.name
FROM departments d
LEFT JOIN employees e ON d.id = e.department_id
WHERE e.id IS NULL;`
        },
        {
          id: 5,
          question: "Perform a self-join to find employees who share the same position",
          difficulty: "Advanced",
          solutionHint: "Join the employees table to itself",
          codeExample: `SELECT a.name as employee1, b.name as employee2, a.position
FROM employees a
JOIN employees b ON a.position = b.position AND a.id < b.id;`
        }
      ]
    },
    advanced: {
      name: "Advanced SQL",
      questions: [
        {
          id: 1,
          question: "Create a stored procedure to update an employee's salary",
          difficulty: "Advanced",
          solutionHint: "Use CREATE PROCEDURE with parameters",
          codeExample: `DELIMITER //
CREATE PROCEDURE UpdateSalary(
  IN emp_id INT,
  IN new_salary DECIMAL(10, 2)
)
BEGIN
  UPDATE employees
  SET salary = new_salary
  WHERE id = emp_id;
END //
DELIMITER ;

-- Call the procedure
CALL UpdateSalary(1, 85000.00);`
        },
        {
          id: 2,
          question: "Create a view that shows employee names with their department names",
          difficulty: "Intermediate",
          solutionHint: "Use CREATE VIEW with a JOIN query",
          codeExample: `CREATE VIEW employee_departments AS
SELECT e.name as employee_name, d.name as department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;`
        },
        {
          id: 3,
          question: "Create a trigger that logs salary changes to an audit table",
          difficulty: "Advanced",
          solutionHint: "Use CREATE TRIGGER with BEFORE/AFTER UPDATE",
          codeExample: `CREATE TABLE salary_audit (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT,
  old_salary DECIMAL(10, 2),
  new_salary DECIMAL(10, 2),
  change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //
CREATE TRIGGER before_salary_update
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
  IF NEW.salary != OLD.salary THEN
    INSERT INTO salary_audit (employee_id, old_salary, new_salary)
    VALUES (OLD.id, OLD.salary, NEW.salary);
  END IF;
END //
DELIMITER ;`
        },
        {
          id: 4,
          question: "Use a transaction to update multiple records atomically",
          difficulty: "Advanced",
          solutionHint: "Use START TRANSACTION, COMMIT, and ROLLBACK",
          codeExample: `START TRANSACTION;

UPDATE employees SET salary = salary * 1.1 WHERE position = 'Developer';
UPDATE employees SET salary = salary * 1.05 WHERE position = 'Manager';

-- If everything is OK
COMMIT;

-- Or if something went wrong
-- ROLLBACK;`
        },
        {
          id: 5,
          question: "Create an index to optimize queries on the employee name column",
          difficulty: "Intermediate",
          solutionHint: "Use CREATE INDEX statement",
          codeExample: `CREATE INDEX idx_employee_name ON employees(name);`
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
    <div className="mysql-practice-app">
      <header>
        <h1>MySQL Practice Questions</h1>
        
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
        .mysql-practice-app {
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
          .mysql-practice-app {
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

export default MySQLPractice;