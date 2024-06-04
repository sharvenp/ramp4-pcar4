import{gK as w,gL as C,h7 as z,hG as y,gN as m,gO as $,g$ as B,h0 as M,gQ as p,gR as k,gS as u,gX as x,hd as O,gU as _,gT as t,h6 as g,gP as o,hc as T,gM as j,gY as S,hh as V,hH as E,gZ as N,g_ as q,hp as D,hf as P}from"./main-603bdb2f.js";const A=t("div",{class:"flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8"},[t("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[t("g",null,[t("path",{d:"M0,0h24v24H0V0z",fill:"none"}),t("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])],-1),H=["onClick","aria-label"],I={class:"md-icon-small inline"},R=t("g",null,[t("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1),U=[R],F=w({__name:"settings-button",props:{componentSelectedState:{type:Object,required:!0}},emits:["onComponentToggle"],setup(v,{emit:n}){const{t:d}=C(),h=z(),s=y(),r=m(()=>h.mobileView?"top-end":"left-end"),c=a=>{a.selectable&&(s.toggleSelected({name:a.name}),n("onComponentToggle"))};return(a,f)=>{const i=$("dropdown-menu"),l=B("focus-item");return M((p(),k(i,{position:o(r),tooltip:o(d)("export.menu"),"tooltip-placement":"top"},{header:u(()=>[A]),default:u(()=>[(p(!0),x(T,null,O(v.componentSelectedState,e=>(p(),x("a",{key:e.name,onClick:b=>c(e),href:"javascript:;",class:_(`text-left text-sm sm:text-base ${e.selectable?"cursor-pointer":"cursor-default"}`),"aria-label":e.name},[t("div",I,[(p(),x("svg",{height:"20",width:"20",viewBox:"0 0 24 24",class:_(`inline mx-8 ${e.selected?"":"invisible"}`)},U,2)),t("span",{class:_(`inline ${e.selectable?"":"text-gray-300"}
                    `)},g(o(d)(`export.menu.component.${e.name}`)),3)])],10,H))),128))]),_:1},8,["position","tooltip"])),[[l]])}}}),G=t("div",{class:"overflow-hidden border border-gray-200"},[t("canvas",{class:"export-canvas"})],-1),K={class:"flex"},Q=["aria-label"],W=["aria-label"],Y=w({__name:"screen",props:{panel:{type:Object,required:!0}},setup(v){const{t:n}=C(),d=j("iApi"),h=y(),s=S(),r=S(void 0),c=m(()=>V()?.proxy?.$el),a=m(()=>h.componentSelectedState),f=m(()=>{let l={};return s.value&&Object.keys(a.value).forEach(e=>{l[e]={name:e,selected:a.value[e]??!1,selectable:(s.value?.config)[e]?.selectable??!0}}),l}),i=E(300,()=>{if(!s.value)return;const l=c.value.querySelector(".export-canvas");s.value.make(l,c.value.clientWidth-16)});return N(()=>{s.value=d.fixture.get("export"),r.value=new ResizeObserver(()=>{i()}),r.value.observe(c.value)}),q(()=>{r.value.disconnect()}),(l,e)=>{const b=$("panel-screen");return p(),k(b,{panel:v.panel,footer:!0},{header:u(()=>[D(g(o(n)("export.title")),1)]),content:u(()=>[G]),footer:u(()=>[t("div",K,[t("button",{type:"button",onClick:e[0]||(e[0]=L=>s.value?.export()),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-8 sm:px-16 mr-8 sm:mr-16","aria-label":o(n)("export.download")},g(o(n)("export.download")),9,Q),t("button",{type:"button",onClick:e[1]||(e[1]=L=>o(i)()),class:"py-8 px-4 sm:px-16","aria-label":o(n)("export.refresh")},g(o(n)("export.refresh")),9,W),P(F,{componentSelectedState:o(f),onComponentToggle:o(i)(),class:"ml-auto flex px-4 sm:px-8"},null,8,["componentSelectedState","onComponentToggle"])])]),_:1},8,["panel"])}}});export{Y as _};
