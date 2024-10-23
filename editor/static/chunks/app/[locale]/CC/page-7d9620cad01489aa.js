(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{4526:function(e,t,l){Promise.resolve().then(l.bind(l,4813)),Promise.resolve().then(l.bind(l,3669))},3669:function(e,t,l){"use strict";l.r(t);var a=l(7437),n=l(5393),s=l(7836),r=l(5310),c=l(3112),i=l(2265);t.default=function(){let[e,t]=(0,i.useState)(!1),[l,o]=(0,i.useState)("BYNC"),[d,u]=(0,i.useState)(""),[h,p]=(0,i.useState)(""),[m,x]=(0,i.useState)(""),[v,C]=(0,i.useState)(""),[g,f]=(0,i.useState)(""),b=async e=>{t(!0);{let a=e.target.files[0],n=new FormData;n.append("card",a),l&&n.append("ccselect",l),n.append("ccauthor",d),n.append("ccfilename",h),n.append("ccmes",m),n.append("cctitleimg",v),n.append("ccbgimg",g);try{let e=await fetch("/api/CC",{method:"POST",body:n});if(e.ok){let l=await e.text(),a=await fetch(l).then(e=>e.blob()),n=URL.createObjectURL(a),s=document.createElement("a");s.href=n,s.download=h+" CC4.0.png",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n),t(!1),console.log("OK")}}catch(e){console.error("error:",e)}}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"rounded-md bg-yellow-50 p-4",children:(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"ml-3",children:(0,a.jsx)("p",{className:"text-sm font-medium text-yellow-800",children:"此页面数据和角色卡编辑器不互通,角色卡第一条消息替换为CC协议页"})})})}),(0,a.jsx)("div",{className:"pt-4",children:(0,a.jsxs)(n.X,{label:"选择你的CC许可证协议[4.0]",color:"primary",defaultValue:l,onChange:e=>{o(e.target.value)},children:[(0,a.jsx)(s.J,{color:"success",value:"BY",description:"允许他人以任何目的、任何媒介，甚至商业目的使用作品，只要提供适当的署名给原作",children:"CC BY （署名）"}),(0,a.jsx)(s.J,{color:"success",value:"BYNC",description:"允许他人以任何目的使用作品，但不允许用于商业目的",children:"CC BY-NC （非商业性使用）"}),(0,a.jsx)(s.J,{color:"danger",value:"BYND",description:"允许他人下载作品并与他人共享，但不允许对作品进行修改或以其为基础进行新的创作",children:"CC BY-ND （禁止演绎）"}),(0,a.jsx)(s.J,{color:"success",value:"BYSA",description:"允许他人以任何目的使用、修改、演绎作品，但新作品必须使用相同的许可协议",children:"CC BY-SA （相同方式共享）"}),(0,a.jsx)(s.J,{color:"warning",value:"BYNCND",description:"允许他人以任何目的使用、修改、演绎作品，但新作品必须使用相同的许可协议。不允许商业性使用，即不可在商业活动中使用作品。他人必须提供适当的署名给原作者",children:"CC BY-NC-ND （署名-非商业性使用）"}),(0,a.jsx)(s.J,{color:"warning",value:"BYNCSA",description:"允许他人以任何目的使用、修改、演绎作品，但新作品必须使用相同的许可协议。不允许商业性使用，即不可在商业活动中使用作品。他人必须提供适当的署名给原作者。",children:"CC BY-NC-SA （署名-相同方式共享）"})]})}),(0,a.jsx)("div",{className:"pt-4",children:(0,a.jsx)("form",{encType:"multipart/form-data",children:(0,a.jsxs)("label",{className:"relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:[(0,a.jsx)("input",{accept:".png",type:"file",onChange:b,className:"hidden"}),(0,a.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"})}),(0,a.jsx)(r.A,{isDisabled:!0,isLoading:e,className:"mt-2 text-center text-sm font-semibold text-gray-900",children:"上传角色卡 不支持批量 ≤10MB"})]})})}),(0,a.jsxs)("div",{className:"pt-4 w-full flex flex-col gap-4",children:[(0,a.jsx)("h4",{children:"可选内容"}),(0,a.jsx)(c.Y,{value:d,onChange:e=>u(e.target.value),label:"作者名"}),(0,a.jsx)(c.Y,{value:h,onChange:e=>p(e.target.value),label:"角色卡名"}),(0,a.jsx)(c.Y,{value:m,onChange:e=>x(e.target.value),label:"自定义消息"}),(0,a.jsx)(c.Y,{value:v,onChange:e=>C(e.target.value),label:"自定义头图[链接]"}),(0,a.jsx)(c.Y,{value:g,onChange:e=>f(e.target.value),label:"自定义CC页背景[链接]"})]})]})}},1416:function(e,t,l){"use strict";l.d(t,{T:function(){return c}});var a=l(5479),n=l(2265),s=l(6820);let r={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function c(e){let{children:t,elementType:Element="div",isFocusable:l,style:c,...i}=e,{visuallyHiddenProps:o}=function(e={}){let{style:t,isFocusable:l}=e,[a,c]=(0,n.useState)(!1),{focusWithinProps:i}=(0,s.L_)({isDisabled:!l,onFocusWithinChange:e=>c(e)}),o=(0,n.useMemo)(()=>a?t:t?{...r,...t}:r,[a]);return{visuallyHiddenProps:{...i,style:o}}}(e);return n.createElement(Element,(0,a.dG)(i,o),t)}}},function(e){e.O(0,[910,310,537,937,971,472,744],function(){return e(e.s=4526)}),_N_E=e.O()}]);