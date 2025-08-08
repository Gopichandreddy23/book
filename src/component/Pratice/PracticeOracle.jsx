import React, { useState } from 'react';

const OraclePractice = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Oracle SQL topics and questions
  const topics = {
    basics: {
      name: "Oracle Basics",
      questions: [
        {
          id: 1,
          question: "Create a new table named 'employees' with columns for employee_id, first_name, last_name, hire_date, and salary",
          difficulty: "Beginner",
          solutionHint: "Use CREATE TABLE statement with appropriate Oracle data types",
          codeExample: `CREATE TABLE employees (
  employee_id NUMBER PRIMARY KEY,
  first_name VARCHAR2(50) NOT NULL,
  last_name VARCHAR2(50) NOT NULL,
  hire_date DATE,
  salary NUMBER(10,2)
);`
        },
        {
          id: 2,
          question: "Insert a new record into the employees table",
          difficulty: "Beginner",
          solutionHint: "Use INSERT INTO statement with Oracle's date format",
          codeExample: `INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES (1, 'John', 'Doe', TO_DATE('2023-01-15', 'YYYY-MM-DD'), 75000);`
        },
        {
          id: 3,
          question: "Create a sequence for generating employee IDs automatically",
          difficulty: "Beginner",
          solutionHint: "Use CREATE SEQUENCE statement",
          codeExample: `CREATE SEQUENCE emp_id_seq
START WITH 1
INCREMENT BY 1
NOCACHE
NOCYCLE;`
        },
        {
          id: 4,
          question: "Create a trigger to auto-populate employee_id using the sequence",
          difficulty: "Intermediate",
          solutionHint: "Use CREATE TRIGGER with BEFORE INSERT",
          codeExample: `CREATE OR REPLACE TRIGGER emp_id_trigger
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  SELECT emp_id_seq.NEXTVAL
  INTO :NEW.employee_id
  FROM dual;
END;`
        },
        {
          id: 5,
          question: "Add a new column 'department_id' to the employees table",
          difficulty: "Beginner",
          solutionHint: "Use ALTER TABLE ADD COLUMN",
          codeExample: `ALTER TABLE employees
ADD department_id NUMBER;`
        }
      ]
    },
    queries: {
      name: "SQL Queries",
      questions: [
        {
          id: 1,
          question: "Select all employees hired in the last 30 days",
          difficulty: "Beginner",
          solutionHint: "Use SYSDATE and date arithmetic",
          codeExample: `SELECT * FROM employees
WHERE hire_date >= SYSDATE - 30;`
        },
        {
          id: 2,
          question: "Display employees with their names concatenated as 'LAST_NAME, FIRST_NAME'",
          difficulty: "Beginner",
          solutionHint: "Use concatenation operator ||",
          codeExample: `SELECT last_name || ', ' || first_name AS full_name
FROM employees;`
        },
        {
          id: 3,
          question: "Find employees with salaries in the top 10%",
          difficulty: "Intermediate",
          solutionHint: "Use PERCENT_RANK analytic function",
          codeExample: `SELECT employee_id, first_name, last_name, salary
FROM (
  SELECT e.*, 
         PERCENT_RANK() OVER (ORDER BY salary DESC) as pct_rank
  FROM employees e
)
WHERE pct_rank <= 0.1;`
        },
        {
          id: 4,
          question: "Calculate the difference between each employee's salary and the average salary",
          difficulty: "Intermediate",
          solutionHint: "Use AVG analytic function",
          codeExample: `SELECT employee_id, first_name, last_name, salary,
       salary - AVG(salary) OVER () AS diff_from_avg
FROM employees;`
        },
        {
          id: 5,
          question: "Find employees with duplicate email addresses (assuming email column exists)",
          difficulty: "Intermediate",
          solutionHint: "Use GROUP BY and HAVING",
          codeExample: `SELECT email, COUNT(*) as count
FROM employees
GROUP BY email
HAVING COUNT(*) > 1;`
        }
      ]
    },
    plsql: {
      name: "PL/SQL Programming",
      questions: [
        {
          id: 1,
          question: "Create a PL/SQL procedure to give a salary raise to all employees in a department",
          difficulty: "Intermediate",
          solutionHint: "Use CREATE PROCEDURE with parameter",
          codeExample: `CREATE OR REPLACE PROCEDURE give_raise(
  p_dept_id IN NUMBER,
  p_percent IN NUMBER
) AS
BEGIN
  UPDATE employees
  SET salary = salary * (1 + p_percent/100)
  WHERE department_id = p_dept_id;
  
  COMMIT;
  DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' employees received raises');
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;`
        },
        {
          id: 2,
          question: "Create a function to calculate annual salary including bonus",
          difficulty: "Intermediate",
          solutionHint: "Use CREATE FUNCTION with RETURN",
          codeExample: `CREATE OR REPLACE FUNCTION calculate_annual_salary(
  p_emp_id IN NUMBER,
  p_bonus_percent IN NUMBER DEFAULT 10
) RETURN NUMBER
IS
  v_monthly_salary NUMBER;
  v_annual_salary NUMBER;
BEGIN
  SELECT salary INTO v_monthly_salary
  FROM employees
  WHERE employee_id = p_emp_id;
  
  v_annual_salary := (v_monthly_salary * 12) * (1 + p_bonus_percent/100);
  RETURN v_annual_salary;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    RETURN NULL;
END;`
        },
        {
          id: 3,
          question: "Write a PL/SQL block to process employee bonuses using a cursor",
          difficulty: "Advanced",
          solutionHint: "Use explicit cursor with FOR loop",
          codeExample: `DECLARE
  CURSOR emp_cursor IS
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE department_id = 10;
    
  v_bonus NUMBER;
BEGIN
  FOR emp_rec IN emp_cursor LOOP
    -- Calculate bonus based on salary
    IF emp_rec.salary < 50000 THEN
      v_bonus := emp_rec.salary * 0.15;
    ELSE
      v_bonus := emp_rec.salary * 0.10;
    END IF;
    
    DBMS_OUTPUT.PUT_LINE(
      emp_rec.first_name || ' ' || emp_rec.last_name || 
      ' bonus: $' || v_bonus
    );
  END LOOP;
END;`
        },
        {
          id: 4,
          question: "Create a package for employee-related operations",
          difficulty: "Advanced",
          solutionHint: "Create package specification and body",
          codeExample: `-- Package specification
CREATE OR REPLACE PACKAGE emp_pkg AS
  PROCEDURE hire_employee(
    p_first_name IN VARCHAR2,
    p_last_name IN VARCHAR2,
    p_salary IN NUMBER,
    p_dept_id IN NUMBER
  );
  
  FUNCTION get_employee_name(p_emp_id IN NUMBER) RETURN VARCHAR2;
END emp_pkg;

-- Package body
CREATE OR REPLACE PACKAGE BODY emp_pkg AS
  PROCEDURE hire_employee(
    p_first_name IN VARCHAR2,
    p_last_name IN VARCHAR2,
    p_salary IN NUMBER,
    p_dept_id IN NUMBER
  ) IS
  BEGIN
    INSERT INTO employees (
      employee_id, first_name, last_name, 
      hire_date, salary, department_id
    ) VALUES (
      emp_id_seq.NEXTVAL, p_first_name, p_last_name,
      SYSDATE, p_salary, p_dept_id
    );
    COMMIT;
  END;
  
  FUNCTION get_employee_name(p_emp_id IN NUMBER) RETURN VARCHAR2 IS
    v_full_name VARCHAR2(100);
  BEGIN
    SELECT first_name || ' ' || last_name INTO v_full_name
    FROM employees
    WHERE employee_id = p_emp_id;
    
    RETURN v_full_name;
  EXCEPTION
    WHEN NO_DATA_FOUND THEN
      RETURN NULL;
  END;
END emp_pkg;`
        },
        {
          id: 5,
          question: "Write a dynamic SQL statement to query any table with a WHERE clause",
          difficulty: "Advanced",
          solutionHint: "Use EXECUTE IMMEDIATE with bind variables",
          codeExample: `CREATE OR REPLACE PROCEDURE query_table(
  p_table_name IN VARCHAR2,
  p_where_clause IN VARCHAR2 DEFAULT NULL
) AS
  v_sql VARCHAR2(1000);
  v_cursor SYS_REFCURSOR;
  v_emp_id NUMBER;
  v_first_name VARCHAR2(50);
  v_last_name VARCHAR2(50);
BEGIN
  v_sql := 'SELECT employee_id, first_name, last_name FROM ' || p_table_name;
  
  IF p_where_clause IS NOT NULL THEN
    v_sql := v_sql || ' WHERE ' || p_where_clause;
  END IF;
  
  OPEN v_cursor FOR v_sql;
  
  LOOP
    FETCH v_cursor INTO v_emp_id, v_first_name, v_last_name;
    EXIT WHEN v_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_emp_id || ': ' || v_first_name || ' ' || v_last_name);
  END LOOP;
  
  CLOSE v_cursor;
END;`
        }
      ]
    },
    administration: {
      name: "Database Administration",
      questions: [
        {
          id: 1,
          question: "Create a new user with limited privileges",
          difficulty: "Intermediate",
          solutionHint: "Use CREATE USER and GRANT statements",
          codeExample: `CREATE USER app_user IDENTIFIED BY "secure_password123"
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA 100M ON users;

GRANT CREATE SESSION TO app_user;
GRANT SELECT, INSERT, UPDATE ON employees TO app_user;`
        },
        {
          id: 2,
          question: "Create a role for HR department users",
          difficulty: "Intermediate",
          solutionHint: "Use CREATE ROLE and assign privileges",
          codeExample: `CREATE ROLE hr_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON employees TO hr_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON departments TO hr_role;
GRANT EXECUTE ON emp_pkg TO hr_role;

-- Assign role to user
GRANT hr_role TO hr_user;`
        },
        {
          id: 3,
          question: "Create a materialized view to optimize department salary reports",
          difficulty: "Advanced",
          solutionHint: "Use CREATE MATERIALIZED VIEW with refresh options",
          codeExample: `CREATE MATERIALIZED VIEW dept_salary_mv
REFRESH COMPLETE ON DEMAND
ENABLE QUERY REWRITE
AS
SELECT d.department_id, d.department_name,
       COUNT(e.employee_id) as emp_count,
       SUM(e.salary) as total_salary,
       AVG(e.salary) as avg_salary
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_id, d.department_name;`
        },
        {
          id: 4,
          question: "Create an index-organized table for fast lookups",
          difficulty: "Advanced",
          solutionHint: "Use ORGANIZATION INDEX clause",
          codeExample: `CREATE TABLE employee_contacts (
  employee_id NUMBER PRIMARY KEY,
  email VARCHAR2(100),
  phone VARCHAR2(20),
  CONSTRAINT emp_id_fk FOREIGN KEY (employee_id) 
    REFERENCES employees(employee_id)
)
ORGANIZATION INDEX;`
        },
        {
          id: 5,
          question: "Implement Virtual Private Database (VPD) to restrict data access by department",
          difficulty: "Advanced",
          solutionHint: "Use DBMS_RLS package to add policy",
          codeExample: `-- Create policy function
CREATE OR REPLACE FUNCTION dept_policy(
  p_schema IN VARCHAR2,
  p_object IN VARCHAR2
) RETURN VARCHAR2
IS
  v_dept_id NUMBER;
BEGIN
  -- Get user's department from application context
  v_dept_id := SYS_CONTEXT('EMP_CTX', 'DEPT_ID');
  
  -- Return predicate to restrict access
  RETURN 'department_id = ' || v_dept_id;
END;

-- Add policy to employees table
BEGIN
  DBMS_RLS.ADD_POLICY(
    object_schema => 'HR',
    object_name => 'EMPLOYEES',
    policy_name => 'DEPT_POLICY',
    function_schema => 'HR',
    policy_function => 'DEPT_POLICY',
    statement_types => 'SELECT,INSERT,UPDATE,DELETE'
  );
END;`
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
    <div className="oracle-practice-app">
      <header>
        <h1>Oracle SQL & PL/SQL Practice Questions</h1>
        
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
        .oracle-practice-app {
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
          .oracle-practice-app {
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

export default OraclePractice;