import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmCmdKKk8lAPwjqCnkez2ElARnS3nvkGE",
  authDomain: "shopping-e77db.firebaseapp.com",
  projectId: "shopping-e77db",
  storageBucket: "shopping-e77db.appspot.com", // ⚠️ ye "firebasestorage.app" ko ".appspot.com" me update kar
  messagingSenderId: "760507493600",
  appId: "1:760507493600:web:dae74b7c78b682dab1f485",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
