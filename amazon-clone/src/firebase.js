import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAVh3dMTPCMwPVCsm5WhlupXvv-gbgKcLY",
    authDomain: "clone-zl-46309.firebaseapp.com",
    databaseURL: "https://clone-zl-46309.firebaseio.com",
    projectId: "clone-zl-46309",
    storageBucket: "clone-zl-46309.appspot.com",
    messagingSenderId: "230884447945",
    appId: "1:230884447945:web:004e5c16e95069da71df18",
    measurementId: "G-JFME0JS86C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };