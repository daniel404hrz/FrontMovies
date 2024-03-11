import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import moviesSlice from './moviesSlice';

const store = configureStore({
  reducer: {
    // Agrega tus reducers aquí
    user: userSlice,
    // Puedes agregar más reducers según sea necesario
    movies:moviesSlice,
  },
});

export default store;