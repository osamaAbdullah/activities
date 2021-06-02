import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyDehaREnUDHdlpQIBKBdzxPcIHkYtUJeCQ",
    authDomain: "activities-367c2.firebaseapp.com",
    projectId: "activities-367c2",
    storageBucket: "activities-367c2.appspot.com",
    messagingSenderId: "36879839248",
    appId: "1:36879839248:web:fbbef4bb82ef7ab2e75a95"
});

export const db = firebase.firestore();
export const auth = firebase.auth();




