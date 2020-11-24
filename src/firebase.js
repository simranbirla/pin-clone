// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBI_AQ3C2mXWKG1i-Amtzn97zfGVSDzWd4",
  authDomain: "pin-clone-39acf.firebaseapp.com",
  databaseURL: "https://pin-clone-39acf.firebaseio.com",
  projectId: "pin-clone-39acf",
  storageBucket: "pin-clone-39acf.appspot.com",
  messagingSenderId: "884413487053",
  appId: "1:884413487053:web:5a72dde51157b87b2ed684",
  measurementId: "G-VVCRZNMW6B",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, storage, auth, provider };
