import{p as J,bh as D,ek as U,aa as W,bD as g,t as v,hD as X,d3 as Y,d4 as ee,r as x,c as d,ap as I,bC as $,fe as te,hE as L,hh as A,dM as O,E as se,fK as Q,hF as ie,bk as q,bj as ne,hG as G}from"./main-83b7c6ef.js";import"./preload-helper-388ac9d5.js";const M=J.getLogger("esri.layers.support.ElevationSampler");class K{queryElevation(e){return oe(e.clone(),this)}on(){return ue}projectIfRequired(e,t){return B(e,t)}}class ae extends K{get spatialReference(){return this.extent.spatialReference}constructor(e,t,s){super(),this.tile=e,this.noDataValue=s;const i=e.tile.extent;this.extent=U(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const n=g(t.spatialReference),a=t.lodAt(e.tile.level).resolution*n;this.demResolution={min:a,max:a}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return!v(t)&&this.containsAt(t.x,t.y)}containsAt(e,t){return X(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const s=this.extent,i=`${s.xmin}, ${s.ymin}, ${s.xmax}, ${s.ymax}`;return M.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${i})`),this.noDataValue}return Y(this.tile.sample(e,t),this.noDataValue)}}class Z extends K{get spatialReference(){return this.extent.spatialReference}constructor(e,t,s){let i;super(),typeof t=="number"?(this.noDataValue=t,i=null):(i=t,this.noDataValue=s),this.samplers=i?e.map(a=>new ae(a,i,this.noDataValue)):e;const n=this.samplers[0];if(n){this.extent=n.extent.clone();const{min:a,max:l}=n.demResolution;this.demResolution={min:a,max:l};for(let o=1;o<this.samplers.length;o++){const r=this.samplers[o];this.extent.union(r.extent),this.demResolution.min=Math.min(this.demResolution.min,r.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,r.demResolution.max)}}else this.extent=U(W(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){for(const s of this.samplers)if(s.containsAt(e,t))return s.elevationAt(e,t);return M.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue}}function oe(c,e){const t=B(c,e.spatialReference);if(!t)return null;switch(c.type){case"point":le(c,t,e);break;case"polyline":re(c,t,e);break;case"multipoint":ce(c,t,e)}return c}function B(c,e){if(v(c))return null;const t=c.spatialReference;if(t.equals(e))return c;const s=ee(c,e);return s||M.error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),s}function le(c,e,t){c.z=t.elevationAt(e.x,e.y)}function re(c,e,t){y.spatialReference=e.spatialReference;const s=c.hasM&&!c.hasZ;for(let i=0;i<c.paths.length;i++){const n=c.paths[i],a=e.paths[i];for(let l=0;l<n.length;l++){const o=n[l],r=a[l];y.x=r[0],y.y=r[1],s&&(o[3]=o[2]),o[2]=t.elevationAt(y.x,y.y)}}c.hasZ=!0}function ce(c,e,t){y.spatialReference=e.spatialReference;const s=c.hasM&&!c.hasZ;for(let i=0;i<c.points.length;i++){const n=c.points[i],a=e.points[i];y.x=a[0],y.y=a[1],s&&(n[3]=n[2]),n[2]=t.elevationAt(y.x,y.y)}c.hasZ=!0}const y=new D,ue={remove(){}};class he{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}}class j{constructor(e,t=null){if(this.tile=e,x(t)&&x(e)){const s=e.extent;this._samplerData=new he(t,s)}}get zmin(){return x(this._samplerData)?this._samplerData.data.minValue:0}get zmax(){return x(this._samplerData)?this._samplerData.data.maxValue:0}sample(e,t){if(v(this._samplerData))return;const{safeWidth:s,data:i,dx:n,dy:a,y1:l,x0:o}=this._samplerData,{width:r,values:u,noDataValue:m}=i,p=P(a*(l-t),0,s),h=P(n*(e-o),0,s),C=Math.floor(p),F=Math.floor(h),_=C*r+F,b=_+r,R=u[_],E=u[b],z=u[_+1],S=u[b+1];if(R!==m&&E!==m&&z!==m&&S!==m){const V=h-F,k=R+(z-R)*V;return k+(E+(S-E)*V-k)*(p-C)}}}function P(c,e,t){return c<e?e:c>t?t:c}class ye{async queryAll(e,t,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter(r=>r.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=T.fromGeometry(t);let n=!1;s&&s.returnSampleInfo||(n=!0);const a={...w,...s,returnSampleInfo:!0},l=await this.query(e[e.length-1],i,a),o=await this._queryAllContinue(e,l,a);return o.geometry=o.geometry.export(),n&&delete o.sampleInfo,o}async query(e,t,s){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof T)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new d("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...w,...s},n=new pe(e,t.spatialReference,i),a=i.signal;return await e.load({signal:a}),await this._createGeometryDescriptor(n,t,a),await this._selectTiles(n,a),await this._populateElevationTiles(n,a),this._sampleGeometryWithElevation(n),this._createQueryResult(n,a)}async createSampler(e,t,s){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...s};return this._createSampler(e,t,i)}async createSamplerAll(e,t,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter(a=>a.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...s,returnSampleInfo:!0},n=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,n,i)}async _createSampler(e,t,s,i){const n=s.signal;await e.load({signal:n});const a=t.spatialReference,l=e.tileInfo.spatialReference;a.equals(l)||(await I([{source:a,dest:l}],{signal:n}),t=$(t,l));const o=new me(e,t,s,i);return await this._selectTiles(o,n),await this._populateElevationTiles(o,n),new Z(o.elevationTiles,o.layer.tileInfo,o.options.noDataValue)}async _createSamplerAllContinue(e,t,s,i){if(e.pop(),!e.length)return s;const n=s.samplers.map(r=>te(r.extent)),a=await this._createSampler(e[e.length-1],t,i,n);if(a.samplers.length===0)return s;const l=s.samplers.concat(a.samplers),o=new Z(l,i.noDataValue);return this._createSamplerAllContinue(e,t,o,i)}async _queryAllContinue(e,t,s){const i=e.pop(),n=t.geometry.coordinates,a=t.sampleInfo;L(a);const l=[],o=[];for(let p=0;p<n.length;p++){const h=a[p];h.demResolution>=0?h.source||(h.source=i):e.length&&(l.push(n[p]),o.push(p))}if(!e.length||l.length===0)return t;const r=t.geometry.clone(l),u=await this.query(e[e.length-1],r,s),m=u.sampleInfo;if(!m)throw new Error("no sampleInfo");return o.forEach((p,h)=>{n[p].z=u.geometry.coordinates[h].z,a[p].demResolution=m[h].demResolution}),this._queryAllContinue(e,t,s)}async _createQueryResult(e,t){const s=await e.geometry.project(e.outSpatialReference,t);L(s);const i={geometry:s.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(n=>{n.tile=null,n.elevationTile=null}),i}async _createGeometryDescriptor(e,t,s){let i;const n=e.layer.tileInfo.spatialReference;if(t instanceof T?i=await t.project(n,s):(await I([{source:t.spatialReference,dest:n}],{signal:s}),i=$(t,n)),!i)throw new d("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${n.wkid}'`);e.geometry=T.fromGeometry(i)}async _selectTiles(e,t){const s=e.options.demResolution;if(e.type==="geometry"&&this._preselectOutsideLayerExtent(e),typeof s=="number")this._selectTilesClosestResolution(e);else if(s==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(s!=="auto")throw new d("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${s}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(v(e.layer.fullExtent))return;const t=new j(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const s=e.layer.fullExtent;e.geometry.coordinates.forEach(i=>{const n=i.x,a=i.y;(n<s.xmin||n>s.xmax||a<s.ymin||a>s.ymax)&&(i.elevationTile=t)})}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,s=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(s)}_findNearestDemResolutionLODIndex(e,t){const s=t/g(e.spatialReference);let i=e.lods[0],n=0;for(let a=1;a<e.lods.length;a++){const l=e.lods[a];Math.abs(l.resolution-s)<Math.abs(i.resolution-s)&&(i=l,n=a)}return n}async _selectTilesFinestContiguous(e,t){const s=N(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,s,t)}async _selectTilesFinestContiguousAt(e,t,s){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const n=i.tilemapCache,a=e.getTilesToFetch();try{if(n)await A(Promise.all(a.map(l=>n.fetchAvailability(l.level,l.row,l.col,{signal:s}))),s);else if(await this._populateElevationTiles(e,s),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new d("elevation-query:has-unavailable-tiles")}catch(l){O(l),await this._selectTilesFinestContiguousAt(e,t-1,s)}}async _populateElevationTiles(e,t){const s=e.getTilesToFetch(),i={},n=e.options.cache,a=e.options.noDataValue,l=s.map(async o=>{if(o.id==null)return;const r=`${e.layer.uid}:${o.id}:${a}`,u=x(n)?n.get(r):null,m=x(u)?u:await e.layer.fetchTile(o.level,o.row,o.col,{noDataValue:a,signal:t});x(n)&&n.put(r,m),i[o.id]=new j(o,m)});await A(se(l),t),e.populateElevationTiles(i)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const s=e.layer.tilemapCache;if(!s)return this._selectTilesAutoPrefetchUpsample(e,t);const i=e.getTilesToFetch(),n={},a=i.map(async l=>{const o=new Q(null,0,0,0,W()),r=await ie(s.fetchAvailabilityUpsample(l.level,l.row,l.col,o,{signal:t}));r.ok!==!1?l.id!=null&&(n[l.id]=o):O(r.error)});await A(Promise.all(a),t),e.remapTiles(n)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let s=0;const i={},n=o=>{o.id!=null&&(o.id in i?i[o.id]++:(i[o.id]=1,s++))},a=o=>{if(o.id==null)return;const r=i[o.id];r===1?(delete i[o.id],s--):i[o.id]=r-1};e.forEachTileToFetch(n,a);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch(o=>{s<=e.options.maximumAutoTileRequests||(a(o),t.upsampleTile(o)&&(l=!0),n(o))},a),l););}_selectTilesAutoFinest(e){const t=N(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const s=e.layer.tileInfo;await this._populateElevationTiles(e,t);let i=!1;e.forEachTileToFetch((n,a)=>{s.upsampleTile(n)?i=!0:a()}),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const s=t.elevationTile;let i=e.options.noDataValue;if(s){const n=s.sample(t.x,t.y);x(n)?i=n:t.elevationTile=null}t.z=i})}_extractSampleInfo(e){const t=e.layer.tileInfo,s=g(t.spatialReference);return e.geometry.coordinates.map(i=>{let n=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(n=t.lodAt(i.elevationTile.tile.level).resolution*s),{demResolution:n}})}}class T{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new T;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(s=>s.clone()),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await I([{source:this.spatialReference,dest:e}],{signal:t});const s=new q({spatialReference:this.spatialReference,points:this.coordinates.map(l=>[l.x,l.y])}),i=$(s,e);if(!i)return null;const n=this.coordinates.map((l,o)=>{const r=l.clone(),u=i.points[o];return r.x=u[0],r.y=u[1],r}),a=this.clone(n);return a.spatialReference=e,a}static fromGeometry(e){const t=new T;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof T)t.coordinates=e.coordinates.map(s=>s.clone()),t._exporter=(s,i)=>{const n=e.clone(s);return n.spatialReference=i,n};else switch(e.type){case"point":{const s=e,{hasZ:i,hasM:n}=s;t.coordinates=i&&n?[new f(s.x,s.y,s.z,s.m)]:i?[new f(s.x,s.y,s.z)]:n?[new f(s.x,s.y,null,s.m)]:[new f(s.x,s.y)],t._exporter=(a,l)=>e.hasM?new D(a[0].x,a[0].y,a[0].z,a[0].m,l):new D(a[0].x,a[0].y,a[0].z,l);break}case"multipoint":{const s=e,{hasZ:i,hasM:n}=s;t.coordinates=i&&n?s.points.map(a=>new f(a[0],a[1],a[2],a[3])):i?s.points.map(a=>new f(a[0],a[1],a[2])):n?s.points.map(a=>new f(a[0],a[1],null,a[2])):s.points.map(a=>new f(a[0],a[1])),t._exporter=(a,l)=>e.hasM?new q({points:a.map(o=>[o.x,o.y,o.z,o.m]),hasZ:!0,hasM:!0,spatiaReference:l}):new q(a.map(o=>[o.x,o.y,o.z]),l);break}case"polyline":{const s=e,i=[],n=[],{hasZ:a,hasM:l}=e;let o=0;for(const r of s.paths)if(n.push([o,o+r.length]),o+=r.length,a&&l)for(const u of r)i.push(new f(u[0],u[1],u[2],u[3]));else if(a)for(const u of r)i.push(new f(u[0],u[1],u[2]));else if(l)for(const u of r)i.push(new f(u[0],u[1],null,u[2]));else for(const u of r)i.push(new f(u[0],u[1]));t.coordinates=i,t._exporter=(r,u)=>{const m=e.hasM?r.map(h=>[h.x,h.y,h.z,h.m]):r.map(h=>[h.x,h.y,h.z]),p=n.map(h=>m.slice(h[0],h[1]));return new ne({paths:p,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class f{constructor(e,t,s=null,i=null,n=null,a=null){this.x=e,this.y=t,this.z=s,this.m=i,this.tile=n,this.elevationTile=a}clone(){return new f(this.x,this.y,this.z,this.m)}}class H{constructor(e,t){this.layer=e,this.options=t}}class pe extends H{constructor(e,t,s){super(e,s),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>{t.tile=null});else{const t=this.layer.tileInfo,s=t.lods[e].level;this.geometry.coordinates.forEach(i=>{i.tile=t.tileAt(s,i.x,i.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates){const s=t.tile?.id;t.tile=s?e[s]:null}}getTilesToFetch(){const e={},t=[];for(const s of this.geometry.coordinates){const i=s.tile;if(!i)continue;const n=s.tile?.id;s.elevationTile||!n||e[n]||(e[n]=i,t.push(i))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class me extends H{constructor(e,t,s,i){super(e,s),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const s=this._maximumLodForRequests(t),i=Math.min(s,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const s=this.extent;if(v(s))return-1;for(let i=t.lods.length-1;i>=0;i--){const n=t.lods[i],a=n.resolution*t.size[0],l=n.resolution*t.size[1];if(Math.ceil(s.width/a)*Math.ceil(s.height/l)<=e)return i}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const s=t.id&&e[t.id];s&&(this._fetchedCandidates.add(t),this.elevationTiles.push(s))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const s=this._candidateTiles;this._candidateTiles=[],s.forEach(i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,()=>n=!0),n?t&&t(i):this._candidateTiles.push(i)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const s={},i=[];for(const a of e){const l=a.id;l&&!s[l]?(s[l]=a,i.push(a)):t&&t(a)}const n=i.sort((a,l)=>a.level-l.level);return n.filter((a,l)=>{for(let o=0;o<l;o++){const r=n[o].extent;if(r&&a.extent&&G(r,a.extent))return t&&t(a),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(v(t))return;const s=this.layer.tileInfo,i=s.lods[e],n=s.tileAt(i.level,t.xmin,t.ymin),a=n.extent;if(v(a))return;const l=i.resolution*s.size[0],o=i.resolution*s.size[1],r=Math.ceil((t.xmax-a[0])/l),u=Math.ceil((t.ymax-a[1])/o);for(let m=0;m<u;m++)for(let p=0;p<r;p++){const h=new Q(null,n.level,n.row-m,n.col+p);s.updateTileInfo(h),this._tileIsMasked(h)||this._candidateTiles.push(h)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&G(t,e.extent))}}function N(c,e=0){let t=c.lods.length-1;if(e>0){const s=e/g(c.spatialReference),i=c.lods.findIndex(n=>n.resolution<s);i===0?t=0:i>0&&(t=i-1)}return t}const w={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{ye as ElevationQuery,T as GeometryDescriptor,N as getFinestLodIndex};