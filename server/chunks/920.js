exports.id=920,exports.ids=[920],exports.modules={8756:(e,t,s)=>{"use strict";s.a(e,async(e,i)=>{try{s.d(t,{O:()=>r.O});var r=s(510),a=e([r]);r=(a.then?(await a)():a)[0],i()}catch(e){i(e)}})},510:(e,t,s)=>{"use strict";s.a(e,async(e,i)=>{try{s.d(t,{O:()=>o});var r=s(997),a=s(5641),n=s(1656),l=s(5282),d=e([a,n,l]);[a,n,l]=d.then?(await d)():d;let o=({onSubmit:e,cancelHandler:t,isEdit:s,data:i})=>{let{register:d,handleSubmit:o,formState:{errors:c}}=(0,a.useForm)({resolver:(0,n.zodResolver)(l.$z),mode:"onChange",defaultValues:{title:i?.title||"",description:i?.description||"",date:i?.date?new Date(i.date).toISOString().split("T")[0]:new Date().toISOString().split("T")[0]}});return(0,r.jsxs)("form",{onSubmit:o(e),children:[r.jsx("div",{className:"space-y-12 p-8 font-sans shadow-xl mt-2 border border-[#962433] rounded-md bg-gradient-to-bl from-sky-200 to-indigo-600",children:(0,r.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[r.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Событие"}),r.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Заполните форму для создания события"}),(0,r.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,r.jsxs)("div",{className:"sm:col-span-4",children:[r.jsx("label",{htmlFor:"title",className:"block text-sm font-medium leading-6 text-gray-900",children:"Название"}),r.jsx("div",{className:"mt-2",children:r.jsx("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:r.jsx("input",{type:"text",id:"title",autoComplete:"title",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",...d("title")})})}),r.jsx("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:c.title?.message})]}),(0,r.jsxs)("div",{className:"col-span-full",children:[r.jsx("label",{htmlFor:"description",className:"block text-sm font-medium leading-6 text-gray-900",children:"Описание"}),r.jsx("div",{className:"mt-2",children:r.jsx("textarea",{id:"description",rows:3,className:"block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...d("description")})}),c.description?r.jsx("p",{className:"mt-3 text-sm leading-6 text-red-500",children:c.description.message}):r.jsx("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Напишите несколько предложений о предстоящем мероприятии"})]}),(0,r.jsxs)("div",{className:"col-span-full",children:[r.jsx("label",{htmlFor:"date",className:"block text-sm font-medium leading-6 text-gray-900",children:"Дата проведения"}),r.jsx("div",{className:"mt-2",children:r.jsx("input",{id:"date",type:"date",className:"block rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...d("date")})}),c.date&&r.jsx("p",{className:"mt-3 text-sm leading-6 text-red-500",children:c.date.message})]})]})]})}),(0,r.jsxs)("div",{className:"mt-2 flex items-center justify-end gap-x-6",children:[r.jsx("button",{type:"button",className:"text-lg font-semibold leading-6 text-red-600",onClick:t,children:"Отмена"}),r.jsx("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:s?"Обновить":"Создать"})]})]})};i()}catch(e){i(e)}})},4279:(e,t,s)=>{"use strict";s.d(t,{$:()=>g,h:()=>c});var i=s(997),r=s(1649),a=s(5675),n=s.n(a),l=s(1664),d=s.n(l),o=s(6689);let c=()=>{let{data:e,status:t}=(0,r.useSession)();return(0,i.jsxs)("div",{className:"fixed h-[88px] w-full top-0 left-0 bg-gradient-to-bl from-sky-200/90 to-indigo-600/90 z-50 flex justify-around text-sm py-6 border-b border-[#962433]",children:[i.jsx("div",{className:"flex-none w-44 relative image-container",children:i.jsx(d(),{href:"/",className:"absolute inset-0",children:i.jsx(n(),{src:"/rs.svg",alt:"Result School",className:"absolute inset-0 w-full h-full object-contain",fill:!0,sizes:"(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw",priority:!0})})}),"unauthenticated"===t?(0,i.jsxs)("div",{className:"flex gap-10 text-lg items-center font-bold",children:[i.jsx(d(),{className:"text-green-900",href:"/api/auth/signin",children:"Войти"}),i.jsx(d(),{className:"text-blue-900",href:"/signup",children:"Регистрация"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"h-10 px-2 font-semibold text-gray-300 align-middle leading-10",children:[e?.user?.name," ←"]}),i.jsx(d(),{className:"h-10 px-6 mr-4 font-semibold rounded-md bg-green-500 text-white align-middle leading-10",href:"/events/create",children:"Создать событие"}),i.jsx(d(),{className:"h-10 px-6 font-semibold rounded-md bg-red-500 text-white align-middle leading-10",href:"/api/auth/signout",children:"Выйти"})]})]})};var m=s(8553);let x=()=>{window.scrollTo({top:0,behavior:"smooth"})},g=()=>{let[e,t]=(0,o.useState)("Minsk"),[s,r]=(0,o.useState)(null),[a,l]=(0,o.useState)("");return(0,o.useEffect)(()=>{fetch((0,m.jJ)(m.cH)).then(e=>e.json()).then(({name:e,main:s,weather:i})=>{t(e),r(Math.round(s.temp)),l(i[0].description)})},[s]),(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"h-2"}),(0,i.jsxs)("div",{className:"h-[88px] w-full mt-auto bottom-0 bg-gradient-to-bl from-sky-200/90 to-indigo-600/90 z-50 flex justify-around text-sm py-6 border-t border-l border-r border-[#962433] rounded-t-md",children:[i.jsx("div",{className:"flex-none text-black font-bold",children:(0,i.jsxs)(d(),{href:"https://vitalyvitmens.github.io/my-portfolio/",target:"_blank",children:[i.jsx("div",{children:"Events"}),(0,i.jsxs)("div",{children:["\xa9"," ",new Date().toLocaleString("en",{year:"numeric"})," ","vitalyvitmens. All rights reserved."]})]})}),i.jsx("a",{onClick:x,className:"cursor-pointer shadow-lg shadow-gray-900 hover:opacity-70 transition duration-300 rounded-full bg-gray-300",children:i.jsx(n(),{src:"/to-up.svg",alt:"To up",width:40,height:40,priority:!0})}),(0,i.jsxs)("div",{className:"flex-none text-black font-bold",children:[(0,i.jsxs)("div",{children:[e," ",new Date().toLocaleString("ru",{day:"numeric",month:"long",year:"numeric"})]}),(0,i.jsxs)("div",{children:[s,"\xb0C, "," ",a]})]})]})]})}},3893:(e,t,s)=>{"use strict";s.a(e,async(e,i)=>{try{s.r(t),s.d(t,{default:()=>c});var r=s(997),a=s(5282);s(108);var n=s(1649),l=s(4279),d=e([a]);function o({Component:e,pageProps:t}){return r.jsx("div",{className:"flex flex-col min-h-screen-minus-footer mx-auto mt-[88px] max-w-4xl rounded-md bg-transparent",children:(0,r.jsxs)(n.SessionProvider,{session:t.session,children:[r.jsx(l.h,{}),r.jsx(e,{...t}),r.jsx(l.$,{})]})})}a=(d.then?(await d)():d)[0],o.getInitialProps=async e=>({pageProps:{session:await (0,n.getSession)({req:e.ctx.req})}});let c=a.SX.withTRPC(o);i()}catch(e){i(e)}})},1070:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var i=s(997),r=s(6859);function a(){return(0,i.jsxs)(r.Html,{lang:"en",children:[i.jsx(r.Head,{children:i.jsx("link",{rel:"icon",href:"/favicon.png",type:"image/png",sizes:"32x32"})}),(0,i.jsxs)("body",{children:[i.jsx(r.Main,{}),i.jsx(r.NextScript,{})]})]})}},5282:(e,t,s)=>{"use strict";s.a(e,async(e,i)=>{try{s.d(t,{$z:()=>d.$z,SX:()=>c});var r=s(272),a=s(7455),n=s(4936),l=s(3020),d=s(112),o=e([r,a,n,l,d]);[r,a,n,l,d]=o.then?(await o)():o;let c=(0,a.createTRPCNext)({ssr:!0,ssrPrepass:n.ssrPrepass,config(e){let{ctx:t}=e,s=`http://localhost:${process.env.PORT??3e3}/api/trpc`;return{links:[(0,r.httpBatchLink)({url:s,headers:()=>t?.req?.headers?{cookie:t.req.headers.cookie}:{},transformer:l.default})]}},transformer:l.default});i()}catch(e){i(e)}})},112:(e,t,s)=>{"use strict";s.a(e,async(e,i)=>{try{s.d(t,{$z:()=>n});var r=s(9926),a=e([r]);let n=(r=(a.then?(await a)():a)[0]).z.object({title:r.z.string().min(1),description:r.z.string().optional(),date:r.z.coerce.date()});r.z.object({id:r.z.number().int().positive(),title:r.z.string().min(1),description:r.z.string().optional(),date:r.z.coerce.date()}),r.z.object({id:r.z.number().int().positive()}),i()}catch(e){i(e)}})},8553:(e,t,s)=>{"use strict";s.d(t,{PG:()=>i,cH:()=>r,jJ:()=>a});let i={Home:"/",Events:"/events",CreateEvent:"/events/create",SignIn:"/auth/signin",SignUp:"/signup"},r=process.env.NEXT_PUBLIC_WEATHER_API_KEY,a=e=>`https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=${e}`},108:()=>{}};