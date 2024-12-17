
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDhnAhJjivFtiAstcDzP0PpA1BSJtO_S-M",
  authDomain: "sket-shop.firebaseapp.com",
  projectId: "sket-shop",
  storageBucket: "sket-shop.firebasestorage.app",
  messagingSenderId: "420952450258",
  appId: "1:420952450258:web:4a61d2a14bfae28a99b90b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 