// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARCoNsCymvEFjBOuLtOq6jE2KSI12rzKw",
    authDomain: "altschool-simple-firebase.firebaseapp.com",
    projectId: "altschool-simple-firebase",
    storageBucket: "altschool-simple-firebase.appspot.com",
    messagingSenderId: "709415775120",
    appId: "1:709415775120:web:1e99158e6dea08ad236115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;