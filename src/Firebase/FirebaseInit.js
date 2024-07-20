// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFDG0NjDF2r6SHxUp1LO6Q_7dVwmLvbhQ",
  authDomain: "genai-3636f.firebaseapp.com",
  projectId: "genai-3636f",
  storageBucket: "genai-3636f.appspot.com",
  messagingSenderId: "1063232335607",
  appId: "1:1063232335607:web:b7c83f51617e2d0a9aadf2",
  measurementId: "G-N20V3TMNCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, analytics, db}