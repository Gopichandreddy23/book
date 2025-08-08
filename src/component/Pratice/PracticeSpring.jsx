import React, { useState } from 'react';

const PracticeSpring = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('spring-core');
  
  // All practice questions organized by topic
  const questionsByTopic = {
    'spring-core': [
      {
        id: 1,
        question: "Implement a Spring application that demonstrates dependency injection using both constructor and setter injection for a CustomerService that depends on CustomerRepository.",
        difficulty: "Beginner",
        solutionHint: "Use @Autowired on constructor and setter methods, or configure in XML with <constructor-arg> and <property>."
      },
      {
        id: 2,
        question: "Create a Spring Bean lifecycle demonstration that shows initialization and destruction callbacks using both XML configuration and annotations.",
        difficulty: "Intermediate",
        solutionHint: "Implement InitializingBean, DisposableBean interfaces or use @PostConstruct and @PreDestroy annotations."
      },
      {
        id: 3,
        question: "Develop a custom Spring scope ('tenant') that creates separate bean instances for different tenants in a multi-tenant application.",
        difficulty: "Advanced",
        solutionHint: "Implement Scope interface and register it with ConfigurableBeanFactory.registerScope()."
      },
      {
        id: 4,
        question: "Create a Spring application that loads different property files based on active profiles (dev, test, prod) and injects properties into beans.",
        difficulty: "Intermediate",
        solutionHint: "Use @PropertySource with @Profile and @Value annotations or Environment API."
      },
      {
        id: 5,
        question: "Implement a Spring FactoryBean that creates a complex object (like a connection pool) with configurable properties.",
        difficulty: "Advanced",
        solutionHint: "Implement FactoryBean interface and override getObject(), getObjectType(), and isSingleton() methods."
      }
    ],
    'spring-aop': [
      {
        id: 1,
        question: "Create an aspect that logs method execution time for all methods in service layer classes annotated with @Service.",
        difficulty: "Beginner",
        solutionHint: "Use @Around advice with @Pointcut targeting classes annotated with @Service."
      },
      {
        id: 2,
        question: "Implement a retry mechanism using AOP that retries a method up to 3 times when a specific exception occurs.",
        difficulty: "Intermediate",
        solutionHint: "Create a custom annotation @RetryOnFailure and use @Around advice to implement retry logic."
      },
      {
        id: 3,
        question: "Develop a security aspect that checks for user permissions before executing methods annotated with @Secured(role='ADMIN').",
        difficulty: "Advanced",
        solutionHint: "Use @Before advice to intercept method calls and check permissions against current user's roles."
      },
      {
        id: 4,
        question: "Create an aspect that caches method results using a custom @Cacheable annotation with configurable TTL.",
        difficulty: "Intermediate",
        solutionHint: "Implement @Around advice to check cache before method execution and store results after execution."
      },
      {
        id: 5,
        question: "Implement a circuit breaker pattern using AOP that trips after 5 consecutive failures and stays open for 30 seconds.",
        difficulty: "Advanced",
        solutionHint: "Use @Around advice with state management to track failures and implement the circuit breaker logic."
      }
    ],
    'spring-jdbc': [
      {
        id: 1,
        question: "Implement a Spring JDBC application that uses JdbcTemplate to query all records from a 'products' table and map them to Product objects.",
        difficulty: "Beginner",
        solutionHint: "Use RowMapper or BeanPropertyRowMapper with JdbcTemplate.query() method."
      },
      {
        id: 2,
        question: "Create a batch insert operation using JdbcTemplate that inserts 1000 records into a 'transactions' table efficiently.",
        difficulty: "Intermediate",
        solutionHint: "Use JdbcTemplate.batchUpdate() with BatchPreparedStatementSetter."
      },
      {
        id: 3,
        question: "Implement transaction management in a Spring JDBC application that transfers funds between two accounts atomically.",
        difficulty: "Advanced",
        solutionHint: "Use @Transactional annotation or TransactionTemplate for programmatic transaction management."
      },
      {
        id: 4,
        question: "Develop a custom exception translator that converts SQL exceptions to meaningful business exceptions in a Spring JDBC application.",
        difficulty: "Intermediate",
        solutionHint: "Implement SQLExceptionTranslator interface and configure it with JdbcTemplate."
      },
      {
        id: 5,
        question: "Create a multi-data source Spring application that can switch between different databases at runtime based on a tenant identifier.",
        difficulty: "Advanced",
        solutionHint: "Implement AbstractRoutingDataSource and configure multiple data sources with @Primary annotation."
      }
    ],
    'spring-orm': [
      {
        id: 1,
        question: "Implement a Spring ORM application using Hibernate that performs CRUD operations on an 'Employee' entity with proper transaction management.",
        difficulty: "Beginner",
        solutionHint: "Configure LocalSessionFactoryBean and use HibernateTemplate or @Transactional with Hibernate Session."
      },
      {
        id: 2,
        question: "Create a Spring application that demonstrates lazy loading of entity relationships (OneToMany) with OpenSessionInView pattern.",
        difficulty: "Intermediate",
        solutionHint: "Configure OpenSessionInViewFilter/Interceptor and use FetchType.LAZY with proper transaction boundaries."
      },
      {
        id: 3,
        question: "Implement a custom Hibernate event listener in Spring that audits all entity changes (create, update, delete) to an audit table.",
        difficulty: "Advanced",
        solutionHint: "Implement specific Hibernate event interfaces and register them with LocalSessionFactoryBean."
      },
      {
        id: 4,
        question: "Develop a Spring application that uses Hibernate second-level cache with Ehcache for frequently accessed reference data.",
        difficulty: "Intermediate",
        solutionHint: "Configure Ehcache and enable second-level cache in Hibernate properties with @Cacheable annotation on entities."
      },
      {
        id: 5,
        question: "Create a multi-tenant Spring ORM application where each tenant has a separate schema but shares the same database connection pool.",
        difficulty: "Advanced",
        solutionHint: "Implement CurrentTenantIdentifierResolver and MultiTenantConnectionProvider with Hibernate's multi-tenancy support."
      }
    ],
    'spring-data-jpa': [
      {
        id: 1,
        question: "Create a Spring Data JPA repository for a 'Customer' entity with methods to find by email, name containing, and age greater than.",
        difficulty: "Beginner",
        solutionHint: "Extend JpaRepository and use query derivation or @Query annotation for custom methods."
      },
      {
        id: 2,
        question: "Implement a Spring Data JPA application with pagination and sorting for a large dataset of products.",
        difficulty: "Intermediate",
        solutionHint: "Use Pageable parameter in repository methods and return Page<T> with @Query."
      },
      {
        id: 3,
        question: "Develop a custom Spring Data JPA repository with a fragment interface that adds soft delete functionality to all entities.",
        difficulty: "Advanced",
        solutionHint: "Create a custom repository base class with @NoRepositoryBean and use @EntityListeners for soft delete logic."
      },
      {
        id: 4,
        question: "Create a Spring Data JPA projection that returns only selected fields (name, email) from a large User entity for performance optimization.",
        difficulty: "Intermediate",
        solutionHint: "Use interface-based or class-based projections with @Query or query derivation."
      },
      {
        id: 5,
        question: "Implement an event-sourced architecture using Spring Data JPA where all changes to aggregates are stored as a sequence of events.",
        difficulty: "Advanced",
        solutionHint: "Use @DomainEvents and @AfterDomainEventPublication on aggregate roots with a separate event store repository."
      }
    ],
    'spring-mvc': [
      {
        id: 1,
        question: "Create a Spring MVC controller that handles a GET request to '/products' and returns a JSON list of all products.",
        difficulty: "Beginner",
        solutionHint: "Use @RestController or @Controller with @ResponseBody and @GetMapping annotations."
      },
      {
        id: 2,
        question: "Implement a form submission handler in Spring MVC that validates user input and returns field-specific error messages.",
        difficulty: "Intermediate",
        solutionHint: "Use @Valid with BindingResult and @ControllerAdvice for global exception handling."
      },
      {
        id: 3,
        question: "Develop a RESTful API with Spring MVC that supports content negotiation (JSON/XML) and versioning through Accept headers.",
        difficulty: "Advanced",
        solutionHint: "Configure HttpMessageConverters and use @RequestMapping with produces/consumes attributes."
      },
      {
        id: 4,
        question: "Create a Spring MVC application with file upload capability that validates file type and size before processing.",
        difficulty: "Intermediate",
        solutionHint: "Use MultipartFile with @RequestParam and configure MultipartResolver with size limits."
      },
      {
        id: 5,
        question: "Implement a HATEOAS-driven REST API with Spring MVC where resources contain links to related resources and actions.",
        difficulty: "Advanced",
        solutionHint: "Use Spring HATEOAS's ResourceSupport/Resource and linkTo() method to create hypermedia links."
      }
    ],
    'spring-security': [
      {
        id: 1,
        question: "Configure Spring Security to protect all admin URLs (/admin/**) with HTTP Basic authentication while leaving other URLs public.",
        difficulty: "Beginner",
        solutionHint: "Extend WebSecurityConfigurerAdapter and use http.authorizeRequests().antMatchers().hasRole()"
      },
      {
        id: 2,
        question: "Implement a custom UserDetailsService that loads user information from a database with password hashing using BCrypt.",
        difficulty: "Intermediate",
        solutionHint: "Implement UserDetailsService interface and configure PasswordEncoder with BCryptPasswordEncoder."
      },
      {
        id: 3,
        question: "Develop an OAuth2 resource server with Spring Security that validates JWT tokens from an authorization server.",
        difficulty: "Advanced",
        solutionHint: "Use @EnableResourceServer and configure ResourceServerConfigurerAdapter with JwtTokenStore."
      },
      {
        id: 4,
        question: "Create a multi-factor authentication system with Spring Security that requires both password and SMS code for login.",
        difficulty: "Intermediate",
        solutionHint: "Implement custom AuthenticationProvider and extend the authentication flow with additional filters."
      },
      {
        id: 5,
        question: "Implement method-level security in a microservice that checks for custom permissions based on business rules.",
        difficulty: "Advanced",
        solutionHint: "Create custom PermissionEvaluator and use @PreAuthorize with hasPermission() expressions."
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
        <h1>Spring Framework Practice Questions</h1>
        <nav className="topic-nav">
          <button 
            className={activeTopic === 'spring-core' ? 'active' : ''}
            onClick={() => setActiveTopic('spring-core')}
          >
            Spring Core
          </button>
          <button 
            className={activeTopic === 'spring-aop' ? 'active' : ''}
            onClick={() => setActiveTopic('spring-aop')}
          >
            Spring AOP
          </button>
          <button 
            className={activeTopic === 'spring-jdbc' ? 'active' : ''}
            onClick={() => setActiveTopic('spring-jdbc')}
          >
            Spring JDBC
          </button>
          <button 
            className={activeTopic === 'spring-orm' ? 'active' : ''}
            onClick={() => setActiveTopic('spring-orm')}
          >
            Spring ORM
          </button>
          <button 
            className={activeTopic === 'spring-data-jpa' ? 'active' : ''}
            onClick={() => setActiveTopic('spring-data-jpa')}
          >
            Spring Data JPA
          </button>
          <button 
            className={activeTopic === 'spring-mvc' ? 'active' : ''}
            onClick={() => setActiveTopic('spring-mvc')}
          >
            Spring MVC
          </button>
          <button 
            className={activeTopic === 'spring-security' ? 'active' : ''}
            onClick={() => setActiveTopic('spring-security')}
          >
            Spring Security
          </button>
        </nav>
      </header>

      <main>
        <div className="questions-container">
          <h2>{activeTopic.replace('-', ' ').toUpperCase()} Questions</h2>
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
          max-width: 1200px;
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
          text-transform: capitalize;
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
          font-size: 0.9em;
          white-space: nowrap;
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
            gap: 8px;
          }
          
          .topic-nav button {
            padding: 6px 12px;
            font-size: 0.8em;
          }
        }
      `}</style>
    </div>
  );
};

export default PracticeSpring;