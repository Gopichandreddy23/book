import React, { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Animations
const floatUp = keyframes`
  0% {
    transform: translateY(100vh) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-150px) scale(1) rotate(360deg);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
`;

// Global Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    overflow-x: hidden;
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: #fff;
  }
`;

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const BackgroundAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  box-shadow: 0 0 10px rgba(255,255,255,0.1);
  animation: ${floatUp} linear infinite;
  opacity: 0;
`;

const Header = styled.header`
  text-align: center;
  padding: 2.5rem 2rem;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 1;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 0.75rem;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 50%, #4facfe 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${gradientFlow} 3s linear infinite;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255,255,255,0.7);
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  animation: ${fadeIn} 0.6s ease-out;
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.8rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TopicCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.8rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.delay * 0.1}s;
  opacity: 0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.12);
    
    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    opacity: ${props => props.isActive ? 1 : 0};
    transition: opacity 0.3s ease;
  }

  &.active {
    background: rgba(255, 255, 255, 0.15);
    grid-column: 1 / -1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #4facfe;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after {
      content: '${props => props.isActive ? '−' : '+'}';
      font-size: 1.8rem;
      color: rgba(255,255,255,0.5);
      transition: transform 0.3s ease;
    }
  }

  &.active h3::after {
    transform: rotate(180deg);
  }
`;

const QuestionsList = styled.div`
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.4s ease-out;

  ol {
    padding-left: 1.8rem;
    display: grid;
    gap: 1rem;
  }

  li {
    line-height: 1.6;
    color: rgba(255,255,255,0.8);
    padding-left: 1rem;
    position: relative;
    transition: color 0.2s ease;

    &:hover {
      color: #fff;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.7em;
      width: 8px;
      height: 8px;
      background: #4facfe;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.8rem;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;

  p {
    color: rgba(255,255,255,0.6);
    font-size: 0.95rem;
    letter-spacing: 0.5px;
  }
`;

