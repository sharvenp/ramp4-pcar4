import{gy as Z,bp as W,bu as D,gz as ee,r as T,gA as te,p as F,c as re,eO as se,bL as z,eM as x,t as _,fi as ie,gB as ae,eN as oe,eP as ne,eQ as le,ax as he,eR as ce,eS as me,eT as de,eU as pe,ab as ue,gC as fe,bv as ye,br as H,bn as _e,bo as ge,gD as ve,bq as we,w as Re,ep as Ee,e as M,y as P,k as be,aa as xe,gE as Me}from"./main-66d02e41.js";import{j as Te,u as B}from"./perspectiveUtils-49c6a156.js";import"./MagnifierPrograms-b882c2f0.js";import{r as $e}from"./Container-fc467aa9.js";import"./BufferPool-fb93d04b.js";import{T as Ce}from"./color-1f9fb8e2.js";import{a as Se,w as Ve}from"./WGLContainer-cc3caf99.js";import{P as Ae,G as Ge,L as qe,D as De,F as Q}from"./enums-64ab819c.js";import{E as Pe}from"./Texture-5918f818.js";import"./ProgramTemplate-490b044a.js";import"./MaterialKey-3d7461d6.js";import"./utils-d393dd32.js";import{E as k,f as Ue}from"./VertexArrayObject-5231ef1e.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./floatRGBA-26a6add0.js";import"./webgl-debug-b1f7a2c5.js";import"./GraphicsView2D-9a7ff0bc.js";import"./AttributeStoreView-1ab4c265.js";import"./earcut-61f7b102.js";import{r as Ie}from"./vec3f32-ad1dc57f.js";import{e as Le}from"./mat3f64-221ce671.js";import{f as Oe,u as je}from"./LayerView-e6878383.js";import"./preload-helper-388ac9d5.js";import"./normalizeUtilsSync-f563d878.js";import"./_commonjsHelpers-2f3e7994.js";import"./ExpandedCIM-5df49e4b.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./definitions-cc1dbf1d.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-9cd4d846.js";import"./rasterizingUtils-cc5b9f57.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-0897c93a.js";import"./Matcher-a7fc39dc.js";import"./visualVariablesUtils-c52018cb.js";import"./visualVariablesUtils-0dac9b59.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-799c4b7e.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./CircularArray-eaaec9cb.js";import"./ComputedAttributeStorage-389f076e.js";import"./arcadeTimeUtils-6d0a2f77.js";import"./executionError-c1d13a98.js";import"./centroid-30c3dc69.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-b7051eb1.js";import"./projectionSupport-2036e752.js";import"./json-48e3ea08.js";import"./schemaUtils-0d91ebea.js";import"./util-3f0851ea.js";import"./TiledDisplayObject-bcf13133.js";const g=Le();class We extends $e{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Z(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(W(()=>this.elementView.element.opacity,t=>this.opacity=t,D),W(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&T(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{F.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=se(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(T(r)){const o=r instanceof HTMLImageElement,i=r instanceof HTMLVideoElement,a=o?r.naturalWidth:i?r.videoWidth:r.width,n=o?r.naturalHeight:i?r.videoHeight:r.height;this._updatePerspectiveTransform(a,n),this.texture?i&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===z.WEBGL2||x(a)&&x(n))&&this.texture.generateMipmap()):(this.texture=new Pe(t,{pixelFormat:Ae.RGBA,dataType:Ge.UNSIGNED_BYTE,samplingMode:qe.LINEAR,wrapMode:De.CLAMP_TO_EDGE,width:a,height:n,preMultiplyAlpha:!0},r),(t.type===z.WEBGL2||x(a)&&x(n))&&this.texture.generateMipmap(),i&&!r.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(_(r))return;const[o,i,a,n]=r.rings[0],f=this._vertices,{x:l,y:h}=e,d=t!==0;d?f.set([i[0]-l,i[1]-h,o[0]-l,o[1]-h,a[0]-l,a[1]-h,n[0]-l,n[1]-h,n[0]-l,n[1]-h,i[0]+t-l,i[1]-h,i[0]+t-l,i[1]-h,o[0]+t-l,o[1]-h,a[0]+t-l,a[1]-h,n[0]+t-l,n[1]-h]):f.set([i[0]-l,i[1]-h,o[0]-l,o[1]-h,a[0]-l,a[1]-h,n[0]-l,n[1]-h]),this.isWrapAround=d}getVAO(e,t,r){if(_(this.elementView.coords))return null;const o=this._vertices;if(this._vao)this._geometryVbo.setData(o);else{this._geometryVbo=k.createVertex(e,Q.DYNAMIC_DRAW,o);const i=k.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ue(e,r,t,{geometry:this._geometryVbo,tex:i})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;Te(g,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),ie(this.perspectiveTransform,g[6]/g[8]*e,g[7]/g[8]*t)}}class ze extends Se{constructor(){super(...arguments),this._localOrigin=ae(0,0),this._viewStateId=-1,this._dvsMat3=oe(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ve.overlay],target:()=>this.children,drawPhase:Ce.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:o,pixelRatio:i,resolution:a,rotation:n,viewpoint:f,displayMat3:l}=t;if(this._viewStateId===r)return;const h=Math.PI/180*n,d=i*o[0],u=i*o[1],{x:$,y:w}=f.targetGeometry,C=ne($,t.spatialReference);this._localOrigin.x=C,this._localOrigin.y=w;const S=a*d,R=a*u,c=le(this._dvsMat3);he(c,c,l),ce(c,c,me(d/2,u/2)),de(c,c,Ie(d/S,-u/R,1)),pe(c,c,-h),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:o,spatialReference:i,worldScreenWidth:a,size:n,viewpoint:f}=r,l=this._localOrigin;let h=0;const d=ue(i);if(d&&i.isWrappable){const u=n[0],$=n[1],w=180/Math.PI*o,C=Math.abs(Math.cos(w)),S=Math.abs(Math.sin(w)),R=Math.round(u*C+$*S),[c,V]=d.valid,p=fe(i),{x:U,y:Y}=f.targetGeometry,J=[U,Y],A=[0,0];r.toScreen(A,J);const E=[0,0];let G;G=R>a?.5*a:.5*R;const I=Math.floor((U+.5*p)/p),K=c+I*p,X=V+I*p,q=[A[0]+G,0];r.toMap(E,q),E[0]>X&&(h=p),q[0]=A[0]-G,r.toMap(E,q),E[0]<K&&(h=-p);for(const b of t){const L=b.elementView.bounds;if(_(L))continue;const[O,,j]=L;O<c&&j>c?b.updateDrawCoords(l,p):j>V&&O<V?b.updateDrawCoords(l,-p):b.updateDrawCoords(l,h)}}else for(const u of t)u.updateDrawCoords(l,h)}}let y=class extends Oe(je){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([H(()=>this.layer.effectiveSource,"refresh",()=>{for(const s of this._tileStrategy.tiles)this._updateTile(s);this.requestUpdate()}),H(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new ze,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new ge({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){this._tileStrategy.update(s),this._debugGraphicsView?.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),o=[r.x,r.y];for(const{projectedElement:{normalizedCoords:i,element:a}}of this._elementReferences.values())T(i)&&ve(i.rings,o)&&t.push({type:"media",element:a,layer:this.layer,mapPoint:s});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(s=>this._updateTile(s))}_acquireTile(s){const e=new He(s.clone());return this._updateTile(e),e}_updateTile(s){this.updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{we(e)||F.getLogger(this.declaredClass).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(m,s,!0);const r=new Re({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){const t=this.layer.source;if(!_(t))for(const r of e)this._referenceElement(s,r)}_referenceElement(s,e){Ee(this._elementReferences,e.uid,()=>{const t=new B({element:e,spatialReference:this.view.spatialReference}),r=new We(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),this._debugGraphicsView?.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){let e=this._elementReferences.get(s.uid);if(e){const r=e.projectedElement.normalizedCoords;if(_(r))return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void this._debugGraphicsView?.graphics.remove(e.debugGraphic);const o=[],i=[];for(const a of this._tileStrategy.tiles){const n=N(this.view.featuresTilingScheme,a,r);e.tiles.has(a)?n||i.push(a):n&&o.push(a)}for(const a of o)this._referenceElement(a,s);for(const a of i)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void(e?.debugGraphic&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new B({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(T(t))for(const r of this._tileStrategy.tiles)N(this.view.featuresTilingScheme,r,t)&&this._referenceElement(r,s)}};M([P()],y.prototype,"_fetchQueue",void 0),M([P()],y.prototype,"layer",void 0),M([P({readOnly:!0})],y.prototype,"elements",void 0),y=M([be("esri.views.2d.layers.MediaLayerView2D")],y);const m=xe(),v={xmin:0,ymin:0,xmax:0,ymax:0};function N(s,e,t){return s.getTileBounds(m,e.key,!0),v.xmin=m[0],v.ymin=m[1],v.xmax=m[2],v.ymax=m[3],Me(v,t)}class He{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const o of e)r.has(o)?r.delete(o):t.push(o);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const kt=y;export{kt as default};