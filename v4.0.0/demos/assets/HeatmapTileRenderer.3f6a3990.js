import{mL as a,K as m,O as l,cC as h}from"./main.efb50b2c.js";import{n as p}from"./BitmapTileContainer.bb407950.js";import{o as c}from"./BaseTileRenderer.8ad4ec18.js";import"./preload-helper.387dac8f.js";import"./Bitmap.3de272b0.js";import"./utils.9619dae6.js";import"./Utils.f67560a4.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.627d6838.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.c216087c.js";import"./TileContainer.bca8274f.js";import"./WGLContainer.83fa1e96.js";import"./VertexArrayObject.e5cd7959.js";import"./ProgramTemplate.1056febf.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";class d{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends c{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new p(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:s,colorStops:r}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=s,this._gradient=h(r),this.tiles.forEach(n=>{const e=n.bitmap.source;e&&(e.minDensity=i,e.maxDensity=s,e.gradient=this._gradient,n.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const s=t.intensityInfo,{minDensity:r,maxDensity:n}=this._intensityInfo,e=i.bitmap.source||new d;e.intensities=s&&s.matrix||null,e.minDensity=r,e.maxDensity=n,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const E=o;export{E as default};