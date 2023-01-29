// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwnnfPbSue0tugDl1K4E6LvSH01J4ZJh0",
  authDomain: "quickwhatsapp-e1426.firebaseapp.com",
  projectId: "quickwhatsapp-e1426",
  storageBucket: "quickwhatsapp-e1426.appspot.com",
  messagingSenderId: "185271216837",
  appId: "1:185271216837:web:efc5e50fd7097c2ec31eac",
  measurementId: "G-1HMWF8RD2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);