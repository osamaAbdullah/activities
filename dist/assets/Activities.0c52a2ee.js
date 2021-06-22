var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,c=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&r(e,s,t[s]);if(i)for(var s of i(t))a.call(t,s)&&r(e,s,t[s]);return e},l=(e,i)=>t(e,s(i));import{d as n}from"./index.1dcccfbc.js";import{k as d,o as p,c as x,a as u,F as y,s as m,t as f}from"./vendor.b7e9e33c.js";const g={name:"Activities",data:()=>({activities:[]}),methods:{joinActivity(e,t){n.collection("user_activity").doc(this.$store.getters.user.uid+"_"+e).set({joinedAt:new Date,userId:this.$store.getters.user.uid,lastCheck:new Date,activityId:e}).then((()=>{this.activities[t].joined=!0,this.activities[t].myStatus="joined "+d(new Date,"DD-MM-YYYY hh:mm:ss").fromNow()})).catch((e=>{console.error("Error adding document: ",e)}))},leaveActivity(e,t){n.collection("user_activity").doc(this.$store.getters.user.uid+"_"+e).delete().then((()=>{this.activities[t].joined=!1,this.activities[t].myStatus="not joined",console.log("Document successfully deleted!")})).catch((e=>{console.error("Error removing document: ",e)}))}},created(){n.collection("activities").onSnapshot((e=>{this.activities=[],e.forEach((async e=>{let t=await n.collection("user_activity").doc(this.$store.getters.user.uid+"_"+e.id).get();void 0===t.data()?this.activities.unshift(l(c({id:e.id},e.data()),{joined:!1,myStatus:"not joined"})):this.activities.unshift(l(c({id:e.id},e.data()),{joined:!0,myStatus:"joined "+d(t.data().joinedAt.toDate(),"DD-MM-YYYY hh:mm:ss").fromNow()}))}))}))}},v=u("div",{class:"flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"},[u("div",{class:"text-2xl px-10 py-10"},"All activities")],-1),h={class:"flex flex-col container mx-auto"},b={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},w={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},k={class:"min-w-full divide-y divide-gray-200"},D=u("thead",{class:"bg-gray-50"},[u("tr",null,[u("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Title "),u("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Description "),u("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status "),u("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," myStatus "),u("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Mulct "),u("th",{scope:"col",class:"relative px-6 py-3"},[u("span",{class:"sr-only"},"Join")])])],-1),A={class:"bg-white divide-y divide-gray-200"},O={class:"px-6 py-4 whitespace-nowrap"},S={class:"flex items-center"},Y={class:"ml-4"},_={class:"text-sm font-medium text-gray-900"},C={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm text-gray-900"},P={class:"text-sm text-gray-500"},E={class:"px-6 py-4 whitespace-nowrap"},$={key:0,class:"px-2 select-none inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer bg-green-100 text-green-800"},I={key:1,class:"px-2 select-none inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer bg-red-100 text-red-800"},J={class:"px-6 py-4 whitespace-nowrap"},N={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},F={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},L={class:"px-6 font-medium"};g.render=function(e,t,s,i,o,a){return p(),x(y,null,[v,u("div",h,[u("div",b,[u("div",w,[u("div",j,[u("table",k,[D,u("tbody",A,[(p(!0),x(y,null,m(e.activities,((e,t)=>(p(),x("tr",{key:e.id},[u("td",O,[u("div",S,[u("div",Y,[u("div",_,f(e.title),1)])])]),u("td",C,[u("div",M,f(e.description),1),u("div",P,f(e.type),1)]),u("td",E,[e.status?(p(),x("span",$," Active ")):(p(),x("span",I," Disabled "))]),u("td",J,[u("span",N,f(e.myStatus),1)]),u("td",F,f(e.mulct),1),u("td",L,[e.joined?(p(),x("button",{key:0,onClick:s=>a.leaveActivity(e.id,t),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"},"Leave ",8,["onClick"])):(p(),x("button",{key:1,onClick:s=>a.joinActivity(e.id,t),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"},"Join ",8,["onClick"]))])])))),128))])])])])])])],64)};export default g;
