import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjgQUUODOSzOCtCe7NA9E1f8q9c0B77aE",
  authDomain: "fenix3d-ae9d6.firebaseapp.com",
  projectId: "fenix3d-ae9d6",
  storageBucket: "fenix3d-ae9d6.appspot.com",
  messagingSenderId: "925732073920",
  appId: "1:925732073920:web:ed5bb12d224a34867d9825",
  measurementId: "G-MTKW6E56KG"
};

export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
