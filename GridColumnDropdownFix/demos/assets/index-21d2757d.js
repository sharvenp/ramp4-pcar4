import{hi as de,hs as Z,gK as K,ht as ue,gL as Y,gM as J,hu as ce,h7 as he,gY as I,gN as _,h9 as me,hv as ne,gZ as ee,hj as O,g_ as te,gO as se,g$ as W,gQ as a,gR as U,gS as V,hp as j,h6 as y,gP as o,gX as r,gT as p,hc as ie,hd as le,h0 as R,gV as z,hf as oe,hw as pe,hx as ge,he as ve,hl as Q,h8 as ye}from"./main-603bdb2f.js";import{H as fe}from"./hilight-defs-1101779f.js";import{T as re}from"./toggle-switch-control-8c2a6c81.js";import{l as _e}from"./linkify-html.es-e51a510f.js";import"./preload-helper-388ac9d5.js";class be{id;name;template;componentId;constructor(e){const s={...typeof e=="string"?{id:e,template:"",name:""}:e};({template:this.template,id:this.id,name:this.name}=s)}}const X="details";class xe extends de{detailsStore=Z(this.$vApp.$pinia);get config(){return super.config}openDetails(e){this.detailsStore.payload=e,this.$iApi.panel.get("details-layers").isOpen||this.$iApi.panel.open({id:"details-layers"})}toggleFeature(e,s){const i=this.$iApi.panel.get("details-layers");i.isOpen&&this.$iApi.panel.close(i);const u=this.$iApi.panel.get("details-items"),t={result:{items:[{data:e.data,format:e.format,loaded:!0,loading:Promise.resolve()}],uid:e.uid,loading:Promise.resolve(),loaded:!0}},c=this.detailsStore.currentFeatureId,d=`${e.uid}-${e.data.OBJECTID}`;this.detailsStore.currentFeatureId=e.data?d:void 0,s===!1?this.$iApi.panel.close(u):u.isOpen?c!==d||s===!0?u.show({screen:"item-screen",props:t}):this.$iApi.panel.close(u):this.$iApi.panel.open({id:"details-items",screen:"item-screen",props:t})}_parseConfig(e){e&&e.templates&&(this.detailsStore.defaultTemplates=e.templates),this.handlePanelWidths(["details-items","details-layers"]);const s=this.getLayerFixtureConfigs(),i=[];Object.keys(s).forEach(t=>{i.push({id:t,name:s[t].name,template:s[t].template})});const u=i.map(t=>new be(t));this.detailsStore.properties=u.reduce((t,c)=>(t[c.id]=c,t),{}),this._validateItems()}_validateItems(){Object.values(this.detailsStore.properties).forEach(e=>{e.template in this.$vApp.$options.components&&(this.detailsStore.properties[e.id].componentId=e.template)})}async hilightDetailsItems(e,s){const i=e instanceof Array?e:[e],u=this.$iApi.fixture.get("hilight");if(u){const t=await u.getGraphicsByKey(X);await u.removeHilight(t);const c=Date.now();this.detailsStore.lastHilight=c;const d=await this.getHilightGraphics(i,s);this.detailsStore.lastHilight===c&&await u.addHilight(d)}}async removeDetailsHilight(){const e=this.$iApi.fixture.get("hilight");if(e){this.detailsStore.lastHilight=Date.now();const s=await e.getGraphicsByKey(X);await e.removeHilight(s)}}async reloadDetailsHilight(e,s){const i=e instanceof Array?e:[e],u=this.$iApi.fixture.get("hilight");if(u){const t=await this.getHilightGraphics(i,s);u.reloadHilight(t)}}async getHilightGraphics(e,s){const i=this.$iApi.geo.layer.getLayer(s),u=this.$iApi.fixture.get("hilight"),t=[];return i&&await Promise.all(e.map(async c=>{const d=c.data[i.oidField],k=await i.getGraphic(d,{getGeom:!0,getAttribs:!0,getStyle:!0});k.id=u.constructGraphicKey(X,s,d),t.push(k)})),t}onHilightToggle(e,s,i){e?(this.hilightDetailsItems(s,i),this.detailsStore.hilightToggle=!0):(this.removeDetailsHilight(),this.detailsStore.hilightToggle=!1)}hasHilighter(){const e=this.$iApi.fixture.get("hilight");return e&&e.hilightMode.mode!==fe.NONE}}const $e={key:0},we={class:"p-5"},Le=["onClick","disabled"],Ae=p("div",{class:"flex-auto"},null,-1),Ie={key:0,class:"px-5"},ke={key:1,class:"animate-spin spinner h-20 w-20 px-5"},He={key:1,class:"flex justify-center py-10 items-center"},Te=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Se={key:2},Ce=K({__name:"layers-screen",props:{panel:ue},setup(f){const{t:e}=Y(),s=J("iApi"),i=ce(),u=he(),t=Z(),c=I([]),d=I(""),k=I([]),v=I([]),A=_(()=>t.activeGreedy),P=_(()=>t.slowLoadingFlag),$=_(()=>t.payload),H=_(()=>t.properties),C=_(()=>u.mobileView),G=_(()=>u.getRemainingWidth),b=_(()=>c.value.map(l=>l.items.length).reduce((l,g)=>l+g,0)),D=l=>{if(l===void 0)return;const g=s.panel.get("details-items"),m=g.width||350,x=C.value||G.value<m&&!g.isOpen||l.length===0?0:l[0].requestTime;t.activeGreedy=x,t.slowLoadingFlag=!1,c.value=l,h(l),M(l)},M=l=>{const g=s.panel.get("details-items");if(d.value&&g.isOpen){const m=c.value.findIndex(x=>x.uid===d.value);if(m!==-1){const x=c.value[m];x.loading.then(()=>{x.requestTime===A.value&&(x.items.length>0?(t.activeGreedy=0,S(m)):T(l))})}else T(l)}else T(l);setTimeout(()=>{A.value!==0&&l[0].requestTime===A.value&&(t.slowLoadingFlag=!0)},500)},T=l=>{const g=l.map(x=>x.loading.then(()=>x.items.length>0?Promise.resolve(x):Promise.reject())),m=l.length===0?0:l[0].requestTime;Promise.any(g).then(x=>{if(x.requestTime!==A.value)return;const w=c.value.findIndex(N=>N.uid===x.uid);t.activeGreedy=0,w!==-1&&S(w)}).catch(()=>{m===A.value&&(d.value="",t.activeGreedy=0,F())})},h=l=>{Promise.all(l.map(g=>g.loading)).then(()=>{s.updateAlert(s.$i18n.t("details.layers.found",{numResults:b.value,numLayers:l.length}))})},F=()=>{const l=s.panel.get("details-items");l.isOpen&&l.close()},S=l=>{if($.value[l].items.length>0){t.activeGreedy=0;let g=s.panel.get("details-items"),m={result:$.value[l]};d.value=$.value[l].uid,g.isOpen?g.show({screen:"item-screen",props:m}):s.panel.open({id:"details-items",screen:"item-screen",props:m})}},E=l=>{const g=$.value[l];let m=i.getLayerByUid(g.uid);return m&&H.value[m.id]&&H.value[m.id].name?H.value[m.id].name:m?.name??""};return me(()=>{v.value.push(ne($,l=>{D(l)},{deep:!1,immediate:!0}))}),ee(()=>{k.value.push(s.event.on(O.PANEL_CLOSED,l=>{(l.id==="details-items"||l.id==="details-layers")&&(t.activeGreedy=0)})),v.value.push(ne(A,l=>{l===0&&(t.slowLoadingFlag=!1)}))}),te(()=>{k.value.forEach(l=>s.event.off(l)),v.value.forEach(l=>l())}),(l,g)=>{const m=se("panel-screen"),x=W("truncate");return a(),U(m,{panel:f.panel},{header:V(()=>[j(y(o(e)("details.layers.title")),1)]),content:V(()=>[o(A)===0?(a(),r("div",$e,[p("div",we,y(o(e)("details.layers.found",{numResults:o(b),numLayers:o($).length})),1),(a(!0),r(ie,null,le(c.value,(w,N)=>(a(),r("button",{type:"button",class:"w-full px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer disabled:cursor-default",key:w.uid,onClick:n=>w.loaded&&S(N),disabled:!(w.loaded&&w.items.length>0)},[R((a(),r("div",null,[j(y(E(N)||o(e)("details.layers.loading")),1)])),[[x]]),Ae,w.loaded?(a(),r("div",Ie,y(w.items.length),1)):(a(),r("div",ke))],8,Le))),128))])):o(P)?(a(),r("div",He,[Te,j(" "+y(o(e)("details.item.loading")),1)])):(a(),r("div",Se))]),_:1},8,["panel"])}}}),De={key:0},Me={key:0},Fe={key:0},Ee={key:0,class:"flex justify-between py-8 px-8 mb-8 bg-gray-100"},Ne={class:"p-8 font-bold break-words"},ze={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},Oe=["innerHTML"],je={key:1,class:"flex-initial py-5 px-10"},Ge={key:2,class:"animate-spin spinner h-20 w-20 px-5"},Be={key:1},Pe={key:1,class:"p-5"},Re={key:1,class:"flex justify-center py-10 items-center"},Ve=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),qe={key:2},Ze=K({__name:"result-screen",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},previousItemIndex:{type:Number,default:-1}},setup(f){const e=f,{t:s}=Y(),i=J("iApi"),u=Z(),t=_(()=>u.properties),c=_(()=>u.activeGreedy),d=_(()=>u.slowLoadingFlag),k=_(()=>i.geo.layer.getLayer(e.result.uid)?.nameField),v=_(()=>{const h=i.geo.layer.getLayer(e.result.uid);return h&&t.value[h.id]&&t.value[h.id].name?t.value[h.id].name:h?.name??""}),A=I([]),P=I(!1),$=I([]),H=I(i.fixture.get("details")),C=I(!0);ee(()=>{P.value=i.geo.layer.getLayer(e.result.uid)!==void 0,C.value=u.hilightToggle??C.value,C.value&&H.value.hilightDetailsItems(e.result.items,e.result.uid),i.updateAlert(i.$i18n.t("details.item.alert.show.list",{layerName:v.value})),$.value.push(i.event.on(O.LAYER_REMOVE,h=>{e.result.uid===h.uid&&e.panel.close()})),$.value.push(i.event.on(O.PANEL_CLOSED,h=>{h.id=="details-items"&&G()})),$.value.push(i.event.on(O.PANEL_MINIMIZED,h=>{h.id=="details-items"&&b()})),$.value.push(i.event.on(O.MAP_BASEMAPCHANGE,()=>{C.value&&H.value.reloadDetailsHilight(e.result.items,e.result.uid)}))}),te(()=>{$.value.forEach(h=>i.event.off(h))});const G=()=>{H.value.removeDetailsHilight(),u.hilightToggle=!0},b=()=>{H.value.removeDetailsHilight()},D=h=>{e.panel.show({screen:"item-screen",props:{result:e.result,itemIndex:h}})},M=(h,F)=>{const S=i.geo.layer.getLayer(e.result.uid);if(S===void 0){console.warn(`could not find layer for uid ${e.result.uid} during icon lookup`);return}const E=S.oidField;return S.getIcon(h[E]).then(l=>{A.value[F]!==l&&(A.value[F]=l)}),A.value[F]},T=h=>{C.value=h,H.value.onHilightToggle(h,e.result.items,e.result.uid)};return(h,F)=>{const S=se("panel-screen"),E=W("truncate"),l=W("focus-item");return a(),U(S,{panel:f.panel},{header:V(()=>[j(y(o(s)("details.items.title")),1)]),content:V(()=>[f.result.loaded&&o(c)===0?(a(),r("div",De,[P.value?(a(),r("div",Me,[f.result.items.length>0?(a(),r("div",Fe,[P.value?(a(),r("div",Ee,[p("div",Ne,y(o(v)),1)])):z("",!0),H.value.hasHilighter()?(a(),r("div",ze,[p("div",null,y(o(s)("details.togglehilight.title")),1),oe(re,{config:{value:C.value,disabled:!1},onToggled:T},null,8,["config"])])):z("",!0),(a(!0),r(ie,null,le(f.result.items,(g,m,x,w)=>{const N=[A.value[m]];if(w&&w.key===m&&pe(w,N))return w;const n=R((a(),r("button",{type:"button",class:"w-full flex px-16 py-10 text-md hover:bg-gray-200 cursor-pointer",key:m,onClick:L=>g.loaded&&D(m),disabled:!g.loaded},[g.loaded?(a(),r("span",{key:0,innerHTML:M(g.data,m),class:"flex-none symbologyIcon"},null,8,Oe)):z("",!0),g.loaded?R((a(),r("span",je,[j(y(o(k)?g.data[o(k)]:o(s)("details.result.default.name",[m+1])),1)])),[[E]]):z("",!0),g.loaded?z("",!0):(a(),r("span",Ge))],8,["onClick","disabled"])),[[l],[E]]);return n.memo=N,n},F,0),128))])):(a(),r("div",Be,y(o(s)("details.layers.results.empty")),1))])):(a(),r("div",Pe,y(o(s)("details.item.no.data")),1))])):o(d)?(a(),r("div",Re,[Ve,j(" "+y(o(s)("details.item.loading")),1)])):(a(),r("div",qe))]),_:1},8,["panel"])}}}),Ke={class:"inline font-bold"},We=p("span",{class:"flex-auto"},null,-1),Ue=["innerHTML"],Ye=K({__name:"esri-default",props:{fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(f){const e=f,s=J("iApi"),i=()=>{const t={};Object.assign(t,e.identifyData.data),t.Symbol!==void 0&&delete t.Symbol;let c={};return e.fields.forEach(d=>{c[d.name]=d.alias||d.name}),Object.keys(t).map(d=>{t[d]={value:typeof t[d]=="number"?s?.$i18n.n(t[d],"number"):t[d],alias:c[d]||d}}),t},u=t=>{if(!t)return t;if(t.trim().match(/\.(jpeg|jpg|gif|png)$/)||t.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${t}" />`;const c="underline text-blue-600 break-all",d=document.createElement("div");return d.innerHTML=t.trim(),d.firstElementChild?.tagName=="A"?(d.firstElementChild.className=c,d.innerHTML):_e(t,{className:c,target:"_blank",validate:{url:v=>/^https?:\/\//.test(v)}})};return(t,c)=>(a(),r("div",null,[(a(!0),r(ie,null,le(i(),(d,k,v)=>(a(),r("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:v},[p("span",Ke,y(d.alias),1),We,p("span",{class:"inline",innerHTML:u(d.value)},null,8,Ue)]))),128))]))}}),Je=["innerHTML"],Qe={key:1},Xe=K({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(f){const{t:e}=Y();return(s,i)=>f.identifyData?(a(),r("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:f.identifyData.data},null,8,Je)):(a(),r("div",Qe,y(o(e)("details.layers.results.empty")),1))}}),et={key:0},tt={key:0,class:"p-8 font-bold break-words mb-8 bg-gray-100"},st={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},it={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},lt={class:"flex justify-between"},at=["aria-label"],nt={class:"flex bg-gray-200 py-8 items-center"},ot=["content","aria-label","disabled"],rt=p("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[p("g",null,[p("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),dt=[rt],ut={class:"px-8"},ct=["content","aria-label","disabled"],ht=p("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[p("g",null,[p("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),mt=[ht],pt={key:3},gt={key:0},vt={key:0,class:"flex py-8"},yt=["innerHTML"],ft={key:1,class:"m-auto"},_t=p("div",{class:"animate-spin spinner h-20 w-20"},null,-1),bt=[_t],xt={class:"flex-grow my-auto text-lg px-8"},$t=["content","aria-label"],wt=p("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},[p("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),p("path",{d:"M0 0h24v24H0V0z",fill:"none"}),p("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1),Lt=[wt],At={key:1,class:"flex justify-center py-10 items-center"},It=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),kt={key:4,class:"p-5"},Ht={key:1,class:"flex justify-center py-10 items-center"},Tt=p("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),St={key:2},Ct=K({__name:"item-screen",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},itemIndex:{type:Number,default:0}},setup(f){const e=f,{t:s}=Y(),i=J("iApi"),u=Z(),t=_(()=>u.defaultTemplates),c=_(()=>u.properties),d=_(()=>u.activeGreedy),k=_(()=>u.slowLoadingFlag),v=_(()=>e.result.items[b.value]),A=_(()=>{const L=i.geo.layer.getLayer(e.result.uid)?.nameField;return L&&v.value.loaded?v.value.data[L]:i.$i18n.t("details.items.title")}),P=_(()=>{const n=i.geo.layer.getLayer(e.result.uid);return n&&c.value[n.id]&&c.value[n.id].name?c.value[n.id].name:n?.name??""}),$=_(()=>i.geo.layer.getLayer(e.result.uid)?.supportsFeatures??!1),H=_(()=>$.value?i.geo.layer.getLayer(e.result.uid)?.fields||[]:[]),C=_(()=>{const n=i.geo.layer.getLayer(e.result.uid);return n&&c.value[n.id]&&c.value[n.id].template?c.value[n.id].template:t.value&&t.value[v.value.format]?t.value[v.value.format]:$.value?Ye:Xe}),G=I(""),b=I(0),D=I(!1),M=I([]),T=I(i.fixture.get("details")),h=I(!0),F=()=>{T.value.removeDetailsHilight(),u.hilightToggle=!0},S=()=>{T.value.removeDetailsHilight()},E=()=>{b.value=e.itemIndex??0,D.value=!0,h.value=u.hilightToggle??h.value,l()},l=()=>{if(v.value.loaded)i.geo.layer.getLayer(e.result.uid)||(D.value=!1),x(),i.updateAlert(`${i.$i18n.t("details.item.alert.show.item",{itemName:A.value})} ${e.result.items.length>1?i.$i18n.t("details.item.count",[b.value+1,e.result.items.length]):""}`),h.value&&T.value.hilightDetailsItems(e.result.items[b.value],e.result.uid);else{const n=b.value;v.value.loading.then(()=>{n===b.value&&l()})}},g=()=>{e.panel.show({screen:"results-screen",props:{result:e.result,previousItemIndex:b.value}})},m=n=>{b.value+=n,l()},x=()=>{if(G.value="",!(v.value&&v.value.loaded))return;const n=i.geo.layer.getLayer(e.result.uid);if(n===void 0){console.warn(`could not find layer for uid ${e.result.uid} during icon lookup`);return}if(n.supportsFeatures){const L=n.oidField;let q=b.value;n.getIcon(v.value.data[L]).then(B=>{b.value===q&&(G.value=B)})}},w=()=>{const n=i.geo.layer.getLayer(e.result.uid);if(n===void 0){console.warn(`Could not find layer for uid ${e.result.uid} during zoom geometry lookup`);return}if(!v.value.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.");return}const L=v.value.data[n.oidField],q={getGeom:!0};n.getGraphic(L,q).then(B=>{B.geometry.invalid()?console.error(`Could not find graphic for objectid ${L}`):i.geo.map.zoomMapTo(B.geometry)}),i.updateAlert(i.$i18n.t("details.item.alert.zoom"))},N=n=>{h.value=n,T.value.onHilightToggle(n,e.result.items[b.value],e.result.uid)};return ee(()=>{E(),M.value.push(i.event.on(O.LAYER_REMOVE,n=>{e.result.uid===n.uid&&e.panel.close()})),M.value.push(i.event.on(O.PANEL_CLOSED,n=>{n.id=="details-items"&&F()})),M.value.push(i.event.on(O.PANEL_MINIMIZED,n=>{n.id=="details-items"&&S()})),M.value.push(i.event.on(O.MAP_BASEMAPCHANGE,()=>{h.value&&T.value.reloadDetailsHilight(e.result.items[b.value],e.result.uid)}))}),te(()=>{M.value.forEach(n=>i.event.off(n))}),ge(()=>{E()}),(n,L)=>{const q=se("panel-screen"),B=W("tippy");return a(),U(q,{panel:f.panel},{header:V(()=>[j(y(o(s)("details.items.title")),1)]),content:V(()=>[f.result.loaded&&o(d)===0?(a(),r("div",et,[D.value?(a(),r("div",tt,y(o(P)),1)):z("",!0),T.value.hasHilighter()?(a(),r("div",st,[p("div",null,y(o(s)("details.togglehilight.title")),1),oe(re,{config:{value:h.value,disabled:!1},onToggled:N},null,8,["config"])])):z("",!0),D.value&&f.result.items.length>1?(a(),r("div",it,[p("div",lt,[p("button",{type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":o(s)("details.item.see.list"),onClick:g},y(o(s)("details.item.see.list")),9,at),p("div",nt,[R((a(),r("button",{type:"button",content:o(s)("details.item.previous.item"),onClick:L[0]||(L[0]=ae=>m(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":o(s)("details.item.previous.item"),disabled:b.value===0},dt,8,ot)),[[B,{placement:"top"}]]),p("span",ut,y(o(s)("details.item.count",[b.value+1,f.result.items.length])),1),R((a(),r("button",{type:"button",content:o(s)("details.item.next.item"),onClick:L[1]||(L[1]=ae=>m(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":o(s)("details.item.next.item"),disabled:b.value===f.result.items.length-1},mt,8,ct)),[[B,{placement:"top"}]])])])])):z("",!0),D.value?(a(),r("div",pt,[o(v).loaded?(a(),r("div",gt,[o($)?(a(),r("div",vt,[G.value?(a(),r("span",{key:0,class:"flex-none m-auto symbologyIcon",innerHTML:G.value},null,8,yt)):(a(),r("div",ft,bt)),p("span",xt,y(o(A)),1),R((a(),r("button",{type:"button",content:o(s)("details.item.zoom"),"aria-label":o(s)("details.item.zoom"),onClick:L[2]||(L[2]=ae=>w()),class:"text-gray-600 m-8"},Lt,8,$t)),[[B,{placement:"bottom"}]])])):z("",!0),(a(),U(ve(o(C)),{identifyData:o(v),fields:o(H)},null,8,["identifyData","fields"]))])):(a(),r("div",At,[It,j(" "+y(o(s)("details.item.loading")),1)]))])):(a(),r("div",kt,y(o(s)("details.item.no.data")),1))])):o(k)?(a(),r("div",Ht,[Tt,j(" "+y(o(s)("details.item.loading")),1)])):(a(),r("div",St))]),_:1},8,["panel"])}}});const Dt={en:{"details.layers.title":"Identified Layers","details.layers.found":"Found {numResults} results in {numLayers} layers","details.layers.loading":"The layer is loading...","details.layers.results.empty":"No results found for the selected layer.","details.result.default.name":"Identify Item {0}","details.items.title":"Details","details.item.see.list":"See List","details.item.zoom":"Zoom to feature","details.item.previous.item":"Previous item","details.item.next.item":"Next item","details.item.count":"{0} of {1}","details.item.loading":"Loading results...","details.item.no.data":"No data to show because the layer has been removed","details.item.alert.zoom":"Zoomed into feature","details.item.alert.show.item":"Showing result {itemName}","details.item.alert.show.list":"Showing all results for {layerName}","details.togglehilight.title":"Toggle Highlight"},fr:{"details.layers.title":"Couches désignées","details.layers.found":"{numResults} résultats trouvés dans {numLayers} couches","details.layers.loading":"La couche est en cours de chargement...","details.layers.results.empty":"Aucun résultat trouvé pour la couche sélectionnée.","details.result.default.name":"Désigner l'élément {0}","details.items.title":"Détails","details.item.see.list":"Voir la liste","details.item.zoom":"Zoom à l'élément","details.item.previous.item":"Élément précédent","details.item.next.item":"Élément suivant","details.item.count":"{0} de {1}","details.item.loading":"Chargement des résultats...","details.item.no.data":"[fr] Aucune donnée à afficher","details.item.alert.zoom":"Zoom sur la caractéristique","details.item.alert.show.item":"Affichage du résultat {itemName}","details.item.alert.show.list":"Affichage de tous les résultats pour {layerName}","details.togglehilight.title":"Basculer vers l'élément principal"}};class Ot extends xe{async added(){this.$iApi.panel.register({"details-layers":{screens:{"layers-screen":Q(Ce)},style:{width:"350px"},button:{tooltip:"details.layers.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'},alertName:"details.layers.title"},"details-items":{screens:{"results-screen":Q(Ze),"item-screen":Q(Ct)},style:{width:"350px"},button:{tooltip:"details.items.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'},alertName:"details.items.title"}},{i18n:{messages:Dt}}),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s));this.removed=()=>{if(e(),this.$iApi.panel.remove("details-items"),this.$iApi.panel.remove("details-layers"),this.$iApi.fixture.get("appbar")){const i=ye(this.$vApp.$pinia);i.removeButton("details-items"),i.removeButton("details-layers")}Z(this.$vApp.$pinia).$reset()}}}export{Ot as default};
