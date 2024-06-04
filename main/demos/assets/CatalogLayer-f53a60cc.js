import { dL as e, d$ as t, dX as n, e0 as m, a5 as V, i1 as c, c2 as r, az as e$1, K as s$1, Q as Q$1, ea as b$1, S, aX as e$2, aY as y, ga as g$2, aZ as c$1, g2 as p, g5 as p$1, g8 as C, g9 as i, g7 as m$1, e3 as c$2, gb as y$1, b7 as P, gc as m$2, gJ as D, g0 as c$3, g3 as f, dY as f$1, ey as l, dZ as u$1, d_ as j, ez as e$3, eA as i$1, dU as i$2, D as a$1, s, eZ as Q$2, I, aB as V$1, f7 as b$2, gZ as e$4, U as U$1, gg as s$2 } from './main-f8507314.js';
import { a } from './lazyLayerLoader-67ed9e9e.js';
import { T as T$1 } from './utils-4991f4ec.js';
import H from './FeatureLayerSource-24cd3e25.js';
import { o } from './clientSideDefaults-79b71b7e.js';
import './preload-helper-a4975f27.js';
import './meshVertexSpaceUtils-b149560f.js';
import './MeshLocalVertexSpace-65493f91.js';
import './vec3-a2308bff.js';
import './External-af47f614.js';
import './editingSupport-d5eb767c.js';
import './QueryEngineCapabilities-5bb5f351.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class _{constructor(e,r){this.objectId=e,this.itemSource=r,this.count=0,this.layer=null,this.sortValue=void 0;}}const g$1=new e(20,(e=>e.destroy()));let L=class extends(t(n(m(b$1)))){constructor(e){super(e),this._oidToReference=new Map,this._layerToReference=new Map,this._portals=new Map,this.layers=new V,this.maximumVisibleSublayers=10,this.opacity=1,this.title="Layers In View",this.type="catalog-dynamic-group",this.visible=!0;}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get _orderBy(){return this.parent.orderBy?.find((e=>!e.valueExpression&&e.field))??new c({field:this.parent.objectIdField})}get _referenceComparator(){const e=this._orderBy,r=this.parent.fieldsIndex.get(e.field),t=T$1(r?.toJSON().type,"descending"===e.order);return (e,r)=>{const o=t(e.sortValue,r.sortValue);return o||e.objectId-e.objectId}}acquireLayer(e){const r$1=e.getObjectId(),o=r(this._oidToReference,r$1,(()=>this._createLayerReference(e)));return o.count++,e$1((()=>{o.count--,o.count||this._disposeLayerReference(o);}))}_createLayerReference(e){const r=e.getObjectId(),t=e.getAttribute(this.parent.itemSourceField),s=new _(r,t);if(g$1.get(t))return this._addLayer(g$1.pop(t),s,e),s;let i;try{i=JSON.parse(t);}catch(a){return s$1.getLogger(this).error(a),s}return this._createLayer(i).then((r=>{this.destroyed||0===s.count?(g$1.get(t)||g$1.put(s.itemSource,r),s.layer=null):this._addLayer(r,s,e);})).catch((()=>{})),s}_addLayer(e,r,t){this._layerToReference.set(e,r),r.sortValue=t.getAttribute(this._orderBy.field),r.layer=e,e.parent=this,this.layers.add(e),this.layers.sort(((e,r)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(r))));}_disposeLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),g$1.put(e.itemSource,e.layer)),this._oidToReference.delete(e.objectId);}async _createLayer(e){if(!R(e)){return new(await a.UnsupportedLayer())}const{itemId:r$1,portalUrl:t}=e,o=r(this._portals,t,(()=>new Q$1({url:t})));return b$1.fromPortalItem(new S({id:r$1,portal:o}))}};e$2([y()],L.prototype,"_orderBy",null),e$2([y()],L.prototype,"_referenceComparator",null),e$2([y({readOnly:!0})],L.prototype,"layers",void 0),e$2([y()],L.prototype,"maximumVisibleSublayers",void 0),e$2([y(g$2)],L.prototype,"opacity",void 0),e$2([y({type:String,json:{name:"title",write:!0}})],L.prototype,"title",void 0),e$2([y({json:{read:!1}})],L.prototype,"type",void 0),e$2([y({type:Boolean,json:{name:"visibility",write:!0}})],L.prototype,"visible",void 0),L=e$2([c$1("esri.layers.catalog.CatalogDynamicGroupLayer")],L);const b=L;function R(e){return "object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(t(p(n(m(b$1))))){constructor(e){super(e),this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.type="catalog-footprint",this.visible=!0;}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}get fields(){return this.parent.fields}get fieldsIndex(){return this.parent.fieldsIndex}get geometryType(){return this.parent.geometryType}get objectIdField(){return this.parent.objectIdField}get orderBy(){return this.parent.orderBy}createPopupTemplate(e){const r={fields:this.parent.fields,objectIdField:this.parent.objectIdField,title:this.title};return p$1(r,e)}createQuery(){return this.parent.createQuery()}queryFeatures(e,r){return this.parent.queryFeatures(e,r)}};e$2([y({readOnly:!0})],h.prototype,"defaultPopupTemplate",null),e$2([y({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:i,write:!0}})],h.prototype,"labelingInfo",void 0),e$2([y(m$1)],h.prototype,"labelsVisible",void 0),e$2([y(c$2)],h.prototype,"legendEnabled",void 0),e$2([y(g$2)],h.prototype,"opacity",void 0),e$2([y(y$1)],h.prototype,"popupEnabled",void 0),e$2([y({type:P,json:{name:"popupInfo",write:!0}})],h.prototype,"popupTemplate",void 0),e$2([y({types:m$2,json:{name:"layerDefinition.drawingInfo.renderer"}})],h.prototype,"renderer",void 0),e$2([y({json:{read:!1}})],h.prototype,"type",void 0),e$2([y({type:Boolean,json:{name:"visibility",write:!0}})],h.prototype,"visible",void 0),h=e$2([c$1("esri.layers.catalog.CatalogFootprintLayer")],h);const g=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const E="esri.layers.CatalogLayer",Q=s$2();let T=class extends(D(n(c$3(f(t(f$1(l(u$1(j(m(e$3(i$1(i$2(b$1)))))))))))))){constructor(e){super(e),this.dynamicGroupLayer=new b({parent:this}),this.fields=null,this.fieldsIndex=null,this.footprintLayer=new g({parent:this}),this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new V([this.dynamicGroupLayer,this.footprintLayer]),this.source=new H({layer:this}),this.type="catalog";}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(a$1).then((async()=>{if(!this.url)throw new s("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.url&&null==this.layerId){const e=await this._fetchFirstValidLayerId(r);if(null==e)throw new s("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:this.url});this.layerId=e;}await this.source.load(),this.source.sourceJSON&&(this.sourceJSON=this.source.sourceJSON,this.read(this.source.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}));})).then((()=>Q$2(this,"load",e)));return this.addResolvingPromise(t),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get parsedUrl(){const e=I(this.url);return null!=e&&null!=this.layerId&&(e.path=V$1(e.path,this.layerId.toString())),e}createQuery(){const e=new b$2,r=this.capabilities?.query;e.returnGeometry=!0,r&&(e.compactGeometryEnabled=r.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:t,timeExtent:o}=this;return e.timeExtent=null!=t&&null!=o?o.offset(-t.value,t.unit):o||null,e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){return this.fieldsIndex.get(e)?.domain}async queryFeatures(e,r){const t=await this.load(),o=await t.source.queryFeatures(b$2.from(e)??t.createQuery(),r);if(o?.features)for(const i of o.features)i.layer=i.sourceLayer=t.footprintLayer;return o}async queryObjectIds(e,r){return (await this.load()).source.queryObjectIds(b$2.from(e)??this.createQuery(),r)}async queryFeatureCount(e,r){return (await this.load()).source.queryFeatureCount(b$2.from(e)??this.createQuery(),r)}async queryExtent(e,r){return (await this.load()).source.queryExtent(b$2.from(e)??this.createQuery(),r)}serviceSupportsSpatialReference(e){return this.loaded&&e$4(this,e)}read(e,r){super.read(e,r);let t=e.footprintLayer;t||"service"!==r?.origin||(t={layerDefinition:{drawingInfo:o(e.geometryType)}}),this.footprintLayer.read(t,r);}_fetchFirstValidLayerId(e){return U$1(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{const r=e.data;if(r)return Array.isArray(r.layers)?r.layers.find((e=>"Catalog Layer"===e.type))?.id:void 0}))}};e$2([y({readOnly:!0})],T.prototype,"createQueryVersion",null),e$2([y({...Q.fields,json:{origins:{service:{name:"fields"}}}})],T.prototype,"fields",void 0),e$2([y(Q.fieldsIndex)],T.prototype,"fieldsIndex",void 0),e$2([y({json:{read:!1,write:!1}})],T.prototype,"footprintLayer",void 0),e$2([y()],T.prototype,"itemSourceField",void 0),e$2([y()],T.prototype,"itemTypeField",void 0),e$2([y()],T.prototype,"layers",void 0),e$2([y({value:"CatalogLayer",type:["CatalogLayer"]})],T.prototype,"operationalLayerType",void 0),e$2([y()],T.prototype,"outFields",void 0),e$2([y({readOnly:!0})],T.prototype,"parsedUrl",null),e$2([y()],T.prototype,"source",void 0),e$2([y({json:{read:!1}})],T.prototype,"type",void 0),T=e$2([c$1(E)],T);const G=T;

export { G as default };