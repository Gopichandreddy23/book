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
// import InterviewBook from './component/Interview/InterviewBook';
// import InterviewBackendModule from './component/Interview/InterviewBackend';
// import InterviewFrontend from './component/Interview/InterviewFrontend';
// import InterviewDatabase from './component/Interview/InterviewDatabase';
import PracticeJava from './component/Pratice/PracticeJava';
import PracticeCore from './component/Pratice/PracticeCoreJava';
import AdvancedJavaPracticeApp from './component/Pratice/PracticeAdvance';
import PracticeSpring from './component/Pratice/PracticeSpring';
import PNode from './component/Pratice/Pnode';
import PracticeNode from './component/Pratice/PracticeNode';
import PracticeExpress from './component/Pratice/PracticeExpress';
import PracticePython from './component/Pratice/PracticePython';
import PraPython from './component/Pratice/PracticePythons';
import PracticeAdvancedPython from './component/Pratice/PracticeAdvancePython';
import DjangoPractice from './component/Pratice/PracticeDjango';
import MySQLPractice from './component/Pratice/MySqlPractice';
import OraclePractice from './component/Pratice/PracticeOracle';
import PracticeMango from './component/Pratice/MangoPractice';
import HtmlPracticeApp from './component/Pratice/HtmlPractice';
import CssPracticeApp from './component/Pratice/PracticeCss';
import JsPracticeApp from './component/Pratice/JsPractice';
import BootstrapPracticeApp from './component/Pratice/BootstrapPractice';
import TsPracticeApp from './component/Pratice/TypescriptPractice';
import Footer from './component/Footer';
import ReactPracticeApp from './component/Pratice/ReactPractice';
import CoreJavaPDFViewer from './component/corejava';
import AdvanceJavaPDFViewer from './component/advance';

import HtmlPDFViewer from './component/HtmlNotes';
import CssPDFViewer from './component/CssPdf';
import JsPDFViewer from './component/JsPdf';
import ReactPDFViewer from './component/ReactPdf';
import BootstrapPDFViewer from './component/BootstrapPdf';
import TypescriptPDFViewer from './component/TypescriptPdf';
import MongoPDFViewer from './component/MongodbPdf';
import OraclePDFViewer from './component/OraclePdf';
import MysqlPDFViewer from './component/MysqlPdf';
import NodePDFViewer from './component/NodePdf';
import ExpressPDFViewer from './component/ExpressPdf';
import PythonPDFViewer from './component/PythonPdf';
import AdvPDFViewer from './component/AdvancePdf';
import JavaPDFViewer from './component/JavaPdf';

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
           <Route path="/practicenode" element={<PNode/>} />
            <Route path="/practicenodejs" element={<PracticeNode/>} />
             <Route path="/practiceexpress" element={<PracticeExpress/>} />
              <Route path="/practicepythons" element={<PraPython/>} />
              <Route path="/practicepython" element={<PracticePython/>} />
               <Route path="/practicedjango" element={<DjangoPractice/>} />
                <Route path="/practicemysql" element={<MySQLPractice/>} />
                 <Route path="/practiceoracle" element={<OraclePractice/>} />
                 <Route path="/practicemangodb" element={<PracticeMango/>} />
                  <Route path="/practice/html" element={<HtmlPracticeApp/>} />
                  <Route path="/practice/css" element={<CssPracticeApp/>} />
                  <Route path="/practice/js" element={<JsPracticeApp/>} />
                  <Route path="/practice/react" element={<ReactPracticeApp/>} />
                  <Route path="/practice/typescript" element={<TsPracticeApp/>} />
                   <Route path="/practice/bootstrap" element={<BootstrapPracticeApp/>} />
                      <Route path="/practiceadvancepython" element={<PracticeAdvancedPython/>} />
           <Route path="/practiceadvance" element={<AdvancedJavaPracticeApp/>} />
            <Route path="/practicespring" element={<PracticeSpring/>} />
                  {/* <Route path="/interview" element={<InterviewBook />} />
         <Route path="/interviewbackend" element={<InterviewBackendModule/>} />
         <Route path="/interviewfrontend" element={<InterviewFrontend/>} />
          <Route path="/interviewdatabase" element={<InterviewDatabase/>} /> */}
        <Route path="/backend" element={<BackendModule />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/database" element={<Database />} />
        <Route path="/java" element={<Java />} />
        {/* <Route path="/python" element={<Python />} /> */}
        <Route path="/node" element={<Node />} />
        <Route path="/spring" element={<SpringPDFViewer />} />
        <Route path="/htmlpdf" element={<HtmlPDFViewer />} />
        <Route path="/csspdf" element={<CssPDFViewer />} />
        <Route path="/jspdf" element={<JsPDFViewer />} />
        <Route path="/reactpdf" element={<ReactPDFViewer />} />
        <Route path="/java/pdf" element={<CoreJavaPDFViewer />} />
        <Route path="/advancejava/pdf" element={<AdvanceJavaPDFViewer />} />
         <Route path="/reactpdf" element={<ReactPDFViewer />} />
         <Route path="/bootstrapPdf" element={<BootstrapPDFViewer />} />
         <Route path="/typescriptPdf" element={<TypescriptPDFViewer />} />
         <Route path="/mongopdf" element={<MongoPDFViewer />} />
          <Route path="/oraclepdf" element={<OraclePDFViewer />} />
           <Route path="/mysqlpdf" element={<MysqlPDFViewer />} />
           <Route path="/nodepdf" element={<NodePDFViewer />} />
           <Route path="/expresspdf" element={<ExpressPDFViewer />} />
           <Route path="/pythonpdf" element={<PythonPDFViewer />} />
           <Route path="/advpdf" element={<AdvPDFViewer />} />
           <Route path="/javapdf" element={<JavaPDFViewer />} />
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
};