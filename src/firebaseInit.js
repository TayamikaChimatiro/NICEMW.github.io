import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
require("firebase/firestore");
require("firebase/app");
require("firebase/storage");

//Initialize Firebase
var config = {
  apiKey: "AIzaSyB1-0E3iE2h4ho7OBqvDSvqgXDLeuxNskE",
  authDomain: "nice-b329f.firebaseapp.com",
  databaseURL: "https://nice-b329f.firebaseio.com",
  projectId: "nice-b329f",
  storageBucket: "nice-b329f.appspot.com",
  messagingSenderId: "966694535407",
  appId: "1:966694535407:web:70440767c7c351ac375b1a",
  measurementId: "G-LS0EB88Z15",
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export { fb, db };

