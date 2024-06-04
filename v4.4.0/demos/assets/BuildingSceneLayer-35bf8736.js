import{dE as de,e as t,y as r,dO as j,gf as ue,mA as q,k as l,mB as ce,p as I,m as Y,jd as ee,cp as he,r as d,H as te,fV as ge,U as re,fN as fe,ij as me,c as F,j as ve,t as be,w as we,f as se,ge as Se,g1 as $e,f$ as Oe,bw as xe,dA as ie,s as Ie,g5 as Fe,bv as b,el as je,mC as Le,dB as f,a9 as c,mD as Te,ed as Be,gb as Ae,dI as Ee,dJ as _e,dK as qe,dL as Ne,ga as Pe,bW as Re,V as Me,dM as ke,d$ as Ce,mE as Ue,fW as Qe,a4 as De}from"./main-0e79698b.js";import{t as Ke,u as Ve,l as He}from"./FetchAssociatedFeatureLayer-e5192064.js";import{n as Je,E as We,L as J}from"./SceneService-d9719db9.js";import{s as Ze,l as Ge,u as ze,m as Xe}from"./I3SLayerDefinitions-4130edac.js";import{d as Ye,s as et}from"./popupUtils-d02dc4ba.js";import"./preload-helper-388ac9d5.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-b9b57ea4.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-4a8a4cda.js";import"./VertexAttribute-15d1866a.js";import"./spatialReferenceEllipsoidUtils-0743e646.js";import"./symbolColorUtils-2e536238.js";import"./vec3f32-ad1dc57f.js";import"./plane-51830c91.js";import"./sphere-3864607a.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-cee19074.js";let y=class extends de(ce){constructor(s){super(s),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(s,i){return typeof i.alias=="string"?i.alias:typeof i.name=="string"?i.name:""}readIdOnlyOnce(s){return this.id!==-1?this.id:typeof s=="number"?s:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([j("service","title",["alias","name"])],y.prototype,"readTitle",null),t([r()],y.prototype,"layer",void 0),t([r({type:ue,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([j("service","id")],y.prototype,"readIdOnlyOnce",null),t([r(q(String))],y.prototype,"modelName",void 0),t([r(q(Boolean))],y.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([l("esri.layers.buildingSublayers.BuildingSublayer")],y);const oe=y,ae="esri.layers.buildingSublayers.BuildingComponentSublayer",tt=I.getLogger(ae),W=Fe();let o=class extends Y.LoadableMixin(ee(oe)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new he(this.fields)}readAssociatedLayer(e,s){const i=this.layer.associatedFeatureServiceItem,a=s.associatedLayerID;return d(i)&&typeof a=="number"?new te({portalItem:i,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=d(e)?e.signal:null,i=this._fetchService(s).then(()=>{this.indexInfo=Je(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,tt,s)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return ge(this,e)}async _fetchService(e){const s=(await re(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){const i=this.getFeatureType(s?.feature)?.domains?.[e];return i&&i.type!=="inherited"?i:this.getField(e)?.domain??null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ke,{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}=e;return{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}}createQuery(){const e=new fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),s)).then(i=>{if(i?.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),s))}async queryCachedAttributes(e,s){const i=me(this.fieldsIndex,await Ye(this,et(this)));return Ve(this.parsedUrl.path,this.attributeStorageInfo,e,s,i)}async queryCachedFeature(e,s){const i=await this.queryCachedAttributes(e,[s]);if(!i||i.length===0)throw new F("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new ve;return a.attributes=i[0],a.layer=this,a.sourceLayer=this,a}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:d(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),be(this.associatedLayer))throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],o.prototype,"parsedUrl",null),t([r({type:Ze,readOnly:!0})],o.prototype,"nodePages",void 0),t([r({type:[Ge],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([r({type:[ze],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([r({type:[Xe],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],o.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([r({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([r(W.fields)],o.prototype,"fields",void 0),t([r({readOnly:!0})],o.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:te})],o.prototype,"associatedLayer",void 0),t([j("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([r(W.outFields)],o.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([r({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([r({readOnly:!0,type:we})],o.prototype,"fullExtent",null),t([r({readOnly:!0,type:se})],o.prototype,"spatialReference",null),t([r({readOnly:!0})],o.prototype,"version",null),t([r({readOnly:!0,type:Se})],o.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([r({types:$e,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([r(Oe)],o.prototype,"popupEnabled",void 0),t([r({type:xe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([r()],o.prototype,"types",null),t([r()],o.prototype,"typeIdField",null),t([r({json:{write:!1}}),ie(new Ie({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([r()],o.prototype,"geometryType",null),t([r()],o.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),o=t([l(ae)],o);const N=o;var P;const Z={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,s,i){if(e&&Array.isArray(e))return new b(e.map(a=>{const p=rt(a);if(p){const w=new p;return w.read(a,i),w}return i&&i.messages&&a&&i.messages.push(new je("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i})),null}))}let g=P=class extends oe{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Le(this,e=>P.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}))}};function rt(e){return e.layerType==="group"?g:N}t([r({type:["hide","show","hide-children"],json:{write:!0}})],g.prototype,"listMode",void 0),t([r(Z)],g.prototype,"sublayers",void 0),g=P=t([l("esri.layers.buildingSublayers.BuildingGroupSublayer")],g),function(e){function s(i,a){i.forEach(p=>{a(p),p.type==="building-group"&&s(p.sublayers,a)})}e.sublayersProperty=Z,e.readSublayers=ne,e.forEachSublayer=s}(g||(g={}));const m=g;let L=class extends f{constructor(){super(...arguments),this.type=null}};t([r({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=t([l("esri.layers.support.BuildingFilterAuthoringInfo")],L);const le=L;var R;let S=R=class extends f{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([r({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([r({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=R=t([l("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const st=S;var M;const it=b.ofType(st);let T=M=class extends f{clone(){return new M({filterTypes:c(this.filterTypes)})}};t([r({type:it,json:{write:!0}})],T.prototype,"filterTypes",void 0),T=M=t([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")],T);const ot=T;var k;const at=b.ofType(ot);let $=k=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:c(this.filterBlocks)})}};t([r({type:["checkbox"]})],$.prototype,"type",void 0),t([r({type:at,json:{write:!0}})],$.prototype,"filterBlocks",void 0),$=k=t([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],$);const G=$;let B=class extends f{};t([r({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),B=t([l("esri.layers.support.BuildingFilterMode")],B);const _=B;var C;let A=C=class extends _{constructor(){super(...arguments),this.type="solid"}clone(){return new C}};t([r({type:["solid"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=C=t([l("esri.layers.support.BuildingFilterModeSolid")],A);const U=A;var Q;let O=Q=class extends _{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Q({edges:c(this.edges)})}};t([ie({wireFrame:"wire-frame"})],O.prototype,"type",void 0),t([r(Te)],O.prototype,"edges",void 0),O=Q=t([l("esri.layers.support.BuildingFilterModeWireFrame")],O);const z=O;var D;let E=D=class extends _{constructor(){super(...arguments),this.type="x-ray"}clone(){return new D}};t([r({type:["x-ray"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=D=t([l("esri.layers.support.BuildingFilterModeXRay")],E);const X=E;var K;const nt={nonNullable:!0,types:{key:"type",base:_,typeMap:{solid:U,"wire-frame":z,"x-ray":X}},json:{read:e=>{switch(e&&e.type){case"solid":return U.fromJSON(e);case"wireFrame":return z.fromJSON(e);case"x-ray":return X.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=K=class extends f{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new U,this.title=""}clone(){return new K({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),t([r(nt)],v.prototype,"filterMode",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=K=t([l("esri.layers.support.BuildingFilterBlock")],v);const lt=v;var V;const pt=b.ofType(lt);let h=V=class extends f{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Be(),this.name=null}clone(){return new V({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([r({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([r({type:pt,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([r({types:{key:"type",base:le,typeMap:{checkbox:G}},json:{read:e=>(e&&e.type)==="checkbox"?G.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([r({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=V=t([l("esri.layers.support.BuildingFilter")],h);const yt=h;let u=class extends f{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([r({type:String})],u.prototype,"fieldName",void 0),t([r({type:String})],u.prototype,"modelName",void 0),t([r({type:String})],u.prototype,"label",void 0),t([r({type:Number})],u.prototype,"min",void 0),t([r({type:Number})],u.prototype,"max",void 0),t([r({json:{read:e=>Array.isArray(e)&&(e.every(s=>typeof s=="string")||e.every(s=>typeof s=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([r({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([l("esri.layers.support.BuildingFieldStatistics")],u);let x=class extends Y.LoadableMixin(ee(f)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(I.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}load(e){const s=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(s)),Promise.resolve(this)}async _fetchService(e){const s=(await re(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(s,{origin:"service"})}};t([r({constructOnly:!0,type:String})],x.prototype,"url",void 0),t([r({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],x.prototype,"fields",null),x=t([l("esri.layers.support.BuildingSummaryStatistics")],x);const pe=x,ye=b.ofType(yt),H=c(m.sublayersProperty);H.json.origins["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},H.json.origins["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let n=class extends We(Ae(Ee(_e(qe(Ne(Pe(De))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Re({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.type==="building-group"?s.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,s,i){const a=m.readSublayers(e,s,i);return m.forEachSublayer(a,p=>p.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(a,this._sublayerOverrides),this._sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:s,context:i}){m.forEachSublayer(e,a=>a.read(s.get(a.id),i))}readSublayerOverrides(e,s){const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):s.messages?.push(new F("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:s}}writeSublayerOverrides(e,s,i){const a=[];m.forEachSublayer(this.sublayers,p=>{const w=p.write({},i);Object.keys(w).length>1&&a.push(w)}),a.length>0&&(s.sublayers=a)}writeUnappliedOverrides(e,s){s.sublayers=[],e.overrides.forEach(i=>{s.sublayers.push(c(i))})}write(e,s){return e=super.write(e,s),!s||s.origin!=="web-scene"&&s.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,s):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,s){if(super.read(e,s),s&&(s.origin==="web-scene"||s.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,s);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,s){if(typeof s.statisticsHRef=="string"){const i=Me(this.parsedUrl?.path,s.statisticsHRef);return new pe({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const s=d(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ke).then(()=>this._fetchService(s)).then(()=>this._fetchAssociatedFeatureService(s));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Ce(this,e=>{m.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,s){return this._debouncedSaveOperations(J.SAVE_AS,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(J.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new F("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&I.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&I.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const s=new He(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await s.fetchPortalItem()}catch(i){I.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",i)}}};t([r({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],n.prototype,"allSublayers",void 0),t([r(H)],n.prototype,"sublayers",void 0),t([j("service","sublayers")],n.prototype,"readSublayers",null),t([r({type:ye,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),t([r({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),t([r({readOnly:!0,type:pe})],n.prototype,"summaryStatistics",void 0),t([j("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),t([r({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),t([r(Ue)],n.prototype,"fullExtent",void 0),t([r({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),t([r(q(se))],n.prototype,"spatialReference",void 0),t([r(Qe)],n.prototype,"elevationInfo",null),t([r({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([r()],n.prototype,"associatedFeatureServiceItem",void 0),n=t([l("esri.layers.BuildingSceneLayer")],n);const _t=n;export{_t as default};