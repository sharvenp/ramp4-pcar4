import{b6 as b,e as g,b3 as L,a6 as Q,i as F,fo as P,bb as nt,bc as B,be as V,bd as X,b9 as tt,K as m,N as f,O as et,P as lt,b2 as ht,bA as ct,M as dt,fk as ut,fp as H,ak as O,h as mt,fq as Z,fr as J,ci as pt,ck as I,db as ft,cj as _t}from"./main.33d7d020.js";import{c as x,f as k}from"./VertexArrayObject.b7b30936.js";import{C as d,R as $,E as N,F as w,P as K,L as yt,G as gt,D as vt}from"./enums.de935fa5.js";import{u as xt}from"./Texture.f83f8541.js";import{t as _}from"./VertexElementDescriptor.d386088d.js";import{b as wt,i as Dt}from"./WGLContainer.adae2513.js";import{I as At,g as bt}from"./Utils.57d8db19.js";import{a as at}from"./utils.7b62fe23.js";function St(a){const t=st(U(a)),e=t,s=!0,i=Math.max(t/2,5),r=Math.round(b(a.maxPathLength)/i)+1,o=10,{density:n}=a;return{smoothing:b(a.smoothing),interpolate:!0,velocityScale:a.flowRepresentation==="flow-from"?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:i,maxTurnAngle:1,collisions:s,lineCollisionWidth:e,lineSpacing:o,density:n}}function st(a){return a.kind==="constant"?a.value[0]:a.values[a.values.length-1]}function Y(a){const t=a.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function zt(a){return{kind:"constant",value:[.1,.1,.1,1]}}function U(a){if(!a.hasVisualVariables("size"))return{kind:"constant",value:[b(a.trailWidth)]};const t=a.getVisualVariablesForType("size")[0],e=[],s=[];let i;if(t.stops){for(const r of t.stops)e.push(r.value),s.push(b(r.size));i=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),s.push(b(t.minSize),b(t.maxSize)),i=2;return{kind:"ramp",stops:e,values:s,count:i}}function $t(a){if(!a.hasVisualVariables("color"))return{kind:"constant",value:Y(a.color)};const t=a.getVisualVariablesForType("color")[0],e=[],s=[];for(const i of t.stops)e.push(i.value),Array.prototype.push.apply(s,Y(i.color));return{kind:"ramp",stops:e,values:s,count:t.stops.length}}function Mt(a){if(!a.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=a.getVisualVariablesForType("opacity")[0],e=[],s=[];for(const i of t.stops)e.push(i.value),s.push(i.opacity);return{kind:"ramp",stops:e,values:s,count:t.stops.length}}function E(a,t,e,s){switch(t){case"int":a.setUniform1iv(e,s);break;case"float":a.setUniform1fv(e,s);break;case"vec2":a.setUniform2fv(e,s);break;case"vec3":a.setUniform3fv(e,s);break;case"vec4":a.setUniform4fv(e,s)}}function v(a,t,e,s){s.kind==="constant"?E(a,e,`u_${t}`,s.value):(E(a,"float",`u_${t}_stops`,s.stops),E(a,e,`u_${t}_values`,s.values),a.setUniform1i(`u_${t}_count`,s.count))}function Rt(a,t){let e=!0;return e=e&&a.collisions===t.collisions,e=e&&a.density===t.density,e=e&&a.interpolate===t.interpolate,e=e&&a.lineCollisionWidth===t.lineCollisionWidth,e=e&&a.lineSpacing===t.lineSpacing,e=e&&a.maxTurnAngle===t.maxTurnAngle,e=e&&a.minSpeedThreshold===t.minSpeedThreshold,e=e&&a.segmentLength===t.segmentLength,e=e&&a.smoothing===t.smoothing,e=e&&a.velocityScale===t.velocityScale,e=e&&a.verticesPerLine===t.verticesPerLine,e}function it(a,t){return a===t||!(!g(a)||!g(t))&&a.equals(t)}function rt(a,t){if(!Rt(a.simulationSettings,t.simulationSettings)||!it(a.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&a.loadImagery===t.loadImagery,e=e&&a.createFlowMesh===t.createFlowMesh,e=e&&a.color.kind===t.color.kind,e=e&&a.opacity.kind===t.opacity.kind,e=e&&a.size.kind===t.size.kind,e}class q{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof q)||!it(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:s,size:i}=t;L(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e);return new It(r,{color:this._params.color,opacity:this._params.opacity})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction($.ONE,$.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.bindTexture(s.texture,0),r.setUniform1i("u_texture",0),r.setUniform1f("u_Min",s.min),r.setUniform1f("u_Max",s.max),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),i.bindVAO(s.vertexArray),i.drawArrays(N.TRIANGLE_STRIP,0,4)}}const C=new Map;C.set("a_position",0),C.set("a_texcoord",1);const Tt={geometry:[new _("a_position",2,d.UNSIGNED_SHORT,0,8),new _("a_texcoord",2,d.UNSIGNED_SHORT,4,8)]},Ot={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:C};class It{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:s,height:i}=this._flowData,r=x.createVertex(e,w.STATIC_DRAW,new Uint16Array([0,0,0,1,s,0,1,1,0,i,0,0,s,i,1,0])),o=new k(e,C,Tt,{geometry:r}),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity");const l=t.painter.materialManager.getProgram(Ot,n);let u=1e6,D=-1e6;for(let h=0;h<i;h++)for(let c=0;c<s;c++)if(this._flowData.mask[h*s+c]!==0){const M=this._flowData.data[2*(h*s+c)+0],R=this._flowData.data[2*(h*s+c)+1],T=Math.sqrt(M*M+R*R);u=Math.min(u,T),D=Math.max(D,T)}const y=new Uint8Array(4*s*i);for(let h=0;h<i;h++)for(let c=0;c<s;c++)if(this._flowData.mask[h*s+c]!==0){const M=this._flowData.data[2*(h*s+c)+0],R=this._flowData.data[2*(h*s+c)+1],T=(Math.sqrt(M*M+R*R)-u)/(D-u);y[4*(h*s+c)+0]=255*T,y[4*(h*s+c)+1]=0,y[4*(h*s+c)+2]=0,y[4*(h*s+c)+3]=255}else y[4*(h*s+c)+0]=0,y[4*(h*s+c)+1]=0,y[4*(h*s+c)+2]=0,y[4*(h*s+c)+3]=0;const ot=new xt(e,{pixelFormat:K.RGBA,internalFormat:K.RGBA,samplingMode:yt.LINEAR,dataType:gt.UNSIGNED_BYTE,wrapMode:vt.CLAMP_TO_EDGE,flipped:!0,width:s,height:i},y);this.vertexArray=o,this.program=l,this.texture=ot,this.min=u,this.max=D,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.isCompiled}}class G{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof G&&rt(this._params,t._params)}async load(t,e){const{extent:s,size:i}=t;L(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,r,e);return new Ct(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction($.ONE,$.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),v(r,"size","float",this._params.size),i.bindVAO(s.vertexArray),i.drawElements(N.TRIANGLES,s.indexCount,d.UNSIGNED_INT,0)}}const S=new Map;S.set("a_xyts0",0),S.set("a_xyts1",1),S.set("a_typeIdDurationSeed",2),S.set("a_extrudeInfo",3);const Vt={geometry:[new _("a_xyts0",4,d.FLOAT,0,64),new _("a_xyts1",4,d.FLOAT,16,64),new _("a_typeIdDurationSeed",4,d.FLOAT,32,64),new _("a_extrudeInfo",4,d.FLOAT,48,64)]},Ft={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:S};class Ct{constructor(t,e,s){this._vertexData=t,this._indexData=e,this._values=s}attach(t){const{context:e}=t,s=x.createVertex(e,w.STATIC_DRAW,this._vertexData),i=x.createIndex(e,w.STATIC_DRAW,this._indexData),r=new k(e,S,Vt,{geometry:s},i),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=t.painter.materialManager.getProgram(Ft,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}}class W{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof W)||this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let s=0;s<e;s++)if(!this._styles[s].isCompatible(t._styles[s]))return!1;return!0}async load(t,e){const s=await Promise.all(this._styles.map(i=>i.load(t,e)));return new kt(s)}render(t,e,s){for(let i=0;i<this._styles.length;i++)this._styles[i].render(t,e,s.resources[i])}}class kt{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce((t,e)=>t&&e.ready,!0)}}class j{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof j&&rt(this._params,t._params)}async load(t,e){const{extent:s,size:i}=t;L(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,r,e);return new Ut(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction($.ONE,$.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),v(r,"size","float",this._params.size),i.bindVAO(s.vertexArray),i.drawElements(N.TRIANGLES,s.indexCount,d.UNSIGNED_INT,0)}}const z=new Map;z.set("a_positionAndSide",0),z.set("a_timeInfo",1),z.set("a_extrude",2),z.set("a_speed",3);const Et={geometry:[new _("a_positionAndSide",3,d.FLOAT,0,36),new _("a_timeInfo",3,d.FLOAT,12,36),new _("a_extrude",2,d.FLOAT,24,36),new _("a_speed",1,d.FLOAT,32,36)]},Pt={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:z};class Ut{constructor(t,e,s){this._vertexData=t,this._indexData=e,this._values=s}attach(t){const{context:e}=t,s=x.createVertex(e,w.STATIC_DRAW,this._vertexData),i=x.createIndex(e,w.STATIC_DRAW,this._indexData),r=new k(e,z,Et,{geometry:s},i),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=t.painter.materialManager.getProgram(Pt,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}}const Lt=4,Nt=1,qt=.5,Gt=!0,Wt=!0,jt=2.3;function Bt(a,t){const{flowSpeed:e,trailLength:s}=a,i=St(a);let r=null;const o={opacity:Mt(a),size:U(a)};let n=$t(a);if(a.background==="none")o.color=n;else{n.kind==="constant"&&(n={kind:"ramp",stops:[0,1],values:[0,0,0,1,n.value[0],n.value[1],n.value[2],n.value[3]],count:2});const D={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:n,opacity:{kind:"constant",value:[1]}};r=new q(D),o.color=zt()}const l={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:s,flowSpeed:e,featheringSize:Nt,featheringOffset:qt,introFade:Gt,fadeToZero:Wt,decayRate:jt,color:o.color,opacity:o.opacity,size:o.size},u=a.trailCap==="butt"||st(U(a))<=Lt?new j(l):new G(l);return g(r)?new W([r,u]):u}class Ht extends wt{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[Dt],target:()=>this.children,drawPhase:At.MAP});return[...super.prepareRenderPasses(t),e]}}const Zt=Q.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class Jt{constructor(t,e,s,i){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=s,this.pixelRatio=i}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},s=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:s}}attach(t){if(this.state.name!=="loaded")return void Zt.error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}}class Kt extends at{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){g(this._displayData)&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(F(e))return;const s=e.extent.xmin,i=e.extent.ymax,r=[0,0];t.toScreen(r,[s,i]);const o=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=P(t.rotation),{dvs:l}=this.transforms;nt(l,[-1,1,0]),B(l,l,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),V(l,l,[r[0],r[1],0]),X(l,l,n),B(l,l,[o*t.pixelRatio,o*t.pixelRatio,1])}_createTransforms(){return{dvs:tt()}}}const Yt=1.15,Qt=Q.getLogger("esri.views.2d.engine.flow.FlowStrategy");let A=class extends lt{constructor(a){super(a),this._flowDisplayObject=new Kt,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(a){const{flowStyle:t}=this.flowContainer;if(F(t))return void this._clear();const{extent:e,rotation:s,resolution:i,pixelRatio:r}=a.state,o=te(e,s);o.expand(Yt);const n=[Math.round((o.xmax-o.xmin)/i),Math.round((o.ymax-o.ymin)/i)],l=new Jt(t,o,n,r);if(g(this._loading)){if(this._loading.update(l))return;this._loading.detach(),this._loading=null}!F(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(l)||(l.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},u=>{ht(u)||(Qt.error("A resource failed to load.",u),this._loading=null)}),this._loading=l)}_clear(){this._flowDisplayObject.clear(),g(this._loading)&&(this._loading.detach(),this._loading=null)}};m([f()],A.prototype,"_loading",void 0),m([f()],A.prototype,"flowContainer",void 0),m([f()],A.prototype,"updating",null),A=m([et("esri.views.2d.engine.flow.FlowStrategy")],A);const Xt=A;function te(a,t){const e=new ct({x:(a.xmax+a.xmin)/2,y:(a.ymax+a.ymin)/2,spatialReference:a.spatialReference}),s=a.xmax-a.xmin,i=a.ymax-a.ymin,r=Math.abs(Math.cos(P(t))),o=Math.abs(Math.sin(P(t))),n=r*s+o*i,l=o*s+r*i,u=new dt({xmin:e.x-n/2,ymin:e.y-l/2,xmax:e.x+n/2,ymax:e.y+l/2,spatialReference:a.spatialReference});return u.centerAt(e),u}let p=class extends ut{constructor(){super(...arguments),this._loadImagery=(a,t,e,s,i)=>H(this.layer,a,t,e,s,i),this._createFlowMesh=(a,t,e,s)=>this.layer.createFlowMesh({meshType:a,flowData:e,simulationSettings:t},{signal:s}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this._strategy||this._strategy.updating}attach(){const{layer:a}=this,t=()=>{this._loadImagery=(e,s,i,r,o)=>H(a,e,s,i,r,o),this._updateVisualization()};"multidimensionalDefinition"in a?this.handles.add(O(()=>a.multidimensionalDefinition,t)):this.handles.add([O(()=>a.mosaicRule,t),O(()=>a.renderingRule,t),O(()=>a.definitionExpression,t)]),this.container=new Ht,this._strategy=new Xt({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()}update(a){a.stationary?this._strategy.update(a):this.layerView.requestUpdate()}hitTest(a){return new mt({attributes:{},geometry:a.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const{renderer:a}=this.layer;if(a.type!=="flow")return;const t=Bt(a,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};m([f()],p.prototype,"_strategy",void 0),m([f()],p.prototype,"attached",void 0),m([f()],p.prototype,"container",void 0),m([f()],p.prototype,"layer",void 0),m([f()],p.prototype,"layerView",void 0),m([f()],p.prototype,"type",void 0),m([f()],p.prototype,"updating",null),m([f()],p.prototype,"timeExtent",void 0),p=m([et("esri.views.2d.engine.flow.FlowView2D")],p);const he=p;class ce extends at{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=t}destroy(){g(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){!this._vaoInvalidated&&g(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,g(this.source)&&F(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const s=Z(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={magdir:i}}break;case"simple_scalar":{const s=J(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={scalar:i}}break;case"wind_speed":{const s=Z(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s),r=J(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,r);this.vaoData={magdir:i,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:tt()}}setTransform(t){const e=pt(this.transforms.dvs),[s,i]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,o=r*this.width,n=r*this.height,l=Math.PI*this.rotation/180;V(e,e,I(s,i)),V(e,e,I(o/2,n/2)),X(e,e,-l),V(e,e,I(-o/2,-n/2)),ft(e,e,I(o,n)),_t(this.transforms.dvs,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:s,indexData:i}=e,r=x.createVertex(t,w.STATIC_DRAW,new Float32Array(s)),o=x.createIndex(t,w.STATIC_DRAW,new Uint32Array(i)),n=bt("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:d.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:d.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:d.FLOAT,normalized:!1}]});return{vao:new k(t,n.attributes,n.bufferLayouts,{geometry:r},o),elementCount:i.length}}}export{he as d,ce as y};
