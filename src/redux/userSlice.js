import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial del slice
const initialState = {
  userLocal:{},
  login:false,
  id:''

};

// Crea un slice de Redux Toolkit
const userSlice = createSlice({
  name: 'user', // Nombre del slice
  initialState,
  reducers: {
    // Define acciones (reducers) aquí
    setUser: (state, action) => {
      const { userData } = action.payload;
      
      state.userLocal = userData;
      state.id = action.payload.id;
      state.login = true;
      
    },
    setDelUser: (state, action) => {
      state.userLocal = {};
      state.login=false
      
    },
    // Agrega más acciones según sea necesario
  },
});

// Exporta las acciones del slice
export const { setUser, setLoading, setError,setDelUser } = userSlice.actions;

// Exporta el reducer del slice
export default userSlice.reducer;