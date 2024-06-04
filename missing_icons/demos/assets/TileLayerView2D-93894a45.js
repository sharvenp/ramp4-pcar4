import{fg as w,fh as y,fi as I,fj as V,O as v,du as H,at as p,dx as c,u as T,e as o,y as g,n as q}from"./main-7ed7b27d.js";import"./MagnifierPrograms-97d6a712.js";import"./Container-fa633cf8.js";import"./BufferPool-782f39c2.js";import"./color-8c8aaa05.js";import"./WGLContainer-a34b90ff.js";import"./enums-64ab819c.js";import"./Texture-9888d55f.js";import"./ProgramTemplate-7a472c97.js";import"./MaterialKey-cd08dfc7.js";import"./utils-8584aef4.js";import"./VertexArrayObject-955d008a.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./floatRGBA-8eca6b10.js";import"./webgl-debug-b1f7a2c5.js";import{a as U}from"./GraphicsView2D-ffd30f0d.js";import"./AttributeStoreView-d30d39e0.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import{t as Q,o as f,n as d}from"./imageUtils-645a0bf6.js";import{f as S,u as b}from"./LayerView-09eba647.js";import{n as C}from"./HighlightGraphicContainer-459b0571.js";import{i as k}from"./RefreshableLayerView-a53726c1.js";import{P as F,S as P,a as G}from"./drapedUtils-f3c3abd1.js";import"./preload-helper-388ac9d5.js";import"./_commonjsHelpers-2f3e7994.js";import"./ExpandedCIM-865b9a13.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./definitions-19bfb61c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-2bf211b3.js";import"./rasterizingUtils-9fdb5b1e.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-9af4829a.js";import"./Matcher-38bb4277.js";import"./visualVariablesUtils-09922769.js";import"./visualVariablesUtils-faf622af.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c84d6c93.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./CircularArray-fe2adefd.js";import"./ComputedAttributeStorage-54e2ceab.js";import"./arcadeTimeUtils-2c46f8ed.js";import"./executionError-c1d13a98.js";import"./centroid-864c29fa.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-b7051eb1.js";import"./normalizeUtilsSync-b63642ff.js";import"./projectionSupport-045b827a.js";import"./json-48e3ea08.js";import"./schemaUtils-76cb116a.js";import"./util-c3f0ae69.js";import"./TiledDisplayObject-2bbff5c1.js";import"./BitmapTileContainer-a2168495.js";import"./Bitmap-81950b51.js";import"./TileContainer-a9ce208f.js";import"./BaseGraphicContainer-00fe8bf6.js";import"./FeatureContainer-36825b32.js";import"./popupUtils-15993734.js";const R=[0,0];let h=class extends k(Q(S(b))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),this._highlightView?.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,i)=>this.fetchTile(e,i)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),F(this,this.layer)){const e=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(i,r)=>G(i,r,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(i,r)=>{e.graphicUpdateHandler({graphic:i,property:r})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return H(this.layer.tileInfo?.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(t=>this._enqueueTileFetch(t)))}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:n=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!p(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(n<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const u=new c(m),_=await this.fetchTile(u,{...e,resamplingLevel:n+1});return d(this._tileInfoView,_,u,t)}}throw s}const a=new c(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),a.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);l=await this._fetchImage(a,r)}catch(s){if(p(s))throw s;l=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,l,a,t):l}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){p(e)||T.getLogger(this.declaredClass).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};o([g()],h.prototype,"_fetchQueue",void 0),o([g()],h.prototype,"resampling",null),h=o([q("esri.views.2d.layers.TileLayerView2D")],h);const Jt=h;export{Jt as default};
