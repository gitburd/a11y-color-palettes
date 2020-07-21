import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXyAt8dVwBaMNR3uqaKuKWXJ1YGlWxq3Y",
    authDomain: "a11y-palette.firebaseapp.com",
    databaseURL: "https://a11y-palette.firebaseio.com",
    projectId: "a11y-palette",
    storageBucket: "a11y-palette.appspot.com",
    messagingSenderId: "1071178616198",
    appId: "1:1071178616198:web:51e112a5aed72ee614b007",
    measurementId: "G-233V0DJ3Y0"
});

const db = firebaseApp.firestore();

export { db };