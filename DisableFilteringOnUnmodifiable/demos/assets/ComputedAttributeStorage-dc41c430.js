import{h as f,r as _,cz as U,dL as O,v as P,b as l,af as H,cW as Z,dM as Y,dN as J,dO as Q,dP as p,dQ as V,dR as X,u as q,dG as W,Z as K,at as v,f as E,dS as tt,dT as et,dU as st,cV as rt,d as g,aR as it}from"./main-7ffb345c.js";import{T as nt,c as R}from"./arcadeTimeUtils-9461d561.js";import{e as at}from"./centroid-c75795a2.js";import{_ as ot}from"./preload-helper-388ac9d5.js";import{S as ht,T as ut,P as dt,u as $,N as ct,O as lt}from"./definitions-19bfb61c.js";import{c as _t,u as ft,f as b,e as gt,i as pt,n as mt,l as yt,r as bt,s as B,a as u}from"./visualVariablesUtils-89ac3954.js";import{W as xt}from"./color-a672d284.js";import{G as m}from"./enums-64ab819c.js";class I{static fromBuffer(t,e){return new I(t,e)}static create(t,e=4294967295){const s=new Uint32Array(Math.ceil(t/32));return new I(s,e)}constructor(t,e){this._mask=0,this._buf=t,this._mask=e}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let i=s/32;i!==r/32;i++)if(this._buf[i])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let i=s/32;i!==r/32;i++)this._buf[i]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new I(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;)1&s&&t(r),s>>>=1,r++}}countSet(){let t=0;return this.forEachSet(e=>{t++}),t}}let T=0;const w=f("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],It=w[0],St=w[1],Tt=w[2],At=w[3],k=f("featurelayer-simplify-payload-size-factors")??[1,2,4],zt=k[0],Ct=k[1],Ft=k[2],wt=f("featurelayer-simplify-mobile-factor")??2,Dt=f("esri-mobile");class G{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=t,this._layerSchema=e}static createInstance(){return T++,T=T>65535?0:T,T}get isEmpty(){return _(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const r=Dt?wt:1;e>4e6?s=Ft*r:e>1e6?s=Ct*r:e>5e5?s=zt*r:e>1e5&&(s=r);let i=0;t>4e3?i=At*s:t>2e3?i=Tt*s:t>100?i=St:t>15&&(i=It);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}createQuantizedExtrudedQuad(t,e){return new U([5],[t-1,e,1,-1,1,1,-1,1,-1,-1])}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,r){const i=this.copy();return i._tx+=t,i._ty+=e,i._sx*=s,i._sy*=r,i}readAttribute(t,e=!1){const s=this._readAttribute(t,e);if(s!==void 0)return s;for(const r of this._joined){r.setIndex(this.getIndex());const i=r._readAttribute(t,e);if(i!==void 0)return i}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const r of Object.keys(s))t[r]=s[r]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),e=O(t,this.geometryType,this.hasZ,this.hasM),s=P(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata||(this._datetimeMetadata=nt.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}autocastArcadeDate(t,e){return e&&e instanceof Date?this.isUnknownDateTimeField(t)?R.unknownDateJSToArcadeDate(e):R.dateJSAndZoneToArcadeDate(e,this.contextTimeReference?.timeZone??"system"):e}isUnknownDateTimeField(t){return this.dateTimeReferenceFieldIndex?.fieldTimeZone(t)==="unknown"}fieldSourceTimeZone(t){return this.dateTimeReferenceFieldIndex?.fieldTimeZone(t)??""}get layerPreferredTimeZone(){return this.dateTimeReferenceFieldIndex?.layerPreferredTimeZone??""}field(t){if(this.hasField(t))return this.autocastArcadeDate(t,this.readAttribute(t,!0));for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t)){const s=e._readAttribute(t,!0);return this.autocastArcadeDate(t,s)}throw new Error(`Field ${t} does not exist`)}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(t=!1){if(!t)return JSON.stringify(this.readLegacyFeature());const e=this.readLegacyFeature();if(!e)return JSON.stringify(null);const s={geometry:e.geometry,attributes:{...e.attributes?e.attributes:{}}};for(const r in s.attributes){const i=s.attributes[r];i instanceof Date&&(s.attributes[r]=i.getTime())}return JSON.stringify(s)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){return{attributes:this._readAttributes(),geometry:t?.keepGeometryType===!0?this.geometry():this.geometry()?.toJSON()??null}}castAsJsonAsync(t=null,e=null){return Promise.resolve(this.castAsJson(e))}removeIds(t){if(l(this._objectIdToIndex)){const s=new Map,r=this.getCursor();for(;r.next();){const i=H(r.getObjectId());s.set(i,r.getIndex())}this._objectIdToIndex=s}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){l(this._deleted)&&(this._deleted=I.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return l(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if(this.geometryType!=="esriGeometryPolygon")return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=Z(this.getQuantizationTransform(),null);return at(new U,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}function Et({coords:d,lengths:t}){let e=0;for(const s of t){for(let r=1;r<s;r++)d[2*(e+r)]+=d[2*(e+r)-2],d[2*(e+r)+1]+=d[2*(e+r)-1];e+=s}}class y extends G{static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,i=Y([],t,r,!1,!1,s);for(let n=0;n<i.length;n++)i[n].displayId=t[n].displayId;return y.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const s=J(t,e.objectIdField);return y.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,r=y.fromOptimizedFeatures(s,e);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const i of t.fields)i.type==="esriFieldTypeDate"&&r._dateFields.add(i.name);return r}static fromOptimizedFeatures(t,e,s){const r=G.createInstance(),i=new y(r,t,e);return i._transform=s,i}constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s?.geometryType,this._features=e}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter(s=>!(s.objectId&&e.has(s.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current?.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new y(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return Q(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return O(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return l(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return p(this._current)?V(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if(this.geometryType==="esriGeometryPoint"||!t)return t;const e=t.clone();return Et(e),e}readHydratedGeometry(){const t=this._current.geometry;if(l(t))return null;const e=t.clone();return _(this._transform)&&X(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!p(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return l(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!p(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return l(e)?t:e.translate[1]-t*e.scale[1]}getX(){return p(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return p(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!p(this._current)){if(_(this._current.centroid)){const[s,r]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(s,r)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return p(this._current)?this._computeCentroid():this._current.centroid}hasField(t){return t in this._current.attributes?!0:this.getFieldNames().map(e=>e.toLowerCase()).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const s=this._current.attributes[t];if(s!==void 0)return s!=null&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t?.toLocaleLowerCase().trim();for(const n in r)if(n.toLocaleLowerCase().trim()===i){const a=this._current.attributes[n];return a!=null&&e&&this._dateFields.has(n)?new Date(a):a}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const x=q.getLogger("esri.views.layers.2d.features.support.AttributeStore"),C=mt(yt,x),A={sharedArrayBuffer:f("esri-shared-array-buffer"),atomics:f("esri-atomics")};function M(d,t){return e=>t(d(e))}class Mt{constructor(t,e,s,r){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return rt(this.data,t=>t.buffer)}unsetComponentAllTexels(t,e){const s=g(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=g(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=g(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){g(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){g(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=b(t);return g(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=b(t),i=1<<e;this.layout&i?l(this.data)||(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):x.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===m.UNSIGNED_BYTE&&this._shared&&A.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===m.UNSIGNED_BYTE&&this._shared&&A.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=g(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||this._ctype==="local"),i=this.pixelType,n=this.layout,a=g(this.data);return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&r!=="local"?SharedArrayBuffer:ArrayBuffer,n=xt(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let h=0;h<a.length;h+=4)a[h+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class jt{constructor(t,e,s=()=>{}){this._client=t,this.config=e,this._notifyChange=s,this._blocks=new Array,this._filters=new Array(ht),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const r=e.supportsTextureFloat?m.FLOAT:m.UNSIGNED_BYTE;C(`Creating AttributeStore ${A.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:m.UNSIGNED_BYTE,layout:1},{pixelType:m.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:m.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=W(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&(f("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeInfo=null,!l(s))){switch(s.target){case"feature":this._targetType=ft;break;case"aggregate":this._targetType=_t}if(s.type==="subtype"){this._attributeComputeInfo={isSubtype:!0,subtypeField:s.subtypeField,map:new Map};for(const i in s.mapping){const n=s.mapping[i];if(_(n)&&_(n.vvMapping))for(const a of n.vvMapping)this._bindAttribute(a,parseInt(i,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},_(s.vvMapping))for(const i of s.vvMapping)this._bindAttribute(i);if(_(s.attributeMapping))for(const i of s.attributeMapping)this._bindAttribute(i)}}}onTileData(t,e){if(l(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const r=s.getDisplayId();this.setAttributeData(r,s)}}async setHighlight(t,e){const r=this._getBlock(0),i=e.map(n=>b(n));r.lock(),r.unsetComponentAllTexels(0,1),r.setComponent(0,1,i),r.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);await this.sendUpdates()}async updateFilters(t,e,s){const{service:r,spatialReference:i}=s,{filters:n}=e,a=n.map((h,o)=>this._updateFilter(h,o,r,i));(await Promise.all(a)).some(h=>h)&&(t.storage.filters=!0,f("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=b(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?ut:0}unsetAttributeData(t){const e=b(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=b(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==gt(t))return;const r=this._attributeComputeInfo,i=this.config.supportsTextureFloat?1:2,n=4;let a=null;r&&(a=r.isSubtype?r.map.get(e.readAttribute(r.subtypeField)):r.map,a&&a.size&&a.forEach((h,o)=>{const c=o*i%n,z=Math.floor(o*i/n),S=this._getBlock(z+dt),D=h(e);if(this.config.supportsTextureFloat)S.setData(s,c,D);else if(D===$)S.setData(s,c,255),S.setData(s,c+1,255);else{const N=it(Math.round(D),-32767,32766)+32768,j=255&N,L=(65280&N)>>8;S.setData(s,c,j),S.setData(s,c+1,L)}}))}sendUpdates(){if(f("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=K(),this._nextUpdate.promise;const t={blocks:this._blocks.map(e=>_(e)?e.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const r=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>r.resolve())}else f("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");this._notifyChange()};f("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s}).catch(e=>{if(v(e))return this._createResourcesPromise=null,this._createResources();this._notifyChange(),x.error(new E("mapview-attribute-store","Encountered an error during client update",e))}),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,e){function s(){const{normalizationField:o}=t;return o?c=>{const z=c.readAttribute(o);return z?c.readAttribute(t.field)/z:null}:c=>c.readAttribute(t.field)}function r(){return t.normalizationField&&x.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),o=>o.getComputedNumericAtIndex(t.fieldIndex)}let i;if(t.fieldIndex!=null)i=r();else{if(!t.field)return;i=s()}const{valueRepresentation:n}=t;n&&(i=M(i,o=>bt(o,n)));const a=o=>o===null||isNaN(o)||o===1/0||o===-1/0?$:o,h=this._attributeComputeInfo;if(h.isSubtype){const o=h.map.get(e)??new Map;o.set(t.binding,M(i,a)),h.map.set(e,o)}else h.map.set(t.binding,M(i,a))}_createResources(){if(_(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(ct),this._getBlock(lt),C("Initializing AttributeStore");const t={shared:A.sharedArrayBuffer&&this._client.type!=="local",size:this._size,blocks:tt(this._blocks,s=>({textureOnly:s.textureOnly,buffer:s.buffer,pixelType:s.pixelType}))},e=this._client.initialize(t,this._signal).catch(s=>{v(s)?this._createResourcesPromise=null:x.error(new E("mapview-attribute-store","Encountered an error during client initialization",s))});return this._createResourcesPromise=e,e.then(()=>l(this._createResourcesPromise)?this._createResources():void 0),e}_getBlock(t){const e=this._blocks[t];if(_(e))return e;C(`Initializing AttributeBlock at index ${t}`);const s=A.sharedArrayBuffer,r=this._client.type,i=new Mt(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return C("Expanding block size to",t,this._blocks),et(this._blocks,e=>e.expand(t)),this._createResourcesPromise=null,this._size=t,0}return x.error(new E("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const i=this._filters[e],n=_(i)&&i.hash;if(!i&&!t||n===JSON.stringify(t))return!1;if(l(t)){if(!i)return!1;const h=1<<e+1,o=this._getBlock(0);return this._filters[e]=null,o.setComponentAllTexels(0,h),this.sendUpdates(),!0}return await(await this._getFilter(e,s)).update(t,r),!0}async _getFilter(t,e){const s=this._filters[t];if(_(s))return s;const{default:r}=await ot(()=>import("./FeatureFilter-4c907b96.js"),["./FeatureFilter-4c907b96.js","./main-7ffb345c.js","./preload-helper-388ac9d5.js","./main-5700f243.css","./timeSupport-d8d60bac.js","./projectionSupport-569b0ed9.js","./json-48e3ea08.js","./utils-70a6b37e.js","./FeatureStore2D-7cd36246.js","./CircularArray-7965b848.js","./arcadeTimeUtils-9461d561.js","./executionError-c1d13a98.js","./centroid-c75795a2.js","./definitions-19bfb61c.js","./visualVariablesUtils-89ac3954.js","./color-a672d284.js","./enums-55085e26.js","./enums-64ab819c.js","./VertexElementDescriptor-2925c6af.js","./visualVariablesUtils-42976aac.js"],import.meta.url),i=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new st(e.fields)});return this._filters[t]=i,i}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=pt(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const n=!!(s&1<<i),a=this._filters[i];e|=(!n||l(a)||a.check(t)?1:0)<<i}let r=0;if(this._idsToHighlight.size){const i=t.getObjectId();r=this.getHighlightFlag(i)}return e<<1|r}}let kt=class{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return B(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}};function F(d,t,e){if(!(d.length>t))for(;d.length<=t;)d.push(e)}class Pt{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new kt,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(I.create(this._allocatedSize,u)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),F(this._numerics[t],e,0)}_ensureInstanceId(t){F(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),F(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),B(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&u)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&u,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&u,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&u,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&u,0,s)}getComputedNumericAtIndex(t,e){const s=t&u;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&u;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&u;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&u;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&u;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&u;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&u)]}getYMin(t){return this._bounds[4*(t&u)+1]}getXMax(t){return this._bounds[4*(t&u)+2]}getYMax(t){return this._bounds[4*(t&u)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex((o,c)=>{r=Math.min(r,o),i=Math.min(i,c),n=Math.max(n,o),a=Math.max(a,c)});const h=t&u;return F(this._bounds,4*h+4,0),this._bounds[4*h]=r,this._bounds[4*h+1]=i,this._bounds[4*h+2]=n,this._bounds[4*h+3]=a,!0}}export{jt as M,G as b,y as c,Pt as r,I as t};
