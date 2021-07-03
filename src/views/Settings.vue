<template>
  <div
      class="flex flex-col justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <div class="text-2xl px-10 py-10">Notifications</div>
    <div v-if="errorMsg" v-text="errorMsg" class=""></div>
    <div v-else>
      <div v-if="isTokenRegistered">
        <p>Notifications are enabled on this device</p>
        <button @click="disableNotifications"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Disable Notifications
        </button>
      </div>
      <div v-else>
        <p>Notifications are disabled on this device</p>
        <button @click="enableNotifications"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Enable Notifications
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from "firebase/app";
import {vapidKey} from "../../conf";
import {db} from "../firebase";

export default {
  name: 'Settings',
  data: () => ({
    token: '',
    isTokenRegistered: true,
    errorMsg: false
  }),
  methods: {
    async checkToken() {
      let token = await db.collection('notification_tokens').doc(this.token).get()
      this.isTokenRegistered = token.exists;
    },
    enableNotifications() {
      db.collection('notification_tokens')
          .doc(this.token)
          .set({
            userId: this.$store.getters.user.uid,
            addedAt: new Date(),
            username: this.$store.getters.user.name
          })
          .then(_ => this.isTokenRegistered = true)
    },
    disableNotifications() {
      db.collection('notification_tokens')
          .doc(this.token)
          .delete()
          .then(_ => this.isTokenRegistered = false)
    },
  },
  created() {


    if (firebase.messaging.isSupported()) {

      const messaging = firebase.messaging();

      messaging
          .getToken(vapidKey)
          .then((currentToken) => {
            if (currentToken) {
              this.token = currentToken
              this.checkToken()
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
              // ...
            }
          }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });


      // messaging.onMessage((payload) => {
      //   console.log('onMessage');
      //
      //   if (Notification.permission === 'granted') {
      //     let notification = new Notification(payload.notification.title, {
      //       body: payload.notification.body,
      //       icon: payload.notification.icon
      //     });
      //
      //     notification.onclick = function (ev) {
      //       ev.preventDefault();
      //       window.open(payload.notification.click_action, '_blank');
      //       notification.close();
      //     }
      //   }
      // })

    } else {
      this.errorMsg = 'Notification not supported by your device'
    }
  },
}
</script>
