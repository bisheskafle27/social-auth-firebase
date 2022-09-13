// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFwZCcnkP6KLOVNFDN6myOgwTRzXEInHI",
  authDomain: "recipe-app-d02dc.firebaseapp.com",
  projectId: "recipe-app-d02dc",
  storageBucket: "recipe-app-d02dc.appspot.com",
  messagingSenderId: "36280496685",
  appId: "1:36280496685:web:bebd501b73bdc4196abea4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
