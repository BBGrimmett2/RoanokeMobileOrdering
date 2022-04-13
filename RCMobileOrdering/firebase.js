// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLf27vHRKlAkysUs0v6ILwgle6qqEbhwM",
  authDomain: "rcmobileordering.firebaseapp.com",
  projectId: "rcmobileordering",
  storageBucket: "rcmobileordering.appspot.com",
  messagingSenderId: "228605818707",
  appId: "1:228605818707:web:05f3d50c669d43f27593a6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

// Authentification
const auth = firebase.auth()

// Firestore
const fireDB = app.firestore();

// UID
let userID = auth.onAuthStateChanged((user) => {
  if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userID = user.uid;
      // ...
  } else {
      // User is signed out
      // ...
  }
});

export { auth, fireDB, userID };