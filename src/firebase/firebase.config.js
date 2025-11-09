// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1Dt_FPEPgL5UD2Rit6X4fXTpbcsgF4TQ",
    authDomain: "actify-6e8e4.firebaseapp.com",
    projectId: "actify-6e8e4",
    storageBucket: "actify-6e8e4.firebasestorage.app",
    messagingSenderId: "168218244131",
    appId: "1:168218244131:web:7221a7db00244c671f2d96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;