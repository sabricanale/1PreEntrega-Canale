import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5V9iVWj63ekQkmoWGVwpVFcuHXnnDOV0",
  authDomain: "cirenne-tienda.firebaseapp.com",
  projectId: "cirenne-tienda",
  storageBucket: "cirenne-tienda.appspot.com",
  messagingSenderId: "1090056072452",
  appId: "1:1090056072452:web:2b2f8b7b69dc0a9fe03451"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

