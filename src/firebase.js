// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqvucSUFwmDEDLRwchDkNr9-Lo4BW0i2s",
  authDomain: "clone-575ee.firebaseapp.com",
  projectId: "clone-575ee",
  storageBucket: "clone-575ee.appspot.com",
  messagingSenderId: "689689871168",
  appId: "1:689689871168:web:fef3f34633b390b87130a5",
  measurementId: "G-DH1DEC7W0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };