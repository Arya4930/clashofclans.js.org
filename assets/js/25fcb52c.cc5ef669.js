"use strict";(self.webpackChunkclashofclans_js_org=self.webpackChunkclashofclans_js_org||[]).push([[8574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,k=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"APIVerifyToken",title:"Interface: APIVerifyToken",sidebar_label:"APIVerifyToken",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/APIVerifyToken",id:"api/interfaces/APIVerifyToken",title:"Interface: APIVerifyToken",description:"/players//verifytoken",source:"@site/docs/api/interfaces/APIVerifyToken.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/APIVerifyToken",permalink:"/docs/api/interfaces/APIVerifyToken",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"APIVerifyToken",title:"Interface: APIVerifyToken",sidebar_label:"APIVerifyToken",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"APISeason",permalink:"/docs/api/interfaces/APISeason"},next:{title:"APIWarClan",permalink:"/docs/api/interfaces/APIWarClan"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"tag",id:"tag",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"token",id:"token",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"/players/{playerTag}/verifytoken"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"tag"},"tag"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tag"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/api.ts#L347"},"types/api.ts:347")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"token"},"token"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"token"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/api.ts#L348"},"types/api.ts:348")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"status"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"ok"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"invalid"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/api.ts#L349"},"types/api.ts:349")))}u.isMDXComponent=!0}}]);