import{gK as M,gL as T,gM as q,gN as C,gO as P,gP as h,gQ as i,gR as g,gS as D,gT as w,gU as b,gV as x,gW as F,gX as d,gY as E,gZ as W,g_ as U,g$ as R,h0 as A,h1 as G,h2 as X,h3 as K,h4 as Q,h5 as Y,h6 as Z,h7 as J,h8 as z,h9 as ee,ha as te,hb as oe,hc as _,hd as k,he as O,hf as L,hg as ne,hh as V,hi as se,hj as ae}from"./main-603bdb2f.js";import"./preload-helper-388ac9d5.js";class N{id;options;componentId;constructor(o){const n={options:{},...o};({id:this.id,options:this.options,componentId:this.componentId}=n)}}const ie=["innerHTML"],S=M({__name:"default-button",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1},overflow:{type:Boolean}},setup(c){const o=c,{t:n}=T(),l=q("iApi"),r=C(()=>l?.panel.get(o.panelId)?.button),s=()=>{o.minimize?l?.panel.toggleMinimize(o.panelId):l?.panel.toggle(o.panelId)};return(e,$)=>{const u=P("appbar-button");return h(r)?(i(),g(u,{key:0,onClickFunction:s,tooltip:h(n)(h(r).tooltip),id:c.panelId},{default:D(()=>[w("div",{class:b(["default fill-current w-24 h-24 ml-8 sm:ml-20",{"ml-20":c.overflow}]),innerHTML:h(r).icon},null,10,ie)]),_:1},8,["tooltip","id"])):x("",!0)}}});const re={},le={class:"border-b p-0 self-center w-2/3"};function ce(c,o){return i(),d("span",le)}const j=F(re,[["render",ce],["__scopeId","data-v-207b7a12"]]),pe=c=>(K("data-v-a11dedb7"),c=c(),Q(),c),ue=["content"],de=pe(()=>w("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[w("path",{d:"M0 0h24v24H0z",fill:"none"}),w("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)),fe=[de],me=["position"],he=M({__name:"more-button",props:{position:{type:String,default:"bottom-right"}},setup(c){const{t:o}=T(),n=E(!1),l=E();return W(()=>{window.addEventListener("click",r=>{r.target instanceof HTMLElement&&!l.value?.contains(r.target)&&(n.value=!1)},{capture:!0})}),U(()=>{window.removeEventListener("click",r=>{r.target instanceof HTMLElement&&!l.value?.contains(r.target)&&(n.value=!1)},{capture:!0})}),(r,s)=>{const e=R("focus-item"),$=R("tippy");return i(),d("div",{class:"appbar-item relative inset-x-0 w-full text-center",ref_key:"el",ref:l},[A((i(),d("button",{type:"button",class:"text-gray-400 w-full h-48 focus:outline-none hover:text-white",onClick:s[0]||(s[0]=u=>n.value=!n.value),content:h(o)("appbar.more")},fe,8,ue)),[[e],[$,{placement:"right"}]]),A(w("div",{onBlur:s[1]||(s[1]=u=>n.value=!1),position:c.position,id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded"},[X(r.$slots,"default",{},void 0,!0)],40,me),[[G,n.value]])],512)}}});const ve=F(he,[["__scopeId","data-v-a11dedb7"]]),_e=c=>(K("data-v-830e6165"),c=c(),Q(),c),ge=_e(()=>w("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[w("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),be={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"},$e=M({__name:"appbar-button",setup(c){const o=Y(),{t:n}=T(),l=q("iApi"),r=C(()=>o.notificationNumber),s=()=>{l.panel.toggle("notifications")};return(e,$)=>{const u=P("appbar-button",!0);return i(),g(u,{onClickFunction:s,tooltip:h(n)("notifications.title"),class:"notification-button",id:""},{default:D(()=>[ge,h(r)&&h(r)>0?(i(),d("span",be,Z(h(r)),1)):x("",!0)]),_:1},8,["tooltip"])}}});const ye=F($e,[["__scopeId","data-v-830e6165"]]),we=M({__name:"appbar",setup(c){const o=J(),n=z(),l=C(()=>n.visible),r=C(()=>n.temporary),s=E(!1),e=E({}),$=E();return ee(()=>{const u=V();window.addEventListener("resize",()=>u?.proxy?.$forceUpdate())}),U(()=>{const u=V();window.removeEventListener("resize",()=>u?.proxy?.$forceUpdate())}),te(()=>{oe(()=>{const u=$.value;let f,y=[...u.children],a=y[y.length-2].getBoundingClientRect().top;o.mobileView||(a=u.getBoundingClientRect().bottom-38);let m=u.querySelector("#dropdown");for(let v=y.length-4;v>=0;v--){let I=y[v].getBoundingClientRect().bottom;if(a&&m&&(I>a||s.value&&I+56>a))y[v].classList.forEach(B=>{B.includes("identifier")&&(f=B.slice(11))}),f&&(e.value[f]=!0),s.value||(s.value=!0);else if(I!==0)break}let t=u.querySelector("#more"),p=t.getBoundingClientRect().bottom;if(f=void 0,s.value&&a&&t&&m&&p!==0&&(p<=a-56||m.childElementCount==1&&p<=a)){let v=m.childElementCount,I=0;for(;p<=a-56||v==1;){let B=m.children[I];if(B&&(B.classList.forEach(H=>{H.includes("identifier")&&(f=H.slice(11))}),f&&(e.value[f]=!1),p+=48,v-=1,I+=1),v===0){s.value=!1;break}}}Object.keys(e.value).forEach(v=>{u.querySelector(`.identifier-${v}`)||delete e.value[v]})})}),(u,f)=>{const y=R("focus-list");return A((i(),d("div",{class:"absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",ref_key:"el",ref:$},[(i(!0),d(_,null,k(h(l),(a,m)=>(i(),d(_,null,[(i(!0),d(_,null,k(a,(t,p)=>(i(),d(_,null,[typeof t=="string"&&e.value[`${t}-${p}`]!==!0?(i(),g(S,{key:`${t}-${p}-default`,panelId:t,class:b(["appbar-item h-48",`identifier-${t}-${p}`])},null,8,["panelId","class"])):e.value[`${t}-${p}`]!==!0?(i(),g(O(t.componentId),{key:`${t}-${p}-custom`,options:t.options,class:b(["appbar-item h-48",`identifier-${t}-${p}`]),id:t.id},null,8,["options","id","class"])):x("",!0)],64))),256)),e.value[`divider-${m}`]!==!0?(i(),g(j,{class:b(["appbar-item",`identifier-divider-${m}`]),key:`${a}-${m}-default`},null,8,["class"])):x("",!0)],64))),256)),(i(!0),d(_,null,k(h(r)?.filter(a=>e.value[`${a}-temp`]!==!0),a=>(i(),g(S,{panelId:a,minimize:!0,key:`${a}-temp`,class:b([`identifier-${a}-temp`,"appbar-item h-48"])},null,8,["panelId","class"]))),128)),A(L(ve,{id:"more"},{default:D(()=>[(i(!0),d(_,null,k(h(l),(a,m)=>(i(),d(_,{key:m},[(i(!0),d(_,null,k(a,(t,p)=>(i(),d(_,null,[typeof t=="string"&&e.value[`${t}-${p}`]?(i(),g(S,{key:`${t}-${p}-default`,panelId:t,class:b(["text-black hover:bg-gray my-4 h-36",`identifier-${t}-${p}`]),overflow:""},null,8,["panelId","class"])):e.value[`${t}-${p}`]?(i(),g(O(t.componentId),{key:`${t}-${p}-custom`,options:t.options,id:t.id,class:b(["appbar-item h-48",`identifier-${t}-${p}`])},null,8,["options","id","class"])):x("",!0)],64))),256)),e.value[`divider-${m}`]?(i(),g(j,{key:0,class:b(["border-black my-4",`identifier-divider-${m}`])},null,8,["class"])):x("",!0)],64))),128)),(i(!0),d(_,null,k(h(r)?.filter(a=>e.value[`${a}-temp`]),a=>(i(),g(S,{panelId:a,minimize:!0,key:`${a}-temp`,class:b([`identifier-${a}-temp`,"text-black hover:bg-gray my-4 h-36"]),overflow:""},null,8,["panelId","class"]))),128))]),_:1},512),[[G,s.value]]),L(ye,{class:"appbar-item bottom-48 h-48 sm:display-none"}),L(ne,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})])),[[y]])}}});class Ie extends se{get config(){return super.config}_parseConfig(o){if(!o)return;const n=z(this.$vApp.$pinia);let l;Array.isArray(o.items[0])?l=o.items:l=[o.items];const r=[];l.forEach(s=>{r.push(s.map(e=>typeof e=="string"?e:new N(e)))}),n.items=r.flat().reduce((s,e)=>(s[e instanceof N?e.id:e]=e,s),{}),n.order=r.map(s=>s.map(e=>e instanceof N?e.id:e)),this._validateItems()}_validateItems(){const o=z(this.$vApp.$pinia);o.order.flat().forEach(n=>{typeof o.items[n]!="string"&&[n].some(l=>{this.$iApi.fixture.get(l)&&!o.items[n]&&(o.items[n].componentId=`${l}-appbar-button`)})})}}const ke={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class Ee extends Ie{initialized(){}async added(){Object.entries(ke).forEach(e=>this.$iApi.$i18n.mergeLocaleMessage(...e));const{destroy:o,el:n}=this.mount(we,{app:this.$element}),l=this.$vApp.$el.getElementsByClassName("inner-shell")[0];l.insertBefore(n.childNodes[0],l.querySelector(".panel-stack")),this._parseConfig(this.config);const r=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e)),s=[];s.push(this.$iApi.event.on(ae.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{const e=z(this.$vApp.$pinia);r(),s.forEach(f=>this.$iApi.event.off(f));const $={...e.items},u=[...e.temporary];Object.keys($).forEach(f=>e.removeButton(f)),u.forEach(f=>e.removeButton(f)),o(),e.$reset()}}}export{Ee as default};