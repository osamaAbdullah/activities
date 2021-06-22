import firebase from "firebase/app";

import "firebase/analytics";

import '@firebase/messaging';

import "firebase/auth";
import "firebase/firestore";

import {firebaseConfig} from "../conf";

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const messaging = firebase.messaging();


messaging
    .getToken({vapidKey: 'BIzxd60H-rb9VzB1v_n89BZ0Zj01E0DVDr8BKEHycdSBBCbUqWVdzj6mUl6IHD1I_RDEqD24rN8dsJnMB9b00T4'})
    .then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log(currentToken, 'here');
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});


messaging.onMessage( (payload) => {
    console.log('onMessage');

    if (Notification.permission === 'granted') {
        let notification = new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: payload.notification.icon
        });

        notification.onclick = function (ev) {
            ev.preventDefault();
            window.open(payload.notification.click_action, '_blank');
            notification.close();
        }
    }
})
