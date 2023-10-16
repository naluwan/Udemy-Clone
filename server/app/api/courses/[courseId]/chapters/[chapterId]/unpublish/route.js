"use strict";(()=>{var e={};e.id=4725,e.ids=[4725],e.modules={53524:e=>{e.exports=require("@prisma/client")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},72254:e=>{e.exports=require("node:buffer")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},88849:e=>{e.exports=require("node:http")},22286:e=>{e.exports=require("node:https")},87503:e=>{e.exports=require("node:net")},49411:e=>{e.exports=require("node:path")},97742:e=>{e.exports=require("node:process")},84492:e=>{e.exports=require("node:stream")},72477:e=>{e.exports=require("node:stream/web")},41041:e=>{e.exports=require("node:url")},47261:e=>{e.exports=require("node:util")},65628:e=>{e.exports=require("node:zlib")},77282:e=>{e.exports=require("process")},71267:e=>{e.exports=require("worker_threads")},16207:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>q,originalPathname:()=>b,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>m});var s={};t.r(s),t.d(s,{PATCH:()=>p}),t(95655);var o=t(83323),i=t(54647),u=t(30953),n=t(38798),a=t(66886);async function p(e,{params:r}){try{let{userId:e}=(0,n.I8)(),{courseId:t,chapterId:s}=r;if(!e)return new a.Z("請先登入再進行操作",{status:401});let o=await u.db.course.findUnique({where:{id:t,userId:e}});if(!o)return new a.Z("權限不足",{status:401});let i=await u.db.chapter.update({where:{id:s,courseId:t},data:{isPublished:!1}}),p=await u.db.chapter.findMany({where:{courseId:t,isPublished:!0}});return p.length||await u.db.course.update({where:{id:t},data:{isPublished:!1}}),a.Z.json(i)}catch(e){return console.log("[CHAPTER_UNPUBLISH]",e),new a.Z("伺服器發生錯誤",{status:500})}}let d=o.AppRouteRouteModule,c=new d({definition:{kind:i.x.APP_ROUTE,page:"/api/courses/[courseId]/chapters/[chapterId]/unpublish/route",pathname:"/api/courses/[courseId]/chapters/[chapterId]/unpublish",filename:"route",bundlePath:"app/api/courses/[courseId]/chapters/[chapterId]/unpublish/route"},resolvedPagePath:"/home/runner/work/Udemy-Clone/Udemy-Clone/app/api/courses/[courseId]/chapters/[chapterId]/unpublish/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:h,serverHooks:x,headerHooks:q,staticGenerationBailout:m}=c,b="/api/courses/[courseId]/chapters/[chapterId]/unpublish/route"}};var r=require("../../../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[5893,9727,953],()=>t(16207));module.exports=s})();