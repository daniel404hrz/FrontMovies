import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial del slice
const initialState = {
  movies:{},
  movie:{hola:"hola"}
};

// Crea un slice de Redux Toolkit
const moviesSlice = createSlice({
  name: 'movies', // Nombre del slice
  initialState,  // Estado inicial
  reducers: {
    // Define acciones (reducers) aquí
    setMovies: (state, action) => {
      state.movies = action.payload;
      
    },setMov: (state,action)=>{
      state.movie = action.payload
    }
    
    
    
    // Agrega más acciones según sea necesario
  },
});

// Exporta las acciones del slice
export const { setMovies, setMov} = moviesSlice.actions;

// Exporta el reducer del slice
export default moviesSlice.reducer;