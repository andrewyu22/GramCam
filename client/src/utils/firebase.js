// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzgtE5B1lFj6vMlwwDvDgmRkdLfax2TaA",
  authDomain: "gramcam-42e20.firebaseapp.com",
  projectId: "gramcam-42e20",
  storageBucket: "gramcam-42e20.appspot.com",
  messagingSenderId: "643414888859",
  appId: "1:643414888859:web:38a30852c19f57ba41513e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage();

export { app, storage };
