import{f as e,p as t,m as i,o,c as s,t as n,a as r,n as a}from"./vendor.b7e9e33c.js";import{d as c,v as l}from"./index.41be2c5f.js";const d={name:"Settings",data:()=>({token:"",isTokenRegistered:!1,errorMsg:!1}),methods:{async checkToken(){let e=await c.collection("notification_tokens").doc(this.token).get();this.isTokenRegistered=e.exists},enableNotifications(){c.collection("notification_tokens").doc(this.token).set({userId:this.$store.getters.user.uid,addedAt:new Date,username:this.$store.getters.user.name,userAgent:navigator.userAgent}).then((e=>this.isTokenRegistered=!0)).catch((e=>console.log(e))),console.log("enabling button pressed")},disableNotifications(){c.collection("notification_tokens").doc(this.token).delete().then((e=>this.isTokenRegistered=!1))},initFCM(){e.messaging().getToken(l).then((e=>{e&&(this.token=e,this.checkToken())})).catch((e=>{console.log("An error occurred while retrieving token. ",e)}))},requestPermissionCallback(e){"granted"===e?(this.errorMsg=!1,this.initFCM()):"denied"===e&&(this.errorMsg="You Just blocked notifications!  Try to allow them in browser setting")}},created(){if(e.messaging.isSupported()){if("granted"===Notification.permission)this.initFCM();else if("default"===Notification.permission)this.errorMsg="Allow notifications please",Notification.requestPermission(this.requestPermissionCallback);else if("denied"===Notification.permission)return this.errorMsg="You blocked notifications!  Try to allow them in browser setting"}else this.errorMsg="Notification not supported by your device"}},f=a();t("data-v-6d85cf18");const g={class:"flex flex-col justify-center w-2/6 c-sm-w-full mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"},h=r("div",{class:"text-2xl px-10 py-10 text-center"},"Notifications",-1),b={key:1},u={key:0,class:"flex flex-col"},k=r("p",{class:"text-center p-3 bg-green-300 my-3"},"Notifications are enabled on this device",-1),m={key:1,class:"flex flex-col"},p=r("p",{class:"text-center p-3 bg-red-400 my-3"},"Notifications are disabled on this device",-1);i();const x=f(((e,t,i,a,c,l)=>(o(),s("div",g,[h,e.errorMsg?(o(),s("div",{key:0,textContent:n(e.errorMsg),class:"text-center p-3 bg-red-300"},null,8,["textContent"])):(o(),s("div",b,[e.isTokenRegistered?(o(),s("div",u,[k,r("button",{onClick:t[1]||(t[1]=(...e)=>l.disableNotifications&&l.disableNotifications(...e)),class:"bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full my-3"}," Disable Notifications ")])):(o(),s("div",m,[p,r("button",{onClick:t[2]||(t[2]=(...e)=>l.enableNotifications&&l.enableNotifications(...e)),class:"bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full my-3"}," Enable Notifications ")]))]))]))));d.render=x,d.__scopeId="data-v-6d85cf18";export default d;
