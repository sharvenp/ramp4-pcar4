import{gK as n,gM as h,gY as r,gZ as c,hj as i,g_ as d,gQ as p,gX as u,gU as v,h3 as _,h4 as f,gT as t,gW as g,hi as m}from"./main-917dc16a.js";import"./preload-helper-388ac9d5.js";const w=o=>(_("data-v-ab5a0be4"),o=o(),f(),o),M=w(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},[t("g",{fill:"#545353",stroke:"#fff",id:"crosshairs"},[t("ellipse",{ry:".254",rx:".262",id:"path3808",cx:"12",cy:"12","stroke-width":".076"}),t("path",{d:"M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",id:"rect4632-6","stroke-width":".09"}),t("path",{d:"M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",id:"rect4632-6-0","stroke-width":".09"}),t("path",{d:"M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",id:"rect4632-6-4","stroke-width":".09"}),t("path",{d:"M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",id:"rect4632-6-9","stroke-width":".09"})])],-1)),x=[M],b=n({__name:"crosshairs",setup(o){const e=h("iApi"),s=r(!1),a=r([]);return c(()=>{a.value.push(e.event.on(i.MAP_EXTENTCHANGE,()=>{e.geo.map.keysActive&&(s.value=!0)})),a.value.push(e.event.on(i.MAP_FOCUS,()=>{e.geo.map.mouseFocus||(s.value=!0)})),a.value.push(e.event.on(i.MAP_MOUSEDOWN,()=>{s.value=!1})),a.value.push(e.event.on(i.MAP_BLUR,()=>{s.value=!1}))}),d(()=>{a.value.forEach(l=>e.event.off(l))}),(l,k)=>(p(),u("div",{class:v(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230",{"opacity-0":!s.value}])},x,2))}});const A=g(b,[["__scopeId","data-v-ab5a0be4"]]);class E extends m{added(){const{destroy:e,el:s}=this.mount(A,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]),this.removed=()=>{e()}}}export{E as default};
