import{K as p,N as m,O as _,s as y,E as I,e as v,eN as V,eO as T,eP as q,ak as Q,cL as S,b2 as f,cO as d,a6 as b}from"./main.efb50b2c.js";import{r as F,o as w,n as g}from"./imageUtils.f3c97f9e.js";import{f as U,u as x}from"./LayerView.098e8f00.js";import{i as C}from"./RefreshableLayerView.cc3cb63d.js";import{s as P,a as k}from"./drapedUtils.dfd7dc97.js";import"./preload-helper.387dac8f.js";import"./BitmapTileContainer.bb407950.js";import"./Bitmap.3de272b0.js";import"./utils.9619dae6.js";import"./Utils.f67560a4.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.627d6838.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.c216087c.js";import"./TileContainer.bca8274f.js";import"./WGLContainer.83fa1e96.js";import"./VertexArrayObject.e5cd7959.js";import"./ProgramTemplate.1056febf.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";const L=e=>{let t=class extends e{async fetchPopupFeatures(s,a){const{layer:l}=this;if(!s)throw new y("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:l});if(l.type!=="tile")throw new y("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:l.type});const h=this.get("view.scale"),n=l.allSublayers.toArray().filter(i=>{const r=i.minScale===0||h<=i.minScale,o=i.maxScale===0||h>=i.maxScale;return i.popupTemplate&&i.popupEnabled&&i.visible&&r&&o});return I(n.map(async i=>{const r=i.createQuery(),o=v(a)?a.event:null,c=P({renderer:i.renderer,event:o});return r.geometry=this.createFetchPopupFeaturesQueryGeometry(s,c),r.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(r)).features})).then(i=>[].concat(...i.map(r=>r.value).filter(Boolean)))}};return p([m()],t.prototype,"layer",void 0),t=p([_("esri.layers.mixins.TileLayerView")],t),t},R=[0,0];let u=class extends L(C(F(U(x)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new V(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new T({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,s)=>this.fetchTile(t,s)}),this._tileStrategy=new q({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(Q(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return S(this.layer.tileInfo?.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return k(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)))}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(R,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:a,resamplingLevel:l=0}=t;if(!s)try{return await this._fetchImage(e,a)}catch(i){if(!f(i)&&!this.resampling)return w(this._tileInfoView.tileInfo.size);if(l<3){const r=this._tileInfoView.getTileParentId(e.id);if(r){const o=new d(r),c=await this.fetchTile(o,{...t,resamplingLevel:l+1});return g(this._tileInfoView,c,o,e)}}throw i}const h=new d(0,0,0,0);let n;try{if(await s.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:a}),h.level!==e.level&&!this.resampling)return w(this._tileInfoView.tileInfo.size);n=await this._fetchImage(h,a)}catch(i){if(f(i))throw i;n=await this._fetchImage(e,a)}return this.resampling?g(this._tileInfoView,n,h,e):n}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){f(t)||b.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};p([m()],u.prototype,"_fetchQueue",void 0),p([m()],u.prototype,"resampling",null),u=p([_("esri.views.2d.layers.TileLayerView2D")],u);const ae=u;export{ae as default};