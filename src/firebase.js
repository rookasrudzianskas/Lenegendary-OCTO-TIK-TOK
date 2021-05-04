import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCilOF_eUfNNoFJenEDF42wm3C4wr6DxQ",
    authDomain: "tik-tok-clone-4194c.firebaseapp.com",
    projectId: "tik-tok-clone-4194c",
    storageBucket: "tik-tok-clone-4194c.appspot.com",
    messagingSenderId: "812408339263",
    appId: "1:812408339263:web:a21bb99e1a5a7b740f718a",
    measurementId: "G-JW44J2L9HD"
};

// get access to the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// go to the firebaseAPp and take the firestore
const db = firebaseApp.firestore();

export default db;
