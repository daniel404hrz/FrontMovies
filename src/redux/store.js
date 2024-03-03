import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    // Agrega tus reducers aquí
    user: userSlice,
    // Puedes agregar más reducers según sea necesario
  },
});

export default store;