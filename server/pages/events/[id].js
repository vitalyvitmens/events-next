(()=>{var e={};e.id=32,e.ids=[32,888,660],e.modules={4263:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>p,default:()=>m,getServerSideProps:()=>h,getStaticPaths:()=>u,getStaticProps:()=>x,reportWebVitals:()=>g,routeModule:()=>N,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>f});var i=s(7093),a=s(5244),n=s(1323),l=s(1070),d=s(3893),o=s(3500),c=e([d,o]);[d,o]=c.then?(await c)():c;let m=(0,n.l)(o,"default"),x=(0,n.l)(o,"getStaticProps"),u=(0,n.l)(o,"getStaticPaths"),h=(0,n.l)(o,"getServerSideProps"),p=(0,n.l)(o,"config"),g=(0,n.l)(o,"reportWebVitals"),f=(0,n.l)(o,"unstable_getStaticProps"),v=(0,n.l)(o,"unstable_getStaticPaths"),j=(0,n.l)(o,"unstable_getStaticParams"),b=(0,n.l)(o,"unstable_getServerProps"),y=(0,n.l)(o,"unstable_getServerSideProps"),N=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/events/[id]",pathname:"/events/[id]",bundlePath:"",filename:""},components:{App:d.default,Document:l.default},userland:o});r()}catch(e){r(e)}})},4920:(e,t,s)=>{"use strict";s.d(t,{K7:()=>d,Xz:()=>o,lx:()=>c});var r=s(997),i=s(5675),a=s.n(i),n=s(1664),l=s.n(n);let d=({id:e,title:t,description:s,date:i,action:n})=>(0,r.jsxs)("div",{className:"flex font-sans shadow-xl mt-2 border border-[#962433] rounded-md bg-gradient-to-bl from-sky-200 to-indigo-600",children:[r.jsx("div",{className:"flex-none w-48 relative",children:r.jsx(a(),{src:"/poster.png",alt:"Poster",className:"absolute inset-0 w-full h-full object-cover rounded-l-md",fill:!0,sizes:"(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw",priority:!0})}),(0,r.jsxs)("div",{className:"flex-auto p-6",children:[(0,r.jsxs)("div",{className:"flex flex-wrap -mt-6 pt-6 pb-6",children:[r.jsx("h1",{className:"flex-auto text-lg font-semibold text-slate-900",children:t}),r.jsx("div",{className:"text-lg font-semibold text-slate-500",children:i.toDateString()}),r.jsx("div",{className:"w-full flex-none text-sm font-medium text-slate-700 mt-2",children:s})]}),r.jsx("div",{className:"flex space-x-4 text-sm font-medium",children:(0,r.jsxs)("div",{className:"flex-auto flex space-x-4",children:[n,r.jsx(l(),{href:`/events/${e}`,className:"h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 align-middle leading-10",children:"Подробнее"})]})})]})]}),o=({title:e,description:t,date:s,participations:i})=>(0,r.jsxs)("div",{className:"p-8 font-sans shadow-xl mt-2 border border-[#962433] rounded-md bg-gradient-to-bl from-sky-200 to-indigo-600",children:[r.jsx("div",{className:"px-4 sm:px-0",children:r.jsx("h3",{className:"text-base font-semibold leading-7 text-gray-900",children:"Информация о событии"})}),r.jsx("div",{className:"mt-6 border-t border-gray-100",children:(0,r.jsxs)("dl",{className:"divide-y divide-gray-100",children:[(0,r.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[r.jsx("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Название"}),r.jsx("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:e})]}),(0,r.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[r.jsx("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Описание"}),r.jsx("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t})]}),(0,r.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[r.jsx("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Дата проведения"}),r.jsx("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.toLocaleDateString()})]}),(0,r.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[r.jsx("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Участники"}),r.jsx("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:i.map(({user:e})=>e.name).join(", ")})]})]})})]});s(6689);let c=({text:e})=>r.jsx("div",{className:"flex w-max p-8 rounded-xl mx-auto mt-40 text-4xl text-red-600 font-bold bg-[#b7f1b2] border-2 border-[#962433]",children:e})},4279:(e,t,s)=>{"use strict";s.d(t,{$:()=>u,h:()=>c});var r=s(997),i=s(1649),a=s(5675),n=s.n(a),l=s(1664),d=s.n(l),o=s(6689);let c=()=>{let{data:e,status:t}=(0,i.useSession)();return(0,r.jsxs)("div",{className:"fixed h-[88px] w-full top-0 left-0 bg-gradient-to-bl from-sky-200/90 to-indigo-600/90 z-50 flex justify-around text-sm py-6 border-b border-[#962433]",children:[r.jsx("div",{className:"flex-none w-44 relative image-container",children:r.jsx(d(),{href:"/",className:"absolute inset-0",children:r.jsx(n(),{src:"/rs.svg",alt:"Result School",className:"absolute inset-0 w-full h-full object-contain",fill:!0,sizes:"(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw",priority:!0})})}),"unauthenticated"===t?(0,r.jsxs)("div",{className:"flex gap-10 text-lg items-center font-bold",children:[r.jsx(d(),{className:"text-green-900",href:"/api/auth/signin",children:"Войти"}),r.jsx(d(),{className:"text-blue-900",href:"/signup",children:"Регистрация"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"h-10 px-2 font-semibold text-gray-300 align-middle leading-10",children:[e?.user?.name," ←"]}),r.jsx(d(),{className:"h-10 px-6 mr-4 font-semibold rounded-md bg-green-500 text-white align-middle leading-10",href:"/events/create",children:"Создать событие"}),r.jsx(d(),{className:"h-10 px-6 font-semibold rounded-md bg-red-500 text-white align-middle leading-10",href:"/api/auth/signout",children:"Выйти"})]})]})};var m=s(8553);let x=()=>{window.scrollTo({top:0,behavior:"smooth"})},u=()=>{let[e,t]=(0,o.useState)("Minsk"),[s,i]=(0,o.useState)(null),[a,l]=(0,o.useState)("");return(0,o.useEffect)(()=>{fetch((0,m.jJ)(m.cH)).then(e=>e.json()).then(({name:e,main:s,weather:r})=>{t(e),i(Math.round(s.temp)),l(r[0].description)})},[s]),(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"h-2"}),(0,r.jsxs)("div",{className:"h-[88px] w-full mt-auto bottom-0 bg-gradient-to-bl from-sky-200/90 to-indigo-600/90 z-50 flex justify-around text-sm py-6 border-t border-l border-r border-[#962433] rounded-t-md",children:[r.jsx("div",{className:"flex-none text-black font-bold",children:(0,r.jsxs)(d(),{href:"https://vitalyvitmens.github.io/my-portfolio/",target:"_blank",children:[r.jsx("div",{children:"Events"}),(0,r.jsxs)("div",{children:["\xa9"," ",new Date().toLocaleString("en",{year:"numeric"})," ","vitalyvitmens. All rights reserved."]})]})}),r.jsx("a",{onClick:x,className:"cursor-pointer shadow-lg shadow-gray-900 hover:opacity-70 transition duration-300 rounded-full bg-gray-300",children:r.jsx(n(),{src:"/to-up.svg",alt:"To up",width:40,height:40,priority:!0})}),(0,r.jsxs)("div",{className:"flex-none text-black font-bold",children:[(0,r.jsxs)("div",{children:[e," ",new Date().toLocaleString("ru",{day:"numeric",month:"long",year:"numeric"})]}),(0,r.jsxs)("div",{children:[s,"\xb0C, "," ",a]})]})]})]})}},3893:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>c});var i=s(997),a=s(5282);s(108);var n=s(1649),l=s(4279),d=e([a]);function o({Component:e,pageProps:t}){return i.jsx("div",{className:"flex flex-col min-h-screen-minus-footer mx-auto mt-[88px] max-w-4xl rounded-md bg-transparent",children:(0,i.jsxs)(n.SessionProvider,{session:t.session,children:[i.jsx(l.h,{}),i.jsx(e,{...t}),i.jsx(l.$,{})]})})}a=(d.then?(await d)():d)[0],o.getInitialProps=async e=>({pageProps:{session:await (0,n.getSession)({req:e.ctx.req})}});let c=a.SX.withTRPC(o);r()}catch(e){r(e)}})},1070:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(997),i=s(6859);function a(){return(0,r.jsxs)(i.Html,{lang:"en",children:[r.jsx(i.Head,{children:r.jsx("link",{rel:"icon",href:"/favicon.png",type:"image/png",sizes:"32x32"})}),(0,r.jsxs)("body",{children:[r.jsx(i.Main,{}),r.jsx(i.NextScript,{})]})]})}},3500:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>x});var i=s(997),a=s(4920),n=s(5282),l=s(1163),d=s(1649),o=s(1664),c=s.n(o),m=e([n]);function x(){let e=(0,l.useRouter)(),t=(0,d.useSession)(),{data:s,isLoading:r}=n.SX.event.findUnique.useQuery({id:Number(e.query.id)});return r?i.jsx(a.lx,{text:"Loading..."}):"unauthenticated"===t.status?i.jsx(a.lx,{text:"Forbidden"}):s?(0,i.jsxs)(i.Fragment,{children:[i.jsx(a.Xz,{...s}),s?.authorId===t.data?.user.id&&i.jsx("div",{className:"flex justify-end",children:i.jsx(c(),{className:"h-10 mt-2 px-6 font-semibold rounded-md bg-indigo-500 text-white align-middle leading-10",href:`/events/${e.query.id}/edit`,children:"Редактировать"})})]}):i.jsx(a.lx,{text:"Event not found"})}n=(m.then?(await m)():m)[0],r()}catch(e){r(e)}})},5282:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{$z:()=>d.$z,SX:()=>c});var i=s(272),a=s(7455),n=s(4936),l=s(3020),d=s(112),o=e([i,a,n,l,d]);[i,a,n,l,d]=o.then?(await o)():o;let c=(0,a.createTRPCNext)({ssr:!0,ssrPrepass:n.ssrPrepass,config(e){let{ctx:t}=e,s=`http://localhost:${process.env.PORT??3e3}/api/trpc`;return{links:[(0,i.httpBatchLink)({url:s,headers:()=>t?.req?.headers?{cookie:t.req.headers.cookie}:{},transformer:l.default})]}},transformer:l.default});r()}catch(e){r(e)}})},112:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{$z:()=>n});var i=s(9926),a=e([i]);let n=(i=(a.then?(await a)():a)[0]).z.object({title:i.z.string().min(1),description:i.z.string().optional(),date:i.z.coerce.date()});i.z.object({id:i.z.number().int().positive(),title:i.z.string().min(1),description:i.z.string().optional(),date:i.z.coerce.date()}),i.z.object({id:i.z.number().int().positive()}),r()}catch(e){r(e)}})},8553:(e,t,s)=>{"use strict";s.d(t,{PG:()=>r,cH:()=>i,jJ:()=>a});let r={Home:"/",Events:"/events",CreateEvent:"/events/create",SignIn:"/auth/signin",SignUp:"/signup"},i=process.env.NEXT_PUBLIC_WEATHER_API_KEY,a=e=>`https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=${e}`},108:()=>{},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},272:e=>{"use strict";e.exports=import("@trpc/client")},7455:e=>{"use strict";e.exports=import("@trpc/next")},4936:e=>{"use strict";e.exports=import("@trpc/next/ssrPrepass")},3020:e=>{"use strict";e.exports=import("superjson")},9926:e=>{"use strict";e.exports=import("zod")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[117,61,859,342],()=>s(4263));module.exports=r})();