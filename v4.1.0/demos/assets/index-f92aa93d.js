import{gK as M,gL as T,gM as D,gN as A,gO as q,gP as v,gQ as s,gR as $,gS as F,gT as w,gU as y,gV as k,gW as H,gX as f,gY as S,gZ as W,g_ as U,g$ as R,h0 as C,h1 as G,h2 as X,h3 as K,h4 as Q,h5 as Y,h6 as Z,h7 as J,h8 as z,h9 as ee,ha as te,hb as oe,hc as b,hd as x,he as P,hf as N,hg as ne,hh as V,hi as se,hj as ae}from"./main-e6c796d9.js";import"./preload-helper-388ac9d5.js";class L{id;options;componentId;constructor(a){const o={options:{},...a};({id:this.id,options:this.options,componentId:this.componentId}=o)}}const ie=["innerHTML"],E=M({__name:"default-button",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1},overflow:{type:Boolean}},setup(c){const a=c,{t:o}=T(),l=D("iApi"),n=A(()=>l?.panel.get(a.panelId)?.button),i=()=>{a.minimize?l?.panel.toggleMinimize(a.panelId):l?.panel.toggle(a.panelId)};return(e,d)=>{const u=q("appbar-button");return v(n)?(s(),$(u,{key:0,onClickFunction:i,tooltip:v(o)(v(n).tooltip),id:c.panelId},{default:F(()=>[w("div",{class:y(["default fill-current w-24 h-24 ml-8 sm:ml-20",{"ml-20":c.overflow}]),innerHTML:v(n).icon},null,10,ie)]),_:1},8,["tooltip","id"])):k("",!0)}}});const re={},le={class:"border-b p-0 self-center w-2/3"};function ce(c,a){return s(),f("span",le)}const j=H(re,[["render",ce],["__scopeId","data-v-207b7a12"]]),pe=c=>(K("data-v-b7500242"),c=c(),Q(),c),ue=["content"],de=pe(()=>w("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[w("path",{d:"M0 0h24v24H0z",fill:"none"}),w("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)),fe=[de],me=["position"],ve=M({__name:"more-button",props:{position:{type:String,default:"bottom-right"},tooltip:{type:[String,Boolean],default:!1},tooltipPlacement:{type:String,default:"bottom"}},setup(c){const{t:a}=T(),o=S(!1),l=S();return W(()=>{window.addEventListener("click",n=>{n.target instanceof HTMLElement&&!l.value?.contains(n.target)&&(o.value=!1)},{capture:!0})}),U(()=>{window.removeEventListener("click",n=>{n.target instanceof HTMLElement&&!l.value?.contains(n.target)&&(o.value=!1)},{capture:!0})}),(n,i)=>{const e=R("focus-item"),d=R("tippy");return s(),f("div",{class:"appbar-item relative inset-x-0 w-full text-center",ref_key:"el",ref:l},[C((s(),f("button",{type:"button",class:"text-gray-400 w-full h-48 focus:outline-none hover:text-white",onClick:i[0]||(i[0]=u=>o.value=!o.value),content:v(a)("appbar.more")},fe,8,ue)),[[e],[d,{placement:"right"}]]),C(w("div",{onBlur:i[1]||(i[1]=u=>o.value=!1),position:c.position,id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded"},[X(n.$slots,"default",{},void 0,!0)],40,me),[[G,o.value]])],512)}}});const he=H(ve,[["__scopeId","data-v-b7500242"]]),_e=c=>(K("data-v-830e6165"),c=c(),Q(),c),ge=_e(()=>w("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[w("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),be={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"},$e=M({__name:"appbar-button",setup(c){const a=Y(),{t:o}=T(),l=D("iApi"),n=A(()=>a.notificationNumber),i=()=>{l.panel.toggle("notifications")};return(e,d)=>{const u=q("appbar-button",!0);return s(),$(u,{onClickFunction:i,tooltip:v(o)("notifications.title"),class:"notification-button",id:""},{default:F(()=>[ge,v(n)&&v(n)>0?(s(),f("span",be,Z(v(n)),1)):k("",!0)]),_:1},8,["tooltip"])}}});const ye=H($e,[["__scopeId","data-v-830e6165"]]),we=M({__name:"appbar",setup(c){D("iApi");const a=J(),o=z(),l=A(()=>o.visible),n=A(()=>o.temporary),i=S(!1),e=S({}),d=S();return ee(()=>{const u=V();window.addEventListener("resize",()=>u?.proxy?.$forceUpdate())}),U(()=>{const u=V();window.removeEventListener("resize",()=>u?.proxy?.$forceUpdate())}),te(()=>{oe(()=>{const u=d.value;let g,m=[...u.children],r=m[m.length-2].getBoundingClientRect().top;a.mobileView||(r=u.getBoundingClientRect().bottom-38);let h=u.querySelector("#dropdown");for(let _=m.length-4;_>=0;_--){let I=m[_].getBoundingClientRect().bottom;if(r&&h&&(I>r||i.value&&I+56>r))m[_].classList.forEach(B=>{B.includes("identifier")&&(g=B.slice(11))}),g&&(e.value[g]=!0),i.value||(i.value=!0);else if(I!==0)break}let t=u.querySelector("#more"),p=t.getBoundingClientRect().bottom;if(g=void 0,i.value&&r&&t&&h&&p!==0&&(p<=r-56||h.childElementCount==1&&p<=r)){let _=h.childElementCount,I=0;for(;p<=r-56||_==1;){let B=h.children[I];if(B&&(B.classList.forEach(O=>{O.includes("identifier")&&(g=O.slice(11))}),g&&(e.value[g]=!1),p+=48,_-=1,I+=1),_===0){i.value=!1;break}}}Object.keys(e.value).forEach(_=>{u.querySelector(`.identifier-${_}`)||delete e.value[_]})})}),(u,g)=>{const m=R("focus-list");return C((s(),f("div",{class:"absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",ref_key:"el",ref:d},[(s(!0),f(b,null,x(v(l),(r,h)=>(s(),f(b,null,[(s(!0),f(b,null,x(r,(t,p)=>(s(),f(b,null,[typeof t=="string"&&e.value[`${t}-${p}`]!==!0?(s(),$(E,{key:`${t}-${p}-default`,panelId:t,class:y(["appbar-item h-48",`identifier-${t}-${p}`])},null,8,["panelId","class"])):e.value[`${t}-${p}`]!==!0?(s(),$(P(t.componentId),{key:`${t}-${p}-custom`,options:t.options,class:y(["appbar-item h-48",`identifier-${t}-${p}`]),id:t.id},null,8,["options","id","class"])):k("",!0)],64))),256)),e.value[`divider-${h}`]!==!0?(s(),$(j,{key:0,class:y(["appbar-item",`identifier-divider-${h}`])},null,8,["class"])):k("",!0)],64))),256)),(s(!0),f(b,null,x(v(n)?.filter(r=>e.value[`${r}-temp`]!==!0),r=>(s(),$(E,{panelId:r,minimize:!0,key:`${r}-temp`,class:y([`identifier-${r}-temp`,"appbar-item h-48"])},null,8,["panelId","class"]))),128)),C(N(he,{id:"more"},{default:F(()=>[(s(!0),f(b,null,x(v(l),(r,h)=>(s(),f(b,{key:h},[(s(!0),f(b,null,x(r,(t,p)=>(s(),f(b,null,[typeof t=="string"&&e.value[`${t}-${p}`]?(s(),$(E,{key:`${t}-${p}-default`,panelId:t,class:y(["text-black hover:bg-gray my-4 h-36",`identifier-${t}-${p}`]),overflow:""},null,8,["panelId","class"])):e.value[`${t}-${p}`]?(s(),$(P(t.componentId),{key:`${t}-${p}-custom`,options:t.options,id:t.id,class:y(["appbar-item h-48",`identifier-${t}-${p}`])},null,8,["options","id","class"])):k("",!0)],64))),256)),e.value[`divider-${h}`]?(s(),$(j,{key:0,class:y(["border-black my-4",`identifier-divider-${h}`])},null,8,["class"])):k("",!0)],64))),128)),(s(!0),f(b,null,x(v(n)?.filter(r=>e.value[`${r}-temp`]),r=>(s(),$(E,{panelId:r,minimize:!0,key:`${r}-temp`,class:y([`identifier-${r}-temp`,"text-black hover:bg-gray my-4 h-36"]),overflow:""},null,8,["panelId","class"]))),128))]),_:1},512),[[G,i.value]]),N(ye,{class:"appbar-item bottom-48 h-48 sm:display-none"}),N(ne,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})])),[[m]])}}});class Ie extends se{get config(){return super.config}_parseConfig(a){if(!a)return;const o=z(this.$vApp.$pinia);let l;Array.isArray(a.items[0])?l=a.items:l=[a.items];const n=[];l.forEach(i=>{n.push(i.map(e=>typeof e=="string"?e:new L(e)))}),o.items=n.flat().reduce((i,e)=>(i[e instanceof L?e.id:e]=e,i),{}),o.order=n.map(i=>i.map(e=>e instanceof L?e.id:e)),this._validateItems()}_validateItems(){const a=z(this.$vApp.$pinia);a.order.flat().forEach(o=>{typeof a.items[o]!="string"&&[o].some(l=>{this.$iApi.fixture.get(l)&&!a.items[o]&&(a.items[o].componentId=`${l}-appbar-button`)})})}}const xe={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class Se extends Ie{initialized(){}async added(){Object.entries(xe).forEach(d=>this.$iApi.$i18n.mergeLocaleMessage(...d));const{vNode:a,destroy:o,el:l}=this.mount(we,{app:this.$element}),n=this.$vApp.$el.getElementsByClassName("inner-shell")[0];n.insertBefore(l.childNodes[0],n.querySelector(".panel-stack")),this._parseConfig(this.config);const i=this.$vApp.$watch(()=>this.config,d=>this._parseConfig(d)),e=[];e.push(this.$iApi.event.on(ae.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{const d=z(this.$vApp.$pinia);i(),e.forEach(m=>this.$iApi.event.off(m));const u={...d.items},g=[...d.temporary];Object.keys(u).forEach(m=>d.removeButton(m)),g.forEach(m=>d.removeButton(m)),o(),d.$reset()}}}export{Se as default};