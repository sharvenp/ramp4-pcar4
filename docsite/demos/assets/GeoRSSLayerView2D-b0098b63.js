import{bp as l,bu as h,bb as g,bv as w,bw as f,bx as u,by as n,e as b,k as d}from"./main-69e2a69d.js";import{f as S,u as V}from"./LayerView-3c3a6846.js";import{i as _}from"./GraphicContainer-cf859ee1.js";import{a as T}from"./GraphicsView2D-8441af07.js";import"./preload-helper-388ac9d5.js";import"./Container-ee830452.js";import"./definitions-cc1dbf1d.js";import"./enums-64ab819c.js";import"./Texture-f9376f18.js";import"./color-c2cf25df.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-34c2697d.js";import"./FeatureContainer-c03932ff.js";import"./AttributeStoreView-3de78fa9.js";import"./TiledDisplayObject-0857fbf9.js";import"./visualVariablesUtils-d416bf55.js";import"./visualVariablesUtils-1beef9db.js";import"./VertexArrayObject-0184481a.js";import"./TileContainer-7b9d957f.js";import"./WGLContainer-73e62161.js";import"./ProgramTemplate-779862e7.js";import"./MaterialKey-394f2e49.js";import"./utils-3ff9d654.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-3ab597a1.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-580a4d40.js";import"./floatRGBA-9b302caa.js";import"./normalizeUtilsSync-6dac3dac.js";import"./projectionSupport-b91613b1.js";import"./json-48e3ea08.js";import"./Matcher-6760d5a9.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-d68e359d.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-04d3725d.js";import"./util-df5ca91e.js";import"./ComputedAttributeStorage-39b3cf7c.js";import"./arcadeTimeUtils-71abfa4d.js";import"./executionError-c1d13a98.js";import"./centroid-376a04cf.js";let y=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).flat().map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>this.layer?.featureCollections,i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=u(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>this.layer?.polygonSymbol,i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>this.layer?.lineSymbol,i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>this.layer?.pointSymbol,i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=b([d("esri.views.2d.layers.GeoRSSLayerView2D")],y);const bi=y;export{bi as default};
