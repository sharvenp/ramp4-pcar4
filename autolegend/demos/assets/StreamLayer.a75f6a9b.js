import{K as e,N as i,O as v,an as w,a6 as S,kU as I,kh as k,kV as $,ki as x,kj as j,dv as T,dw as R,dx as O,dy as F,kT as P,dD as N,k as g,s as p,e as D,cb as _,kW as u,l_ as E,m4 as L,fg as U,km as C,v as J,U as A,kX as G,t as V,kn as q,kY as M,M as W,k5 as c,kZ as z,k_ as B,k$ as X,kM as Y,jC as m,m5 as Z,m6 as K,kp as Q,fe as H,l1 as ee,ko as te,dC as h,l2 as ie,dB as re,m7 as se,m8 as oe,kq as ae}from"./main.4cbfea05.js";import"./preload-helper.387dac8f.js";var y;let a=y=class extends w{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],a.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=y=e([v("esri.layers.support.PurgeOptions")],a);const b=a,ne=S.getLogger("esri.layers.StreamLayer"),f=ae();let t=class extends I(k($(x(j(T(R(O(F(P(N)))))))))){constructor(...r){super(...r),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=g.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(r,s){return typeof r=="string"?{url:r,...s}:r}load(r){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=D(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},r).catch(_).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){u(r,this.fieldsIndex),this._set("renderer",r)}readRenderer(r,s,o){const l=(s=s.layerDefinition||s).drawingInfo&&s.drawingInfo.renderer||void 0;if(l){const n=E(l,s,o)||void 0;return n||ne.error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),n}if(s.defaultSymbol)return s.types&&s.types.length?new L({defaultSymbol:d(s.defaultSymbol,s,o),field:s.typeIdField,uniqueValueInfos:s.types.map(n=>({id:n.id,symbol:d(n.symbol,n,o)}))}):new U({symbol:d(s.defaultSymbol,s,o)})}createPopupTemplate(r){return C(this,r)}createQuery(){const r=new J;return r.returnGeometry=!0,r.outFields=["*"],r.where=this.definitionExpression||"1=1",r}getFieldDomain(r,s){if(!this.fields)return null;let o=null;return this.fields.some(l=>(l.name===r&&(o=l.domain),!!o)),o}getField(r){return this.fieldsIndex.get(r)}serviceSupportsSpatialReference(r){return!0}async _fetchService(r){if(this.webSocketUrl){if(!this.timeInfo?.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:s}=await A(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:r});this.sourceJSON=s}return this.sourceJSON={...this.sourceJSON??{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),G(this.timeInfo,this.fieldsIndex),V(this,{origin:"service"})}};e([i({type:String})],t.prototype,"copyright",void 0),e([i({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([i({type:String})],t.prototype,"displayField",void 0),e([i({type:q})],t.prototype,"elevationInfo",void 0),e([i(M)],t.prototype,"featureReduction",void 0),e([i(f.fields)],t.prototype,"fields",void 0),e([i(f.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([i({type:W})],t.prototype,"geometryDefinition",void 0),e([i({type:c.apiValues,json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),e([i(z)],t.prototype,"labelsVisible",void 0),e([i({type:[B],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:X},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([i(Y)],t.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i({type:m})],t.prototype,"maxReconnectionAttempts",void 0),e([i({type:m})],t.prototype,"maxReconnectionInterval",void 0),e([i(Z)],t.prototype,"maxScale",void 0),e([i(K)],t.prototype,"minScale",void 0),e([i({type:String})],t.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([i(Q)],t.prototype,"popupEnabled",void 0),e([i({type:H,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([i({type:b})],t.prototype,"purgeOptions",void 0),e([i({types:ee,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:te,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([h("service","renderer",["drawingInfo.renderer","defaultSymbol"]),h("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([i(ie)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i()],t.prototype,"sourceJSON",void 0),e([i({type:g,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],t.prototype,"type",void 0),e([i(re)],t.prototype,"url",void 0),e([i({type:Number})],t.prototype,"updateInterval",void 0),e([i({type:String})],t.prototype,"webSocketUrl",void 0),t=e([v("esri.layers.StreamLayer")],t);const d=se({types:oe}),de=t;export{de as default};
