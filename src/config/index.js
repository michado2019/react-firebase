// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from "firebase/auth";


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

//Setup google provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
    app, provider, auth, signInWithRedirect, getRedirectResult, onAuthStateChanged
};