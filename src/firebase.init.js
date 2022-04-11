// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNK-bMu7NotUgBx8mQ734usKUpBr5R-vc",
  authDomain: "ema-jhon-simple-first.firebaseapp.com",
  projectId: "ema-jhon-simple-first",
  storageBucket: "ema-jhon-simple-first.appspot.com",
  messagingSenderId: "1055102808564",
  appId: "1:1055102808564:web:08f8ea586ed70d67abc9a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth =getAuth(app)

export  default auth