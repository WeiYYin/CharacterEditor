(()=>{var e={};e.id=981,e.ids=[981],e.modules={517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2739:(e,r,t)=>{"use strict";t.r(r),t.d(r,{headerHooks:()=>u,originalPathname:()=>g,patchFetch:()=>p,requestAsyncStorage:()=>h,routeModule:()=>c,serverHooks:()=>d,staticGenerationAsyncStorage:()=>f,staticGenerationBailout:()=>l});var n={};t.r(n),t.d(n,{POST:()=>s});var a=t(884),o=t(6132),i=t(1040);async function s(e){let r=t(862),n=t(6526),a=t(7653),o=await e.formData(),i=o.get("card"),s=o.get("ccselect"),c=o.get("ccauthor"),h=o.get("ccfilename"),f=o.get("ccmes"),d=o.get("cctitleimg"),u=o.get("ccbgimg"),l="CC BY-NC 4.0",g="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans";"BY"===s?(l="CC BY 4.0",g="https://creativecommons.org/licenses/by/4.0/legalcode.zh-hans"):"BYNC"===s?(l="CC BY-NC 4.0",g="https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans"):"BYNCND"===s?(l="CC BY-NC-ND 4.0",g="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.zh-hans"):"BYNCSA"===s?(l="CC BY-NC-SA 4.0",g="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-hans"):"BYND"===s?(l="CC BY-ND 4.0",g="https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-hans"):"BYSA"===s&&(l="CC BY-SA 4.0",g="https://creativecommons.org/licenses/by-sa/4.0/legalcode.zh-hans");let p="",m="background: linear-gradient(to bottom, #232526, #414345);";if(""!==d&&(p="<img src="+d+" width=30% />"),""!==u&&(m="background-image:url('"+u+"');"),i instanceof File){let e=await i.arrayBuffer(),t=Buffer.from(e),o=r(t),s=o.filter(e=>"tEXt"===e.name),d=s.map(e=>({chara:a.decode(e)})),u=d[0].chara.text,C=new TextDecoder("utf-8").decode(Buffer.from(atob(u),"binary")),v=JSON.parse(C);v.data.alternate_greetings.unshift(v.data.first_mes),v.data.first_mes="<div style='text-align:center;"+m+"background-size: cover;'><hr/>"+p+"<h1>"+h+"</h1><h3 style='margin-top:24px'>本内容依据“"+l+"”许可证进行授权：<a href='"+g+"'>点击查阅该许可证</a></h3><h4 style='margin-top:24px'>作者"+c+"备注:"+f+"</h4><h3 style='text-align: right;margin-top: 48px'>点击右箭头开始正文内容→&nbsp; &nbsp; </h3><hr/></div>";let y=JSON.stringify(v),b=Buffer.from(y,"utf8").toString("base64");for(let e of s)o.splice(o.indexOf(e),1);o.splice(-1,0,a.encode("chara",b));let w=Buffer.from(n(o)),A=w.toString("base64"),x=`data:image/png;base64,${A}`;return new Response(x)}return new Response("Invalid input",{status:200})}let c=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/CC/route",pathname:"/api/CC",filename:"route",bundlePath:"app/api/CC/route"},resolvedPagePath:"C:\\Code\\GitHub\\CharacterEditor\\src\\app\\api\\CC\\route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:h,staticGenerationAsyncStorage:f,serverHooks:d,headerHooks:u,staticGenerationBailout:l}=c,g="/api/CC/route";function p(){return(0,i.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:f})}},2400:(e,r)=>{(function(e){e.version="0.3.0";var r=function(){for(var e=0,r=Array(256),t=0;256!=t;++t)e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=t)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1,r[t]=e;return"undefined"!=typeof Int32Array?new Int32Array(r):r}(),t="undefined"!=typeof Buffer;function n(e){for(var t=-1,n=0,a=e.length-7;n<a;)t=(t=(t=(t=(t=(t=(t=(t=t>>>8^r[(t^e[n++])&255])>>>8^r[(t^e[n++])&255])>>>8^r[(t^e[n++])&255])>>>8^r[(t^e[n++])&255])>>>8^r[(t^e[n++])&255])>>>8^r[(t^e[n++])&255])>>>8^r[(t^e[n++])&255])>>>8^r[(t^e[n++])&255];for(;n<a+7;)t=t>>>8^r[(t^e[n++])&255];return -1^t}e.table=r,e.bstr=function(e){if(e.length>32768&&t)return n(new Buffer(e));for(var a=-1,o=e.length-1,i=0;i<o;)a=r[(a^e.charCodeAt(i++))&255]^a>>>8,a=r[(a^e.charCodeAt(i++))&255]^a>>>8;return i===o&&(a=a>>>8^r[(a^e.charCodeAt(i))&255]),-1^a},e.buf=function(e){if(e.length>1e4)return n(e);for(var t=-1,a=0,o=e.length-3;a<o;)t=(t=(t=(t=t>>>8^r[(t^e[a++])&255])>>>8^r[(t^e[a++])&255])>>>8^r[(t^e[a++])&255])>>>8^r[(t^e[a++])&255];for(;a<o+3;)t=t>>>8^r[(t^e[a++])&255];return -1^t},e.str=function(e){for(var t,n,a=-1,o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))<128?a=a>>>8^r[(a^t)&255]:t<2048?a=(a=a>>>8^r[(a^(192|t>>6&31))&255])>>>8^r[(a^(128|63&t))&255]:t>=55296&&t<57344?(t=(1023&t)+64,n=1023&e.charCodeAt(o++),a=(a=(a=(a=a>>>8^r[(a^(240|t>>8&7))&255])>>>8^r[(a^(128|t>>2&63))&255])>>>8^r[(a^(128|n>>6&15|3&t))&255])>>>8^r[(a^(128|63&n))&255]):a=(a=(a=a>>>8^r[(a^(224|t>>12&15))&255])>>>8^r[(a^(128|t>>6&63))&255])>>>8^r[(a^(128|63&t))&255];return -1^a}})("undefined"==typeof DO_NOT_EXPORT_CRC?r:{})},884:(e,r,t)=>{"use strict";e.exports=t(517)},6842:e=>{"use strict";e.exports=function(e){e.data&&e.name&&(e=e.data);for(var r=!0,t="",n="",a=0;a<e.length;a++){var o=e[a];if(r)o?n+=String.fromCharCode(o):r=!1;else if(o)t+=String.fromCharCode(o);else throw Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content")}return{keyword:n,text:t}}},1882:e=>{"use strict";e.exports=function(e,r){if(e=String(e),r=String(r),!/^[\x00-\xFF]+$/.test(e)||!/^[\x00-\xFF]+$/.test(r))throw Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");if(e.length>=80)throw Error('Keyword "'+e+'" is longer than the 79-character limit imposed by the PNG specification');for(var t,n=e.length+r.length+1,a=new Uint8Array(n),o=0,i=0;i<e.length;i++){if(!(t=e.charCodeAt(i)))throw Error("0x00 character is not permitted in tEXt keywords");a[o++]=t}a[o++]=0;for(var s=0;s<r.length;s++){if(!(t=r.charCodeAt(s)))throw Error("0x00 character is not permitted in tEXt content");a[o++]=t}return{name:"tEXt",data:a}}},7653:(e,r,t)=>{r.encode=t(1882),r.decode=t(6842)},6526:(e,r,t)=>{"use strict";var n=t(8278),a=t(2400);e.exports=function(e){var r,t=8,c=8;for(r=0;r<e.length;r++)t+=e[r].data.length+12;var h=new Uint8Array(t);for(r=0,h[0]=137,h[1]=80,h[2]=78,h[3]=71,h[4]=13,h[5]=10,h[6]=26,h[7]=10;r<e.length;r++){var f=e[r],d=f.name,u=f.data,l=u.length,g=[d.charCodeAt(0),d.charCodeAt(1),d.charCodeAt(2),d.charCodeAt(3)];s[0]=l,h[c++]=o[3],h[c++]=o[2],h[c++]=o[1],h[c++]=o[0],h[c++]=g[0],h[c++]=g[1],h[c++]=g[2],h[c++]=g[3];for(var p=0;p<l;)h[c++]=u[p++];var m=g.concat(n(u)),C=a.buf(m);i[0]=C,h[c++]=o[3],h[c++]=o[2],h[c++]=o[1],h[c++]=o[0]}return h};var o=new Uint8Array(4),i=new Int32Array(o.buffer),s=new Uint32Array(o.buffer)},862:(e,r,t)=>{"use strict";var n=t(2400);e.exports=function(e){if(137!==e[0]||80!==e[1]||78!==e[2]||71!==e[3])throw Error("Invalid .png file header");if(13!==e[4]||10!==e[5])throw Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(26!==e[6])throw Error("Invalid .png file header");if(10!==e[7])throw Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");for(var r=!1,t=[],s=8;s<e.length;){a[3]=e[s++],a[2]=e[s++],a[1]=e[s++],a[0]=e[s++];var c=i[0]+4,h=new Uint8Array(c);h[0]=e[s++],h[1]=e[s++],h[2]=e[s++],h[3]=e[s++];var f=String.fromCharCode(h[0])+String.fromCharCode(h[1])+String.fromCharCode(h[2])+String.fromCharCode(h[3]);if(!t.length&&"IHDR"!==f)throw Error("IHDR header missing");if("IEND"===f){r=!0,t.push({name:f,data:new Uint8Array(0)});break}for(var d=4;d<c;d++)h[d]=e[s++];a[3]=e[s++],a[2]=e[s++],a[1]=e[s++],a[0]=e[s++];var u=o[0];if(n.buf(h)!==u)throw Error("CRC values for "+f+" header do not match, PNG file is likely corrupted");var l=new Uint8Array(h.buffer.slice(4));t.push({name:f,data:l})}if(!r)throw Error(".png file ended prematurely: no IEND header was found");return t};var a=new Uint8Array(4),o=new Int32Array(a.buffer),i=new Uint32Array(a.buffer)},8278:e=>{"use strict";e.exports=function(e,r,t){var n=[],a=e.length;if(0===a)return n;var o=r<0?Math.max(0,r+a):r||0;for(void 0!==t&&(a=t<0?t+a:t);a-- >o;)n[a-o]=e[a];return n}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[271],()=>t(2739));module.exports=n})();