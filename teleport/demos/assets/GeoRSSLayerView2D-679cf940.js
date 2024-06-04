import{O as l,aQ as h,bH as g,j as f,fY as w,fZ as u,f_ as n,e as d,n as b}from"./main-bbf05f59.js";import{f as S,u as V}from"./LayerView-e9beb85f.js";import{i as _}from"./GraphicContainer-f1e78057.js";import{a as T}from"./GraphicsView2D-cdc1fbe9.js";import"./preload-helper-388ac9d5.js";import"./Container-acbe441d.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-c32f2268.js";import"./color-79f680d1.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-d60addfa.js";import"./FeatureContainer-92bbc5c5.js";import"./AttributeStoreView-4acac8f5.js";import"./TiledDisplayObject-48ac2caa.js";import"./visualVariablesUtils-1812b84e.js";import"./visualVariablesUtils-d902e22d.js";import"./VertexArrayObject-33fa1b3b.js";import"./TileContainer-327909d5.js";import"./WGLContainer-b34df200.js";import"./ProgramTemplate-c2c04d7b.js";import"./MaterialKey-3b078c8e.js";import"./utils-935b3ce8.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-7d581e87.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3d38fa95.js";import"./floatRGBA-1de88ef3.js";import"./normalizeUtilsSync-93d96604.js";import"./projectionSupport-5e33f9f5.js";import"./json-48e3ea08.js";import"./Matcher-80fcd53d.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-449cbc6e.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-d941f7ef.js";import"./util-7c9310bd.js";import"./ComputedAttributeStorage-f09470a7.js";import"./arcadeTimeUtils-e51f3165.js";import"./executionError-c1d13a98.js";import"./centroid-fb6d8960.js";let y=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).flat().map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>this.layer?.featureCollections,i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new f(t.features),p=e.drawingInfo,c=r?w.fromJSON(r):null,a=u(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>this.layer?.polygonSymbol,i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>this.layer?.lineSymbol,i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>this.layer?.pointSymbol,i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const di=y;export{di as default};
