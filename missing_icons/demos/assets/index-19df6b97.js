import{gK as d,im as a,gL as p,gM as u,gY as g,gN as h,gZ as v,hj as _,g_ as m,gQ as f,gX as $,gT as S,h6 as A,gP as w,gW as y,hi as E}from"./main-7ed7b27d.js";import"./preload-helper-388ac9d5.js";const b={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}},C={class:"sg-label"},x=d({__name:"map-scrollguard",setup(c){const e=a(),{t:l}=p(),s=u("iApi"),n=g(),t=h(()=>e.enabled);v(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0}),s.event.on(_.MAP_CREATED,()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0})})}),m(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel",o,{capture:!0})});const o=i=>{if(!t.value)return;const r=n.value.classList;i.ctrlKey?(r.remove("sg-active"),r.add("sg-scrolling")):(i.stopPropagation(),r.remove("sg-scrolling"),r.add("sg-active"),window.setTimeout(()=>r.remove("sg-active"),2e3))};return(i,r)=>(f(),$("div",{class:"sg",ref_key:"scrollGuard",ref:n},[S("p",C,A(w(l)("scrollguard.instructions")),1)],512))}});const L=y(x,[["__scopeId","data-v-f9a0a92d"]]);class B extends E{setEnabled(e){a(this.$vApp.$pinia).enabled=e}_parseConfig(e){a(this.$vApp.$pinia).enabled=e?.enabled||!1}get config(){return super.config}}class M extends B{added(){Object.entries(b).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t)),{destroy:l,el:s}=this.mount(L,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]),this.removed=()=>{e(),l(),a(this.$vApp.$pinia).$reset()}}}export{M as default};
