import{K as o,N as l,O as v,P as U,bR as $,bO as I,iY as R,i as f,dK as O,c4 as A,a6 as B,fk as q,e as u,iZ as k,fi as M,i_ as L,C as J,v as T,M as V,cb as G,al as Q,ae as W,w as Z,i$ as Y,j0 as K,j1 as X,d2 as ee,dH as te,j2 as se,j3 as ie,hH as re,j4 as ne,fd as S,j5 as x,j6 as z,ao as ae,j7 as H,bN as oe,j8 as le,j9 as ue,k as P,ak as D,b3 as _,fb as he}from"./main.4cbfea05.js";import{h as ce,u as de}from"./FeatureStore.02d26dd4.js";import{Y as pe}from"./QueryEngine.3e5ef32f.js";import"./preload-helper.387dac8f.js";import"./PooledRBush.e5faa0ac.js";import"./centroid.afdacd26.js";import"./QueryEngineResult.385b5638.js";import"./quantizationUtils.e8ec02b2.js";import"./WhereClause.1cd394dd.js";import"./utils.f3060e6f.js";import"./projectionSupport.75d4be9e.js";import"./json.d1a0fa35.js";import"./utils.23a175fc.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./timeSupport.8c38eb2b.js";let C=class extends U{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),this.pending.length===1&&this._process()}_process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this.pending.shift(),this._process()})}};o([l()],C.prototype,"updating",void 0),C=o([v("esri.core.AsyncSequence")],C);class fe{constructor(t,s){this.data=t,this.resolution=s,this.state={type:a.CREATED},this.alive=!0}process(t){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(t,s){return{type:a.FETCH_COUNT,previous:t,task:I(async i=>{const r=await R(s.fetchCount(this,i));this.state.type===a.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(t,s){return{type:a.FETCHED_COUNT,featureCount:s,previous:t}}_gotoFetchFeatures(t,s){return{type:a.FETCH_FEATURES,previous:t,task:I(async i=>{const r=await R(s.fetchFeatures(this,t.featureCount,i));this.state.type===a.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(t,s){return{type:a.FETCHED_FEATURES,previous:t,features:s}}_goToDone(t,s){return s.finish(this,t.features),{type:a.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:a.CREATED},t.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!f(t)&&this.data.extent)||(O(t,N),A(this.data.extent,N))}}var a;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(a||(a={}));const N=$(),ge=B.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let c=class extends q{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new C,this.pendingEditsAbortController=new AbortController}get minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),s=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(u(e)&&u(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this.configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{k(e,t,({id:s},{id:i})=>s===i)||this._process()},M)}destroy(){this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){this.pendingEdits.push(e,async t=>{if(t.addedFeatures.length===0&&t.updatedFeatures.length===0&&t.deletedFeatures.length===0)return;for(const[,i]of this.pendingTiles)i.reset();const s={...t,deletedFeatures:t.deletedFeatures.map(({objectId:i,globalId:r})=>i&&i!==-1?i:this._lookupObjectIdByGlobalId(r))};await this.updatingHandles.addPromise(this.store.processEdits(s,(i,r)=>this._queryFeaturesById(i,r),this.pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!L(this.url))return;const e=I(async t=>{try{const s=await J(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:t});this.store.extent=V.fromJSON(s.data?.extent)}catch(s){G(s),ge.warn("Failed to fetch data extent",s)}});this.updatingHandles.addPromise(e.promise.then(()=>this._process())),this.handles.add(Q(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability(f(e)?1:e.coveredArea/e.fullArea),!f(e))for(const{data:t,resolution:s}of e.missingTiles){const i=this.pendingTiles.get(t.id);i?(i.resolution=s,i.alive=!0):this._createPendingTile(t,s)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.tilesOfInterest[t],i=this.store.process(s,(r,n)=>this._verifyTileComplexity(r,n));f(e)?e=i:e.prepend(i)}return e}_deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,s)=>this._fetchCount(t,s),fetchFeatures:(t,s,i)=>this._fetchFeatures(t,s,i),finish:(t,s)=>this._finishPendingTile(t,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<_e}_verifyFeatureDensity(e,t){if(f(this.tileInfo))return!1;const s=this.tileSize*t;return e*(me/(s*s))<Ee}_ensureFetchAllCounts(e){let t=!0;for(const[,s]of this.pendingTiles)s.state.type<a.FETCHED_COUNT&&this.updatingHandles.addPromise(s.process(e)),s.state.type<=a.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(f(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const s=new fe(e,t);return this.pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:b,signal:t})}async _fetchFeatures(e,t,s){let i,r=0,n=0,d=t;for(;;){const g=this._createFeaturesQuery(e),p=this._setPagingParameters(g,r,d),{features:h,exceededTransferLimit:y}=await this._queryFeatures(g,s);if(p&&(r+=W(g.num)),n+=h.length,i=i?i.concat(h):h,d=t-n,!p||!y||d<=0)return i}}_filterProperties(e){return f(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if(f(t))throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach(r=>{e===r.attributes[t]&&(i=r.objectId??r.attributes[s])}),f(i))throw new Error(`Expected to find a feature with globalId ${e}`);return i}_queryFeaturesById(e,t){const s=this._createFeaturesQuery(null);return s.objectIds=e,this._queryFeatures(s,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:s}=this,{data:i}=await Z(this.url,e,new Y({sourceSpatialReference:s}),{query:this.configuration.customParameters,timeout:b,signal:t});return K(i)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:s}=this,{data:i}=await X(this.url,e,s,{query:this.configuration.customParameters,timeout:b,signal:t});return ee(i,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,u(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new T({returnZ:!1,returnM:!1,geometry:u(this.tileInfo)&&u(e)?te(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this.configuration.filter;return u(s)&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:d,supportsResultType:g}=this.capabilities.query,p=i?T.MAX_MAX_RECORD_COUNT_FACTOR:1,h=p*((g||r)&&n?n:d||ye);return e.start=t,i?(e.maxRecordCountFactor=Math.min(p,Math.ceil(s/h)),e.num=Math.min(s,e.maxRecordCountFactor*h)):e.num=Math.min(s,h),!0}};o([l({constructOnly:!0})],c.prototype,"url",void 0),o([l({constructOnly:!0})],c.prototype,"objectIdField",void 0),o([l({constructOnly:!0})],c.prototype,"globalIdField",void 0),o([l({constructOnly:!0})],c.prototype,"capabilities",void 0),o([l({constructOnly:!0})],c.prototype,"sourceSpatialReference",void 0),o([l({constructOnly:!0})],c.prototype,"spatialReference",void 0),o([l({constructOnly:!0})],c.prototype,"store",void 0),o([l({readOnly:!0})],c.prototype,"minimumVerticesPerFeature",null),o([l()],c.prototype,"filter",null),o([l()],c.prototype,"customParameters",null),o([l({readOnly:!0})],c.prototype,"configuration",null),o([l()],c.prototype,"tileInfo",null),o([l()],c.prototype,"tileSize",null),o([l()],c.prototype,"tilesOfInterest",void 0),o([l({readOnly:!0})],c.prototype,"updating",null),o([l({readOnly:!0})],c.prototype,"availability",void 0),c=o([v("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],c);const ye=2e3,b=6e5,_e=1e6,me=25,Ee=1;class Fe{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=s.byteSize,!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[i,r]of this._store){if(this._byteSize<=t)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let E=class extends U{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*se.MEGABYTES,this.tileBounds=new ce,this.tiles=new Fe,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=$()}add(e,t){const s=[];for(const i of t)this._referenceFeature(i.objectId)===m.ADDED&&s.push(i);this._addTileStorage(e,new Set(t.map(({objectId:i})=>i)),Te(t)),this.featureStore.addMany(s),this.tiles.applyByteSizeLimit(this.maximumByteSize,i=>this._removeTileStorage(i))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s){this.tiles.set(e.id,new ve(e,t,s)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}_remove({id:e}){const t=this.tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===m.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const s of e)t.objectIds.delete(s);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}async _processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const d of i){const g=re(this.tmpBoundingRect,d.geometry,r,n);f(g)||this.tileBounds.forEachInBounds(g,p=>{const h=this.tiles.get(p);this.featureStore.add(d),h.objectIds.has(d.objectId)||(h.objectIds.add(d.objectId),this._referenceFeature(d.objectId),this.tileFeatureCounts.set(h.data.id,h.objectIds.size))})}}process(e,t=()=>!0){if(f(this.tileInfo)||!e.extent||u(this.extent)&&!A(O(this.extent,this.tmpBoundingRect),e.extent))return new w(e);if(this.tiles.has(e.id))return new w(e);const s=this._createTileTree(e,this.tileInfo);return this._simplify(s,t,null,0,1),this._collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map(({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this.tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,s,i){const r=this.tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await ne(t,s,i);return this.tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const s=new j(e.level,e.row,e.col);return t.updateTileInfo(s,S.ExtrapolateOptions.POWER_OF_TWO),this.tileBounds.forEachInBounds(e.extent,i=>{const r=this.tiles.get(i).data;this._tilesAreRelated(e,r)&&this._populateChildren(s,r,t,this.tileFeatureCounts.get(r.id)||0)}),s}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,d=t.col>>r,g=e.row<<1,p=d-(e.col<<1)+(n-g<<1),h=e.children[p];if(u(h))this._populateChildren(h,t,s,i);else{const y=new j(e.level+1,n,d);s.updateTileInfo(y,S.ExtrapolateOptions.POWER_OF_TWO),e.children[p]=y,this._populateChildren(y,t,s,i)}}_simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),u(s)&&(s.children[i]=null),n);const d=r/2,g=d*d;let p=0;for(let h=0;h<e.children.length;h++){const y=e.children[h];p+=u(y)?this._simplify(y,t,e,h,d):g}return p===0?this._mergeChildren(e):1-p/n<Ie&&(this._purge(e),u(s)&&(s.children[i]=null),p=n),p}_mergeChildren(e){const t=new Set;let s=0;this._forEachLeaf(e,i=>{const r=this.tiles.get(i.id);if(r){s+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(i)}}),this._addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const s of e.children)f(s)||(s.isLeaf?t(s):this._forEachLeaf(s,t))}_purge(e){if(!f(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null}}_collectMissingTiles(e,t,s){const i=new be(s,e,this.extent);return this._collectMissingTilesRecurse(t,i,1),i.info}_collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];f(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),i):this._collectMissingTilesRecurse(n,t,i)}}_referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),t===1?m.ADDED:m.UNCHANGED}_unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return t===0?(this.refCounts.delete(e),m.REMOVED):(t>0&&this.refCounts.set(e,t),m.UNCHANGED)}get test(){return{tiles:Array.from(this.tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(e=>`${e}:${this.refCounts.get(e)}`)}}};function Te(e){return e.reduce((t,s)=>t+Ce(s),0)}function Ce(e){return 32+Se(e.geometry)+ie(e.attributes)}function Se(e){if(f(e))return 0;const t=x(e.lengths,4);return 32+x(e.coords,8)+t}o([l({constructOnly:!0})],E.prototype,"featureStore",void 0),o([l()],E.prototype,"tileInfo",void 0),o([l()],E.prototype,"extent",void 0),o([l()],E.prototype,"maximumByteSize",void 0),E=o([v("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],E);class ve{constructor(t,s,i){this.data=t,this.objectIds=s,this.byteSize=i}}class j{constructor(t,s,i){this.level=t,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(u(this.children[0])||u(this.children[1])||u(this.children[2])||u(this.children[3]))}}class w{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=z(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class be{constructor(t,s,i){this.tileInfo=t,this.extent=null,this.info=new w(s),u(i)&&(this.extent=O(i))}addMissing(t,s,i,r){const n={id:null,level:t,row:s,col:i};this.tileInfo.updateTileInfo(n,S.ExtrapolateOptions.POWER_OF_TWO),f(n.extent)||u(this.extent)&&!A(this.extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=z(n.extent))}}const Ie=.18751;var m;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(m||(m={}));let F=class extends ae.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=H(),this.handles=new oe,this.updatingHandles=new le,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}async setup(e){const{geometryType:t,objectIdField:s,timeInfo:i,fields:r}=e.serviceInfo;return this.featureStore=new de({...e.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new pe({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:r,hasZ:!1,hasM:!1,objectIdField:s,timeInfo:i?ue.fromJSON(i):null}),this.featureFetcher=new c({store:new E({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:P.fromJSON(e.spatialReference),sourceSpatialReference:P.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([D(()=>this.featureFetcher.availability,n=>this.emit("notify-availability",{availability:n}),M),D(()=>this.updating,()=>this._notifyUpdating())]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this.updatingHandles.addPromise(this.whenSetup.promise),this._updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){return await this.whenSetup.promise,_(t),{result:await this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:u(e.filter)?e.filter:{where:"1=1"}},u(t)?t.signal:null)}}async updateTiles(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),_(t),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=u(e.tileInfo)?S.fromJSON(e.tileInfo):null,{result:{}}}async refresh(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),_(t),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),_(t),await he(()=>!this.updating,t),_(t),{result:{}}}async getDebugInfo(e,t){return _(t),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),_(t);const s=H();return this.pendingApplyEdits.set(e.id,s),this.featureFetcher.applyEdits(s.promise),this.updatingHandles.addPromise(s.promise),{result:{}}}async endApplyEdits(e,t){const s=this.pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),_(t),{result:{}}}_updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=u(e.filter)?T.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function qe(){return new F}o([l({readOnly:!0})],F.prototype,"updating",null),o([l()],F.prototype,"isInitializing",void 0),F=o([v("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],F);export{F as FeatureServiceSnappingSourceWorker,qe as default};
