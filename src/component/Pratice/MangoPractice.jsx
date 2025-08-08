import React, { useState } from 'react';

const PracticeMango = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // MongoDB topics and questions
  const topics = {
    basics: {
      name: "MongoDB Basics",
      questions: [
        {
          id: 1,
          question: "Connect to a MongoDB database using Node.js",
          difficulty: "Beginner",
          solutionHint: "Use the MongoClient from mongodb package",
          codeExample: `const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    return client.db('mydatabase');
  } catch (err) {
    console.error('Connection error:', err);
  }
}`
        },
        {
          id: 2,
          question: "Insert a single document into a collection",
          difficulty: "Beginner",
          solutionHint: "Use the insertOne method on a collection",
          codeExample: `async function insertDocument(db) {
  const collection = db.collection('users');
  const doc = { name: 'John Doe', age: 30, email: 'john@example.com' };
  
  const result = await collection.insertOne(doc);
  console.log(\`Inserted document with _id: \${result.insertedId}\`);
}`
        },
        {
          id: 3,
          question: "Find all documents in a collection",
          difficulty: "Beginner",
          solutionHint: "Use the find method with toArray()",
          codeExample: `async function findAllDocuments(db) {
  const collection = db.collection('users');
  const documents = await collection.find({}).toArray();
  console.log('Found documents:', documents);
}`
        },
        {
          id: 4,
          question: "Find documents with a specific condition",
          difficulty: "Beginner",
          solutionHint: "Pass a query object to the find method",
          codeExample: `async function findDocumentsByAge(db) {
  const collection = db.collection('users');
  const query = { age: { $gt: 25 } };
  const documents = await collection.find(query).toArray();
  console.log('Users over 25:', documents);
}`
        },
        {
          id: 5,
          question: "Update a single document",
          difficulty: "Beginner",
          solutionHint: "Use the updateOne method",
          codeExample: `async function updateDocument(db) {
  const collection = db.collection('users');
  const filter = { name: 'John Doe' };
  const update = { $set: { age: 31 } };
  
  const result = await collection.updateOne(filter, update);
  console.log(\`Updated \${result.modifiedCount} document\`);
}`
        },
        {
          id: 6,
          question: "Delete a single document",
          difficulty: "Intermediate",
          solutionHint: "Use the deleteOne method",
          codeExample: `async function deleteDocument(db) {
  const collection = db.collection('users');
  const query = { name: 'John Doe' };
  
  const result = await collection.deleteOne(query);
  console.log(\`Deleted \${result.deletedCount} document\`);
}`
        },
        {
          id: 7,
          question: "Create an index on a field",
          difficulty: "Intermediate",
          solutionHint: "Use the createIndex method",
          codeExample: `async function createEmailIndex(db) {
  const collection = db.collection('users');
  const result = await collection.createIndex({ email: 1 }, { unique: true });
  console.log('Index created:', result);
}`
        },
        {
          id: 8,
          question: "Perform an aggregation pipeline",
          difficulty: "Intermediate",
          solutionHint: "Use the aggregate method with pipeline stages",
          codeExample: `async function aggregateUsers(db) {
  const collection = db.collection('users');
  const pipeline = [
    { $match: { age: { $gt: 25 } } },
    { $group: { _id: "$age", count: { $sum: 1 } } }
  ];
  
  const results = await collection.aggregate(pipeline).toArray();
  console.log('Aggregation results:', results);
}`
        },
        {
          id: 9,
          question: "Use transactions for multiple operations",
          difficulty: "Advanced",
          solutionHint: "Start a session and use withTransaction",
          codeExample: `async function transferFunds(db) {
  const session = client.startSession();
  
  try {
    await session.withTransaction(async () => {
      const accounts = db.collection('accounts');
      
      // Deduct from account A
      await accounts.updateOne(
        { _id: 'A' },
        { $inc: { balance: -100 } },
        { session }
      );
      
      // Add to account B
      await accounts.updateOne(
        { _id: 'B' },
        { $inc: { balance: 100 } },
        { session }
      );
    });
  } finally {
    await session.endSession();
  }
}`
        },
        {
          id: 10,
          question: "Implement text search on documents",
          difficulty: "Intermediate",
          solutionHint: "Create a text index and use $text operator",
          codeExample: `async function textSearch(db) {
  const collection = db.collection('articles');
  
  // First create a text index (only need to do this once)
  await collection.createIndex({ content: 'text' });
  
  // Then perform the search
  const results = await collection.find({
    $text: { $search: 'mongodb tutorial' }
  }).toArray();
  
  console.log('Search results:', results);
}`
        }
      ]
    },
    advanced: {
      name: "Advanced MongoDB",
      questions: [
        {
          id: 11,
          question: "Implement change streams to watch for data changes",
          difficulty: "Advanced",
          solutionHint: "Use the watch method on a collection",
          codeExample: `async function watchCollectionChanges(db) {
  const collection = db.collection('users');
  const changeStream = collection.watch();
  
  changeStream.on('change', (change) => {
    console.log('Change detected:', change);
  });
  
  // Later you can close the stream with changeStream.close();
}`
        },
        {
          id: 12,
          question: "Perform a bulk write operation",
          difficulty: "Intermediate",
          solutionHint: "Use the bulkWrite method with an array of operations",
          codeExample: `async function bulkWriteOperations(db) {
  const collection = db.collection('products');
  
  const result = await collection.bulkWrite([
    { insertOne: { document: { name: 'Product A', price: 10 } } },
    { updateOne: { 
        filter: { name: 'Product B' },
        update: { $set: { price: 20 } }
    }},
    { deleteOne: { filter: { name: 'Product C' } } }
  ]);
  
  console.log('Bulk write result:', result);
}`
        },
        {
          id: 13,
          question: "Implement geospatial queries",
          difficulty: "Advanced",
          solutionHint: "Create a 2dsphere index and use $near or $geoWithin",
          codeExample: `async function findNearbyLocations(db) {
  const collection = db.collection('places');
  
  // First create a geospatial index (only need to do this once)
  await collection.createIndex({ location: '2dsphere' });
  
  // Then perform the query
  const results = await collection.find({
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [-73.9667, 40.78] // Longitude, Latitude
        },
        $maxDistance: 1000 // meters
      }
    }
  }).toArray();
  
  console.log('Nearby locations:', results);
}`
        },
        {
          id: 14,
          question: "Use $lookup to perform a join between collections",
          difficulty: "Intermediate",
          solutionHint: "Use $lookup in an aggregation pipeline",
          codeExample: `async function joinCollections(db) {
  const orders = db.collection('orders');
  
  const results = await orders.aggregate([
    {
      $lookup: {
        from: 'customers',
        localField: 'customerId',
        foreignField: '_id',
        as: 'customer'
      }
    },
    { $unwind: '$customer' }
  ]).toArray();
  
  console.log('Orders with customer data:', results);
}`
        },
        {
          id: 15,
          question: "Implement pagination with skip and limit",
          difficulty: "Intermediate",
          solutionHint: "Chain skip() and limit() after find()",
          codeExample: `async function paginateResults(db, page = 1, pageSize = 10) {
  const collection = db.collection('products');
  const skip = (page - 1) * pageSize;
  
  const results = await collection.find({})
    .skip(skip)
    .limit(pageSize)
    .toArray();
  
  console.log(\`Page \${page} results:\`, results);
  return results;
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

  return (
    <div className="node-practice-app">
      <header>
        <h1>MongoDB Practice Questions</h1>
        
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

export default PracticeMango;