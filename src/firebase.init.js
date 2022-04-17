// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiUBLtikNkXUceSvBiqqziJUtxBUS_L7Q",
  authDomain: "photographyacademy-3469b.firebaseapp.com",
  projectId: "photographyacademy-3469b",
  storageBucket: "photographyacademy-3469b.appspot.com",
  messagingSenderId: "446556824392",
  appId: "1:446556824392:web:103a095fe8a1b1ca05c97d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;