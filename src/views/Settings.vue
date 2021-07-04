<template>
  <div
      class="flex flex-col justify-center w-2/6 c-sm-w-full mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <div class="text-2xl px-10 py-10 text-center">Notifications</div>
    <div v-if="errorMsg" v-text="errorMsg" class="text-center p-3 bg-red-300"></div>
    <div v-else>
      <div class="flex flex-col" v-if="isTokenRegistered">
        <p class="text-center p-3 bg-green-300 my-3">Notifications are enabled on this device</p>
        <button @click="disableNotifications"
                class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full my-3">
          Disable Notifications
        </button>
      </div>
      <div class="flex flex-col" v-else>
        <p class="text-center p-3 bg-red-400 my-3">Notifications are disabled on this device</p>
        <button @click="enableNotifications"
                class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full my-3">
          Enable Notifications
        </button>
      </div>
    </div>
    <button @click="foo"></button>
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
    isTokenRegistered: false,
    errorMsg: false
  }),
  methods: {
    foo() {
      console.log('foo')
    },
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
            username: this.$store.getters.user.name,
            userAgent: navigator.userAgent
          })
          .then(_ => this.isTokenRegistered = true)
      .catch(err => console.log(err))
      console.log('enabling button pressed')
    },
    disableNotifications() {
      db.collection('notification_tokens')
          .doc(this.token)
          .delete()
          .then(_ => this.isTokenRegistered = false)
    },
    initFCM() {
      if (firebase.messaging.isSupported()) {

        const messaging = firebase.messaging();

        messaging
            .getToken(vapidKey)
            .then((currentToken) => {
              if (currentToken) {
                this.token = currentToken
                this.checkToken()
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
    requestPermissionCallback(permission) {
      console.log(permission)
      if (permission === 'granted') {
        this.errorMsg = false
        this.initFCM()
      } else if (permission === 'denied') {
        this.errorMsg = 'You Just blocked notifications!  Try to allow them in browser setting'
      }
    }
  },
  created() {
    console.log('created')
    if (Notification.permission === 'granted') {
      console.log('granted')
      alert('granted')
      this.initFCM()
    }
    else if (Notification.permission === 'default') {
      console.log('default')
      alert('default')
      this.errorMsg = 'Allow notifications please'
      Notification.requestPermission(this.requestPermissionCallback)
      // try {
      //   Notification.requestPermission().then(this.requestPermissionCallback)
      // } catch (error) {
      //   // Safari doesn't return a promise for requestPermissions and it
      //   // throws a TypeError. It takes a callback as the first argument
      //   // instead.
      //   if (error instanceof TypeError) {
      //     Notification.requestPermission(this.requestPermissionCallback);
      //   } else {
      //     throw error;
      //   }
      // }
    } else if (Notification.permission === 'denied') {
      console.log('denied')
      alert('denied')
      return this.errorMsg = 'You blocked notifications!  Try to allow them in browser setting'
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .c-sm-w-full {
    width: 95%;
  }
}

</style>
