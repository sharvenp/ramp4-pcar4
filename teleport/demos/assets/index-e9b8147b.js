import{gK as o,gL as i,gM as l,gO as r,gQ as m,gR as c,gS as b,gP as g,gT as a,hi as h,hl as v,h8 as u,hq as d}from"./main-bbf05f59.js";import{_ as f}from"./screen.vue_vue_type_script_setup_true_lang-c2210c67.js";import"./preload-helper-388ac9d5.js";const _=a("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"})],-1),w=o({__name:"nav-button",setup(t){const{t:e}=i(),s=l("iApi"),n=()=>s?.panel.toggle("basemap");return(A,$)=>{const p=r("mapnav-button");return m(),c(p,{onClickFunction:n,tooltip:g(e)("basemap.title")},{default:b(()=>[_]),_:1},8,["tooltip"])}}}),x={en:{"basemap.select":"Select basemap","basemap.title":"Basemap"},fr:{"basemap.select":"Sélectionner la carte de base","basemap.title":"Carte de base"}};class M extends h{added(){this.$iApi.component("basemap-nav-button",w),this.$iApi.panel.register({id:"basemap",config:{screens:{"basemap-component":v(f)},button:{tooltip:"basemap.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"basemap.title"}},{i18n:{messages:x}}),this.handlePanelTeleports(["basemap"])}removed(){this.$iApi.fixture.get("appbar")&&u(this.$vApp.$pinia).removeButton("basemap"),this.$iApi.fixture.get("mapnav")&&d(this.$vApp.$pinia).removeItem("basemap"),this.$iApi.panel.remove("basemap")}}export{M as default};
