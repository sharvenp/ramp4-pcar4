import{_ as y}from"./preload-helper-388ac9d5.js";import{b as f,d as p,r as c,aU as g,u as w,P as V,aV as b,ar as _,aW as D,aX as $,aY as T,aZ as S,a_ as L,a$ as x,f as k,b0 as I,U as m,a5 as E,e as o,y as l,b1 as N,b2 as O,b3 as P,n as j,b4 as A}from"./main-7ffb345c.js";class U{constructor(e,t,i,s){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=s)}get hasNoDataValues(){if(f(this._hasNoDataValues)){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),p(this._minValue)}get maxValue(){return this._ensureBounds(),p(this._maxValue)}_ensureBounds(){if(c(this._minValue))return;const{noDataValue:e,values:t}=this;let i=1/0,s=-1/0,h=!0;for(const n of t)n===e?this._hasNoDataValues=!0:(i=n<i?n:i,s=n>s?n:s,h=!1);h?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=s>-3e38?s:0)}}class M{constructor(e,t,i,s,h={}){this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=g(e,{...h,schedule:s}).then(n=>{if(this._thread===void 0){this._thread=n,this._promise=null,h.hasInitialize&&this.broadcast({},"initialize");for(const d of this._listeners)this._connectListener(d)}else n.close()}),this._promise.catch(n=>w.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${n}`))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),V(()=>{i.removed=!0,b(this._listeners,i),this._thread&&c(i.threadHandle)&&i.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const s=this._transferLists[e],h=s?s(t):[];return this._thread.invoke(e,t,{transferList:h,signal:i})}return this._promise?this._promise.then(()=>(_(i),this.invokeMethod(e,t,i))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class v extends M{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(u.forEach((e,t)=>{e===this&&u.delete(t)}),this.destroy())}}const u=new Map;function C(r=null){let e=u.get(p(r));return e||(c(r)?(e=new v(t=>r.immediate.schedule(t)),u.set(r,e)):(e=new v,u.set(null,e))),++e.ref,e}let a=class extends D($(T(S(L(A))))){constructor(...r){super(...r),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=C()}normalizeCtorArgs(r,e){return typeof r=="string"?{url:r,...e}:r}destroy(){this._lercDecoder=x(this._lercDecoder)}readVersion(r,e){let t=e.currentVersion;return t||(t=9.3),t}load(r){const e=c(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new k("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},r).catch(I).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(r,e,t,i){const s=c((i=i||{signal:null}).signal)?i.signal:i.signal=new AbortController().signal,h={responseType:"array-buffer",signal:s},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(r,e,t,i)).then(()=>m(this.getTileUrl(r,e,t),h)).then(d=>this._lercDecoder.decode(d.data,n,s)).then(d=>new U(d))}getTileUrl(r,e,t){const i=!this.tilemapCache&&this.supportsBlankTile,s=E({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${r}/${e}/${t}${s?"?"+s:""}`}async queryElevation(r,e){const{ElevationQuery:t}=await y(()=>import("./ElevationQuery-bb506587.js"),["./ElevationQuery-bb506587.js","./main-7ffb345c.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url);return _(e),new t().query(this,r,e)}async createElevationSampler(r,e){const{ElevationQuery:t}=await y(()=>import("./ElevationQuery-bb506587.js"),["./ElevationQuery-bb506587.js","./main-7ffb345c.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url);return _(e),new t().createSampler(this,r,e)}_fetchTileAvailability(r,e,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(r,e,t,i):Promise.resolve("unknown")}async _fetchImageService(r){if(this.sourceJSON)return this.sourceJSON;const e={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:r},t=await m(this.parsedUrl.path,e);t.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};o([l({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o([l({readOnly:!0,type:O})],a.prototype,"heightModelInfo",void 0),o([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),o([l({type:["show","hide"]})],a.prototype,"listMode",void 0),o([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"minScale",void 0),o([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"maxScale",void 0),o([l({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),o([l({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),o([l()],a.prototype,"sourceJSON",void 0),o([l({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),o([l(P)],a.prototype,"url",void 0),o([l()],a.prototype,"version",void 0),o([N("version",["currentVersion"])],a.prototype,"readVersion",null),a=o([j("esri.layers.ElevationLayer")],a),a.prototype.fetchTile.__isDefault__=!0;const H=a;export{H as default};
