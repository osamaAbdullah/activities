import{d as e}from"./index.41be2c5f.js";import{o as t,c}from"./vendor.b7e9e33c.js";const o={name:"Activities",data:()=>({activities:[]}),created(){console.log("created"),e.collection("user_activity").where("activityId","==","4RuKW9v7WX6HWRetGkj5").onSnapshot((t=>{t.forEach((t=>{console.log(t.id),e.doc("user_activity/"+t.id).update({lastCheck:new Date("2021-07-09 00:01:00")})}))}))}},a={class:"text-center text-2xl"};o.render=function(e,o,i,r,s,n){return t(),c("h1",a,"Testing Page")};export default o;