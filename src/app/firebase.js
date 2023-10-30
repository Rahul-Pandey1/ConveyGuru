// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Jyt0Oj1c10kovOdBbofz_SD6YCazBRU",
  authDomain: "aethereflow.firebaseapp.com",
  projectId: "aethereflow",
  storageBucket: "aethereflow.appspot.com",
  messagingSenderId: "159265808696",
  appId: "1:159265808696:web:f10d098f4837ae5f3221cd",
  measurementId: "G-74X880L4VW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
};
