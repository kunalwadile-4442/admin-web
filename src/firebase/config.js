// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATHgmk-neb4DJc9vAp7dYVDICKKf4mTiU",
    authDomain: "admin-kunal.firebaseapp.com",
    projectId: "admin-kunal",
    storageBucket: "admin-kunal.firebasestorage.app",
    messagingSenderId: "118222335106",
    appId: "1:118222335106:web:cd566c612dc5bcac99589b",
    measurementId: "G-SY9JYS14BK"
  };
// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

