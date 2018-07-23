// MyFirebase.js

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDJ3q7xrQvuHHzRsrjNcqfiGCzwTpWYyAQ",
  authDomain: "ares-b9ce5.firebaseapp.com",
  databaseURL: "https://ares-b9ce5.firebaseio.com",
  projectId: "ares-b9ce5",
  storageBucket: "ares-b9ce5.appspot.com",
  messagingSenderId: "425047073171"
};

firebase.initializeApp(config);

function getFirebaseRef(refPath) {
  return firebase.database().ref(refPath);
}

export default {
  getFirebaseRef: getFirebaseRef
};