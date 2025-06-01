import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjbQSV6ZFNwd5RBgEpwhCv6z_jJnpk2f8",
  authDomain: "nichehire-99291.firebaseapp.com",
  projectId: "nichehire-99291",
  storageBucket: "nichehire-99291.firebasestorage.app",
  messagingSenderId: "110302938583",
  appId: "1:110302938583:web:d2a8d0dc37d3c9b848f792",
  measurementId: "G-JZ1QRW8YBZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);