import{b8 as I,b9 as $,ba as E,f as n,bb as S,r as c,bc as w,j as y,p as R,bd as O,l as T,b as F,be as L}from"./main-7ed7b27d.js";import{E as U}from"./assetEditingSupport-2cebf928.js";import"./preload-helper-388ac9d5.js";var h;(function(e){e.GLTF_BINARY="3D_glb",e.GLTF_JSON="3D_gltf"})(h||(h={}));function G(e){return e&&e.applyEdits!=null}async function q(e,t,r,d={}){let s,u;const o={edits:r,result:new Promise((i,a)=>{s=i,u=a})};e.emit("apply-edits",o);try{const{results:i,edits:a}=await k(e,t,r,d),p=A=>A.filter(v=>!v.error).map(I),l={edits:a,addedFeatures:p(i.addFeatureResults),updatedFeatures:p(i.updateFeatureResults),deletedFeatures:p(i.deleteFeatureResults),addedAttachments:p(i.addAttachmentResults),updatedAttachments:p(i.updateAttachmentResults),deletedAttachments:p(i.deleteAttachmentResults),exceededTransferLimit:!1};return i.editedFeatureResults?.length&&(l.editedFeatures=i.editedFeatureResults),(l.addedFeatures.length||l.updatedFeatures.length||l.deletedFeatures.length||l.addedAttachments.length||l.updatedAttachments.length||l.deletedAttachments.length)&&(e.emit("edits",l),$(e)&&E.emit("edits",{layer:e,event:l})),s(l),i}catch(i){throw u(i),i}}async function k(e,t,r,d){if(await e.load(),!G(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!S(e))throw new n(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:u}=await B(e,r,d);return s.addFeatures?.length||s.updateFeatures?.length||s.deleteFeatures?.length||s.addAttachments?.length||s.updateAttachments?.length||s.deleteAttachments?.length?{edits:s,results:await t.applyEdits(s,u)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function B(e,t,r){const d=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=c(e.infoFor3D);if(!t||!d&&!s)throw new n(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const o=w(e);if(!o.data.isVersioned&&r?.gdbVersion)throw new n(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!o.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!o.editing.supportsGlobalId&&r?.globalIdUsed)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!o.editing.supportsGlobalId&&s)throw new n(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&s)throw new n(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...r};if(i.rollbackOnFailureEnabled!=null||o.editing.supportsRollbackOnFailure||(i.rollbackOnFailureEnabled=!0),i.rollbackOnFailureEnabled===!1&&i.returnServiceEditsOption==="original-and-current-features")throw new n(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!o.editing.supportsReturnServiceEditsInSourceSpatialReference&&i.returnServiceEditsInSourceSR)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(i.returnServiceEditsInSourceSR&&i.returnServiceEditsOption!=="original-and-current-features")throw new n(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const a={...t};if(a.addFeatures=t&&y.isCollection(t.addFeatures)?t.addFeatures.toArray():a.addFeatures||[],a.updateFeatures=t&&y.isCollection(t.updateFeatures)?t.updateFeatures.toArray():a.updateFeatures||[],a.deleteFeatures=t&&y.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():a.deleteFeatures||[],a.addFeatures.length&&!o.operations.supportsAdd)throw new n(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures.length&&!o.operations.supportsUpdate)throw new n(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures.length&&!o.operations.supportsDelete)throw new n(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");a.addAttachments=a.addAttachments||[],a.updateAttachments=a.updateAttachments||[],a.deleteAttachments=a.deleteAttachments||[],a.addFeatures=a.addFeatures.map(g),a.updateFeatures=a.updateFeatures.map(g),a.addAssets=[];const p=r?.globalIdUsed||u;return a.addFeatures.forEach(l=>x(l,e,p)),a.updateFeatures.forEach(l=>_(l,e,p)),a.deleteFeatures.forEach(l=>D(l,e,p)),a.addAttachments.forEach(l=>f(l,e)),a.updateAttachments.forEach(l=>f(l,e)),u&&await N(a,e),{edits:await C(a),options:i}}function m(e,t,r){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&c(e.geometry)){if(e.geometry.hasZ&&t.capabilities?.data.supportsZ===!1)throw new n(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&t.capabilities?.data.supportsM===!1)throw new n(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function x(e,t,r){m(e,t,r)}function D(e,t,r){m(e,t,r)}function _(e,t,r){m(e,t,r);const d=w(t);if("geometry"in e&&c(e.geometry)&&!d?.editing.supportsGeometryUpdate)throw new n(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function f(e,t){const{feature:r,attachment:d}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!d.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!d.data&&!d.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(d.data instanceof File&&d.data.name)&&!d.name)throw new n(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&d.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof d.data=="string"){const s=R(d.data);if(s&&!s.isBase64)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function C(e){const t=e.addFeatures??[],r=e.updateFeatures??[],d=t.concat(r).map(i=>i.geometry),s=await O(d),u=t.length,o=r.length;return s.slice(0,u).forEach((i,a)=>t[a].geometry=i),s.slice(u,u+o).forEach((i,a)=>r[a].geometry=i),e}function g(e){const t=new T;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function N(e,t){if(F(t.infoFor3D))return;const{infoFor3D:r}=t;let d=!1;for(const o of r.editFormats)if(o===h.GLTF_BINARY){d=!0;break}const s=[];for(const o of e.addFeatures??[])s.push(b(o,e,t,d));for(const o of e.updateFeatures??[])s.push(b(o,e,t,d));const u=await Promise.allSettled(s);for(const o of u)if(o.status==="rejected")throw o.reason}async function b(e,t,r,d){if(F(e.geometry)||e.geometry.type!=="mesh")return;const s=e.geometry,u=r.globalIdField;if(c(r.parsedUrl)&&c(s.external)&&Array.isArray(s.external.source)&&s.external.source.length===1&&"source"in s.external.source[0]&&typeof s.external.source[0].source=="string"&&s.external.source[0].source.startsWith(r.parsedUrl.path))return;if(!d)throw new n(`${r.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");const o=await s.toBinaryGLTF({ignoreLocalTransform:!0}),i=await o.buffer(),a=`{${L()}}`,p=`${a}.glb`;t.addAssets?.push({featureGlobalId:e.getAttribute(u),assetMapGlobalId:a,assetName:p,flags:c(s.transform)&&s.transform.geographic?U.PROJECT_VERTICES:0,data:i.data,mimeType:i.type,assetType:h.GLTF_BINARY,feature:e})}export{q as applyEdits};
