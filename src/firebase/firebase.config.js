// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA0VCfKipdM8dxV7erk12z3-nYouDcg1w",
  authDomain: "dragon-news-auth-a79eb.firebaseapp.com",
  projectId: "dragon-news-auth-a79eb",
  storageBucket: "dragon-news-auth-a79eb.firebasestorage.app",
  messagingSenderId: "538759843687",
  appId: "1:538759843687:web:83ce811dda1c80695b69c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;