// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJWKhYvcx9V7cnLInt7JM4GkjDNa_QVL0",
  authDomain: "snapdeal-404d7.firebaseapp.com",
  projectId: "snapdeal-404d7",
  storageBucket: "snapdeal-404d7.appspot.com",
  messagingSenderId: "930545756879",
  appId: "1:930545756879:web:20bfb09b2b41f9ad22a5ba",
  measurementId: "G-S69SSLDJGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

