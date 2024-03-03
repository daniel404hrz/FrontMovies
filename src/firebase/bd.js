import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
  const { gmail, password, rol, name } = userCre;
  const url = "http://localhost:3000/user";
  await createUserWithEmailAndPassword(auth, gmail, password)
    .then((userCredential) => {
      // Signed in

      const id = userCredential.user.uid;

      const response =  axios.post(url, {id,name,rol});
      console.log(response);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("hubo un error en el login");
    });
};
export const login = async (userCre) => {
  const { gmail, password } = userCre;
  const url = "http://localhost:3000/user";
  await signInWithEmailAndPassword(auth, gmail, password)
    .then((userCredential) => {
      // Signed in
      const id = userCredential.user.uid;
      console.log(id,gmail,password);
      axios.get(`${url}/${id}`).then((res)=>{
        console.log(res.data);

      })
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("hubo un error en el login");
    });
};
