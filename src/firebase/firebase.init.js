// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr3IHiq3eUsqmVRgjq39X3xTGitDHGi2U",
  authDomain: "travel-authentication-a07da.firebaseapp.com",
  projectId: "travel-authentication-a07da",
  storageBucket: "travel-authentication-a07da.appspot.com",
  messagingSenderId: "332078986109",
  appId: "1:332078986109:web:e2b4197dc2b0e3d74c5214",
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
