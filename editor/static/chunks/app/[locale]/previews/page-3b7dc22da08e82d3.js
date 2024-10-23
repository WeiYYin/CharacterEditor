(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{3781:function(e,a,r){Promise.resolve().then(r.bind(r,4813)),Promise.resolve().then(r.bind(r,7761))},7761:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return p}});var t=r(7437),s=r(9660),c=r(6216),i=r(5310),l=r(8193),n=r(2265),o=r(6656),d=r(116),h=r(5426),m=r(7427),x=r(4511),j=function(){let e=(0,d.useTranslations)(),{cover:a}=(0,o.C3)(),{chara:r}=(0,o.FS)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(h.d,{variant:"shadow",selectionMode:"multiple",children:[(0,t.jsx)(m.G,{"aria-label":"Accordion 1",title:e("Character.cover"),children:(0,t.jsx)(x.J,{src:a,height:192,width:192})},"1"),(0,t.jsxs)(m.G,{"aria-label":"Accordion 2",title:e("Character.information"),children:[(0,t.jsxs)("label",{className:"block text-sm font-medium leading-6",children:[e("Character.charactername"),(0,t.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,t.jsx)("p",{className:"text-gray-500",children:r.data.name}),(0,t.jsx)("label",{className:"block text-sm font-medium leading-6",children:e("Character.createdby")}),(0,t.jsx)("p",{className:"text-gray-500",children:r.data.creator}),(0,t.jsx)("label",{className:"block text-sm font-medium leading-6",children:e("Character.characterversion")}),(0,t.jsx)("p",{className:"text-gray-500",children:r.data.character_version}),(0,t.jsx)("label",{className:"block text-sm font-medium leading-6",children:e("Character.tagstoembed")}),(0,t.jsx)("p",{className:"text-gray-500",children:r.data.tags}),(0,t.jsx)("label",{className:"block text-sm font-medium leading-6",children:e("Character.creatorsnotes")}),(0,t.jsx)("p",{className:"text-gray-500",children:r.data.creator_notes}),(0,t.jsx)("label",{className:"block text-sm font-medium leading-6",children:e("Character.personalitysummary")}),(0,t.jsx)("p",{className:"text-gray-500",children:r.data.personality}),(0,t.jsx)("label",{className:"block text-sm font-medium leading-6",children:e("Character.scenario")}),(0,t.jsx)("p",{className:"text-gray-500",children:r.data.scenario})]},"2"),(0,t.jsx)(m.G,{"aria-label":"Accordion 3",title:e("Character.description"),children:(0,t.jsx)("p",{className:"text-gray-500",children:r.data.description})},"3"),(0,t.jsx)(m.G,{"aria-label":"Accordion 4",title:e("Character.firstmessage"),children:(0,t.jsx)("p",{className:"text-gray-500",children:r.data.first_mes})},"4"),(0,t.jsx)(m.G,{"aria-label":"Accordion 5",title:e("Character.mainprompt"),children:(0,t.jsx)("p",{className:"text-gray-500",children:r.data.system_prompt})},"5"),(0,t.jsx)(m.G,{"aria-label":"Accordion 6",title:e("Character.jailbreak"),children:(0,t.jsx)("p",{className:"text-gray-500",children:r.data.post_history_instructions})},"6"),(0,t.jsx)(m.G,{"aria-label":"Accordion 7",title:e("Character.mesexample"),children:(0,t.jsx)("p",{className:"text-gray-500",children:r.data.mes_example})},"7")]})})},p=function(){let[e,a]=(0,n.useState)(!1),[r,h]=(0,n.useState)(!1),m=(0,d.useTranslations)(),{chara:x,setChara:p}=(0,o.FS)(),{character_book:g,setCharacter_Book:b}=(0,o.Io)(),{cover:u,setCover:y}=(0,o.C3)(),{updateChara:f}=(0,o.np)(),C=async e=>{var a;if(h(!0),!(null==x?void 0:null===(a=x.data)||void 0===a?void 0:a.name)){alert(m("Previews.charactercardnamesmust")),h(!1);return}try{let e=await fetch("/api/makechar",{method:"POST",body:JSON.stringify({cover:u,chara:f}),headers:{"Content-Type":"application/json"}});if(e.ok){let a=await e.text(),r=await fetch(a).then(e=>e.blob()),t=URL.createObjectURL(r),s=document.createElement("a");s.href=t,s.download=x.data.name+x.data.character_version+".png",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(t),h(!1)}else console.error("Failed to generate image"),h(!1)}catch(e){console.error("Error:",e),h(!1)}h(!1)},v=async e=>{{a(!0);let r=e.target.files[0],t=await fetch("/api/readchar",{method:"POST",body:r});if(t.ok){let e=await t.json();e.data.character_book&&b(e.data.character_book),y(e.CyberWaifu_ORG_cover),delete e.data.character_book,delete e.CyberWaifu_ORG_cover,e.data.extensions.world="",p(e),a(!1),alert(m("Previews.importok"))}else a(!1)}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"grid gap-4",children:[(0,t.jsxs)(s.j,{placement:"bottom",color:"primary",children:[(0,t.jsx)(c.b,{children:(0,t.jsx)(i.A,{isLoading:r,color:"success",children:m("Previews.exportingcharactercards")})}),(0,t.jsx)(l.g,{children:(0,t.jsxs)(s.j,{placement:"bottom",color:"primary",children:[(0,t.jsx)(c.b,{children:(0,t.jsx)(i.A,{isLoading:r,color:"primary",children:m("Previews.isitalldone")})}),(0,t.jsx)(l.g,{children:(0,t.jsx)(i.A,{isLoading:r,onClick:C,color:"primary",children:m("Previews.export")})})]})})]}),(0,t.jsx)(j,{}),(0,t.jsxs)(s.j,{placement:"top",color:"danger",children:[(0,t.jsx)(c.b,{children:(0,t.jsx)(i.A,{isLoading:e,color:"default",children:m("Previews.importingcharactercards")})}),(0,t.jsx)(l.g,{children:(0,t.jsxs)(s.j,{placement:"top",color:"warning",children:[(0,t.jsx)(c.b,{children:(0,t.jsx)(i.A,{isLoading:e,color:"danger",children:m("Previews.thisoperationoverwritesthedata")})}),(0,t.jsxs)(l.g,{children:[(0,t.jsx)("input",{accept:".png",type:"file",id:"ReadChar",style:{display:"none"},onChange:v}),(0,t.jsx)(i.A,{isLoading:e,onClick:()=>{let e=document.getElementById("ReadChar");e&&e.click()},color:"warning",children:m("Previews.import")})]})]})})]})]})})}}},function(e){e.O(0,[910,116,310,125,533,334,284,656,971,472,744],function(){return e(e.s=3781)}),_N_E=e.O()}]);