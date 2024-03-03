import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial del slice
const initialState = {
  name: false,
  login: false,
  id: false,
  rol:false
};

// Crea un slice de Redux Toolkit
const userSlice = createSlice({
  name: 'user', // Nombre del slice
  initialState,  // Estado inicial
  reducers: {
    // Define acciones (reducers) aquí
    setUser: (state, action) => {
       
      state.name = action.payload.userData.nombre;
      state.id = action.payload.id;
      state.login = true;
      state.rol = action.payload.userData.rol
    },
    setDelUser: (state, action) => {
       
      state.name = false;
      state.id = false;
      state.login = false;
      state.rol = false
    },
    
    // Agrega más acciones según sea necesario
  },
});

// Exporta las acciones del slice
export const { setUser, setLoading, setError,setDelUser } = userSlice.actions;

// Exporta el reducer del slice
export default userSlice.reducer;