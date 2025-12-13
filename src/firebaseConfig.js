
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnZVS_IFXFaXZhdnEycgq8PE3_x2fMYmw",
  authDomain: "cineverse-app-abc0b.firebaseapp.com",
  projectId: "cineverse-app-abc0b",
  storageBucket: "cineverse-app-abc0b.firebasestorage.app",
  messagingSenderId: "775729247192",
  appId: "1:775729247192:web:a0778b98e0834a2f1ef8ad"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);