// Main Component
const PracticeCore = () => {
  const [activeTopic, setActiveTopic] = useState(null);

  // Generate animated bubbles
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 40 + 10,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 10,
    blur: Math.random() * 3 + 1
  }));

  // All Core Java practice topics and questions
  const topics = [
    {
      id: 'basics',
      title: 'Basics of Java',
      questions: [
        "Write a Java program to print 'Hello, World!' to the console.",
        "Declare variables of all primitive data types in Java and print their values.",
        "Write a program to demonstrate automatic type conversion and explicit type casting.",
        "Write a program to demonstrate arithmetic, relational, logical, and bitwise operators.",
        "Create a program to swap two numbers without using a temporary variable."
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow Statements',
      questions: [
        "Write a program to check if a number is positive, negative, or zero.",
        "Create a program to find the largest among three numbers.",
        "Write a program to print the day of the week based on a number (1-7).",
        "Create a simple calculator using switch case.",
        "Write a program to print numbers from 1 to 10 using for, while, and do-while loops.",
        "Create a program to print Fibonacci series up to n terms.",
        "Write a program to check if a number is prime or not."
      ]
    },
    {
      id: 'arrays',
      title: 'Arrays',
      questions: [
        "Write a program to find the sum and average of array elements.",
        "Create a program to find the largest and smallest element in an array.",
        "Write a program to reverse an array.",
        "Write a program to add two matrices.",
        "Create a program to multiply two matrices.",
        "Write a program to find the transpose of a matrix."
      ]
    },
    {
      id: 'methods',
      title: 'Methods',
      questions: [
        "Write a method to calculate the factorial of a number.",
        "Create a method to check if a number is palindrome.",
        "Write a method to compute the area of a circle.",
        "Create overloaded methods to calculate area for different shapes (circle, rectangle, triangle).",
        "Write overloaded methods to concatenate strings or add numbers based on parameters.",
        "Write a recursive method to calculate factorial.",
        "Create a recursive method to print Fibonacci series.",
        "Write a recursive method to solve the Tower of Hanoi problem."
      ]
    },
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      questions: [
        "Create a class 'Student' with attributes like name, roll number, and marks. Create objects and display their information.",
        "Write a program to demonstrate the difference between instance variables and local variables.",
        "Create a class with default and parameterized constructors.",
        "Write a program to demonstrate constructor overloading.",
        "Create a class with a copy constructor.",
        "Create a class hierarchy with Animal as superclass and Dog, Cat as subclasses.",
        "Demonstrate method overriding by creating a parent class Shape with method area() and child classes Circle, Rectangle overriding it.",
        "Write a program to demonstrate the use of super keyword.",
        "Write a program to demonstrate runtime polymorphism through method overriding.",
        "Create an abstract class with abstract and concrete methods.",
        "Create an interface with methods and implement it in a class.",
        "Write a program to demonstrate multiple inheritance using interfaces.",
        "Create a functional interface and implement it using lambda expression."
      ]
    },
    {
      id: 'exceptions',
      title: 'Exception Handling',
      questions: [
        "Write a program to handle ArithmeticException and NullPointerException.",
        "Create a program to demonstrate multiple catch blocks.",
        "Write a program to demonstrate the use of finally block with and without exception.",
        "Create a custom exception class for age validation (throw exception if age < 18).",
        "Write a program to demonstrate exception propagation."
      ]
    },
    {
      id: 'collections',
      title: 'Collections Framework',
      questions: [
        "Write a program to demonstrate ArrayList operations (add, remove, iterate).",
        "Create a program to sort an ArrayList of strings and numbers.",
        "Write a program to demonstrate HashSet and TreeSet.",
        "Create a program to find common elements between two arrays using sets.",
        "Write a program to demonstrate HashMap operations.",
        "Create a program to count the occurrence of each word in a string using HashMap.",
        "Write a program to demonstrate PriorityQueue.",
        "Implement a simple queue using LinkedList."
      ]
    },
    {
      id: 'generics',
      title: 'Generics',
      questions: [
        "Write a generic method to print arrays of different types.",
        "Create a generic method to find the maximum element in an array.",
        "Create a generic class Box that can hold any type of object.",
        "Write a generic class to implement a simple stack."
      ]
    },
    {
      id: 'multithreading',
      title: 'Multithreading',
      questions: [
        "Write a program to create a thread by extending Thread class.",
        "Create a thread by implementing Runnable interface.",
        "Write a program to demonstrate thread synchronization using synchronized method.",
        "Create a program to demonstrate deadlock situation.",
        "Write a program to demonstrate wait() and notify() methods."
      ]
    },
    {
      id: 'io',
      title: 'Input/Output',
      questions: [
        "Write a program to read from a file and display its content.",
        "Create a program to write data to a file.",
        "Write a program to copy contents from one file to another.",
        "Write a program to serialize and deserialize an object."
      ]
    },
    {
      id: 'java8',
      title: 'Java 8 Features',
      questions: [
        "Write a program to implement Runnable using lambda expression.",
        "Create a list of strings and sort it using lambda expression.",
        "Write a program to filter and print even numbers from a list using streams.",
        "Create a program to convert a list of strings to uppercase using streams.",
        "Write a program to demonstrate Predicate, Function, and Consumer interfaces.",
        "Implement a custom functional interface using lambda expression."
      ]
    },
    {
      id: 'misc',
      title: 'Miscellaneous',
      questions: [
        "Write a program to reverse a string.",
        "Create a program to check if a string is palindrome.",
        "Write a program to count vowels and consonants in a string.",
        "Write a program to display current date and time.",
        "Create a program to calculate the difference between two dates.",
        "Create an enum for days of the week and write a program to print all values.",
        "Write a program to demonstrate enum with constructor and methods.",
        "Create a custom annotation and use it in a program.",
        "Write a program to demonstrate @Override and @Deprecated annotations.",
        "Write a program to get class information using reflection.",
        "Create a program to invoke a method using reflection."
      ]
    }
  ];

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <BackgroundAnimation>
          {bubbles.map(bubble => (
            <Bubble 
              key={bubble.id}
              style={{
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animationDuration: `${bubble.duration}s`,
                animationDelay: `${bubble.delay}s`,
                filter: `blur(${bubble.blur}px)`
              }}
            />
          ))}
        </BackgroundAnimation>
        
        <Header>
          <h1>Core Java Practice Questions</h1>
          <p>Click on any topic to view practice questions and enhance your Java skills</p>
        </Header>

        <Content>
          <TopicsGrid>
            {topics.map((topic, index) => (
              <TopicCard 
                key={topic.id}
                isActive={activeTopic === topic.id}
                className={activeTopic === topic.id ? 'active' : ''}
                onClick={() => setActiveTopic(activeTopic === topic.id ? null : topic.id)}
                delay={index}
              >
                <h3>{topic.title}</h3>
                {activeTopic === topic.id && (
                  <QuestionsList>
                    <ol>
                      {topic.questions.map((question, qIndex) => (
                        <li key={qIndex}>{question}</li>
                      ))}
                    </ol>
                  </QuestionsList>
                )}
              </TopicCard>
            ))}
          </TopicsGrid>
        </Content>

        <Footer>
          <p>Core Java Practice App • Enhanced with Advanced Animations</p>
        </Footer>
      </AppContainer>
    </>
  );
};

export default PracticeCore;