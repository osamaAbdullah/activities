import{f as e,o as t,c as s,a as i,w as a,b as n,t as o,d as r,v as c,e as u,g as l,r as m,F as d,h,i as p,j as v,k as g,l as f}from"./vendor.57260a3e.js";e.initializeApp({apiKey:"AIzaSyCG0HU7RavBjj92OHEYuWzahXKhx2ZhmGY",authDomain:"vue-activity.firebaseapp.com",projectId:"vue-activity",storageBucket:"vue-activity.appspot.com",messagingSenderId:"17924664689",appId:"1:17924664689:web:c488ec76dd435053025ad0",measurementId:"G-R8NQQSDTL1"});const y=e.firestore(),_=e.auth(),k={data:()=>({userMenu:!1,mobileMenu:!1,showBigImage:!1,active:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",notActive:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}),methods:{logout(){_.signOut().then((()=>this.$router.replace({name:"Login"}))).catch()},navLink(e){return e===this.$route.path?this.active:this.notActive},onClick(e){!0!==this.userMenu||this.$refs.menu.contains(e.target)||(this.userMenu=!1),!1===this.userMenu&&e.target===this.$refs.userMenuB&&(this.userMenu=!0)}},mounted(){window.addEventListener("click",this.onClick)},unmounted(){window.removeEventListener("click",this.onClick)}},w={class:"bg-gray-800"},x={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},b={class:"relative flex items-center justify-between h-16"},L={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},E=i("span",{class:"sr-only"},"Open main menu",-1),M=i("svg",{class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1),A=i("svg",{class:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),D={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},j={class:"hidden sm:block sm:ml-6"},I={class:"flex space-x-4"},O=n("Dashboard"),R=n("Activities"),C=n("Users"),P=n("Activity Manager"),V=n("Daily missed activities"),T={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},U=i("button",{class:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},[i("span",{class:"sr-only"},"View notifications"),i("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])],-1),$={class:"relative"},S={ref:"userMenuB",type:"button",class:"ml-3 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white text-white px-2 py-2",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true"},B=i("span",{class:"sr-only"},"Open user menu",-1),H={ref:"menu",class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabindex:"-1"},Y={key:0,class:"sm:hidden",id:"mobile-menu"},z={class:"px-2 pt-2 pb-3 space-y-1 flex flex-col"},G=n("Dashboard"),N=n("Activities"),K=n("Users"),Q=n("Activity Manager"),W=n("Daily missed activities");k.render=function(e,d,h,p,v,g){const f=m("router-link");return t(),s("nav",w,[i("div",x,[i("div",b,[i("div",L,[i("button",{onClick:d[1]||(d[1]=t=>e.mobileMenu=!e.mobileMenu),type:"button",class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false"},[E,M,A])]),i("div",D,[i("div",j,[i("div",I,[i(f,{to:"/",class:g.navLink("/")},{default:a((()=>[O])),_:1},8,["class"]),i(f,{to:"/activities",class:g.navLink("/activities")},{default:a((()=>[R])),_:1},8,["class"]),i(f,{to:"/users",class:g.navLink("/users")},{default:a((()=>[C])),_:1},8,["class"]),i(f,{to:"/activities-manager",class:g.navLink("/activities-manager")},{default:a((()=>[P])),_:1},8,["class"]),i(f,{to:"/tasks/daily/missed-activities",class:g.navLink("/tasks/daily/missed-activities")},{default:a((()=>[V])),_:1},8,["class"])])])]),i("div",T,[U,i("div",$,[i("button",S,[B,n(" "+o(e.$store.getters.user.name),1)],512),r(i("div",H,[i("a",{class:"block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200",role:"menuitem",tabindex:"-1",onClick:d[2]||(d[2]=u(((...e)=>g.logout&&g.logout(...e)),["prevent"]))},"Sign out")],512),[[c,e.userMenu]])])])])]),e.mobileMenu?(t(),s("div",Y,[i("div",z,[i(f,{to:"/",class:g.navLink("/")},{default:a((()=>[G])),_:1},8,["class"]),i(f,{to:"/activities",class:g.navLink("/activities")},{default:a((()=>[N])),_:1},8,["class"]),i(f,{to:"/users",class:g.navLink("/users")},{default:a((()=>[K])),_:1},8,["class"]),i(f,{to:"/activities-manager",class:g.navLink("/activities-manager")},{default:a((()=>[Q])),_:1},8,["class"]),i(f,{to:"/tasks/daily/missed-activities",class:g.navLink("/tasks/daily/missed-activities")},{default:a((()=>[W])),_:1},8,["class"])])])):l("",!0)])};const q={components:{navigation:k},computed:{user(){return this.$store.getters.user}},created(){this.$store.state.initRoute=window.history.state.current,this.$router.push({name:"Splash"})}};let F;q.render=function(e,a,n,o,r,c){const u=m("navigation"),h=m("router-view");return t(),s(d,null,[c.user&&c.user.authenticated?(t(),s(u,{key:0})):l("",!0),i(h)],64)};const X={},Z=function(e,t){if(!t)return e();if(void 0===F){const e=document.createElement("link").relList;F=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in X)return;X[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":F,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e()))},J=h({state:{user:!1},mutations:{increment(e){e.count++},setUser(e,t){e.user=t}},getters:{user:e=>e.user}}),ee=[{path:"/",name:"Home",component:()=>Z((()=>import("./Home.0f5de0b0.js")),["/assets/Home.0f5de0b0.js","/assets/Home.26eefd75.css","/assets/vendor.57260a3e.js"]),meta:{auth:!0}},{path:"/checking",name:"Splash",component:()=>Z((()=>import("./Splash.36527aac.js")),["/assets/Splash.36527aac.js","/assets/Splash.f4ae5a55.css","/assets/vendor.57260a3e.js"])},{path:"/users",name:"Users",component:()=>Z((()=>import("./Users.c45932ed.js")),["/assets/Users.c45932ed.js","/assets/vendor.57260a3e.js"]),meta:{auth:!0,role:"admin"}},{path:"/activities",name:"Activities",component:()=>Z((()=>import("./Activities.c58adb0c.js")),["/assets/Activities.c58adb0c.js","/assets/vendor.57260a3e.js"]),meta:{auth:!0}},{path:"/activities-manager",name:"ActivitiesManager",component:()=>Z((()=>import("./ActivitiesManager.6120f5f8.js")),["/assets/ActivitiesManager.6120f5f8.js","/assets/vendor.57260a3e.js"]),meta:{auth:!0,role:"admin"}},{path:"/tasks/daily/missed-activities",name:"DailyMissedActivities",component:()=>Z((()=>import("./DailyMissedActivities.2bb662f5.js")),["/assets/DailyMissedActivities.2bb662f5.js","/assets/vendor.57260a3e.js"]),meta:{auth:!0,role:"admin"}},{path:"/login",name:"Login",component:()=>Z((()=>import("./Login.d2b55dfb.js")),["/assets/Login.d2b55dfb.js","/assets/errors.1c459013.js","/assets/vendor.57260a3e.js"])},{path:"/register",name:"Register",component:()=>Z((()=>import("./Register.219f3fc9.js")),["/assets/Register.219f3fc9.js","/assets/errors.1c459013.js","/assets/vendor.57260a3e.js"])},{path:"/402",name:"Unauthorized",component:()=>Z((()=>import("./402.89f1a366.js")),["/assets/402.89f1a366.js","/assets/vendor.57260a3e.js"])}],te=p({history:v(),routes:ee});_.onAuthStateChanged((e=>{null===e?(J.commit("setUser",{authenticated:!1}),te.push({name:"Login"})):y.doc("users/"+e.uid).get().then((e=>e.data())).then((t=>{J.commit("setUser",{authenticated:!0,email:e.email,uid:e.uid,role:t.role,name:t.name}),te.push({name:"Home"})}))})),te.beforeEach(((e,t,s)=>{console.log(e.fullPath,"route changed"),e.matched.some((e=>"admin"===e.meta.role))?"admin"===J.getters.user.role?s():s({name:"Unauthorized"}):e.matched.some((e=>e.meta.auth))?J.getters.user.authenticated?s():s({name:"Login"}):s()}));var se={methods:{formatDateTime:e=>g(e.toDate()).format("YYYY-MM-DD hh:mm:ss"),fromNow:e=>g(e.toDate()).fromNow()}};f(q).use(te).use(J).mixin(se).mount("#app");export{_ as a,y as d};
