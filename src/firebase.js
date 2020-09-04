import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0nCkCUWrNrFPElLCuOtBHe90r7TbPsOw",
  authDomain: "where-is-waldo-8689c.firebaseapp.com",
  databaseURL: "https://where-is-waldo-8689c.firebaseio.com",
  projectId: "where-is-waldo-8689c",
  storageBucket: "where-is-waldo-8689c.appspot.com",
  messagingSenderId: "7167932812",
  appId: "1:7167932812:web:ea3cb293589934e246fea9",
  measurementId: "G-9HPPB21D5G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
