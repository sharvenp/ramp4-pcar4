import{_ as $}from"./preload-helper.387dac8f.js";import{e as b,U as f,s as u,ku as L,E as k,b3 as V,dL as P,a6 as M,K as p,N as d,kz as q,k as I,dC as m,M as x,dA as F,dB as z,cY as C,O as B,_ as D,kA as J,ab as Z,kB as G,kC as H,kD as Y,d as E,b as Q,B as R}from"./main.efb50b2c.js";import{i as N}from"./originUtils.68552ec1.js";import{getSiblingOfSameTypeI as W}from"./resourceUtils.f7842c11.js";async function X(i,s,e,t,o,r){let a=null;if(b(e)){const n=`${i}/nodepages/`,h=n+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await f(h,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:n}}catch(g){b(o)&&o.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",h,g),a=g}}if(!s)return null;const l=`${i}/nodes/`,c=l+(s&&s.split("/").pop());try{return{type:"node",rootNode:(await f(c,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:l}}catch(n){throw new u("sceneservice:root-node-missing","Root node missing.",{pageError:a,nodeError:n,url:c})}}async function T(i,s,e){if(!s||!s.resources)return;const t=s.portalItem===i.portalItem?new Set(i.paths):new Set;i.paths.length=0,i.portalItem=s.portalItem;const o=new Set(s.resources.toKeep.map(n=>n.resource.path)),r=new Set,a=[];o.forEach(n=>{t.delete(n),i.paths.push(n)});for(const n of s.resources.toUpdate)if(t.delete(n.resource.path),o.has(n.resource.path)||r.has(n.resource.path)){const{resource:h,content:g,finish:U,error:K}=n,A=W(h,L());i.paths.push(A.path),a.push(O({resource:A,content:g,finish:U,error:K},e))}else i.paths.push(n.resource.path),a.push(ee(n,e)),r.add(n.resource.path);for(const n of s.resources.toAdd)a.push(O(n,e)),i.paths.push(n.resource.path);if(t.forEach(n=>{const h=s.portalItem.resourceFromPath(n);a.push(h.portalItem.removeResource(h).catch(()=>{}))}),a.length===0)return;const l=await k(a);V(e);const c=l.filter(n=>"error"in n).map(n=>n.error);if(c.length>0)throw new u("save:resources","Failed to save one or more resources",{errors:c})}async function O(i,s){const e=await P(i.resource.portalItem.addResource(i.resource,i.content,s));if(e.ok!==!0)throw i.error&&i.error(e.error),e.error;i.finish&&i.finish(i.resource)}async function ee(i,s){const e=await P(i.resource.update(i.content,s));if(e.ok!==!0)throw i.error(e.error),e.error;i.finish(i.resource)}const y=M.getLogger("esri.layers.mixins.SceneService"),ie=i=>{let s=class extends i{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=D(async(e,t,o)=>{switch(e){case S.SAVE:return this._save(t);case S.SAVE_AS:return this._saveAs(o,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return I.fromJSON(e.spatialReference);{const t=e.store,o=t.indexCRS||t.geographicCRS,r=o&&parseInt(o.substring(o.lastIndexOf("/")+1,o.length),10);return r!=null?new I(r):null}}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return x.fromJSON(l,o)}const r=t.store,a=this._readSpatialReference(t);return a==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<_)?null:new x({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},o=e.split(".");return o.length>=2&&(t.major=parseInt(o[0],10),t.minor=parseInt(o[1],10)),t}readVersion(e,t){const o=t.store,r=o.version!=null?o.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const o=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return J(this.url,t.name);let r=t.name;if(!r&&this.url){const a=Z(this.url);b(a)&&(r=a.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&o&&(r=o+" - "+r),G(r)}set url(e){const t=H({layer:this,url:e,nonStandardUrlAllowed:!1,logger:y});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,o,r){Y(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=E(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=X(this.parsedUrl.path,this.rootNode,e,this.apiKey,y,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if(e?.type==="page"){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(o==null||o.obb==null||o.obb.center==null||o.obb.halfSize==null)throw new u("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<_||this.fullExtent==null||this.fullExtent.hasZ)return;const r=o.obb.halfSize,a=o.obb.center[2],l=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this.fullExtent.zmin=a-l,this.fullExtent.zmax=a+l}else if(e?.type==="node"){const t=e.rootNode?.mbs;if(!Array.isArray(t)||t.length!==4||t[0]<_)return;const o=t[2],r=t[3];this.fullExtent.zmin=o-r,this.fullExtent.zmax=o+r}}async _fetchService(e){if(this.url==null)throw new u("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await f(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await f(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(o=!0),o)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){const t=(await f(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,o){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const a of r)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,l,c)=>c.indexOf(a)===l),o===v.newItem&&(e.typeKeywords=e.typeKeywords.filter(a=>a!=="Hosted Service")))}async _saveAs(e,t){const o={...j,...t};let r=Q.from(e);r||(y.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new u("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const a=r.portal||R.getDefault();await this._ensureLoadBeforeSave(),r.type=w,r.portal=a;const l={origin:"portal-item",url:null,messages:[],portal:a,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},c={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations),await this._validateAgainstJSONSchema(c,l,o),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,o,v.newItem),await a._signIn(),await a.user.addItem({item:r,folder:o&&o.folder,data:c}),await T(this.resourceReferences,l,null),this.portalItem=r,N(l),l.portalItem=r,r}async _save(e){const t={...j,...e};this.portalItem||(y.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new u("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==w&&(y.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+w),await Promise.reject(new u("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${w}"`))),await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&E(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||R.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations),await this._validateAgainstJSONSchema(r,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,v.existingItem),await this.portalItem.update({data:r}),await T(this.resourceReferences,o,null),N(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let r=t.messages.filter(a=>a.type==="error").map(a=>new u(a.name,a.message,a.details));if(o&&o.validationOptions.ignoreUnsupported&&(r=r.filter(a=>a.name!=="layer:unsupported"&&a.name!=="symbol:unsupported"&&a.name!=="symbol-layer:unsupported"&&a.name!=="property:unsupported"&&a.name!=="url:unsupported"&&a.name!=="scenemodification:unsupported")),o.validationOptions.enabled||te){const a=(await $(()=>import("./schemaValidator.38fe5446.js"),["assets/schemaValidator.38fe5446.js","assets/main.efb50b2c.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js","assets/_commonjsHelpers.01f5fe30.js"])).validate(e,o.portalItemLayerType);if(a.length>0){const l=`Layer item did not validate:
${a.join(`
`)}`;if(y.error(`_validateAgainstJSONSchema(): ${l}`),o.validationOptions.failPolicy==="throw"){const c=a.map(n=>new u("sceneservice:schema-validation",n)).concat(r);throw new u("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:c})}}}if(r.length>0)throw new u("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return p([d(q)],s.prototype,"id",void 0),p([d({type:I})],s.prototype,"spatialReference",void 0),p([m("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),p([d({type:x})],s.prototype,"fullExtent",void 0),p([m("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),p([d({readOnly:!0,type:F})],s.prototype,"heightModelInfo",void 0),p([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),p([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),p([d({readOnly:!0})],s.prototype,"version",void 0),p([m("version",["store.version"])],s.prototype,"readVersion",null),p([d({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),p([d({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),p([d({type:String})],s.prototype,"title",void 0),p([m("portal-item","title")],s.prototype,"readTitlePortalItem",null),p([m("service","title",["name"])],s.prototype,"readTitleService",null),p([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),p([d(z)],s.prototype,"url",null),p([C("url")],s.prototype,"writeUrl",null),p([d()],s.prototype,"parsedUrl",null),p([d({readOnly:!0})],s.prototype,"store",void 0),p([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=p([B("esri.layers.mixins.SceneService")],s),s},_=-1e38,te=!1;var v;(function(i){i[i.existingItem=0]="existingItem",i[i.newItem=1]="newItem"})(v||(v={}));const w="Scene Service",j={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var S;(function(i){i[i.SAVE=0]="SAVE",i[i.SAVE_AS=1]="SAVE_AS"})(S||(S={}));export{ie as A,S as K,X as n};