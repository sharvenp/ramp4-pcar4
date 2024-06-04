import{ar as p,du as l,iD as o,r as g,dz as _,dL as d,dU as f,d as w,f as u,aS as E,at as q,u as F}from"./main-95e6e76d.js";import{g as S}from"./FeatureStore-8627cc82.js";import{g as x,f as T}from"./projectionSupport-8db80048.js";import{e as j}from"./QueryEngine-b49df394.js";import{T as I,I as b}from"./geojson-ca8e7065.js";import{m as C}from"./sourceUtils-22e5acf9.js";import{K as P}from"./wfsUtils-38f42c4b.js";import"./preload-helper-388ac9d5.js";import"./BoundsStore-6f2a014f.js";import"./PooledRBush-4d46dc5b.js";import"./centroid-b78488a5.js";import"./utils-9d5edc3a.js";import"./json-48e3ea08.js";import"./QueryEngineResult-b4b2ed0b.js";import"./quantizationUtils-ed808b6c.js";import"./WhereClause-6fe7fe47.js";import"./executionError-c1d13a98.js";import"./utils-dfcc9c29.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-3cdd6d88.js";import"./xmlUtils-444cb4c0.js";class Y{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await P(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await I(i),p(t);const s=b(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!l(this._queryEngine.spatialReference,o))for(const r of s)g(r.geometry)&&(r.geometry=_(x(d(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of s){const a={};C(this._fieldsIndex,a,r.attributes,!0),r.attributes=a,r.attributes[e]==null&&(r.objectId=r.attributes[e]=n++)}return s}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:s,spatialReference:n,fields:r,geometryType:a,featureType:h,objectIdField:y,customParameters:m}=t;this._featureType=h,this._customParameters=m,this._getFeatureUrl=i,this._getFeatureOutputFormat=s,this._fieldsIndex=new f(r),await this._checkProjection(n),p(e),this._queryEngine=new j({fields:r,geometryType:a,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:a,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(w(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this._customParameters=t,this._snapshotTask?.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)},e=>{this._queryEngine.featureStore.clear(),q(e)||F.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await T(o,t)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{Y as default};
