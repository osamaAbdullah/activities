import firebase from "firebase/app";

import "firebase/analytics";

import '@firebase/messaging';

import "firebase/auth";
import "firebase/firestore";

import {firebaseConfig} from "../conf";

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();