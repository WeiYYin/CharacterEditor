(()=>{var e={};e.id=955,e.ids=[955],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},4372:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(7096),n=r(6132),a=r(7284),l=r.n(a),i=r(2564),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["[locale]",{children:["settings",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8456)),"C:\\Code\\GitHub\\CharacterEditor\\src\\app\\[locale]\\settings\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9426)),"C:\\Code\\GitHub\\CharacterEditor\\src\\app\\[locale]\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Code\\GitHub\\CharacterEditor\\src\\app\\[locale]\\settings\\page.tsx"],u="/[locale]/settings/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/[locale]/settings/page",pathname:"/[locale]/settings",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1849:(e,t,r)=>{Promise.resolve().then(r.bind(r,5193)),Promise.resolve().then(r.bind(r,6954))},6954:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ep});var s=r(3854),n=r(4218),a=r(3226),l=r(6506),i=r(8334),o=r(4642),c=r(1625),d=r(960),u=r(3266);let p=(0,n.createContext)(null),m=Object.assign((0,a.yV)(function(e,t){let r=(0,l.M)(),{id:s=`headlessui-label-${r}`,passive:i=!1,...o}=e,u=function e(){let t=(0,n.useContext)(p);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),m=(0,d.T)(t);(0,c.e)(()=>u.register(s),[s,u.register]);let x={ref:m,...u.props,id:s};return i&&("onClick"in x&&(delete x.htmlFor,delete x.onClick),"onClick"in o&&delete o.onClick),(0,a.sY)({ourProps:x,theirProps:o,slot:u.slot||{},defaultTag:"label",name:u.name||"Label"})}),{});var x=r(4172);function h(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}var g=r(8336),f=r(808);let b=(0,n.createContext)(null);b.displayName="GroupContext";let v=n.Fragment,y=Object.assign((0,a.yV)(function(e,t){let r=(0,l.M)(),{id:s=`headlessui-switch-${r}`,checked:p,defaultChecked:m=!1,onChange:x,name:v,value:y,form:j,...w}=e,k=(0,n.useContext)(b),C=(0,n.useRef)(null),N=(0,d.T)(C,t,null===k?null:k.setSwitch),[P,E]=function(e,t,r){let[s,a]=(0,n.useState)(r),l=void 0!==e,i=(0,n.useRef)(l),o=(0,n.useRef)(!1),c=(0,n.useRef)(!1);return!l||i.current||o.current?l||!i.current||c.current||(c.current=!0,i.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(o.current=!0,i.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:s,(0,u.z)(e=>(l||a(e),null==t?void 0:t(e)))]}(p,x,m),S=(0,u.z)(()=>null==E?void 0:E(!P)),A=(0,u.z)(e=>{if((0,o.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),S()}),M=(0,u.z)(e=>{e.key===i.R.Space?(e.preventDefault(),S()):e.key===i.R.Enter&&function(e){var t,r;let s=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(s){for(let t of s.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(r=s.requestSubmit)||r.call(s)}}(e.currentTarget)}),O=(0,u.z)(e=>e.preventDefault()),G=(0,n.useMemo)(()=>({checked:P}),[P]),L={id:s,ref:N,role:"switch",type:function(e,t){let[r,s]=(0,n.useState)(()=>h(e));return(0,c.e)(()=>{s(h(e))},[e.type,e.as]),(0,c.e)(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&s("button")},[r,t]),r}(e,C),tabIndex:0,"aria-checked":P,"aria-labelledby":null==k?void 0:k.labelledby,"aria-describedby":null==k?void 0:k.describedby,onClick:A,onKeyUp:M,onKeyPress:O},T=(0,f.G)();return(0,n.useEffect)(()=>{var e;let t=null==(e=C.current)?void 0:e.closest("form");t&&void 0!==m&&T.addEventListener(t,"reset",()=>{E(m)})},[C,E]),n.createElement(n.Fragment,null,null!=v&&P&&n.createElement(g._,{features:g.A.Hidden,...(0,a.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:j,checked:P,name:v,value:y})}),(0,a.sY)({ourProps:L,theirProps:w,slot:G,defaultTag:"button",name:"Switch"}))}),{Group:function(e){var t;let[r,s]=(0,n.useState)(null),[l,i]=function(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)(()=>function(e){let r=(0,u.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),s=r.indexOf(e);return -1!==s&&r.splice(s,1),r}))),s=(0,n.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return n.createElement(p.Provider,{value:s},e.children)},[t])]}(),[o,c]=(0,x.f)(),d=(0,n.useMemo)(()=>({switch:r,setSwitch:s,labelledby:l,describedby:o}),[r,s,l,o]);return n.createElement(c,{name:"Switch.Description"},n.createElement(i,{name:"Switch.Label",props:{htmlFor:null==(t=d.switch)?void 0:t.id,onClick(e){r&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),r.click(),r.focus({preventScroll:!0}))}}},n.createElement(b.Provider,{value:d},(0,a.sY)({ourProps:{},theirProps:e,defaultTag:v,name:"Switch.Group"}))))},Label:m,Description:x.d});var j=r(2985);let w=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}))}),k=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}))});var C=r(253);function N(...e){return e.filter(Boolean).join(" ")}function P(){let[e,t]=(0,n.useState)(!1),{theme:r,setTheme:a}=(0,C.F)();return(0,n.useEffect)(()=>{t("light"!==r)},[r]),(0,s.jsxs)(y,{checked:e,onClick:()=>{a("light"===r?"dark":"light")},onChange:t,className:N(e?"bg-indigo-600":"bg-gray-200","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"),children:[s.jsx("span",{className:"sr-only",children:"Dark Mode"}),(0,s.jsxs)("span",{className:N(e?"translate-x-5 bg-gray-50":"translate-x-0 bg-gray-50","pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"),children:[s.jsx("span",{className:N(e?"opacity-0 duration-100 ease-out":"opacity-100 duration-200 ease-in","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),"aria-hidden":"true",children:s.jsx("svg",{className:"h-3 w-3 text-gray-800",fill:"none",viewBox:"0 0 12 12",children:s.jsx(w,{})})}),s.jsx("span",{className:N(e?"opacity-100 duration-200 ease-in":"opacity-0 duration-100 ease-out","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),"aria-hidden":"true",children:s.jsx("svg",{className:"h-3 w-3 text-gray-800",fill:"currentColor",viewBox:"0 0 12 12",children:s.jsx(k,{})})})]})]})}var E=r(5490),S=r(6434),A=r(1420);function M(e,t=[]){let r=(0,n.useRef)(e);return(0,A.G)(()=>{r.current=e}),(0,n.useCallback)((...e)=>{var t;return null==(t=r.current)?void 0:t.call(r,...e)},t)}function O(e={}){let{id:t,defaultOpen:r,isOpen:s,onClose:a,onOpen:l,onChange:i=()=>{}}=e,o=M(l),c=M(a),[d,u]=(0,S.zk)(s,r||!1,i),p=(0,n.useId)(),m=t||p,x=void 0!==s,h=(0,n.useCallback)(()=>{x||u(!1),null==c||c()},[x,c]),g=(0,n.useCallback)(()=>{x||u(!0),null==o||o()},[x,o]),f=(0,n.useCallback)(()=>{let e=d?h:g;e()},[d,g,h]);return{isOpen:!!d,onOpen:g,onClose:h,onOpenChange:f,isControlled:x,getButtonProps:(e={})=>({...e,"aria-expanded":d,"aria-controls":m,onClick:(0,E.tS)(e.onClick,f)}),getDisclosureProps:(e={})=>({...e,hidden:!d,id:m})}}var G=r(1472),L=r(7474),T=r(7348),B=(0,L.tv)({slots:{wrapper:["flex","w-screen","h-[100dvh]","fixed","inset-0","z-50","overflow-x-auto","justify-center","[--scale-enter:100%]","[--scale-exit:100%]","[--slide-enter:0px]","[--slide-exit:80px]","sm:[--scale-enter:100%]","sm:[--scale-exit:103%]","sm:[--slide-enter:0px]","sm:[--slide-exit:0px]"],base:["flex","flex-col","relative","bg-white","z-50","w-full","box-border","bg-content1","outline-none","mx-1","my-1","sm:mx-6","sm:my-16"],backdrop:"z-50",header:"flex py-4 px-6 flex-initial text-large font-semibold",body:"flex flex-1 flex-col gap-3 px-6 py-2",footer:"flex flex-row gap-2 px-6 py-4 justify-end",closeButton:["absolute","appearance-none","outline-none","select-none","top-1","right-1","p-2","text-foreground-500","rounded-full","hover:bg-default-100","active:bg-default-200","tap-highlight-transparent",...T.Dh]},variants:{size:{xs:{base:"max-w-xs"},sm:{base:"max-w-sm"},md:{base:"max-w-md"},lg:{base:"max-w-lg"},xl:{base:"max-w-xl"},"2xl":{base:"max-w-2xl"},"3xl":{base:"max-w-3xl"},"4xl":{base:"max-w-4xl"},"5xl":{base:"max-w-5xl"},full:{base:"my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] !rounded-none"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},placement:{auto:{wrapper:"items-end sm:items-center"},center:{wrapper:"items-center sm:items-center"},top:{wrapper:"items-start sm:items-start"},"top-center":{wrapper:"items-start sm:items-center"},bottom:{wrapper:"items-end sm:items-end"},"bottom-center":{wrapper:"items-end sm:items-center"}},shadow:{sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},backdrop:{transparent:{backdrop:"hidden"},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-md backdrop-saturate-150 bg-overlay/30"}},scrollBehavior:{normal:{base:"overflow-y-hidden"},inside:{base:"max-h-[calc(100%_-_7.5rem)]",body:"overflow-y-auto"},outside:{wrapper:"items-start sm:items-start overflow-y-auto",base:"my-16"}}},defaultVariants:{size:"md",radius:"lg",shadow:"sm",placement:"auto",backdrop:"opaque",scrollBehavior:"normal"},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"w-screen h-screen fixed inset-0"}}]}),U=r(3097),_=r(3735),D=r(1243),q=r(7193),z=r(4077),F=r(7227),I=r(4612),[R,W]=(0,r(1948).k)({name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"}),H=r(5985),V=(0,U.Gp)((e,t)=>{let{children:r,...a}=e,l=function(e){var t;let[r,s]=(0,U.oe)(e,B.variantKeys),{ref:a,as:l,className:i,classNames:o,disableAnimation:c=!1,isOpen:d,defaultOpen:u,onOpenChange:p,motionProps:m,closeButton:x,isDismissable:h=!0,hideCloseButton:g=!1,shouldBlockScroll:f=!0,portalContainer:b,isKeyboardDismissDisabled:v=!1,onClose:y,...j}=r,w=(0,F.gy)(a),k=(0,n.useRef)(null),[C,N]=(0,n.useState)(!1),[P,S]=(0,n.useState)(!1),A=(0,n.useId)(),M=(0,n.useId)(),O=(0,n.useId)(),L=(0,I.d)({isOpen:d,defaultOpen:u,onOpenChange:e=>{null==p||p(e),e||null==y||y()}}),{modalProps:T,underlayProps:R}=function(e={},t,r){let{overlayProps:s,underlayProps:a}=(0,G.Ir)({...e,isOpen:t.isOpen,onClose:t.close},r);return(0,G.Bq)(),(0,n.useEffect)(()=>{if(t.isOpen&&r.current)return(0,G.RP)([r.current])},[t.isOpen,r]),{modalProps:(0,E.dG)(s),underlayProps:a}}({isDismissable:h,isKeyboardDismissDisabled:v},L,w),{buttonProps:W}=(0,_.j)({onPress:L.close},k),{isFocusVisible:H,focusProps:V}=(0,D.Fx)(),Y=(0,q.W)(null==o?void 0:o.base,i),K=(0,n.useMemo)(()=>B({...s}),[...Object.values(s)]),Z=(0,n.useCallback)((e={})=>({className:K.backdrop({class:null==o?void 0:o.backdrop}),onClick:()=>L.close(),...R,...e}),[K,o,R]);return{Component:l||"section",slots:K,domRef:w,headerId:M,bodyId:O,motionProps:m,classNames:o,isDismissable:h,closeButton:x,hideCloseButton:g,portalContainer:b,shouldBlockScroll:f,backdrop:null!=(t=e.backdrop)?t:"opaque",isOpen:L.isOpen,onClose:L.close,disableAnimation:c,setBodyMounted:S,setHeaderMounted:N,getDialogProps:(e={},t=null)=>({ref:(0,E.lq)(t,w),...(0,E.dG)(T,j,e),className:K.base({class:(0,q.W)(Y,e.className)}),id:A,"data-open":(0,z.PB)(L.isOpen),"data-dismissable":(0,z.PB)(h),"aria-modal":(0,z.PB)(!0),"aria-labelledby":C?M:void 0,"aria-describedby":P?O:void 0}),getBackdropProps:Z,getCloseButtonProps:()=>({role:"button",tabIndex:0,"aria-label":"Close","data-focus-visible":(0,z.PB)(H),className:K.closeButton({class:null==o?void 0:o.closeButton}),...(0,E.dG)(W,V)})}}({...a,ref:t}),i=(0,s.jsx)(G.aV,{portalContainer:l.portalContainer,children:r});return(0,s.jsx)(R,{value:l,children:l.disableAnimation&&l.isOpen?i:(0,s.jsx)(H.M,{children:l.isOpen?i:null})})});V.displayName="NextUI.Modal";var Y=r(7826),K={enter:{scale:"var(--scale-enter)",y:"var(--slide-enter))",opacity:1,transition:{scale:{duration:.4,ease:Y.Lj.ease},opacity:{duration:.4,ease:Y.Lj.ease},y:{type:"spring",bounce:0,duration:.6}}},exit:{scale:"var(--scale-exit)",y:"var(--slide-exit)",opacity:0,transition:{duration:.3,ease:Y.Lj.ease}}},Z=e=>(0,s.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:(0,s.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})}),$=r(8072),X=r(785),J=r(117),Q=(0,U.Gp)((e,t)=>{let{as:r,children:a,role:l="dialog",...i}=e,{Component:o,domRef:c,slots:d,isOpen:u,classNames:p,motionProps:m,backdrop:x,closeButton:h,hideCloseButton:g,disableAnimation:f,shouldBlockScroll:b,getDialogProps:v,getBackdropProps:y,getCloseButtonProps:j,onClose:w}=W(),{dialogProps:k}=(0,J.R)({role:l},c),C=(0,n.isValidElement)(h)?(0,n.cloneElement)(h,j()):(0,s.jsx)("button",{...j(),children:(0,s.jsx)(Z,{})}),N=(0,s.jsxs)(r||o||"div",{...v((0,E.dG)(k,i)),children:[(0,s.jsx)(G.U4,{onDismiss:w}),!g&&C,"function"==typeof a?a(w):a,(0,s.jsx)(G.U4,{onDismiss:w})]}),P=(0,n.useMemo)(()=>"transparent"===x?null:f?(0,s.jsx)("div",{...y()}):(0,s.jsx)(X.E.div,{animate:"enter",exit:"exit",initial:"exit",variants:Y.y7.fade,...y()}),[x,f,y]);return(0,s.jsxs)("div",{tabIndex:-1,children:[P,(0,s.jsx)($.Z,{forwardProps:!0,enabled:b&&u,removeScrollBar:!1,children:f?(0,s.jsx)("div",{className:d.wrapper({class:null==p?void 0:p.wrapper}),children:N}):(0,s.jsx)(X.E.div,{animate:"enter",className:d.wrapper({class:null==p?void 0:p.wrapper}),exit:"exit",initial:"exit",variants:K,...m,children:N})})]})});Q.displayName="NextUI.ModalContent";var ee=(0,U.Gp)((e,t)=>{let{as:r,children:a,className:l,...i}=e,{slots:o,classNames:c,headerId:d,setHeaderMounted:u}=W(),p=(0,F.gy)(t);return(0,n.useEffect)(()=>(u(!0),()=>u(!1)),[u]),(0,s.jsx)(r||"header",{ref:p,className:o.header({class:(0,q.W)(null==c?void 0:c.header,l)}),id:d,...i,children:a})});ee.displayName="NextUI.ModalHeader";var et=(0,U.Gp)((e,t)=>{let{as:r,children:a,className:l,...i}=e,{slots:o,classNames:c,bodyId:d,setBodyMounted:u}=W(),p=(0,F.gy)(t);return(0,n.useEffect)(()=>(u(!0),()=>u(!1)),[u]),(0,s.jsx)(r||"div",{ref:p,className:o.body({class:(0,q.W)(null==c?void 0:c.body,l)}),id:d,...i,children:a})});et.displayName="NextUI.ModalBody";var er=r(1604),es=r(1491);let en=function(){let e=(0,j.useTranslations)(),{isOpen:t,onOpen:r,onOpenChange:n}=O();return(0,s.jsxs)(s.Fragment,{children:[s.jsx(V,{isOpen:t,onOpenChange:n,children:s.jsx(Q,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(ee,{className:"flex flex-col gap-1",children:[" ",e("Settings.changelanguage")]}),(0,s.jsxs)(et,{children:[s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"en",children:"English"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"zh-CN",children:"简体中文"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"zh-TW",children:"繁體中文"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"ja",children:"日本語"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"kr",children:"한국어"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"fr",children:"Fran\xe7ais"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"es",children:"Lengua espa\xf1ola"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"pt",children:"Portugu\xeas"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"ru",children:"Русский"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"it",children:"Italiano"})}),s.jsx(er.A,{color:"primary",variant:"light",children:s.jsx(es.rU,{href:"/settings",locale:"de",children:"Deutsch"})})]})]})})}),s.jsx("button",{onClick:r,type:"button",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:e("Settings.changelanguage")})]})};var ea=(0,U.Gp)((e,t)=>{let{as:r,children:n,className:a,...l}=e,{slots:i,classNames:o}=W(),c=(0,F.gy)(t);return(0,s.jsx)(r||"footer",{ref:c,className:i.footer({class:(0,q.W)(null==o?void 0:o.footer,a)}),...l,children:n})});ea.displayName="NextUI.ModalFooter";var el=r(9479),ei=r(9676),eo=r(4532);function ec(){let e=(0,j.useTranslations)(),{isOpen:t,onOpen:r,onOpenChange:n}=O(),a=()=>{localStorage.clear(),n(),alert(e("Settings.DelDone"))};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(er.A,{color:"danger",onPress:r,children:e("Settings.idecidedtotry")}),s.jsx(V,{isOpen:t,onOpenChange:n,children:s.jsx(Q,{children:t=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(ee,{className:"flex flex-col gap-1 text-rose-500",children:e("Settings.thisoperationsisirrevocable")}),s.jsx(et,{children:s.jsx("h1",{className:"text-red-500 text-xl font-extrabold",children:e("Settings.haveyoureallythoughtthisthrough")})}),(0,s.jsxs)(ea,{children:[s.jsx(er.A,{color:"success",variant:"light",onPress:t,children:e("Settings.close")}),(0,s.jsxs)(el.j,{placement:"right",color:"danger",children:[s.jsx(ei.b,{children:s.jsx(er.A,{color:"danger",children:e("Settings.imsure")})}),s.jsx(eo.g,{children:s.jsx(er.A,{onClick:a,color:"danger",children:e("Settings.DELETE")})})]})]})]})})})]})}var ed=r(8007);function eu(){let{isOpen:e,onOpen:t,onOpenChange:r}=O(),{character_book:n,setCharacter_Book:a}=(0,ed.Io)();return(0,s.jsxs)(s.Fragment,{children:[s.jsx("button",{type:"button",className:"font-semibold text-indigo-600 hover:text-indigo-500",onClick:t,children:"更改"}),s.jsx(V,{isOpen:e,onOpenChange:r,children:s.jsx(Q,{children:e=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(ee,{className:"flex flex-col gap-1",children:"更改所有世界書位置"}),(0,s.jsxs)(et,{children:[s.jsx(er.A,{onClick:()=>{a(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:0}}))})),e()},color:"primary",variant:"ghost",children:"角色之前"}),s.jsx(er.A,{onClick:()=>{a(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:1}}))})),e()},color:"primary",variant:"ghost",children:"角色之后"}),s.jsx(er.A,{onClick:()=>{a(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:2}}))})),e()},color:"primary",variant:"ghost",children:"字符之前"}),s.jsx(er.A,{onClick:()=>{a(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:3}}))})),e()},color:"primary",variant:"ghost",children:"字符之后"}),s.jsx(er.A,{onClick:()=>{a(e=>({...e,entries:(e.entries||[]).map(e=>({...e,extensions:{...e.extensions,position:4}}))})),e()},color:"primary",variant:"ghost",children:"@D"})]})]})})})]})}function ep(){let e=(0,j.useTranslations)(),[t,r]=(0,n.useState)(!0);return s.jsx(s.Fragment,{children:s.jsx("div",{className:"mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none",children:(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"text-base font-semibold leading-7",children:e("Settings.websitedisplaysettings")}),s.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-500",children:e("Settings.settingthedisplayofthewebsite")}),(0,s.jsxs)("dl",{className:"mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6",children:[(0,s.jsxs)(y.Group,{as:"div",className:"flex pt-6",children:[s.jsx(y.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:e("Settings.displaylanguage")}),s.jsx("dd",{className:"flex flex-auto items-center justify-end",children:s.jsx(en,{})})]}),(0,s.jsxs)(y.Group,{as:"div",className:"flex pt-6",children:[s.jsx(y.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:e("Settings.darkmode")}),s.jsx("dd",{className:"flex flex-auto items-center justify-end",children:s.jsx(P,{})})]})]}),(0,s.jsxs)("div",{className:"pt-16",children:[s.jsx("h2",{className:"text-base font-semibold leading-7 text-red-500",children:e("Settings.hazardousoperations")}),s.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-500",children:e("Settings.ifyouhaveproblemsusingityoucantry")}),s.jsx("dl",{className:"mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6",children:(0,s.jsxs)(y.Group,{as:"div",className:"flex pt-6",children:[s.jsx(y.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:e("Settings.clearalldata")}),s.jsx("dd",{className:"flex flex-auto items-center justify-end",children:s.jsx(ec,{})})]})}),s.jsx("dl",{className:"mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6",children:(0,s.jsxs)(y.Group,{as:"div",className:"flex pt-6",children:[(0,s.jsxs)(y.Label,{as:"dt",className:"flex-none pr-6 font-medium sm:w-64",passive:!0,children:["更改所有世界書位置"," ",s.jsx("span",{className:"inline-flex items-center rounded-md bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800",children:"Beta"})]}),s.jsx("dd",{className:"flex flex-auto items-center justify-end",children:s.jsx(eu,{})})]})})]})]})})})}},8456:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(4656);r(3542);var n=r(5153);let a=(0,n.createProxy)(String.raw`C:\Code\GitHub\CharacterEditor\src\app\[locale]\_ui\settings\Settings.tsx`),{__esModule:l,$$typeof:i}=a,o=a.default;var c=r(9753),d=r(2259);let u=function(){let e=(0,c.Z)();return s.jsx(s.Fragment,{children:s.jsx(d.Z,{messages:e,children:s.jsx(o,{})})})}},1420:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});var s=r(4218),n=(null==globalThis?void 0:globalThis.document)?s.useLayoutEffect:s.useEffect}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[271,673,980,604,329,18,7],()=>r(4372));module.exports=s})();