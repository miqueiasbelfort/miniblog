
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLKScySsJ4OxdNzlJMjk42NgeiVHRPoWo",
  authDomain: "miniblog-594a8.firebaseapp.com",
  projectId: "miniblog-594a8",
  storageBucket: "miniblog-594a8.appspot.com",
  messagingSenderId: "363651887867",
  appId: "1:363651887867:web:b4708c8fad604ef612365e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }