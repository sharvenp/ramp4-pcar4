import{_ as M}from"./preload-helper-388ac9d5.js";import{e as r,y as o,k as b,dB as R,dC as W,bv as _,bi as L,bE as Z,el as O,gZ as z,dO as h,g_ as B,br as H,e2 as X,M as Y,t as g,U as D,aE as ee,a9 as te,ha as se,gb as re,dI as ie,dJ as oe,dK as ae,dL as ne,ga as le,r as p,cp as pe,fT as E,ii as de,p as c,dM as ye,a3 as ue,fN as ce,ij as he,c as d,j as fe,fV as ge,V as me,e0 as ve,h2 as $,bq as be,g6 as we,ik as Ie,il as Le,im as Se,fW as Fe,fX as je,fY as _e,fZ as x,dQ as Oe,io as Ee,g1 as $e,f$ as xe,bw as Te,g2 as Ae,g5 as Pe,a4 as Re}from"./main-0e79698b.js";import{E as De,L as T}from"./SceneService-d9719db9.js";import{t as Ne,u as Ue,l as qe}from"./FetchAssociatedFeatureLayer-e5192064.js";import{s as N,l as Ce,u as Qe,m as ke}from"./I3SLayerDefinitions-4130edac.js";import{g as Ge}from"./persistable-e36a12f9.js";import{d as Ve,s as Je}from"./popupUtils-d02dc4ba.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-cee19074.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-b9b57ea4.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-4a8a4cda.js";import"./VertexAttribute-15d1866a.js";import"./spatialReferenceEllipsoidUtils-0743e646.js";import"./symbolColorUtils-2e536238.js";import"./vec3f32-ad1dc57f.js";import"./plane-51830c91.js";import"./sphere-3864607a.js";import"./resourceExtension-9ab73a02.js";let y=class extends R{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};r([o({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0),r([o({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0),r([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=r([b("esri.layers.support.RangeInfo")],y);var v;let S=v=class extends W(_.ofType(L)){constructor(e){super(e)}clone(){return new v(this.items.map(e=>e.clone()))}write(e,s){return this.toJSON(s)}toJSON(e){const s=e?.layer?.spatialReference;return s?this.toArray().map(t=>{if(!s.equals(t.spatialReference)){if(!Z(t.spatialReference,s))return e&&e.messages&&e.messages.push(new O("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new L;z(t,n,s),t=n}const a=t.toJSON(e);return delete a.spatialReference,a}).filter(t=>t!=null):(e?.messages&&e.messages.push(new O("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(t=>t.toJSON(e)))}static fromJSON(e,s){const t=new v;return e.forEach(a=>t.add(L.fromJSON(a,s))),t}};S=v=r([b("esri.layers.support.PolygonCollection")],S);const F=S;var j;let f=j=class extends R{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new F,this._geometriesSource=null,this._handles=new B}initialize(){this._handles.add(H(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,X))}destroy(){this._handles.destroy()}readGeometries(e,s,t){this._geometriesSource={url:Y(e,t),context:t}}async loadGeometries(e,s){if(g(this._geometriesSource))return;const{url:t,context:a}=this._geometriesSource,n=await D(t,{responseType:"json",signal:ee(s,"signal")}),l=e.toJSON(),u=n.data.map(w=>({...w,spatialReference:l}));this.geometries=F.fromJSON(u,a),this._geometriesSource=null}clone(){return new j({geometries:te(this.geometries),spatialRelationship:this.spatialRelationship})}};r([o({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),r([o({type:F,nonNullable:!0,json:{write:!0}}),Ge({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),r([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=j=r([b("esri.layers.support.SceneFilter")],f);const Ke=f,Me=["3DObject","Point"],A=Pe();let i=class extends se(De(re(ie(oe(ae(ne(le(Re)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new _,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){const t=this.getFeatureType(s?.feature)?.domains?.[e];return t&&t.type!=="inherited"?t:this.getField(e)?.domain??null}getFeatureType(e){return e!=null&&p(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return p(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return p(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return p(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new pe(this.fields)}readNodePages(e,s,t){return s.layerType==="Point"&&(e=s.pointNodePages),e==null||typeof e!="object"?null:N.fromJSON(e,t)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return We[this.profile]||"mesh"}set renderer(e){E(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){const e=p(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ne,{query:s,editing:{supportsGlobalId:t,supportsRollbackOnFailure:a,supportsUploadWithItemId:n,supportsGeometryUpdate:l,supportsReturnServiceEditsInSourceSpatialReference:u},data:{supportsZ:w,supportsM:U,isVersioned:q,supportsAttachment:C},operations:{supportsEditing:Q,supportsAdd:k,supportsUpdate:G,supportsDelete:V,supportsQuery:J,supportsQueryAttachments:K}}=e,m=e.operations.supportsChangeTracking,I=p(this.associatedLayer)&&p(this.associatedLayer.infoFor3D)&&de();return{query:s,editing:{supportsGlobalId:t,supportsReturnServiceEditsInSourceSpatialReference:u,supportsRollbackOnFailure:a,supportsGeometryUpdate:I&&l,supportsUploadWithItemId:n},data:{supportsAttachment:C,supportsZ:w,supportsM:U,isVersioned:q},operations:{supportsQuery:J,supportsQueryAttachments:K,supportsEditing:Q&&m,supportsAdd:I&&k&&m,supportsDelete:I&&V&&m,supportsUpdate:G&&m}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return p(this.associatedLayer)?this.associatedLayer.infoFor3D:null}get defaultPopupTemplate(){return p(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,s){return!e&&s.fields&&s.fields.some(t=>(t.type==="esriFieldTypeOID"&&(e=t.name),!!e)),e||void 0}readGlobalIdField(e,s){return!e&&s.fields&&s.fields.some(t=>(t.type==="esriFieldTypeGlobalID"&&(e=t.name),!!e)),e||void 0}get displayField(){return p(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,s){const t=s.store.profile;return t!=null&&P[t]?P[t]:(c.getLogger(this.declaredClass).error("Unknown or missing profile",{profile:t,layer:this}),"mesh-pyramids")}load(e){const s=p(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ye).then(()=>this._fetchService(s)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,s),this._setAssociatedFeatureLayer(s),p(this.filter)?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>ue(this,{origin:"service"},s)).then(()=>E(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(t),Promise.resolve(this)}async beforeSave(){p(this.filter)&&await this.load()}createQuery(){const e=new ce;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryFeatures(e||this.createQuery(),s)).then(t=>{if(t?.features)for(const a of t.features)a.layer=this,a.sourceLayer=this;return t})}async queryCachedAttributes(e,s){const t=he(this.fieldsIndex,await Ve(this,Je(this)));return Ue(this.parsedUrl.path,this.attributeStorageInfo??[],e,s,t)}async queryCachedFeature(e,s){const t=await this.queryCachedAttributes(e,[s]);if(!t||t.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new fe;return a.attributes=t[0],a.layer=this,a.sourceLayer=this,a}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryObjectIds(e||this.createQuery(),s))}queryAttachments(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryAttachments(e,s))}getFieldUsageInfo(e){const s={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||s:(c.getLogger(this.declaredClass).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),s)}createPopupTemplate(e){return ge(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return p(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),g(this.associatedLayer))throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(s=>s.name===e)}async queryCachedStatistics(e,s){if(await this.load(s),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const t=this.fieldsIndex.get(e);if(!t)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.statisticsInfo)if(a.name===t.name){const n=me(this.parsedUrl.path,a.href);return D(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:s?s.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,s){return this._debouncedSaveOperations(T.SAVE_AS,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(T.SAVE,e)}async applyEdits(e,s){const t=await M(()=>import("./editingSupport-adbcffa7.js"),["./editingSupport-adbcffa7.js","./main-0e79698b.js","./preload-helper-388ac9d5.js","./main-a75f83d6.css","./assetEditingSupport-2cebf928.js"],import.meta.url);if(await this.load(),g(this.associatedLayer))throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),t.applyEdits(this,this.associatedLayer.source,e,s)}on(e,s){return super.on(e,s)}validateLayer(e){if(e.layerType&&!Me.includes(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function s(t,a){let n=!1,l=!1;if(t==null)n=!0,l=!0;else{const u=a&&a.isGeographic;switch(t){case"east-north-up":case"earth-centered":n=!0,l=u;break;case"vertex-reference-frame":n=!0,l=!u;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}s(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const s=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(n=>n.name===e.name)),t=!!(p(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(n=>n&&e.name===n.name)),a={supportsLabelingInfo:s,supportsRenderer:s,supportsPopupTemplate:s||t,supportsLayerQuery:t};this._fieldUsageInfo[e.name]=a}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(g(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const s of this.associatedLayer.fields){const t=this.getField(s.name);t?(!t.domain&&s.domain&&(t.domain=s.domain.clone()),t.editable=s.editable,t.nullable=s.nullable,t.length=s.length):(e||(e=this.fields?this.fields.slice():[]),e.push(s.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(g(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],s=ve(this);for(let t=0;t<e.length;t++){const a=e[t],n=this.originIdOf(a),l=this.associatedLayer.originIdOf(a);n<l&&(l===$.SERVICE||l===$.PORTAL_ITEM)&&s.setAtOrigin(a,this.associatedLayer[a],l)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const s=new qe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await s.fetch()}catch(t){be(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await we(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.getLogger(this.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.getLogger(this.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode==="relative-to-scene"&&c.getLogger(this.declaredClass).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.getLogger(this.declaredClass).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};r([o({types:{key:"type",base:Ie,typeMap:{selection:Le}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),r([o({type:[y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),r([o({json:{read:!1}})],i.prototype,"associatedLayer",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([o({...A.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"fields",void 0),r([o()],i.prototype,"types",null),r([o()],i.prototype,"typeIdField",null),r([o()],i.prototype,"formTemplate",null),r([o({readOnly:!0})],i.prototype,"fieldsIndex",null),r([o({type:Se,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),r([o(A.outFields)],i.prototype,"outFields",void 0),r([o({type:N,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),r([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),r([o({type:[Ce],readOnly:!0})],i.prototype,"materialDefinitions",void 0),r([o({type:[Qe],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),r([o({type:[ke],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),r([o({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o({readOnly:!0})],i.prototype,"statisticsInfo",void 0),r([o({type:_.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),r([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([o({type:Ke,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],i.prototype,"filter",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(Fe)],i.prototype,"elevationInfo",null),r([o({type:String})],i.prototype,"geometryType",null),r([o(je)],i.prototype,"labelsVisible",void 0),r([o({type:[_e],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:x},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:x},write:!0}})],i.prototype,"labelingInfo",void 0),r([o(Oe)],i.prototype,"legendEnabled",void 0),r([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,s){if(typeof e=="number"&&e>=0&&e<=1)return e;const t=s.layerDefinition?.drawingInfo?.transparency;return t!==void 0?Ee(t):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"priority",void 0),r([o({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"semantic",void 0),r([o({types:$e,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),r([o({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),r([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),r([o({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),r([o({readOnly:!0,json:{write:!1,read:!1}})],i.prototype,"infoFor3D",null),r([o(xe)],i.prototype,"popupEnabled",void 0),r([o({type:Te,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),r([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),r([o({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),r([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),r([o({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),r([o({type:String,json:{read:!1}})],i.prototype,"profile",void 0),r([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),r([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),r([o(Ae)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=r([b("esri.layers.SceneLayer")],i);const P={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},We={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},gt=i;export{gt as default};
