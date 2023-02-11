// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTSHsz_7geK0A-OnZAFdZ2lRLE5THKFqA",
  authDomain: "notes-2-5f031.firebaseapp.com",
  databaseURL: "https://notes-2-5f031-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notes-2-5f031",
  storageBucket: "notes-2-5f031.appspot.com",
  messagingSenderId: "217074084414",
  appId: "1:217074084414:web:200fe99daed47f8c50bf6f",
  measurementId: "G-4KSLKQNB1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

const analytics = getAnalytics(app);