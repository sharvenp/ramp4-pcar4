import{e as n,y as p,k as h,bp as l,c as m,bX as f,bb as v,t as c,r as y}from"./main-69e2a69d.js";import _ from"./FeatureLayerView2D-eded9941.js";import{e as S}from"./util-df5ca91e.js";import"./preload-helper-388ac9d5.js";import"./Container-ee830452.js";import"./definitions-cc1dbf1d.js";import"./enums-64ab819c.js";import"./Texture-f9376f18.js";import"./LayerView-3c3a6846.js";import"./schemaUtils-04d3725d.js";import"./color-c2cf25df.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-3ff9d654.js";import"./MaterialKey-394f2e49.js";import"./visualVariablesUtils-1beef9db.js";import"./ExpandedCIM-3ab597a1.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-580a4d40.js";import"./floatRGBA-9b302caa.js";import"./popupUtils-ede43d25.js";import"./RefreshableLayerView-11eae078.js";function u(e,t){if(c(e)&&c(t))return null;const r={};return y(t)&&(r.geometry=t.toJSON()),y(e)&&(r.where=e),r}let o=class extends _{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.addHandles([l(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),l(()=>this.layer.purgeOptions,()=>this._update()),l(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream()})],"constructor")}get connectionError(){if(this.errorString)return new m("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream()}resume(){this._isUserPaused=!1,this._proxy.resumeStream()}on(e,t){if(Array.isArray(e))return f(e.map(a=>this.on(a,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const i=super.on(e,t),s=this;return{remove(){i.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))}}}queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new m("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(r=>{const i=v.fromJSON(r);return i.features.forEach(s=>{s.layer=this.layer,s.sourceLayer=this.layer}),i})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(u(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(d=>d.toJSON()),i=S(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:u(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};n([p()],o.prototype,"errorString",void 0),n([p({readOnly:!0})],o.prototype,"connectionError",null),n([p()],o.prototype,"connectionStatus",void 0),o=n([h("esri.views.2d.layers.StreamLayerView2D")],o);const z=o;export{z as default};
