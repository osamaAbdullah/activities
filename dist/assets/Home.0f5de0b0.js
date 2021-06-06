var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;import{d as l}from"./index.988dbf47.js";import{p as o,m as c,o as r,c as d,a as n,t as p,n as m,q as u,k as x,w as y,F as h,s as g,r as f,b as v,d as b,u as w}from"./vendor.57260a3e.js";const _={name:"Balance",data:()=>({balance:0}),mounted(){l.collection("transactions").where("userId","==",this.$store.getters.user.uid).onSnapshot((e=>{this.balance=0,e.forEach((e=>{"cashIn"===e.data().type?this.balance+=parseInt(e.data().amount):this.balance-=parseInt(e.data().amount)}))}))}},k=m();o("data-v-1b24d846");const I={class:"flex justify-end lg:container"},$={class:"w-1/6 self-auto px-5 py-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"};c();const j=k(((e,t,s,a,i,l)=>(r(),d("div",I,[n("div",$,p(e.balance),1)]))));_.render=j,_.__scopeId="data-v-1b24d846";const A={props:{percentage:{type:Number,default:0,required:!0},color:{default:"blue"}}},C=m();o("data-v-c77d3fb8");const O={class:"relative w-full bg-gray-200 rounded flex justify-center items-center"},P={class:"text-2xl absolute"};c();const S=C(((e,t,s,a,i,l)=>(r(),d("div",O,[n("div",P,[u(e.$slots,"default",{},void 0,!0)]),n("div",{style:`width: ${s.percentage}%`,class:`absolute top-0 h-16 rounded shim-${s.color}`},null,6)]))));A.render=S,A.__scopeId="data-v-c77d3fb8";const Y={name:"Home",components:{balance:_,progress_bar:A},data:()=>({activities:[],ca:"completed_activities",osama:!0}),methods:{markAsPending(e,t){l.collection(this.ca).doc(this.completedActivity()).delete(),this.activities[t].completed=!1},markAsCompleted(e,t){l.collection(this.ca).doc(this.completedActivity()).set({activityId:e,userId:this.$store.getters.user.uid,dateTime:new Date}),this.activities[t].completed=!0},completedActivity(e){return`${e}__${this.$store.getters.user.uid}__${x().format("YYYY_MM_DD")}`}},computed:{status(){return 100*this.ratio||0},ratio(){return this.activities.filter((e=>e.completed)).length/this.activities.length}},mounted(){l.collection("user_activity").where("userId","==",this.$store.getters.user.uid).onSnapshot((e=>{e.forEach((e=>{l.collection("activities").doc(e.data().activityId).onSnapshot((async e=>{let o=await l.collection(this.ca).doc(this.completedActivity()).get();this.activities.unshift(((e,l)=>{for(var o in l||(l={}))s.call(l,o)&&i(e,o,l[o]);if(t)for(var o of t(l))a.call(l,o)&&i(e,o,l[o]);return e})({id:e.id,completed:void 0!==o.data()},e.data()))}))}))}))}},D={class:"flex w-1/2 lg:w-2/3 sm:w-5/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"},E={class:"flex flex-col container mx-auto"},M={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},q={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},T={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},U={class:"min-w-full divide-y divide-gray-200"},V=n("thead",{class:"bg-gray-50"},[n("tr",null,[n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Title "),n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Description "),n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status "),n("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Mulct "),n("th",{scope:"col",class:"relative px-6 py-3"},[n("span",{class:"sr-only"},"Edit")])])],-1),B={class:"bg-white divide-y divide-gray-200"},F={class:"px-6 py-4 whitespace-nowrap"},H={class:"flex items-center"},N={class:"ml-4"},z={class:"text-sm font-medium text-gray-900"},G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm text-gray-900"},K={class:"text-sm text-gray-500"},L={class:"px-6 py-4 whitespace-nowrap"},Q={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},R={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},W={class:"px-6 font-medium"},X={class:"inline-flex items-center justify-center text-2xl"},Z=n("span",{class:"ml-2 text-gray-700"},"Completed",-1);Y.render=function(e,t,s,a,i,l){const o=f("balance"),c=f("progress_bar");return r(),d(h,null,[n(o),n("div",D,[n(c,{title:"Your progress",percentage:l.status},{default:y((()=>[v(p(l.status)+"% ",1)])),_:1},8,["percentage"])]),n("div",E,[n("div",M,[n("div",q,[n("div",T,[n("table",U,[V,n("tbody",B,[(r(!0),d(h,null,g(e.activities,((e,t)=>(r(),d("tr",{key:e.id},[n("td",F,[n("div",H,[n("div",N,[n("div",z,p(e.title),1)])])]),n("td",G,[n("div",J,p(e.description),1),n("div",K,p(e.type),1)]),n("td",L,[n("span",Q,p(e.completed?"Completed":"Pending"),1)]),n("td",R,p(e.mulct),1),n("td",W,[n("label",X,[b(n("input",{type:"checkbox",class:"form-checkbox h-5 w-5 text-blue-600",onChange:s=>e.completed?l.markAsCompleted(e.id,t):l.markAsPending(e.id,t),"onUpdate:modelValue":t=>e.completed=t},null,40,["onChange","onUpdate:modelValue"]),[[w,e.completed]]),Z])])])))),128))])])])])])])],64)};export default Y;