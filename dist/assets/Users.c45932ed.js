var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,d=(t,e)=>{for(var s in e||(e={}))a.call(e,s)&&o(t,s,e[s]);if(i)for(var s of i(e))l.call(e,s)&&o(t,s,e[s]);return t},r=(t,i)=>e(t,s(i));import{d as n}from"./index.988dbf47.js";import{o as c,c as m,a as p,F as u,s as x,t as y,g,e as f,d as h,x as b,y as v}from"./vendor.57260a3e.js";const w={name:"Users",data:()=>({users:[],transaction:{visibility:!1,userId:null,id:null,index:null},activity:{visibility:!1,userId:null,id:null,index:null},missedActivity:{visibility:!1,activityTitle:null},transactions:[],activities:[],missedActivities:[],form:{}}),methods:{showMissedTimes(t,e){this.missedActivities=[],n.collection("missed_activities").where("activityId","==",t).where("userId","==",this.activity.userId).orderBy("missedDay").get().then((t=>{t.forEach((t=>{this.missedActivities.push(t.data().missedDay)})),this.missedActivity={visibility:!0,activityTitle:e}}))},changeRole(t,e){n.collection("users").doc(this.users[e].id).update({role:t}).then().catch()},seeTransactions(t){this.transaction={visibility:!0,userId:this.users[t].id,index:t},n.collection("transactions").where("userId","==",this.users[t].id).onSnapshot((e=>{this.transactions=[],e.forEach((e=>{this.transactions.unshift(r(d({id:e.id},e.data()),{user:this.users[t]}))}))}))},seeActivities(t){this.activity={visibility:!0,userId:this.users[t].id,index:t},n.collection("user_activity").where("userId","==",this.users[t].id).onSnapshot((e=>{this.activities=[],e.forEach((e=>{n.doc("activities/"+e.data().activityId).get().then((s=>this.activities.unshift(r(d({id:s.id},s.data()),{joinedAt:e.data().joinedAt,user:this.users[t]}))))}))}))},createTransactions(t){n.collection("transactions").add(r(d({},this.form.fields),{userId:t,createdAt:new Date})),this.form.visibility=!1},editTransaction(t,e){this.transaction.id=t,this.resetForm(),this.form.title="Update Transaction",this.form.mode="update",this.form.fields.amount=this.transactions[e].amount,this.form.fields.type=this.transactions[e].type},updateTransaction(){n.collection("transactions").doc(this.transaction.id).update(r(d({},this.form.fields),{updatedAt:new Date})).then((()=>this.form.visibility=!1)).catch((t=>console.error("Error removing document: ",t)))},deleteTransaction(t,e){confirm("Are you sure you want to permanently delete this transaction")&&(n.collection("transactions").doc(t).delete().then().catch(),this.transactions.slice(e,1))},resetForm(){this.form={fields:{amount:"",type:""},visibility:!0,title:"New transaction",mode:"create"}}},created(){n.collection("users").onSnapshot((t=>{this.users=[],t.forEach((t=>{this.users.unshift(d({id:t.id},t.data()))}))}))},computed:{balance(){let t=0;return this.transactions.map((e=>{"cashIn"===e.type?t+=parseInt(e.amount):t-=parseInt(e.amount)})),t}}},k=p("div",{class:"flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6"},[p("div",{class:"text-2xl px-10 py-10"},"Users")],-1),A={class:"flex flex-col container mx-auto"},T={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},j={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},C={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},I={class:"min-w-full divide-y divide-gray-200"},_=p("thead",{class:"bg-gray-50"},[p("tr",null,[p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Name "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Email "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Role "),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Transactions")]),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Activities")])])],-1),D={class:"bg-white divide-y divide-gray-200"},O={class:"px-6 py-4 whitespace-nowrap"},U={class:"flex items-center"},E={class:"ml-4"},N={class:"text-sm font-medium text-gray-900"},S={class:"px-6 py-4 whitespace-nowrap"},F={class:"text-sm text-gray-900"},P={class:"px-6 py-4 whitespace-nowrap"},z=p("option",{value:"admin"},"Admin",-1),M=p("option",{value:"user"},"User",-1),V={class:"px-6 font-medium"},R={class:"px-6 font-medium"},q={key:0,class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},B={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},J=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),$={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"},G={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},H={class:"sm:flex sm:items-start"},K={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},L={class:"flex justify-between"},Q={class:"text-lg leading-6 font-medium text-gray-900"},W={class:"text-lg leading-6 font-medium text-gray-900"},X={class:"mt-2"},Y={class:"flex flex-col w-full h-full"},Z={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},tt={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},et={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},st={class:"min-w-full divide-y divide-gray-200"},it=p("thead",{class:"bg-gray-50"},[p("tr",null,[p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," User "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Amount "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Type "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Created At "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Updated At "),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Edit")]),p("th",{scope:"col",class:"relative px-6 py-3"},[p("span",{class:"sr-only"},"Delete")])])],-1),at={class:"bg-white divide-y divide-gray-200"},lt={class:"px-6 py-4 whitespace-nowrap"},ot={class:"flex items-center"},dt={class:"ml-4"},rt={class:"px-6 py-4 whitespace-nowrap"},nt={class:"text-sm text-gray-900"},ct={class:"px-6 py-4 whitespace-nowrap"},mt={class:"text-sm text-gray-900"},pt={class:"px-6 py-4 whitespace-nowrap"},ut={class:"text-sm text-gray-900"},xt={class:"text-sm text-gray-500"},yt={key:0,class:"px-6 py-4 whitespace-nowrap"},gt={class:"text-sm text-gray-900"},ft={class:"text-sm text-gray-500"},ht={key:1,class:"px-6 py-4 whitespace-nowrap"},bt=p("div",{class:"text-sm text-gray-900"},"______",-1),vt=p("div",{class:"text-sm text-gray-500"},"______",-1),wt={class:"px-6 font-medium"},kt={class:"px-6 font-medium"},At={key:1,class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Tt={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},jt=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),Ct={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-2/3"},It={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},_t={class:"sm:flex sm:items-start justify-center"},Dt={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Ot={class:"flex justify-between"},Ut={class:"text-lg leading-6 font-medium text-gray-900"},Et={class:"mt-2"},Nt={class:"flex flex-col w-full h-full"},St={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},Ft={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},Pt={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},zt={class:"min-w-full divide-y divide-gray-200"},Mt=p("thead",{class:"bg-gray-50"},[p("tr",null,[p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Title "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Description "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Joined At "),p("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Mulct ")])],-1),Vt={class:"bg-white divide-y divide-gray-200"},Rt={class:"px-6 py-4 whitespace-nowrap"},qt={class:"flex items-center"},Bt={class:"ml-4"},Jt={class:"text-sm font-medium text-gray-900"},$t={class:"px-6 py-4 whitespace-nowrap"},Gt={class:"text-sm text-gray-900"},Ht={class:"text-sm text-gray-500"},Kt={class:"px-6 py-4 whitespace-nowrap"},Lt={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},Qt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},Wt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},Xt={key:2,class:"fixed z-20 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Yt={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},Zt=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),te={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},ee={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},se={class:"sm:flex sm:items-start"},ie={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},ae={class:"text-lg leading-6 font-medium text-gray-900"},le={class:"mt-2"},oe={class:"mt-10 sm:mt-0"},de={class:"md:grid md:grid-cols-3 md:gap-6"},re={class:"mt-5 md:mt-0 md:col-span-2"},ne={class:"shadow overflow-hidden sm:rounded-md"},ce={class:"px-4 py-5 bg-white sm:p-6"},me={class:"grid grid-cols-6 gap-6"},pe={class:"col-span-6 sm:col-span-3"},ue=p("label",{for:"amount",class:"block text-sm font-medium text-gray-700"},"Amount",-1),xe={class:"col-span-6 sm:col-span-3"},ye=p("label",{for:"type",class:"block text-sm font-medium text-gray-700"},"Type",-1),ge=p("option",{value:"cashIn"},"Cash In",-1),fe=p("option",{value:"cashOut"},"Cash Out",-1),he=p("div",{class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[p("button",{type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Save ")],-1),be={key:3,class:"fixed z-30 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},ve={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},we=p("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),ke={class:"inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:2/3"},Ae={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Te={class:"sm:flex sm:items-center"},je={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Ce={class:"text-lg leading-6 font-medium text-gray-900"},Ie={class:"mt-2"},_e={class:"mt-10 sm:mt-0"},De={class:"md:grid md:grid-cols-3 md:gap-6"};w.render=function(t,e,s,i,a,l){return c(),m(u,null,[k,p("div",A,[p("div",T,[p("div",j,[p("div",C,[p("table",I,[_,p("tbody",D,[(c(!0),m(u,null,x(t.users,((e,s)=>(c(),m("tr",{key:e.id},[p("td",O,[p("div",U,[p("div",E,[p("div",N,y(e.name),1)])])]),p("td",S,[p("div",F,y(e.email),1)]),p("td",P,[h(p("select",{"onUpdate:modelValue":e=>t.users[s].role=e,onChange:e=>l.changeRole(t.users[s].role,s),class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[z,M],40,["onUpdate:modelValue","onChange"]),[[v,t.users[s].role]])]),p("td",V,[p("button",{onClick:t=>l.seeTransactions(s),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"see transactions ",8,["onClick"])]),p("td",R,[p("button",{onClick:t=>l.seeActivities(s),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"see activities ",8,["onClick"])])])))),128))])])])])])]),t.transaction.visibility?(c(),m("div",q,[p("div",B,[p("div",{onClick:e[1]||(e[1]=e=>t.transaction.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),J,p("div",$,[p("div",G,[p("div",H,[p("div",K,[p("div",L,[p("h3",Q,y(t.users[t.transaction.index].name)+"'s Transactions ",1),p("h3",W,y(l.balance)+"$ ",1),p("button",{onClick:e[2]||(e[2]=(...t)=>l.resetForm&&l.resetForm(...t)),class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," New Transaction ")]),p("div",X,[p("div",Y,[p("div",Z,[p("div",tt,[p("div",et,[p("table",st,[it,p("tbody",at,[(c(!0),m(u,null,x(t.transactions,((e,s)=>(c(),m("tr",{key:e.id},[p("td",lt,[p("div",ot,[p("div",dt,[p("div",{class:"text-sm font-medium text-gray-900",title:e.user.email},y(e.user.name),9,["title"])])])]),p("td",rt,[p("div",nt,y(e.amount),1)]),p("td",ct,[p("div",mt,y(e.type),1)]),p("td",pt,[p("div",ut,y(t.formatDateTime(e.createdAt)),1),p("div",xt,y(t.fromNow(e.createdAt)),1)]),e.updatedAt?(c(),m("td",yt,[p("div",gt,y(t.formatDateTime(e.updatedAt)),1),p("div",ft,y(t.fromNow(e.updatedAt)),1)])):(c(),m("td",ht,[bt,vt])),p("td",wt,[p("button",{onClick:t=>l.editTransaction(e.id,s),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}," Edit ",8,["onClick"])]),p("td",kt,[p("button",{onClick:t=>l.deleteTransaction(e.id,s),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"}," Delete ",8,["onClick"])])])))),128))])])])])])])])])])])])])])):g("",!0),t.activity.visibility?(c(),m("div",At,[p("div",Tt,[p("div",{onClick:e[3]||(e[3]=e=>t.activity.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),jt,p("div",Ct,[p("div",It,[p("div",_t,[p("div",Dt,[p("div",Ot,[p("h3",Ut,y(t.users[t.activity.index].name)+"'s Activities ",1)]),p("div",Et,[p("div",Nt,[p("div",St,[p("div",Ft,[p("div",Pt,[p("table",zt,[Mt,p("tbody",Vt,[(c(!0),m(u,null,x(t.activities,((e,s)=>(c(),m("tr",{key:e.id},[p("td",Rt,[p("div",qt,[p("div",Bt,[p("div",Jt,y(e.title),1)])])]),p("td",$t,[p("div",Gt,y(e.description),1),p("div",Ht,y(e.type),1)]),p("td",Kt,[p("span",Lt,y(t.fromNow(e.joinedAt)),1)]),p("td",Qt,y(e.mulct),1),p("td",Wt,[p("button",{onClick:t=>l.showMissedTimes(e.id,e.title),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"}," Missed times ",8,["onClick"])])])))),128))])])])])])])])])])])])])])):g("",!0),t.form.visibility?(c(),m("div",Xt,[p("div",Yt,[p("div",{onClick:e[4]||(e[4]=e=>t.form.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),Zt,p("div",te,[p("div",ee,[p("div",se,[p("div",ie,[p("h3",ae,y(t.form.title),1),p("div",le,[p("div",oe,[p("div",de,[p("div",re,[p("form",{onSubmit:e[7]||(e[7]=f((e=>"create"===t.form.mode?l.createTransactions(t.transaction.userId):l.updateTransaction()),["prevent"]))},[p("div",ne,[p("div",ce,[p("div",me,[p("div",pe,[ue,h(p("input",{"onUpdate:modelValue":e[5]||(e[5]=e=>t.form.fields.amount=e),type:"number",id:"amount",required:"",autocomplete:"given-name",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[b,t.form.fields.amount]])]),p("div",xe,[ye,h(p("select",{id:"type","onUpdate:modelValue":e[6]||(e[6]=e=>t.form.fields.type=e),required:"",autocomplete:"country",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[ge,fe],512),[[v,t.form.fields.type]])])])]),he])],32)])])])])])])])])])])):g("",!0),t.missedActivity.visibility?(c(),m("div",be,[p("div",ve,[p("div",{onClick:e[8]||(e[8]=e=>t.missedActivity.visibility=!1),class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),we,p("div",ke,[p("div",Ae,[p("div",Te,[p("div",je,[p("h3",Ce,' missed Days for "'+y(t.missedActivity.activityTitle)+'" ',1),p("div",Ie,[p("div",_e,[p("div",De,[p("ul",null,[(c(!0),m(u,null,x(t.missedActivities,(t=>(c(),m("li",{key:t,class:"p-1 bg-gray-200 w-full"},y(t),1)))),128))])])])])])])])])])])):g("",!0)],64)};export default w;
