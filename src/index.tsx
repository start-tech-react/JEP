import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./routes";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSWI5SYWTe0wEwioaAP7tmVouGUjYRU7w",
  authDomain: "jsexplorer-d8b90.firebaseapp.com",
  databaseURL: "https://jsexplorer-d8b90-default-rtdb.firebaseio.com",
  projectId: "jsexplorer-d8b90",
  storageBucket: "jsexplorer-d8b90.appspot.com",
  messagingSenderId: "257280633220",
  appId: "1:257280633220:web:99e05ad06537a931ab15d1",
  measurementId: "G-3WW1291PKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);