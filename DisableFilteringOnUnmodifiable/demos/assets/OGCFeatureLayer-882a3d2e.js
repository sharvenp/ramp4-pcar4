import{e as t,y as s,n as O,m as L,bH as N,b as H,k as g,r as b,fs as J,f as C,lm as k,lE as Z,lF as z,lG as U,l8 as V,lD as K,lH as W,l9 as Y,aY as X,aZ as ee,la as te,a_ as re,lI as w,lf as se,fJ as R,lJ as oe,lp as ie,fb as ne,w as pe,kI as F,lL as ae,lM as le,lK as ue,lN as de,lh as ce,fY as ye,lP as he,lg as fe,lQ as me,lS as ge,b3 as ve,li as Se,b4 as xe}from"./main-7ffb345c.js";import{N as be,F as I,v as $,x as Ce,k as we,T as Re,S as Fe,I as Ie,j as $e}from"./ogcFeatureUtils-e27d30bb.js";import"./preload-helper-388ac9d5.js";import"./geojson-2d7ac171.js";import"./clientSideDefaults-2bd3458c.js";import"./QueryEngineCapabilities-42e44ded.js";let d=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:o,spatialReference:i,supportedCrs:n},layer:{apiKey:l,customParameters:a,effectiveMaxRecordCount:p}}=this;return{type:"ogc-source",collection:e,layerDefinition:o,maxRecordCount:p,queryParameters:{apiKey:l,customParameters:a},spatialReference:i,supportedCrs:n}}queryExtent(e,o={}){return null}queryFeatureCount(e,o={}){return null}queryFeatures(e,o={}){return this.queryFeaturesJSON(e,o).then(i=>N.fromJSON(i))}queryFeaturesJSON(e,o={}){const i=this.getSource();return this.load(o).then(()=>be(i,e,o))}queryObjectIds(e,o={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,o){const i=new RegExp(`^${o}$`,"i");return e.conformsTo.some(n=>i.test(n))??!1}_getCapabilities(e,o){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:o,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){const o=e?.components?.parameters;return o?.limit?.schema?.maximum??o?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const o=e.storageCrs??I,i=$(o);return H(i)?g.WGS84:new g({wkid:i})}_getSupportedSpatialReferences(e,o){const i="#/crs",n=e.crs??[I],l=n.includes(i)?n.filter(p=>p!==i).concat(o.crs??[]):n,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(p=>!a.test(p))}async _loadOGCServices(e,o){const i=b(o)?o.signal:null,{apiKey:n,collectionId:l,customParameters:a,fields:p,geometryType:T,hasZ:D,objectIdField:j,timeInfo:P,url:E}=e,_={fields:p?.map(u=>u.toJSON()),geometryType:J.toJSON(T),hasZ:D??!1,objectIdField:j,timeInfo:P?.toJSON()},c={apiKey:n,customParameters:a,signal:i},h=await Ce(E,c),[v,S]=await Promise.all([we(h,c),Re(h,c)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new C("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=S.collections.find(u=>u.id===l);if(!y)throw new C("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Fe(h,c):null,x=await Ie(y,_,c),M=this._getMaxRecordCount(q),G=this._getCapabilities(x.hasZ,M),Q=this._getStorageSpatialReference(y).toJSON(),A=this._getSupportedSpatialReferences(y,S),B=new RegExp(`^${$e}`,"i"),f={};for(const u of A){const m=$(u);b(m)&&(f[m]||(f[m]=u.replace(B,"")))}this.featureDefinition={capabilities:G,collection:y,layerDefinition:x,spatialReference:Q,supportedCrs:f}}};t([s()],d.prototype,"featureDefinition",void 0),t([s({constructOnly:!0})],d.prototype,"layer",void 0),t([s()],d.prototype,"type",void 0),d=t([O("esri.layers.graphics.sources.OGCFeatureSource")],d);const Oe=Se();let r=class extends k(Z(z(U(V(K(W(Y(X(ee(te(re(xe)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){w(e,this.fieldsIndex),this._set("renderer",e)}on(e,o){return super.on(e,o)}createPopupTemplate(e){return se(this,e)}createQuery(){return new R}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,o){let i,n=!1;const l=o?.feature?.attributes,a=this.typeIdField&&l?.[this.typeIdField];return a!=null&&this.types&&(n=this.types.some(p=>p.id==a&&(i=p.domains?.[e],i?.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),n||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,o){return this.load().then(()=>this.source.queryFeatures(R.from(e)||this.createQuery(),o)).then(i=>(i?.features?.forEach(n=>{n.layer=n.sourceLayer=this}),i))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),w(this.renderer,this.fieldsIndex),oe(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const o of this.fields)if(o.name===e&&o.domain)return o.domain;return null}};t([s({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),t([s({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),t([s({type:String})],r.prototype,"copyright",void 0),t([s({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),t([s({type:String})],r.prototype,"definitionExpression",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),t([s({type:String})],r.prototype,"displayField",void 0),t([s({type:Number})],r.prototype,"effectiveMaxRecordCount",null),t([s(ie)],r.prototype,"elevationInfo",void 0),t([s({type:[ne],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),t([s(Oe.fieldsIndex)],r.prototype,"fieldsIndex",void 0),t([s({readOnly:!0,type:pe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),t([s({type:F.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:F.read}}}}})],r.prototype,"geometryType",void 0),t([s({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),t([s({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),t([s({type:[ae],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:le},write:!0}}}})],r.prototype,"labelingInfo",void 0),t([s(ue)],r.prototype,"labelsVisible",void 0),t([s(de)],r.prototype,"legendEnabled",void 0),t([s({type:Number})],r.prototype,"maxRecordCount",void 0),t([s({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),t([s({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),t([s(ce)],r.prototype,"popupEnabled",void 0),t([s({type:ye,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),t([s({types:he,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:fe,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),t([s(me)],r.prototype,"screenSizePerspectiveEnabled",void 0),t([s({readOnly:!0})],r.prototype,"source",void 0),t([s({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),t([s({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),t([s({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t([s({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),t([s({type:[ge]})],r.prototype,"types",void 0),t([s(ve)],r.prototype,"url",void 0),r=t([O("esri.layers.OGCFeatureLayer")],r);const qe=r;export{qe as default};
