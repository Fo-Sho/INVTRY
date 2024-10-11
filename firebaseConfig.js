// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDoP-JVzlindZ-uwHsw0pWX-yEVS9fk40c",
  authDomain: "inventory-management-31d31.firebaseapp.com",
  databaseURL: "https://inventory-management-31d31-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "inventory-management-31d31",
  storageBucket: "inventory-management-31d31.appspot.com",
  messagingSenderId: "93968563841",
  appId: "1:93968563841:web:9a3d30c734bd24dd04d780",
  measurementId: "G-5ZZWV1GYZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);
const analytics = getAnalytics(app);
