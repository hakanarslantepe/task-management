// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxM2jyM7t73O3xCaZENPP7vh-gRE-J1Fw",
  authDomain: "work-management-e2709.firebaseapp.com",
  projectId: "work-management-e2709",
  storageBucket: "work-management-e2709.appspot.com",
  messagingSenderId: "155301551810",
  appId: "1:155301551810:web:ca84cf5e932ef09827a55b",
  measurementId: "G-CKMRQXSWEV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db= getDatabase(app)