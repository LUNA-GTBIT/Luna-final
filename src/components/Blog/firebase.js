// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9SF7I7GSAzC0WzxKjEZy989ZIafv8kzg",
    authDomain: "lunablogs-9458e.firebaseapp.com",
    projectId: "lunablogs-9458e",
    storageBucket: "lunablogs-9458e.firebasestorage.app",
    messagingSenderId: "403426607168",
    appId: "1:403426607168:web:7893ba0bb37187bbfd9fa5",
    measurementId: "G-GY86022R8Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
