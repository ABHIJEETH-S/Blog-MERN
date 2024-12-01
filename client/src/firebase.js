// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-8c607.firebaseapp.com",
  projectId: "blog-mern-8c607",
  storageBucket: "blog-mern-8c607.firebasestorage.app",
  messagingSenderId: "217411585641",
  appId: "1:217411585641:web:b2c2f241b399c6138b04f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
