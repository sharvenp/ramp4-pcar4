import{c3 as d,jl as a,c4 as p,c5 as u,fp as g,c6 as h,fr as f,gM as v,fs as _,c9 as m,ch as $,fo as S,cd as A,ce as w,hx as b,bZ as y}from"./main-0e79698b.js";import"./preload-helper-388ac9d5.js";const E={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}},x={class:"sg-label"},C=d({__name:"map-scrollguard",setup(i){const e=a(),{t:l}=p(),s=u("iApi"),n=g(),t=h(()=>e.enabled);f(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0}),s.event.on(v.MAP_CREATED,()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0})})}),_(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel",o,{capture:!0})});const o=c=>{if(!t.value)return;const r=n.value.classList;c.ctrlKey?(r.remove("sg-active"),r.add("sg-scrolling")):(c.stopPropagation(),r.remove("sg-scrolling"),r.add("sg-active"),window.setTimeout(()=>r.remove("sg-active"),2e3))};return(c,r)=>(m(),$("div",{class:"sg",ref_key:"scrollGuard",ref:n},[S("p",x,A(w(l)("scrollguard.instructions")),1)],512))}});const L=b(C,[["__scopeId","data-v-f9a0a92d"]]);class B extends y{setEnabled(e){a(this.$vApp.$pinia).enabled=e}_parseConfig(e){a(this.$vApp.$pinia).enabled=e?.enabled||!1}get config(){return super.config}}class M extends B{added(){Object.entries(E).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t)),{destroy:l,el:s}=this.mount(L,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]),this.removed=()=>{e(),l(),a(this.$vApp.$pinia).$reset()}}}export{M as default};
