import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCG0HU7RavBjj92OHEYuWzahXKhx2ZhmGY",
    authDomain: "vue-activity.firebaseapp.com",
    projectId: "vue-activity",
    storageBucket: "vue-activity.appspot.com",
    messagingSenderId: "17924664689",
    appId: "1:17924664689:web:c488ec76dd435053025ad0",
    measurementId: "G-R8NQQSDTL1"
});

export const db = firebase.firestore();
export const auth = firebase.auth();




