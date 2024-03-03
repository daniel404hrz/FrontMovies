import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {  Route, Routes } from 'react-router-dom';
import LoginREG from './components/forms/LoginREG';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice';
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState(false);
  const localSessionCookie = Cookies.get('localSession');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies');
        const resAuth = localSessionCookie && await axios.get(`http://localhost:3000/user/1`);
        localSessionCookie && dispatch(setUser(resAuth.data)); 
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
