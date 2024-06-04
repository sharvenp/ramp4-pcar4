import{hi as de,hs as K,gK as Z,ht as ue,gL as Y,gM as J,hu as ce,h7 as he,gY as A,gN as y,h9 as me,hv as ne,gZ as ee,hj as O,g_ as te,gO as se,g$ as W,gQ as a,gR as U,gS as V,hp as j,h6 as f,gP as o,gX as r,gT as p,hc as ie,hd as le,h0 as R,gV as z,hf as oe,hw as pe,hx as ge,hy as ve,he as ye,hl as Q,h8 as fe}from"./main-e6c796d9.js";import{H as _e}from"./hilight-defs-1101779f.js";import{T as re}from"./toggle-switch-control-d7c24bd3.js";import{l as be}from"./linkify-html.es-e51a510f.js";import"./preload-helper-388ac9d5.js";class xe{id;name;template;componentId;constructor(e){const i={...typeof e=="string"?{id:e,template:"",name:""}:e};({template:this.template,id:this.id,name:this.name}=i)}}const X="details";class $e extends de{detailsStore=K(this.$vApp.$pinia);get config(){return super.config}openDetails(e){this.detailsStore.payload=e,this.$iApi.panel.get("details-layers").isOpen||this.$iApi.panel.open({id:"details-layers"})}toggleFeature(e,i){const t=this.$iApi.panel.get("details-layers");t.isOpen&&this.$iApi.panel.close(t);const u=this.$iApi.panel.get("details-items"),s={result:{items:[{data:e.data,format:e.format,loaded:!0,loading:Promise.resolve()}],uid:e.uid,loading:Promise.resolve(),loaded:!0}},c=this.detailsStore.currentFeatureId,d=`${e.uid}-${e.data.OBJECTID}`;this.detailsStore.currentFeatureId=e.data?d:void 0,i===!1?this.$iApi.panel.close(u):u.isOpen?c!==d||i===!0?u.show({screen:"item-screen",props:s}):this.$iApi.panel.close(u):this.$iApi.panel.open({id:"details-items",screen:"item-screen",props:s})}_parseConfig(e){e&&e.templates&&(this.detailsStore.defaultTemplates=e.templates),this.handlePanelWidths(["details-items","details-layers"]);const i=this.getLayerFixtureConfigs(),t=[];Object.keys(i).forEach(s=>{t.push({id:s,name:i[s].name,template:i[s].template})});const u=t.map(s=>new xe(s));this.detailsStore.properties=u.reduce((s,c)=>(s[c.id]=c,s),{}),this._validateItems()}_validateItems(){Object.values(this.detailsStore.properties).forEach(e=>{e.template in this.$vApp.$options.components&&(this.detailsStore.properties[e.id].componentId=e.template)})}async hilightDetailsItems(e,i){const t=e instanceof Array?e:[e],u=this.$iApi.fixture.get("hilight");if(u){const s=await u.getGraphicsByKey(origin=X);await u.removeHilight(s);const c=Date.now();this.detailsStore.lastHilight=c;const d=await this.getHilightGraphics(t,i);this.detailsStore.lastHilight===c&&await u.addHilight(d)}}async removeDetailsHilight(){const e=this.$iApi.fixture.get("hilight");if(e){this.detailsStore.lastHilight=Date.now();const i=await e.getGraphicsByKey(origin=X);await e.removeHilight(i)}}async reloadDetailsHilight(e,i){const t=e instanceof Array?e:[e],u=this.$iApi.fixture.get("hilight");if(u){const s=await this.getHilightGraphics(t,i);u.reloadHilight(s)}}async getHilightGraphics(e,i){const t=this.$iApi.geo.layer.getLayer(i),u=this.$iApi.fixture.get("hilight"),s=[];return t&&await Promise.all(e.map(async c=>{const d=c.data[t.oidField],k=await t.getGraphic(d,{getGeom:!0,getAttribs:!0,getStyle:!0});k.id=u.constructGraphicKey(X,i,d),s.push(k)})),s}onHilightToggle(e,i,t){e?(this.hilightDetailsItems(i,t),this.detailsStore.hilightToggle=!0):(this.removeDetailsHilight(),this.detailsStore.hilightToggle=!1)}hasHilighter(){const e=this.$iApi.fixture.get("hilight");return e&&e.hilightMode.mode!==_e.NONE}}const we={key:0},Le={class:"p-5"},Ae=["onClick","disabled"],Ie=p("div",{class:"flex-auto"},null,-1),ke={key:0,class:"px-5"},He={key:1,class:"animate-spin spinner h-20 w-20 px-5"},Te={key:1,class:"flex justify-center py-10 items-center"},Se=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ce={key:2},De=Z({__name:"layers-screen",props:{panel:ue},setup(_){const{t:e}=Y(),i=J("iApi"),t=ce(),u=he(),s=K(),c=A([]),d=A(""),k=A([]),v=A([]),I=y(()=>s.activeGreedy),P=y(()=>s.slowLoadingFlag),$=y(()=>s.payload),H=y(()=>s.properties);y(()=>t.layers);const C=y(()=>u.mobileView),G=y(()=>u.getRemainingWidth),b=y(()=>c.value.map(l=>l.items.length).reduce((l,g)=>l+g,0)),D=l=>{if(l===void 0)return;const g=i.panel.get("details-items"),m=g.width||350,x=C.value||G.value<m&&!g.isOpen||l.length===0?0:l[0].requestTime;s.activeGreedy=x,s.slowLoadingFlag=!1,c.value=l,h(l),F(l)},F=l=>{const g=i.panel.get("details-items");if(d.value&&g.isOpen){const m=c.value.findIndex(x=>x.uid===d.value);if(m!==-1){const x=c.value[m];x.loading.then(()=>{x.requestTime===I.value&&(x.items.length>0?(s.activeGreedy=0,S(m)):T(l))})}else T(l)}else T(l);setTimeout(()=>{I.value!==0&&l[0].requestTime===I.value&&(s.slowLoadingFlag=!0)},500)},T=l=>{const g=l.map(x=>x.loading.then(()=>x.items.length>0?Promise.resolve(x):Promise.reject())),m=l.length===0?0:l[0].requestTime;Promise.any(g).then(x=>{if(x.requestTime!==I.value)return;const w=c.value.findIndex(E=>E.uid===x.uid);s.activeGreedy=0,w!==-1&&S(w)}).catch(()=>{m===I.value&&(d.value="",s.activeGreedy=0,M())})},h=l=>{Promise.all(l.map(g=>g.loading)).then(()=>{i.updateAlert(i.$i18n.t("details.layers.found",{numResults:b.value,numLayers:l.length}))})},M=()=>{const l=i.panel.get("details-items");l.isOpen&&l.close()},S=l=>{if($.value[l].items.length>0){s.activeGreedy=0;let g=i.panel.get("details-items"),m={result:$.value[l]};d.value=$.value[l].uid,g.isOpen?g.show({screen:"item-screen",props:m}):i.panel.open({id:"details-items",screen:"item-screen",props:m})}},N=l=>{const g=$.value[l];let m=t.getLayerByUid(g.uid);return m&&H.value[m.id]&&H.value[m.id].name?H.value[m.id].name:m?.name??""};return me(()=>{v.value.push(ne($,l=>{D(l)},{deep:!1,immediate:!0}))}),ee(()=>{k.value.push(i.event.on(O.PANEL_CLOSED,l=>{(l.id==="details-items"||l.id==="details-layers")&&(s.activeGreedy=0)})),v.value.push(ne(I,l=>{l===0&&(s.slowLoadingFlag=!1)}))}),te(()=>{k.value.forEach(l=>i.event.off(l)),v.value.forEach(l=>l())}),(l,g)=>{const m=se("panel-screen"),x=W("truncate");return a(),U(m,{panel:_.panel},{header:V(()=>[j(f(o(e)("details.layers.title")),1)]),content:V(()=>[o(I)===0?(a(),r("div",we,[p("div",Le,f(o(e)("details.layers.found",{numResults:o(b),numLayers:o($).length})),1),(a(!0),r(ie,null,le(c.value,(w,E)=>(a(),r("button",{type:"button",class:"w-full px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer disabled:cursor-default",key:w.uid,onClick:n=>w.loaded&&S(E),disabled:!(w.loaded&&w.items.length>0)},[R((a(),r("div",null,[j(f(N(E)||o(e)("details.layers.loading")),1)])),[[x]]),Ie,w.loaded?(a(),r("div",ke,f(w.items.length),1)):(a(),r("div",He))],8,Ae))),128))])):o(P)?(a(),r("div",Te,[Se,j(" "+f(o(e)("details.item.loading")),1)])):(a(),r("div",Ce))]),_:1},8,["panel"])}}}),Fe={key:0},Me={key:0},Ne={key:0},Ee={key:0,class:"flex justify-between py-8 px-8 mb-8 bg-gray-100"},ze={class:"p-8 font-bold break-words"},Oe={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},je=["innerHTML"],Ge={key:1,class:"flex-initial py-5 px-10"},Be={key:2,class:"animate-spin spinner h-20 w-20 px-5"},Pe={key:1},Re={key:1,class:"p-5"},Ve={key:1,class:"flex justify-center py-10 items-center"},qe=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ke={key:2},Ze=Z({__name:"result-screen",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},previousItemIndex:{type:Number,default:-1}},setup(_){const e=_,{t:i}=Y(),t=J("iApi"),u=K(),s=y(()=>u.properties),c=y(()=>u.activeGreedy),d=y(()=>u.slowLoadingFlag),k=y(()=>t.geo.layer.getLayer(e.result.uid)?.nameField),v=y(()=>{const h=t.geo.layer.getLayer(e.result.uid);return h&&s.value[h.id]&&s.value[h.id].name?s.value[h.id].name:h?.name??""}),I=A([]),P=A(!1),$=A([]),H=A(t.fixture.get("details")),C=A(!0);ee(()=>{P.value=t.geo.layer.getLayer(e.result.uid)!==void 0,C.value=u.hilightToggle??C.value,C.value&&H.value.hilightDetailsItems(e.result.items,e.result.uid),t.updateAlert(t.$i18n.t("details.item.alert.show.list",{layerName:v.value})),$.value.push(t.event.on(O.LAYER_REMOVE,h=>{e.result.uid===h.uid&&e.panel.close()})),$.value.push(t.event.on(O.PANEL_CLOSED,h=>{h.id=="details-items"&&G()})),$.value.push(t.event.on(O.PANEL_MINIMIZED,h=>{h.id=="details-items"&&b()})),$.value.push(t.event.on(O.MAP_BASEMAPCHANGE,()=>{C.value&&H.value.reloadDetailsHilight(e.result.items,e.result.uid)}))}),te(()=>{$.value.forEach(h=>t.event.off(h))});const G=()=>{H.value.removeDetailsHilight(),u.hilightToggle=!0},b=()=>{H.value.removeDetailsHilight()},D=h=>{e.panel.show({screen:"item-screen",props:{result:e.result,itemIndex:h}})},F=(h,M)=>{const S=t.geo.layer.getLayer(e.result.uid);if(S===void 0){console.warn(`could not find layer for uid ${e.result.uid} during icon lookup`);return}const N=S.oidField;return S.getIcon(h[N]).then(l=>{I.value[M]!==l&&(I.value[M]=l)}),I.value[M]},T=h=>{C.value=h,H.value.onHilightToggle(h,e.result.items,e.result.uid)};return(h,M)=>{const S=se("panel-screen"),N=W("truncate"),l=W("focus-item");return a(),U(S,{panel:_.panel},{header:V(()=>[j(f(o(i)("details.items.title")),1)]),content:V(()=>[_.result.loaded&&o(c)===0?(a(),r("div",Fe,[P.value?(a(),r("div",Me,[_.result.items.length>0?(a(),r("div",Ne,[P.value?(a(),r("div",Ee,[p("div",ze,f(o(v)),1)])):z("",!0),H.value.hasHilighter()?(a(),r("div",Oe,[p("div",null,f(o(i)("details.togglehilight.title")),1),oe(re,{config:{value:C.value,disabled:!1},onToggled:T},null,8,["config"])])):z("",!0),(a(!0),r(ie,null,le(_.result.items,(g,m,x,w)=>{const E=[I.value[m]];if(w&&w.key===m&&pe(w,E))return w;const n=R((a(),r("button",{type:"button",class:"w-full flex px-16 py-10 text-md hover:bg-gray-200 cursor-pointer",key:m,onClick:L=>g.loaded&&D(m),disabled:!g.loaded},[g.loaded?(a(),r("span",{key:0,innerHTML:F(g.data,m),class:"flex-none symbologyIcon"},null,8,je)):z("",!0),g.loaded?R((a(),r("span",Ge,[j(f(o(k)?g.data[o(k)]:o(i)("details.result.default.name",[m+1])),1)])),[[N]]):z("",!0),g.loaded?z("",!0):(a(),r("span",Be))],8,["onClick","disabled"])),[[l],[N]]);return n.memo=E,n},M,0),128))])):(a(),r("div",Pe,f(o(i)("details.layers.results.empty")),1))])):(a(),r("div",Re,f(o(i)("details.item.no.data")),1))])):o(d)?(a(),r("div",Ve,[qe,j(" "+f(o(i)("details.item.loading")),1)])):(a(),r("div",Ke))]),_:1},8,["panel"])}}}),We={class:"inline font-bold"},Ue=p("span",{class:"flex-auto"},null,-1),Ye=["innerHTML"],Je=Z({__name:"esri-default",props:{fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(_){const e=_,i=J("iApi"),t=()=>{const s={};Object.assign(s,e.identifyData.data),s.Symbol!==void 0&&delete s.Symbol;let c={};return e.fields.forEach(d=>{c[d.name]=d.alias||d.name}),Object.keys(s).map(d=>{s[d]={value:typeof s[d]=="number"?i?.$i18n.n(s[d],"number"):s[d],alias:c[d]||d}}),s},u=s=>{if(!s)return s;if(s.trim().match(/\.(jpeg|jpg|gif|png)$/)||s.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${s}" />`;const c="underline text-blue-600 break-all",d=document.createElement("div");return d.innerHTML=s.trim(),d.firstElementChild?.tagName=="A"?(d.firstElementChild.className=c,d.innerHTML):be(s,{className:c,target:"_blank",validate:{url:v=>/^https?:\/\//.test(v)}})};return(s,c)=>(a(),r("div",null,[(a(!0),r(ie,null,le(t(),(d,k,v)=>(a(),r("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:v},[p("span",We,f(d.alias),1),Ue,p("span",{class:"inline",innerHTML:u(d.value)},null,8,Ye)]))),128))]))}}),Qe=["innerHTML"],Xe={key:1},et=Z({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(_){const{t:e}=Y();return(i,t)=>_.identifyData?(a(),r("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:_.identifyData.data},null,8,Qe)):(a(),r("div",Xe,f(o(e)("details.layers.results.empty")),1))}}),tt={key:0},st={key:0,class:"p-8 font-bold break-words mb-8 bg-gray-100"},it={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},lt={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},at={class:"flex justify-between"},nt=["aria-label"],ot={class:"flex bg-gray-200 py-8 items-center"},rt=["content","aria-label","disabled"],dt=p("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[p("g",null,[p("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),ut=[dt],ct={class:"px-8"},ht=["content","aria-label","disabled"],mt=p("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[p("g",null,[p("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),pt=[mt],gt={key:3},vt={key:0},yt={key:0,class:"flex py-8"},ft=["innerHTML"],_t={key:1,class:"m-auto"},bt=p("div",{class:"animate-spin spinner h-20 w-20"},null,-1),xt=[bt],$t={class:"flex-grow my-auto text-lg px-8"},wt=["content","aria-label"],Lt=p("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},[p("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),p("path",{d:"M0 0h24v24H0V0z",fill:"none"}),p("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1),At=[Lt],It={key:1,class:"flex justify-center py-10 items-center"},kt=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ht={key:4,class:"p-5"},Tt={key:1,class:"flex justify-center py-10 items-center"},St=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ct={key:2},Dt=Z({__name:"item-screen",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},itemIndex:{type:Number,default:0}},setup(_){const e=_,{t:i}=Y(),t=J("iApi"),u=K(),s=y(()=>u.defaultTemplates),c=y(()=>u.properties),d=y(()=>u.activeGreedy),k=y(()=>u.slowLoadingFlag),v=y(()=>e.result.items[b.value]),I=y(()=>{const L=t.geo.layer.getLayer(e.result.uid)?.nameField;return L&&v.value.loaded?v.value.data[L]:t.$i18n.t("details.items.title")}),P=y(()=>{const n=t.geo.layer.getLayer(e.result.uid);return n&&c.value[n.id]&&c.value[n.id].name?c.value[n.id].name:n?.name??""});y(()=>t.geo.layer.getLayer(e.result.uid)?.layerType||"");const $=y(()=>t.geo.layer.getLayer(e.result.uid)?.supportsFeatures??!1),H=y(()=>$.value?t.geo.layer.getLayer(e.result.uid)?.fields||[]:[]),C=y(()=>{const n=t.geo.layer.getLayer(e.result.uid);return n&&c.value[n.id]&&c.value[n.id].template?c.value[n.id].template:s.value&&s.value[v.value.format]?s.value[v.value.format]:$.value?Je:et});A(ge.UNKNOWN);const G=A(""),b=A(0),D=A(!1),F=A([]),T=A(t.fixture.get("details")),h=A(!0),M=()=>{T.value.removeDetailsHilight(),u.hilightToggle=!0},S=()=>{T.value.removeDetailsHilight()},N=()=>{b.value=e.itemIndex??0,D.value=!0,h.value=u.hilightToggle??h.value,l()},l=()=>{if(v.value.loaded)t.geo.layer.getLayer(e.result.uid)||(D.value=!1),x(),t.updateAlert(`${t.$i18n.t("details.item.alert.show.item",{itemName:I.value})} ${e.result.items.length>1?t.$i18n.t("details.item.count",[b.value+1,e.result.items.length]):""}`),h.value&&T.value.hilightDetailsItems(e.result.items[b.value],e.result.uid);else{const n=b.value;v.value.loading.then(()=>{n===b.value&&l()})}},g=()=>{e.panel.show({screen:"results-screen",props:{result:e.result,previousItemIndex:b.value}})},m=n=>{b.value+=n,l()},x=()=>{if(G.value="",!(v.value&&v.value.loaded))return;const n=t.geo.layer.getLayer(e.result.uid);if(n===void 0){console.warn(`could not find layer for uid ${e.result.uid} during icon lookup`);return}if(n.supportsFeatures){const L=n.oidField;let q=b.value;n.getIcon(v.value.data[L]).then(B=>{b.value===q&&(G.value=B)})}},w=()=>{const n=t.geo.layer.getLayer(e.result.uid);if(n===void 0){console.warn(`Could not find layer for uid ${e.result.uid} during zoom geometry lookup`);return}if(!v.value.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.");return}const L=v.value.data[n.oidField],q={getGeom:!0};n.getGraphic(L,q).then(B=>{B.geometry.invalid()?console.error(`Could not find graphic for objectid ${L}`):t.geo.map.zoomMapTo(B.geometry)}),t.updateAlert(t.$i18n.t("details.item.alert.zoom"))},E=n=>{h.value=n,T.value.onHilightToggle(n,e.result.items[b.value],e.result.uid)};return ee(()=>{N(),F.value.push(t.event.on(O.LAYER_REMOVE,n=>{e.result.uid===n.uid&&e.panel.close()})),F.value.push(t.event.on(O.PANEL_CLOSED,n=>{n.id=="details-items"&&M()})),F.value.push(t.event.on(O.PANEL_MINIMIZED,n=>{n.id=="details-items"&&S()})),F.value.push(t.event.on(O.MAP_BASEMAPCHANGE,()=>{h.value&&T.value.reloadDetailsHilight(e.result.items[b.value],e.result.uid)}))}),te(()=>{F.value.forEach(n=>t.event.off(n))}),ve(()=>{N()}),(n,L)=>{const q=se("panel-screen"),B=W("tippy");return a(),U(q,{panel:_.panel},{header:V(()=>[j(f(o(i)("details.items.title")),1)]),content:V(()=>[_.result.loaded&&o(d)===0?(a(),r("div",tt,[D.value?(a(),r("div",st,f(o(P)),1)):z("",!0),T.value.hasHilighter()?(a(),r("div",it,[p("div",null,f(o(i)("details.togglehilight.title")),1),oe(re,{config:{value:h.value,disabled:!1},onToggled:E},null,8,["config"])])):z("",!0),D.value&&_.result.items.length>1?(a(),r("div",lt,[p("div",at,[p("button",{type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":o(i)("details.item.see.list"),onClick:g},f(o(i)("details.item.see.list")),9,nt),p("div",ot,[R((a(),r("button",{type:"button",content:o(i)("details.item.previous.item"),onClick:L[0]||(L[0]=ae=>m(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":o(i)("details.item.previous.item"),disabled:b.value===0},ut,8,rt)),[[B,{placement:"top"}]]),p("span",ct,f(o(i)("details.item.count",[b.value+1,_.result.items.length])),1),R((a(),r("button",{type:"button",content:o(i)("details.item.next.item"),onClick:L[1]||(L[1]=ae=>m(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":o(i)("details.item.next.item"),disabled:b.value===_.result.items.length-1},pt,8,ht)),[[B,{placement:"top"}]])])])])):z("",!0),D.value?(a(),r("div",gt,[o(v).loaded?(a(),r("div",vt,[o($)?(a(),r("div",yt,[G.value?(a(),r("span",{key:0,class:"flex-none m-auto symbologyIcon",innerHTML:G.value},null,8,ft)):(a(),r("div",_t,xt)),p("span",$t,f(o(I)),1),R((a(),r("button",{type:"button",content:o(i)("details.item.zoom"),"aria-label":o(i)("details.item.zoom"),onClick:L[2]||(L[2]=ae=>w()),class:"text-gray-600 m-8"},At,8,wt)),[[B,{placement:"bottom"}]])])):z("",!0),(a(),U(ye(o(C)),{identifyData:o(v),fields:o(H)},null,8,["identifyData","fields"]))])):(a(),r("div",It,[kt,j(" "+f(o(i)("details.item.loading")),1)]))])):(a(),r("div",Ht,f(o(i)("details.item.no.data")),1))])):o(k)?(a(),r("div",Tt,[St,j(" "+f(o(i)("details.item.loading")),1)])):(a(),r("div",Ct))]),_:1},8,["panel"])}}});const Ft={en:{"details.layers.title":"Identified Layers","details.layers.found":"Found {numResults} results in {numLayers} layers","details.layers.loading":"The layer is loading...","details.layers.results.empty":"No results found for the selected layer.","details.result.default.name":"Identify Item {0}","details.items.title":"Details","details.item.see.list":"See List","details.item.zoom":"Zoom to feature","details.item.previous.item":"Previous item","details.item.next.item":"Next item","details.item.count":"{0} of {1}","details.item.loading":"Loading results...","details.item.no.data":"No data to show because the layer has been removed","details.item.alert.zoom":"Zoomed into feature","details.item.alert.show.item":"Showing result {itemName}","details.item.alert.show.list":"Showing all results for {layerName}","details.togglehilight.title":"Toggle Highlight"},fr:{"details.layers.title":"Couches désignées","details.layers.found":"{numResults} résultats trouvés dans {numLayers} couches","details.layers.loading":"La couche est en cours de chargement...","details.layers.results.empty":"Aucun résultat trouvé pour la couche sélectionnée.","details.result.default.name":"Désigner l'élément {0}","details.items.title":"Détails","details.item.see.list":"Voir la liste","details.item.zoom":"Zoom à l'élément","details.item.previous.item":"Élément précédent","details.item.next.item":"Élément suivant","details.item.count":"{0} de {1}","details.item.loading":"Chargement des résultats...","details.item.no.data":"[fr] Aucune donnée à afficher","details.item.alert.zoom":"Zoom sur la caractéristique","details.item.alert.show.item":"Affichage du résultat {itemName}","details.item.alert.show.list":"Affichage de tous les résultats pour {layerName}","details.togglehilight.title":"Basculer vers l'élément principal"}};class jt extends $e{async added(){this.$iApi.panel.register({"details-layers":{screens:{"layers-screen":Q(De)},style:{width:"350px"},button:{tooltip:"details.layers.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'},alertName:"details.layers.title"},"details-items":{screens:{"results-screen":Q(Ze),"item-screen":Q(Dt)},style:{width:"350px"},button:{tooltip:"details.items.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'},alertName:"details.items.title"}},{i18n:{messages:Ft}}),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,i=>this._parseConfig(i));this.removed=()=>{if(e(),this.$iApi.panel.remove("details-items"),this.$iApi.panel.remove("details-layers"),this.$iApi.fixture.get("appbar")){const t=fe(this.$vApp.$pinia);t.removeButton("details-items"),t.removeButton("details-layers")}K(this.$vApp.$pinia).$reset()}}}export{jt as default};