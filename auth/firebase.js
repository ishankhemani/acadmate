import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9MuPpF3O3a-Z8NWm9_HzlHZ-0q2dAwT8",
  authDomain: "acadmate-88549.firebaseapp.com",
  projectId: "acadmate-88549",
  storageBucket: "acadmate-88549.firebasestorage.app",
  messagingSenderId: "161742106612",
  appId: "1:161742106612:web:14497dc296e34c974a13a1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
