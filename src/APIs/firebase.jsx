// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmPm2yWA05xevuSEYWYle3jWG238oE2Hs",
  authDomain: "file-management-system-b0479.firebaseapp.com",
  projectId: "file-management-system-b0479",
  storageBucket: "file-management-system-b0479.appspot.com",
  messagingSenderId: "273394413283",
  appId: "1:273394413283:web:9aa1c166ef71dfbb60dfd6",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
