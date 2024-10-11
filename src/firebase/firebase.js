import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-RaQ7Fc4BEBqfiE7bElKt2_ZHB6ipPpA",
  authDomain: "chologram-41f6f.firebaseapp.com",
  projectId: "chologram-41f6f",
  storageBucket: "chologram-41f6f.appspot.com",
  messagingSenderId: "18274218956",
  appId: "1:18274218956:web:aee00c6834fd235fa7a369",
  measurementId: "G-N603X0Y8W2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
