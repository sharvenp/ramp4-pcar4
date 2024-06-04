import{l8 as n,la as y,aY as p,aZ as u,l9 as d,a_ as h,b6 as c,r as m,b0 as S,U as v,lT as f,a7 as g,e as o,y as s,b1 as b,w as C,lq as w,lN as G,b3 as _,n as $,lU as a,lV as x,lW as P,fv as R,lX as k,b4 as F}from"./main-917dc16a.js";import"./preload-helper-388ac9d5.js";const j=["atom","xml"],E={base:a,key:"type",typeMap:{"simple-line":x},errorContext:"symbol"},L={base:a,key:"type",typeMap:{"picture-marker":P,"simple-marker":R},errorContext:"symbol"},M={base:a,key:"type",typeMap:{"simple-fill":k},errorContext:"symbol"};let t=class extends n(y(p(u(d(h(F)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&l.outline?.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?c(this.url,j)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=m(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(S).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await v(g.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:f(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){return this.featureCollections?.some(r=>r.featureSet?.geometryType===e&&r.featureSet.features?.length>0)??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([b("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:C,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(w)],t.prototype,"id",void 0),o([s(G)],t.prototype,"legendEnabled",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:L,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(_)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([$("esri.layers.GeoRSSLayer")],t);const U=t;export{U as default};
