import{_ as C}from"./preload-helper.387dac8f.js";import{K as r,N as o,O as v,an as P,lE as V,j as F,bS as w,fu as K,kr as _,lD as J,dC as h,bN as M,eS as W,fi as z,aM as Z,i as m,U as R,dE as B,m as H,a6 as X,dv as Y,dw as ee,dx as te,ki as se,dy as re,kv as ie,dD as oe,e as p,d9 as ae,kW as O,cb as ne,t as le,v as pe,km as de,s as d,G as ye,kK as ue,l$ as E,b2 as ce,fb as he,m0 as fe,m1 as me,m2 as ge,ky as ve,kZ as be,k_ as we,k$ as $,kM as Ie,m3 as Se,ko as Le,kp as Fe,fe as je,l2 as _e,kq as Oe}from"./main.4cbfea05.js";import{A as Ee,K as x}from"./SceneService.a1df14ae.js";import{t as $e,l as xe}from"./FetchAssociatedFeatureLayer.baaba4e2.js";import{s as D,l as Te,u as Ae,m as Pe}from"./I3SLayerDefinitions.777e8966.js";import{w as Re}from"./persistable.8aba52f9.js";import"./originUtils.68552ec1.js";import"./multiOriginJSONSupportUtils.8128aa52.js";import"./resourceUtils.3a20540f.js";let y=class extends P{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};r([o({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0),r([o({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0),r([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0),r([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=r([v("esri.layers.support.RangeInfo")],y);var g;let I=g=class extends V(F.ofType(w)){constructor(e){super(e)}clone(){return new g(this.items.map(e=>e.clone()))}write(e,s){return this.toJSON(s)}toJSON(e){const s=e?.layer?.spatialReference;return s?this.toArray().map(t=>{if(!s.equals(t.spatialReference)){if(!K(t.spatialReference,s))return e&&e.messages&&e.messages.push(new _("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new w;J(t,n,s),t=n}const a=t.toJSON(e);return delete a.spatialReference,a}).filter(t=>t!=null):(e?.messages&&e.messages.push(new _("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(t=>t.toJSON(e)))}static fromJSON(e,s){const t=new g;return e.forEach(a=>t.add(w.fromJSON(a,s))),t}};I=g=r([v("esri.layers.support.PolygonCollection")],I);const S=I;var L;let f=L=class extends P{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new S,this._geometriesSource=null,this._handles=new M}initialize(){this._handles.add(W(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,z))}destroy(){this._handles.destroy()}readGeometries(e,s,t){this._geometriesSource={url:Z(e,t),context:t}}async loadGeometries(e,s){if(m(this._geometriesSource))return;const{url:t,context:a}=this._geometriesSource,n=await R(t,{responseType:"json",signal:B(s,"signal")}),l=e.toJSON(),u=n.data.map(b=>({...b,spatialReference:l}));this.geometries=S.fromJSON(u,a),this._geometriesSource=null}clone(){return new L({geometries:H(this.geometries),spatialRelationship:this.spatialRelationship})}};r([o({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),r([o({type:S,nonNullable:!0,json:{write:!0}}),Re({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),r([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=L=r([v("esri.layers.support.SceneFilter")],f);const De=f,Ne=["3DObject","Point"],c=X.getLogger("esri.layers.SceneLayer"),T=Oe();let i=class extends Ee(Y(ee(te(se(re(ie(oe))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new F,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){const t=this.getFeatureType(s?.feature)?.domains?.[e];return t&&t.type!=="inherited"?t:this.getField(e)?.domain??null}getFeatureType(e){return e&&p(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return p(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return p(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return p(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new ae(this.fields)}readNodePages(e,s,t){return s.layerType==="Point"&&(e=s.pointNodePages),e==null||typeof e!="object"?null:D.fromJSON(e,t)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return ke[this.profile]||"mesh"}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){const e=p(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:$e,{query:s,editing:{supportsGlobalId:t,supportsRollbackOnFailure:a,supportsUploadWithItemId:n,supportsReturnServiceEditsInSourceSpatialReference:l},data:{supportsZ:u,supportsM:b,isVersioned:N,supportsAttachment:k},operations:{supportsEditing:U,supportsUpdate:q,supportsQuery:Q,supportsQueryAttachments:G}}=e,j=e.operations.supportsChangeTracking;return{query:s,editing:{supportsGlobalId:t,supportsReturnServiceEditsInSourceSpatialReference:l,supportsRollbackOnFailure:a,supportsGeometryUpdate:!1,supportsUploadWithItemId:n},data:{supportsAttachment:k,supportsZ:u,supportsM:b,isVersioned:N},operations:{supportsQuery:Q,supportsQueryAttachments:G,supportsEditing:U&&j,supportsAdd:!1,supportsDelete:!1,supportsUpdate:q&&j}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){e!=null?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return p(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,s){return!e&&s.fields&&s.fields.some(t=>(t.type==="esriFieldTypeOID"&&(e=t.name),!!e)),e||void 0}readGlobalIdField(e,s){return!e&&s.fields&&s.fields.some(t=>(t.type==="esriFieldTypeGlobalID"&&(e=t.name),!!e)),e||void 0}get displayField(){return p(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,s){const t=s.store.profile;return t!=null&&A[t]?A[t]:(c.error("Unknown or missing profile",{profile:t,layer:this}),"mesh-pyramids")}load(e){const s=p(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ne).then(()=>this._fetchService(s)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,s),this._setAssociatedFeatureLayer(s),p(this.filter)?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>le(this,{origin:"service"},s)).then(()=>O(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(t),Promise.resolve(this)}async beforeSave(){p(this.filter)&&await this.load()}createQuery(){const e=new pe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryFeatures(e||this.createQuery(),s)).then(t=>{if(t?.features)for(const a of t.features)a.layer=this,a.sourceLayer=this;return t})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryObjectIds(e||this.createQuery(),s))}queryAttachments(e,s){return this._getAssociatedLayerForQuery().then(t=>t.queryAttachments(e,s))}getFieldUsageInfo(e){const s={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||s:(c.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),s)}createPopupTemplate(e){return de(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return p(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),m(this.associatedLayer))throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(s=>s.name===e)}async queryCachedStatistics(e,s){if(await this.load(s),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const t=this.fieldsIndex.get(e);if(!t)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.statisticsInfo)if(a.name===t.name){const n=ye(this.parsedUrl.path,a.href);return R(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:s?s.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,s){return this._debouncedSaveOperations(x.SAVE_AS,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(x.SAVE,e)}async applyEdits(e,s){const t=await C(()=>import("./editingSupport.02270392.js"),["assets/editingSupport.02270392.js","assets/main.4cbfea05.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js"]);if(await this.load(),m(this.associatedLayer))throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),t.applyEdits(this,this.associatedLayer.source,e,s)}on(e,s){return super.on(e,s)}validateLayer(e){if(e.layerType&&!Ne.includes(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function s(t,a){let n=!1,l=!1;if(t==null)n=!0,l=!0;else{const u=a&&a.isGeographic;switch(t){case"east-north-up":case"earth-centered":n=!0,l=u;break;case"vertex-reference-frame":n=!0,l=!u;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}s(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const s=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(n=>n.name===e.name)),t=!!(p(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(n=>n&&e.name===n.name)),a={supportsLabelingInfo:s,supportsRenderer:s,supportsPopupTemplate:s||t,supportsLayerQuery:t};this._fieldUsageInfo[e.name]=a}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(m(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const s of this.associatedLayer.fields){const t=this.getField(s.name);t?(!t.domain&&s.domain&&(t.domain=s.domain.clone()),t.editable=s.editable,t.nullable=s.nullable,t.length=s.length):(e||(e=this.fields?this.fields.slice():[]),e.push(s.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(m(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],s=ue(this);for(let t=0;t<e.length;t++){const a=e[t],n=this.originIdOf(a),l=this.associatedLayer.originIdOf(a);n<l&&(l===E.SERVICE||l===E.PORTAL_ITEM)&&s.setAtOrigin(a,this.associatedLayer[a],l)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const s=new xe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await s.fetch()}catch(t){ce(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await he(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode==="relative-to-scene"&&c.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};r([o({types:{key:"type",base:fe,typeMap:{selection:me}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),r([o({type:[y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),r([o({json:{read:!1}})],i.prototype,"associatedLayer",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([o({...T.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"fields",void 0),r([o()],i.prototype,"types",null),r([o()],i.prototype,"typeIdField",null),r([o()],i.prototype,"formTemplate",null),r([o({readOnly:!0})],i.prototype,"fieldsIndex",null),r([o({type:ge,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),r([o(T.outFields)],i.prototype,"outFields",void 0),r([o({type:D,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),r([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),r([o({type:[Te],readOnly:!0})],i.prototype,"materialDefinitions",void 0),r([o({type:[Ae],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),r([o({type:[Pe],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),r([o({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o({readOnly:!0})],i.prototype,"statisticsInfo",void 0),r([o({type:F.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),r([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([o({type:De,json:{name:"layerDefinition.polygonFilter",write:!0}})],i.prototype,"filter",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(ve)],i.prototype,"elevationInfo",null),r([o({type:String})],i.prototype,"geometryType",null),r([o(be)],i.prototype,"labelsVisible",void 0),r([o({type:[we],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:$},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:$},write:!0}})],i.prototype,"labelingInfo",void 0),r([o(Ie)],i.prototype,"legendEnabled",void 0),r([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,s){if(typeof e=="number"&&e>=0&&e<=1)return e;const t=s.layerDefinition?.drawingInfo?.transparency;return t!==void 0?Se(t):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"priority",void 0),r([o({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"semantic",void 0),r([o({types:Le,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),r([o({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),r([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),r([o({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),r([o(Fe)],i.prototype,"popupEnabled",void 0),r([o({type:je,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),r([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),r([o({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),r([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),r([o({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),r([o({type:String,json:{read:!1}})],i.prototype,"profile",void 0),r([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),r([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),r([o(_e)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=r([v("esri.layers.SceneLayer")],i);const A={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ke={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},We=i;export{We as default};