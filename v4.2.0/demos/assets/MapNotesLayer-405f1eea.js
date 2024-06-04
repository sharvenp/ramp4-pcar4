import{ef as I,e as o,y as l,k as M,dW as F,dT as k,dV as T,eg as z,dG as A,dK as W,dI as H,dJ as K,dL as q,f as S,bv as N,H as Q,a9 as J,cz as $,r as c,eh as v,ei as O,ej as E,ek as D,j as U,t as m,c as V,d as X,ar as Y,bE as Z,bA as ee,bB as te,bC as re,bd as oe,el as C,dO as f,e1 as ie,w as ae,em as le,en as R,a4 as ne}from"./main-66d02e41.js";import{n as se}from"./objectIdUtils-967fafff.js";import"./preload-helper-388ac9d5.js";function h(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!j(e))}function j({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return L.find(i=>r===i.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===i.identifyingSymbol.type)}function _(){return new ae({xmin:-180,ymin:-90,xmax:180,ymax:90})}const x=new I({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ye=new I({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends le{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){const t=this.layer?.spatialReference,e=this.fullBounds;return t?m(e)?O(_(),t).geometry:D(e,t):null}get fullBounds(){const t=this.layer?.spatialReference;if(!t)return null;const e=$();return this.graphics.forEach(r=>{const i=c(r.geometry)?O(r.geometry,t).geometry:null;c(i)&&v(e,i.type==="point"?i:i.extent,e)}),E(e,R)?null:e}get sublayers(){return this.graphics}};o([l({readOnly:!0})],u.prototype,"fullExtent",null),o([l({readOnly:!0})],u.prototype,"fullBounds",null),o([l({readOnly:!0})],u.prototype,"sublayers",null),o([l()],u.prototype,"layer",void 0),o([l()],u.prototype,"layerId",void 0),o([l({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=o([M("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const L=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new F().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new k().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new T().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new T().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new z().toJSON()}];let a=class extends A(W(H(K(q(ne))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=S.WGS84,this.sublayers=new N(L.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!h(e)&&r?.origin!=="portal-item"}}}readFeatureCollections(t,e,r){if(!h(e))return null;const i=e.layers.map(s=>{const n=new Q;return n.read(s,r),n});return new N({items:i})}readLegacyfeatureCollectionJSON(t,e){return h(e)?J(e.featureCollection):null}get fullExtent(){const t=this.spatialReference,e=$();return c(this.sublayers)?this.sublayers.forEach(({fullBounds:r})=>c(r)?v(e,r,e):e,e):this.featureCollectionJSON?.layers.some(r=>r.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(r=>{const i=O(r.layerDefinition.extent,t).geometry;c(i)&&v(e,i,e)}),E(e,R)?O(_(),t).geometry:D(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?S.fromJSON(e.layers[0].layerDefinition.spatialReference):S.WGS84}readSublayers(t,e,r){if(h(e))return null;const i=[];let s=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,g=y.id??s++,d=j(n);if(c(d)){const b=new u({id:d.id,title:y.name,layerId:g,layer:this,graphics:p.features.map(({geometry:w,symbol:G,attributes:P,popupInfo:B})=>U.fromJSON({attributes:P,geometry:w,symbol:G,popupTemplate:B}))});i.push(b)}}return new N(i)}writeSublayers(t,e,r,i){const{minScale:s,maxScale:n}=this;if(m(t))return;const y=t.some(d=>d.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&i?.messages?.push(new V("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const p=[];let g=this.spatialReference.toJSON();e:for(const d of t)for(const b of d.graphics)if(c(b.geometry)){g=b.geometry.spatialReference.toJSON();break e}for(const d of L){const b=t.find(w=>d.id===w.id);this._writeMapNoteSublayer(p,b,d,s,n,g,i)}X("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=J(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(m(this.sublayers))return;let t=null;const e=[];for(const i of this.sublayers)for(const s of i.graphics)if(c(s.geometry)){const n=s.geometry;t?Y(n.spatialReference,t)||(Z(n.spatialReference,t)||ee()||await te(),s.geometry=re(n,t)):t=n.spatialReference,e.push(s)}const r=await oe(e.map(i=>i.geometry));e.forEach((i,s)=>i.geometry=r[s])}_findSublayer(t){return m(this.sublayers)?null:this.sublayers?.find(e=>e.id===t)??null}_writeMapNoteSublayer(t,e,r,i,s,n,y){const p=[];if(!m(e)){for(const g of e.graphics)this._writeMapNote(p,g,r.geometryType,y);this._normalizeObjectIds(p,x),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:J(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:s,objectIdField:"OBJECTID",fields:[x.toJSON(),ye.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,i){if(m(e))return;const{geometry:s,symbol:n,popupTemplate:y}=e;if(m(s))return;if(s.type!==r)return void i?.messages?.push(new C("map-notes-layer:invalid-geometry-type",`Geometry "${s.type}" cannot be saved in "${r}" layer`,{graphic:e}));if(m(n))return void i?.messages?.push(new C("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e}));const p={attributes:{...e.attributes},geometry:s.toJSON(),symbol:n.toJSON()};c(y)&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let i=se(r,t)+1;const s=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||s.has(y[r]))&&(y[r]=i++),s.add(y[r])}}};o([l({readOnly:!0})],a.prototype,"capabilities",void 0),o([f(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),o([l({readOnly:!0})],a.prototype,"featureCollections",void 0),o([f(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),o([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),o([l({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),o([l({readOnly:!0})],a.prototype,"fullExtent",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),o([l({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),o([l({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),o([f(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),o([l({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),o([f(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),o([l({readOnly:!0})],a.prototype,"multipointLayer",null),o([l({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),o([l({readOnly:!0})],a.prototype,"pointLayer",null),o([l({readOnly:!0})],a.prototype,"polygonLayer",null),o([l({readOnly:!0})],a.prototype,"polylineLayer",null),o([l({type:S})],a.prototype,"spatialReference",void 0),o([f(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),o([f("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),o([ie("web-map","sublayers")],a.prototype,"writeSublayers",null),o([l({readOnly:!0})],a.prototype,"textLayer",null),o([l()],a.prototype,"title",void 0),o([l({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=o([M("esri.layers.MapNotesLayer")],a);const ce=a;export{ce as default};
