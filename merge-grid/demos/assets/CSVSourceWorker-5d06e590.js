import{iA as w,f as F,aS as v,at as j,u as P,Y as V,U as L,iB as R,du as G,dk as Q,dq as M,dw as A,k as U,iC as Y,cz as B,iD as Z,b6 as z,dU as x}from"./main-917dc16a.js";import{t as J}from"./json-48e3ea08.js";import{g as W}from"./FeatureStore-3f9ac2b1.js";import{f as H}from"./projectionSupport-b9ebed13.js";import{e as K}from"./QueryEngine-5064a1c3.js";import{a as X}from"./number-df5267e1.js";import{i as ee,o as te}from"./clientSideDefaults-22323d2f.js";import"./preload-helper-388ac9d5.js";import"./BoundsStore-a30ec0ff.js";import"./PooledRBush-85457327.js";import"./centroid-354b1326.js";import"./utils-421e908c.js";import"./QueryEngineResult-a7d888c8.js";import"./quantizationUtils-1addcb3b.js";import"./WhereClause-d1001a39.js";import"./executionError-c1d13a98.js";import"./utils-af916bab.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-9bc5062a.js";const b=/^\s*"([\S\s]*)"\s*$/,T=/""/g,E=`
`,ie=[","," ",";","|","	"];function*S(s,n,e){let t=0;for(;t<=s.length;){const i=s.indexOf(n,t),a=s.substring(t,i>-1?i:void 0);t+=a.length+n.length,e&&!a.trim()||(yield a)}}function $(s){const n=s.includes(`\r
`)?`\r
`:E;return S(s,n,!0)}function O(s,n){return S(s,n,!1)}function ne(s,n,e){s=s.trim(),n=n?.trim();const t=[],i=Array.from(new Set([e?.delimiter,...ie])).filter(o=>o!=null);for(const o of i){const l=I(s,o).length,c=I(n,o).length??l;l>1&&t.push({weight:Math.min(l,c),delimiter:o})}const a=t.sort(({weight:o},{weight:l})=>l-o).map(({delimiter:o})=>o);for(const o of a){const l=re(C(s,o).names,e?.longitudeField,e?.latitudeField);if(l.longitudeFieldName&&l.latitudeFieldName)return{delimiter:o,locationInfo:l}}return{delimiter:a[0],locationInfo:null}}function*q(s,n,e,t=()=>Object.create(null)){const i=$(s);i.next();let a="",o="",l=0,c=t(),d=0;e:for(const y of i){const h=O(y,e);for(const m of h)if(a+=o+m,o="",l+=D(m),l%2==0){if(l>0){const p=b.exec(a);if(!p){c=t(),d=0,a="",l=0;continue e}c[n[d]]=p[1].replace(T,'"'),d++}else c[n[d]]=a,d++;a="",l=0}else o=e;l===0?(yield c,c=t(),d=0):o=E}}function C(s,n){const e=I(s,n).filter(i=>i!=null),t=e.map(i=>w(i));for(let i=t.length-1;i>=0;i--)t[i]||(t.splice(i,1),e.splice(i,1));return{names:t,aliases:e}}function I(s,n){if(!s?.length)return[];const e=[];let t="",i="",a=0;const o=O(s,n);for(const l of o)if(t+=i+l,i="",a+=D(l),a%2==0){if(a>0){const c=b.exec(t);c&&e.push(c[1].replace(T,'"'))}else e.push(t);t="",a=0}else i=n;return e}function D(s){let n=0,e=0;for(e=s.indexOf('"',e);e>=0;)n++,e=s.indexOf('"',e+1);return n}function re(s,n,e){n=w(n)?.toLowerCase(),e=w(e)?.toLowerCase();const t=s.map(o=>o.toLowerCase()),i=n?s[t.indexOf(n)]:null,a=e?s[t.indexOf(e)]:null;return{longitudeFieldName:i||s[t.indexOf(ue.find(o=>t.includes(o)))],latitudeFieldName:a||s[t.indexOf(ce.find(o=>t.includes(o)))]}}function se(s,n,e,t,i){const a=[],o=q(s,e,n),l=[];for(const c of o){if(l.length===10)break;l.push(c)}for(let c=0;c<e.length;c++){const d=e[c],y=t[c];if(d===i.longitudeFieldName||d===i.latitudeFieldName)a.push({name:d,type:"esriFieldTypeDouble",alias:y});else{let h,m;switch(oe(l.map(p=>p[d]))){case"integer":h="esriFieldTypeInteger";break;case"double":h="esriFieldTypeDouble";break;case"date":h="esriFieldTypeDate",m=36;break;default:h="esriFieldTypeString",m=255}a.push({name:d,type:h,alias:y,length:m})}}return a}function oe(s){if(!s.length)return"string";const n=/[^+-.,0-9]/;return s.map(e=>{let t=!1;if(e!==""){if(n.test(e))t=!0;else{let i=N(e);if(!isNaN(i))return/[.,]/.test(e)||!Number.isInteger(i)||i>214783647||i<-214783648?"double":"integer";if(e.includes("E")){if(i=Number(e),!isNaN(i))return"double";if(e.includes(",")){if(e=e.replace(",","."),i=Number(e),!isNaN(i))return"double";t=!0}else t=!0}else t=!0}return t?/^[-]?\d*[.,]?\d*$/.test(e)?"string":k(new Date(e),e)?"date":"string":"string"}}).reduce((e,t)=>e===void 0?t:t===void 0?e:e===t?t:e==="string"||t==="string"?"string":e==="double"||t==="double"?"double":void 0)}function k(s,n){if(!s||Object.prototype.toString.call(s)!=="[object Date]"||isNaN(s.getTime()))return!1;let e=!0;if(!le&&/\d+\W*$/.test(n)){const t=n.match(/[a-zA-Z]{2,}/);if(t){let i=!1,a=0;for(;!i&&a<=t.length;)i=!ae.test(t[a]),a++;e=!i}}return e}const N=function(){const s=X(),n=new RegExp("^"+s.regexp+"$"),e=new RegExp("["+s.group+"\\s\\xa0]","g"),t=s.factor;return i=>{const a=n.exec(i);if(s.factor=t,!a)return NaN;let o=a[1];if(!a[1]){if(!a[2])return NaN;o=a[2],s.factor*=-1}return o=o.replace(e,"").replace(s.decimal,"."),+o*s.factor}}(),ae=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,le=Number.isNaN(new Date("technology 10").getTime()),ce=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],ue=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],de=te("esriGeometryPoint"),fe=["csv"],me=[0,0];class pe{constructor(n,e){this.x=n,this.y=e}}class je{constructor(){this._queryEngine=null,this._snapshotFeatures=async n=>{const e=await this._fetch(n);return this._createFeatures(e)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(n,e={}){this._loadOptions=n;const[t]=await Promise.all([this._fetch(e.signal),this._checkProjection(n?.parsingOptions?.spatialReference)]),i=he(t,n);this._locationInfo=i.locationInfo,this._delimiter=i.delimiter,this._queryEngine=this._createQueryEngine(i);const a=await this._createFeatures(t);this._queryEngine.featureStore.addMany(a);const{fullExtent:o,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(i.layerDefinition.extent=o,l){const{start:c,end:d}=l;i.layerDefinition.timeInfo.timeExtent=[c,d]}return i}async applyEdits(){throw new F("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(n,e.signal)}async queryFeatureCount(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(n,e.signal)}async queryObjectIds(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(n,e.signal)}async queryExtent(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(n,e.signal)}async querySnapping(n,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(n,e.signal)}async refresh(n){this._loadOptions.customParameters=n,this._snapshotTask?.abort(),this._snapshotTask=v(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),j(i)||P.getLogger("esri.layers.CSVLayer").error(new F("csv-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:t}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:t}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(n){const{url:e,customParameters:t}=this._loadOptions;if(!e)throw new F("csv-layer:invalid-source","url not defined");const i=V(e);return(await L(i.path,{query:{...i.query,...t},responseType:"text",signal:n})).data}_createQueryEngine(n){const{objectIdField:e,fields:t,extent:i,timeInfo:a}=n.layerDefinition,o=new W({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new K({fields:t,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:a,objectIdField:e,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:o})}async _createFeatures(n){const{latitudeFieldName:e,longitudeFieldName:t}=this._locationInfo,{objectIdField:i,fieldsIndex:a,spatialReference:o}=this._queryEngine;let l=[];const c=[],d=a.fields.filter(r=>r.name!==i).map(r=>r.name);let y=0;const h={};for(const r of a.fields)if(r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"){const u=R(r);u!==void 0&&(h[r.name]=u)}const m=q(n,d,this._delimiter,ee(h,i));for(const r of m){const u=this._parseCoordinateValue(r[e]),g=this._parseCoordinateValue(r[t]);if(g!=null&&u!=null&&!isNaN(u)&&!isNaN(g)){r[e]=u,r[t]=g;for(const f in r)if(f!==e&&f!==t){if(a.isDateField(f)){const _=new Date(r[f]);r[f]=k(_,r[f])?_.getTime():null}else if(a.isNumericField(f)){const _=N(r[f]);isNaN(_)?r[f]=null:r[f]=_}}r[i]=y,y++,l.push(new pe(g,u)),c.push(r)}}if(!G({wkid:4326},o))if(Q(o))for(const r of l)[r.x,r.y]=M(r.x,r.y,me);else l=A(J,l,U.WGS84,o,null,null);const p=[];for(let r=0;r<l.length;r++){const{x:u,y:g}=l[r],f=c[r];f[i]=r+1,p.push(new Y(new B([],[u,g]),f,null,f[i]))}return p}_parseCoordinateValue(n){if(n==null||n==="")return null;let e=N(n);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(n)),e}async _checkProjection(n){try{await H(Z,n)}catch{throw new F("csv-layer:projection-not-supported","Projection not supported")}}}function he(s,n){const e=n.parsingOptions||{},t={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},i=t.layerDefinition={name:z(n.url,fe)||"csv",drawingInfo:de,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},a=$(s),o=a.next().value?.trim(),l=a.next().value?.trim();if(!o)throw new F("csv-layer:empty-csv","CSV is empty",{csv:s});const{delimiter:c,locationInfo:d}=ne(o,l,e);if(!c)throw new F("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:o,secondLine:l,parsingOptions:e});if(!d)throw new F("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:o,secondLine:l,parsingOptions:e});t.locationInfo=d,t.delimiter=c;const{names:y,aliases:h}=C(o,c),m=se(s,t.delimiter,y,h,t.locationInfo);if(e.fields?.length){const r=new x(e.fields);for(const u of m){const g=r.get(u.name);g&&Object.assign(u,g)}}if(!m.some(r=>r.type==="esriFieldTypeOID"&&(i.objectIdField=r.name,!0))){const r={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};i.objectIdField=r.name,m.unshift(r)}i.fields=m;const p=new x(i.fields);if(t.locationInfo&&(t.locationInfo.latitudeFieldName=p.get(t.locationInfo.latitudeFieldName).name,t.locationInfo.longitudeFieldName=p.get(t.locationInfo.longitudeFieldName).name),i.timeInfo){const r=i.timeInfo;if(r.startTimeField){const u=p.get(r.startTimeField);u?(r.startTimeField=u.name,u.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const u=p.get(r.endTimeField);u?(r.endTimeField=u.name,u.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const u=p.get(r.trackIdField);r.trackIdField=u?u.name:null}r.startTimeField||r.endTimeField||(i.timeInfo=null)}return t}export{je as default};
