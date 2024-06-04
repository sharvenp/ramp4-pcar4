import{e as a,y as o,n as v,c7 as D,at as P,u as R,l as b,g1 as z,r as _,a as A,w as k,b as V,g2 as C,g3 as M,d as O,g4 as j,O as g,fm as E,U as N,fH as J,f as $,fJ as H,bp as S,fg as L,g0 as q,j as T}from"./main-95e6e76d.js";import{m as G,y as W,h as K}from"./RasterVFDisplayObject-b86b7d37.js";import{f as Q,u as X}from"./LayerView-ed1c4eb4.js";import{a as Y}from"./GraphicsView2D-b3551d69.js";import{n as Z}from"./HighlightGraphicContainer-bd46379e.js";import{a as ee}from"./BitmapContainer-8311112b.js";import{h as te}from"./Container-0472060a.js";import{l as ie}from"./Bitmap-f428adf2.js";import{v as re}from"./ExportStrategy-76b94673.js";import{J as ae}from"./rasterProjectionHelper-9eff42c2.js";import{T as B}from"./color-5d0ed0f1.js";import{c as se}from"./WGLContainer-da7a04c6.js";import{s as oe}from"./popupUtils-2babc27a.js";import{i as ne}from"./RefreshableLayerView-eba15e45.js";import"./preload-helper-388ac9d5.js";import"./VertexArrayObject-5d37e7ae.js";import"./Texture-543e779a.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./ExpandedCIM-7c9c1e71.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./MaterialKey-0dd846d5.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ed808b6c.js";import"./floatRGBA-ece7f9ae.js";import"./normalizeUtilsSync-cecab2b1.js";import"./projectionSupport-8db80048.js";import"./json-48e3ea08.js";import"./AttributeStoreView-1650b9d1.js";import"./TiledDisplayObject-c4471bac.js";import"./visualVariablesUtils-a5460606.js";import"./visualVariablesUtils-0017418d.js";import"./Matcher-f3f18ef2.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-f4eb8161.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-4fb16fce.js";import"./utils-6d343beb.js";import"./util-8f79f22b.js";import"./ComputedAttributeStorage-47e0a270.js";import"./arcadeTimeUtils-f66192b0.js";import"./executionError-c1d13a98.js";import"./centroid-b78488a5.js";import"./BaseGraphicContainer-aaf0573f.js";import"./FeatureContainer-e4153057.js";import"./TileContainer-d9ea6abb.js";import"./vec3f32-ad1dc57f.js";import"./ProgramTemplate-0023d51c.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";let h=class extends D{constructor(){super(...arguments),this.attached=!1,this.container=new te,this.updateRequested=!1,this.type="imagery",this._bitmapView=new ee}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{P(t)||R.getLogger(this.declaredClass).error(t)})}hitTest(e){return new b({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new re({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:t.extent}}).catch(e=>{P(e)||R.getLogger(this.declaredClass).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(t)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),r=z(i,t);return _(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,t,i,r);if(s.imageBitmap)return s.imageBitmap;const n=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),l=new ie(n.pixelBlock,n.extent?.clone(),s.pixelData.pixelBlock);return l.filter=u=>this.layer.applyFilter(u),l}};a([o()],h.prototype,"attached",void 0),a([o()],h.prototype,"container",void 0),a([o()],h.prototype,"layer",void 0),a([o()],h.prototype,"strategy",void 0),a([o()],h.prototype,"timeExtent",void 0),a([o()],h.prototype,"view",void 0),a([o()],h.prototype,"updateRequested",void 0),a([o()],h.prototype,"updating",null),a([o()],h.prototype,"type",void 0),h=a([v("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h;class he extends se{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[G],target:()=>this.children,drawPhase:B.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===B.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends D{constructor(e){super(e),this._loading=null,this.update=A((t,i)=>this._update(t,i).catch(r=>{P(r)||R.getLogger(this.declaredClass).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,n=new k({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,u]=e.state.size;this._loading=this.fetchPixels(n,l,u,i);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(V(e.pixelBlock))return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,n=new W(s);n.offset=[0,0],n.symbolizerParameters=t,n.rawPixelData=e,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=s.width*t.symbolTileSize,n.height=s.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};a([o()],y.prototype,"fetchPixels",void 0),a([o()],y.prototype,"container",void 0),a([o()],y.prototype,"_loading",void 0),a([o()],y.prototype,"updating",null),y=a([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pe=y;let p=class extends C{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:u,height:c}=M(e,t,i,n,s);if(_(s)&&!s.intersects(e))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const m=this.getPixelData();if(_(m)&&`${m.extent.xmin}, ${m.extent.ymin}, ${m.extent.xmax}, ${m.extent.ymax}`===d.bbox)return m}const{pixelData:f}=await this.layer.fetchImage(l,u,c,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const x=f?.pixelBlock;return V(x)?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?O(j(x,"vector-uv")):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pe({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(g(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),E),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new b({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return await ae(this.layer.fullExtent,e)}catch{try{const i=(await N(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?k.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([o()],p.prototype,"attached",void 0),a([o()],p.prototype,"container",void 0),a([o()],p.prototype,"layer",void 0),a([o()],p.prototype,"timeExtent",void 0),a([o()],p.prototype,"type",void 0),a([o()],p.prototype,"view",void 0),a([o()],p.prototype,"updating",null),p=a([v("esri.views.2d.layers.imagery.VectorFieldView2D")],p);const ce=p,de=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:s}=this;if(!i)throw new $("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:n}=s,l=oe(s,r);if(!n||V(l))throw new $("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const u=await l.getRequiredFields(),c=new H;c.timeExtent=this.timeExtent,c.geometry=i,c.outFields=u,c.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:f}=this.view,x=this.view.type==="2d"?new S(d,d,f):new S(.5*d,.5*d,f),{returnTopmostRaster:m,showNoDataRecords:F}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},I={returnDomainValues:!0,returnTopmostRaster:m,pixelSize:x,showNoDataRecords:F,signal:_(r)?r.signal:null};return s.queryVisibleRasters(c,I).then(U=>U)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return a([o()],t.prototype,"layer",void 0),a([o()],t.prototype,"suspended",void 0),a([o(J)],t.prototype,"timeExtent",void 0),a([o()],t.prototype,"view",void 0),t=a([v("esri.views.layers.ImageryLayerView")],t),t};let w=class extends de(ne(Q(X))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new L,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new Y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([g(()=>this.layer.blendMode??"normal",e=>this.subview&&(this.subview.container.blendMode=e),E),g(()=>this.layer.effect??null,e=>this.subview&&(this.subview.container.effect=e),E),g(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},q),g(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},q),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),g(()=>this.layer.renderer,()=>this._setSubView())])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:T.isCollection(e)?e.getItemAt(0):e)instanceof b))return{remove:()=>{}};let i=[];return Array.isArray(e)||T.isCollection(e)?i=e.map(r=>r.clone()):e instanceof b&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:i}=this.subview;if(i===t)return this._attachSubview(this.subview),void(i==="flow"?this.subview.redrawOrRefetch():i==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new ce({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new K({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};a([o()],w.prototype,"pixelData",null),a([o()],w.prototype,"subview",void 0),w=a([v("esri.views.2d.layers.ImageryLayerView2D")],w);const ut=w;export{ut as default};
