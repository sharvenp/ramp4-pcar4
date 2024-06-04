import{c as I,cP as v,cQ as M,cp as Q,t as Z,be as b,r as _,cT as q,cU as $,cV as A,cD as D,ae as O}from"./main-69e2a69d.js";import{t as P,n as k}from"./objectIdUtils-967fafff.js";import{g as C}from"./FeatureStore-4b0427e6.js";import{f as E,g as x}from"./projectionSupport-b91613b1.js";import{e as G}from"./QueryEngine-e81f2f24.js";import{i as z,o as L,a as U}from"./clientSideDefaults-d8a3e496.js";import{w as W,a as g,m as T,f as j,g as w}from"./sourceUtils-74ef1547.js";import"./preload-helper-388ac9d5.js";import"./BoundsStore-ae9ad8ef.js";import"./PooledRBush-78f0104d.js";import"./centroid-376a04cf.js";import"./utils-02375bd6.js";import"./json-48e3ea08.js";import"./QueryEngineResult-d2e0082b.js";import"./quantizationUtils-580a4d40.js";import"./WhereClause-c3e9c35c.js";import"./executionError-c1d13a98.js";import"./utils-87ff925a.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-d90a344a.js";const B=D,V={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:D},H={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function J(m){return O(m)?m.z!=null:!!m.hasZ}function K(m){return O(m)?m.m!=null:!!m.hasM}class ge{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:a}=e,i=this._inferLayerProperties(a,e.fields),d=e.fields||[],p=e.hasM!=null?e.hasM:!!i.hasM,f=e.hasZ!=null?e.hasZ:!!i.hasZ,c=!e.spatialReference&&!i.spatialReference,u=c?B:e.spatialReference||i.spatialReference,y=c?V:null,r=e.geometryType||i.geometryType,o=!r;let l=e.objectIdField||i.objectIdField,s=e.timeInfo;if(!o&&(c&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!r))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!l)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&l!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${l}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),l=i.objectIdField),l&&!i.objectIdField){let n=null;d.some(h=>h.name===l&&(n=h,!0))?(n.type="esriFieldTypeOID",n.editable=!1,n.nullable=!1):d.unshift({alias:l,name:l,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const n of d){if(n.name==null&&(n.name=n.alias),n.alias==null&&(n.alias=n.name),!n.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:n});if(n.name===l&&(n.type="esriFieldTypeOID"),!v.jsonValues.includes(n.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n})}const F={};for(const n of d)if(n.type!=="esriFieldTypeOID"&&n.type!=="esriFieldTypeGlobalID"){const h=M(n);h!==void 0&&(F[n.name]=h)}if(this._fieldsIndex=new Q(d),this._createDefaultAttributes=z(F,l),s){if(s.startTimeField){const n=this._fieldsIndex.get(s.startTimeField);n?(s.startTimeField=n.name,n.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const n=this._fieldsIndex.get(s.endTimeField);n?(s.endTimeField=n.name,n.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const n=this._fieldsIndex.get(s.trackIdField);n?s.trackIdField=n.name:(s.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:s}}),s=null)}const R={warnings:t,featureErrors:[],layerDefinition:{...H,drawingInfo:L(r),templates:U(F),extent:y,geometryType:r,objectIdField:l,fields:d,hasZ:f,hasM:p,timeInfo:s},assignedObjectIds:{}};if(this._queryEngine=new G({fields:d,geometryType:r,hasM:p,hasZ:f,objectIdField:l,spatialReference:u,featureStore:new C({geometryType:r,hasM:p,hasZ:f}),timeInfo:s,cacheSpatialQueries:!0}),!a||!a.length)return this._nextObjectId=P,R;const S=k(l,a);return this._nextObjectId=S+1,await E(a,u),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:t,geometryType:a}=this._queryEngine;return await Promise.all([W(t,a),E(e.adds,t),E(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let a,i,d=null,p=null,f=null;for(const c of e){const u=c.geometry;if(!Z(u)&&(d||(d=b(u)),p||(p=u.spatialReference),a==null&&(a=J(u)),i==null&&(i=K(u)),d&&p&&a!=null&&i!=null))break}if(t&&t.length){let c=null;t.some(u=>{const y=u.type==="esriFieldTypeOID",r=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return c=u,y||r})&&(f=c.name)}return{geometryType:d,spatialReference:p,objectIdField:f,hasM:i,hasZ:a}}async _loadInitialFeatures(e,t){const{geometryType:a,hasM:i,hasZ:d,objectIdField:p,spatialReference:f,featureStore:c}=this._queryEngine,u=[];for(const o of t){if(o.uid!=null&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&a!==b(o.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),s=T(this._fieldsIndex,l,o.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.uid!=null&&(e.assignedObjectIds[o.uid]=o.attributes[p]),_(o.geometry)&&(o.geometry=x(o.geometry,o.geometry.spatialReference,f)),u.push(o))}c.addMany(q([],u,a,d,i,p));const{fullExtent:y,timeExtent:r}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=y,r){const{start:o,end:l}=r;e.layerDefinition.timeInfo.timeExtent=[o,l]}return e}async _applyEdits(e){const{adds:t,updates:a,deletes:i}=e,d={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(d,t),a&&a.length&&this._applyUpdateEdits(d,a),i&&i.length){for(const c of i)d.deleteResults.push(j(c));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:p,timeExtent:f}=await this._queryEngine.fetchRecomputedExtents();return{extent:p,timeExtent:f,featureEditResults:d}}_applyAddEdits(e,t){const{addResults:a}=e,{geometryType:i,hasM:d,hasZ:p,objectIdField:f,spatialReference:c,featureStore:u}=this._queryEngine,y=[];for(const r of t){if(r.geometry&&i!==b(r.geometry)){a.push(g("Incorrect geometry type."));continue}const o=this._createDefaultAttributes(),l=T(this._fieldsIndex,o,r.attributes);if(l)a.push(l);else{if(this._assignObjectId(o,r.attributes),r.attributes=o,r.uid!=null){const s=r.attributes[f];e.uidToObjectId[r.uid]=s}if(_(r.geometry)){const s=r.geometry.spatialReference??c;r.geometry=x(w(r.geometry,s),s,c)}y.push(r),a.push(j(r.attributes[f]))}}u.addMany(q([],y,i,p,d,f))}_applyUpdateEdits({updateResults:e},t){const{geometryType:a,hasM:i,hasZ:d,objectIdField:p,spatialReference:f,featureStore:c}=this._queryEngine;for(const u of t){const{attributes:y,geometry:r}=u,o=y&&y[p];if(o==null){e.push(g(`Identifier field ${p} missing`));continue}if(!c.has(o)){e.push(g(`Feature with object id ${o} missing`));continue}const l=$(c.getFeature(o),a,d,i);if(_(r)){if(a!==b(r)){e.push(g("Incorrect geometry type."));continue}const s=r.spatialReference??f;l.geometry=x(w(r,s),s,f)}if(y){const s=T(this._fieldsIndex,l.attributes,y);if(s){e.push(s);continue}}c.add(A(l,a,d,i,p)),e.push(j(o))}}_assignObjectId(e,t,a=!1){const i=this._queryEngine.objectIdField;a&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{ge as default};