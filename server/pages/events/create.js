"use strict";(()=>{var e={};e.id=679,e.ids=[679],e.modules={656:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>S,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>x,getStaticProps:()=>d,reportWebVitals:()=>g,routeModule:()=>q,unstable_getServerProps:()=>h,unstable_getServerSideProps:()=>f,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>P});var a=r(7093),o=r(5244),i=r(1323),p=r(1070),n=r(3893),u=r(2783),l=e([n,u]);[n,u]=l.then?(await l)():l;let c=(0,i.l)(u,"default"),d=(0,i.l)(u,"getStaticProps"),x=(0,i.l)(u,"getStaticPaths"),m=(0,i.l)(u,"getServerSideProps"),S=(0,i.l)(u,"config"),g=(0,i.l)(u,"reportWebVitals"),P=(0,i.l)(u,"unstable_getStaticProps"),v=(0,i.l)(u,"unstable_getStaticPaths"),b=(0,i.l)(u,"unstable_getStaticParams"),h=(0,i.l)(u,"unstable_getServerProps"),f=(0,i.l)(u,"unstable_getServerSideProps"),q=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/events/create",pathname:"/events/create",bundlePath:"",filename:""},components:{App:n.default,Document:p.default},userland:u});s()}catch(e){s(e)}})},2783:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(997),o=r(8756),i=r(5282),p=r(1163),n=e([o,i]);function u(){let e=(0,p.useRouter)(),{mutate:t}=i.SX.event.create.useMutation({onSuccess:t=>{e.replace(`/events/${t.id}`)}});return a.jsx(o.O,{onSubmit:e=>{t(e)},cancelHandler:()=>{e.replace("/")}})}[o,i]=n.then?(await n)():n,s()}catch(e){s(e)}})},1649:e=>{e.exports=require("next-auth/react")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1656:e=>{e.exports=import("@hookform/resolvers/zod")},272:e=>{e.exports=import("@trpc/client")},7455:e=>{e.exports=import("@trpc/next")},4936:e=>{e.exports=import("@trpc/next/ssrPrepass")},5641:e=>{e.exports=import("react-hook-form")},3020:e=>{e.exports=import("superjson")},9926:e=>{e.exports=import("zod")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[117,61,859,342,920],()=>r(656));module.exports=s})();