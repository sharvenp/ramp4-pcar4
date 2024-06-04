import{hE as g,s as _,ja as R,hC as $,d9 as k,bO as C,b2 as D,a6 as Q,cL as P,e as E,cQ as G,q as Z,U as v,H as q,d1 as A,d3 as M,jb as N}from"./main.4cbfea05.js";import{u as z}from"./FeatureStore.02d26dd4.js";import{f as F,g as b}from"./projectionSupport.75d4be9e.js";import{Y as L}from"./QueryEngine.3e5ef32f.js";import{T as B,L as U,O as W}from"./geojson.a99b0e3e.js";import{u as H,l as J,a as V}from"./clientSideDefaults.57b5866f.js";import{w as Y,m as w,f as T,a as I,g as x}from"./sourceUtils.f5bab99d.js";import"./preload-helper.387dac8f.js";import"./PooledRBush.e5faa0ac.js";import"./centroid.afdacd26.js";import"./json.d1a0fa35.js";import"./QueryEngineResult.385b5638.js";import"./quantizationUtils.e8ec02b2.js";import"./WhereClause.1cd394dd.js";import"./utils.f3060e6f.js";import"./utils.23a175fc.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./timeSupport.8c38eb2b.js";const K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class _e{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=await this._fetch(t?.signal));const a=B(n,{geometryType:e.geometryType}),o=e.fields||a.fields||[],l=e.hasZ!=null?e.hasZ:a.hasZ,d=a.geometryType,p=e.objectIdField||a.objectIdFieldName||"__OBJECTID",h=e.spatialReference||g;let s=e.timeInfo;o===a.fields&&a.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:a.unknownFields}});let u=o.find(r=>r.name===p);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1):(u={alias:p,name:p,type:a.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(u));const c={};for(const r of o){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new _("geojson-layer:invalid-field-name","field name is missing",{field:r});if(!R.jsonValues.includes(r.type))throw new _("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});if(r.name!==u.name){const f=$(r);f!==void 0&&(c[r.name]=f)}}this._fieldsIndex=new k(o);const y=this._fieldsIndex.requiredFields.indexOf(u);if(y>-1&&this._fieldsIndex.requiredFields.splice(y,1),s){if(s.startTimeField){const r=this._fieldsIndex.get(s.startTimeField);r?(s.startTimeField=r.name,r.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const r=this._fieldsIndex.get(s.endTimeField);r?(s.endTimeField=r.name,r.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const r=this._fieldsIndex.get(s.trackIdField);r?s.trackIdField=r.name:(s.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const S=d?H(d):null,m={warnings:i,featureErrors:[],layerDefinition:{...K,drawingInfo:S,templates:J(c),extent:null,geometryType:d,objectIdField:p,fields:o,hasZ:!!l,timeInfo:s}};this._queryEngine=new L({fields:o,geometryType:d,hasM:!1,hasZ:l,objectIdField:p,spatialReference:h,timeInfo:s,featureStore:new z({geometryType:d,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=V(c,p);const j=await this._createFeatures(n);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const O=this._normalizeFeatures(j,m.warnings,m.featureErrors);if(this._queryEngine.featureStore.addMany(O),m.layerDefinition.extent=this._queryEngine.fullExtent,m.layerDefinition.timeInfo){const{start:r,end:f}=this._queryEngine.timeExtent;m.layerDefinition.timeInfo.timeExtent=[r,f]}return m}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([Y(t,i),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this.loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=C(this._snapshotFeatures),this._snapshotTask.promise.then(t=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,t);const i=this._normalizeFeatures(t);i&&this._queryEngine.featureStore.addMany(i)},t=>{this._queryEngine.featureStore.clear(),D(t)||Q.getLogger("esri.layers.GeoJSONLayer").error(new _("geojson-layer:refresh","An error occurred during refresh",{error:t}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:i,objectIdField:n}=this._queryEngine,a=U(e,{geometryType:t,hasZ:i,objectIdField:n});if(!P(this._queryEngine.spatialReference,g))for(const o of a)E(o.geometry)&&(o.geometry=G(b(Z(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),g,this._queryEngine.spatialReference)));return a}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this.loadOptions,n=(await v(t,{responseType:"json",query:{...i},signal:e})).data;return await W(n),n}_normalizeFeatures(e,t,i){const{objectIdField:n}=this._queryEngine,a=[];for(const o of e){const l=this._createDefaultAttributes(),d=w(this._fieldsIndex,l,o.attributes,!0,t);d?i?.push(d):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.objectId=l[n],a.push(o))}return a}_applyEdits(e){const{adds:t,updates:i,deletes:n}=e,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),i&&i.length&&this._applyUpdateEdits(a,i),n&&n.length){for(const o of n)a.deleteResults.push(T(o));this._queryEngine.featureStore.removeManyById(n)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:a,hasZ:o,objectIdField:l,spatialReference:d,featureStore:p}=this._queryEngine,h=[];for(const s of t){if(s.geometry&&n!==q(s.geometry)){i.push(I("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),c=w(this._fieldsIndex,u,s.attributes);if(c)i.push(c);else{if(this._assignObjectId(u,s.attributes),s.attributes=u,s.uid!=null){const y=s.attributes[l];e.uidToObjectId[s.uid]=y}E(s.geometry)&&(s.geometry=b(x(s.geometry,d),s.geometry.spatialReference,d)),h.push(s),i.push(T(s.attributes[l]))}}p.addMany(A([],h,n,o,a,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:o,spatialReference:l,featureStore:d}=this._queryEngine;for(const p of t){const{attributes:h,geometry:s}=p,u=h&&h[o];if(u==null){e.push(I(`Identifier field ${o} missing`));continue}if(!d.has(u)){e.push(I(`Feature with object id ${u} missing`));continue}const c=M(d.getFeature(u),i,a,n);if(E(s)){if(i!==q(s)){e.push(I("Incorrect geometry type."));continue}c.geometry=b(x(s,l),s.spatialReference,l)}if(h){const y=w(this._fieldsIndex,c.attributes,h);if(y){e.push(y);continue}}d.add(N(c,i,a,n,o)),e.push(T(u))}}_createObjectIdGenerator(e,t){const i=e.fieldsIndex.get(e.objectIdField);if(i.type==="esriFieldTypeString")return()=>i.name+"-"+Date.now().toString(16);let n=Number.NEGATIVE_INFINITY;for(const a of t)a.objectId&&(n=Math.max(n,a.objectId));return n=Math.max(0,n)+1,()=>n++}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;e[n]=i&&n in t?t[n]:this._objectIdGenerator()}async _checkProjection(e){try{await F(g,e)}catch{throw new _("geojson-layer","Projection not supported")}}}export{_e as default};
