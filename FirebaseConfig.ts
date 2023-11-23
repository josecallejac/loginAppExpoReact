// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8Q8YGkLFu6h7x0lsMBcW6h0H-icI5Tdo",
  authDomain: "reactlogin-55a6a.firebaseapp.com",
  projectId: "reactlogin-55a6a",
  storageBucket: "reactlogin-55a6a.appspot.com",
  messagingSenderId: "610416133532",
  appId: "1:610416133532:web:3a322c77160d15c10db459"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
