// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4vcnm4Hq_lysacPg148hWc7VopKJzCLo",
  authDomain: "inventory-management-4349f.firebaseapp.com",
  projectId: "inventory-management-4349f",
  storageBucket: "inventory-management-4349f.appspot.com",
  messagingSenderId: "806369734998",
  appId: "1:806369734998:web:109590eab3e6ae108826f7",
  measurementId: "G-HPEQD8T22R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}