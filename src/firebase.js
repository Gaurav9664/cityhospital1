// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhHigA91EuBsobUcinMzR8ZJagvMdWTyg",
  authDomain: "cityhospital-d60d3.firebaseapp.com",
  projectId: "cityhospital-d60d3",
  storageBucket: "cityhospital-d60d3.appspot.com",
  messagingSenderId: "869761213049",
  appId: "1:869761213049:web:65f7c0010623912d2e2aa8",
  measurementId: "G-YLHY3EWZ0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);