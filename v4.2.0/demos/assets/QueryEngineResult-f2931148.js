import{_ as ce}from"./preload-helper-388ac9d5.js";import{dt as U,c as b,t as ae,aq as de,ar as Y,r as H,c$ as X,iS as he,cA as k,iT as fe,iU as me,cx as ge}from"./main-66d02e41.js";import{s as J}from"./quantizationUtils-9cd4d846.js";import{f as pe}from"./WhereClause-42d2ead8.js";import{c as G,D as ye,m as xe,f as K,d as W,T as Fe,y as Ie,x as _e,z as Ve,S as Te,M as ve,v as De,p as Ae}from"./utils-2c7bb430.js";import{g as ee}from"./projectionSupport-2036e752.js";import{E as P,v as O,b as te}from"./utils-04f0ce89.js";let Se=class{constructor(t,e){this._cache=new U(t),this._invalidCache=new U(e)}get(t,e){const i=`${e.uid}:${t}`,a=this._cache.get(i);if(a)return a;if(this._invalidCache.get(i)!==void 0)return null;try{const s=pe.create(t,e);return this._cache.put(i,s),s}catch{return this._invalidCache.put(i,null),null}}};const j=new Se(50,500),w="feature-store:unsupported-query",re=" as ",be=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function je(u,t){if(!t)return!0;const e=j.get(t,u);if(!e)throw new b(w,"invalid SQL expression",{where:t});if(!e.isStandardized)throw new b(w,"where clause is not standard",{where:t});return Z(u,e.fieldNames,"where clause contains missing fields"),!0}function Ze(u,t,e){if(!t)return!0;const i=j.get(t,u);if(!i)throw new b(w,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new b(w,"having does not contain a valid aggregate function",{having:t});const a=i.fieldNames;if(Z(u,a,"having contains missing fields"),!i.getExpressions().every(s=>{const{aggregateType:r,field:n}=s,o=u.get(n)?.name;return e.some(l=>{const{onStatisticField:c,statisticType:d}=l;return u.get(c)?.name===o&&d.toLowerCase().trim()===r})}))throw new b(w,"expressions in having should also exist in outStatistics",{having:t});return!0}function N(u,t){return u?j.get(u,t):null}function Z(u,t,e,i=!0){const a=[];for(const s of t)if(s!=="*"&&!u.has(s))if(i){const r=ne(s);try{const n=N(r,u);if(!n)throw new b(w,"invalid SQL expression",{where:r});if(!n.isStandardized)throw new b(w,"expression is not standard",{clause:n});Z(u,n.fieldNames,"expression contains missing fields")}catch(n){const o=n&&n.details;if(o&&(o.clause||o.where))throw n;o&&o.missingFields?a.push(...o.missingFields):a.push(s)}}else a.push(s);if(a.length)throw new b(w,e,{missingFields:a})}function ne(u){return u.split(re)[0]}function we(u){return u.split(re)[1]}function Qe(u,t){const e=t.get(u);return!!e&&!be.has(e.type)}class q{constructor(t,e,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues??!1,this.fieldsIndex=i,this.featureAdapter=e;const a=t.outFields;if(a&&!a.includes("*")){this.outFields=a;let s=0;for(const r of a){const n=ne(r),o=this.fieldsIndex.get(n),l=o?null:N(n,i),c=o?o.name:we(r)||"FIELD_EXP_"+s++;this._fieldDataCache.set(r,{alias:c,clause:l})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,i){const a=i?i.name:e;let s=null;return this._fieldDataCache.has(a)?s=this._fieldDataCache.get(a)?.clause:i||(s=N(e,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:s})),i?this.featureAdapter.getAttribute(t,a):s?.calculateValue(t,this.featureAdapter)}getDataValue(t,e){const i=e.normalizationType,a=e.normalizationTotal;let s=e.field&&this.getFieldValue(t,e.field,this.fieldsIndex.get(e.field));if(e.field2&&(s=`${G(s)}${e.fieldDelimiter}${G(this.getFieldValue(t,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(s=`${s}${e.fieldDelimiter}${G(this.getFieldValue(t,e.field3,this.fieldsIndex.get(e.field3)))}`)),i&&Number.isFinite(s)){const r=i==="field"&&e.normalizationField?this.getFieldValue(t,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;s=ye(s,i,r,a)}return s}getExpressionValue(t,e,i,a){const s={attributes:this.featureAdapter.getAttributes(t),layer:{fields:this.fieldsIndex.fields}},r=a.createExecContext(s,i);return a.executeFunction(e,r)}getExpressionValues(t,e,i,a){const s={fields:this.fieldsIndex.fields};return t.map(r=>{const n={attributes:this.featureAdapter.getAttributes(r),layer:s},o=a.createExecContext(n,i);return a.executeFunction(e,o)})}validateItem(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:N(e,this.fieldsIndex)}),this._fieldDataCache.get(e)?.clause?.testFeature(t,this.featureAdapter)??!1}validateItems(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:N(e,this.fieldsIndex)}),this._fieldDataCache.get(e)?.clause?.testSet(t,this.featureAdapter)??!1}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const i={};for(const a of e){const{alias:s,clause:r}=this._fieldDataCache.get(a);i[s]=r?r.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,s)}return i}_processAttributesForDistinctValues(t){if(ae(t)||!this.returnDistinctValues)return t;const e=this.outFields,i=[];if(e)for(const r of e){const{alias:n}=this._fieldDataCache.get(r);i.push(t[n])}else for(const r in t)i.push(t[r]);const a=`${(e||["*"]).join(",")}=${i.join(",")}`;let s=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++s),s>1?null:t}}function ze(u,t,e){return{objectId:u,target:t,distance:e,type:"vertex"}}function Ee(u,t,e,i,a,s=!1){return{objectId:u,target:t,distance:e,type:"edge",start:i,end:a,draped:s}}class Le{constructor(t,e,i){this.items=t,this.query=e,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const t=new q(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:e,having:i,outStatistics:a}=this.query;if(!e?.length)return 1;const r=new Map,n=new Map,o=new Set;for(const l of a){const{statisticType:c}=l,d=c!=="exceedslimit"?l.onStatisticField:void 0;if(!n.has(d)){const h=[];for(const f of e){const y=this._getAttributeValues(t,f,r);h.push(y)}n.set(d,this._calculateUniqueValues(h,t.returnDistinctValues))}const m=n.get(d);for(const h in m){const{data:f,items:y}=m[h],_=f.join(",");i&&!t.validateItems(y,i)||o.add(_)}}return o.size}async createQueryResponse(){let t;if(this.query.outStatistics?t=this.query.outStatistics.some(e=>e.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):t=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const e=this.query.geometry;de(this.query.outSR)&&!Y(e.spatialReference,this.query.outSR)?t.queryGeometry=P({spatialReference:this.query.outSR,...ee(e,e.spatialReference,this.query.outSR)}):t.queryGeometry=P({spatialReference:this.query.outSR,...e})}return t}createSnappingResponse(t,e){const i=this.featureAdapter,a=ie(this.hasZ,this.hasM),{point:s,mode:r}=t,n=typeof t.distance=="number"?t.distance:t.distance.x,o=typeof t.distance=="number"?t.distance:t.distance.y,l={candidates:[]},c=this.geometryType==="esriGeometryPolygon",d=this._getPointCreator(r,this.spatialReference,e),m=new se(null,0),h=new se(null,0),f={x:0,y:0,z:0};for(const y of this.items){const _=i.getGeometry(y);if(ae(_))continue;const{coords:x,lengths:V}=_;if(m.coords=x,h.coords=x,t.types&$.EDGE){let F=0;for(let I=0;I<V.length;I++){const p=V[I];for(let g=0;g<p;g++,F+=a){const T=m;if(T.coordsIndex=F,g!==p-1){const v=h;v.coordsIndex=F+a;const C=f;Ce(f,s,T,v);const D=(s.x-C.x)/n,A=(s.y-C.y)/o,z=D*D+A*A;z<=1&&l.candidates.push(Ee(i.getObjectId(y),d(C),Math.sqrt(z),d(T),d(v)))}}}}if(t.types&$.VERTEX){const F=c?x.length-a:x.length;for(let I=0;I<F;I+=a){const p=m;p.coordsIndex=I;const g=(s.x-p.x)/n,T=(s.y-p.y)/o,v=g*g+T*T;v<=1&&l.candidates.push(ze(i.getObjectId(y),d(p),Math.sqrt(v)))}}}return l.candidates.sort((y,_)=>y.distance-_.distance),l}_getPointCreator(t,e,i){const a=H(i)&&!Y(e,i)?n=>ee(n,e,i):n=>n,{hasZ:s}=this,r=0;return t==="3d"?s?({x:n,y:o,z:l})=>a({x:n,y:o,z:l}):({x:n,y:o})=>a({x:n,y:o,z:r}):({x:n,y:o})=>a({x:n,y:o})}async createSummaryStatisticsResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,minValue:n,maxValue:o,scale:l}=t,c=this.fieldsIndex.isDateField(e),d=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,scale:l}),m=xe({normalizationType:s,normalizationField:a,minValue:n,maxValue:o}),h=this.fieldsIndex.get(e),f={value:.5,fieldType:h?.type},y=X(h)?K({values:d,supportsNullCount:m,percentileParams:f}):W({values:d,minValue:n,maxValue:o,useSampleStdDev:!s,supportsNullCount:m,percentileParams:f});return Fe(y,c)}async createUniqueValuesResponse(t){const{field:e,valueExpression:i,domains:a,returnAllCodedValues:s,scale:r}=t,n=await this._getDataValues({field:e,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,valueExpression:i,scale:r}),o=Ie(n);return _e(o,a,s,t.fieldDelimiter)}async createClassBreaksResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:c,numClasses:d,scale:m}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,scale:m}),f=Ve(h,{field:e,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:c,numClasses:d});return Te(f,n)}async createHistogramResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:c,numBins:d,scale:m}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:r,scale:m});return ve(h,{field:e,normalizationField:a,normalizationType:s,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:c,numBins:d})}_sortFeatures(t,e,i){if(t.length>1&&e&&e.length)for(const a of e.reverse()){const s=a.split(" "),r=s[0],n=this.fieldsIndex.get(r),o=!!s[1]&&s[1].toLowerCase()==="desc",l=De(n?.type,o);t.sort((c,d)=>{const m=i(c,r,n),h=i(d,r,n);return l(m,h)})}}_createFeatureQueryResponse(t){const e=this.items,{geometryType:i,hasM:a,hasZ:s,objectIdField:r,spatialReference:n}=this,{outFields:o,outSR:l,quantizationParameters:c,resultRecordCount:d,resultOffset:m,returnZ:h,returnM:f}=t,y=d!=null&&e.length>(m||0)+d,_=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(x=>this.fieldsIndex.get(x)));return{exceededTransferLimit:y,features:this._createFeatures(t,e),fields:_,geometryType:i,hasM:a&&f,hasZ:s&&h,objectIdFieldName:r,spatialReference:P(l||n),transform:c&&J(c)||null}}_createFeatures(t,e){const i=new q(t,this.featureAdapter,this.fieldsIndex),{hasM:a,hasZ:s}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:o,returnCentroid:l,maxAllowableOffset:c,resultOffset:d,resultRecordCount:m,returnZ:h=!1,returnM:f=!1}=t,y=s&&h,_=a&&f;let x=[],V=0;const F=[...e];if(this._sortFeatures(F,r,(p,g,T)=>i.getFieldValue(p,g,T)),o||l){const p=J(n)??void 0;if(o&&!l)for(const g of F)x[V++]={attributes:i.getAttributes(g),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),c,p,y,_)};else if(!o&&l)for(const g of F)x[V++]={attributes:i.getAttributes(g),centroid:te(this,this.featureAdapter.getCentroid(g,this),p)};else for(const g of F)x[V++]={attributes:i.getAttributes(g),centroid:te(this,this.featureAdapter.getCentroid(g,this),p),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),c,p,y,_)}}else for(const p of F){const g=i.getAttributes(p);g&&(x[V++]={attributes:g})}const I=d||0;if(m!=null){const p=I+m;x=x.slice(I,Math.min(x.length,p))}return x}_createExceedsLimitQueryResponse(t){let e=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;for(const r of t.outStatistics??[])if(r.statisticType==="exceedslimit"){i=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,a=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,s=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")e=this.items.length>i;else if(this.items.length>a)e=!0;else{const r=ie(this.hasZ,this.hasM),n=this.featureAdapter;e=this.items.reduce((o,l)=>{const c=n.getGeometry(l);return o+(H(c)&&c.coords.length||0)},0)/r>s}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}async _createStatisticsQueryResponse(t){const e={attributes:{}},i=[],a=new Map,s=new Map,r=new Map,n=new Map,o=new q(t,this.featureAdapter,this.fieldsIndex),l=t.outStatistics,{groupByFieldsForStatistics:c,having:d,orderByFields:m}=t,h=c&&c.length,f=!!h,y=f?c[0]:null,_=f&&!this.fieldsIndex.get(y);for(const V of l??[]){const{outStatisticFieldName:F,statisticType:I}=V,p=V,g=I!=="exceedslimit"?V.onStatisticField:void 0,T=I==="percentile_disc"||I==="percentile_cont",v=I==="EnvelopeAggregate"||I==="CentroidAggregate"||I==="ConvexHullAggregate",C=f&&h===1&&(g===y||_)&&I==="count";if(f){if(!r.has(g)){const A=[];for(const z of c){const M=this._getAttributeValues(o,z,a);A.push(M)}r.set(g,this._calculateUniqueValues(A,!v&&o.returnDistinctValues))}const D=r.get(g);for(const A in D){const{count:z,data:M,items:Q,itemPositions:oe}=D[A],L=M.join(",");if(!d||o.validateItems(Q,d)){const E=n.get(L)||{attributes:{}};if(v){E.aggregateGeometries||(E.aggregateGeometries={});const{aggregateGeometries:S,outStatisticFieldName:R}=await this._getAggregateGeometry(p,Q);E.aggregateGeometries[R]=S}else{let S=null;if(C)S=z;else{const R=this._getAttributeValues(o,g,a),B=oe.map(ue=>R[ue]);S=T&&"statisticParameters"in p?this._getPercentileValue(p,B):this._getStatisticValue(p,B,null,o.returnDistinctValues)}E.attributes[F]=S}let le=0;c.forEach((S,R)=>E.attributes[this.fieldsIndex.get(S)?S:"EXPR_"+ ++le]=M[R]),n.set(L,E)}}}else if(v){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:D,outStatisticFieldName:A}=await this._getAggregateGeometry(p,this.items);e.aggregateGeometries[A]=D}else{const D=this._getAttributeValues(o,g,a);e.attributes[F]=T&&"statisticParameters"in p?this._getPercentileValue(p,D):this._getStatisticValue(p,D,s,o.returnDistinctValues)}i.push({name:F,alias:F,type:"esriFieldTypeDouble"})}const x=f?Array.from(n.values()):[e];return this._sortFeatures(x,m,(V,F)=>V.attributes[F]),{fields:i,features:x}}async _getAggregateGeometry(t,e){const i=await ce(()=>import("./geometryEngineJSON-e42ff21a.js").then(f=>f.g),["./geometryEngineJSON-e42ff21a.js","./geometryEngineBase-807394fe.js","./json-48e3ea08.js"],import.meta.url),{statisticType:a,outStatisticFieldName:s}=t,{featureAdapter:r,spatialReference:n,geometryType:o,hasZ:l,hasM:c}=this,d=e.map(f=>O(o,l,c,r.getGeometry(f))),m=i.convexHull(n,d,!0)[0],h={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const f=m?he(m):k(i.union(n,d));h.aggregateGeometries={...f,spatialReference:n},h.outStatisticFieldName=s||"extent"}else if(a==="CentroidAggregate"){const f=m?fe(m):me(k(i.union(n,d)));h.aggregateGeometries={x:f[0],y:f[1],spatialReference:n},h.outStatisticFieldName=s||"centroid"}else a==="ConvexHullAggregate"&&(h.aggregateGeometries=m,h.outStatisticFieldName=s||"convexHull");return h}_getStatisticValue(t,e,i,a){const{onStatisticField:s,statisticType:r}=t;let n=null;return n=i?.has(s)?i.get(s):X(this.fieldsIndex.get(s))?K({values:e,returnDistinct:a}):W({values:a?[...new Set(e)]:e,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(s,n),n[r==="var"?"variance":r]}_getPercentileValue(t,e){const{onStatisticField:i,statisticParameters:a,statisticType:s}=t,{value:r,orderBy:n}=a,o=this.fieldsIndex.get(i);return Ae(e,{value:r,orderBy:n,fieldType:o?.type,isDiscrete:s==="percentile_disc"})}_getAttributeValues(t,e,i){if(i.has(e))return i.get(e);const a=this.fieldsIndex.get(e),s=this.items.map(r=>t.getFieldValue(r,e,a));return i.set(e,s),s}_getAttributeDataValues(t,e){return this.items.map(i=>t.getDataValue(i,{field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal}))}async _getAttributeExpressionValues(t,e,i){const{arcadeUtils:a}=await ge(),s=a.createFunction(e),r=i&&a.getViewInfo(i);return t.getExpressionValues(this.items,s,r,a)}_calculateUniqueValues(t,e){const i={},a=this.items,s=a.length;for(let r=0;r<s;r++){const n=a[r],o=[];for(const c of t)o.push(c[r]);const l=o.join(",");i[l]==null?i[l]={count:1,data:o,items:[n],itemPositions:[r]}:(e||i[l].count++,i[l].items.push(n),i[l].itemPositions.push(r))}return i}async _getDataValues(t){const e=new q(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:a,normalizationField:s,normalizationType:r,normalizationTotal:n,scale:o}=t,l=i?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(e,i,l):this._getAttributeDataValues(e,{field:a,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:s,normalizationType:r,normalizationTotal:n})}}function Ce(u,t,e,i){const a=i.x-e.x,s=i.y-e.y,r=a*a+s*s,n=(t.x-e.x)*a+(t.y-e.y)*s,o=Math.min(1,Math.max(0,n/r));u.x=e.x+a*o,u.y=e.y+s*o}function ie(u,t){return u?t?4:3:t?3:2}var $;(function(u){u[u.NONE=0]="NONE",u[u.EDGE=1]="EDGE",u[u.VERTEX=2]="VERTEX"})($||($={}));class se{constructor(t,e){this.coords=t,this.coordsIndex=e}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}export{Le as A,$ as D,Ze as a,Z as c,Qe as f,N as l,je as o};
