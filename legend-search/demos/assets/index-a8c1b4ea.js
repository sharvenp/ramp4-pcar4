import{gK as d,im as l,gL as p,gM as u,gY as g,gN as h,gZ as v,hj as _,g_ as m,gQ as f,gX as $,gT as S,h6 as A,gP as w,gW as y,hi as E}from"./main-95e6e76d.js";import"./preload-helper-388ac9d5.js";const b={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}},C={class:"sg-label"},x=d({__name:"map-scrollguard",setup(o){const s=l(),{t:i}=p(),t=u("iApi"),a=g(),c=h(()=>s.enabled);v(()=>{t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",e,{capture:!0}),t.event.on(_.MAP_CREATED,()=>{t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",e,{capture:!0})})}),m(()=>{t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel",e,{capture:!0})});const e=n=>{if(!c.value)return;const r=a.value.classList;n.ctrlKey?(r.remove("sg-active"),r.add("sg-scrolling")):(n.stopPropagation(),r.remove("sg-scrolling"),r.add("sg-active"),window.setTimeout(()=>r.remove("sg-active"),2e3))};return(n,r)=>(f(),$("div",{class:"sg",ref_key:"scrollGuard",ref:a},[S("p",C,A(w(i)("scrollguard.instructions")),1)],512))}});const L=y(x,[["__scopeId","data-v-f9a0a92d"]]);class B extends E{setEnabled(s){l(this.$vApp.$pinia).enabled=s}_parseConfig(s){l(this.$vApp.$pinia).enabled=s?.enabled||!1}get config(){return super.config}}class I extends B{added(){Object.entries(b).forEach(e=>this.$iApi.$i18n.mergeLocaleMessage(...e)),this._parseConfig(this.config);const s=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e)),{vNode:i,destroy:t,el:a}=this.mount(L,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this.removed=()=>{s(),t(),l(this.$vApp.$pinia).$reset()}}}export{I as default};
