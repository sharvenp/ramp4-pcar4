import{fh as w,fi as g,fj as I,O as S,du as f,at as h,dr as d,u as T,e as n,y as m,n as V}from"./main-bbf05f59.js";import{t as v,n as y}from"./imageUtils-f88405be.js";import{f as q,u as x}from"./LayerView-e9beb85f.js";import{i as M}from"./RefreshableLayerView-3e51d46a.js";import"./preload-helper-388ac9d5.js";import"./BitmapTileContainer-c12c8fac.js";import"./Bitmap-39bdadf6.js";import"./Container-acbe441d.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-c32f2268.js";import"./TiledDisplayObject-48ac2caa.js";import"./WGLContainer-b34df200.js";import"./VertexArrayObject-33fa1b3b.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-79f680d1.js";import"./enums-55085e26.js";import"./ProgramTemplate-c2c04d7b.js";import"./MaterialKey-3b078c8e.js";import"./utils-935b3ce8.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./TileContainer-327909d5.js";const R=[102113,102100,3857,3785,900913],Q=[0,0];let r=class extends M(v(q(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new w(e),this._fetchQueue=new g({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles(S(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this._refresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(Q,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue?.updating??!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:o=0}=t;if(!i)return this._fetchImage(e,s);const a=new f(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),u=await this._fetchImage(a,s)}catch(l){if(h(l))throw l;if(o<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const p=new f(c),_=await this.fetchTile(p,{...t,resamplingLevel:o+1});return y(this._tileInfoView,_,p,e)}}throw l}return y(this._tileInfoView,u,a,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(t=>d(t.tileInfo?.spatialReference,e))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){h(t)||T.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{h(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>d(s.tileInfo?.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>R.includes(s.tileInfo?.spatialReference.wkid??-1))),i}};n([m()],r.prototype,"_fetchQueue",void 0),n([m({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=n([V("esri.views.2d.layers.WMTSLayerView2D")],r);const te=r;export{te as default};
