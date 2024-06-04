import{_ as C}from"./preload-helper-388ac9d5.js";import{r as j,be as K,jE as W,jF as X,jG as G,h1 as Y,d3 as ee,e as u,y,jH as te,v as re,w as E,f as se,T as ie,k as V,dB as Q,jI as ne,j as M,dO as oe,e1 as ae,g9 as le,b9 as ue,bd as pe,jJ as ye,gX as ce,U as he,dF as fe,x as de,br as me,c as U,bv as ge,dV as L,ep as be,bD as P,t as we,h as ve,jK as xe,E as $e,cx as Se}from"./main-66d02e41.js";import{d as je,s as Fe}from"./popupUtils-30e0a5e6.js";function N(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Re(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function J(t,e){return typeof t=="number"?t:t&&t.stops&&t.stops.length?Re(t.stops):e}function Ee(t,e){if(!e)return t;const s=e.filter(o=>o.type==="size").map(o=>{const{maxSize:a,minSize:p}=o;return(J(a,t)+J(p,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let o=0;o<r;o++)i+=s[o];const n=Math.floor(i/r);return Math.max(n,t)}function H(t){const e=t&&t.renderer,s=(t&&t.event&&t.event.pointerType)==="touch"?9:6;if(!e)return s;const i="visualVariables"in e?Ee(s,e.visualVariables):s;if(e.type==="simple")return N(i,e.symbol);if(e.type==="unique-value"){let r=i;return e.uniqueValueInfos?.forEach(n=>{r=N(r,n.symbol)}),r}if(e.type==="class-breaks"){let r=i;return e.classBreakInfos.forEach(n=>{r=N(r,n.symbol)}),r}return e.type==="dot-density"||e.type,i}const z=t=>t.spatialReference.wkid||JSON.stringify(t.spatialReference);function Oe(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:o,layerOption:a,mapExtent:p,maxAllowableOffset:l,returnFieldName:c,returnGeometry:h,returnUnformattedValues:d,returnZ:$,spatialReference:f,timeExtent:b,tolerance:x,width:g}=t.toJSON(),{dynamicLayers:w,layerDefs:O,layerIds:A}=Ne(t),T=e&&j(e.geometry)?e.geometry:null,v={geometryPrecision:n,maxAllowableOffset:l,returnFieldName:c,returnGeometry:h,returnUnformattedValues:d,returnZ:$,tolerance:x},F=T&&T.toJSON()||r;if(v.imageDisplay=`${g},${o},${s}`,i&&(v.gdbVersion=i),F&&(delete F.spatialReference,v.geometry=JSON.stringify(F),v.geometryType=K(F)),f?v.sr=f.wkid||JSON.stringify(f):F&&F.spatialReference?v.sr=z(F):p&&p.spatialReference&&(v.sr=z(p)),v.time=b?[b.start,b.end].join(","):null,p){const{xmin:q,ymin:B,xmax:D,ymax:Z}=p;v.mapExtent=`${q},${B},${D},${Z}`}return O&&(v.layerDefs=O),w&&!O&&(v.dynamicLayers=w),v.layers=a==="popup"?"visible":a,A&&!w&&(v.layers+=`:${A.join(",")}`),v}function Ne(t){const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:n,layerOption:o,gdbVersion:a}=t,p=r?.find(f=>f.layer!=null)?.layer?.serviceSublayers,l=o==="popup",c={},h=W({extent:e,width:i,spatialReference:e?.spatialReference}),d=[],$=f=>{const b=h===0,x=f.minScale===0||h<=f.minScale,g=f.maxScale===0||h>=f.maxScale;if(f.visible&&(b||x&&g))if(f.sublayers)f.sublayers.forEach($);else{if(n?.includes(f.id)===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;d.unshift(f)}};if(r?.forEach($),r&&!d.length)c.layerIds=[];else{const f=X(d,p,a),b=d.map(x=>{const g=G(s,x);return x.toExportImageJSON(g)});if(f)c.dynamicLayers=JSON.stringify(b);else{if(r){let g=d.map(({id:w})=>w);n&&(g=g.filter(w=>n.includes(w))),c.layerIds=g}else n?.length&&(c.layerIds=n);const x=Ie(s,d);if(j(x)&&x.length){const g={};for(const w of x)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(c.layerDefs=JSON.stringify(g))}}}return c}function Ie(t,e){const s=!!t?.length,i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=G(t,r),o=Y(n,r.definitionExpression);return{id:r.id,definitionExpression:ee(o,void 0)}}):null}var _;let m=_=class extends Q{static from(t){return ne(_,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};u([y({type:Number,json:{write:!0}})],m.prototype,"dpi",void 0),u([y()],m.prototype,"floors",void 0),u([y({type:String,json:{write:!0}})],m.prototype,"gdbVersion",void 0),u([y({types:te,json:{read:re,write:!0}})],m.prototype,"geometry",void 0),u([y({type:Number,json:{write:!0}})],m.prototype,"geometryPrecision",void 0),u([y({type:Number,json:{write:!0}})],m.prototype,"height",void 0),u([y({type:[Number],json:{write:!0}})],m.prototype,"layerIds",void 0),u([y({type:["top","visible","all","popup"],json:{write:!0}})],m.prototype,"layerOption",void 0),u([y({type:E,json:{write:!0}})],m.prototype,"mapExtent",void 0),u([y({type:Number,json:{write:!0}})],m.prototype,"maxAllowableOffset",void 0),u([y({type:Boolean,json:{write:!0}})],m.prototype,"returnFieldName",void 0),u([y({type:Boolean,json:{write:!0}})],m.prototype,"returnGeometry",void 0),u([y({type:Boolean,json:{write:!0}})],m.prototype,"returnM",void 0),u([y({type:Boolean,json:{write:!0}})],m.prototype,"returnUnformattedValues",void 0),u([y({type:Boolean,json:{write:!0}})],m.prototype,"returnZ",void 0),u([y({type:se,json:{write:!0}})],m.prototype,"spatialReference",void 0),u([y()],m.prototype,"sublayers",void 0),u([y({type:ie,json:{write:!0}})],m.prototype,"timeExtent",void 0),u([y({type:Number,json:{write:!0}})],m.prototype,"tolerance",void 0),u([y({type:Number,json:{write:!0}})],m.prototype,"width",void 0),m=_=u([V("esri.rest.support.IdentifyParameters")],m);const k=m;let S=class extends Q{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,s){return M.fromJSON({attributes:{...s.attributes},geometry:{...s.geometry}})}writeFeature(e,s){if(!e)return;const{attributes:i,geometry:r}=e;i&&(s.attributes={...i}),j(r)&&(s.geometry=r.toJSON(),s.geometryType=le.toJSON(r.type))}};u([y({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),u([y({type:M})],S.prototype,"feature",void 0),u([oe("feature",["attributes","geometry"])],S.prototype,"readFeature",null),u([ae("feature")],S.prototype,"writeFeature",null),u([y({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),u([y({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=u([V("esri.rest.support.IdentifyResult")],S);const Pe=S;async function _e(t,e,s){const i=(e=Ve(e)).geometry?[e.geometry]:[],r=ue(t);return r.path+="/identify",pe(i).then(n=>{const o=Oe(e,{geometry:n&&n[0]}),a=ye({...r.query,f:"json",...o}),p=ce(a,s);return he(r.path,p).then(Ge).then(l=>Me(l,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Pe.fromJSON(s)),e}function Ve(t){return t=k.from(t)}function Me(t,e){if(!e?.length)return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let I=null;function ke(t,e){return e.type==="tile"||e.type==="map-image"}let R=class extends fe{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=de(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([me(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new U("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ae(s.sublayers,i,e);if(!r.length)return[];const n=await Ue(s,r);if(!((s.capabilities?.operations?.supportsIdentify??!0)&&s.version>=10.5)&&!n)throw new U("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return{remove(){}};let s=null;if(t instanceof M?s=[t]:ge.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s?.filter(j),!s||!s.length)return{remove:()=>{}};for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),{remove:()=>{e.removeMany(s??[])}}}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async o=>{o||(o=new L);let a=null;const p="visualVariables"in n?n.visualVariables?.find(l=>l.type==="size"):void 0;p&&(I||(I=(await C(()=>import("./main-66d02e41.js").then(l=>l.oG),["./main-66d02e41.js","./preload-helper-388ac9d5.js","./main-a1b2c4c4.css"],import.meta.url)).getSize),a=I(p,r,{view:e.type,scale:e.scale,shape:o.type==="simple-marker"?o.style:null})),a||(a="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:16),s.includes(r)&&(r.symbol=new L({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!i?.length||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),o=new Map;for(const l of i)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const c=l.sourceLayer;be(o,c,()=>new Map).set(l.getObjectId(),l)}const a=Array.from(o,([l,c])=>{const h=l.createQuery();return h.objectIds=[...c.keys()],h.outFields=[l.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=n,h.outSpatialReference=s.spatialReference,l.queryFeatures(h)}),p=await Promise.all(a);if(!this.destroyed)for(const{features:l}of p)for(const c of l){const h=c.sourceLayer,d=o.get(h).get(c.getObjectId());d&&i.includes(d)&&(d.geometry=c.geometry,r(d,"geometry"),this._featuresResolutions.set(d,n))}}_getTargetResolution(t){const e=t*P(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(we(i))return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView,p=j(s)?s.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:f})=>f.load().catch(()=>{})));const l=Math.min(ve("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((f,b)=>b.renderer?H({renderer:b.renderer,event:p}):f,2)),c=this.createFetchPopupFeaturesQueryGeometry(t,l),h=xe(a,o),d=Math.round(c.width/h),$=new E({xmin:c.center.x-h*d,ymin:c.center.y-h*d,xmax:c.center.x+h*d,ymax:c.center.y+h*d,spatialReference:c.spatialReference});return new k({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:d,layerOption:"popup",mapExtent:$,returnGeometry:!0,spatialReference:o,sublayers:r.sublayers,timeExtent:n,tolerance:l,width:d})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,n=j(s)?s.event:null,o=e.map(async({sublayer:a,popupTemplate:p})=>{if(await a.load().catch(()=>{}),a.capabilities&&!a.capabilities.operations.supportsQuery)return[];const l=a.createQuery(),c=H({renderer:a.renderer,event:n}),h=this.createFetchPopupFeaturesQueryGeometry(t,c);if(l.geometry=h,l.outFields=await je(a,p),l.timeExtent=r,i){const g=i.clone(),w=G(g,a);j(w)&&(l.where=l.where?`(${l.where}) AND (${w})`:w)}const d=this._getTargetResolution(h.width/c),$=await Te(p),f=a.geometryType==="point"||$&&$.arcadeUtils.hasGeometryOperations(p);f||(l.maxAllowableOffset=d);let{features:b}=await a.queryFeatures(l);const x=f?0:d;b=await Le(a,b);for(const g of b)this._featuresResolutions.set(g,x);return b});return(await $e(o)).reverse().reduce((a,p)=>p.value?[...a,...p.value]:a,[]).filter(a=>a!=null)}};function Ae(t,e,s){const i=[],r=n=>{const o=n.minScale===0||e<=n.minScale,a=n.maxScale===0||e>=n.maxScale;if(n.visible&&o&&a){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const p=Fe(n,{...s,defaultPopupTemplateEnabled:!1});j(p)&&i.unshift({sublayer:n,popupTemplate:p})}}};return(t?.toArray()??[]).reverse().map(r),i}function Te(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?Se():Promise.resolve()}async function Ue(t,e){if(t.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:s})=>s.load().then(()=>s.capabilities.operations.supportsQuery)))}catch{return!1}}async function Le(t,e){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):e.filter(i=>s.getSymbol(i)!=null)),e}u([y({constructOnly:!0})],R.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),u([y({constructOnly:!0})],R.prototype,"layerView",void 0),u([y({constructOnly:!0})],R.prototype,"highlightGraphics",void 0),u([y({constructOnly:!0})],R.prototype,"highlightGraphicUpdated",void 0),u([y({constructOnly:!0})],R.prototype,"updatingHandles",void 0),R=u([V("esri.views.layers.support.MapService")],R);function qe(t,e,s,i=new E){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const c=s.overlayPixelSizeInMapUnits(t),h=s.basemapSpatialReference;r=j(h)&&!h.equals(s.spatialReference)?P(h)/P(s.spatialReference):e*c}const n=t.x-r,o=t.y-r,a=t.x+r,p=t.y+r,{spatialReference:l}=s;return i.xmin=Math.min(n,a),i.ymin=Math.min(o,p),i.xmax=Math.max(n,a),i.ymax=Math.max(o,p),i.spatialReference=l,i}new E;export{ke as P,R as S,qe as a};