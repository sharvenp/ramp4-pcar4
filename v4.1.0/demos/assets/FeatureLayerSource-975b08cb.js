import{s as D,e as E,y as A,m as C,a as M,r as h,h as j,b as S,c as Q,U as p,i as G,d as P,w as L,T as z,g as V,V as v,f as g,o as $,k as B,l as X,v as Y,n as Z,p as N,q as H}from"./main-e6c796d9.js";import{E as K}from"./assetEditingSupport-2cebf928.js";import{o as W}from"./clientSideDefaults-5ac400e2.js";import"./preload-helper-388ac9d5.js";import"./QueryEngineCapabilities-42e44ded.js";const ee=new D({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function J(e){return typeof e=="string"?N(e)||{data:e}:new Promise((t,s)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(N(a.result)),a.onerror=r=>s(r)})}const te=new Set(["Feature Layer","Table"]),se=new D({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let R=class extends C{constructor(){super(...arguments),this.type="feature-layer",this.refresh=M(async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(e){const t=h(e)?e.signal:null,s=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(s,t)),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:s,infoFor3D:a,gdbVersion:r,spatialReference:n,fieldsIndex:o}=this.layer,i=j("featurelayer-pbf")&&e?.query.supportsFormatPBF&&S(a),u=e?.operations?.supportsQueryAttachments??!1;return new Q({url:t.path,pbfSupported:i,fieldsIndex:o,infoFor3D:a,dynamicDataSource:s,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",r=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,r.query);try{const o=await p(a,{body:n});return this._createFeatureEditResult(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(e,t,s){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(s,n.query);try{const i=await p(r,{body:o});return this._createFeatureEditResult(i.data.updateAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(a,i)}}async applyEdits(e,t){await this.load();const s=this.layer.infoFor3D,a=h(s),r=a||(t?.globalIdUsed??!1),n=e.addFeatures?.map(c=>this._serializeFeature(c,s)).filter(h)??[],o=e.updateFeatures?.map(c=>this._serializeFeature(c,s)).filter(h)??[],i=this._getFeatureIds(e.deleteFeatures,r);G(n,o,this.layer.spatialReference);const u=[],l=[],d=[...e.deleteAttachments??[]];for(const c of e.addAttachments??[])u.push(await this._serializeAttachment(c));for(const c of e.updateAttachments??[])l.push(await this._serializeAttachment(c));const F=u.length||l.length||d.length?{adds:u,updates:l,deletes:d}:null;let m,q=null;if(a){q=new Map;const c=[];for(const b of e.addAssets??[])c.push(this._serializeAssetMapEditAndUploadAssets(b,q));const _=await Promise.all(c);m=_.length?{adds:_,updates:[],deletes:[]}:void 0}const y={gdbVersion:t?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:r,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId};t?.returnServiceEditsOption?(y.edits=JSON.stringify([{id:this.layer.layerId,adds:n,updates:o,deletes:i,attachments:F,assetMaps:P(m)}]),y.returnServiceEditsOption=ee.toJSON(t?.returnServiceEditsOption),y.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(y.adds=n.length?JSON.stringify(n):null,y.updates=o.length?JSON.stringify(o):null,y.deletes=i.length?r?JSON.stringify(i):i.join(","):null,y.attachments=F&&JSON.stringify(F),y.assetMaps=h(m)?JSON.stringify(m):void 0);const k=this._getLayerRequestOptions({method:"post",query:y}),x=t?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,I=await p(x+"/applyEdits",k);if(!this.layer.capabilities.operations?.supportsEditing&&this.layer.effectiveCapabilities?.operations?.supportsEditing&&await H?.findCredential(this.layer.url)?.refreshToken(),a&&I.data!=null&&I.data.assetMaps!=null){const c=I.data,_=this.layer.objectIdField,b=[];for(const f of c.addResults)f.success&&b.push(f.objectId);for(const f of c.updateResults)f.success&&b.push(f.objectId);const U=this._createRequestQueryOptions(),w=await p(x+"/query",{...U,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${b.join(",")})`,outFields:`${_}`}});if(w&&w.data&&w.data.assetMaps&&h(q)){const f=w.data.assetMaps;for(const T of f){const O=q.get(T.parentGlobalId).geometry;h(O)&&O.type==="mesh"&&O.updateExternalSource({source:[{name:T.assetName,source:T.assetName}],extent:O.extent})}}}return this._createEditsResult(I)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await p(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(r){throw this._createAttachmentErrorResult(s,r)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const s=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:n}=await p(`${r}/${a}`,s),{id:o,extent:i,fullExtent:u,timeExtent:l}=n,d=i||u;return{id:o,fullExtent:d&&L.fromJSON(d),timeExtent:l&&z.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!V(this.layer.url))return"unavailable";const e=v(this.layer.url,"status"),t=await p(e,{query:{f:"json"}});return se.fromJSON(t.data.status)}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:a}=await p(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:j("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=a}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!te.has(s))throw new g("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){if(e.type!=="Table"&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=W(e.geometryType).renderer;$("drawingInfo.renderer",t,e)}return e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e,t){const{geometry:s,attributes:a}=e;if(h(t)&&h(e.geometry)&&e.geometry.type==="mesh"){const r={...a},n=e.geometry,o=n.origin,i=n.transform;if(r[t.transformFieldRoles.originX]=o.x,r[t.transformFieldRoles.originY]=o.y,r[t.transformFieldRoles.originZ]=o.z,h(i)){const u=i.translation,l=i.scale,d=i.rotation;r[t.transformFieldRoles.translationX]=u[0],r[t.transformFieldRoles.translationY]=-u[2],r[t.transformFieldRoles.translationZ]=u[1],r[t.transformFieldRoles.scaleX]=l[0],r[t.transformFieldRoles.scaleY]=l[1],r[t.transformFieldRoles.scaleZ]=l[2],r[t.transformFieldRoles.rotationX]=d[0],r[t.transformFieldRoles.rotationY]=d[2],r[t.transformFieldRoles.rotationZ]=d[1],r[t.transformFieldRoles.rotationDeg]=d[3]}return{geometry:null,attributes:r}}return S(s)?{attributes:a}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:s}=e,{globalId:a,name:r,contentType:n,data:o,uploadId:i}=s,u={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)u.uploadId=i;else if(o){const l=await J(o);l&&(u.contentType=l.mediaType,u.data=l.data),o instanceof File&&(u.name=o.name)}return r&&(u.name=r),n&&(u.contentType=n),u}async _serializeAssetMapEditAndUploadAssets(e,t){const s=this.layer.url;let a=null;try{const l=new Blob([e.data],{type:e.mimeType}),d=new FormData;d.append("f","json"),d.append("file",l,`${e.assetName}`);const F={body:d,method:"post",responseType:"json"},{data:m}=await p(`${s}/uploads/upload`,F);if(!m.success)throw new g("feature-layer-source:upload-failure","Expected upload to be successfull.");a={assetType:e.assetType,assetUploadId:m.item.itemID}}catch{a=null}if(S(a)){const l=await J(new Blob([e.data]));if(!l.isBase64)throw new g("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");a={assetType:e.assetType,assetData:l.data}}if(S(a))throw new g("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const r={method:"post",query:{f:"json",assets:JSON.stringify([a])},responseType:"json"},n=await p(v(this.layer.parsedUrl.path,"uploadAssets"),r);if(n.data.uploadResults.length!==1||!n.data.uploadResults[0].success)throw new g("feature-layer-source:uploadAssets-failure","Bad response.");const o=n.data.uploadResults[0].assetHash,i=[];e.flags&K.PROJECT_VERTICES&&i.push("PROJECT_VERTICES");const u={globalId:e.assetMapGlobalId,parentGlobalId:e.featureGlobalId,assetName:e.assetName,assetHash:o,flags:i};return t.set(e.featureGlobalId,e.feature),u}_getFeatureIds(e,t){const s=e?.[0];return s?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map(s=>s.attributes&&s.attributes[t])}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map(t=>t.objectId)}_getGlobalIdsFromFeatureIdentifier(e){return e.map(t=>t.globalId)}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(t))for(const i of t)a.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===s&&(r={addResults:i.addResults??[],updateResults:i.updateResults??[],deleteResults:i.deleteResults??[],attachments:i.attachments,editMoment:i.editMoment});else r=t;const n=r?.attachments,o={addFeatureResults:r?.addResults?.map(this._createFeatureEditResult,this)??[],updateFeatureResults:r?.updateResults?.map(this._createFeatureEditResult,this)??[],deleteFeatureResults:r?.deleteResults?.map(this._createFeatureEditResult,this)??[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(r?.editMoment&&(o.editMoment=r.editMoment),a.length>0){o.editedFeatureResults=[];for(const i of a){const{editedFeatures:u}=i,l=u?.spatialReference?new B(u.spatialReference):null;o.editedFeatureResults.push({layerId:i.id,editedFeatures:{adds:u?.adds?.map(d=>this._createEditedFeature(d,l))||[],updates:u?.updates?.map(d=>({original:this._createEditedFeature(d[0],l),current:this._createEditedFeature(d[1],l)}))||[],deletes:u?.deletes?.map(d=>this._createEditedFeature(d,l))||[],spatialReference:l}})}}return o}_createEditedFeature(e,t){return new X({attributes:e.attributes,geometry:Y({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new g("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const s=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new g("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const a in t){const r=t[a];r!=null&&(s.set?s.set(a,r):s.append(a,r))}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:a}=this.layer;return{...e,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};E([A()],R.prototype,"type",void 0),E([A({constructOnly:!0})],R.prototype,"layer",void 0),E([A({readOnly:!0})],R.prototype,"queryTask",null),R=E([Z("esri.layers.graphics.sources.FeatureLayerSource")],R);const ue=R;export{ue as default};
