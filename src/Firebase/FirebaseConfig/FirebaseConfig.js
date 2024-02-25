// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdGvfoOnJkBZ-4mr15PWoWznpyvwxxqUc",
  authDomain: "ecommerce-website-c8388.firebaseapp.com",
  projectId: "ecommerce-website-c8388",
  storageBucket: "ecommerce-website-c8388.appspot.com",
  messagingSenderId: "709569877158",
  appId: "1:709569877158:web:378baa148d6a9af818d067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;