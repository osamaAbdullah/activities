import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCNrkAkLzcGOCCHLK1JUskC8sAJcmXN2Sw",
    authDomain: "activities-c8c9f.firebaseapp.com",
    projectId: "activities-c8c9f",
    storageBucket: "activities-c8c9f.appspot.com",
    messagingSenderId: "1003081335802",
    appId: "1:1003081335802:web:1ed7f1d694411766db5a43"
});

export const db = firebase.firestore();
export const auth = firebase.auth();




