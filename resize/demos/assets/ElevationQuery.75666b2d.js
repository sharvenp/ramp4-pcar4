import{a6 as Q,bA as A,dH as G,bR as P,dh as q,i as x,dI as H,bj as J,dJ as K,e as v,s as m,f as D,r as I,dK as B,V as _,cb as S,E as X,dL as Y,dM as E,dN as ee,dO as k}from"./main.33d7d020.js";import"./preload-helper.387dac8f.js";const z=Q.getLogger("esri.layers.support.ElevationSampler");class N{queryElevation(e){return se(e.clone(),this)}on(){return oe}projectIfRequired(e,t){return U(e,t)}}class te extends N{constructor(e,t,s){super(),this.tile=e,this.noDataValue=s,this.extent=G(e.tile.extent,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this.aaExtent=e.tile.extent;const i=q(t.spatialReference),a=t.lodAt(e.tile.level).resolution*i;this.demResolution={min:a,max:a}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return!x(t)&&this.containsAt(t.x,t.y)}containsAt(e,t){return H(this.aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const s=this.extent,i=`${s.xmin}, ${s.ymin}, ${s.xmax}, ${s.ymax}`;return z.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${i})`),this.noDataValue}return J(this.tile.sample(e,t),this.noDataValue)}}class L extends N{constructor(e,t,s){let i;super(),typeof t=="number"?(this.noDataValue=t,i=null):(i=t,this.noDataValue=s),this.samplers=i?e.map(n=>new te(n,i,this.noDataValue)):e;const a=this.samplers[0];if(a){this.extent=a.extent.clone();const{min:n,max:l}=a.demResolution;this.demResolution={min:n,max:l};for(let o=1;o<this.samplers.length;o++){const c=this.samplers[o];this.extent.union(c.extent),this.demResolution.min=Math.min(this.demResolution.min,c.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,c.demResolution.max)}}else this.extent=G(P(),i.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e,t){for(const s of this.samplers)if(s.containsAt(e,t))return s.elevationAt(e,t);return z.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue}}function se(r,e){const t=U(r,e.spatialReference);if(!t)return null;switch(r.type){case"point":ie(r,t,e);break;case"polyline":ne(r,t,e);break;case"multipoint":ae(r,t,e)}return r}function U(r,e){if(x(r))return null;const t=r.spatialReference;if(t.equals(e))return r;const s=K(r,e);return s||z.error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),s}function ie(r,e,t){r.z=t.elevationAt(e.x,e.y)}function ne(r,e,t){f.spatialReference=e.spatialReference;const s=r.hasM&&!r.hasZ;for(let i=0;i<r.paths.length;i++){const a=r.paths[i],n=e.paths[i];for(let l=0;l<a.length;l++){const o=a[l],c=n[l];f.x=c[0],f.y=c[1],s&&(o[3]=o[2]),o[2]=t.elevationAt(f.x,f.y)}}r.hasZ=!0}function ae(r,e,t){f.spatialReference=e.spatialReference;const s=r.hasM&&!r.hasZ;for(let i=0;i<r.points.length;i++){const a=r.points[i],n=e.points[i];f.x=n[0],f.y=n[1],s&&(a[3]=a[2]),a[2]=t.elevationAt(f.x,f.y)}r.hasZ=!0}const f=new A,oe={remove(){}};class O{constructor(e,t=null){if(this.tile=e,this.zmin=0,this.zmax=0,v(t)){const s=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(s[2]-s[0]),dy:(t.width-1)/(s[3]-s[1]),x0:s[0],y1:s[3]},this.zmin=t.minValue,this.zmax=t.maxValue}}sample(e,t){if(x(this.samplerData))return;const{safeWidth:s,width:i,pixelData:a,noDataValue:n,dx:l,dy:o,y1:c,x0:u}=this.samplerData,h=Z(o*(c-t),0,s),d=Z(l*(e-u),0,s),p=Math.floor(h),$=Math.floor(d),g=p*i+$,C=g+i,w=a[g],R=a[C],M=a[g+1],F=a[C+1];if(w!==n&&R!==n&&M!==n&&F!==n){const V=d-$,b=w+(M-w)*V;return b+(R+(F-R)*V-b)*(h-p)}}}function Z(r,e,t){return r<e?e:r>t?t:r}class he{async queryAll(e,t,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter(c=>c.visible):e.slice()).length)throw new m("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=y.fromGeometry(t);let a=!1;s&&s.returnSampleInfo||(a=!0);const n={...T,...s,returnSampleInfo:!0},l=await this.query(e[e.length-1],i,n),o=await this._queryAllContinue(e,l,n);return o.geometry=o.geometry.export(),a&&delete o.sampleInfo,o}async query(e,t,s){if(!e)throw new m("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof y)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new m("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...T,...s},a=new le(e,t.spatialReference,i),n=i.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(a,t,n),await this._selectTiles(a,n),await this._populateElevationTiles(a,n),this._sampleGeometryWithElevation(a),this._createQueryResult(a,n)}async createSampler(e,t,s){if(!e)throw new m("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new m("elevation-query:invalid-extent","Invalid or undefined extent");const i={...T,...s};return this._createSampler(e,t,i)}async createSamplerAll(e,t,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter(n=>n.visible):e.slice()).length)throw new m("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new m("elevation-query:invalid-extent","Invalid or undefined extent");const i={...T,...s,returnSampleInfo:!0},a=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,a,i)}async _createSampler(e,t,s,i){const a=s.signal;await e.load({signal:a});const n=t.spatialReference,l=e.tileInfo.spatialReference;n.equals(l)||(await D([{source:n,dest:l}],{signal:a}),t=I(t,l));const o=new re(e,t,s,i);return await this._selectTiles(o,a),await this._populateElevationTiles(o,a),new L(o.elevationTiles,o.layer.tileInfo,o.options.noDataValue)}async _createSamplerAllContinue(e,t,s,i){if(e.pop(),!e.length)return s;const a=s.samplers.map(c=>B(c.extent)),n=await this._createSampler(e[e.length-1],t,i,a);if(n.samplers.length===0)return s;const l=s.samplers.concat(n.samplers),o=new L(l,i.noDataValue);return this._createSamplerAllContinue(e,t,o,i)}async _queryAllContinue(e,t,s){const i=e.pop(),a=t.geometry.coordinates,n=[],l=[];for(let u=0;u<a.length;u++){const h=t.sampleInfo[u];h.demResolution>=0?h.source||(h.source=i):e.length&&(n.push(a[u]),l.push(u))}if(!e.length||n.length===0)return t;const o=t.geometry.clone(n),c=await this.query(e[e.length-1],o,s);return l.forEach((u,h)=>{a[u].z=c.geometry.coordinates[h].z,t.sampleInfo[u].demResolution=c.sampleInfo[h].demResolution}),this._queryAllContinue(e,t,s)}async _createQueryResult(e,t){const s={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(s.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(i=>{i.tile=null,i.elevationTile=null}),s}async _createGeometryDescriptor(e,t,s){let i;const a=e.layer.tileInfo.spatialReference;if(t instanceof y?i=await t.project(a,s):(await D([{source:t.spatialReference,dest:a}],{signal:s}),i=I(t,a)),!i)throw new m("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${a.wkid}'`);e.geometry=y.fromGeometry(i)}async _selectTiles(e,t){const s=e.options.demResolution;if(e.type==="geometry"&&this._preselectOutsideLayerExtent(e),typeof s=="number")this._selectTilesClosestResolution(e);else if(s==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(s!=="auto")throw new m("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${s}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(x(e.layer.fullExtent))return;const t=new O(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const s=e.layer.fullExtent;e.geometry.coordinates.forEach(i=>{const a=i.x,n=i.y;(a<s.xmin||a>s.xmax||n<s.ymin||n>s.ymax)&&(i.elevationTile=t)})}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,s=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(s)}_findNearestDemResolutionLODIndex(e,t){const s=t/q(e.spatialReference);let i=e.lods[0],a=0;for(let n=1;n<e.lods.length;n++){const l=e.lods[n];Math.abs(l.resolution-s)<Math.abs(i.resolution-s)&&(i=l,a=n)}return a}async _selectTilesFinestContiguous(e,t){const s=j(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,s,t)}async _selectTilesFinestContiguousAt(e,t,s){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const a=i.tilemapCache,n=e.getTilesToFetch();try{if(a)await _(Promise.all(n.map(l=>a.fetchAvailability(l.level,l.row,l.col,{signal:s}))),s);else if(await this._populateElevationTiles(e,s),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new m("elevation-query:has-unavailable-tiles")}catch(l){S(l),await this._selectTilesFinestContiguousAt(e,t-1,s)}}async _populateElevationTiles(e,t){const s=e.getTilesToFetch(),i={},a=e.options.cache,n=e.options.noDataValue,l=s.map(async o=>{const c=`${e.layer.uid}:${o.id}:${n}`,u=v(a)?a.get(c):null,h=v(u)?u:await e.layer.fetchTile(o.level,o.row,o.col,{noDataValue:n,signal:t});v(a)&&a.put(c,h),i[o.id]=new O(o,h)});await _(X(l),t),e.populateElevationTiles(i)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const s=e.layer.tilemapCache;if(!s)return this._selectTilesAutoPrefetchUpsample(e,t);const i=e.getTilesToFetch(),a={},n=i.map(async l=>{const o={id:null,level:0,row:0,col:0,extent:P()},c=await Y(s.fetchAvailabilityUpsample(l.level,l.row,l.col,o,{signal:t}));c.ok===!1?S(c.error):a[l.id]=o});await _(Promise.all(n),t),e.remapTiles(a)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let s=0;const i={},a=o=>{o.id in i?i[o.id]++:(i[o.id]=1,s++)},n=o=>{const c=i[o.id];c===1?(delete i[o.id],s--):i[o.id]=c-1};e.forEachTileToFetch(a,n);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch(o=>{s<=e.options.maximumAutoTileRequests||(n(o),t.upsampleTile(o)&&(l=!0),a(o))},n),l););}_selectTilesAutoFinest(e){const t=j(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const s=e.layer.tileInfo;await this._populateElevationTiles(e,t);let i=!1;e.forEachTileToFetch((a,n)=>{s.upsampleTile(a)?i=!0:n()}),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const s=t.elevationTile;let i=e.options.noDataValue;if(s){const a=s.sample(t.x,t.y);v(a)?i=a:t.elevationTile=null}t.z=i})}_extractSampleInfo(e){const t=e.layer.tileInfo,s=q(t.spatialReference);return e.geometry.coordinates.map(i=>{let a=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(a=t.lodAt(i.elevationTile.tile.level).resolution*s),{demResolution:a}})}}class y{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new y;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(s=>this._cloneCoordinate(s)),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await D([{source:this.spatialReference,dest:e}],{signal:t});const s=new E({spatialReference:this.spatialReference,points:this.coordinates.map(l=>[l.x,l.y])}),i=I(s,e);if(!i)return null;const a=this.coordinates.map((l,o)=>{const c=this._cloneCoordinate(l),u=i.points[o];return c.x=u[0],c.y=u[1],c}),n=this.clone(a);return n.spatialReference=e,n}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new y;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof y)t.coordinates=e.coordinates.map(s=>t._cloneCoordinate(s)),t._exporter=(s,i)=>{const a=e.clone(s);return a.spatialReference=i,a};else switch(e.type){case"point":{const s=e,{hasZ:i,hasM:a}=s;t.coordinates=i&&a?[{x:s.x,y:s.y,z:s.z,m:s.m}]:i?[{x:s.x,y:s.y,z:s.z}]:a?[{x:s.x,y:s.y,m:s.m}]:[{x:s.x,y:s.y}],t._exporter=(n,l)=>e.hasM?new A(n[0].x,n[0].y,n[0].z,n[0].m,l):new A(n[0].x,n[0].y,n[0].z,l);break}case"multipoint":{const s=e,{hasZ:i,hasM:a}=s;t.coordinates=i&&a?s.points.map(n=>({x:n[0],y:n[1],z:n[2],m:n[3]})):i?s.points.map(n=>({x:n[0],y:n[1],z:n[2]})):a?s.points.map(n=>({x:n[0],y:n[1],m:n[2]})):s.points.map(n=>({x:n[0],y:n[1]})),t._exporter=(n,l)=>e.hasM?new E({points:n.map(o=>[o.x,o.y,o.z,o.m]),hasZ:!0,hasM:!0,spatiaReference:l}):new E(n.map(o=>[o.x,o.y,o.z]),l);break}case"polyline":{const s=e,i=[],a=[],{hasZ:n,hasM:l}=e;let o=0;for(const c of s.paths)if(a.push([o,o+c.length]),o+=c.length,n&&l)for(const u of c)i.push({x:u[0],y:u[1],z:u[2],m:u[3]});else if(n)for(const u of c)i.push({x:u[0],y:u[1],z:u[2]});else if(l)for(const u of c)i.push({x:u[0],y:u[1],m:u[2]});else for(const u of c)i.push({x:u[0],y:u[1]});t.coordinates=i,t._exporter=(c,u)=>{const h=e.hasM?c.map(p=>[p.x,p.y,p.z,p.m]):c.map(p=>[p.x,p.y,p.z]),d=a.map(p=>h.slice(p[0],p[1]));return new ee({paths:d,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class W{constructor(e,t){this.layer=e,this.options=t}}class le extends W{constructor(e,t,s){super(e,s),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{const t=this.layer.tileInfo,s=t.lods[e].level;this.geometry.coordinates.forEach(i=>{i.tile=t.tileAt(s,i.x,i.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const s of this.geometry.coordinates){const i=s.tile;s.elevationTile||!s.tile||e[i.id]||(e[i.id]=i,t.push(i))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>t.tile=null)}}class re extends W{constructor(e,t,s,i){super(e,s),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const s=this._maximumLodForRequests(t),i=Math.min(s,e);i<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const s=this.extent;if(x(s))return-1;for(let i=t.lods.length-1;i>=0;i--){const a=t.lods[i],n=a.resolution*t.size[0],l=a.resolution*t.size[1];if(Math.ceil(s.width/n)*Math.ceil(s.height/l)<=e)return i}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const s=e[t.id];s&&(this.fetchedCandidates.add(t),this.elevationTiles.push(s))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const s=this.candidateTiles;this.candidateTiles=[],s.forEach(i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let a=!1;e(i,()=>a=!0),a?t&&t(i):this.candidateTiles.push(i)}),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const s={},i=[];for(const n of e)s[n.id]?t&&t(n):(s[n.id]=n,i.push(n));const a=i.sort((n,l)=>n.level-l.level);return a.filter((n,l)=>{for(let o=0;o<l;o++)if(k(a[o].extent,n.extent))return t&&t(n),!1;return!0})}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if(x(t))return;const s=this.layer.tileInfo,i=s.lods[e],a=s.tileAt(i.level,t.xmin,t.ymin),n=i.resolution*s.size[0],l=i.resolution*s.size[1],o=Math.ceil((t.xmax-a.extent[0])/n),c=Math.ceil((t.ymax-a.extent[1])/l);for(let u=0;u<c;u++)for(let h=0;h<o;h++){const d={id:null,level:a.level,row:a.row-u,col:a.col+h};s.updateTileInfo(d),this._tileIsMasked(d)||this.candidateTiles.push(d)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>k(t,e.extent))}}function j(r,e){let t=r.lods.length-1;if(e>0){const s=r.lods.findIndex(i=>i.resolution<e);s===0?t=0:s>0&&(t=s-1)}return t}const T={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{he as ElevationQuery,y as GeometryDescriptor,j as getFinestLodIndex};
