import "firebase/auth";
import "firebase/firebase-firestore";

import firebase from "firebase";

const config = {
  apiKey: "XXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "XXXXXXXXXXXX"
};
firebase.initializeApp(config);
const auth = firebase.auth();
export default auth;
