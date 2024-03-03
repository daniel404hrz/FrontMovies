import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {  Route, Routes } from 'react-router-dom';
import LoginREG from './components/forms/LoginREG';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState(false);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies');
    
        
        setMovies(response.data);
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchData();

}, []);
  return (
    
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home movies={movies}/>} />
          <Route path="/login" element={<LoginREG />} />
          <Route path="/login/create" element={<LoginREG isCreate={true} />} />
          
          

        </Routes>
      </div>
    
  );
}

export default App;
