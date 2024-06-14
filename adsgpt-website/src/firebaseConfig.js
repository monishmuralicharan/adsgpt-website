// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, disableNetwork } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOrAASRxHDMP3XByLHuitE3tLMEHT9KXo",
  authDomain: "adsgpt-5c8b4.firebaseapp.com",
  projectId: "adsgpt-5c8b4",
  storageBucket: "adsgpt-5c8b4.appspot.com",
  messagingSenderId: "204518708474",
  appId: "1:204518708474:web:7e3f4475af8dcf6d91e543",
  measurementId: "G-1SZ4ZM51JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Disable offline persistence
disableNetwork(db).catch((error) => console.error("Error disabling Firestore network: ", error));

export { auth, db };