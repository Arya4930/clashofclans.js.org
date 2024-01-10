"use strict";(self.webpackChunkclashofclans_js_org=self.webpackChunkclashofclans_js_org||[]).push([[8270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=i.createContext({}),o=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=o(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(t),u=l,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:l,a[1]=p;for(var o=2;o<r;o++)a[o]=t[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=t(7462),l=(t(7294),t(3905));const r={id:"ClanSearchOptions",title:"Interface: ClanSearchOptions",sidebar_label:"ClanSearchOptions",sidebar_position:0,custom_edit_url:null},a=void 0,p={unversionedId:"api/interfaces/ClanSearchOptions",id:"api/interfaces/ClanSearchOptions",title:"Interface: ClanSearchOptions",description:"Clan search options for a request.",source:"@site/docs/api/interfaces/ClanSearchOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ClanSearchOptions",permalink:"/docs/api/interfaces/ClanSearchOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ClanSearchOptions",title:"Interface: ClanSearchOptions",sidebar_label:"ClanSearchOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"CacheOptions",permalink:"/docs/api/interfaces/CacheOptions"},next:{title:"ClientOptions",permalink:"/docs/api/interfaces/ClientOptions"}},s={},o=[{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"minMembers",id:"minmembers",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"maxMembers",id:"maxmembers",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"minClanPoints",id:"minclanpoints",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"minClanLevel",id:"minclanlevel",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"warFrequency",id:"warfrequency",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"locationId",id:"locationid",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"labelIds",id:"labelids",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"limit",id:"limit",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"after",id:"after",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"before",id:"before",level:3},{value:"Defined in",id:"defined-in-10",level:4}],c={toc:o},d="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Clan search options for a request."),(0,l.kt)("p",null,"If name is used as part of search query, it needs to be at least three characters long.\nName search parameter is interpreted as wild card search, so it may appear anywhere in the clan name."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"name"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Search clans by name."),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L145"},"types/lib.ts:145")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minmembers"},"minMembers"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"minMembers"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Filter by minimum number of clan members."),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L148"},"types/lib.ts:148")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxmembers"},"maxMembers"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"maxMembers"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Filter by maximum number of clan members."),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L151"},"types/lib.ts:151")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minclanpoints"},"minClanPoints"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"minClanPoints"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Filter by minimum amount of clan points."),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L154"},"types/lib.ts:154")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minclanlevel"},"minClanLevel"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"minClanLevel"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Filter by minimum clan level."),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L157"},"types/lib.ts:157")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"warfrequency"},"warFrequency"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"warFrequency"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Filter by clan war frequency."),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L160"},"types/lib.ts:160")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"locationid"},"locationId"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"locationId"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Filter by clan location identifier. For list of available locations, refer to getLocations operation."),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L163"},"types/lib.ts:163")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"labelids"},"labelIds"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"labelIds"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Comma separated list of label IDs to use for filtering results."),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L166"},"types/lib.ts:166")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"limit"},"limit"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"limit"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Limit the number of items returned in the response."),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L169"},"types/lib.ts:169")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"after"},"after"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"after"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Return only items that occur after this marker.\nBefore marker can be found from the response, inside the 'paging' property.\nNote that only after or before can be specified for a request, not both."),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L176"},"types/lib.ts:176")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"before"},"before"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"before"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Return only items that occur before this marker.\nBefore marker can be found from the response, inside the 'paging' property.\nNote that only after or before can be specified for a request, not both."),(0,l.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/clashperk/clashofclans.js/blob/81e56e1/src/types/lib.ts#L183"},"types/lib.ts:183")))}m.isMDXComponent=!0}}]);