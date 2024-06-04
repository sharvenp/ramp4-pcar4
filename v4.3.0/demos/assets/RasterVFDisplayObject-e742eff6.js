import{eX as $,r as _,cr as W,eN as C,t as T,p as et,iA as q,lI as _t,eT as H,eR as V,eU as at,e as f,y as g,k as st,dF as it,bq as yt,bh as gt,w as vt,lJ as Z,bp as U,j as xt,lK as J,lL as K,eQ as wt,eS as O,f6 as St,ax as At}from"./main-83b7c6ef.js";import{E as D,f as L}from"./VertexArrayObject-2b018746.js";import{C as p,R as v,E as I,F as R,P as Q,L as bt,G as Dt,D as Rt,I as rt,O as N}from"./enums-64ab819c.js";import{E as Mt}from"./Texture-a2b3dbdd.js";import{t as x}from"./VertexElementDescriptor-2925c6af.js";import{t as ot,a as $t}from"./WGLContainer-3bef0b29.js";import{T as Et,e as zt}from"./color-0cddff94.js";import{r as nt}from"./Container-6f89b41c.js";function Tt(r){const t=lt(B(r)),e=t,a=!0,s=Math.max(t/2,5),i=Math.round($(r.maxPathLength)/s)+1,n=10,{density:o}=r;return{smoothing:$(r.smoothing),interpolate:!0,velocityScale:r.flowRepresentation==="flow-from"?1:-1,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:s,maxTurnAngle:1,collisions:a,lineCollisionWidth:e,lineSpacing:n,density:o}}function lt(r){return r.kind==="constant"?r.value[0]:r.values[r.values.length-1]}function X(r){const t=r.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function Pt(r){return{kind:"constant",value:[.1,.1,.1,1]}}function B(r){if(!r.hasVisualVariables("size"))return{kind:"constant",value:[$(r.trailWidth)]};const t=r.getVisualVariablesForType("size")[0],e=[],a=[];let s;if(t.stops){for(const i of t.stops)e.push(i.value),a.push($(i.size));s=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),a.push($(t.minSize),$(t.maxSize)),s=2;return{kind:"ramp",stops:e,values:a,count:s}}function It(r){if(!r.hasVisualVariables("color"))return{kind:"constant",value:X(r.color)};const t=r.getVisualVariablesForType("color")[0],e=[],a=[];for(const s of t.stops)e.push(s.value),Array.prototype.push.apply(a,X(s.color));return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function Ut(r){if(!r.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=r.getVisualVariablesForType("opacity")[0],e=[],a=[];for(const s of t.stops)e.push(s.value),a.push(s.opacity);return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function G(r,t,e,a){switch(t){case"int":r.setUniform1iv(e,a);break;case"float":r.setUniform1fv(e,a);break;case"vec2":r.setUniform2fv(e,a);break;case"vec3":r.setUniform3fv(e,a);break;case"vec4":r.setUniform4fv(e,a)}}function b(r,t,e,a){a.kind==="constant"?G(r,e,`u_${t}`,a.value):(G(r,"float",`u_${t}_stops`,a.stops),G(r,e,`u_${t}_values`,a.values),r.setUniform1i(`u_${t}_count`,a.count))}function Ot(r,t){let e=!0;return e=e&&r.collisions===t.collisions,e=e&&r.density===t.density,e=e&&r.interpolate===t.interpolate,e=e&&r.lineCollisionWidth===t.lineCollisionWidth,e=e&&r.lineSpacing===t.lineSpacing,e=e&&r.maxTurnAngle===t.maxTurnAngle,e=e&&r.minSpeedThreshold===t.minSpeedThreshold,e=e&&r.segmentLength===t.segmentLength,e=e&&r.smoothing===t.smoothing,e=e&&r.velocityScale===t.velocityScale,e=e&&r.verticesPerLine===t.verticesPerLine,e}function ct(r,t){return r===t||!(!_(r)||!_(t))&&r.equals(t)}function dt(r,t){if(!Ot(r.simulationSettings,t.simulationSettings)||!ct(r.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&r.loadImagery===t.loadImagery,e=e&&r.createFlowMesh===t.createFlowMesh,e=e&&r.color.kind===t.color.kind,e=e&&r.opacity.kind===t.opacity.kind,e=e&&r.size.kind===t.size.kind,e}let Ft=class ht{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof ht)||!ct(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:a,size:s}=t;W(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e);return new kt(i,{color:this._params.color,opacity:this._params.opacity})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),s.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),b(i,"color","vec4",this._params.color),b(i,"opacity","float",this._params.opacity),s.bindVAO(a.vertexArray),s.drawArrays(I.TRIANGLE_STRIP,0,4)}};const k=new Map;k.set("a_position",0),k.set("a_texcoord",1);const Vt={geometry:[new x("a_position",2,p.UNSIGNED_SHORT,0,8),new x("a_texcoord",2,p.UNSIGNED_SHORT,4,8)]},Ct={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:k};let kt=class{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:a,height:s}=this._flowData,i=D.createVertex(e,R.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,s,0,0,a,s,1,0])),n=new L(e,k,Vt,{geometry:i}),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity");const c=t.painter.materialManager.getProgram(Ct,o);let d=1e6,m=-1e6;for(let h=0;h<s;h++)for(let u=0;u<a;u++)if(this._flowData.mask[h*a+u]!==0){const w=this._flowData.data[2*(h*a+u)+0],S=this._flowData.data[2*(h*a+u)+1],A=Math.sqrt(w*w+S*S);d=Math.min(d,A),m=Math.max(m,A)}const l=new Uint8Array(4*a*s);for(let h=0;h<s;h++)for(let u=0;u<a;u++)if(this._flowData.mask[h*a+u]!==0){const w=this._flowData.data[2*(h*a+u)+0],S=this._flowData.data[2*(h*a+u)+1],A=(Math.sqrt(w*w+S*S)-d)/(m-d);l[4*(h*a+u)+0]=255*A,l[4*(h*a+u)+1]=0,l[4*(h*a+u)+2]=0,l[4*(h*a+u)+3]=255}else l[4*(h*a+u)+0]=0,l[4*(h*a+u)+1]=0,l[4*(h*a+u)+2]=0,l[4*(h*a+u)+3]=0;const P=new Mt(e,{pixelFormat:Q.RGBA,internalFormat:Q.RGBA,samplingMode:bt.LINEAR,dataType:Dt.UNSIGNED_BYTE,wrapMode:Rt.CLAMP_TO_EDGE,flipped:!0,width:a,height:s},l);this.vertexArray=n,this.program=c,this.texture=P,this.min=d,this.max=m,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}},Lt=class ut{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof ut&&dt(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;W(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:n,indexData:o}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,e);return new qt(n,o,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),b(i,"color","vec4",this._params.color),b(i,"opacity","float",this._params.opacity),b(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(I.TRIANGLES,a.indexCount,p.UNSIGNED_INT,0)}};const E=new Map;E.set("a_xyts0",0),E.set("a_xyts1",1),E.set("a_typeIdDurationSeed",2),E.set("a_extrudeInfo",3);const Nt={geometry:[new x("a_xyts0",4,p.FLOAT,0,64),new x("a_xyts1",4,p.FLOAT,16,64),new x("a_typeIdDurationSeed",4,p.FLOAT,32,64),new x("a_extrudeInfo",4,p.FLOAT,48,64)]},Gt={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:E};let qt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=D.createVertex(e,R.STATIC_DRAW,this._vertexData),s=D.createIndex(e,R.STATIC_DRAW,this._indexData),i=new L(e,E,Nt,{geometry:a},s),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity"),this._values.size.kind==="ramp"&&n.push("vvSize");const o=t.painter.materialManager.getProgram(Gt,n);this.vertexArray=i,this.program=o,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}},Bt=class mt{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof mt)||this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let a=0;a<e;a++)if(!this._styles[a].isCompatible(t._styles[a]))return!1;return!0}async load(t,e){const a=await Promise.all(this._styles.map(s=>s.load(t,e)));return new Wt(a)}render(t,e,a){for(let s=0;s<this._styles.length;s++)this._styles[s].render(t,e,a.resources[s])}};class Wt{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce((t,e)=>t&&e.ready,!0)}}class j{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof j&&dt(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;W(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:n,indexData:o}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,e);return new Zt(n,o,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),b(i,"color","vec4",this._params.color),b(i,"opacity","float",this._params.opacity),b(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(I.TRIANGLES,a.indexCount,p.UNSIGNED_INT,0)}}const z=new Map;z.set("a_positionAndSide",0),z.set("a_timeInfo",1),z.set("a_extrude",2),z.set("a_speed",3);const jt={geometry:[new x("a_positionAndSide",3,p.FLOAT,0,36),new x("a_timeInfo",3,p.FLOAT,12,36),new x("a_extrude",2,p.FLOAT,24,36),new x("a_speed",1,p.FLOAT,32,36)]},Ht={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:z};let Zt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=D.createVertex(e,R.STATIC_DRAW,this._vertexData),s=D.createIndex(e,R.STATIC_DRAW,this._indexData),i=new L(e,z,jt,{geometry:a},s),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity"),this._values.size.kind==="ramp"&&n.push("vvSize");const o=t.painter.materialManager.getProgram(Ht,n);this.vertexArray=i,this.program=o,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}};const Jt=4,Kt=1,Qt=.5,Xt=!0,Yt=!0,te=2.3;function ee(r,t){const{flowSpeed:e,trailLength:a}=r,s=Tt(r);let i=null;const n={opacity:Ut(r),size:B(r)};let o=It(r);if(r.background==="none")n.color=o;else{o.kind==="constant"&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});const m={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};i=new Ft(m),n.color=Pt()}const c={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:s,timeExtent:t.timeExtent,trailLength:a,flowSpeed:e,featheringSize:Kt,featheringOffset:Qt,introFade:Xt,fadeToZero:Yt,decayRate:te,color:n.color,opacity:n.opacity,size:n.size},d=r.trailCap==="butt"||lt(B(r))<=Jt?new j(c):new Lt(c);return _(i)?new Bt([i,d]):d}class ae extends ot{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:C(),displayViewMat3:C()}}dispose(){}prepareState(t){const{context:e}=t;e.setColorMask(!0,!0,!0,!0),e.setStencilFunction(rt.EQUAL,0,255)}draw(t,e){const{requestRender:a,allowDelayedRender:s}=t,{displayData:i}=e;if(T(i)||(i.state.name==="loaded"&&i.attach(t),i.state.name!=="attached"))return;const n=i.state.resources;s&&!n.ready&&_(a)?a():(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=e.transforms.dvs,this._visualState.displayViewMat3=t.state.displayViewMat3,i.flowStyle.render(t,this._visualState,n),i.flowStyle.animated&&_(a)&&a())}}class se extends $t{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[ae],target:()=>this.children,drawPhase:Et.MAP});return[...super.prepareRenderPasses(t),e]}}class ie{constructor(t,e,a,s){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=a,this.pixelRatio=s}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:a}}attach(t){if(this.state.name!=="loaded")return void et.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}}let re=class extends nt{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){_(this._displayData)&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(T(e))return;const a=e.extent.xmin,s=e.extent.ymax,i=[0,0];t.toScreen(i,[a,s]);const n=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,o=q(t.rotation),{dvs:c}=this.transforms;_t(c,[-1,1,0]),H(c,c,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),V(c,c,[i[0],i[1],0]),at(c,c,o),H(c,c,[n*t.pixelRatio,n*t.pixelRatio,1])}_createTransforms(){return{dvs:C()}}};const oe=1.15;let M=class extends it{constructor(t){super(t),this._flowDisplayObject=new re,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(t){const{flowStyle:e}=this.flowContainer;if(T(e))return void this._clear();const{extent:a,rotation:s,resolution:i,pixelRatio:n}=t.state,o=le(a,s);o.expand(oe);const c=[Math.round((o.xmax-o.xmin)/i),Math.round((o.ymax-o.ymin)/i)],d=new ie(e,o,c,n);if(_(this._loading)){if(this._loading.update(d))return;this._loading.detach(),this._loading=null}!T(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},m=>{yt(m)||(et.getLogger(this.declaredClass).error("A resource failed to load.",m),this._loading=null)}),this._loading=d)}_clear(){this._flowDisplayObject.clear(),_(this._loading)&&(this._loading.detach(),this._loading=null)}};f([g()],M.prototype,"_loading",void 0),f([g()],M.prototype,"flowContainer",void 0),f([g()],M.prototype,"updating",null),M=f([st("esri.views.2d.engine.flow.FlowStrategy")],M);const ne=M;function le(r,t){const e=new gt({x:(r.xmax+r.xmin)/2,y:(r.ymax+r.ymin)/2,spatialReference:r.spatialReference}),a=r.xmax-r.xmin,s=r.ymax-r.ymin,i=Math.abs(Math.cos(q(t))),n=Math.abs(Math.sin(q(t))),o=i*a+n*s,c=n*a+i*s,d=new vt({xmin:e.x-o/2,ymin:e.y-c/2,xmax:e.x+o/2,ymax:e.y+c/2,spatialReference:r.spatialReference});return d.centerAt(e),d}let y=class extends it{constructor(){super(...arguments),this._loadImagery=(t,e,a,s,i)=>Z(this.layer,t,e,a,s,i),this._createFlowMesh=(t,e,a,s)=>this.layer.createFlowMesh({meshType:t,flowData:a,simulationSettings:e},{signal:s}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:t}=this,e=()=>{this._loadImagery=(a,s,i,n,o)=>Z(t,a,s,i,n,o),this._updateVisualization()};"multidimensionalDefinition"in t?this.addHandles(U(()=>t.multidimensionalDefinition,e)):this.addHandles([U(()=>t.mosaicRule,e),U(()=>t.renderingRule,e),U(()=>t.definitionExpression,e)]),this.container=new se,this._strategy=new ne({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container?.removeAllChildren(),this.container=null,this.removeHandles()}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate()}hitTest(t){return new xt({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const t=this.layer.renderer;if(t==null||t.type!=="flow")return;const e=ee(t,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=e,this.layerView.requestUpdate()}};f([g()],y.prototype,"_strategy",void 0),f([g()],y.prototype,"attached",void 0),f([g()],y.prototype,"container",void 0),f([g()],y.prototype,"layer",void 0),f([g()],y.prototype,"layerView",void 0),f([g()],y.prototype,"type",void 0),f([g()],y.prototype,"updating",null),f([g()],y.prototype,"timeExtent",void 0),y=f([st("esri.views.2d.engine.flow.FlowView2D")],y);const Ae=y,F=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),Y={beaufort_ft:F,beaufort_m:F,beaufort_km:F,beaufort_mi:F,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),single_arrow:new Float32Array([0,92/255,230/255,1]),wind_speed:new Float32Array([0,0,0,1])},tt=[0,20];class be extends ot{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:t}){t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp(N.KEEP,N.KEEP,N.REPLACE)}draw(t,e){if(T(e.source)||e.source.validPixelCount===0)return;const{context:a,timeline:s}=t;if(s.begin(this.name),a.setStencilFunction(rt.EQUAL,e.stencilRef,255),e.updateVectorFieldVAO(t),t.renderPass==="scalar"){const i=e.vaoData.scalar;i&&this._drawScalars(t,e,i.vao,i.elementCount)}else{const i=e.vaoData.magdir;i&&this._drawTriangles(t,e,i.vao,i.elementCount)}s.end(this.name)}_drawTriangles(t,e,a,s){const{context:i,painter:n,requestRender:o,allowDelayedRender:c}=t,{symbolizerParameters:d}=e,m=d.dataRange?["dataRange"]:[];d.rotationType==="geographic"&&m.push("rotationGeographic");const l=n.materialManager.getProgram(this._desc.magdir,m);if(c&&_(o)&&!l.compiled)return void o();i.useProgram(l);const{coordScale:P,opacity:h,transforms:u}=e;l.setUniform2fv("u_coordScale",P),l.setUniform1f("u_opacity",h),l.setUniformMatrix3fv("u_dvsMat3",u.dvs);const{style:w,dataRange:S,rotation:A,symbolPercentRange:pt}=d;l.setUniform4fv("u_colors",Y[w]||Y.single_arrow),l.setUniform2fv("u_dataRange",S||tt),l.setUniform1f("u_rotation",A),l.setUniform2fv("u_symbolPercentRange",pt);const ft=this._getSymbolSize(t,e);l.setUniform2fv("u_symbolSize",ft),i.bindVAO(a),i.drawElements(I.TRIANGLES,s,p.UNSIGNED_INT,0)}_drawScalars(t,e,a,s){const{context:i,painter:n,requestRender:o,allowDelayedRender:c}=t,{symbolizerParameters:d}=e,m=[];d.style==="wind_speed"?m.push("innerCircle"):d.dataRange&&m.push("dataRange"),d.rotationType==="geographic"&&m.push("rotationGeographic");const l=n.materialManager.getProgram(this._desc.scalar,m);if(c&&_(o)&&!l.compiled)return void o();i.useProgram(l);const{coordScale:P,opacity:h,transforms:u}=e;l.setUniform2fv("u_coordScale",P),l.setUniform1f("u_opacity",h),l.setUniformMatrix3fv("u_dvsMat3",u.dvs);const{dataRange:w,symbolPercentRange:S}=d;l.setUniform2fv("u_dataRange",w||tt),l.setUniform2fv("u_symbolPercentRange",S);const A=this._getSymbolSize(t,e);l.setUniform2fv("u_symbolSize",A),i.bindVAO(a),i.drawElements(I.TRIANGLES,s,p.UNSIGNED_INT,0)}_getSymbolSize(t,e){const a=e.key?2**(t.displayLevel-e.key.level):e.resolution/t.state.resolution,{symbolTileSize:s}=e.symbolizerParameters;return[s/(Math.round((e.width-e.offset[0])/s)*s)/a,s/(Math.round((e.height-e.offset[1])/s)*s)/a]}}class De extends nt{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t}destroy(){_(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){!this._vaoInvalidated&&_(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,_(this.source)&&T(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const a=J(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,a);this.vaoData={magdir:s}}break;case"simple_scalar":{const a=K(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,a);this.vaoData={scalar:s}}break;case"wind_speed":{const a=J(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,a),i=K(this.source,this.symbolizerParameters),n=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:s,scalar:n}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:C()}}setTransform(t){const e=wt(this.transforms.dvs),[a,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),i=this.resolution/this.pixelRatio/t.resolution,n=i*this.width,o=i*this.height,c=Math.PI*this.rotation/180;V(e,e,O(a,s)),V(e,e,O(n/2,o/2)),at(e,e,-c),V(e,e,O(-n/2,-o/2)),St(e,e,O(n,o)),At(this.transforms.dvs,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:a,indexData:s}=e,i=D.createVertex(t,R.STATIC_DRAW,new Float32Array(a)),n=D.createIndex(t,R.STATIC_DRAW,new Uint32Array(s)),o=zt("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:p.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:p.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:p.FLOAT,normalized:!1}]});return{vao:new L(t,o.attributes,o.bufferLayouts,{geometry:i},n),elementCount:s.length}}}export{Ae as h,be as m,De as y};
