// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyD-Ny42JvupIsCpgUSgYu__IcZry0ZEC8o",
    authDomain: "fun-act.firebaseapp.com",
    projectId: "fun-act",
    storageBucket: "fun-act.appspot.com",
    messagingSenderId: "545284794512",
    appId: "1:545284794512:web:ffef95f1067025f7861015"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('onBackgroundMessage');
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.image,
    });
});
