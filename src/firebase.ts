import "firebase/auth";
import "firebase/firebase-firestore";

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCGuXTL1-ngumUAB3WmRdykzOMiW98ccjs",
  authDomain: "s2m-test.firebaseapp.com",
  databaseURL: "https://s2m-test.firebaseio.com",
  projectId: "s2m-test",
  storageBucket: "s2m-test.appspot.com",
  messagingSenderId: "749987469339",
  appId: "1:749987469339:web:4d0a9f298d0ac70bf500be"
};
firebase.initializeApp(config);
const auth = firebase.auth();
export default auth;
