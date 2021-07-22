import{f as e,o as t,c as s,a as n,w as a,b as i,t as o,d as r,v as c,e as u,g as l,r as m,F as d,h as p,i as h,j as g,k as f,l as v}from"./vendor.b7e9e33c.js";const _={vapidKey:"BPp5_WTCzMGJxUJxVcijw-XfKsA5FhZ8_hipanqFQH-iK3RqiBzUsVD-oQEGdeOrXrN1225cPfySWVS0HMcLwrk"};e.initializeApp({apiKey:"AIzaSyD-Ny42JvupIsCpgUSgYu__IcZry0ZEC8o",authDomain:"fun-act.firebaseapp.com",projectId:"fun-act",storageBucket:"fun-act.appspot.com",messagingSenderId:"545284794512",appId:"1:545284794512:web:ffef95f1067025f7861015"});const b=e.firestore(),x=e.auth(),y={data:()=>({userMenu:!1,mobileMenu:!1,showBigImage:!1,active:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",notActive:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}),methods:{logout(){x.signOut().then((()=>this.$router.replace({name:"Login"}))).catch()},navLink(e){return e===this.$route.path?this.active:this.notActive},onClick(e){!0!==this.userMenu||this.$refs.menu.contains(e.target)||(this.userMenu=!1),!1===this.userMenu&&e.target===this.$refs.userMenuB&&(this.userMenu=!0)}},mounted(){window.addEventListener("click",this.onClick)},unmounted(){window.removeEventListener("click",this.onClick)}},k={class:"bg-gray-800"},w={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},E={class:"relative flex items-center justify-between h-16"},L={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},A=n("span",{class:"sr-only"},"Open main menu",-1),M=n("svg",{class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1),D=n("svg",{class:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),j={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},I={class:"hidden sm:block sm:ml-6"},P={class:"flex space-x-4"},V=i("Dashboard"),O=i("Activities"),R=i("Users"),T=i("Activity Manager"),C={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},S=n("button",{class:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},[n("span",{class:"sr-only"},"View notifications"),n("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])],-1),U={class:"relative"},B={ref:"userMenuB",type:"button",class:"ml-3 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white text-white px-2 py-2",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true"},$=n("span",{class:"sr-only"},"Open user menu",-1),z={ref:"menu",class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabindex:"-1"},H=i("Settings"),Y={key:0,class:"sm:hidden",id:"mobile-menu"},K={class:"px-2 pt-2 pb-3 space-y-1 flex flex-col"},N=i("Dashboard"),q=i("Activities"),F=i("Users"),J=i("Activity Manager");y.render=function(e,d,p,h,g,f){const v=m("router-link");return t(),s("nav",k,[n("div",w,[n("div",E,[n("div",L,[n("button",{onClick:d[1]||(d[1]=t=>e.mobileMenu=!e.mobileMenu),type:"button",class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false"},[A,M,D])]),n("div",j,[n("div",I,[n("div",P,[n(v,{to:"/",class:f.navLink("/")},{default:a((()=>[V])),_:1},8,["class"]),n(v,{to:"/activities",class:f.navLink("/activities")},{default:a((()=>[O])),_:1},8,["class"]),n(v,{to:"/users",class:f.navLink("/users")},{default:a((()=>[R])),_:1},8,["class"]),n(v,{to:"/activities-manager",class:f.navLink("/activities-manager")},{default:a((()=>[T])),_:1},8,["class"])])])]),n("div",C,[S,n("div",U,[n("button",B,[$,i(" "+o(e.$store.getters.user.name),1)],512),r(n("div",z,[n("a",{class:"block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200",role:"menuitem",tabindex:"-1",onClick:d[2]||(d[2]=u(((...e)=>f.logout&&f.logout(...e)),["prevent"]))},"Sign out"),n(v,{to:"/settings",class:"block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"},{default:a((()=>[H])),_:1})],512),[[c,e.userMenu]])])])])]),e.mobileMenu?(t(),s("div",Y,[n("div",K,[n(v,{to:"/",class:f.navLink("/")},{default:a((()=>[N])),_:1},8,["class"]),n(v,{to:"/activities",class:f.navLink("/activities")},{default:a((()=>[q])),_:1},8,["class"]),n(v,{to:"/users",class:f.navLink("/users")},{default:a((()=>[F])),_:1},8,["class"]),n(v,{to:"/activities-manager",class:f.navLink("/activities-manager")},{default:a((()=>[J])),_:1},8,["class"])])])):l("",!0)])};const W={components:{navigation:y},computed:{user(){return this.$store.getters.user}},created(){this.$store.state.initRoute=window.location.pathname,this.$router.push({name:"Splash"})}};let Z;W.render=function(e,a,i,o,r,c){const u=m("navigation"),p=m("router-view");return t(),s(d,null,[c.user&&c.user.authenticated?(t(),s(u,{key:0})):l("",!0),n(p)],64)};const G={},Q=function(e,t){if(!t)return e();if(void 0===Z){const e=document.createElement("link").relList;Z=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in G)return;G[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":Z,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},X=p({state:{user:!1},mutations:{increment(e){e.count++},setUser(e,t){e.user=t}},getters:{user:e=>e.user}}),ee=[{path:"/",name:"Home",component:()=>Q((()=>import("./Home.cd3412bf.js")),["/assets/Home.cd3412bf.js","/assets/Home.88b87166.css","/assets/vendor.b7e9e33c.js"]),meta:{auth:!0}},{path:"/settings",name:"Settings",component:()=>Q((()=>import("./Settings.41341810.js")),["/assets/Settings.41341810.js","/assets/Settings.ef197b1f.css","/assets/vendor.b7e9e33c.js"]),meta:{auth:!0}},{path:"/test",name:"test",component:()=>Q((()=>import("./Test.b163138a.js")),["/assets/Test.b163138a.js","/assets/vendor.b7e9e33c.js"]),meta:{auth:!0}},{path:"/checking",name:"Splash",component:()=>Q((()=>import("./Splash.6f62d443.js")),["/assets/Splash.6f62d443.js","/assets/Splash.17054d8e.css","/assets/vendor.b7e9e33c.js"])},{path:"/users",name:"Users",component:()=>Q((()=>import("./Users.73f8f2f0.js")),["/assets/Users.73f8f2f0.js","/assets/vendor.b7e9e33c.js"]),meta:{auth:!0,role:"admin"}},{path:"/activities",name:"Activities",component:()=>Q((()=>import("./Activities.4bbac8e2.js")),["/assets/Activities.4bbac8e2.js","/assets/vendor.b7e9e33c.js"]),meta:{auth:!0}},{path:"/activities-manager",name:"ActivitiesManager",component:()=>Q((()=>import("./ActivitiesManager.854e15d4.js")),["/assets/ActivitiesManager.854e15d4.js","/assets/vendor.b7e9e33c.js"]),meta:{auth:!0,role:"admin"}},{path:"/tasks/daily/missed-activities",name:"DailyMissedActivities",component:()=>Q((()=>import("./DailyMissedActivities.da978cc4.js")),["/assets/DailyMissedActivities.da978cc4.js","/assets/vendor.b7e9e33c.js"]),meta:{auth:!0}},{path:"/login",name:"Login",component:()=>Q((()=>import("./Login.8a997153.js")),["/assets/Login.8a997153.js","/assets/errors.e1e9f0cf.js","/assets/vendor.b7e9e33c.js"])},{path:"/register",name:"Register",component:()=>Q((()=>import("./Register.9760424a.js")),["/assets/Register.9760424a.js","/assets/errors.e1e9f0cf.js","/assets/vendor.b7e9e33c.js"])},{path:"/pending",name:"Pending",component:()=>Q((()=>import("./pending.cb5427cb.js")),["/assets/pending.cb5427cb.js","/assets/vendor.b7e9e33c.js"])},{path:"/blocked",name:"Blocked",component:()=>Q((()=>import("./blocked.2bc1626b.js")),["/assets/blocked.2bc1626b.js","/assets/vendor.b7e9e33c.js"])},{path:"/402",name:"Unauthorized",component:()=>Q((()=>import("./402.3bd0676a.js")),["/assets/402.3bd0676a.js","/assets/vendor.b7e9e33c.js"])}],te=h({history:g(),routes:ee});x.onAuthStateChanged((e=>{null===e?(X.commit("setUser",{authenticated:!1}),te.push({name:"Login"})):b.doc("users/"+e.uid).get().then((e=>e.data())).then((t=>{X.commit("setUser",{authenticated:!0,email:e.email,uid:e.uid,role:t.role,name:t.name,status:t.status}),te.push({name:"Home"})}))})),te.beforeEach(((e,t,s)=>{const n=X.getters.user;return["/pending","/blocked","/402"].includes(e.fullPath)?s():"pending"===n.status?s({name:"Pending"}):"blocked"===n.status?s({name:"Blocked"}):e.matched.some((e=>"admin"===e.meta.role))?"admin"===n.role?s():s({name:"Unauthorized"}):e.matched.some((e=>e.meta.auth))?n.authenticated?s():s({name:"Login"}):s()}));var se={methods:{formatDateTime:e=>f(e.toDate()).format("YYYY-MM-DD hh:mm:ss"),fromNow:e=>f(e.toDate()).fromNow()}};v(W).use(te).use(X).mixin(se).mount("#app");export{x as a,b as d,X as s,_ as v};