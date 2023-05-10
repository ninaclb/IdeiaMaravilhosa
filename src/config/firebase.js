// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvXzrHlrKZYErzV0r83kquanZ-m70qhfk",
  authDomain: "projetoaulateste-50535.firebaseapp.com",
  projectId: "projetoaulateste-50535",
  storageBucket: "projetoaulateste-50535.appspot.com",
  messagingSenderId: "836069635218",
  appId: "1:836069635218:web:8192526d085a0e2b02224b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
