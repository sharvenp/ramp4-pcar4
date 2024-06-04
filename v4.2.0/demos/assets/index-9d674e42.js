import{jL as I,hY as O,jM as u,gG as b,jN as P,i0 as V,jO as R,hL as S,jP as T,bZ as k,c3 as z,c4 as F,c5 as j,fp as f,c6 as d,gL as x,fr as H,gM as m,fq as N,fs as W,c8 as q,c9 as y,ch as g,fo as l,fn as D,cg as Y,ce as Z,i2 as E,hv as U,hw as X,hx as J}from"./main-66d02e41.js";import"./preload-helper-388ac9d5.js";class K extends I{overviewGraphicLayer;overviewmapStore;constructor(e){super(e),this.overviewGraphicLayer=this.$iApi.geo.layer.createLayer({id:"RampOverviewGraphic",layerType:O.GRAPHIC,url:"",cosmetic:!0}),this.overviewmapStore=u(this.$vApp.$pinia)}createMapView(e){if(!e)throw new Error("Attempted to create overview map view without a basemap");const a=typeof e=="string"?this.findBasemap(e):e;this.applyBasemap(a),this._rampExtentSet=this.$iApi.geo.map.getExtentSet().clone(),this._rampSR=this._rampExtentSet.sr.clone();const i=this.overviewmapStore.expandFactor;this.esriView=b(new P({map:this.esriMap,container:this._targetDiv,constraints:{rotationEnabled:!1},spatialReference:this._rampSR.toESRI(),extent:this.$iApi.geo.map.getExtent().toESRI().expand(i)})),this.esriView.ui.components=[],this.handlers.push({type:"mouse-wheel",handler:this.esriView.on("mouse-wheel",t=>{t.stopPropagation()})}),this.handlers.push({type:"double-click",handler:this.esriView.on("double-click",t=>{t.stopPropagation()})}),this.handlers.push({type:"key-down",handler:this.esriView.on("key-down",t=>{t.stopPropagation()})}),this.handlers.push({type:"key-up",handler:this.esriView.on("key-up",t=>{t.stopPropagation()})}),this.handlers.push({type:"drag",handler:this.esriView.on("drag",t=>{t.stopPropagation(),this.mapDrag(t)})}),this.esriView.container.addEventListener("touchmove",t=>{t.preventDefault()}),this.esriView.when(()=>{this._viewPromise.resolveMe(),this.created=!0})}async addMapGraphicLayer(){if(!this.esriMap){this.noMapErr();return}const e=new V(this.$iApi.geo.map.getExtent(),"overview-graphic"),a=this.overviewmapStore.borderColour??"#FF0000",i=this.overviewmapStore.borderWidth??1,t=this.overviewmapStore.areaColour??"#000000",s=this.overviewmapStore.areaOpacity??.25,n=`${t}${Math.round(s*255).toString(16)}`;e.style=new R({fill:{colour:n},outline:{colour:a,width:i}}),await this.overviewGraphicLayer.initiate(),await this.overviewGraphicLayer.addGraphic(e),this.esriMap?.add(this.overviewGraphicLayer.esriLayer)}removeMapGraphicLayer(){if(!this.esriMap){this.noMapErr();return}if(!this.overviewGraphicLayer.esriLayer)throw new Error("Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.");this.overviewGraphicLayer.removeGraphic(),this.overviewGraphicLayer.terminate(),this.esriMap.remove(this.overviewGraphicLayer.esriLayer)}destroyMapView(){this.esriView?.container.removeEventListener("touchmove",e=>{e.preventDefault()}),this.removeMapGraphicLayer(),super.destroyMapView()}findBasemap(e){const a=this._basemapStore.find(i=>i.id===e);if(a)return a;{const t=S(this.$vApp.$pinia).config.map;if(t){const s=t.basemaps.find(n=>n.id===e);if(s)return new T(s)}}throw new Error(`Invalid basemap id requested: ${e}`)}setBasemap(e){if(!this.esriView||!this.esriMap)return this.noMapErr(),!1;const a=this.findBasemap(e),t=(this.getCurrentBasemapId()?this.findBasemap(this.getCurrentBasemapId()):void 0)?.tileSchemaId!==a.tileSchemaId;return t?(this.destroyMapView(),this.createMapView(a),this.addMapGraphicLayer()):this.applyBasemap(a),t}startExtent=null;async mapDrag(e){if(e.native.pointerType==="mouse"){if(e.action==="start")await this.cursorHitTest(e)&&(this.startExtent=b(this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry));else if(this.startExtent){const a=this.esriView.toMap(e.origin),i=this.esriView.toMap({x:e.x,y:e.y}),t=this.startExtent.clone().offset(i.x-a.x,i.y-a.y,0);this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry=t,e.action==="end"&&(this.$iApi.geo.map.zoomMapTo(this.$iApi.geo.geom.geomEsriToRamp(t),void 0,!1),this.startExtent=null)}}}updateOverview(e){const a=this.overviewmapStore.expandFactor,i=this.zoomMapTo(e.expand(a),void 0,!1),t=this.overviewGraphicLayer.getLocalGraphic("overview-graphic");return this.overviewGraphicLayer.removeGraphic(t),t.geometry=e,this.overviewGraphicLayer.addGraphic(t),i}async cursorHitTest(e){return(await this.esriView.hitTest(e)).results.length>0}}class Q extends k{_parseConfig(e){const a=u(this.$vApp.$pinia);a.basemaps=e?.basemaps||{},a.mapConfig.basemaps=e?Object.values(e.basemaps):[],a.startMinimized=e?.startMinimized??!0,a.expandFactor=e?.expandFactor??1.5,a.borderColour=e?.borderColour??"#FF0000",a.borderWidth=e?.borderWidth??1,a.areaColour=e?.areaColour??"#000000",a.areaOpacity=e?.areaOpacity??.25}get config(){return super.config}}const ee=c=>(U("data-v-62f342fc"),c=c(),X(),c),te={class:"relative h-full w-full overflow-hidden"},ae={class:"absolute h-30 w-30 top-0 right-0"},ie=["content"],re=ee(()=>l("g",{id:"apple-keyboard-control"},[l("path",{d:"M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "})],-1)),se=[re],oe=z({__name:"overviewmap",setup(c){const e=u(),{t:a}=F(),i=j("iApi"),t=S(),s=f(),n=d(()=>t.activeBasemapConfig),L=d(()=>e.mapConfig),M=d(()=>e.basemaps),G=d(()=>e.startMinimized);let r=x(new K(i));const p=f(!0),_=f(!1),v=x([]);H(()=>{i.geo.map.viewPromise.then(async()=>{w(),r.createMap(L.value,s.value.querySelector(".overviewmap")),await r.viewPromise,await r.addMapGraphicLayer(),p.value=G.value;let h=r.updateOverview(i.geo.map.getExtent());v.push(i.event.on(m.MAP_EXTENTCHANGE,N(100,o=>{h.then(()=>{r.updateOverview(o)})}))),v.push(i.event.on(m.MAP_CREATED,()=>{w()})),v.push(i.event.on(m.MAP_REFRESH_END,()=>{w()})),v.push(i.event.on(m.MAP_BASEMAPCHANGE,o=>{!o.schemaChanged&&r.created&&n.value&&M.value[n.value.tileSchemaId]===void 0&&r.setBasemap(o.basemapId)}))})}),W(()=>{v.forEach(h=>i.event.off(h)),r.destroyMap()});const A=async h=>{_.value=!p.value&&await r.cursorHitTest(h)},$=()=>({height:`${p.value?48:200}px`,width:`${p.value?48:200}px`}),B=()=>({top:`${p.value?-6:-3}px`,right:`${p.value?-6:-3}px`,transform:`rotate(${p.value?225:45}deg)`}),w=()=>{if(!n.value){console.error("Overview Map could not obtain the basemap config used by the main map");return}try{const h=n.value?.tileSchemaId;if(!h)throw new Error("Overview Map could not obtain the tile schema of the main map");const o=M.value[h];if(!o)throw new Error("Overview Map could not find a suitable basemap that matches the tile schema of the main map");r.created||e.updateInitialBasemap(o.id),r.created&&r.viewPromise.then(()=>r.setBasemap(o.id))}catch{r.created||e.updateInitialBasemap(n.value.id),r.viewPromise.then(()=>r.setBasemap(n.value.id))}};return(h,o)=>{const C=q("tippy");return y(),g("div",{class:"relative",ref_key:"el",ref:s},[l("div",{style:E($()),class:"pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"},[l("div",te,[l("div",{class:D(["overviewmap absolute top-0 right-0 h-192 w-192",{"cursor-move":_.value}]),onMousemove:A},null,34)]),l("div",ae,[Y((y(),g("button",{type:"button",tabindex:"0",class:"cursor-pointer absolute h-full w-full",onClick:o[0]||(o[0]=he=>p.value=!p.value),content:Z(a)(p.value?"overviewmap.expand":"overviewmap.minimize")},[(y(),g("svg",{class:"absolute fill-current text-gray-500 transition-all duration-300 ease-out",style:E(B()),xmlns:"http://www.w3.org/2000/svg",fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},se,4))],8,ie)),[[C,{placement:"left",hideOnClick:!1}]])])],4)],512)}}});const ne=J(oe,[["__scopeId","data-v-62f342fc"]]),pe={en:{"overviewmap.expand":"Expand Overview","overviewmap.minimize":"Minimize Overview"},fr:{"overviewmap.expand":"Développer l'aperçu","overviewmap.minimize":"Réduire l'aperçu"}};class ve extends Q{added(){Object.entries(pe).forEach(s=>this.$iApi.$i18n.mergeLocaleMessage(...s)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s)),{destroy:a,el:i}=this.mount(ne,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(i.childNodes[0]),this.removed=()=>{e(),a(),u(this.$vApp.$pinia).$reset()}}}export{ve as default};