import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4WiqzduAONfDcflSv8WF7fZzRRqQuXOg",
  authDomain: "game-shop-3edbe.firebaseapp.com",
  projectId: "game-shop-3edbe",
  storageBucket: "game-shop-3edbe.firebasestorage.app",
  messagingSenderId: "311647001912",
  appId: "1:311647001912:web:ebe74ffe057d106e0335cd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };