import{kC as _,eu as E,cp as f,E as T,U as h,lv as R,lw as w,b as d,r as S,q as P,b0 as m,H as I,x as U,C as A}from"./main-95e6e76d.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-9a7188b3.js";import{r as C,e as v,I as D}from"./I3SBinaryReader-a0b72fb4.js";import"./spatialReferenceEllipsoidUtils-91a60b7f.js";import"./symbolColorUtils-6bf8a062.js";import{e as $}from"./quatf64-3363c48e.js";import{t as F}from"./vec3f32-ad1dc57f.js";import"./plane-30412390.js";const W={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};var y;(function(s){s[s.INVISIBLE=0]="INVISIBLE",s[s.TRANSPARENT=1]="TRANSPARENT",s[s.OPAQUE=2]="OPAQUE"})(y||(y={}));function N(s){return{...x,...s,type:"solid"}}const x={color:_(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:y.OPAQUE,hasSlicePlane:!1};_(0,0,0,.2),y.OPAQUE;function O(s=[0,0,0],r=[-1,-1,-1],t=$()){return{center:E(s),halfSize:F(r),quaternion:C(t)}}(()=>{const s=new Int8Array(162);let r=0;const t=o=>{for(let e=0;e<o.length;e++)s[r+e]=o[e];r+=6};return t([6,2,3,1,5,4]),t([0,2,3,1,5,4]),t([0,2,3,7,5,4]),t([0,1,3,2,6,4]),t([0,1,3,2,0,0]),t([0,1,5,7,3,2]),t([0,1,3,7,6,4]),t([0,1,3,7,6,2]),t([0,1,5,7,6,2]),t([0,1,5,4,6,2]),t([0,1,5,4,0,0]),t([0,1,3,7,5,4]),t([0,2,6,4,0,0]),t([0,0,0,0,0,0]),t([1,3,7,5,0,0]),t([2,3,7,6,4,0]),t([2,3,7,6,0,0]),t([2,3,1,5,7,6]),t([0,1,5,7,6,2]),t([0,1,5,7,6,4]),t([0,1,3,7,6,4]),t([4,5,7,6,2,0]),t([4,5,7,6,0,0]),t([4,5,1,3,7,6]),t([0,2,3,7,5,4]),t([6,2,3,7,5,4]),t([6,2,3,1,5,4]),s})();f();var g;function Z(s,r,t,o,e){const i=[];for(const a of r)if(a&&e.includes(a.name)){const p=`${s}/nodes/${t}/attributes/${a.key}/0`;i.push({url:p,storageInfo:a})}return T(i.map(a=>h(a.url,{responseType:"array-buffer"}).then(p=>D(a.storageInfo,p.data)))).then(a=>{const p=[];for(const c of o){const l={};for(let n=0;n<a.length;n++){const u=a[n].value;u!=null&&(l[i[n].storageInfo.name]=M(u,c))}p.push(l)}return p})}(function(s){s[s.OUTSIDE=0]="OUTSIDE",s[s.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",s[s.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",s[s.INSIDE=3]="INSIDE"})(g||(g={}));const Q=-32768,b=-(2**31);function M(s,r){if(!s)return null;const t=s[r];return R(s)?t===Q?null:t:w(s)?t===b?null:t:t!=t?null:t}N({color:[0,0,0,0],opacity:0});new Array(24);v();f();f();O();new Array(72);class J{constructor(r,t,o,e){this._parsedUrl=r,this._portalItem=t,this._apiKey=o,this.signal=e,this._rootDocument=null;const i=this._parsedUrl?.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this._urlParts={root:i[1],layerId:parseInt(i[2],10)})}async fetch(){if(!this._urlParts)return null;const r=this._portalItem??await this._portalItemFromServiceItemId();if(d(r))return this._loadFromUrl();const t=await this._findAndLoadRelatedPortalItem(r);return d(t)?null:this._loadFeatureLayerFromPortalItem(t)}async fetchPortalItem(){if(!this._urlParts)return null;const r=this._portalItem??await this._portalItemFromServiceItemId();return d(r)?null:this._findAndLoadRelatedPortalItem(r)}async _fetchRootDocument(){if(S(this._rootDocument))return this._rootDocument;if(d(this._urlParts))return this._rootDocument={},{};const r={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},t=`${this._urlParts.root}/SceneServer`;try{const o=await h(t,r);this._rootDocument=o.data}catch{this._rootDocument={}}return this._rootDocument}async _fetchServiceOwningPortalUrl(){const r=this._parsedUrl?.path,t=r?P?.findServerInfo(r):null;if(t?.owningSystemUrl)return t.owningSystemUrl;const o=r?r.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const e=(await h(o,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){m(e)}return null}async _findAndLoadRelatedPortalItem(r){try{return(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(t=>t.type==="Feature Service")||null}catch(t){return m(t),null}}async _loadFeatureLayerFromPortalItem(r){await r.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(r.url??"");return new I({url:t,portalItem:r}).load({signal:this.signal})}async _loadFromUrl(){const r=await this._findMatchingAssociatedSublayerUrl(`${this._urlParts?.root}/FeatureServer`);return new I({url:r}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(r){const t=r.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),o={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},e=this._urlParts?.layerId,i=this._fetchRootDocument(),a=h(t,o),[p,c]=await Promise.all([a,i]),l=c&&c.layers,n=p.data&&p.data.layers;if(!Array.isArray(n))throw new Error("expected layers array");if(Array.isArray(l)){for(let u=0;u<Math.min(l.length,n.length);u++)if(l[u].id===e)return`${t}/${n[u].id}`}else if(e!=null&&e<n.length)return`${t}/${n[e].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const r=(await this._fetchRootDocument()).serviceItemId;if(!r)return null;const t=new U({id:r,apiKey:this._apiKey}),o=await this._fetchServiceOwningPortalUrl();S(o)&&(t.portal=new A({url:o}));try{return t.load({signal:this.signal})}catch(e){return m(e),null}}}export{J as l,W as t,Z as u};