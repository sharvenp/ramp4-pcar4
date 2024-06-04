import{gm as a,e as m,k as l,gn as p}from"./main-83b7c6ef.js";import{n as h}from"./BitmapTileContainer-6be678a9.js";import{o as d}from"./BaseTileRenderer-b514d4b8.js";import"./preload-helper-388ac9d5.js";import"./Bitmap-30227fea.js";import"./Container-6f89b41c.js";import"./definitions-cc1dbf1d.js";import"./enums-64ab819c.js";import"./Texture-a2b3dbdd.js";import"./TiledDisplayObject-86737c83.js";import"./WGLContainer-3bef0b29.js";import"./VertexArrayObject-2b018746.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-0cddff94.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-41dc1806.js";import"./MaterialKey-51364210.js";import"./utils-4e6729a2.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./TileContainer-acbaaa40.js";class c{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:r,colorStops:n}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=r,this._gradient=p(n),this.tiles.forEach(s=>{const e=s.bitmap.source;e&&(e.minDensity=i,e.maxDensity=r,e.gradient=this._gradient,s.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const r=t.intensityInfo,{minDensity:n,maxDensity:s}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=r&&r.matrix||null,e.minDensity=n,e.maxDensity=s,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const z=o;export{z as default};
