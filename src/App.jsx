import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/home/Home";
import Navigation from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginREG from "./components/forms/LoginREG";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/userSlice";
import Cookies from "js-cookie";
import { getMovies } from "./redux/tools";
import { setMovies } from "./redux/moviesSlice";
import MovieDetail from "./components/movies/MovieDetail";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const localCookie = Cookies.get("localSession");
  const user = useSelector((state) => state.user);

  const fetchData = async () => {
    try {
      if (localCookie && !user.login) {
        const resAuth = await axios.get(`http://localhost:3000/user/1`);
        dispatch(setUser(resAuth.data));
      }
  
      const movies = await getMovies();

      dispatch(setMovies(movies));
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
  const handleLikeMovie = async (movieId, value, userId) => {
    try {
      await axios.put(
        `http://localhost:3000/movies_like/${movieId}/${value}/${userId}`
      );

      fetchData();
    } catch (error) {
      console.error("Error al dar like a la película:", error);
      // Manejar errores
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} handleLikeMovie={handleLikeMovie} />}
        />
        <Route path="/login" element={<LoginREG />} />
        <Route path="/login/create" element={<LoginREG isCreate={true} />} />
        <Route path="/movie/:id" element={<MovieDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
