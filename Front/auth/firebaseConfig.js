// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh_2TF5xps0Oa1IrD8mIVcXgHeODkylo0",
  authDomain: "octagonoschool.firebaseapp.com",
  projectId: "octagonoschool",
  storageBucket: "octagonoschool.appspot.com",
  messagingSenderId: "696525109184",
  appId: "1:696525109184:web:7d6507651843825d0ffa25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
