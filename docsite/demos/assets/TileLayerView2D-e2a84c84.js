import{bl as w,bm as y,bn as I,bo as V,bp as v,ar as H,bq as p,av as c,p as T,e as o,y as g,k as b}from"./main-69e2a69d.js";import"./MagnifierPrograms-a66ca198.js";import"./Container-ee830452.js";import"./BufferPool-58e7a147.js";import"./color-c2cf25df.js";import"./WGLContainer-73e62161.js";import"./enums-64ab819c.js";import"./Texture-f9376f18.js";import"./ProgramTemplate-779862e7.js";import"./MaterialKey-394f2e49.js";import"./utils-3ff9d654.js";import"./VertexArrayObject-0184481a.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./floatRGBA-9b302caa.js";import"./webgl-debug-b1f7a2c5.js";import{a as q}from"./GraphicsView2D-8441af07.js";import"./AttributeStoreView-3de78fa9.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import{t as U,o as f,n as d}from"./imageUtils-30b661a1.js";import{f as Q,u as S}from"./LayerView-3c3a6846.js";import{n as C}from"./HighlightGraphicContainer-546d4b35.js";import{i as k}from"./RefreshableLayerView-11eae078.js";import{P as F,S as P,a as G}from"./drapedUtils-4094f6e3.js";import"./preload-helper-388ac9d5.js";import"./_commonjsHelpers-2f3e7994.js";import"./ExpandedCIM-3ab597a1.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./definitions-cc1dbf1d.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-580a4d40.js";import"./rasterizingUtils-1bea74ed.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-7bc1ad3a.js";import"./Matcher-6760d5a9.js";import"./visualVariablesUtils-d416bf55.js";import"./visualVariablesUtils-1beef9db.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-d68e359d.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./CircularArray-d68b045f.js";import"./ComputedAttributeStorage-39b3cf7c.js";import"./arcadeTimeUtils-71abfa4d.js";import"./executionError-c1d13a98.js";import"./centroid-376a04cf.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-b7051eb1.js";import"./normalizeUtilsSync-6dac3dac.js";import"./projectionSupport-b91613b1.js";import"./json-48e3ea08.js";import"./schemaUtils-04d3725d.js";import"./util-df5ca91e.js";import"./TiledDisplayObject-0857fbf9.js";import"./BitmapTileContainer-5687d34d.js";import"./Bitmap-c81bfe5f.js";import"./TileContainer-7b9d957f.js";import"./BaseGraphicContainer-34c2697d.js";import"./FeatureContainer-c03932ff.js";import"./popupUtils-ede43d25.js";const R=[0,0];let h=class extends k(U(Q(S))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),this._highlightView?.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,i)=>this.fetchTile(e,i)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),F(this,this.layer)){const e=this._highlightView=new q({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(i,r)=>G(i,r,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(i,r)=>{e.graphicUpdateHandler({graphic:i,property:r})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return H(this.layer.tileInfo?.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(t=>this._enqueueTileFetch(t)))}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:n=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!p(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(n<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const u=new c(m),_=await this.fetchTile(u,{...e,resamplingLevel:n+1});return d(this._tileInfoView,_,u,t)}}throw s}const a=new c(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),a.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);l=await this._fetchImage(a,r)}catch(s){if(p(s))throw s;l=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,l,a,t):l}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){p(e)||T.getLogger(this.declaredClass).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};o([g()],h.prototype,"_fetchQueue",void 0),o([g()],h.prototype,"resampling",null),h=o([b("esri.views.2d.layers.TileLayerView2D")],h);const Kt=h;export{Kt as default};
