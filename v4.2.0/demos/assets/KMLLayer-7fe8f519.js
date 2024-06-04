import{fx as _,dC as L,br as c,e2 as y,bp as g,g6 as f,r as p,w as d,g7 as O,bv as b,e as s,y as i,g8 as F,dO as h,k as m,m as $,dG as M,dH as j,dK as I,dI as C,dJ as K,dL as R,bW as N,f as S,_ as P,dM as T,e1 as J,dR as W,a4 as z}from"./main-66d02e41.js";import{j as A,S as w,g as x,d as E}from"./kmlUtils-086bd7e0.js";import"./preload-helper-388ac9d5.js";var u;let a=u=class extends _.EventedMixin(L($)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([c(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),c(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),g(()=>this.sublayers,(t,r)=>{if(r)for(const l of r)l.layer=l.parent=null;if(t)for(const l of t)l.parent=this,l.layer=this.layer},y)])}initialize(){f(()=>this.networkLink).then(()=>f(()=>this.visible===!0)).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;const t=p(e)?e.signal:null,r=this._fetchService(this._get("networkLink")?.href??"",t).then(l=>{const n=A(l.sublayers);this.fullExtent=d.fromJSON(n),this.sourceJSON=l;const v=O(b.ofType(u),w(u,l));this.sublayers?this.sublayers.addMany(v):this.sublayers=v,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return x(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>E(r.data))}};s([i()],a.prototype,"description",void 0),s([i()],a.prototype,"id",void 0),s([i({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),s([i({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),s([i({type:b.ofType(u),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),s([i({value:null,json:{read:{source:"name",reader:e=>F(e)}}})],a.prototype,"title",void 0),s([i({value:!0})],a.prototype,"visible",null),s([h("visible",["visibility"])],a.prototype,"readVisible",null),s([i()],a.prototype,"sourceJSON",void 0),s([i({value:null})],a.prototype,"layer",null),s([i({type:d})],a.prototype,"fullExtent",void 0),a=u=s([m("esri.layers.support.KMLSublayer")],a);const k=a,H=["kml","xml"];let o=class extends M(j(I(C(K(R(z)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new N({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([g(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return w(k,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],l=e.toArray();for(;l.length;){const n=l[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&l.push(...n.sublayers.toArray())),l.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?P(this.url,H)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=l=>{l.visible&&(t.push(l),l.sublayers&&l.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=p(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(T).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=E(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;p(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const l of r.sublayers.items)t(l),l.visible&&l.fullExtent&&(p(e)?e.union(l.fullExtent):e=l.fullExtent.clone())};return t(this),e}};s([i({readOnly:!0})],o.prototype,"allSublayers",void 0),s([i({type:S})],o.prototype,"outSpatialReference",void 0),s([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),s([i({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),s([i({type:["KML"]})],o.prototype,"operationalLayerType",void 0),s([i({})],o.prototype,"resourceInfo",void 0),s([i({type:b.ofType(k),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),s([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),s([J("sublayers")],o.prototype,"writeSublayers",null),s([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([i({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),s([i(W)],o.prototype,"url",void 0),s([i({readOnly:!0})],o.prototype,"visibleSublayers",null),s([i({type:d})],o.prototype,"extent",void 0),s([i()],o.prototype,"fullExtent",null),o=s([m("esri.layers.KMLLayer")],o);const D=o;export{D as default};
