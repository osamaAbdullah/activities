var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{d as i}from"./index.e57c5640.js";import{p as c,m as o,o as d,c as r,a as n,t as p,n as m,q as u,k as x,b as y,F as v,s as g,r as f,d as h,u as b}from"./vendor.57260a3e.js";const w={name:"Balance",data:()=>({balance:0}),mounted(){i.collection("transactions").where("userId","==",this.$store.getters.user.uid).onSnapshot((e=>{this.balance=0,e.forEach((e=>{"cashIn"===e.data().type?this.balance+=parseInt(e.data().amount):this.balance-=parseInt(e.data().amount)}))}))}},k=m();c("data-v-1b24d846");const _={class:"flex justify-end lg:container"},C={class:"w-1/6 self-auto px-5 py-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"};o();const I=k(((e,t,s,a,l,i)=>(d(),r("div",_,[n("div",C,p(e.balance),1)]))));w.render=I,w.__scopeId="data-v-1b24d846";const j={props:{percentage:{type:Number,default:0,required:!0},color:{default:"blue"}}},A=m();c("data-v-20253e26");const $={class:"relative w-full bg-gray-200 rounded flex justify-start items-center"},P={class:"text-2xl flex justify-center absolute inset-x-1/2"};o();const O=A(((e,t,s,a,l,i)=>(d(),r("div",$,[n("div",P,[u(e.$slots,"default",{},void 0,!0)]),n("div",{style:`width: ${s.percentage}%`,class:`absolute top-0 h-16 rounded shim-${s.color}`},null,6)]))));j.render=O,j.__scopeId="data-v-20253e26";const S={name:"Home",components:{balance:w,progress_bar:j},data:()=>({activities:[],ca:"completed_activities",osama:!0}),methods:{markAsPending(e,t){confirm("Are you sure you didn't complete the activity yet?")&&(i.collection(this.ca).doc(this.completedActivity(e)).delete(),this.activities[t].completed=!1)},markAsCompleted(e,t){i.collection(this.ca).doc(this.completedActivity(e)).set({activityId:e,userId:this.$store.getters.user.uid,dateTime:new Date}),this.activities[t].completed=!0},completedActivity(e){return`${e}__${this.$store.getters.user.uid}__${x().format("YYYY_MM_DD")}`}},computed:{status(){return Math.round(100*this.ratio)||0},ratio(){return this.activities.filter((e=>e.completed)).length/this.activities.length}},mounted(){i.collection("user_activity").where("userId","==",this.$store.getters.user.uid).onSnapshot((e=>{e.forEach((e=>{i.collection("activities").doc(e.data().activityId).onSnapshot((async e=>{if(!e.data().status)return!1;let c=await i.collection(this.ca).doc(this.completedActivity(e.id)).get();this.activities.unshift(((e,i)=>{for(var c in i||(i={}))s.call(i,c)&&l(e,c,i[c]);if(t)for(var c of t(i))a.call(i,c)&&l(e,c,i[c]);return e})({id:e.id,completed:void 0!==c.data()},e.data()))}))}))}))}},Y=m();c("data-v-5165a0a7");const D={class:"flex w-1/2 lg:w-2/3 sm:w-5/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"},E={class:"flex flex-col container mx-auto"},M={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},q={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},T={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},U={class:"min-w-full divide-y divide-gray-200"},V=n("thead",{class:"bg-gray-50"},[n("tr",null,[n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Title "),n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Description "),n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status "),n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Mulct "),n("th",{scope:"col",class:"relative px-6 py-3"},[n("span",{class:"sr-only"},"Edit")])])],-1),B={class:"bg-white divide-y divide-gray-200"},F={class:"px-6 py-4 whitespace-nowrap"},H={class:"flex items-center"},N={class:"ml-4"},z={class:"text-sm font-medium text-gray-900"},G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm text-gray-900"},K={class:"text-sm text-gray-500"},L={class:"px-6 py-4 whitespace-nowrap"},Q={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},R={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},W={class:"px-6 font-medium"},X={class:"inline-flex items-center justify-center text-2xl"},Z=n("span",{class:"ml-2 text-gray-700"},"Completed",-1),ee={id:"cards",class:"flex flex-col items-center"},te={key:0,class:"py-2 px-3"},se=n("div",{class:"p-2 w-full bg-green-300 text-sm text-center text-green-500 rounded-full"},"Completed",-1),ae=n("div",{class:"italic p-2 text-blue-500"},"click to unComplete",-1),le={key:1,class:"py-2 px-3"},ie=n("div",{class:"p-2 w-full bg-red-300 text-sm text-center text-red-500 rounded-full"},"Pending",-1),ce=n("div",{class:"italic p-2 text-blue-500"},"click to Complete",-1);o();const oe=Y(((e,t,s,a,l,i)=>{const c=f("balance"),o=f("progress_bar");return d(),r(v,null,[n(c),n("div",D,[n(o,{title:"Your progress",percentage:i.status},{default:Y((()=>[y(p(i.status)+"% ",1)])),_:1},8,["percentage"])]),n("div",E,[n("div",M,[n("div",q,[n("div",T,[n("table",U,[V,n("tbody",B,[(d(!0),r(v,null,g(e.activities,((e,t)=>(d(),r("tr",{key:e.id},[n("td",F,[n("div",H,[n("div",N,[n("div",z,p(e.title),1)])])]),n("td",G,[n("div",J,p(e.description),1),n("div",K,p(e.type),1)]),n("td",L,[n("span",Q,p(e.completed?"Completed":"Pending"),1)]),n("td",R,p(e.mulct),1),n("td",W,[n("label",X,[h(n("input",{type:"checkbox",class:"form-checkbox h-5 w-5 text-blue-600",onChange:s=>e.completed?i.markAsCompleted(e.id,t):i.markAsPending(e.id,t),"onUpdate:modelValue":t=>e.completed=t},null,40,["onChange","onUpdate:modelValue"]),[[b,e.completed]]),Z])])])))),128))])]),n("div",ee,[(d(!0),r(v,null,g(e.activities,((e,t)=>(d(),r("div",{key:e.id,onClick:s=>e.completed?i.markAsPending(e.id,t):i.markAsCompleted(e.id,t),class:"rounded-3xl flex flex-col justify-center items-center p-5 my-3 "+(e.completed?"bg-green-200":"bg-red-200")},[n("div",{textContent:p(e.title),class:"text-2xl text-white text-center p-1"},null,8,["textContent"]),n("div",{textContent:p(e.mulct),class:"text-white text-center p-1"},null,8,["textContent"]),e.completed?(d(),r("div",te,[se,ae])):(d(),r("div",le,[ie,ce]))],10,["onClick"])))),128))])])])])])],64)}));S.render=oe,S.__scopeId="data-v-5165a0a7";export default S;