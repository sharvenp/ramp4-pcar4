import{e as n,y as p,n as h,O as l,f as m,gC as f,bH as v,b as c,r as y}from"./main-603bdb2f.js";import _ from"./FeatureLayerView2D-8607fb3c.js";import{e as g}from"./util-9a7026fd.js";import"./preload-helper-388ac9d5.js";import"./Container-b4bf9dc0.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-ad7fb661.js";import"./LayerView-14601027.js";import"./schemaUtils-eb21628c.js";import"./color-10c327f7.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-fe408506.js";import"./MaterialKey-88392fa3.js";import"./visualVariablesUtils-deb4dc5a.js";import"./ExpandedCIM-73983267.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-2271bf98.js";import"./floatRGBA-7b173f92.js";import"./popupUtils-bbf68204.js";import"./RefreshableLayerView-f6f047c1.js";function u(e,t){if(c(e)&&c(t))return null;const r={};return y(t)&&(r.geometry=t.toJSON()),y(e)&&(r.where=e),r}let o=class extends _{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.addHandles([l(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),l(()=>this.layer.purgeOptions,()=>this._update()),l(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream()})],"constructor")}get connectionError(){if(this.errorString)return new m("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream()}resume(){this._isUserPaused=!1,this._proxy.resumeStream()}on(e,t){if(Array.isArray(e))return f(e.map(a=>this.on(a,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const i=super.on(e,t),s=this;return{remove(){i.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))}}}queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new m("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(r=>{const i=v.fromJSON(r);return i.features.forEach(s=>{s.layer=this.layer,s.sourceLayer=this.layer}),i})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(u(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(d=>d.toJSON()),i=g(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:u(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};n([p()],o.prototype,"errorString",void 0),n([p({readOnly:!0})],o.prototype,"connectionError",null),n([p()],o.prototype,"connectionStatus",void 0),o=n([h("esri.views.2d.layers.StreamLayerView2D")],o);const z=o;export{z as default};