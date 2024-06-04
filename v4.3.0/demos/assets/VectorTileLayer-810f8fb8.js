import{p as J,c as I,fA as X,l5 as Y,L as _,fb as H,U as A,cr as C,av as q,bq as Z,ep as ee,ki as te,kj as re,a9 as x,e9 as Q,V as P,bN as v,l6 as se,l7 as ie,w as V,bO as M,l8 as oe,l9 as F,la as K,kn as W,O as le,lb as z,bh as ae,fL as ne,f8 as O,dG as ue,dK as pe,hA as ce,gb as he,dI as ye,dJ as de,fP as fe,ga as me,dL as ge,dM as R,b as Ae,lc as Se,ld as we,eW as E,cR as ve,e as c,y as h,f as xe,e1 as _e,dO as Ue,k as be,a4 as Ie}from"./main-83b7c6ef.js";import{e as Re}from"./jsonContext-d3cd7e5a.js";import{l as $e}from"./StyleRepository-b58d9f81.js";import"./preload-helper-388ac9d5.js";import"./StyleDefinition-29c49b98.js";import"./enums-f1a6a48a.js";import"./enums-fb086c25.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./GeometryUtils-984e8446.js";import"./definitions-cc1dbf1d.js";let U=null;function Te(e){if(U)return U;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return U=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),U}const j=1.15;let B=class{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>j;const{width:r,height:s,data:i,json:o}=await this._getSpriteData(this._spriteSource,t),l=Object.keys(o);if(!l||l.length===0||!i)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=s;const u=Math.max(this._maxTextureSize,4096);if(r>u||s>u){const a=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${u} pixels}`;throw J.getLogger("esri.layers.support.SpriteSource").error(a),new I("SpriteSource",a)}let n;for(let a=0;a<i.length;a+=4)n=i[a+3]/255,i[a]=i[a]*n,i[a+1]=i[a+1]*n,i[a+2]=i[a+2]*n;this.image=i}async _getSpriteData(t,r){if(t.type==="image"){let y,d;if(this.devicePixelRatio<j){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");y=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");y=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in y&&"height"in y&&"data"in y&&(X(y.data)||Y(y.data))?{width:y.width,height:y.height,data:new Uint8Array(y.data),json:d}:{...k(y),json:d}}const s=_(this.baseURL),i=s.query?"?"+H(s.query):"",o=this._isRetina?"@2x":"",l=`${s.path}${o}.${this._spriteImageFormat}${i}`,u=`${s.path}${o}.json${i}`,[n,a]=await Promise.all([A(u,r),A(l,{responseType:"image",...r})]);return{...k(a.data),json:n.data}}};function k(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(s.data)}}let Pe=class{constructor(t){this.url=t}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=A(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return C(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new q(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let o,l,u=t,n=s.pop();if(u===1)return n;for(;s.length;)if(o=s.pop(),l=(1&o.col)+((1&o.row)<<1),u){if(u[l]===0){n=null;break}if(u[l]===1){n=o;break}n=o,u=u[l]}return n}},Oe=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=A(this._tileIndexUrl,{query:{...t?.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:o}=t,l=new q(t);return this._tilemap.fetchAvailabilityUpsample(s,i,o,l,r).then(()=>(l.world=t.world,l)).catch(u=>{if(Z(u))throw u;return null})}};class Le{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){this._promise===null&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const r=this._abortOptions;return r.push(t),te(t,()=>{r.every(s=>re(s))&&this._abortController.abort()}),this._promise.then(s=>x(s))}async _makeRequest(t,r){const{data:s}=await A(t,{responseType:"array-buffer",signal:r});return s}}const $=new Map;function De(e,t,r,s,i){return Me(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),i)}function Me(e,t){return ee($,e,()=>new Le(e)).getData(t).then(r=>($.delete(e),r)).catch(r=>{throw $.delete(e),r})}let Ee=class{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=_(this.sourceUrl),o=x(s),l=o.tiles;if(i)for(let m=0;m<l.length;m++){const f=_(l[m]);f&&(Q(f.path)||(f.path=P(i.path,f.path)),l[m]=v(f.path,{...i.query,...f.query}))}this.tileServers=l;const u=s.capabilities&&s.capabilities.split(",").map(m=>m.toLowerCase().trim()),n=s?.exportTilesAllowed===!0,a=u?.includes("tilemap")===!0,y=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:a},exportTiles:n?{maxExportTilesCount:+y}:null},this.tileInfo=se(o.tileInfo,o,null,{ignoreMinMaxLOD:!0});const d=s.tileMap?v(P(i.path,s.tileMap),i.query??{}):null;a?(this.type="vector-tile",this.tilemap=new Oe(new ie({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),d)):d&&(this.tilemap=new Pe(d)),this.fullExtent=V.fromJSON(s.fullExtent)}destroy(){}async getRefKey(t,r){return await this.tilemap?.dataKey(t,r)??t}requestTile(t,r,s,i){const o=this.tileServers[r%this.tileServers.length];return De(o,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,o=s.lods,l=Math.min(i.length,o.length);for(let u=0;u<l;u++){const n=i[u],a=o[u];if(n.level!==a.level||Math.round(n.scale)!==Math.round(a.scale))return!1}return!0}};const T=M.defaults&&M.defaults.io.corsEnabledServers;async function je(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await g(r,"esri",e,i,t);const o={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&w(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&w(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return S(o.spriteUrl),S(o.glyphsUrl),o}function S(e){if(!e)return;const t=oe(e);T&&!T.includes(t)&&T.push(t)}function w(...e){let t;for(const r of e)r!=null&&(F(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=Q(r)?r:P(t,r));return t?K(t):void 0}async function g(e,t,r,s,i){let o,l,u;if(C(i),typeof r=="string"){const a=W(r);S(a),u=await A(a,{...i,responseType:"json",query:{f:"json",...i?.query}}),u.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=a,l=a}else r!=null&&(u={data:r},o=r.jsonUrl||null,l=s);const n=u?.data;if(G(n))return e.styleUrl=o||null,ke(e,n,l,i);if(Be(n))return e.sourceUrl?N(e,n,l,!1,t,i):(e.sourceUrl=o||null,N(e,n,l,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function G(e){return!!e?.sources}function Be(e){return!G(e)}async function ke(e,t,r,s){const i=r?le(r):z();e.styleBase=i,e.style=t,e.styleUrl&&S(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await g(e,"esri",w(i,l.url),void 0,s):o.push(g(e,"esri",l,i,s))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(g(e,l,w(i,t.sources[l].url),void 0,s)):t.sources[l].tiles&&o.push(g(e,l,t.sources[l],i,s)));await Promise.all(o)}async function N(e,t,r,s,i,o){const l=r?K(r)+"/":z(),u=Ne(t,l),n=new Ee(i,v(l,o?.query??{}),u);if(!s&&e.primarySourceName in e.sourceNameToSource){const a=e.sourceNameToSource[e.primarySourceName];if(!a.isCompatibleWith(n))return;n.fullExtent!=null&&(a.fullExtent!=null?a.fullExtent.union(n.fullExtent):a.fullExtent=n.fullExtent.clone()),a.tileInfo&&n.tileInfo&&a.tileInfo.lods.length<n.tileInfo.lods.length&&(a.tileInfo=n.tileInfo)}if(s?(e.sourceBase=l,e.source=t,e.validatedSource=u,e.primarySourceName=i,e.sourceUrl&&S(e.sourceUrl)):S(l),e.sourceNameToSource[i]=n,!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?g(e,"",w(l,t.defaultStyles,"root.json"),void 0,o):g(e,"",t.defaultStyles,w(l,"root.json"),o)}}function Ne(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,o=2958287637957775e-7;const l=[],u=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let a=0;a<=n;a++)a>=u&&l.push({level:a,scale:o,resolution:i}),i/=2,o/=2;for(const a of e.tiles??[])S(w(t,a));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:{wkid:102100}}}}const b=1e-6;function Ce(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=b||Math.abs(r.y-s.y)>=b)return!1;let i,o;e.lods[0].scale>t.lods[0].scale?(i=e,o=t):(o=e,i=t);for(let l=i.lods[0].scale;l>=o.lods[o.lods.length-1].scale-b;l/=2)if(Math.abs(l-o.lods[0].scale)<b)return!0;return!1}function qe(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],s=e.format,i=e.dpi,o=new ae({x:e.origin.x,y:e.origin.y}),l=e.spatialReference,u=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],a=u.scale,y=u.resolution,d=n.scale,m=[];let f=a,L=y,D=0;for(;f>d;)m.push(new ne({level:D,resolution:L,scale:f})),D++,f/=2,L/=2;return new O({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:m,spatialReference:l})}let p=class extends ue(pe(ce(he(ye(de(fe(me(ge(Ie))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(R).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await A(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Re(this.portalItem))}).catch(R).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&_(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?v(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get parsedUrl(){return this.serviceUrl?_(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo?.spatialReference??null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&F(e)&&(e=`https:${e}`);const r=Ae(Se(e));t.styleUrl=we(e,r)}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new O;if(e.length>1)for(let r=0;r<e.length;r++)Ce(t,e[r].tileInfo)&&(t=qe(t,e[r].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=E("2d").maxTextureSize,s=this.currentStyleInfo?.spriteUrl?v(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,i=new B({type:"url",spriteUrl:s,pixelRatio:e,spriteFormat:this.currentStyleInfo?.spriteFormat},r);await i.load(t),this._spriteSourceMap.set(e,i)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=E("2d").maxTextureSize,s=e.spriteUrl,i=s?v(s,{...this.customParameters,token:this.apiKey}):null;if(!i&&e.type==="url")return null;const o=new B(e,r);try{await o.load(t);const l=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),i&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=i),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){R(l)}return null}async loadStyle(e,t){const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||(this._loadingTask?.abort(),this._loadingTask=ve(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return x(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return x(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return x(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await je(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Te("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const o of r)if(o.toLowerCase().includes(s))return W(`//static.arcgis.com/attribution/Vector${i}/${o}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};c([h({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],p.prototype,"listMode",void 0),c([h({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([h({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([h({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:V})],p.prototype,"fullExtent",null),c([h()],p.prototype,"style",void 0),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],p.prototype,"parsedUrl",null),c([h({readOnly:!0})],p.prototype,"serviceUrl",null),c([h({type:xe,readOnly:!0})],p.prototype,"spatialReference",null),c([h({readOnly:!0})],p.prototype,"styleRepository",void 0),c([h({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],p.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([_e(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:O})],p.prototype,"tileInfo",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([h({readOnly:!0})],p.prototype,"version",void 0),c([Ue("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([h({type:String})],p.prototype,"showCollisionBoxes",void 0),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([be("esri.layers.VectorTileLayer")],p);const st=p;export{st as default};
