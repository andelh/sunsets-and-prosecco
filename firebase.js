import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuOIGFDGv70erENTShQxkU0txIVEtXdgU",
  authDomain: "sunsets-and-prosecco.firebaseapp.com",
  projectId: "sunsets-and-prosecco",
  storageBucket: "sunsets-and-prosecco.appspot.com",
  messagingSenderId: "697326785646",
  appId: "1:697326785646:web:b926bc5d576da39876027f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const firestore = getFirestore(app);
const storage = getStorage(app);
