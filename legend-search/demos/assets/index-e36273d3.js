import{gK as f,gL as E,gM as w,gY as g,hB as h,gZ as y,hj as p,g_ as x,gQ as M,gX as T,gT as A,h6 as P,gP as B,gW as I,hi as R}from"./main-95e6e76d.js";import"./preload-helper-388ac9d5.js";const S={en:{"panguard.instructions":"Use two fingers to pan the map"},fr:{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}},D={class:"pg-label"},L=f({__name:"map-panguard",setup(m){const{t:u}=E(),t=w("iApi"),a=g(),i=g(-1),n=h([]),o=h([]);y(()=>{c(),o.push(t.event.on(p.MAP_CREATED,()=>{c()})),o.push(t.event.on(p.MAP_DESTROYED,()=>{n.forEach(e=>e.remove())})),o.push(t.event.on(p.MAP_REFRESH_START,()=>{n.forEach(e=>e.remove())})),o.push(t.event.on(p.MAP_REFRESH_END,()=>{c()}))}),x(()=>{o.forEach(e=>t.event.off(e)),n.forEach(e=>e.remove())});const c=()=>{const e=new Map;t.geo.map.viewPromise.then(()=>{n.push(t.geo.map.esriView.on("pointer-down",s=>{s.pointerType==="touch"&&e.set(s.pointerId,{x:s.x,y:s.y})})),n.push(t.geo.map.esriView.on(["pointer-up","pointer-leave"],s=>{s.pointerType==="touch"&&window.setTimeout(()=>{e.delete(s.pointerId)},200)})),n.push(t.geo.map.esriView.on("pointer-move",s=>{const{pointerId:v,pointerType:_,x:d,y:l}=s,r=e.get(v);if(!r||_!=="touch"||e.size!==1){a.value.classList.remove("pg-active");return}Math.sqrt(Math.pow(d-r.x,2)+Math.pow(l-r.y,2))<20||(a.value.classList.add("pg-active"),i.value!==-1&&clearTimeout(i.value),i.value=window.setTimeout(()=>{a.value.classList.remove("pg-active")},2e3),window.scrollBy(r.x-d,r.y-l))}))})};return(e,s)=>(M(),T("div",{class:"pg",ref_key:"panGuard",ref:a},[A("p",D,P(B(u)("panguard.instructions")),1)],512))}});const N=I(L,[["__scopeId","data-v-f1a5acad"]]);class F extends R{added(){Object.entries(S).forEach(n=>this.$iApi.$i18n.mergeLocaleMessage(...n));const{vNode:u,destroy:t,el:a}=this.mount(N,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this.removed=()=>{t()}}}export{F as default};
