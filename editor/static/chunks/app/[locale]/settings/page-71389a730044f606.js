(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955],{4084:function(e,s,n){Promise.resolve().then(n.bind(n,4813)),Promise.resolve().then(n.bind(n,9403))},9403:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return C}});var r=n(7437),i=n(2265),t=n(2838),l=n(116),a=n(7323),o=n(4271),c=n(6435);function d(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];return s.filter(Boolean).join(" ")}function h(){let[e,s]=(0,i.useState)(!1),{theme:n,setTheme:l}=(0,c.F)();return(0,i.useEffect)(()=>{s("light"!==n)},[n]),(0,r.jsxs)(t.r,{checked:e,onClick:()=>{l("light"===n?"dark":"light")},onChange:s,className:d(e?"bg-indigo-600":"bg-gray-200","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"),children:[(0,r.jsx)("span",{className:"sr-only",children:"Dark Mode"}),(0,r.jsxs)("span",{className:d(e?"translate-x-5 bg-gray-50":"translate-x-0 bg-gray-50","pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"),children:[(0,r.jsx)("span",{className:d(e?"opacity-0 duration-100 ease-out":"opacity-100 duration-200 ease-in","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),"aria-hidden":"true",children:(0,r.jsx)("svg",{className:"h-3 w-3 text-gray-800",fill:"none",viewBox:"0 0 12 12",children:(0,r.jsx)(a.Z,{})})}),(0,r.jsx)("span",{className:d(e?"opacity-100 duration-200 ease-in":"opacity-0 duration-100 ease-out","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),"aria-hidden":"true",children:(0,r.jsx)("svg",{className:"h-3 w-3 text-gray-800",fill:"currentColor",viewBox:"0 0 12 12",children:(0,r.jsx)(o.Z,{})})})]})]})}var x=n(4318),g=n(1609),m=n(9605),j=n(1718),u=n(9571),p=n(5310),f=n(525),y=function(){let e=(0,l.useTranslations)(),{isOpen:s,onOpen:n,onOpenChange:i}=(0,x.q)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.R,{isOpen:s,onOpenChange:i,children:(0,r.jsx)(m.A,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j.k,{className:"flex flex-col gap-1",children:[" ",e("Settings.changelanguage")]}),(0,r.jsxs)(u.I,{children:[(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"en",children:"English"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"zh-CN",children:"简体中文"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"zh-TW",children:"繁體中文"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"ja",children:"日本語"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"kr",children:"한국어"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"fr",children:"Fran\xe7ais"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"es",children:"Lengua espa\xf1ola"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"pt",children:"Portugu\xeas"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"ru",children:"Русский"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"it",children:"Italiano"})}),(0,r.jsx)(p.A,{color:"primary",variant:"light",children:(0,r.jsx)(f.rU,{href:"/settings",locale:"de",children:"Deutsch"})})]})]})})}),(0,r.jsx)("button",{onClick:n,type:"button",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:e("Settings.changelanguage")})]})},v=n(2913),b=n(9660),N=n(6216),k=n(8193);function A(){let e=(0,l.useTranslations)(),{isOpen:s,onOpen:n,onOpenChange:i}=(0,x.q)(),t=()=>{localStorage.clear(),i(),alert(e("Settings.DelDone"))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.A,{color:"danger",onPress:n,children:e("Settings.idecidedtotry")}),(0,r.jsx)(g.R,{isOpen:s,onOpenChange:i,children:(0,r.jsx)(m.A,{children:s=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.k,{className:"flex flex-col gap-1 text-rose-500",children:e("Settings.thisoperationsisirrevocable")}),(0,r.jsx)(u.I,{children:(0,r.jsx)("h1",{className:"text-red-500 text-xl font-extrabold",children:e("Settings.haveyoureallythoughtthisthrough")})}),(0,r.jsxs)(v.R,{children:[(0,r.jsx)(p.A,{color:"success",variant:"light",onPress:s,children:e("Settings.close")}),(0,r.jsxs)(b.j,{placement:"right",color:"danger",children:[(0,r.jsx)(N.b,{children:(0,r.jsx)(p.A,{color:"danger",children:e("Settings.imsure")})}),(0,r.jsx)(k.g,{children:(0,r.jsx)(p.A,{onClick:t,color:"danger",children:e("Settings.DELETE")})})]})]})]})})})]})}var w=n(6656);function S(){let{isOpen:e,onOpen:s,onOpenChange:n}=(0,x.q)(),{character_book:i,setCharacter_Book:t}=(0,w.Io)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",className:"font-semibold text-indigo-600 hover:text-indigo-500",onClick:s,children:"更改"}),(0,r.jsx)(g.R,{isOpen:e,onOpenChange:n,children:(0,r.jsx)(m.A,{children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.k,{className:"flex flex-col gap-1",children:"更改所有世界書位置"}),(0,r.jsxs)(u.I,{children:[(0,r.jsx)(p.A,{onClick:()=>{t(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:0}}))})),e()},color:"primary",variant:"ghost",children:"角色之前"}),(0,r.jsx)(p.A,{onClick:()=>{t(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:1}}))})),e()},color:"primary",variant:"ghost",children:"角色之后"}),(0,r.jsx)(p.A,{onClick:()=>{t(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:2}}))})),e()},color:"primary",variant:"ghost",children:"字符之前"}),(0,r.jsx)(p.A,{onClick:()=>{t(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:3}}))})),e()},color:"primary",variant:"ghost",children:"字符之后"}),(0,r.jsx)(p.A,{onClick:()=>{t(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:4}}))})),e()},color:"primary",variant:"ghost",children:"@D"})]})]})})})]})}function C(){let e=(0,l.useTranslations)(),[s,n]=(0,i.useState)(!0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-base font-semibold leading-7",children:e("Settings.websitedisplaysettings")}),(0,r.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-500",children:e("Settings.settingthedisplayofthewebsite")}),(0,r.jsxs)("dl",{className:"mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6",children:[(0,r.jsxs)(t.r.Group,{as:"div",className:"flex pt-6",children:[(0,r.jsx)(t.r.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:e("Settings.displaylanguage")}),(0,r.jsx)("dd",{className:"flex flex-auto items-center justify-end",children:(0,r.jsx)(y,{})})]}),(0,r.jsxs)(t.r.Group,{as:"div",className:"flex pt-6",children:[(0,r.jsx)(t.r.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:e("Settings.darkmode")}),(0,r.jsx)("dd",{className:"flex flex-auto items-center justify-end",children:(0,r.jsx)(h,{})})]})]}),(0,r.jsxs)("div",{className:"pt-16",children:[(0,r.jsx)("h2",{className:"text-base font-semibold leading-7 text-red-500",children:e("Settings.hazardousoperations")}),(0,r.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-500",children:e("Settings.ifyouhaveproblemsusingityoucantry")}),(0,r.jsx)("dl",{className:"mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6",children:(0,r.jsxs)(t.r.Group,{as:"div",className:"flex pt-6",children:[(0,r.jsx)(t.r.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:e("Settings.clearalldata")}),(0,r.jsx)("dd",{className:"flex flex-auto items-center justify-end",children:(0,r.jsx)(A,{})})]})}),(0,r.jsx)("dl",{className:"mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6",children:(0,r.jsxs)(t.r.Group,{as:"div",className:"flex pt-6",children:[(0,r.jsxs)(t.r.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:["更改所有世界書位置"," ",(0,r.jsx)("span",{className:"inline-flex items-center rounded-md bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800",children:"Beta"})]}),(0,r.jsx)("dd",{className:"flex flex-auto items-center justify-end",children:(0,r.jsx)(S,{})})]})})]})]})})})}},525:function(e,s,n){"use strict";n.d(s,{jD:function(){return l},rU:function(){return i}});var r=n(7906);let{Link:i,redirect:t,usePathname:l,useRouter:a}=(0,r.iV)({locales:["en","zh-CN","zh-TW","de","es","fr","ja","kr","pt","ru","it"]})}},function(e){e.O(0,[910,116,310,125,533,906,455,656,971,472,744],function(){return e(e.s=4084)}),_N_E=e.O()}]);