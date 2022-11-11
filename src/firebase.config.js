// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJNMEYGUrkDn-JitCSJpqeTWbznZN6QMc",
    authDomain: "pfp-db.firebaseapp.com",
    projectId: "pfp-db",
    storageBucket: "pfp-db.appspot.com",
    messagingSenderId: "725389463966",
    appId: "1:725389463966:web:b0bc98ba77a4a5085b868f",
    measurementId: "G-R42F89SNHN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
