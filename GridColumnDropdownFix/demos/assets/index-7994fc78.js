import{gW as f,gQ as a,gX as p,gK as w,gL as I,gM as x,ia as u,gO as z,hf as v,gS as d,gP as l,gT as i,hq as h,gN as C,g$ as S,h0 as y,hc as _,hd as A,gR as g,he as k,gV as M,h3 as O,h4 as N,hi as V,hj as F}from"./main-603bdb2f.js";import"./preload-helper-388ac9d5.js";const B={},E={class:"border-b p-0 self-center w-2/3"};function D(s,o){return a(),p("span",E)}const $=f(B,[["render",D]]),H=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1),P=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13H5v-2h14v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1),j=w({__name:"zoom-nav",setup(s){const{t:o}=I(),e=x("iApi"),t=u(400,!0,()=>e.geo.map.zoomIn()),r=u(400,!0,()=>e.geo.map.zoomOut());return(m,n)=>{const c=z("mapnav-button");return a(),p("div",null,[v(c,{onClickFunction:l(t),tooltip:l(o)("mapnav.zoomIn")},{default:d(()=>[H]),_:1},8,["onClickFunction","tooltip"]),v($),v(c,{onClickFunction:l(r),tooltip:l(o)("mapnav.zoomOut")},{default:d(()=>[P]),_:1},8,["onClickFunction","tooltip"])])}}}),L=s=>(O("data-v-70c3f04e"),s=s(),N(),s),Z={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},T={class:"flex flex-col"},q=L(()=>i("span",{class:"py-1"},null,-1)),Y={class:"mapnav-section bg-white-75 hover:bg-white"},G=w({__name:"mapnav",setup(s){const o=h(),e=C(()=>o.order.map(t=>o.items[t]).filter(t=>t.componentId));return(t,r)=>{const m=S("focus-list");return a(),p("div",Z,[y((a(),p("div",T,[v(j,{class:"mapnav-section bg-white-75 hover:bg-white"}),q,i("div",Y,[(a(!0),p(_,null,A(l(e),(n,c)=>(a(),p(_,{key:n.id+"button"},[(a(),g(k(n.id+"-nav-button"))),c!==l(e).length-1?(a(),g($,{key:0,class:"mapnav-divider"})):M("",!0)],64))),128))])])),[[m]])])}}});const K=f(G,[["__scopeId","data-v-70c3f04e"]]);class Q extends V{mapnavStore=h(this.$vApp.$pinia);get config(){return super.config}_parseConfig(o){if(!o)return;const e=o.items.map(t=>({id:t}));this.mapnavStore.items=e.reduce((t,r)=>(t[r.id]=r,t),{}),this.mapnavStore.order=e.map(t=>t.id),this._validateItems()}_validateItems(){const o=["geolocator","zoom","home","fullscreen"];this.mapnavStore.order.forEach(e=>{(this.$iApi.fixture.get(e)||o.includes(e))&&(this.mapnavStore.items[e].componentId=`${e}-nav-button`)})}}const R={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen","mapnav.geolocator":"Your Location","mapnav.geolocator.error.permission":"The location request was denied. Please check your browser permission settings.","mapnav.geolocator.error.internal":"Your location could not be found."},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arrière","mapnav.home":"Accueil","mapnav.fullscreen":"Plein Écran","mapnav.geolocator":"Votre position","mapnav.geolocator.error.permission":"Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.","mapnav.geolocator.error.internal":"Votre emplacement n'a pu être trouvé."}};class J extends Q{async added(){Object.entries(R).forEach(n=>this.$iApi.$i18n.mergeLocaleMessage(...n));const{destroy:o,el:e}=this.mount(K,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]),this._parseConfig(this.config);const r=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),m=this.$iApi.event.on(F.COMPONENT,()=>{this._parseConfig(this.config)});this.removed=()=>{r(),this.$iApi.event.off(m);const n=h(this.$vApp.$pinia),c={...n.items};Object.keys(c).forEach(b=>n.removeItem(b)),n.$reset(),o()}}}export{J as default};
