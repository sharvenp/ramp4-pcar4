import{c3 as z,c4 as H,c5 as V,c6 as S,c7 as P,c9 as i,ca as h,cb as T,fo as y,fn as b,ce as D,hH as x,hx as F,ch as d,fp as B,fr as K,fs as U,c8 as L,cg as C,hu as G,hN as Q,hv as Z,hw as J,mx as W,cd as X,fl as Y,gH as A,hT as ee,my as te,ln as oe,ci as _,cj as I,k7 as j,cf as M,mz as ne,ft as q,bZ as se,gM as ae}from"./main-83b7c6ef.js";import"./preload-helper-388ac9d5.js";class N{id;options;componentId;constructor(o){const n={options:{},...o};({id:this.id,options:this.options,componentId:this.componentId}=n)}}const ie=["innerHTML"],E=z({__name:"default-button",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1},overflow:{type:Boolean}},setup(c){const o=c,{t:n}=H(),l=V("iApi"),r=S(()=>l?.panel.get(o.panelId)?.button),s=()=>{o.minimize?l?.panel.toggleMinimize(o.panelId):l?.panel.toggle(o.panelId)};return(e,g)=>{const u=P("appbar-button");return r.value?(i(),h(u,{key:0,onClickFunction:s,tooltip:D(n)(r.value.tooltip),id:c.panelId},{default:T(()=>[y("div",{class:b(["default fill-current w-24 h-24 ml-8 sm:ml-20",{"ml-20":c.overflow}]),innerHTML:r.value.icon},null,10,ie)]),_:1},8,["tooltip","id"])):x("",!0)}}});const re={},le={class:"border-b p-0 self-center w-2/3"};function ce(c,o){return i(),d("span",le)}const O=F(re,[["render",ce],["__scopeId","data-v-207b7a12"]]),pe=c=>(Z("data-v-a11dedb7"),c=c(),J(),c),ue=["content"],de=pe(()=>y("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[y("path",{d:"M0 0h24v24H0z",fill:"none"}),y("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)),fe=[de],ve=["position"],me=z({__name:"more-button",props:{position:{type:String,default:"bottom-right"}},setup(c){const{t:o}=H(),n=B(!1),l=B();return K(()=>{window.addEventListener("click",r=>{r.target instanceof HTMLElement&&!l.value?.contains(r.target)&&(n.value=!1)},{capture:!0})}),U(()=>{window.removeEventListener("click",r=>{r.target instanceof HTMLElement&&!l.value?.contains(r.target)&&(n.value=!1)},{capture:!0})}),(r,s)=>{const e=L("focus-item"),g=L("tippy");return i(),d("div",{class:"appbar-item relative inset-x-0 w-full text-center",ref_key:"el",ref:l},[C((i(),d("button",{type:"button",class:"text-gray-400 w-full h-48 focus:outline-none hover:text-white",onClick:s[0]||(s[0]=u=>n.value=!n.value),content:D(o)("appbar.more")},fe,8,ue)),[[e],[g,{placement:"right"}]]),C(y("div",{onBlur:s[1]||(s[1]=u=>n.value=!1),position:c.position,id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded"},[Q(r.$slots,"default",{},void 0,!0)],40,ve),[[G,n.value]])],512)}}});const _e=F(me,[["__scopeId","data-v-a11dedb7"]]),he=c=>(Z("data-v-830e6165"),c=c(),J(),c),be=he(()=>y("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[y("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),ge={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"},$e=z({__name:"appbar-button",setup(c){const o=W(),{t:n}=H(),l=V("iApi"),r=S(()=>o.notificationNumber),s=()=>{l.panel.toggle("notifications")};return(e,g)=>{const u=P("appbar-button",!0);return i(),h(u,{onClickFunction:s,tooltip:D(n)("notifications.title"),class:"notification-button",id:""},{default:T(()=>[be,r.value&&r.value>0?(i(),d("span",ge,X(r.value),1)):x("",!0)]),_:1},8,["tooltip"])}}});const ye=F($e,[["__scopeId","data-v-830e6165"]]),we=z({__name:"appbar",setup(c){const o=Y(),n=A(),l=S(()=>n.visible),r=S(()=>n.temporary),s=B(!1),e=B({}),g=B();return ee(()=>{const u=q();window.addEventListener("resize",()=>u?.proxy?.$forceUpdate())}),U(()=>{const u=q();window.removeEventListener("resize",()=>u?.proxy?.$forceUpdate())}),te(()=>{oe(()=>{const u=g.value;let f,$=[...u.children],a=$[$.length-2].getBoundingClientRect().top;o.mobileView||(a=u.getBoundingClientRect().bottom-38);let v=u.querySelector("#dropdown");for(let m=$.length-4;m>=0;m--){let w=$[m].getBoundingClientRect().bottom;if(a&&v&&(w>a||s.value&&w+56>a))$[m].classList.forEach(k=>{k.includes("identifier")&&(f=k.slice(11))}),f&&(e.value[f]=!0),s.value||(s.value=!0);else if(w!==0)break}let t=u.querySelector("#more"),p=t.getBoundingClientRect().bottom;if(f=void 0,s.value&&a&&t&&v&&p!==0&&(p<=a-56||v.childElementCount==1&&p<=a)){let m=v.childElementCount,w=0;for(;p<=a-56||m==1;){let k=v.children[w];if(k&&(k.classList.forEach(R=>{R.includes("identifier")&&(f=R.slice(11))}),f&&(e.value[f]=!1),p+=48,m-=1,w+=1),m===0){s.value=!1;break}}}Object.keys(e.value).forEach(m=>{u.querySelector(`.identifier-${m}`)||delete e.value[m]})})}),(u,f)=>{const $=L("focus-list");return C((i(),d("div",{class:"absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",ref_key:"el",ref:g},[(i(!0),d(_,null,I(l.value,(a,v)=>(i(),d(_,null,[(i(!0),d(_,null,I(a,(t,p)=>(i(),d(_,null,[typeof t=="string"&&e.value[`${t}-${p}`]!==!0?(i(),h(E,{key:`${t}-${p}-default`,panelId:t,class:b(["appbar-item h-48",`identifier-${t}-${p}`])},null,8,["panelId","class"])):e.value[`${t}-${p}`]!==!0?(i(),h(j(t.componentId),{key:`${t}-${p}-custom`,options:t.options,class:b(["appbar-item h-48",`identifier-${t}-${p}`]),id:t.id},null,8,["options","id","class"])):x("",!0)],64))),256)),e.value[`divider-${v}`]!==!0?(i(),h(O,{class:b(["appbar-item",`identifier-divider-${v}`]),key:`${a}-${v}-default`},null,8,["class"])):x("",!0)],64))),256)),(i(!0),d(_,null,I(r.value?.filter(a=>e.value[`${a}-temp`]!==!0),a=>(i(),h(E,{panelId:a,minimize:!0,key:`${a}-temp`,class:b([`identifier-${a}-temp`,"appbar-item h-48"])},null,8,["panelId","class"]))),128)),C(M(_e,{id:"more"},{default:T(()=>[(i(!0),d(_,null,I(l.value,(a,v)=>(i(),d(_,{key:v},[(i(!0),d(_,null,I(a,(t,p)=>(i(),d(_,null,[typeof t=="string"&&e.value[`${t}-${p}`]?(i(),h(E,{key:`${t}-${p}-default`,panelId:t,class:b(["text-black hover:bg-gray my-4 h-36",`identifier-${t}-${p}`]),overflow:""},null,8,["panelId","class"])):e.value[`${t}-${p}`]?(i(),h(j(t.componentId),{key:`${t}-${p}-custom`,options:t.options,id:t.id,class:b(["appbar-item h-48",`identifier-${t}-${p}`])},null,8,["options","id","class"])):x("",!0)],64))),256)),e.value[`divider-${v}`]?(i(),h(O,{key:0,class:b(["border-black my-4",`identifier-divider-${v}`])},null,8,["class"])):x("",!0)],64))),128)),(i(!0),d(_,null,I(r.value?.filter(a=>e.value[`${a}-temp`]),a=>(i(),h(E,{panelId:a,minimize:!0,key:`${a}-temp`,class:b([`identifier-${a}-temp`,"text-black hover:bg-gray my-4 h-36"]),overflow:""},null,8,["panelId","class"]))),128))]),_:1},512),[[G,s.value]]),M(ye,{class:"appbar-item bottom-48 h-48 sm:display-none"}),M(ne,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})])),[[$]])}}});class Ie extends se{get config(){return super.config}_parseConfig(o){if(!o)return;const n=A(this.$vApp.$pinia);let l;Array.isArray(o.items[0])?l=o.items:l=[o.items];const r=[];l.forEach(s=>{r.push(s.map(e=>typeof e=="string"?e:new N(e)))}),n.items=r.flat().reduce((s,e)=>(s[e instanceof N?e.id:e]=e,s),{}),n.order=r.map(s=>s.map(e=>e instanceof N?e.id:e)),this._validateItems()}_validateItems(){const o=A(this.$vApp.$pinia);o.order.flat().forEach(n=>{typeof o.items[n]!="string"&&[n].some(l=>{this.$iApi.fixture.get(l)&&!o.items[n]&&(o.items[n].componentId=`${l}-appbar-button`)})})}}const xe={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class Ee extends Ie{initialized(){}async added(){Object.entries(xe).forEach(e=>this.$iApi.$i18n.mergeLocaleMessage(...e));const{destroy:o,el:n}=this.mount(we,{app:this.$element}),l=this.$vApp.$el.getElementsByClassName("inner-shell")[0];l.insertBefore(n.childNodes[0],l.querySelector(".panel-stack")),this._parseConfig(this.config);const r=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e)),s=[];s.push(this.$iApi.event.on(ae.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{const e=A(this.$vApp.$pinia);r(),s.forEach(f=>this.$iApi.event.off(f));const g={...e.items},u=[...e.temporary];Object.keys(g).forEach(f=>e.removeButton(f)),u.forEach(f=>e.removeButton(f)),o(),e.$reset()}}}export{Ee as default};
