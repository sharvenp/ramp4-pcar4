import { cS as o, dT as u, a_ as v, fk as C, b3 as d$1, gq as w$1, aI as M, fT as d, a5 as V, aX as e, aY as y, gr as u$1, e1 as o$1, aZ as c, eX as m, dX as n, dY as f, d$ as t, dZ as u$2, d_ as j$2, e0 as m$1, bw as l, bl as f$1, r as bt, D as a, ev as r, e4 as d$3, ea as b } from './main-f8507314.js';
import { j as j$1, S as S$1, g, d as d$2 } from './kmlUtils-6b55518a.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var j;let S=j=class extends(o.EventedMixin(u(m))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;}),C),v((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null;}),C),d$1((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer;}),C),d$1((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e;}),C)]);}initialize(){w$1((()=>this.networkLink)).then((()=>w$1((()=>!0===this.visible)))).then((()=>this.load()));}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const r=null!=e?e.signal:null,s=this._fetchService(this._get("networkLink")?.href??"",r).then((e=>{const r=j$1(e.sublayers);this.fullExtent=M.fromJSON(r),this.sourceJSON=e;const s=d(V.ofType(j),S$1(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,t){return !!t.visibility}_fetchService(e,t){return g(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>d$2(e.data)))}};e([y()],S.prototype,"description",void 0),e([y({type:M})],S.prototype,"fullExtent",void 0),e([y()],S.prototype,"id",void 0),e([y({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),e([y({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),e([y({type:V.ofType(S),json:{write:{allowNull:!0}}})],S.prototype,"sublayers",void 0),e([y({value:null,json:{read:{source:"name",reader:e=>u$1(e)}}})],S.prototype,"title",void 0),e([y({value:!0})],S.prototype,"visible",null),e([o$1("visible",["visibility"])],S.prototype,"readVisible",null),e([y()],S.prototype,"sourceJSON",void 0),e([y()],S.prototype,"layer",void 0),S=j=e([c("esri.layers.support.KMLSublayer")],S);const k=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const w=["kml","xml"];let F=class extends(n(f(t(u$2(j$2(m$1(b))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new l({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=f$1.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.addHandles([d$1((()=>this.sublayers),((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),C),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))]);}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return S$1(k,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?bt(this.url,w)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(a).then((()=>this._fetchService(r)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy();}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g(this.url??"",this.outSpatialReference,this.refreshInterval,e))),t=d$2(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const o of t.sublayers.items)r(o),o.visible&&o.fullExtent&&(null!=e?e.union(o.fullExtent):e=o.fullExtent.clone());};return r(this),e}};e([y({readOnly:!0})],F.prototype,"allSublayers",void 0),e([y({type:f$1})],F.prototype,"outSpatialReference",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],F.prototype,"legendEnabled",void 0),e([y({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),e([y({type:["KML"]})],F.prototype,"operationalLayerType",void 0),e([y({})],F.prototype,"resourceInfo",void 0),e([y({type:V.ofType(k),json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),e([o$1(["web-map","portal-item"],"sublayers",["visibleFolders"])],F.prototype,"readSublayersFromItemOrWebMap",null),e([o$1("service","sublayers",["sublayers"])],F.prototype,"readSublayers",null),e([r("sublayers")],F.prototype,"writeSublayers",null),e([y({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),e([y({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],F.prototype,"title",null),e([y(d$3)],F.prototype,"url",void 0),e([y({readOnly:!0})],F.prototype,"visibleSublayers",null),e([y({type:M})],F.prototype,"extent",void 0),e([y()],F.prototype,"fullExtent",null),F=e([c("esri.layers.KMLLayer")],F);const O=F;

export { O as default };
