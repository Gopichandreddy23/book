import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // BrowserRouter is imported here
import Header from './component/Header';
import { HeroSection } from './component/Herosection';
import About from './component/About';
import BookItCards from './component/Book';
import BackendModule from './component/Backend';
import Java from './component/java';
import Python from './component/python';
import Node from './component/node';
import Frontend from './component/frontend';
import Database from './component/database';
import SpringPDFViewer from './component/Spring';
import PraticeBook from './component/Pratice/PraticeBook';
import PracticeBackendModule from './component/Pratice/PracticeBackend';
import PracticeDatabase from './component/Pratice/PracticeDatabase';
import PracticeFrontend from './component/Pratice/PracticeFrontend';
import InterviewBook from './component/Interview/InterviewBook';
import InterviewBackendModule from './component/Interview/InterviewBackend';
import InterviewFrontend from './component/Interview/InterviewFrontend';
import InterviewDatabase from './component/Interview/InterviewDatabase';
import PracticeJava from './component/Pratice/PracticeJava';
import PracticeCore from './component/Pratice/PracticeCoreJava';

export const App = () => {
  return (
    <BrowserRouter>
      {/* Header appears on all pages */}
      <Header />
      
      <Routes>
        {/* Home route - shows HeroSection and About */}
        <Route path="/" element={
          <>
            <HeroSection />
            {/* <About /> */}
          </>
        } />
        
        {/* Book route - shows only BookItCards */}
        <Route path="/book" element={<BookItCards />} />
         <Route path="/practice" element={<PraticeBook />} />
         <Route path="/practicebackend" element={<PracticeBackendModule/>} />
         <Route path="/practicefrontend" element={<PracticeFrontend/>} />
          <Route path="/practicedatabase" element={<PracticeDatabase/>} />
          <Route path="/practicejava" element={<PracticeJava/>} />
          <Route path="/practicecorejava" element={<PracticeCore/>} />
                  <Route path="/interview" element={<InterviewBook />} />
         <Route path="/interviewbackend" element={<InterviewBackendModule/>} />
         <Route path="/interviewfrontend" element={<InterviewFrontend/>} />
          <Route path="/interviewdatabase" element={<InterviewDatabase/>} />
        <Route path="/backend" element={<BackendModule />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/database" element={<Database />} />
        <Route path="/java" element={<Java />} />
        <Route path="/python" element={<Python />} />
        <Route path="/node" element={<Node />} />
        <Route path="/spring" element={<SpringPDFViewer />} />
      </Routes>
    </BrowserRouter>
  );
};