import{d as e}from"./index.b98b0492.js";import{o as t,c as a}from"./vendor.a9f341af.js";const o={name:"Activities",data:()=>({activities:[]}),created(){console.log("created"),e.collection("user_activity").where("activityId","==","4RuKW9v7WX6HWRetGkj5").onSnapshot((t=>{t.forEach((t=>{console.log(t.id),e.doc("user_activity/"+t.id).update({lastCheck:new Date("2021-07-09 00:01:00")})}))}))}},i={class:"text-center text-2xl"};o.render=function(e,o,c,r,s,n){return t(),a("h1",i,"Testing Page")};export default o;
