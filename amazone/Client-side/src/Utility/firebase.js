
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLwESLzSi4DPVA68J4q2-Kz5sCJUPPFTU",
  authDomain: "clone-65c11.firebaseapp.com",
  projectId: "clone-65c11",
  storageBucket: "clone-65c11.appspot.com",
  messagingSenderId: "1051426919933",
  appId: "1:1051426919933:web:064217d556fe04d1f63594"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
