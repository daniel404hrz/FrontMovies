import React from 'react';
import './App.css';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {  Route, Routes } from 'react-router-dom';


function App() {
  return (
    
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          

        </Routes>
      </div>
    
  );
}

export default App;
