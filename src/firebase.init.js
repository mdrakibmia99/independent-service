// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVBxo9rh2A4HWRxTUN6-udIWmYd4INir4",
  authDomain: "independent-service-prov-15a1e.firebaseapp.com",
  projectId: "independent-service-prov-15a1e",
  storageBucket: "independent-service-prov-15a1e.appspot.com",
  messagingSenderId: "509531571298",
  appId: "1:509531571298:web:af56bcbb028b979c11fd3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;