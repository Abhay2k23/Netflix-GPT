// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_6DAfvAKgcXQjodIF85_AjBM2H37YRNs",
  authDomain: "netflixgpt-963ed.firebaseapp.com",
  projectId: "netflixgpt-963ed",
  storageBucket: "netflixgpt-963ed.appspot.com",
  messagingSenderId: "1022309611753",
  appId: "1:1022309611753:web:e9d39c65501a7f71d4d878",
  measurementId: "G-FRZ0B2JZ4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
