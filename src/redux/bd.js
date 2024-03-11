import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Cookies from 'js-cookie';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCBz3v_7D8jhZDTHbdj3WX3ZIQtbYKYUmQ",
  authDomain: "apimoviesdb.firebaseapp.com",
  databaseURL: "https://apimoviesdb-default-rtdb.firebaseio.com",
  projectId: "apimoviesdb",
  storageBucket: "apimoviesdb.appspot.com",
  messagingSenderId: "645356762414",
  appId: "1:645356762414:web:7ddc0b081c8445796576bf",
  measurementId: "G-Z1L2CM3PV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const register = async (userCre) => {
  try {
    const { gmail, password, rol, name } = userCre;
    
    const logUrl = "http://localhost:3000/auth/login"
    const userCredential = await createUserWithEmailAndPassword(auth, gmail, password);
    const id = userCredential.user.uid;

    const response = await axios.post(url, { id, name, rol });
    const {token }= await axios.post(logUrl,{id})
    Cookies.set('localSession', token);

    return response.data;
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
    alert("Hubo un error en el registro");
    // Puedes decidir qué quieres hacer en caso de error, como lanzar una excepción o devolver un valor específico.
 
  }
};
export const login = async (userCre) => {
  try {
    const logUrl = "http://localhost:3000/auth/login";
    const { gmail, password } = userCre;
    const url = "http://localhost:3000/user";

    const userCredential = await signInWithEmailAndPassword(auth, gmail, password);
    const id = userCredential.user.uid;

    const response = await axios.get(`${url}/${id}`);
    await axios.post(logUrl, { id }).then((res)=>{
      
      Cookies.set('localSession', res.data.token);
    });
    
    
    return response.data;
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
    alert("Hubo un error en el login");
  }
};
