import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'; 
import Home from './Home'; 
import Projects from './Projects'; 
import Project from './Project'; 
import Contact from './Contact'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/projects/:projectId" element={<Project />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
