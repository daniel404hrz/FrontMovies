import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial del slice
const initialState = {
  movies:{}
};

// Crea un slice de Redux Toolkit
const moviesSlice = createSlice({
  name: 'movies', // Nombre del slice
  initialState,  // Estado inicial
  reducers: {
    // Define acciones (reducers) aquí
    setMovies: (state, action) => {
      state.movies = action.payload;
      
    },
    
    
    // Agrega más acciones según sea necesario
  },
});

// Exporta las acciones del slice
export const { setMovies} = moviesSlice.actions;

// Exporta el reducer del slice
export default moviesSlice.reducer;