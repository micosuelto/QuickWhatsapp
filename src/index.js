import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from "./routes/App.jsx";

// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBRhP78NkSactDCugS4bbRamfdxTcmOrg",
  authDomain: "quickwhatsapp-8e901.firebaseapp.com",
  projectId: "quickwhatsapp-8e901",
  storageBucket: "quickwhatsapp-8e901.appspot.com",
  messagingSenderId: "711672695909",
  appId: "1:711672695909:web:5884a9bede8aafa9f90a8c",
  measurementId: "G-2QF7S3E2RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App tab="home" />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
