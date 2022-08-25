// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBOJ4M6bF8lw1V0oQHYXHstpah2JaUa_Y",
  authDomain: "react-curso-udemy-5129e.firebaseapp.com",
  projectId: "react-curso-udemy-5129e",
  storageBucket: "react-curso-udemy-5129e.appspot.com",
  messagingSenderId: "866416188454",
  appId: "1:866416188454:web:190f4fa341284c167e5ae7"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(firebaseApp);

export const FirebaseFirestore = getFirestore(firebaseApp);