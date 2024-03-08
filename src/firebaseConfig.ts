// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDctspbw54xfct5t9vl0f6tQt49fTVGPZo",
  authDomain: "fir-tutorial-b196b.firebaseapp.com",
  projectId: "fir-tutorial-b196b",
  storageBucket: "fir-tutorial-b196b.appspot.com",
  messagingSenderId: "485212800405",
  appId: "1:485212800405:web:a2226306c6e75194dd629c",
  measurementId: "G-7DN24Y9MBS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);