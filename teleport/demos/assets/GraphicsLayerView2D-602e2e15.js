import{aO as p,l as a,j as o,r as g,e as s,y as m,n as l}from"./main-bbf05f59.js";import{f as c,u as n}from"./LayerView-e9beb85f.js";import{i as d}from"./GraphicContainer-f1e78057.js";import{a as u}from"./GraphicsView2D-cdc1fbe9.js";import"./preload-helper-388ac9d5.js";import"./Container-acbe441d.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-c32f2268.js";import"./color-79f680d1.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-d60addfa.js";import"./FeatureContainer-92bbc5c5.js";import"./AttributeStoreView-4acac8f5.js";import"./TiledDisplayObject-48ac2caa.js";import"./visualVariablesUtils-1812b84e.js";import"./visualVariablesUtils-d902e22d.js";import"./VertexArrayObject-33fa1b3b.js";import"./TileContainer-327909d5.js";import"./WGLContainer-b34df200.js";import"./ProgramTemplate-c2c04d7b.js";import"./MaterialKey-3b078c8e.js";import"./utils-935b3ce8.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-7d581e87.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3d38fa95.js";import"./floatRGBA-1de88ef3.js";import"./normalizeUtilsSync-93d96604.js";import"./projectionSupport-5e33f9f5.js";import"./json-48e3ea08.js";import"./Matcher-80fcd53d.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-449cbc6e.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-d941f7ef.js";import"./util-7c9310bd.js";import"./ComputedAttributeStorage-f09470a7.js";import"./arcadeTimeUtils-e51f3165.js";import"./executionError-c1d13a98.js";import"./centroid-fb6d8960.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t?.filter(g);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};