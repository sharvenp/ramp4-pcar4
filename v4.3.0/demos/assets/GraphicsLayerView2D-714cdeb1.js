import{bz as p,j as a,bv as o,r as g,e as s,y as m,k as l}from"./main-83b7c6ef.js";import{f as c,u as n}from"./LayerView-26fc6116.js";import{i as d}from"./GraphicContainer-c6ea95dd.js";import{a as u}from"./GraphicsView2D-2d542ab5.js";import"./preload-helper-388ac9d5.js";import"./Container-6f89b41c.js";import"./definitions-cc1dbf1d.js";import"./enums-64ab819c.js";import"./Texture-a2b3dbdd.js";import"./color-0cddff94.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-531496fc.js";import"./FeatureContainer-a28c396b.js";import"./AttributeStoreView-4d446393.js";import"./TiledDisplayObject-86737c83.js";import"./visualVariablesUtils-2d71d25e.js";import"./visualVariablesUtils-8dcb4296.js";import"./VertexArrayObject-2b018746.js";import"./TileContainer-acbaaa40.js";import"./WGLContainer-3bef0b29.js";import"./ProgramTemplate-41dc1806.js";import"./MaterialKey-51364210.js";import"./utils-4e6729a2.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-82e2b199.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3d8185e8.js";import"./floatRGBA-6a4b887e.js";import"./normalizeUtilsSync-2d2f9847.js";import"./projectionSupport-bba819ba.js";import"./json-48e3ea08.js";import"./Matcher-c752dc70.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e84d4617.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-586fdd51.js";import"./util-4e047147.js";import"./ComputedAttributeStorage-a982b1ef.js";import"./arcadeTimeUtils-aff4f706.js";import"./executionError-c1d13a98.js";import"./centroid-c920a25c.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t?.filter(g);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};