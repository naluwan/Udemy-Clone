"use strict";(()=>{var e={};e.id=5191,e.ids=[5191],e.modules={53524:e=>{e.exports=require("@prisma/client")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},72254:e=>{e.exports=require("node:buffer")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},88849:e=>{e.exports=require("node:http")},22286:e=>{e.exports=require("node:https")},87503:e=>{e.exports=require("node:net")},49411:e=>{e.exports=require("node:path")},97742:e=>{e.exports=require("node:process")},84492:e=>{e.exports=require("node:stream")},72477:e=>{e.exports=require("node:stream/web")},41041:e=>{e.exports=require("node:url")},47261:e=>{e.exports=require("node:util")},65628:e=>{e.exports=require("node:zlib")},77282:e=>{e.exports=require("process")},71267:e=>{e.exports=require("worker_threads")},32178:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>h,originalPathname:()=>w,requestAsyncStorage:()=>x,routeModule:()=>c,serverHooks:()=>q,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>m});var o={};t.r(o),t.d(o,{POST:()=>p}),t(95655);var s=t(83323),n=t(54647),i=t(30953),u=t(38798),a=t(66886);async function p(e,{params:r}){try{let{userId:t}=(0,u.I8)(),{title:o}=await e.json();if(!t)return new a.Z("請先登入再進行操作",{status:401});let s=await i.db.course.findUnique({where:{id:r.courseId,userId:t}});if(!s)return new a.Z("權限不足",{status:401});let n=await i.db.chapter.findFirst({where:{courseId:r.courseId},orderBy:{position:"asc"}}),p=n?n.position+1:1,d=await i.db.chapter.create({data:{title:o,courseId:r.courseId,position:p}});return a.Z.json(d)}catch(e){return console.log("[CHAPTER]",e),new a.Z("伺服器發生錯誤",{status:500})}}let d=s.AppRouteRouteModule,c=new d({definition:{kind:n.x.APP_ROUTE,page:"/api/courses/[courseId]/chapters/route",pathname:"/api/courses/[courseId]/chapters",filename:"route",bundlePath:"app/api/courses/[courseId]/chapters/route"},resolvedPagePath:"/home/runner/work/Udemy-Clone/Udemy-Clone/app/api/courses/[courseId]/chapters/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:x,staticGenerationAsyncStorage:l,serverHooks:q,headerHooks:h,staticGenerationBailout:m}=c,w="/api/courses/[courseId]/chapters/route"}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[5893,9727,953],()=>t(32178));module.exports=o})();