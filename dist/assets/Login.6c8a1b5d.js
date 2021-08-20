import{a as e}from"./index.b98b0492.js";import{_ as r}from"./errors.f54d75ff.js";import{o as s,c as o,a as t,w as a,e as i,d as l,n,b as d,r as m}from"./vendor.a9f341af.js";const f={name:"Login",components:{errors:r},data:()=>({form:{fields:{email:"",password:""},errors:[]}}),methods:{signIn(){this.form.errors=[],e.signInWithEmailAndPassword(this.form.fields.email,this.form.fields.password).catch((e=>{this.form.errors.push(e.message)}))}}},c={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},u={class:"max-w-md w-full space-y-8"},p=t("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"},null,-1),g=t("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Sign in to your account ",-1),x={class:"mt-2 text-center text-sm text-gray-600"},b=d("don't have account yet?"),y=t("input",{type:"hidden",name:"remember",value:"true"},null,-1),w={class:"mt-6"},h=t("label",{for:"email-address",class:"text-sm font-bold text-gray-700 tracking-wide"},"Email address",-1),v={class:"mt-6"},k=t("label",{for:"password",class:"text-sm font-bold text-gray-700 tracking-wide"},"Password",-1),j=t("div",null,[t("button",{type:"submit",class:"group mt-10 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[t("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"}),d(" Sign in ")])],-1);f.render=function(e,r,d,f,I,E){const P=m("router-link"),S=m("errors");return s(),o("div",c,[t("div",u,[t("div",null,[p,g,t("p",x,[t(P,{class:"font-medium text-indigo-600 hover:text-indigo-500",to:"/register"},{default:a((()=>[b])),_:1})])]),t("form",{class:"mt-8 space-y-6",onSubmit:r[3]||(r[3]=i(((...e)=>E.signIn&&E.signIn(...e)),["prevent"]))},[y,t("div",null,[t(S,{errors:e.form.errors},null,8,["errors"]),t("div",w,[h,l(t("input",{id:"email-address","onUpdate:modelValue":r[1]||(r[1]=r=>e.form.fields.email=r),type:"email",required:"",class:"appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[n,e.form.fields.email]])]),t("div",v,[k,l(t("input",{id:"password","onUpdate:modelValue":r[2]||(r[2]=r=>e.form.fields.password=r),type:"password",minlength:"6",autocomplete:"current-password",required:"",class:"appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[n,e.form.fields.password]])])]),j],32)])])};export default f;
