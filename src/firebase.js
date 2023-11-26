// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3aLrtph0iUx68MYJeboAD2IVh7npcQgI",
  authDomain: "scrapper-fe.firebaseapp.com",
  projectId: "scrapper-fe",
  storageBucket: "scrapper-fe.appspot.com",
  messagingSenderId: "708844057092",
  appId: "1:708844057092:web:0798b365b02e6afcb47b51",
  measurementId: "G-THDCXSENVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
