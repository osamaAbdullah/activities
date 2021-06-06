import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

import {firebaseConf} from "../conf";

firebase.initializeApp(firebaseConf);

export const db = firebase.firestore();
export const auth = firebase.auth();




