import{iG as K,iH as X,dU as Y,aL as C,aO as j,du as Q,bd as z,v as O,b as g,f as S,r as _,ar as ee,iI as te,go as se,gn as ie,gq as re,e2 as k,iJ as G,b8 as M,dt as Z,iK as ae,dz as ne,cL as ue,dd as N,cs as ce,cE as oe,cp as he,fy as le,iL as de}from"./main-7ed7b27d.js";import{A as f,D as fe,l as ye,c as A,o as me,a as pe,f as ge}from"./QueryEngineResult-5bd8b10d.js";import{f as q,g as b,M as _e}from"./projectionSupport-045b827a.js";import{t as xe}from"./QueryEngineCapabilities-42e44ded.js";import{t as we,v as $,n as Se,I as L,P as H}from"./timeSupport-d5af4f4a.js";import{F as I,E as D,z as U,v as Fe}from"./utils-36b61478.js";function Re(P){return P!=null&&P.every(e=>e.statisticType!=="exceedslimit")}const F="feature-store:unsupported-query",Qe=new K(2e6);let Ie=0;class Te{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:xe},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new X(Ie+++"$$",Qe)),this.fieldsIndex=new Y(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=C(this._frameTask),this.clearCache(),j(this._geometryQueryCache),this._changeHandle=C(this._changeHandle),j(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._geometryQueryCache?.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(s){if(s!==I)throw s;return new f([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(s){if(s!==I)throw s;return 0}}async executeQueryForExtent(e,t){const s=e.outSR;try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=i.size;return r?{count:r,extent:await this._getBounds(i.items,i.spatialReference,s||this.spatialReference)}:{count:0,extent:null}}catch(i){if(i===I)return{count:0,extent:null};throw i}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),i=s.items,r=new Set;return await this._reschedule(()=>{for(const a of i)r.add(s.featureAdapter.getObjectId(a))},t),r}catch(s){if(s===I)return new Set;throw s}}async executeQueryForSnapping(e,t){const{point:s,distance:i,types:r}=e;if(r===fe.NONE)return{candidates:[]};const a=await this._reschedule(()=>this._checkQuerySupport(e.query),t),n=!Q(s.spatialReference,this.spatialReference);n&&await q(s.spatialReference,this.spatialReference);const u=typeof i=="number"?i:i.x,h=typeof i=="number"?i:i.y,o={xmin:s.x-u,xmax:s.x+u,ymin:s.y-h,ymax:s.y+h,spatialReference:s.spatialReference},c=n?b(o,this.spatialReference):o;if(!c)return{candidates:[]};const y=(await z(O(s),null,{signal:t}))[0],m=(await z(O(c),null,{signal:t}))[0];if(g(y)||g(m))return{candidates:[]};const x=new f(await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(m.toJSON())),t),a,this);await this._reschedule(()=>this._executeObjectIdsQuery(x),t),await this._reschedule(()=>this._executeTimeQuery(x),t),await this._reschedule(()=>this._executeAttributesQuery(x),t);const l=y.toJSON(),w=n?b(l,this.spatialReference):l,p=n?Math.max(c.xmax-c.xmin,c.ymax-c.ymin)/2:i;return x.createSnappingResponse({...e,point:w,distance:p},s.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new S(F,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const s=await this._executeQuery(e,{},t);return await this._reschedule(()=>this._filterLatest(s),t),s.createQueryResponse()}catch(s){if(s!==I)throw s;return new f([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,field2:r,field3:a,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:i,field2:r,field3:a,valueExpression:n},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const[t,s]=await Promise.all(["getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getBounds(await this._getAllFeatures(),this.spatialReference,this.spatialReference),_(this._timeExtentPromise)?this._timeExtentPromise:this._timeExtentPromise=we(this.timeInfo,this.featureStore)]);return ee(e),{fullExtent:t,timeExtent:s}}async _getBounds(e,t,s){const i=te(ie(),se);await this.featureStore.forEachBounds(e,n=>re(i,n));const r={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:D(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(r.zmin=i[2],r.zmax=i[5]);const a=b(r,t,s);if(a.spatialReference=D(s),a.xmax-a.xmin==0){const n=k(a.spatialReference);a.xmin-=n,a.xmax+=n}if(a.ymax-a.ymin==0){const n=k(a.spatialReference);a.ymin-=n,a.ymax+=n}if(this.hasZ&&a.zmin!=null&&a.zmax!=null&&a.zmax-a.zmin==0){const n=k(a.spatialReference);a.zmin-=n,a.zmax+=n}return a}async _schedule(e,t){return _(this._frameTask)?this._frameTask.schedule(e,t):e(G)}async _reschedule(e,t){return _(this._frameTask)?this._frameTask.reschedule(e,t):e(G)}async _getAllFeaturesQueryEngineResult(e){return new f(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(g(this._allFeaturesPromise)){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=M(e),e=await this._schedule(()=>U(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkQuerySupport(e),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}async _executeSceneFilterQuery(e,t){if(g(e.sceneFilter))return null;const{outSR:s,returnGeometry:i,returnCentroid:r}=e,a=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,u=g(a)||Q(a,n.spatialReference)?n:b(n,a);if(!u)return null;const h=i||r,o=Z(s)&&!Q(this.spatialReference,s)&&h?async l=>this._project(l,s):l=>l,c=this.featureAdapter,y=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(u)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!y.length)return null;const l=new Set;for(const E of y)l.add(c.getObjectId(E));const w=await this._reschedule(()=>this._getAllFeatures(),t),p=await this._reschedule(async()=>{const E=await $("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),v=R=>!l.has(c.getObjectId(R))||E(c.getGeometry(R)),d=await this._runSpatialFilter(w,v,t);return new f(d,e,this)},t);return o(p)}if(!y.length)return new f([],e,this);if(this._canExecuteSinglePass(u,e))return o(new f(y,e,this));const m=await $("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),x=await this._runSpatialFilter(y,l=>m(c.getGeometry(l)),t);return o(new f(x,e,this))}async _executeGeometryQuery(e,t,s){if(_(t)&&t.items.length===0)return t;e=_(t)?t.query:e;const{geometry:i,outSR:r,spatialRel:a,returnGeometry:n,returnCentroid:u}=e,h=this.featureStore.featureSpatialReference,o=!i||g(h)||Q(h,i.spatialReference)?i:b(i,h),c=n||u,y=Z(r)&&!Q(this.spatialReference,r),m=this._geometryQueryCache&&g(t)?JSON.stringify(y&&c?{originalFilterGeometry:i,spatialRelationship:a,outSpatialReference:r}:{originalFilterGeometry:i,spatialRelationship:a}):null,x=m?this._geometryQueryCache.get(m):null;if(_(x))return new f(x,e,this);const l=async d=>(y&&c&&await this._project(d,r),m&&this._geometryQueryCache.put(m,d.items,d.items.length+1),d);if(!o)return l(_(t)?t:await this._getAllFeaturesQueryEngineResult(e));const w=this.featureAdapter;let p=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(i)),s);if(a==="esriSpatialRelDisjoint"){if(!p.length)return l(_(t)?t:await this._getAllFeaturesQueryEngineResult(e));const d=new Set;for(const T of p)d.add(w.getObjectId(T));const R=_(t)?t.items:await this._reschedule(()=>this._getAllFeatures(),s),J=await this._reschedule(async()=>{const T=await $(a,o,this.geometryType,this.hasZ,this.hasM),V=B=>!d.has(w.getObjectId(B))||T(w.getGeometry(B)),W=await this._runSpatialFilter(R,V,s);return new f(W,e,this)},s);return l(J)}if(_(t)){const d=new de;p=p.filter(R=>ae(t.items,R,t.items.length,d)>=0)}if(!p.length){const d=new f([],e,this);return m&&this._geometryQueryCache.put(m,d.items,1),d}if(this._canExecuteSinglePass(o,e))return l(new f(p,e,this));const E=await $(a,o,this.geometryType,this.hasZ,this.hasM),v=await this._runSpatialFilter(p,d=>E(w.getGeometry(d)),s);return l(new f(v,e,this))}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds||!e.query.aggregateIds.length||g(this.aggregateAdapter))return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(r=>t.add(r));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=Se(this.timeInfo,e.query.timeExtent,this.featureAdapter);g(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=ye(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(g(this._frameTask))return e.filter(n=>t(n));let i=0;const r=new Array,a=async n=>{for(;i<e.length;){const u=e[i++];t(u)&&(r.push(u),n.madeProgress()),n.done&&await this._reschedule(h=>a(h),s)}};return this._reschedule(n=>a(n),s).then(()=>r)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,r=i||s,a=new Map,n=this.featureAdapter.getAttribute;for(const u of e.items){const h=n(u,t),o=n(u,r),c=a.get(h);(!c||o>n(c,r))&&a.set(h,u)}e.items=Array.from(a.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return L(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"||s==="esriSpatialRelWithin"))}async _project(e,t){if(!t||Q(this.spatialReference,t))return e;const s=this.featureAdapter,i=await _e(e.items.map(r=>Fe(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t);return e.items=i.map((r,a)=>s.cloneWithGeometry(e.items[a],ne(r,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(L(e)){if(ue(e))return[N(e.xmin,e.ymin,e.xmax,e.ymax)];if(ce(e))return e.rings.map(t=>N(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[oe(he(),e)]}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,r=>t.add(r))));const s=Array.from(t.values());return t.clear(),s}async _checkStatisticsSupport(e,t){if((e.distance??0)<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new S(F,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),H(e,this.geometryType,this.spatialReference),q(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:s}=await le();t=s.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.field2&&t.push(e.field2),e.field3&&t.push(e.field3),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new S(F,"params should have at least a field or valueExpression",{params:e});A(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if((e.distance??0)<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new S(F,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([H(e,this.geometryType,this.spatialReference),q(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:r}=e,a=r?r.map(n=>n.outStatisticFieldName&&n.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(s&&s.length>0){const n=" asc",u=" desc",h=s.map(o=>{const c=o.toLowerCase();return c.includes(n)?c.split(n)[0]:c.includes(u)?c.split(u)[0]:o}).filter(o=>!a.includes(o));A(this.fieldsIndex,h,"orderByFields contains missing fields")}if(t&&t.length>0)A(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new S(F,"outFields should be specified for returnDistinctValues",{query:e});me(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,r=s&&s.length,a=t&&t.length;if(i){if(!r||!a)throw new S(F,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});pe(this.fieldsIndex,i,t)}if(a){if(!Re(t))return;const n=t.map(u=>u.onStatisticField).filter(Boolean);A(this.fieldsIndex,n,"onStatisticFields contains missing fields"),r&&A(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const u of t){const{onStatisticField:h,statisticType:o}=u;if((o==="percentile_disc"||o==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:c}=u;if(!c)throw new S(F,"statisticParamters should be set for percentile type",{definition:u,query:e})}else if(o!=="count"&&h&&ge(h,this.fieldsIndex))throw new S(F,"outStatistics contains non-numeric fields",{definition:u,query:e})}}}async _getQueryEngineResultForStats(e,t,s){e=M(e);try{e=await this._schedule(()=>U(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}catch(i){if(i!==I)throw i;return new f([],e,this)}}}export{Te as e};
