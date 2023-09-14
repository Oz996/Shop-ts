import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZHXwKVWbm7ihGW7spzQ0Ncboco9faZ84",
  authDomain: "typescript-shop-a30db.firebaseapp.com",
  projectId: "typescript-shop-a30db",
  storageBucket: "typescript-shop-a30db.appspot.com",
  messagingSenderId: "812766512401",
  appId: "1:812766512401:web:76067b0d25fb9d469a38b0",
  measurementId: "G-65Y89FWRC2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
