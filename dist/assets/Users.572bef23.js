var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,d=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&o(e,s,t[s]);if(i)for(var s of i(t))l.call(t,s)&&o(e,s,t[s]);return e},n=(e,i)=>t(e,s(i));import{d as r}from"./index.1dcccfbc.js";import{o as c,c as m,a as p,F as u,s as x,t as y,g,e as f,d as h,x as b,y as v}from"./vendor.b7e9e33c.js";const w={name:"Users",data:()=>({users:[],transaction:{visibility:!1,userId:null,id:null,index:null},activity:{visibility:!1,userId:null,id:null,index:null},missedActivity:{visibility:!1,activityTitle:null},transactions:[],activities:[],missedActivities:[],form:{}}),methods:{showMissedTimes(e,t){this.missedActivities=[],r.collection("missed_activities").where("activityId","==",e).where("userId","==",this.activity.userId).orderBy("missedDay").get().then((e=>{e.forEach((e=>{this.missedActivities.push(e.data().missedDay)})),this.missedActivity={visibility:!0,activityTitle:t}}))},changeRole(e,t){r.collection("users").doc(this.users[t].id).update({role:e}).then().catch()},changeStatus(e,t){r.collection("users").doc(this.users[t].id).update({status:e}).then().catch()},seeTransactions(e){this.transaction={visibility:!0,userId:this.users[e].id,index:e},r.collection("transactions").where("userId","==",this.users[e].id).onSnapshot((t=>{this.transactions=[],t.forEach((t=>{this.transactions.unshift(n(d({id:t.id},t.data()),{user:this.users[e]}))}))}))},seeActivities(e){this.activity={visibility:!0,userId:this.users[e].id,index:e},r.collection("user_activity").where("userId","==",this.users[e].id).onSnapshot((t=>{this.activities=[],t.forEach((t=>{r.doc("activities/"+t.data().activityId).get().then((s=>this.activities.unshift(n(d({id:s.id},s.data()),{joinedAt:t.data().joinedAt,user:this.users[e]}))))}))}))},createTransactions(e){r.collection("transactions").add(n(d({},this.form.fields),{userId:e,createdAt:new Date})),this.form.visibility=!1},editTransaction(e,t){this.transaction.id=e,this.resetForm(),this.form.title="Update Transaction",this.form.mode="update",this.form.fields.amount=this.transactions[t].amount,this.form.fields.type=this.transactions[t].type},updateTransaction(){r.collection("transactions").doc(this.transaction.id).update(n(d({},this.form.fields),{updatedAt:new Date})).then((()=>this.form.visibility=!1)).catch((e=>console.error("Error removing document: ",e)))},deleteTransaction(e,t){confirm("Are you sure you want to permanently delete this transaction")&&(r.collection("transactions").doc(e).delete().then().catch(),this.transactions.slice(t,1))},resetForm(){this.form={fields:{amount:"",type:""},visibility:!0,title:"New transaction",mode:"create"}}},created(){r.collection("users").onSnapshot((e=>{this.users=[],e.forEach((e=>{this.users.unshift(d({id:e.id},e.data()))}))}))},computed:{balance(){let e=0;return this.transactions.map((t=>{"cashIn"===t.type?e+=parseInt(t.amount):e-=parseInt(t.amount)})),e}}},k=p("div",{class:"flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"},[p("div",{class:"text-2xl px-10 py-10"},"Users")],-1),A={class:"flex flex-col container mx-auto"},T={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},C={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},I={class:"min-w-full divide-y divide-gray-200"},_=p("thead",{class:"bg-gray-50"},[p("tr",null,[p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Name "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Email "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Role "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Status "),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Transactions")]),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Activities")])])],-1),U={class:"bg-white divide-y divide-gray-200"},D={class:"px-6 py-4 whitespace-nowrap"},O={class:"flex items-center"},E={class:"ml-4"},S={class:"text-sm font-medium text-gray-900"},N={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm text-gray-900"},V={class:"px-6 py-4 whitespace-nowrap"},F=p("option",{value:"admin"},"Admin",-1),z=p("option",{value:"user"},"User",-1),M={class:"px-6 py-4 whitespace-nowrap"},R=p("option",{value:"active"},"Active",-1),q=p("option",{value:"blocked"},"Blocked",-1),B=p("option",{value:"pending"},"Pending",-1),J={class:"px-6 font-medium"},$={class:"px-6 font-medium"},G={key:0,class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},H={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},K=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),L={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"},Q={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},W={class:"sm:flex sm:items-start"},X={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Y={class:"flex justify-between"},Z={class:"text-lg leading-6 font-medium text-gray-900"},ee={class:"text-lg leading-6 font-medium text-gray-900"},te={class:"mt-2"},se={class:"flex flex-col w-full h-full"},ie={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},ae={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},le={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},oe={class:"min-w-full divide-y divide-gray-200"},de=p("thead",{class:"bg-gray-50"},[p("tr",null,[p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," User "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Amount "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Type "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Created At "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Updated At "),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Edit")]),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Delete")])])],-1),ne={class:"bg-white divide-y divide-gray-200"},re={class:"px-6 py-4 whitespace-nowrap"},ce={class:"flex items-center"},me={class:"ml-4"},pe={class:"px-6 py-4 whitespace-nowrap"},ue={class:"text-sm text-gray-900"},xe={class:"px-6 py-4 whitespace-nowrap"},ye={class:"text-sm text-gray-900"},ge={class:"px-6 py-4 whitespace-nowrap"},fe={class:"text-sm text-gray-900"},he={class:"text-sm text-gray-500"},be={key:0,class:"px-6 py-4 whitespace-nowrap"},ve={class:"text-sm text-gray-900"},we={class:"text-sm text-gray-500"},ke={key:1,class:"px-6 py-4 whitespace-nowrap"},Ae=p("div",{class:"text-sm text-gray-900"},"______",-1),Te=p("div",{class:"text-sm text-gray-500"},"______",-1),Ce={class:"px-6 font-medium"},je={class:"px-6 font-medium"},Ie={key:1,class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},_e={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},Ue=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),De={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-2/3"},Oe={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Ee={class:"sm:flex sm:items-start justify-center"},Se={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Ne={class:"flex justify-between"},Pe={class:"text-lg leading-6 font-medium text-gray-900"},Ve={class:"mt-2"},Fe={class:"flex flex-col w-full h-full"},ze={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},Me={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},Re={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},qe={class:"min-w-full divide-y divide-gray-200"},Be=p("thead",{class:"bg-gray-50"},[p("tr",null,[p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Title "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Description "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Joined At "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Mulct ")])],-1),Je={class:"bg-white divide-y divide-gray-200"},$e={class:"px-6 py-4 whitespace-nowrap"},Ge={class:"flex items-center"},He={class:"ml-4"},Ke={class:"text-sm font-medium text-gray-900"},Le={class:"px-6 py-4 whitespace-nowrap"},Qe={class:"text-sm text-gray-900"},We={class:"text-sm text-gray-500"},Xe={class:"px-6 py-4 whitespace-nowrap"},Ye={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},Ze={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},et={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},tt={key:2,class:"fixed z-20 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},st={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},it=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),at={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},lt={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},ot={class:"sm:flex sm:items-start"},dt={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},nt={class:"text-lg leading-6 font-medium text-gray-900"},rt={class:"mt-2"},ct={class:"mt-10 sm:mt-0"},mt={class:"md:grid md:grid-cols-3 md:gap-6"},pt={class:"mt-5 md:mt-0 md:col-span-2"},ut={class:"shadow overflow-hidden sm:rounded-md"},xt={class:"px-4 py-5 bg-white sm:p-6"},yt={class:"grid grid-cols-6 gap-6"},gt={class:"col-span-6 sm:col-span-3"},ft=p("label",{for:"amount",class:"block text-sm font-medium text-gray-700"},"Amount",-1),ht={class:"col-span-6 sm:col-span-3"},bt=p("label",{for:"type",class:"block text-sm font-medium text-gray-700"},"Type",-1),vt=p("option",{value:"cashIn"},"Cash In",-1),wt=p("option",{value:"cashOut"},"Cash Out",-1),kt=p("div",{class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[p("button",{type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Save ")],-1),At={key:3,class:"fixed z-30 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Tt={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},Ct=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),jt={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:2/3"},It={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},_t={class:"sm:flex sm:items-center"},Ut={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Dt={class:"text-lg leading-6 font-medium text-gray-900"},Ot={class:"mt-2"},Et={class:"mt-10 sm:mt-0"},St={class:"md:grid md:grid-cols-3 md:gap-6"};w.render=function(e,t,s,i,a,l){return c(),m(u,null,[k,p("div",A,[p("div",T,[p("div",C,[p("div",j,[p("table",I,[_,p("tbody",U,[(c(!0),m(u,null,x(e.users,((t,s)=>(c(),m("tr",{key:t.id},[p("td",D,[p("div",O,[p("div",E,[p("div",S,y(t.name),1)])])]),p("td",N,[p("div",P,y(t.email),1)]),p("td",V,[h(p("select",{"onUpdate:modelValue":t=>e.users[s].role=t,onChange:t=>l.changeRole(e.users[s].role,s),class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[F,z],40,["onUpdate:modelValue","onChange"]),[[v,e.users[s].role]])]),p("td",M,[h(p("select",{"onUpdate:modelValue":t=>e.users[s].status=t,onChange:t=>l.changeStatus(e.users[s].status,s),class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[R,q,B],40,["onUpdate:modelValue","onChange"]),[[v,e.users[s].status]])]),p("td",J,[p("button",{onClick:e=>l.seeTransactions(s),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"see transactions ",8,["onClick"])]),p("td",$,[p("button",{onClick:e=>l.seeActivities(s),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"see activities ",8,["onClick"])])])))),128))])])])])])]),e.transaction.visibility?(c(),m("div",G,[p("div",H,[p("div",{onClick:t[1]||(t[1]=t=>e.transaction.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),K,p("div",L,[p("div",Q,[p("div",W,[p("div",X,[p("div",Y,[p("h3",Z,y(e.users[e.transaction.index].name)+"'s Transactions ",1),p("h3",ee,y(l.balance)+"$ ",1),p("button",{onClick:t[2]||(t[2]=(...e)=>l.resetForm&&l.resetForm(...e)),class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," New Transaction ")]),p("div",te,[p("div",se,[p("div",ie,[p("div",ae,[p("div",le,[p("table",oe,[de,p("tbody",ne,[(c(!0),m(u,null,x(e.transactions,((t,s)=>(c(),m("tr",{key:t.id},[p("td",re,[p("div",ce,[p("div",me,[p("div",{class:"text-sm font-medium text-gray-900",title:t.user.email},y(t.user.name),9,["title"])])])]),p("td",pe,[p("div",ue,y(t.amount),1)]),p("td",xe,[p("div",ye,y(t.type),1)]),p("td",ge,[p("div",fe,y(e.formatDateTime(t.createdAt)),1),p("div",he,y(e.fromNow(t.createdAt)),1)]),t.updatedAt?(c(),m("td",be,[p("div",ve,y(e.formatDateTime(t.updatedAt)),1),p("div",we,y(e.fromNow(t.updatedAt)),1)])):(c(),m("td",ke,[Ae,Te])),p("td",Ce,[p("button",{onClick:e=>l.editTransaction(t.id,s),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}," Edit ",8,["onClick"])]),p("td",je,[p("button",{onClick:e=>l.deleteTransaction(t.id,s),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"}," Delete ",8,["onClick"])])])))),128))])])])])])])])])])])])])])):g("",!0),e.activity.visibility?(c(),m("div",Ie,[p("div",_e,[p("div",{onClick:t[3]||(t[3]=t=>e.activity.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),Ue,p("div",De,[p("div",Oe,[p("div",Ee,[p("div",Se,[p("div",Ne,[p("h3",Pe,y(e.users[e.activity.index].name)+"'s Activities ",1)]),p("div",Ve,[p("div",Fe,[p("div",ze,[p("div",Me,[p("div",Re,[p("table",qe,[Be,p("tbody",Je,[(c(!0),m(u,null,x(e.activities,((t,s)=>(c(),m("tr",{key:t.id},[p("td",$e,[p("div",Ge,[p("div",He,[p("div",Ke,y(t.title),1)])])]),p("td",Le,[p("div",Qe,y(t.description),1),p("div",We,y(t.type),1)]),p("td",Xe,[p("span",Ye,y(e.fromNow(t.joinedAt)),1)]),p("td",Ze,y(t.mulct),1),p("td",et,[p("button",{onClick:e=>l.showMissedTimes(t.id,t.title),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"}," Missed times ",8,["onClick"])])])))),128))])])])])])])])])])])])])])):g("",!0),e.form.visibility?(c(),m("div",tt,[p("div",st,[p("div",{onClick:t[4]||(t[4]=t=>e.form.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),it,p("div",at,[p("div",lt,[p("div",ot,[p("div",dt,[p("h3",nt,y(e.form.title),1),p("div",rt,[p("div",ct,[p("div",mt,[p("div",pt,[p("form",{onSubmit:t[7]||(t[7]=f((t=>"create"===e.form.mode?l.createTransactions(e.transaction.userId):l.updateTransaction()),["prevent"]))},[p("div",ut,[p("div",xt,[p("div",yt,[p("div",gt,[ft,h(p("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.fields.amount=t),type:"number",id:"amount",required:"",autocomplete:"given-name",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[b,e.form.fields.amount]])]),p("div",ht,[bt,h(p("select",{id:"type","onUpdate:modelValue":t[6]||(t[6]=t=>e.form.fields.type=t),required:"",autocomplete:"country",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[vt,wt],512),[[v,e.form.fields.type]])])])]),kt])],32)])])])])])])])])])])):g("",!0),e.missedActivity.visibility?(c(),m("div",At,[p("div",Tt,[p("div",{onClick:t[8]||(t[8]=t=>e.missedActivity.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),Ct,p("div",jt,[p("div",It,[p("div",_t,[p("div",Ut,[p("h3",Dt,' missed Days for "'+y(e.missedActivity.activityTitle)+'" ',1),p("div",Ot,[p("div",Et,[p("div",St,[p("ul",null,[(c(!0),m(u,null,x(e.missedActivities,(e=>(c(),m("li",{key:e,class:"p-1 bg-gray-200 w-full"},y(e),1)))),128))])])])])])])])])])])):g("",!0)],64)};export default w;
