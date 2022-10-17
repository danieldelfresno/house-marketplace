import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlmOO5AFLmkDzEp_0ecabRUy1kE0TAm9U",
  authDomain: "house-marketplace-projec-fc6dc.firebaseapp.com",
  projectId: "house-marketplace-projec-fc6dc",
  storageBucket: "house-marketplace-projec-fc6dc.appspot.com",
  messagingSenderId: "279248919722",
  appId: "1:279248919722:web:cd2d8128636877ae1004d3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
