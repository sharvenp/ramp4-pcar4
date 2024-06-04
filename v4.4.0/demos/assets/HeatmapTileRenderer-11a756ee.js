import{gm as a,e as m,k as l,gn as p}from"./main-0e79698b.js";import{n as h}from"./BitmapTileContainer-12438479.js";import{o as d}from"./BaseTileRenderer-c99bfcdf.js";import"./preload-helper-388ac9d5.js";import"./Bitmap-94ddb637.js";import"./Container-ff6d0743.js";import"./definitions-cc1dbf1d.js";import"./enums-64ab819c.js";import"./Texture-e6a6934e.js";import"./TiledDisplayObject-86e05a87.js";import"./WGLContainer-2ec9aa53.js";import"./VertexArrayObject-0efe5607.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-f2e13497.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-500ab2a5.js";import"./MaterialKey-7d20a19e.js";import"./utils-8435076a.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./TileContainer-ea8ab26f.js";class c{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:r,colorStops:n}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=r,this._gradient=p(n),this.tiles.forEach(s=>{const e=s.bitmap.source;e&&(e.minDensity=i,e.maxDensity=r,e.gradient=this._gradient,s.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const r=t.intensityInfo,{minDensity:n,maxDensity:s}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=r&&r.matrix||null,e.minDensity=n,e.maxDensity=s,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const z=o;export{z as default};