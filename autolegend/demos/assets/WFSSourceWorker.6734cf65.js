import{b3 as h,cL as l,hE as o,e as g,cQ as _,q as d,d9 as f,ae as w,s as u,bO as E,b2 as q,a6 as F}from"./main.4cbfea05.js";import{u as S}from"./FeatureStore.02d26dd4.js";import{g as x,f as T}from"./projectionSupport.75d4be9e.js";import{Y as b}from"./QueryEngine.3e5ef32f.js";import{O as I,L as j}from"./geojson.a99b0e3e.js";import{m as C}from"./sourceUtils.f5bab99d.js";import{K as P}from"./wfsUtils.9fb43b7a.js";import"./preload-helper.387dac8f.js";import"./PooledRBush.e5faa0ac.js";import"./centroid.afdacd26.js";import"./json.d1a0fa35.js";import"./QueryEngineResult.385b5638.js";import"./quantizationUtils.e8ec02b2.js";import"./WhereClause.1cd394dd.js";import"./utils.f3060e6f.js";import"./utils.23a175fc.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./timeSupport.8c38eb2b.js";import"./xmlUtils.986ddba5.js";class J{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await P(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await I(i),h(t);const s=j(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!l(this._queryEngine.spatialReference,o))for(const r of s)g(r.geometry)&&(r.geometry=_(x(d(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of s){const a={};C(this._fieldsIndex,a,r.attributes,!0),r.attributes=a,r.attributes[e]==null&&(r.objectId=r.attributes[e]=n++)}return s}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:s,spatialReference:n,fields:r,geometryType:a,featureType:p,objectIdField:y,customParameters:m}=t;this._featureType=p,this._customParameters=m,this._getFeatureUrl=i,this._getFeatureOutputFormat=s,this._fieldsIndex=new f(r),await this._checkProjection(n),h(e),this._queryEngine=new b({fields:r,geometryType:a,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:a,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(w(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this._customParameters=t,this._snapshotTask?.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)},e=>{this._queryEngine.featureStore.clear(),q(e)||F.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await T(o,t)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{J as default};