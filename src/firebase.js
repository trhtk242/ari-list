// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCweF6DAnXNfO4GpE9kmg5cAliQ3sMwzjo",
  authDomain: "productslist-eba9b.firebaseapp.com",
  projectId: "productslist-eba9b",
  storageBucket: "productslist-eba9b.appspot.com",
  messagingSenderId: "1075463937633",
  appId: "1:1075463937633:web:8049a2f34d70590d019420",
  measurementId: "G-21X4BXP1F8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);