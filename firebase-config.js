// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8EVyB7T1BeP3PjF0jZzSI1AqTdGt994U",
    authDomain: "airins-portfolio.firebaseapp.com",
    projectId: "airins-portfolio",
    storageBucket: "airins-portfolio.firebasestorage.app",
    messagingSenderId: "687300338976",
    appId: "1:687300338976:web:a7b298abcdddc650816345",
    measurementId: "G-6DHC4RNDG2"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);