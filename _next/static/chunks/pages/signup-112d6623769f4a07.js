(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:(e,a,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return s(9550)}])},9550:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>d});var t=s(5893),r=s(7294),l=s(1163),n=s(3299);let i={ErrorMessage:"Ошибка:",RequestExecutionError:"Ошибка выполнения запроса:",PasswordsDoNotMatch:"Пароли не совпадают",SignInError:"Не удалось выполнить вход",SignUpError:"Произошла ошибка при регистрации",UnknownSignUpError:"Неизвестная ошибка при регистрации"},o={SignUp:"/api/auth/signup"};var u=s(8553);let d=()=>{let e=(0,l.useRouter)(),[a,s]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[c,p]=(0,r.useState)(""),[g,x]=(0,r.useState)(""),[h,f]=(0,r.useState)(""),w=async a=>{a.preventDefault();let t=a.target;if(c!==g){f(i.PasswordsDoNotMatch);return}let r={email:t.email.value,password:c,name:t.name.value};try{if((await fetch(o.SignUp,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok){let a=await (0,n.signIn)("credentials",{redirect:!1,email:r.email,password:r.password});(null==a?void 0:a.ok)?(s(""),m(""),p(""),x(""),e.push(u.PG.Home)):f(i.SignInError)}else f(i.SignUpError)}catch(e){console.error(i.RequestExecutionError,e),e instanceof Error?f(i.ErrorMessage+e.message):f(i.UnknownSignUpError)}};return(0,t.jsxs)("form",{className:"m-auto w-[300px] p-8 bg-gray-50 dark:bg-gray-900 rounded-xl",onSubmit:w,children:[(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("label",{htmlFor:"name",children:"Имя:"}),(0,t.jsx)("input",{className:"flex w-full text-black text-lg rounded-md",id:"name",name:"name",type:"text",value:d,onChange:e=>m(e.target.value),autoComplete:"name",required:!0})]}),(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("label",{htmlFor:"email",children:"Электронная почта:"}),(0,t.jsx)("input",{className:"flex w-full text-black text-lg rounded-md",id:"email",name:"email",type:"email",value:a,onChange:e=>s(e.target.value),autoComplete:"email",required:!0})]}),(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("label",{htmlFor:"password",children:"Пароль:"}),(0,t.jsx)("input",{className:"flex w-full text-black text-lg rounded-md",id:"password",name:"password",type:"password",value:c,onChange:e=>p(e.target.value),required:!0})]}),(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("label",{htmlFor:"confirmPassword",children:"Повторите пароль:"}),(0,t.jsx)("input",{className:"flex w-full text-black text-lg rounded-md",id:"confirmPassword",name:"confirmPassword",type:"password",value:g,onChange:e=>x(e.target.value),required:!0})]}),(0,t.jsx)("button",{className:"flex text-align-center w-full justify-center rounded-md  mt-6 bg-indigo-600 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",children:"Регистрация"}),h&&(0,t.jsx)("p",{className:"text-red-500",children:h})]})}},1163:(e,a,s)=>{e.exports=s(9090)}},e=>{var a=a=>e(e.s=a);e.O(0,[888,774,179],()=>a(7805)),_N_E=e.O()}]);