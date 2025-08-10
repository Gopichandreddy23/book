import React, { useState, useEffect, useReducer, useContext, createContext, useCallback, useMemo, useRef } from 'react';

const ReactPracticeApp = () => {
  const [activeTopic, setActiveTopic] = useState('basics');
  const [showSolutions, setShowSolutions] = useState({});
  const [showCodeExamples, setShowCodeExamples] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Topics data structure
  const topics = {
    basics: {
      name: "React Basics",
      questions: [
        {
          id: 1,
          question: "Create a simple functional component that displays 'Hello, React!'",
          difficulty: "Beginner",
          solutionHint: "Use a function that returns JSX",
          codeExample: `function Greeting() {
  return <h1>Hello, React!</h1>;
}`
        },
        {
          id: 2,
          question: "Create a counter component with buttons to increment and decrement",
          difficulty: "Beginner",
          solutionHint: "Use useState hook to manage count state",
          codeExample: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`
        },
        {
          id: 3,
          question: "Create a component that conditionally renders content based on state",
          difficulty: "Beginner",
          solutionHint: "Use conditional rendering with logical && operator",
          codeExample: `function ToggleContent() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Content
      </button>
      {show && <div>This content is now visible!</div>}
    </div>
  );
}`
        }
      ]
    },
    hooks: {
      name: "React Hooks",
      questions: [
        {
          id: 1,
          question: "Create a component that fetches data from an API using useEffect",
          difficulty: "Intermediate",
          solutionHint: "Use fetch inside useEffect with proper dependency array",
          codeExample: `function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/user')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}`
        },
        {
          id: 2,
          question: "Create a custom hook for form input handling",
          difficulty: "Intermediate",
          solutionHint: "Use useState and return the value and onChange handler",
          codeExample: `function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
}

function Form() {
  const name = useInput('');
  const email = useInput('');

  return (
    <form>
      <input type="text" {...name} placeholder="Name" />
      <input type="email" {...email} placeholder="Email" />
    </form>
  );
}`
        },
        {
          id: 3,
          question: "Implement useReducer for a shopping cart functionality",
          difficulty: "Advanced",
          solutionHint: "Create reducer for add/remove/update quantity actions",
          codeExample: `const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { ...action.item, quantity: 1 }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Dispatch actions like:
  // dispatch({ type: 'ADD_ITEM', item: product })
}`
        }
      ]
    },
    components: {
      name: "Component Patterns",
      questions: [
        {
          id: 1,
          question: "Create a Higher-Order Component that adds authentication checks",
          difficulty: "Intermediate",
          solutionHint: "Wrap component and check auth before rendering",
          codeExample: `function withAuth(WrappedComponent) {
  return function(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Check authentication status
      checkAuth().then(auth => setIsAuthenticated(auth));
    }, []);

    return isAuthenticated ? <WrappedComponent {...props} /> : <Login />;
  };
}`
        },
        {
          id: 2,
          question: "Implement a compound component pattern for an accordion",
          difficulty: "Advanced",
          solutionHint: "Use React context to share state between components",
          codeExample: `const AccordionContext = createContext();

function Accordion({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);
  const isOpen = index === activeIndex;

  return (
    <div className="item">
      <button onClick={() => setActiveIndex(isOpen ? null : index)}>
        {children[0]}
      </button>
      {isOpen && children[1]}
    </div>
  );
}`
        },
        {
          id: 3,
          question: "Create a render prop component for tracking window scroll position",
          difficulty: "Intermediate",
          solutionHint: "Use children as a function pattern with scroll event",
          codeExample: `function ScrollTracker({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return children(scrollY);
}

// Usage:
<ScrollTracker>
  {scrollY => <div>Scrolled: {scrollY}px</div>}
</ScrollTracker>`
        }
      ]
    },
    performance: {
      name: "Performance Optimization",
      questions: [
        {
          id: 1,
          question: "Optimize a list component using React.memo",
          difficulty: "Intermediate",
          solutionHint: "Wrap item component with React.memo",
          codeExample: `const ListItem = React.memo(function({ item }) {
  return <div>{item.name}</div>;
});

function List({ items }) {
  return (
    <div>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}`
        },
        {
          id: 2,
          question: "Use useCallback to prevent unnecessary re-renders of child components",
          difficulty: "Intermediate",
          solutionHint: "Memoize event handlers with useCallback",
          codeExample: `function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <ChildComponent onIncrement={increment} />;
}`
        },
        {
          id: 3,
          question: "Implement windowing/virtualization for a large list",
          difficulty: "Advanced",
          solutionHint: "Use react-window library",
          codeExample: `import { FixedSizeList as List } from 'react-window';

function BigList({ items }) {
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index].name}
        </div>
      )}
    </List>
  );
}`
        }
      ]
    },
    context: {
      name: "Context API",
      questions: [
        {
          id: 1,
          question: "Create a theme context for light/dark mode",
          difficulty: "Intermediate",
          solutionHint: "Use createContext and Provider with theme state",
          codeExample: `const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      style={{ background: darkMode ? '#333' : '#FFF' }}
    >
      Toggle Theme
    </button>
  );
}`
        },
        {
          id: 2,
          question: "Optimize context updates with separate providers",
          difficulty: "Advanced",
          solutionHint: "Split context into state and dispatch providers",
          codeExample: `const UserStateContext = createContext();
const UserDispatchContext = createContext();

function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

// Components that only need dispatch won't re-render on state changes`
        }
      ]
    },
    routing: {
      name: "Routing",
      questions: [
        {
          id: 1,
          question: "Set up basic routing with React Router",
          difficulty: "Intermediate",
          solutionHint: "Use BrowserRouter, Routes, and Route components",
          codeExample: `import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`
        },
        {
          id: 2,
          question: "Implement protected routes that require authentication",
          difficulty: "Advanced",
          solutionHint: "Create a wrapper component that checks auth status",
          codeExample: `function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// Usage:
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>`
        }
      ]
    },
    advanced: {
      name: "Advanced Patterns",
      questions: [
        {
          id: 1,
          question: "Implement a render-as-you-fetch pattern with Suspense",
          difficulty: "Advanced",
          solutionHint: "Start fetching before rendering components",
          codeExample: `function fetchUserData() {
  const promise = fetch('/user').then(res => res.json());
  return wrapPromise(promise);
}

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  
  const suspender = promise.then(
    r => { status = 'success'; result = r; },
    e => { status = 'error'; result = e; }
  );
  
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

function UserProfile() {
  const userData = userDataResource.read();
  return <div>{userData.name}</div>;
}`
        },
        {
          id: 2,
          question: "Create an error boundary component",
          difficulty: "Intermediate",
          solutionHint: "Use componentDidCatch lifecycle method",
          codeExample: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}`
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

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`react-practice-app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>React Practice Questions</h1>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <nav className="topic-nav">
        {Object.keys(topics).map(topic => (
          <button
            key={topic}
            className={`topic-btn ${activeTopic === topic ? 'active' : ''}`}
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

      <main className="questions-container">
        <h2 className="topic-title">{topics[activeTopic].name} Questions ({filteredQuestions.length})</h2>
        
        {filteredQuestions.length === 0 ? (
          <div className="no-results">No questions match your search criteria.</div>
        ) : (
          <ul className="questions-list">
            {filteredQuestions.map(q => {
              const questionKey = `${activeTopic}-${q.id}`;
              
              return (
                <li
                  key={q.id}
                  className={`question-card ${q.difficulty.toLowerCase()}`}
                >
                  <div className="question-header">
                    <div className="question-meta">
                      <span className="question-number">Question {q.id}</span>
                      <span className="difficulty">
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
                      <strong>Solution:</strong>
                      <pre><code>{q.codeExample}</code></pre>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </main>

      <style jsx>{`
        .react-practice-app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
          transition: background 0.3s, color 0.3s;
        }
        
        .dark-mode {
          background: #1a1a1a;
          color: #f0f0f0;
        }
        
        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #eee;
        }
        
        .dark-mode .app-header {
          border-bottom-color: #444;
        }
        
        h1 {
          color: #2c3e50;
          margin: 0;
        }
        
        .dark-mode h1 {
          color: #f0f0f0;
        }
        
        .dark-mode-toggle {
          background: #333;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .dark-mode .dark-mode-toggle {
          background: #555;
        }
        
        .topic-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .topic-btn {
          padding: 8px 15px;
          border: none;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .dark-mode .topic-btn {
          background-color: #333;
          color: #f0f0f0;
        }
        
        .topic-btn:hover {
          background-color: #e0e0e0;
        }
        
        .dark-mode .topic-btn:hover {
          background-color: #444;
        }
        
        .topic-btn.active {
          background-color: #3498db;
          color: white;
        }
        
        .search-container {
          margin: 20px 0;
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
        
        .dark-mode .search-input {
          background: #333;
          color: #f0f0f0;
          border-color: #555;
        }
        
        .clear-search {
          padding: 0 15px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .topic-title {
          color: #3498db;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        
        .dark-mode .topic-title {
          border-bottom-color: #444;
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
        
        .dark-mode .question-card {
          background-color: #2d2d2d;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }
        
        .question-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .dark-mode .question-card:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.4);
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
        
        .dark-mode .question-number {
          color: #f0f0f0;
        }
        
        .difficulty {
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.8em;
          font-weight: bold;
          color: white;
        }
        
        .beginner .difficulty {
          background-color: #2ecc71;
        }
        
        .intermediate .difficulty {
          background-color: #f39c12;
        }
        
        .advanced .difficulty {
          background-color: #e74c3c;
        }
        
        .question-text {
          margin-bottom: 15px;
          line-height: 1.6;
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
        
        .dark-mode .solution-hint,
        .dark-mode .code-example {
          background-color: #3a3a3a;
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
        
        .dark-mode .code-example pre {
          background-color: #1a1a1a;
        }
        
        .no-results {
          text-align: center;
          padding: 40px;
          color: #7f8c8d;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .react-practice-app {
            padding: 15px;
          }
          
          .app-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }
          
          .topic-nav {
            gap: 8px;
          }
          
          .topic-btn {
            padding: 6px 12px;
            font-size: 0.85em;
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

export default ReactPracticeApp;