import{hi as de,hs as Z,gK as K,ht as ue,gL as Y,gM as J,hu as ce,h7 as he,gY as k,gN as _,h9 as me,hv as ne,gZ as ee,hj as O,g_ as te,gO as se,g$ as W,gQ as a,gR as U,gS as V,hp as j,h6 as y,gP as n,gX as o,gT as p,hc as ie,hd as le,h0 as R,gV as z,hf as oe,hw as pe,hx as ge,he as ve,hl as Q,h8 as ye}from"./main-917dc16a.js";import{H as fe}from"./hilight-defs-1101779f.js";import{T as re}from"./toggle-switch-control-3242d587.js";import{l as _e}from"./linkify-html.es-e51a510f.js";import"./preload-helper-388ac9d5.js";class be{id;name;template;componentId;constructor(e){const s={...typeof e=="string"?{id:e,template:"",name:""}:e};({template:this.template,id:this.id,name:this.name}=s)}}const X="details";class xe extends de{detailsStore=Z(this.$vApp.$pinia);get config(){return super.config}openDetails(e){this.detailsStore.payload=e,this.$iApi.panel.get("details-layers").isOpen||this.$iApi.panel.open({id:"details-layers"})}toggleFeature(e,s){const i=this.$iApi.panel.get("details-layers");i.isOpen&&this.$iApi.panel.close(i);const u=this.$iApi.panel.get("details-items"),t={result:{items:[{data:e.data,format:e.format,loaded:!0,loading:Promise.resolve()}],uid:e.uid,loading:Promise.resolve(),loaded:!0}},c=this.detailsStore.currentFeatureId,d=`${e.uid}-${e.data.OBJECTID}`;this.detailsStore.currentFeatureId=e.data?d:void 0,s===!1?this.$iApi.panel.close(u):u.isOpen?c!==d||s===!0?u.show({screen:"item-screen",props:t}):this.$iApi.panel.close(u):this.$iApi.panel.open({id:"details-items",screen:"item-screen",props:t})}_parseConfig(e){e&&e.templates&&(this.detailsStore.defaultTemplates=e.templates),this.handlePanelWidths(["details-items","details-layers"]);const s=this.getLayerFixtureConfigs(),i=[];Object.keys(s).forEach(t=>{i.push({id:t,name:s[t].name,template:s[t].template})});const u=i.map(t=>new be(t));this.detailsStore.properties=u.reduce((t,c)=>(t[c.id]=c,t),{}),this._validateItems()}_validateItems(){Object.values(this.detailsStore.properties).forEach(e=>{e.template in this.$vApp.$options.components&&(this.detailsStore.properties[e.id].componentId=e.template)})}async hilightDetailsItems(e,s){const i=e instanceof Array?e:[e],u=this.$iApi.fixture.get("hilight");if(u){const t=await u.getGraphicsByKey(X);await u.removeHilight(t);const c=Date.now();this.detailsStore.lastHilight=c;const d=await this.getHilightGraphics(i,s);this.detailsStore.lastHilight===c&&await u.addHilight(d)}}async removeDetailsHilight(){const e=this.$iApi.fixture.get("hilight");if(e){this.detailsStore.lastHilight=Date.now();const s=await e.getGraphicsByKey(X);await e.removeHilight(s)}}async reloadDetailsHilight(e,s){const i=e instanceof Array?e:[e],u=this.$iApi.fixture.get("hilight");if(u){const t=await this.getHilightGraphics(i,s);u.reloadHilight(t)}}async getHilightGraphics(e,s){const i=this.$iApi.geo.layer.getLayer(s),u=this.$iApi.fixture.get("hilight"),t=[];return i&&await Promise.all(e.map(async c=>{const d=c.data[i.oidField],I=await i.getGraphic(d,{getGeom:!0,getAttribs:!0,getStyle:!0});I.id=u.constructGraphicKey(X,s,d),t.push(I)})),t}onHilightToggle(e,s,i){e?(this.hilightDetailsItems(s,i),this.detailsStore.hilightToggle=!0):(this.removeDetailsHilight(),this.detailsStore.hilightToggle=!1)}hasHilighter(){const e=this.$iApi.fixture.get("hilight");return e&&e.hilightMode.mode!==fe.NONE}}const $e={key:0},we={class:"p-5"},Le=["onClick","disabled"],Ae=p("div",{class:"flex-auto"},null,-1),ke={key:0,class:"px-5"},Ie={key:1,class:"px-5"},He={key:2,class:"animate-spin spinner h-20 w-20 px-5"},Te={key:1,class:"flex justify-center py-10 items-center"},Se=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ce={key:2},De=K({__name:"layers-screen",props:{panel:ue},setup(f){const{t:e}=Y(),s=J("iApi"),i=ce(),u=he(),t=Z(),c=k([]),d=k(""),I=k([]),v=k([]),A=_(()=>t.activeGreedy),P=_(()=>t.slowLoadingFlag),w=_(()=>t.payload),H=_(()=>t.properties),C=_(()=>u.mobileView),G=_(()=>u.getRemainingWidth),b=_(()=>c.value.map(l=>l.items.length).reduce((l,g)=>l+g,0)),D=l=>{if(l===void 0)return;const g=s.panel.get("details-items"),m=g.width||350,x=C.value||G.value<m&&!g.isOpen||l.length===0?0:l[0].requestTime;t.activeGreedy=x,t.slowLoadingFlag=!1,c.value=l,h(l),M(l)},M=l=>{const g=s.panel.get("details-items");if(d.value&&g.isOpen){const m=c.value.findIndex(x=>x.uid===d.value);if(m!==-1){const x=c.value[m];x.loading.then(()=>{x.requestTime===A.value&&(x.items.length>0?(t.activeGreedy=0,S(m)):T(l))})}else T(l)}else T(l);setTimeout(()=>{A.value!==0&&l[0].requestTime===A.value&&(t.slowLoadingFlag=!0)},500)},T=l=>{const g=l.map(x=>x.loading.then(()=>x.items.length>0?Promise.resolve(x):Promise.reject())),m=l.length===0?0:l[0].requestTime;Promise.any(g).then(x=>{if(x.requestTime!==A.value)return;const $=c.value.findIndex(N=>N.uid===x.uid);t.activeGreedy=0,$!==-1&&S($)}).catch(()=>{m===A.value&&(d.value="",t.activeGreedy=0,E())})},h=l=>{Promise.all(l.map(g=>g.loading)).then(()=>{s.updateAlert(s.$i18n.t("details.layers.found",{numResults:b.value,numLayers:l.length}))})},E=()=>{const l=s.panel.get("details-items");l.isOpen&&l.close()},S=l=>{if(w.value[l].items.length>0){t.activeGreedy=0;let g=s.panel.get("details-items"),m={result:w.value[l]};d.value=w.value[l].uid,g.isOpen?g.show({screen:"item-screen",props:m}):s.panel.open({id:"details-items",screen:"item-screen",props:m})}},F=l=>{const g=w.value[l];let m=i.getLayerByUid(g.uid);return m&&H.value[m.id]&&H.value[m.id].name?H.value[m.id].name:m?.name??""};return me(()=>{v.value.push(ne(w,l=>{D(l)},{deep:!1,immediate:!0}))}),ee(()=>{I.value.push(s.event.on(O.PANEL_CLOSED,l=>{(l.id==="details-items"||l.id==="details-layers")&&(t.activeGreedy=0)})),v.value.push(ne(A,l=>{l===0&&(t.slowLoadingFlag=!1)}))}),te(()=>{I.value.forEach(l=>s.event.off(l)),v.value.forEach(l=>l())}),(l,g)=>{const m=se("panel-screen"),x=W("truncate");return a(),U(m,{panel:f.panel},{header:V(()=>[j(y(n(e)("details.layers.title")),1)]),content:V(()=>[n(A)===0?(a(),o("div",$e,[p("div",we,y(n(e)("details.layers.found",{numResults:n(b),numLayers:n(w).length})),1),(a(!0),o(ie,null,le(c.value,($,N)=>(a(),o("button",{type:"button",class:"w-full px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer disabled:cursor-default",key:$.uid,onClick:r=>$.loaded&&S(N),disabled:!($.loaded&&$.items.length>0)},[R((a(),o("div",null,[j(y(F(N)||n(e)("details.layers.loading")),1)])),[[x]]),Ae,$.loaded?(a(),o("div",ke,y($.items.length),1)):$.errored?(a(),o("div",Ie,y(n(e)("details.layers.error")),1)):(a(),o("div",He))],8,Le))),128))])):n(P)?(a(),o("div",Te,[Se,j(" "+y(n(e)("details.item.loading")),1)])):(a(),o("div",Ce))]),_:1},8,["panel"])}}}),Me={key:0},Ee={key:0},Fe={key:0},Ne={key:0,class:"flex justify-between py-8 px-8 mb-8 bg-gray-100"},ze={class:"p-8 font-bold break-words"},Oe={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},je=["innerHTML"],Ge={key:1,class:"flex-initial py-5 px-10"},Be={key:2,class:"animate-spin spinner h-20 w-20 px-5"},Pe={key:1},Re={key:1,class:"p-5"},Ve={key:1,class:"flex justify-center py-10 items-center"},qe=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ze={key:2},Ke=K({__name:"result-screen",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},previousItemIndex:{type:Number,default:-1}},setup(f){const e=f,{t:s}=Y(),i=J("iApi"),u=Z(),t=_(()=>u.properties),c=_(()=>u.activeGreedy),d=_(()=>u.slowLoadingFlag),I=_(()=>i.geo.layer.getLayer(e.result.uid)?.nameField),v=_(()=>{const h=i.geo.layer.getLayer(e.result.uid);return h&&t.value[h.id]&&t.value[h.id].name?t.value[h.id].name:h?.name??""}),A=k([]),P=k(!1),w=k([]),H=k(i.fixture.get("details")),C=k(!0);ee(()=>{P.value=i.geo.layer.getLayer(e.result.uid)!==void 0,C.value=u.hilightToggle??C.value,C.value&&H.value.hilightDetailsItems(e.result.items,e.result.uid),i.updateAlert(i.$i18n.t("details.item.alert.show.list",{layerName:v.value})),w.value.push(i.event.on(O.LAYER_REMOVE,h=>{e.result.uid===h.uid&&e.panel.close()})),w.value.push(i.event.on(O.PANEL_CLOSED,h=>{h.id=="details-items"&&G()})),w.value.push(i.event.on(O.PANEL_MINIMIZED,h=>{h.id=="details-items"&&b()})),w.value.push(i.event.on(O.MAP_BASEMAPCHANGE,()=>{C.value&&H.value.reloadDetailsHilight(e.result.items,e.result.uid)}))}),te(()=>{w.value.forEach(h=>i.event.off(h))});const G=()=>{H.value.removeDetailsHilight(),u.hilightToggle=!0},b=()=>{H.value.removeDetailsHilight()},D=h=>{e.panel.show({screen:"item-screen",props:{result:e.result,itemIndex:h}})},M=(h,E)=>{const S=i.geo.layer.getLayer(e.result.uid);if(S===void 0){console.warn(`could not find layer for uid ${e.result.uid} during icon lookup`);return}const F=S.oidField;return S.getIcon(h[F]).then(l=>{A.value[E]!==l&&(A.value[E]=l)}),A.value[E]},T=h=>{C.value=h,H.value.onHilightToggle(h,e.result.items,e.result.uid)};return(h,E)=>{const S=se("panel-screen"),F=W("truncate"),l=W("focus-item");return a(),U(S,{panel:f.panel},{header:V(()=>[j(y(n(s)("details.items.title")),1)]),content:V(()=>[f.result.loaded&&n(c)===0?(a(),o("div",Me,[P.value?(a(),o("div",Ee,[f.result.items.length>0?(a(),o("div",Fe,[P.value?(a(),o("div",Ne,[p("div",ze,y(n(v)),1)])):z("",!0),H.value.hasHilighter()?(a(),o("div",Oe,[p("div",null,y(n(s)("details.togglehilight.title")),1),oe(re,{config:{value:C.value,disabled:!1},onToggled:T},null,8,["config"])])):z("",!0),(a(!0),o(ie,null,le(f.result.items,(g,m,x,$)=>{const N=[A.value[m]];if($&&$.key===m&&pe($,N))return $;const r=R((a(),o("button",{type:"button",class:"w-full flex px-16 py-10 text-md hover:bg-gray-200 cursor-pointer",key:m,onClick:L=>g.loaded&&D(m),disabled:!g.loaded},[g.loaded?(a(),o("span",{key:0,innerHTML:M(g.data,m),class:"flex-none symbologyIcon"},null,8,je)):z("",!0),g.loaded?R((a(),o("span",Ge,[j(y(n(I)?g.data[n(I)]:n(s)("details.result.default.name",[m+1])),1)])),[[F]]):z("",!0),g.loaded?z("",!0):(a(),o("span",Be))],8,["onClick","disabled"])),[[l],[F]]);return r.memo=N,r},E,0),128))])):(a(),o("div",Pe,y(n(s)("details.layers.results.empty")),1))])):(a(),o("div",Re,y(n(s)("details.item.no.data")),1))])):n(d)?(a(),o("div",Ve,[qe,j(" "+y(n(s)("details.item.loading")),1)])):(a(),o("div",Ze))]),_:1},8,["panel"])}}}),We={class:"inline font-bold"},Ue=p("span",{class:"flex-auto"},null,-1),Ye=["innerHTML"],Je=K({__name:"esri-default",props:{fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(f){const e=f,s=J("iApi"),i=()=>{const t={};Object.assign(t,e.identifyData.data),t.Symbol!==void 0&&delete t.Symbol;let c={};return e.fields.forEach(d=>{c[d.name]=d.alias||d.name}),Object.keys(t).map(d=>{t[d]={value:typeof t[d]=="number"?s?.$i18n.n(t[d],"number"):t[d],alias:c[d]||d}}),t},u=t=>{if(!t)return t;if(t.trim().match(/\.(jpeg|jpg|gif|png)$/)||t.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${t}" />`;const c="underline text-blue-600 break-all",d=document.createElement("div");return d.innerHTML=t.trim(),d.firstElementChild?.tagName=="A"?(d.firstElementChild.className=c,d.innerHTML):_e(t,{className:c,target:"_blank",validate:{url:v=>/^https?:\/\//.test(v)}})};return(t,c)=>(a(),o("div",null,[(a(!0),o(ie,null,le(i(),(d,I,v)=>(a(),o("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:v},[p("span",We,y(d.alias),1),Ue,p("span",{class:"inline",innerHTML:u(d.value)},null,8,Ye)]))),128))]))}}),Qe=["innerHTML"],Xe={key:1},et=K({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(f){const{t:e}=Y();return(s,i)=>f.identifyData?(a(),o("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:f.identifyData.data},null,8,Qe)):(a(),o("div",Xe,y(n(e)("details.layers.results.empty")),1))}}),tt={key:0},st={key:0,class:"p-8 font-bold break-words mb-8 bg-gray-100"},it={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},lt={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},at={class:"flex justify-between"},nt=["aria-label"],ot={class:"flex bg-gray-200 py-8 items-center"},rt=["content","aria-label","disabled"],dt=p("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[p("g",null,[p("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),ut=[dt],ct={class:"px-8"},ht=["content","aria-label","disabled"],mt=p("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[p("g",null,[p("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),pt=[mt],gt={key:3},vt={key:0},yt={key:0,class:"flex py-8"},ft=["innerHTML"],_t={key:1,class:"m-auto"},bt=p("div",{class:"animate-spin spinner h-20 w-20"},null,-1),xt=[bt],$t={class:"flex-grow my-auto text-lg px-8"},wt=["content","aria-label"],Lt=p("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},[p("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),p("path",{d:"M0 0h24v24H0V0z",fill:"none"}),p("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1),At=[Lt],kt={key:1,class:"flex justify-center py-10 items-center"},It=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ht={key:4,class:"p-5"},Tt={key:1,class:"flex justify-center py-10 items-center"},St=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Ct={key:2},Dt=K({__name:"item-screen",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},itemIndex:{type:Number,default:0}},setup(f){const e=f,{t:s}=Y(),i=J("iApi"),u=Z(),t=_(()=>u.defaultTemplates),c=_(()=>u.properties),d=_(()=>u.activeGreedy),I=_(()=>u.slowLoadingFlag),v=_(()=>e.result.items[b.value]),A=_(()=>{const L=i.geo.layer.getLayer(e.result.uid)?.nameField;return L&&v.value.loaded?v.value.data[L]:i.$i18n.t("details.items.title")}),P=_(()=>{const r=i.geo.layer.getLayer(e.result.uid);return r&&c.value[r.id]&&c.value[r.id].name?c.value[r.id].name:r?.name??""}),w=_(()=>i.geo.layer.getLayer(e.result.uid)?.supportsFeatures??!1),H=_(()=>w.value?i.geo.layer.getLayer(e.result.uid)?.fields||[]:[]),C=_(()=>{const r=i.geo.layer.getLayer(e.result.uid);return r&&c.value[r.id]&&c.value[r.id].template?c.value[r.id].template:t.value&&t.value[v.value.format]?t.value[v.value.format]:w.value?Je:et}),G=k(""),b=k(0),D=k(!1),M=k([]),T=k(i.fixture.get("details")),h=k(!0),E=()=>{T.value.removeDetailsHilight(),u.hilightToggle=!0},S=()=>{T.value.removeDetailsHilight()},F=()=>{b.value=e.itemIndex??0,D.value=!0,h.value=u.hilightToggle??h.value,l()},l=()=>{if(v.value.loaded)i.geo.layer.getLayer(e.result.uid)||(D.value=!1),x(),i.updateAlert(`${i.$i18n.t("details.item.alert.show.item",{itemName:A.value})} ${e.result.items.length>1?i.$i18n.t("details.item.count",[b.value+1,e.result.items.length]):""}`),h.value&&T.value.hilightDetailsItems(e.result.items[b.value],e.result.uid);else{const r=b.value;v.value.loading.then(()=>{r===b.value&&l()})}},g=()=>{e.panel.show({screen:"results-screen",props:{result:e.result,previousItemIndex:b.value}})},m=r=>{b.value+=r,l()},x=()=>{if(G.value="",!(v.value&&v.value.loaded))return;const r=i.geo.layer.getLayer(e.result.uid);if(r===void 0){console.warn(`could not find layer for uid ${e.result.uid} during icon lookup`);return}if(r.supportsFeatures){const L=r.oidField;let q=b.value;r.getIcon(v.value.data[L]).then(B=>{b.value===q&&(G.value=B)})}},$=()=>{const r=i.geo.layer.getLayer(e.result.uid);if(r===void 0){console.warn(`Could not find layer for uid ${e.result.uid} during zoom geometry lookup`);return}if(!v.value.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.");return}const L=v.value.data[r.oidField],q={getGeom:!0};r.getGraphic(L,q).then(B=>{B.geometry.invalid()?console.error(`Could not find graphic for objectid ${L}`):i.geo.map.zoomMapTo(B.geometry)}),i.updateAlert(i.$i18n.t("details.item.alert.zoom"))},N=r=>{h.value=r,T.value.onHilightToggle(r,e.result.items[b.value],e.result.uid)};return ee(()=>{F(),M.value.push(i.event.on(O.LAYER_REMOVE,r=>{e.result.uid===r.uid&&e.panel.close()})),M.value.push(i.event.on(O.PANEL_CLOSED,r=>{r.id=="details-items"&&E()})),M.value.push(i.event.on(O.PANEL_MINIMIZED,r=>{r.id=="details-items"&&S()})),M.value.push(i.event.on(O.MAP_BASEMAPCHANGE,()=>{h.value&&T.value.reloadDetailsHilight(e.result.items[b.value],e.result.uid)}))}),te(()=>{M.value.forEach(r=>i.event.off(r))}),ge(()=>{F()}),(r,L)=>{const q=se("panel-screen"),B=W("tippy");return a(),U(q,{panel:f.panel},{header:V(()=>[j(y(n(s)("details.items.title")),1)]),content:V(()=>[f.result.loaded&&n(d)===0?(a(),o("div",tt,[D.value?(a(),o("div",st,y(n(P)),1)):z("",!0),T.value.hasHilighter()?(a(),o("div",it,[p("div",null,y(n(s)("details.togglehilight.title")),1),oe(re,{config:{value:h.value,disabled:!1},onToggled:N},null,8,["config"])])):z("",!0),D.value&&f.result.items.length>1?(a(),o("div",lt,[p("div",at,[p("button",{type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":n(s)("details.item.see.list"),onClick:g},y(n(s)("details.item.see.list")),9,nt),p("div",ot,[R((a(),o("button",{type:"button",content:n(s)("details.item.previous.item"),onClick:L[0]||(L[0]=ae=>m(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":n(s)("details.item.previous.item"),disabled:b.value===0},ut,8,rt)),[[B,{placement:"top"}]]),p("span",ct,y(n(s)("details.item.count",[b.value+1,f.result.items.length])),1),R((a(),o("button",{type:"button",content:n(s)("details.item.next.item"),onClick:L[1]||(L[1]=ae=>m(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":n(s)("details.item.next.item"),disabled:b.value===f.result.items.length-1},pt,8,ht)),[[B,{placement:"top"}]])])])])):z("",!0),D.value?(a(),o("div",gt,[n(v).loaded?(a(),o("div",vt,[n(w)?(a(),o("div",yt,[G.value?(a(),o("span",{key:0,class:"flex-none m-auto symbologyIcon",innerHTML:G.value},null,8,ft)):(a(),o("div",_t,xt)),p("span",$t,y(n(A)),1),R((a(),o("button",{type:"button",content:n(s)("details.item.zoom"),"aria-label":n(s)("details.item.zoom"),onClick:L[2]||(L[2]=ae=>$()),class:"text-gray-600 m-8"},At,8,wt)),[[B,{placement:"bottom"}]])])):z("",!0),(a(),U(ve(n(C)),{identifyData:n(v),fields:n(H)},null,8,["identifyData","fields"]))])):(a(),o("div",kt,[It,j(" "+y(n(s)("details.item.loading")),1)]))])):(a(),o("div",Ht,y(n(s)("details.item.no.data")),1))])):n(I)?(a(),o("div",Tt,[St,j(" "+y(n(s)("details.item.loading")),1)])):(a(),o("div",Ct))]),_:1},8,["panel"])}}});const Mt={en:{"details.layers.title":"Identified Layers","details.layers.found":"Found {numResults} results in {numLayers} layers","details.layers.loading":"The layer is loading...","details.layers.error":"Error","details.layers.results.empty":"No results found for the selected layer.","details.result.default.name":"Identify Item {0}","details.items.title":"Details","details.item.see.list":"See List","details.item.zoom":"Zoom to feature","details.item.previous.item":"Previous item","details.item.next.item":"Next item","details.item.count":"{0} of {1}","details.item.loading":"Loading results...","details.item.no.data":"No data to show because the layer has been removed","details.item.alert.zoom":"Zoomed into feature","details.item.alert.show.item":"Showing result {itemName}","details.item.alert.show.list":"Showing all results for {layerName}","details.togglehilight.title":"Toggle Highlight"},fr:{"details.layers.title":"Couches désignées","details.layers.found":"{numResults} résultats trouvés dans {numLayers} couches","details.layers.loading":"La couche est en cours de chargement...","details.layers.error":"Erreur","details.layers.results.empty":"Aucun résultat trouvé pour la couche sélectionnée.","details.result.default.name":"Désigner l'élément {0}","details.items.title":"Détails","details.item.see.list":"Voir la liste","details.item.zoom":"Zoom à l'élément","details.item.previous.item":"Élément précédent","details.item.next.item":"Élément suivant","details.item.count":"{0} de {1}","details.item.loading":"Chargement des résultats...","details.item.no.data":"[fr] Aucune donnée à afficher","details.item.alert.zoom":"Zoom sur la caractéristique","details.item.alert.show.item":"Affichage du résultat {itemName}","details.item.alert.show.list":"Affichage de tous les résultats pour {layerName}","details.togglehilight.title":"Basculer vers l'élément principal"}};class jt extends xe{async added(){this.$iApi.panel.register({"details-layers":{screens:{"layers-screen":Q(De)},style:{width:"350px"},button:{tooltip:"details.layers.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'},alertName:"details.layers.title"},"details-items":{screens:{"results-screen":Q(Ke),"item-screen":Q(Dt)},style:{width:"350px"},button:{tooltip:"details.items.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'},alertName:"details.items.title"}},{i18n:{messages:Mt}}),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s));this.removed=()=>{if(e(),this.$iApi.panel.remove("details-items"),this.$iApi.panel.remove("details-layers"),this.$iApi.fixture.get("appbar")){const i=ye(this.$vApp.$pinia);i.removeButton("details-items"),i.removeButton("details-layers")}Z(this.$vApp.$pinia).$reset()}}}export{jt as default};
