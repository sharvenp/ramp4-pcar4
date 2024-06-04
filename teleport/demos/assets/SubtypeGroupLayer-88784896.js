import{_ as W}from"./preload-helper-388ac9d5.js";import{e as i,y as s,b1 as $,bg as k,n as x,R as ee,ni as te,ng as re,bC as N,a_ as M,cC as ie,b8 as w,o as se,u as ne,lI as oe,f_ as P,r as E,f as h,lf as ae,nj as U,dE as A,n8 as Q,fJ as H,nk as le,lK as pe,lL as ue,lM as de,lN as ye,nf as ce,ne as he,lh as be,fY as fe,lR as J,cT as B,nl as me,nd as ge,nm as ve,li as Y,nn as we,no as $e,np as Fe,m as Oe,nq as Ie,n6 as Se,l8 as je,lH as Ee,l9 as Te,la as Ce,aX as _e,aY as Le,aZ as xe,lE as Pe,lm as Ae,aN as qe,j as L,O as De,g0 as Ge,aO as Re,b0 as Ve,nr as ke,ns as Ne,Y as Me,V as Ue,lr as Qe,nt as He,nu as Je,nv as Be,bo as Ye,nw as ze,nx as Ze,ln as Ke,ny as Xe,nz as We,nA as et,nB as tt,nC as rt,nD as it,nE as st,lJ as nt,nF as ot,lq as at,mJ as q,nG as lt,b4 as pt}from"./main-bbf05f59.js";let m=class extends ee{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=te(e[r]);return t}writeDomains(e,t){if(!e)return;const r={};for(const n of Object.keys(e))e[n]&&(r[n]=e[n]?.toJSON());t.domains=r}};i([s({type:Number,json:{write:!0}})],m.prototype,"code",void 0),i([s({type:Object,json:{write:!0}})],m.prototype,"defaultValues",void 0),i([s({json:{write:!0}})],m.prototype,"domains",void 0),i([$("domains")],m.prototype,"readDomains",null),i([k("domains")],m.prototype,"writeDomains",null),i([s({type:String,json:{write:!0}})],m.prototype,"name",void 0),m=i([x("esri.layers.support.Subtype")],m);const ut=m,dt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],z={key:"type",base:me,errorContext:"renderer",typeMap:{simple:P,"unique-value":ge,"class-breaks":ve}},D=Y(),G=re({types:z});let yt=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ct(e){return new P({symbol:ht(e)})}function ht(e){switch(e){case"point":case"multipoint":return Fe.clone();case"polyline":return $e.clone();case"polygon":case"multipatch":return we.clone();default:return null}}function bt(e,t){return!!t&&e?.type==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Z(e,t){return e==null?null:t.subtypes?.find(r=>r.code===e)}function ft(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},l=Z(e,t);if(E(l)){const{defaultValues:a}=l;for(const u in a)n[u]=a[u]}return n[t.subtypeField]=e,new J({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const K="esri.layers.support.SubtypeSublayer";let o=class extends N(M(ie(Oe))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${yt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:l}=this;let a;if(n){a=[];let u=0;n.forEach(({name:y,alias:b,editable:F,visible:O})=>{if(!O)return;const d=l?.fields?.find(T=>T.name===y);if(!d)return;const f={name:y};let v=!1;b!==d.alias&&(f.alias=b,v=!0),F!==d.editable&&(f.editable=F,v=!0),a.push(f),v&&u++}),u===0&&a.length===n.length&&(a=null)}else a=w(e);a?.length&&se(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e?.fields;if(!e||!n?.length)return null;const{subtypes:l,subtypeField:a}=e,u=l?.find(O=>O.code===r),y=u?.defaultValues,b=u?.domains,F=[];for(const O of n){const d=O.clone(),{name:f}=d,v=t?.find(S=>S.name===f);if(d.visible=!t||!!v,v){const{alias:S,editable:X}=v;S&&(d.alias=S),X===!1&&(d.editable=!1)}const T=y?.[f]??null;d.defaultValue=f===a?r:T;const C=b?.[f]??null;d.domain=f===a?null:C?C.type==="inherited"?d.domain:C.clone():null,F.push(d)}return F}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||ne.getLogger(K).error(g("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){oe(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ct(e.geometryType):null}readRendererFromService(e,t,r){if(t.type==="Table")return null;const n=t.drawingInfo?.renderer,l=G(n,t,r);let a;const{subtypeCode:u}=this;if(u!=null&&bt(l,t.subtypeField)){const y=l.uniqueValueInfos?.find(({value:b})=>(b=typeof b=="number"?String(b):b)===String(u));y&&(a=new P({symbol:y.symbol}))}else l?.type!=="simple"||l.visualVariables?.length||(a=l);return a}readRenderer(e,t,r){const n=t?.layerDefinition?.drawingInfo?.renderer;return n?n.visualVariables?.some(a=>a.type!=="rotationInfo")?void 0:G(n,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[ft(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Z(this.subtypeCode,t);return E(r)?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw g("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw g("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw g("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw g("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:l}=this;if(r){const{displayField:a,editFieldsInfo:u,objectIdField:y}=r;t={displayField:a,editFieldsInfo:u,fields:n,objectIdField:y,title:l}}return ae(t,e)}createQuery(){if(!this.parent)throw g("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=A(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return dt.some(e=>this.originIdOf(e)===Q.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw g("queryAttachments");const n=e.clone();return n.where=R(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw g("queryFeatures");const n=H.from(e)??r.createQuery();return E(e)&&(n.where=R(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],o.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],o.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],o.prototype,"fieldOverrides",void 0),i([k("fieldOverrides")],o.prototype,"writeFieldOverrides",null),i([s({...D.fields,readOnly:!0,json:{read:!1}})],o.prototype,"fields",null),i([s(D.fieldsIndex)],o.prototype,"fieldsIndex",void 0),i([s({type:le,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],o.prototype,"formTemplate",void 0),i([s({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),i([s(I(w(pe)))],o.prototype,"labelsVisible",void 0),i([s({type:[ue],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:de},write:{ignoreOrigin:!0}}})],o.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],o.prototype,"layerType",void 0),i([s(I(w(ye)))],o.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],o.prototype,"listMode",void 0),i([s((()=>{const e=w(ce);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"minScale",void 0),i([s((()=>{const e=w(he);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"maxScale",void 0),i([s({readOnly:!0})],o.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],o.prototype,"opacity",void 0),i([s()],o.prototype,"parent",void 0),i([s(I(w(be)))],o.prototype,"popupEnabled",void 0),i([s({type:fe,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],o.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),i([s({types:z,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],o.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],o.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],o.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"subtypeCode",void 0),i([s({type:[J],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],o.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],o.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],o.prototype,"title",void 0),i([$("service","title",["subtypes"])],o.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"url",null),i([s({readOnly:!0})],o.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],o.prototype,"visible",void 0),o=i([x(K)],o);const R=(e,t,r)=>{const n=new RegExp(`${t}=[0-9]`),l=`${t}=${r}`,a=B(e,"");return n.test(a)?a.replace(n,l):A(l,a)},g=e=>new h(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),j=o,c="SubtypeGroupLayer",mt="esri.layers.SubtypeGroupLayer";function V(e,t){return new h("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=Y();let p=class extends Ie(Se(je(Ee(Te(Ce(_e(Le(xe(M(Pe(Ae(N(pt))))))))))))){constructor(...e){super(...e),this._handles=new qe,this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(L.ofType(j)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(De(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Ge))}destroy(){this.source?.destroy(),this._handles=Re(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=E(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Ve).then(async()=>{if(!this.url)throw new h("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new h("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>ke(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ne(this)}get parsedUrl(){const e=Me(this.url);return e!=null&&this.layerId!=null&&(e.path=Ue(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Qe(this.url,t):t}async addAttachment(e,t){return He(this,e,t,c)}async updateAttachment(e,t,r){return Je(this,e,t,r,c)}async applyEdits(e,t){return Be(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Ye(W(()=>import("./FeatureLayerSource-1f522978.js"),["./FeatureLayerSource-1f522978.js","./main-bbf05f59.js","./preload-helper-388ac9d5.js","./main-a75f83d6.css","./assetEditingSupport-2cebf928.js","./clientSideDefaults-fe42164a.js","./QueryEngineCapabilities-42e44ded.js"],import.meta.url),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=A(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return ze(this,e,t,c)}async fetchRecomputedExtents(e){return Ze(this,e,c)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this._sublayerLookup.get(r)}loadAll(){return Ke(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Xe(this,e,t,c)}async queryFeatures(e,t){const r=await this.load(),n=H.from(e)??r.createQuery(),l=B(n.outFields,[]);l.includes(this.subtypeField)||(l.push(this.subtypeField),n.outFields=l);const a=await r.source.queryFeatures(n,t);if(a?.features)for(const u of a.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return a}async queryObjectIds(e,t){return We(this,e,t,c)}async queryFeatureCount(e,t){return et(this,e,t,c)}async queryExtent(e,t){return tt(this,e,t,c)}async queryRelatedFeatures(e,t){return rt(this,e,t,c)}async queryRelatedFeaturesCount(e,t){return it(this,e,t,c)}write(e,t){const{origin:r,layerContainerType:n,messages:l}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return l?.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return l?.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(l?.push(new h("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&st(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new h("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new h("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),nt(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return ot(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([s({readOnly:!0})],p.prototype,"createQueryVersion",null),i([s({readOnly:!0})],p.prototype,"editingEnabled",null),i([s({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([s({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([s(_.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([s(at)],p.prototype,"id",void 0),i([s({type:["show","hide","hide-children"]})],p.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],p.prototype,"operationalLayerType",void 0),i([s(_.outFields)],p.prototype,"outFields",void 0),i([s({readOnly:!0})],p.prototype,"parsedUrl",null),i([s()],p.prototype,"source",null),i([s({type:[ut],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],p.prototype,"subtypes",void 0),i([s({type:L.ofType(j),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:l})=>{const a=new j({subtypeCode:l});return a.read(t,r),a});return new(L.ofType(j))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),l=Q.PORTAL_ITEM;let a=!0;if(q(n)===l&&q(r.origin)>l){const u=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||u}return{enabled:a,ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),i([s({type:lt})],p.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([$("service","title",["name"])],p.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],p.prototype,"type",void 0),p=i([x(mt)],p);const wt=p;export{wt as default};
