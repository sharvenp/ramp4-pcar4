import{ci as Z,O as W,aQ as D,cc as ee,r as b,a4 as te,u as N,f as re,au as se,av as B,bY as M,b as _,c2 as ie,c9 as ae,ay as oe,cB as ne,dV as le,dW as he,aD as ce,d5 as me,aB as de,aC as pe,co as ue,gj as fe,j as ye,fn as H,fi as _e,fj as ve,gt as ge,at as we,w as Re,fw as Ee,e as T,y as P,n as xe,cp as Me,gu as Te}from"./main-7ed7b27d.js";import{j as be,u as z}from"./perspectiveUtils-0a8aa13d.js";import"./MagnifierPrograms-97d6a712.js";import{r as $e}from"./Container-fa633cf8.js";import"./BufferPool-782f39c2.js";import{T as Ce}from"./color-8c8aaa05.js";import{c as Se,w as Ve}from"./WGLContainer-a34b90ff.js";import{P as Ge,G as Ae,L as qe,D as De,F as Q}from"./enums-64ab819c.js";import{E as Pe}from"./Texture-9888d55f.js";import"./ProgramTemplate-7a472c97.js";import"./MaterialKey-cd08dfc7.js";import"./utils-8584aef4.js";import{E as k,f as je}from"./VertexArrayObject-955d008a.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./floatRGBA-8eca6b10.js";import"./webgl-debug-b1f7a2c5.js";import"./GraphicsView2D-ffd30f0d.js";import"./AttributeStoreView-d30d39e0.js";import"./earcut-61f7b102.js";import{r as Ie}from"./vec3f32-ad1dc57f.js";import{e as Oe}from"./mat3f64-221ce671.js";import{f as Ue,u as Le}from"./LayerView-09eba647.js";import"./preload-helper-388ac9d5.js";import"./normalizeUtilsSync-b63642ff.js";import"./_commonjsHelpers-2f3e7994.js";import"./ExpandedCIM-865b9a13.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-2bf211b3.js";import"./rasterizingUtils-9fdb5b1e.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-9af4829a.js";import"./Matcher-38bb4277.js";import"./visualVariablesUtils-09922769.js";import"./visualVariablesUtils-faf622af.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c84d6c93.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./CircularArray-fe2adefd.js";import"./ComputedAttributeStorage-54e2ceab.js";import"./arcadeTimeUtils-2c46f8ed.js";import"./executionError-c1d13a98.js";import"./centroid-864c29fa.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-b7051eb1.js";import"./projectionSupport-045b827a.js";import"./json-48e3ea08.js";import"./schemaUtils-76cb116a.js";import"./util-c3f0ae69.js";import"./TiledDisplayObject-2bbff5c1.js";const v=Oe();class We extends $e{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Z(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(W(()=>this.elementView.element.opacity,t=>this.opacity=t,D),W(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&b(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{N.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=se(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(b(r)){const o=r instanceof HTMLImageElement,i=r instanceof HTMLVideoElement,a=o?r.naturalWidth:i?r.videoWidth:r.width,n=o?r.naturalHeight:i?r.videoHeight:r.height;this._updatePerspectiveTransform(a,n),this.texture?i&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===B.WEBGL2||M(a)&&M(n))&&this.texture.generateMipmap()):(this.texture=new Pe(t,{pixelFormat:Ge.RGBA,dataType:Ae.UNSIGNED_BYTE,samplingMode:qe.LINEAR,wrapMode:De.CLAMP_TO_EDGE,width:a,height:n,preMultiplyAlpha:!0},r),(t.type===B.WEBGL2||M(a)&&M(n))&&this.texture.generateMipmap(),i&&!r.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(_(r))return;const[o,i,a,n]=r.rings[0],f=this._vertices,{x:l,y:h}=e,d=t!==0;d?f.set([i[0]-l,i[1]-h,o[0]-l,o[1]-h,a[0]-l,a[1]-h,n[0]-l,n[1]-h,n[0]-l,n[1]-h,i[0]+t-l,i[1]-h,i[0]+t-l,i[1]-h,o[0]+t-l,o[1]-h,a[0]+t-l,a[1]-h,n[0]+t-l,n[1]-h]):f.set([i[0]-l,i[1]-h,o[0]-l,o[1]-h,a[0]-l,a[1]-h,n[0]-l,n[1]-h]),this.isWrapAround=d}getVAO(e,t,r){if(_(this.elementView.coords))return null;const o=this._vertices;if(this._vao)this._geometryVbo.setData(o);else{this._geometryVbo=k.createVertex(e,Q.DYNAMIC_DRAW,o);const i=k.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new je(e,r,t,{geometry:this._geometryVbo,tex:i})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;be(v,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),ie(this.perspectiveTransform,v[6]/v[8]*e,v[7]/v[8]*t)}}class Be extends Se{constructor(){super(...arguments),this._localOrigin=ae(0,0),this._viewStateId=-1,this._dvsMat3=oe(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ve.overlay],target:()=>this.children,drawPhase:Ce.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:o,pixelRatio:i,resolution:a,rotation:n,viewpoint:f,displayMat3:l}=t;if(this._viewStateId===r)return;const h=Math.PI/180*n,d=i*o[0],u=i*o[1],{x:$,y:w}=f.targetGeometry,C=ne($,t.spatialReference);this._localOrigin.x=C,this._localOrigin.y=w;const S=a*d,R=a*u,c=le(this._dvsMat3);he(c,c,l),ce(c,c,me(d/2,u/2)),de(c,c,Ie(d/S,-u/R,1)),pe(c,c,-h),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:o,spatialReference:i,worldScreenWidth:a,size:n,viewpoint:f}=r,l=this._localOrigin;let h=0;const d=ue(i);if(d&&i.isWrappable){const u=n[0],$=n[1],w=180/Math.PI*o,C=Math.abs(Math.cos(w)),S=Math.abs(Math.sin(w)),R=Math.round(u*C+$*S),[c,V]=d.valid,p=fe(i),{x:j,y:Y}=f.targetGeometry,J=[j,Y],G=[0,0];r.toScreen(G,J);const E=[0,0];let A;A=R>a?.5*a:.5*R;const I=Math.floor((j+.5*p)/p),K=c+I*p,X=V+I*p,q=[G[0]+A,0];r.toMap(E,q),E[0]>X&&(h=p),q[0]=G[0]-A,r.toMap(E,q),E[0]<K&&(h=-p);for(const x of t){const O=x.elementView.bounds;if(_(O))continue;const[U,,L]=O;U<c&&L>c?x.updateDrawCoords(l,p):L>V&&U<V?x.updateDrawCoords(l,-p):x.updateDrawCoords(l,h)}}else for(const u of t)u.updateDrawCoords(l,h)}}let y=class extends Ue(Le){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([H(()=>this.layer.effectiveSource,"refresh",()=>{for(const s of this._tileStrategy.tiles)this._updateTile(s);this.requestUpdate()}),H(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new Be,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new ve({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){this._tileStrategy.update(s),this._debugGraphicsView?.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),o=[r.x,r.y];for(const{projectedElement:{normalizedCoords:i,element:a}}of this._elementReferences.values())b(i)&&ge(i.rings,o)&&t.push({type:"media",element:a,layer:this.layer,mapPoint:s});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(s=>this._updateTile(s))}_acquireTile(s){const e=new He(s.clone());return this._updateTile(e),e}_updateTile(s){this.updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{we(e)||N.getLogger(this.declaredClass).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(m,s,!0);const r=new Re({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){const t=this.layer.source;if(!_(t))for(const r of e)this._referenceElement(s,r)}_referenceElement(s,e){Ee(this._elementReferences,e.uid,()=>{const t=new z({element:e,spatialReference:this.view.spatialReference}),r=new We(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),this._debugGraphicsView?.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){let e=this._elementReferences.get(s.uid);if(e){const r=e.projectedElement.normalizedCoords;if(_(r))return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void this._debugGraphicsView?.graphics.remove(e.debugGraphic);const o=[],i=[];for(const a of this._tileStrategy.tiles){const n=F(this.view.featuresTilingScheme,a,r);e.tiles.has(a)?n||i.push(a):n&&o.push(a)}for(const a of o)this._referenceElement(a,s);for(const a of i)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void(e?.debugGraphic&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new z({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(b(t))for(const r of this._tileStrategy.tiles)F(this.view.featuresTilingScheme,r,t)&&this._referenceElement(r,s)}};T([P()],y.prototype,"_fetchQueue",void 0),T([P()],y.prototype,"layer",void 0),T([P({readOnly:!0})],y.prototype,"elements",void 0),y=T([xe("esri.views.2d.layers.MediaLayerView2D")],y);const m=Me(),g={xmin:0,ymin:0,xmax:0,ymax:0};function F(s,e,t){return s.getTileBounds(m,e.key,!0),g.xmin=m[0],g.ymin=m[1],g.xmax=m[2],g.ymax=m[3],Te(g,t)}class He{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const o of e)r.has(o)?r.delete(o):t.push(o);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const kt=y;export{kt as default};
