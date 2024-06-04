import{c3 as q,c4 as X,fp as _,fr as Y,c8 as D,c9 as n,ch as o,cg as M,fo as a,ce as l,hI as b,hJ as ne,fn as C,hX as fe,hW as h,li as Ie,c5 as se,c7 as ie,cf as be,cb as oe,lj as r,cc as E,cd as x,gM as P,kI as V,hv as Q,hw as ee,hx as te,ci as K,cj as J,i2 as Le,hH as m,b_ as ke,fl as xe,c6 as O,lk as L,ll as B,ca as $,hV as we,lm as j,k7 as pe,ln as ae,lo as Ce,lp as de}from"./main-83b7c6ef.js";import{m as Me}from"./marked.esm-cdc2cd67.js";import"./preload-helper-388ac9d5.js";const Se=["aria-label","checked","disabled","content"],W=q({__name:"checkbox",props:{value:{type:Object,required:!0},legendItem:{type:Object,required:!0},checked:{type:Boolean},label:{type:String},isRadio:{type:Boolean},disabled:{type:Boolean}},setup(e){const t=e,{t:d}=X(),w=_(t.legendItem.visibility);Y(()=>{t.legendItem.checkVisibilityRules(),w.value=t.legendItem.visibility===t.checked});const f=y=>!y.symbologyStack.some(u=>u.visibility),v=()=>{if(t.value instanceof fe)t.legendItem.toggleVisibility();else if(t.legendItem instanceof h){if(f(t.legendItem)?(t.legendItem.setSymbologyVisibility(void 0,!1),t.legendItem.setSymbologyVisibility(t.value.uid,!0),t.legendItem.toggleVisibility(!0)):t.legendItem.setSymbologyVisibility(t.value.uid,!t.value.lastVisbility),f(t.legendItem)&&t.legendItem.toggleVisibility(!1),t.legendItem.layer?.supportsFeatures){const y=t.legendItem.symbologyStack.filter(S=>S.lastVisbility===!0).map(S=>S.definitionClause||"");let u="";y.length===0?u="1=2":y.length<t.legendItem.symbologyStack.length&&(u=y.join(" OR ")),t.legendItem.layer?.setSqlFilter(Ie.SYMBOL,u)}w.value=!0}};return(y,u)=>{const S=D("tippy");return n(),o("div",{class:"relative",onMouseover:u[4]||(u[4]=b(()=>{},["stop"]))},[M(a("input",{type:"checkbox","aria-label":l(d)(e.checked?`legend.visibility.hide${e.label}`:`legend.visibility.show${e.label}`),onClick:u[0]||(u[0]=b(()=>{},["stop"])),checked:e.checked&&w.value,onChange:u[1]||(u[1]=b(T=>v(),["stop"])),onKeypress:u[2]||(u[2]=ne(b(()=>{},["prevent"]),["enter"])),onKeyup:u[3]||(u[3]=ne(b(T=>v(),["stop"]),["enter"])),class:C([[e.isRadio?"form-radio":"form-checkbox rounded-none",e.disabled?"text-gray-400 border-gray-300":"text-black cursor-pointer border-gray-500 hover:border-black"],"mx-5 h-15 w-15"]),tabindex:"-1",disabled:e.disabled,content:l(d)(e.checked?`legend.visibility.hide${e.label}`:`legend.visibility.show${e.label}`)},null,42,Se),[[S,{placement:"top-end",hideOnClick:!1}]])],32)}}}),H=e=>(Q("data-v-6c6e4829"),e=e(),ee(),e),Te=H(()=>a("div",{class:"flex p-4"},[a("svg",{class:"inline-block fill-current w-18 h-18 mx-4",viewBox:"0 0 23 21"},[a("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})])],-1)),Ve=H(()=>a("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[a("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})],-1)),ze=H(()=>a("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[a("g",null,[a("path",{d:"M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z "})])],-1)),Ee=H(()=>a("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[a("path",{d:"M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z "})],-1)),He=H(()=>a("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[a("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1)),Ae=H(()=>a("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 24 24"},[a("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),a("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)),Be=H(()=>a("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[a("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})],-1)),$e=H(()=>a("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 24 24"},[a("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)),_e=q({__name:"legend-options",props:{legendItem:h},setup(e){const t=e,{t:d}=X(),w=se("iApi"),f=_(),v=()=>{t.legendItem.layerControlAvailable(r.Symbology)&&t.legendItem.toggleSymbology()},y=()=>{t.legendItem.layerControlAvailable(r.Datatable)&&z("grid")&&w.event.emit(P.GRID_TOGGLE,t.legendItem.layer)},u=()=>{t.legendItem.layerControlAvailable(r.Settings)&&z("settings")&&w.event.emit(P.SETTINGS_TOGGLE,t.legendItem.layer)},S=()=>{if(t.legendItem.layerControlAvailable(r.Metadata)&&z("metadata")){const p=t.legendItem?.layer?.config.metadata||t.legendItem?.layer?.parentLayer?.config?.metadata||{},g=p?.name||t.legendItem?.layer?.name||"";p.url?w.event.emit(P.METADATA_TOGGLE,{type:"html",layerName:g,url:p.url,layer:t.legendItem.layer}):console.warn("Layer does not have a metadata url defined")}},T=()=>{t.legendItem.layerControlAvailable(r.BoundaryZoom)&&t.legendItem?.layer?.zoomToLayerBoundary()},R=()=>{t.legendItem.layerControlAvailable(r.Remove)&&w.geo.map.removeLayer(t.legendItem.layerUid)},N=()=>{t.legendItem.layerControlAvailable(r.Reload)&&(V(t.legendItem.layer).reload(),f.value.open=!1)},z=p=>{try{return!!w.fixture.get(p)}catch{return!1}};return(p,g)=>{const F=ie("dropdown-menu");return n(),o("div",{onClick:g[0]||(g[0]=b(()=>{},["stop"])),onMouseover:g[1]||(g[1]=b(()=>{},["stop"])),class:"options display-block cursor-auto"},[be(F,{class:"flex-shrink-0",position:"bottom-end",tooltip:l(d)("legend.layer.options"),"tooltip-placement":"left",ref_key:"dropdown",ref:f},{header:oe(()=>[Te]),default:oe(()=>[a("a",{href:"javascript:;",class:C(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(r).Metadata)||!z("metadata")}]),onClick:S},[Ve,E(" "+x(l(d)("legend.layer.controls.metadata")),1)],2),a("a",{href:"javascript:;",class:C(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(r).Settings)||!z("settings")}]),onClick:u},[ze,E(" "+x(l(d)("legend.layer.controls.settings")),1)],2),a("a",{href:"javascript:;",class:C(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(r).Datatable)||!z("grid")}]),onClick:y},[Ee,E(" "+x(l(d)("legend.layer.controls.datatable")),1)],2),a("a",{href:"javascript:;",class:C(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(r).Symbology)}]),onClick:v},[He,E(" "+x(l(d)("legend.layer.controls.symbology")),1)],2),a("a",{href:"javascript:;",class:C(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(r).BoundaryZoom)}]),onClick:T},[Ae,E(" "+x(l(d)("legend.layer.controls.boundaryzoom")),1)],2),a("a",{href:"javascript:;",class:C(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(r).Remove)}]),onClick:R},[Be,E(" "+x(l(d)("legend.layer.controls.remove")),1)],2),a("a",{href:"javascript:;",class:C(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(r).Reload)}]),onClick:N},[$e,E(" "+x(l(d)("legend.layer.controls.reload")),1)],2)]),_:1},8,["tooltip"])],32)}}});const Ze=te(_e,[["__scopeId","data-v-6c6e4829"]]),Ge=e=>(Q("data-v-1133ecc9"),e=e(),ee(),e),Re={key:0},je={key:0,class:"relative left-3"},Ue=["innerHTML"],Oe=["src"],De={key:1,class:"symbologyIcon w-32 h-32"},Pe=["innerHTML"],qe=["src"],Ne={key:1,class:"h-32 w-32 inline-flex justify-center items-center"},Fe=Ge(()=>a("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},[a("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})],-1)),We=[Fe],Ke=q({__name:"symbology-stack",props:{visible:{type:Boolean,required:!0},legendItem:{type:Object,required:!0}},setup(e){const t=e,d=_([]);return Y(()=>{t.legendItem.loadPromise.then(()=>{t.legendItem.layerUid!==void 0&&Promise.all(V(t.legendItem.symbologyStack).map(w=>w.drawPromise)).then(()=>{d.value=V(t.legendItem).symbologyStack})})}),(w,f)=>e.visible?(n(),o("div",Ne,We)):(n(),o("div",Re,[d.value.length>1?(n(),o("div",je,[(n(!0),o(K,null,J(d.value.slice(0,3).reverse(),(v,y)=>(n(),o("div",{class:C(["absolute",[y==0?"symbol-0":y==1?"left-3 symbol-1":"left-6 symbol-2"]]),style:Le({"z-index":3-y}),key:y},[d.value[y].svgcode?(n(),o("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:d.value[y].svgcode},null,8,Ue)):d.value[y].imgUrl?(n(),o("img",{key:1,class:"symbologyIcon w-28 h-28",src:d.value[y].imgUrl},null,8,Oe)):m("",!0)],6))),128))])):d.value.length>0?(n(),o("div",De,[d.value[0].svgcode?(n(),o("span",{key:0,innerHTML:d.value[0].svgcode},null,8,Pe)):d.value[0].imgUrl?(n(),o("img",{key:1,class:"symbologyIcon w-full h-full",src:d.value[0].imgUrl},null,8,qe)):m("",!0)])):m("",!0)]))}});const Je=te(Ke,[["__scopeId","data-v-1133ecc9"]]),Z=e=>(Q("data-v-dfe4cf13"),e=e(),ee(),e),Xe={class:"relative"},Ye=["content"],Qe={key:0,class:"flex ml-3 mr-10"},et={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px"},tt=de('<path d="M0 0h24v24H0V0z" fill="none" data-v-dfe4cf13></path><path d="M0 0h24v24H0V0z" fill="none" data-v-dfe4cf13></path><circle cx="15.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-dfe4cf13></path>',7),lt=[tt],nt={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px"},ot=de('<path d="M0 0h24v24H0V0z" fill="none" data-v-dfe4cf13></path><path d="M0 0h24v24H0V0z" fill="none" data-v-dfe4cf13></path><circle cx="15.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-dfe4cf13></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-dfe4cf13></path>',7),at=[ot],st=["onClick","disabled","content"],it=["src"],dt=Z(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[a("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)),ct=[dt],rt=["content"],gt=Z(()=>a("svg",{class:"inline-block fill-current w-18 h-18",viewBox:"0 0 24 24"},[a("path",{d:"M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"})],-1)),mt=[gt],yt={key:4,class:"flex-1 pointer-events-none"},ut={key:5,class:"flex-1"},vt={key:0,class:"text-lg font-bold"},ht={key:1},ft={key:2},It=["src"],bt=["innerHTML"],Lt={key:6,class:"relative"},kt=["content","onClick"],xt=Z(()=>a("div",{class:"flex p-8"},[a("svg",{class:"inline-block fill-current w-18 h-18",viewBox:"0 0 24 24"},[a("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})])],-1)),wt=[xt],pt={key:7,class:"relative"},Ct=["content","onClick"],Mt={class:"flex p-8"},St={key:0,class:"fill-current w-18 h-18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},Tt=Z(()=>a("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},null,-1)),Vt=[Tt],zt={key:1,class:"inline-block fill-current w-18 h-18 mr-1",viewBox:"0 0 23 21"},Et=Z(()=>a("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},null,-1)),Ht=[Et],At={key:9,class:"relative"},Bt=["content"],$t=Z(()=>a("svg",{class:"m-auto",xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 0 24 24",width:"18"},[a("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),a("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)),_t=[$t],Zt={key:0,class:"flex-1 h-3"},Gt=Z(()=>a("div",{class:"progress-line"},null,-1)),Rt=[Gt],jt={key:0,class:"symbology-stack default-focus-style"},Ut={key:0},Ot={key:0,class:"m-5"},Dt={key:0,class:"items-center grid-cols-1"},Pt={key:0,class:"symbologyIcon w-full p-5"},qt=["src"],Nt=["innerHTML"],Ft={key:2,class:"flex-1 p-5 bg-black-75 text-white"},Wt={key:1,class:"flex items-center"},Kt={key:0,class:"symbologyIcon"},Jt=["src"],Xt={key:1,class:"symbologyIcon"},Yt=["innerHTML"],Qt={class:"flex-1 ml-15"},el={key:1},tl={class:"flex p-5 ml-48"},ll={key:0,class:"relative animate-spin spinner h-20 w-20 mr-10 pt-2"},nl={class:"flex-1 text-gray-500"},ol={key:1,class:"legend-group border-l-2 ml-4 pl-4"},al=q({__name:"item",props:{legendItem:{type:Object,required:!0}},setup(e){const t=e,d=ke(),w=xe(),{t:f}=X(),v=se("iApi"),y=_(),u=_(w.mobileView),S=O(()=>d.layerConfigs),T=_([]),R=_(!1);Y(()=>{t.legendItem instanceof h&&t.legendItem.loadPromise.then(()=>{if(T.value=[],!t.legendItem.layer){console.warn("Attempted to mount legend item component with undefined layer");return}Promise.all(V(t.legendItem.symbologyStack.map(s=>s.drawPromise))).then(()=>{T.value=V(t.legendItem.symbologyStack)})})});const N=O(()=>t.legendItem instanceof h?V(t.legendItem.layer)?.layerType:""),z=O(()=>v.animate),p=O(()=>t.legendItem.children.length>0),g=s=>s===B.Expand||s===B.Visibility?t.legendItem.controlAvailable(s):t.legendItem.layerControlAvailable(s),F=s=>Me(s),ce=()=>{t.legendItem.children.length===0||!g(B.Expand)||(t.legendItem.toggleExpanded(),ae(()=>y.value.querySelector(".legend-group")?.scrollIntoView(!1)),v.updateAlert(f(`legend.alert.group${t.legendItem.expanded?"Expanded":"Collapsed"}`)))},re=()=>{if(g(r.Symbology)){const s=t.legendItem.toggleSymbology();ae(()=>y.value.querySelector(".symbology-stack")?.scrollIntoView(!1)),v.updateAlert(f(`legend.alert.symbology${s?"Expanded":"Collapsed"}`))}},ge=()=>{g(r.Datatable)&&U()&&v.event.emit(P.GRID_TOGGLE,t.legendItem.layer)},me=s=>{const i=document.createElement("span");i.innerHTML=s.svgcode;const k=i.firstElementChild;return k?.classList.add("max-w-full"),k?.classList.add("h-full"),k?.setAttribute("height",s.imgHeight),k?.setAttribute("width",s.imgWidth),i.outerHTML},U=()=>{try{return!!v.fixture.get("grid")}catch{return!1}},ye=()=>{if(t.legendItem.reload(),t.legendItem._loadCancelled){const s=setInterval(()=>{t.legendItem.layer&&Promise.allSettled([t.legendItem.layer.loadPromise]).then(()=>{clearInterval(s),le()})},250)}else le()},le=()=>{setTimeout(()=>{if(t.legendItem._loadCancelled=!1,t.legendItem.layer!==void 0)V(t.legendItem.layer).reload().then(()=>d.removeErrorLayer(t.legendItem.layer)).catch(()=>d.addErrorLayer(t.legendItem.layer));else{const s=t.legendItem.layerIdx===void 0||t.legendItem.layerIdx===-1?S.value.find(i=>i.id===t.legendItem.layerId):S.value.find(i=>i.id===t.legendItem.parentLayerId);s!==void 0&&ue(s)}t.legendItem.loadPromise.catch(()=>{console.error("Failed to reload layer -",t.legendItem.name)})},500)},ue=async s=>{try{const i=v.geo.layer.createLayer(s);d.removeErrorLayer(i);const k=v.geo.layer.getLayer(i.id);if(k){const[I]=await Ce(V(k).reload());if(I)throw d.addErrorLayer(i),new Error}else v.geo.map.addLayer(i).catch(()=>{throw new Error});return i}catch{return}},ve=()=>{const s=V(t.legendItem);if(s.type===L.Error){t.legendItem.toggleHidden(!0);let i=!1;const k=setInterval(()=>{i?clearInterval(k):s.layer&&s.layer.layerExists&&(v.geo.map.removeLayer(s.layer),d.removeErrorLayer(s.layerId),d.removeLayerConfig(s.layerId),v.fixture.get("legend")?.removeLayerItem(s.layerId),i=!0)},250)}else{t.legendItem.error(),t.legendItem._loadCancelled=!0;const i=setInterval(()=>{const k=v.geo.layer.allLayers().find(I=>I.id===s.parentLayerId||I.id===s.layerId)??v.geo.layer.allErrorLayers().find(I=>I.id===s.parentLayerId||I.id===s.layerId);if(k){clearInterval(i);const I=v.fixture.get("legend")?.getLayerItem(k);I&&(I.error(),I._loadCancelled=!0),k.sublayers?.forEach(A=>{const G=v.fixture.get("legend")?.getLayerItem(A);G&&(G.error(),G._loadCancelled=!0)})}},250)}},he=s=>{R.value=!0,setTimeout(()=>{R.value&&(u.value||s._tippy?.show())},300)};return(s,i)=>{const k=ie("item",!0),I=D("tippy"),A=D("truncate"),G=D("focus-item");return e.legendItem.hidden?m("",!0):(n(),o("div",{key:e.legendItem.uid,ref_key:"el",ref:y},[a("div",Xe,[M((n(),o("div",{class:C(["flex items-center hover:bg-gray-200",[e.legendItem.type===l(L).Item?"loaded-item default-focus-style":e.legendItem.type===l(L).Error?"non-loaded-item bg-red-200":"non-loaded-item",e.legendItem instanceof l(h)?"p-5":"px-5 py-10",p.value&&g(l(B).Expand)||!p.value&&e.legendItem instanceof l(h)&&g(l(r).Datatable)&&U()&&e.legendItem.type===l(L).Item?"cursor-pointer":"cursor-default"]]),onMouseover:i[6]||(i[6]=b(c=>he(c.currentTarget),["stop"])),onMouseout:i[7]||(i[7]=b(c=>(u.value||c.currentTarget?._tippy?.hide(),R.value=!1),["self"])),onClick:i[8]||(i[8]=()=>{!p.value&&e.legendItem instanceof l(h)&&g(l(r).Datatable)&&U()&&e.legendItem.type===l(L).Item?ge():p.value&&ce()}),content:p.value&&g(l(B).Expand)?l(f)(e.legendItem.expanded?"legend.group.collapse":"legend.group.expand"):e.legendItem instanceof l(h)&&e.legendItem.type===l(L).Item&&g(l(r).Datatable)&&U()?l(f)("legend.layer.data"):"","truncate-trigger":""},[e.legendItem.type!==l(L).Item?(n(),o("div",Qe,[e.legendItem.type===l(L).Placeholder?(n(),o("svg",et,lt)):(n(),o("svg",nt,at))])):m("",!0),e.legendItem.type===l(L).Item&&e.legendItem instanceof l(h)&&e.legendItem.layer.legend.length>0?(n(),o("div",{key:1,class:"relative w-32 h-32 mr-15",onMouseover:i[0]||(i[0]=b(()=>{},["stop"]))},[M((n(),o("button",{type:"button",onClick:b(re,["stop"]),class:C([g(l(r).Symbology)?"cursor-pointer":"cursor-default"]),disabled:!g(l(r).Symbology),content:e.legendItem instanceof l(h)&&e.legendItem.symbologyExpanded?l(f)("legend.symbology.hide"):l(f)("legend.symbology.expand")},[e.legendItem.coverIcon?(n(),o("img",{key:1,class:C([{"pointer-events-none":!g(l(r).Symbology)},"w-32 h-32 hover:scale-105"]),src:e.legendItem.coverIcon,alt:"Cover icon not found :("},null,10,it)):(n(),$(Je,{key:0,class:C([{"pointer-events-none":!g(l(r).Symbology)},"w-32 h-32"]),visible:e.legendItem instanceof l(h)&&e.legendItem.symbologyExpanded,legendItem:e.legendItem},null,8,["class","visible","legendItem"]))],10,st)),[[I,{placement:"top-start"}]])],32)):m("",!0),p.value&&g(l(B).Expand)?(n(),o("div",{key:2,class:C(["expand-toggle mr-5 pointer-events-none",{"rotate-180":e.legendItem.expanded}])},ct,2)):m("",!0),e.legendItem instanceof l(h)&&e.legendItem.layerOffscale?M((n(),o("div",{key:3,class:"relative mr-10",content:l(f)("legend.layer.offscale"),onMouseover:i[1]||(i[1]=b(()=>{},["stop"]))},mt,40,rt)),[[I,{placement:"top-start"}]]):m("",!0),e.legendItem instanceof l(h)?M((n(),o("div",yt,[a("span",null,x(e.legendItem.name??(!e.legendItem.layer||e.legendItem?.layer?.name===""?e.legendItem.layerId:e.legendItem.layer?.name)),1)])),[[A,{externalTrigger:!0}]]):e.legendItem instanceof l(we)?(n(),o("div",ut,[e.legendItem.infoType===l(j).Title&&e.legendItem.content?(n(),o("h3",vt,x(e.legendItem.content),1)):e.legendItem.infoType===l(j).Title?(n(),o("h3",ht,x(e.legendItem.name),1)):e.legendItem.infoType===l(j).Text?(n(),o("p",ft,x(e.legendItem.content),1)):e.legendItem.infoType===l(j).Image?(n(),o("img",{key:3,src:e.legendItem.content,alt:"InfoType image not found :("},null,8,It)):e.legendItem.infoType===l(j).Markdown?(n(),o("div",{key:4,class:"ramp-markdown",innerHTML:F(e.legendItem.content)},null,8,bt)):(n(),$(pe(`${e.legendItem.uid}-info-section`),{key:5}))])):m("",!0),e.legendItem.type===l(L).Error?(n(),o("div",Lt,[M((n(),o("button",{type:"button",class:"text-gray-500 hover:text-black",content:l(f)("legend.layer.controls.reload"),onMouseover:i[2]||(i[2]=b(()=>{},["stop"])),onClick:b(ye,["stop"])},wt,40,kt)),[[I,{placement:"top-start"}]])])):m("",!0),e.legendItem.type!==l(L).Item&&e.legendItem instanceof l(h)?(n(),o("div",pt,[M((n(),o("button",{type:"button",class:"text-gray-500 hover:text-black",content:e.legendItem.type===l(L).Error?l(f)("legend.layer.controls.remove"):l(f)("legend.layer.controls.cancel"),onMouseover:i[3]||(i[3]=b(()=>{},["stop"])),onClick:b(ve,["stop"])},[a("div",Mt,[e.legendItem.type===l(L).Placeholder?(n(),o("svg",St,Vt)):(n(),o("svg",zt,Ht))])],40,Ct)),[[I,{placement:"top-start"}]])])):m("",!0),e.legendItem.type===l(L).Item&&e.legendItem instanceof l(h)?(n(),$(Ze,{key:8,legendItem:e.legendItem},null,8,["legendItem"])):m("",!0),e.legendItem instanceof l(h)&&e.legendItem.layerOffscale?(n(),o("div",At,[M((n(),o("button",{type:"button",class:"p-4",content:l(f)("legend.layer.zoomToVisible"),onMouseover:i[4]||(i[4]=b(()=>{},["stop"])),onClick:i[5]||(i[5]=b(c=>e.legendItem.layer.zoomToVisibleScale(),["stop"]))},_t,40,Bt)),[[I,{placement:"top-start"}]])])):e.legendItem.type===l(L).Item&&g(l(B).Visibility)?(n(),$(W,{key:10,checked:e.legendItem.visibility,value:e.legendItem,isRadio:e.legendItem.parent&&e.legendItem.parent.exclusive,legendItem:e.legendItem,disabled:e.legendItem instanceof l(h)&&!e.legendItem.layerControlAvailable(l(r).Visibility),label:p.value?"Group":"Layer"},null,8,["checked","value","isRadio","legendItem","disabled","label"])):m("",!0)],42,Ye)),[[G,"show-truncate"],[I,{placement:"top-start",trigger:"manual focus",aria:"describedby"}]]),e.legendItem.type===l(L).Placeholder||e.legendItem instanceof l(h)&&e.legendItem.layerRedrawing&&e.legendItem.visibility?(n(),o("div",Zt,Rt)):m("",!0)]),e.legendItem instanceof l(h)&&e.legendItem.symbologyExpanded?M((n(),o("div",jt,[T.value.length>0?(n(),o("div",Ut,[e.legendItem instanceof l(h)&&e.legendItem.description?(n(),o("p",Ot,x(e.legendItem.description),1)):m("",!0),(n(!0),o(K,null,J(T.value,c=>(n(),o("div",{class:"m-5",key:c.uid},[c.imgUrl&&e.legendItem.symbologyRenderStyle==="images"||!c.imgUrl&&N.value==="ogc-wms"?(n(),o("div",Dt,[c.imgUrl?(n(),o("div",Pt,[a("img",{class:"max-w-full",src:c.imgUrl},null,8,qt)])):c.imgHeight?(n(),o("div",{key:1,class:"symbologyIcon w-full p-5",innerHTML:me(c)},null,8,Nt)):m("",!0),c.label?M((n(),o("div",Ft,[a("span",null,x(c.label),1),!c.imgUrl&&T.value.length>1||c.imgUrl&&c.definitionClause?(n(),$(W,{key:0,class:"float-right",value:c,legendItem:e.legendItem,checked:c.visibility,disabled:!g(l(r).Visibility),label:"Symbol"},null,8,["value","legendItem","checked","disabled"])):m("",!0)])),[[A]]):m("",!0)])):(n(),o("div",Wt,[c.imgUrl?(n(),o("div",Kt,[a("img",{class:"w-32 h-32",src:c.imgUrl},null,8,Jt)])):c.svgcode?(n(),o("div",Xt,[a("span",{innerHTML:c.svgcode},null,8,Yt)])):m("",!0),M((n(),o("div",Qt,[E(x(c.label),1)])),[[A]]),!c.imgUrl&&T.value.length>1||c.imgUrl&&c.definitionClause?(n(),$(W,{key:2,value:c,legendItem:e.legendItem,checked:c.visibility,disabled:!g(l(r).Visibility),label:"Symbol"},null,8,["value","legendItem","checked","disabled"])):m("",!0)]))]))),128))])):(n(),o("div",el,[M((n(),o("div",tl,[z.value?(n(),o("div",ll)):m("",!0),M((n(),o("div",nl,[a("span",null,x(l(f)("legend.symbology.loading")),1)])),[[A]])])),[[A]])]))])),[[G]]):m("",!0),e.legendItem.expanded?(n(),o("div",ol,[(n(!0),o(K,null,J(e.legendItem.children,c=>(n(),$(k,{legendItem:c,key:c.uid},null,8,["legendItem"]))),128))])):m("",!0)]))}}});const cl=te(al,[["__scopeId","data-v-dfe4cf13"]]);export{cl as default};
