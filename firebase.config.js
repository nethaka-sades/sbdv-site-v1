// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDif8hFQ_zrdIgIMtTUcEIvdaBfNRNPj9U",
  authDomain: "sbdv-site.firebaseapp.com",
  projectId: "sbdv-site",
  storageBucket: "sbdv-site.firebasestorage.app",
  messagingSenderId: "412159333881",
  appId: "1:412159333881:web:c0ed475af415ebd431d928",
  measurementId: "G-5EL7GHNCNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);