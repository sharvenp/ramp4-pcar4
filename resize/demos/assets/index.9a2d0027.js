import{g6 as k,g7 as A,g8 as $,g9 as o,ga as v,gb as F,gc as _,gd as h,ge as g,gf as u,gg as E,gh as B,gi as M,gj as N,gk as S,gl as V,gm as D,gn as L,go as b,gp as y,gq as z,gr as C,gs as O,gt as q,gu as R,gv as T}from"./main.33d7d020.js";import"./preload-helper.387dac8f.js";const H=k({name:"DefaultAppbarButtonV",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1},overflow:{type:Boolean}},computed:{panelButton(){return this.$iApi.panel.get(this.panelId)?.button}},methods:{onClickFunction(){this.minimize?this.$iApi.panel.toggleMinimize(this.panelId):this.$iApi.panel.toggle(this.panelId)}}}),j=["innerHTML"];function P(t,e,s,p,a,i){const l=$("appbar-button");return t.panelButton?(o(),v(l,{key:0,onClickFunction:t.onClickFunction,tooltip:t.$t(t.panelButton.tooltip),id:t.panelId},{default:F(()=>[_("div",{class:h(["default fill-current w-24 h-24 ml-8 sm:ml-20",{"ml-20":t.overflow}]),innerHTML:t.panelButton.icon},null,10,j)]),_:1},8,["onClickFunction","tooltip","id"])):g("v-if",!0)}var U=A(H,[["render",P],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/default-button.vue"]]);const G=k({name:"AppbarDividerV"}),J={class:"border-b p-0 self-center w-2/3"};function K(t,e,s,p,a,i){return o(),u("span",J)}var Q=A(G,[["render",K],["__scopeId","data-v-655a8815"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/divider.vue"]]);const W=k({name:"MoreAppbarButtonV",props:{position:{type:String,default:"bottom-right"},tooltip:{type:[String,Boolean],default:!1},tooltipPlacement:{type:String,default:"bottom"}},data(){return{open:!1}},mounted(){window.addEventListener("click",t=>{t.target instanceof HTMLElement&&!this.$el.contains(t.target)&&(this.open=!1)},{capture:!0})}}),X=t=>(S("data-v-18020f26"),t=t(),V(),t),Y={class:"appbar-item relative inset-x-0 w-full text-center"},Z=["content"],tt=X(()=>_("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[_("path",{d:"M0 0h24v24H0z",fill:"none"}),_("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)),et=[tt],ot=["position"];function rt(t,e,s,p,a,i){const l=E("focus-item"),n=E("tippy");return o(),u("div",Y,[B((o(),u("button",{type:"button",class:"text-gray-400 w-full h-48 focus:outline-none hover:text-white",onClick:e[0]||(e[0]=m=>t.open=!t.open),content:t.$t("appbar.more")},et,8,Z)),[[l],[n,{placement:"right"}]]),B(_("div",{onBlur:e[1]||(e[1]=m=>t.open=!1),position:t.position,id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded"},[N(t.$slots,"default",{},void 0,!0)],40,ot),[[M,t.open]])])}var nt=A(W,[["render",rt],["__scopeId","data-v-18020f26"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/more-button.vue"]]);const at=k({name:"NotificationsAppbarButtonV",data(){return{number:this.get("notification/notificationNumber")}},methods:{onClick(){this.$iApi.panel.toggle("notifications")}}}),it=t=>(S("data-v-2ccdb150"),t=t(),V(),t),st=it(()=>_("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[_("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),pt={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"};function lt(t,e,s,p,a,i){const l=$("appbar-button",!0);return o(),v(l,{onClickFunction:t.onClick,tooltip:t.$t("notifications.title"),class:"notification-button",id:""},{default:F(()=>[g(" https://fonts.google.com/icons?selected=Material%20Icons%3Anotifications "),st,t.number&&t.number>0?(o(),u("span",pt,D(t.number),1)):g("v-if",!0)]),_:1},8,["onClickFunction","tooltip"])}var ct=A(at,[["render",lt],["__scopeId","data-v-2ccdb150"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/components/notification-center/appbar-button.vue"]]);const ut=k({name:"AppbarV",components:{"default-button":U,divider:Q,"more-button":nt,"notifications-appbar-button":ct,"about-ramp-dropdown":L},data(){return{items:this.get("appbar/visible"),temporaryItems:this.get("appbar/temporary"),overflow:!1,overflowFlags:{}}},beforeMount(){window.addEventListener("resize",this.$forceUpdate)},beforeUnmount(){window.removeEventListener("resize",this.$forceUpdate)},updated(){this.$nextTick(()=>{const t=this.$refs.el;let e,s=[...t.children],p=s[s.length-2].getBoundingClientRect().top;this.$store.get("panel/mobileView")||(p=t.getBoundingClientRect().bottom-38);let a=t.querySelector("#dropdown");for(let n=s.length-4;n>=0;n--){let m=s[n].getBoundingClientRect().bottom;if(p&&a&&(m>p||this.overflow&&m+56>p))s[n].classList.forEach(d=>{d.includes("identifier")&&(e=d.slice(11))}),e&&(this.overflowFlags[e]=!0),this.overflow||(this.overflow=!0);else if(m!==0)break}let i=t.querySelector("#more"),l=i.getBoundingClientRect().bottom;if(e=void 0,this.overflow&&p&&i&&a&&l!==0&&(l<=p-56||a.childElementCount==1&&l<=p)){let n=a.childElementCount,m=0;for(;l<=p-56||n==1;){let d=a.children[m];if(d&&(d.classList.forEach(I=>{I.includes("identifier")&&(e=I.slice(11))}),e&&(this.overflowFlags[e]=!1),l+=48,n-=1,m+=1),n==0){this.overflow=!1;break}}}Object.keys(this.overflowFlags).forEach(n=>{t.querySelector(`.identifier-${n}`)||delete this.overflowFlags[n]})})}}),dt={class:"absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",ref:"el"};function ft(t,e,s,p,a,i){const l=$("default-button"),n=$("divider"),m=$("more-button"),d=$("notifications-appbar-button"),I=$("about-ramp-dropdown"),x=E("focus-list");return B((o(),u("div",dt,[(o(!0),u(b,null,y(t.items,(c,w)=>(o(),u(b,null,[(o(!0),u(b,null,y(c,(r,f)=>(o(),u(b,null,[typeof r=="string"&&t.overflowFlags[`${r}-${f}`]!==!0?(o(),v(l,{key:`${r}-${f}`,panelId:r,class:h(["appbar-item h-48",`identifier-${r}-${f}`])},null,8,["panelId","class"])):t.overflowFlags[`${r}-${f}`]!==!0?(o(),v(z(r.componentId),{key:`${r}-${f}`,options:r.options,class:h(["appbar-item h-48",`identifier-${r}-${f}`]),id:r.id},null,8,["options","id","class"])):g("v-if",!0)],64))),256)),t.overflowFlags[`divider-${w}`]!==!0?(o(),v(n,{key:0,class:h(["appbar-item",`identifier-divider-${w}`])},null,8,["class"])):g("v-if",!0)],64))),256)),(o(!0),u(b,null,y(t.temporaryItems.filter(c=>t.overflowFlags[`${c}-temp`]!==!0),c=>(o(),v(l,{panelId:c,minimize:!0,key:`${c}-temp`,class:h([`identifier-${c}-temp`,"appbar-item h-48"])},null,8,["panelId","class"]))),128)),B(C(m,{id:"more"},{default:F(()=>[(o(!0),u(b,null,y(t.items,(c,w)=>(o(),u(b,{key:w},[(o(!0),u(b,null,y(c,(r,f)=>(o(),u(b,null,[typeof r=="string"&&t.overflowFlags[`${r}-${f}`]?(o(),v(l,{key:`${r}-${f}`,panelId:r,class:h(["text-black hover:bg-gray my-4 h-36",`identifier-${r}-${f}`]),overflow:""},null,8,["panelId","class"])):t.overflowFlags[`${r}-${f}`]?(o(),v(z(r.componentId),{key:`${r}-${f}`,options:r.options,id:r.id,class:h(["appbar-item h-48",`identifier-${r}-${f}`])},null,8,["options","id","class"])):g("v-if",!0)],64))),256)),t.overflowFlags[`divider-${w}`]?(o(),v(n,{key:0,class:h(["border-black my-4",`identifier-divider-${w}`])},null,8,["class"])):g("v-if",!0)],64))),128)),(o(!0),u(b,null,y(t.temporaryItems.filter(c=>t.overflowFlags[`${c}-temp`]),c=>(o(),v(l,{panelId:c,minimize:!0,key:`${c}-temp`,class:h([`identifier-${c}-temp`,"text-black hover:bg-gray my-4 h-36"]),overflow:""},null,8,["panelId","class"]))),128))]),_:1},512),[[M,t.overflow]]),C(d,{class:"appbar-item bottom-48 h-48 sm:display-none"}),g(" TODO: disabled this button for now, revist this when we need it in the future "),g(' <nav-button id="nav"></nav-button> '),C(I,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})])),[[x]])}var mt=A(ut,[["render",ft],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/appbar.vue"]]);class bt extends O{get config(){return super.config}_parseConfig(e){if(!e)return;let s;Array.isArray(e.items[0])?s=e.items:s=[e.items];const p=[];s.forEach(a=>{p.push(a.map(i=>typeof i=="string"?i:new q(i)))}),this.$vApp.$store.set("appbar/items",p.flat().reduce((a,i)=>(a[i.id||i]=i,a),{})),this.$vApp.$store.set("appbar/order",p.map(a=>a.map(i=>i.id||i))),this._validateItems()}_validateItems(){this.$vApp.$store.get("appbar/order").flat().forEach(e=>{typeof this.$vApp.$store.get(`appbar/items@${e}`)!="string"&&[e].some(s=>{this.$iApi.fixture.get(s)&&!this.$vApp.$store.get(`appbar/items@${e}.componentId`)&&this.$vApp.$store.set(`appbar/items@${e}.componentId`,`${s}-appbar-button`)})})}}var vt={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class $t extends bt{initialized(){}async added(){this.$vApp.$store.registerModule("appbar",R()),Object.entries(vt).forEach(n=>this.$vApp.$i18n.mergeLocaleMessage(...n));const{vNode:e,destroy:s,el:p}=this.mount(mt,{app:this.$element}),a=this.$vApp.$el.getElementsByClassName("inner-shell")[0];a.insertBefore(p.childNodes[0],a.querySelector(".panel-stack")),this._parseConfig(this.config);const i=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),l=[];l.push(this.$iApi.event.on(T.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{i(),l.forEach(d=>this.$iApi.event.off(d));const n={...this.$vApp.$store.get("appbar/items")},m=[...this.$vApp.$store.get("appbar/temporary")];Object.keys(n).forEach(d=>this.$iApi.$vApp.$store.dispatch("appbar/removeButton",d)),m.forEach(d=>this.$iApi.$vApp.$store.dispatch("appbar/removeButton",d)),this.$vApp.$store.unregisterModule("appbar"),s()}}}export{$t as default};
