import{_ as L}from"./preload-helper-388ac9d5.js";import{fx as E,c,e as g,y as w,k as S,gO as v,r as h,t as f,bN as F,p as a,iV as P,e_ as R,U as W,v as M,fN as T,d3 as k,aE as q,f as j,iW as C}from"./main-69e2a69d.js";let m=class extends E.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};g([w({readOnly:!0})],m.prototype,"connectionError",null),m=g([S("esri.layers.support.StreamConnection")],m);const N=m;var _;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(_||(_={}));let y=class extends N{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=v(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),h(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(f(this._websocket))return"disconnected";switch(this._websocket.readyState){case _.CONNECTING:case _.OPEN:return"connected";case _.CLOSING:case _.CLOSED:return"disconnected"}}sendMessageToSocket(e){f(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,h(this._websocket)&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const s=F(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(s),this.notifyChange("connectionStatus")}catch(s){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(a.getLogger(this.declaredClass).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,s)),await P(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const r=JSON.parse(t.data);this._onMessage(r)}catch(r){return void a.getLogger(this.declaredClass).error(new c("websocket-connection","Failed to parse message, invalid JSON",{error:r}))}}}_createWebSocket(e){return new Promise((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=o=>this._onClose(o),s.onerror=o=>this._onError(o),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=o=>{s.onopen=s.onclose=null,r(o)}})}async _handshake(e=1e4){const t=this._websocket;if(f(t))return;const r=R(),s=t.onmessage,{filter:o,outFields:n,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=u=>{let d=null;try{d=JSON.parse(u.data)}catch{}d&&typeof d=="object"||(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",u.data)),r.reject(),this.destroy()),d.spatialReference?.wkid!==l?.wkid&&(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,u.data)),r.reject(),this.destroy()),d.format!=="json"&&(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",u.data)),r.reject(),this.destroy()),o&&d.filter!==o&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),n&&d.outFields!==n&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const i of this._outstandingMessages)t.send(JSON.stringify(i));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:o,outFields:n,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)h(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),a.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&a.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};g([w()],y.prototype,"connectionStatus",null),g([w()],y.prototype,"errorString",void 0),y=g([S("esri.layers.graphics.sources.connections.WebSocketConnection")],y);const D=1e4,I={maxQueryDepth:5,maxRecordCountFactor:3};let b=class extends y{constructor(e){super({...I,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),h(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=W(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return F(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this.declaredClass).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(f(r)||f(e)&&f(t))return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=R(),l=()=>{o||(this.destroyed||this._websocket!==r||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},u=d=>{const i=JSON.parse(d.data);i.filter&&(i.error&&(a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),o=!0,n.resolve())};return r.onmessage=u,r.send(s),setTimeout(l,D),n.promise}_serializeFilter(e,t){const r={};if(f(e)&&f(t))return r;if(h(e)&&e.geometry)try{const s=M(e.geometry);if(s.type!=="extent")throw new c(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return h(e)&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),h(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return a.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=s;for(const l in o)e.attributes[l]=o[l];return n&&(e.geometry=n),e.geometry||e.centroid||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await L(()=>import("./main-69e2a69d.js").then(O=>O.oG),["./main-69e2a69d.js","./preload-helper-388ac9d5.js","./main-a75f83d6.css"],import.meta.url)).default({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,l=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,d=s?u*l:u,i=new T;if(i.outFields=k(this._config.outFields,["*"]),i.where=k(q(this._config.filter,"where"),"1=1"),i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=j.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),s&&(i.maxRecordCountFactor=l),o)return i.num=d,t.destroy(),this._queryPages(e,i);const x=await C(e,i,this._config.sourceSpatialReference);return t.destroy(),x.data}async _queryPages(e,t,r=[],s=0){t.start=h(t.num)?s*t.num:null;const{data:o}=await C(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,s+1)):(r.forEach(n=>o.features.push(n)),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const n=o.attributes[s];t.set(n,o)}this._relatedFeatures=t}};b=g([S("esri.layers.graphics.sources.connections.GeoEventConnection")],b);const J=b;let p=class extends N{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=v(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)h(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};g([w()],p.prototype,"connectionStatus",void 0),g([w()],p.prototype,"errorString",void 0),p=g([S("esri.layers.support.ClientSideConnection")],p);function A(e,t,r,s,o,n,l,u){const d={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:l,customParameters:u};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new y(d):new J(d):new p(d)}export{A as createConnection};
