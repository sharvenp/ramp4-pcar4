import{bI as p,U as R,bJ as l,bK as y,bH as b}from"./main-e6c796d9.js";import"./preload-helper-388ac9d5.js";function j(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!t?.returnCountOnly?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function S(r,t,e){const n=await f(r,t,e),o=n.data,s=o.geometryType,a=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const i={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=i;else for(const u in d)d.hasOwnProperty(u)&&u!=="relatedRecords"&&(c[d[u]]=i)}return{...n,data:c}}async function m(r,t,e){const n=await f(r,t,e,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function f(r,t,e={},n){const o=p({...r.query,f:"json",...n,...j(t,n)});return R(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function I(r,t,e){t=l.from(t);const n=y(r);return S(n,t,e).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(c=>a[c]=b.fromJSON(s[c])),a})}async function O(r,t,e){t=l.from(t);const n=y(r);return m(n,t,{...e}).then(o=>o.data)}export{I as executeRelationshipQuery,O as executeRelationshipQueryForCount};
