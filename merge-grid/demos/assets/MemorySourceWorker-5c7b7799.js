import{f as I,jn as M,iB as v,dU as Q,b as Z,cq as b,r as _,dM as q,dO as $,jo as A,iD as D,cN as O}from"./main-917dc16a.js";import{t as k,n as C}from"./objectIdUtils-967fafff.js";import{g as P}from"./FeatureStore-3f9ac2b1.js";import{f as E,g as x}from"./projectionSupport-b9ebed13.js";import{e as G}from"./QueryEngine-5064a1c3.js";import{i as z,o as B,a as L}from"./clientSideDefaults-22323d2f.js";import{w as U,a as g,m as j,f as T,g as w}from"./sourceUtils-c14c4789.js";import"./preload-helper-388ac9d5.js";import"./BoundsStore-a30ec0ff.js";import"./PooledRBush-85457327.js";import"./centroid-354b1326.js";import"./utils-421e908c.js";import"./json-48e3ea08.js";import"./QueryEngineResult-a7d888c8.js";import"./quantizationUtils-1addcb3b.js";import"./WhereClause-d1001a39.js";import"./executionError-c1d13a98.js";import"./utils-af916bab.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-9bc5062a.js";const W=D,H={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:D},N={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function V(m){return O(m)?m.z!=null:!!m.hasZ}function J(m){return O(m)?m.m!=null:!!m.hasM}class ge{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:a}=e,i=this._inferLayerProperties(a,e.fields),d=e.fields||[],p=e.hasM!=null?e.hasM:!!i.hasM,c=e.hasZ!=null?e.hasZ:!!i.hasZ,f=!e.spatialReference&&!i.spatialReference,u=f?W:e.spatialReference||i.spatialReference,y=f?H:null,r=e.geometryType||i.geometryType,o=!r;let l=e.objectIdField||i.objectIdField,s=e.timeInfo;if(!o&&(f&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!r))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!l)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&l!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${l}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),l=i.objectIdField),l&&!i.objectIdField){let n=null;d.some(h=>h.name===l&&(n=h,!0))?(n.type="esriFieldTypeOID",n.editable=!1,n.nullable=!1):d.unshift({alias:l,name:l,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const n of d){if(n.name==null&&(n.name=n.alias),n.alias==null&&(n.alias=n.name),!n.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:n});if(n.name===l&&(n.type="esriFieldTypeOID"),!M.jsonValues.includes(n.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n})}const F={};for(const n of d)if(n.type!=="esriFieldTypeOID"&&n.type!=="esriFieldTypeGlobalID"){const h=v(n);h!==void 0&&(F[n.name]=h)}if(this._fieldsIndex=new Q(d),this._createDefaultAttributes=z(F,l),s){if(s.startTimeField){const n=this._fieldsIndex.get(s.startTimeField);n?(s.startTimeField=n.name,n.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const n=this._fieldsIndex.get(s.endTimeField);n?(s.endTimeField=n.name,n.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const n=this._fieldsIndex.get(s.trackIdField);n?s.trackIdField=n.name:(s.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:s}}),s=null)}const R={warnings:t,featureErrors:[],layerDefinition:{...N,drawingInfo:B(r),templates:L(F),extent:y,geometryType:r,objectIdField:l,fields:d,hasZ:c,hasM:p,timeInfo:s},assignedObjectIds:{}};if(this._queryEngine=new G({fields:d,geometryType:r,hasM:p,hasZ:c,objectIdField:l,spatialReference:u,featureStore:new P({geometryType:r,hasM:p,hasZ:c}),timeInfo:s,cacheSpatialQueries:!0}),!a||!a.length)return this._nextObjectId=k,R;const S=C(l,a);return this._nextObjectId=S+1,await E(a,u),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:t,geometryType:a}=this._queryEngine;return await Promise.all([U(t,a),E(e.adds,t),E(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let a,i,d=null,p=null,c=null;for(const f of e){const u=f.geometry;if(!Z(u)&&(d||(d=b(u)),p||(p=u.spatialReference),a==null&&(a=V(u)),i==null&&(i=J(u)),d&&p&&a!=null&&i!=null))break}if(t&&t.length){let f=null;t.some(u=>{const y=u.type==="esriFieldTypeOID",r=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return f=u,y||r})&&(c=f.name)}return{geometryType:d,spatialReference:p,objectIdField:c,hasM:i,hasZ:a}}async _loadInitialFeatures(e,t){const{geometryType:a,hasM:i,hasZ:d,objectIdField:p,spatialReference:c,featureStore:f}=this._queryEngine,u=[];for(const o of t){if(o.uid!=null&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&a!==b(o.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),s=j(this._fieldsIndex,l,o.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.uid!=null&&(e.assignedObjectIds[o.uid]=o.attributes[p]),_(o.geometry)&&(o.geometry=x(o.geometry,o.geometry.spatialReference,c)),u.push(o))}f.addMany(q([],u,a,d,i,p));const{fullExtent:y,timeExtent:r}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=y,r){const{start:o,end:l}=r;e.layerDefinition.timeInfo.timeExtent=[o,l]}return e}async _applyEdits(e){const{adds:t,updates:a,deletes:i}=e,d={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(d,t),a&&a.length&&this._applyUpdateEdits(d,a),i&&i.length){for(const f of i)d.deleteResults.push(T(f));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:p,timeExtent:c}=await this._queryEngine.fetchRecomputedExtents();return{extent:p,timeExtent:c,featureEditResults:d}}_applyAddEdits(e,t){const{addResults:a}=e,{geometryType:i,hasM:d,hasZ:p,objectIdField:c,spatialReference:f,featureStore:u}=this._queryEngine,y=[];for(const r of t){if(r.geometry&&i!==b(r.geometry)){a.push(g("Incorrect geometry type."));continue}const o=this._createDefaultAttributes(),l=j(this._fieldsIndex,o,r.attributes);if(l)a.push(l);else{if(this._assignObjectId(o,r.attributes),r.attributes=o,r.uid!=null){const s=r.attributes[c];e.uidToObjectId[r.uid]=s}if(_(r.geometry)){const s=r.geometry.spatialReference??f;r.geometry=x(w(r.geometry,s),s,f)}y.push(r),a.push(T(r.attributes[c]))}}u.addMany(q([],y,i,p,d,c))}_applyUpdateEdits({updateResults:e},t){const{geometryType:a,hasM:i,hasZ:d,objectIdField:p,spatialReference:c,featureStore:f}=this._queryEngine;for(const u of t){const{attributes:y,geometry:r}=u,o=y&&y[p];if(o==null){e.push(g(`Identifier field ${p} missing`));continue}if(!f.has(o)){e.push(g(`Feature with object id ${o} missing`));continue}const l=$(f.getFeature(o),a,d,i);if(_(r)){if(a!==b(r)){e.push(g("Incorrect geometry type."));continue}const s=r.spatialReference??c;l.geometry=x(w(r,s),s,c)}if(y){const s=j(this._fieldsIndex,l.attributes,y);if(s){e.push(s);continue}}f.add(A(l,a,d,i,p)),e.push(T(o))}}_assignObjectId(e,t,a=!1){const i=this._queryEngine.objectIdField;a&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{ge as default};
