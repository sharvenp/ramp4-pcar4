import{aO as p,l as a,j as o,r as g,e as s,y as m,n as l}from"./main-7ffb345c.js";import{f as c,u as n}from"./LayerView-9d8c4708.js";import{i as d}from"./GraphicContainer-c18a3a4e.js";import{a as u}from"./GraphicsView2D-c80f7156.js";import"./preload-helper-388ac9d5.js";import"./Container-0f2cd2ac.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-4bbb623b.js";import"./color-a672d284.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-9e320846.js";import"./FeatureContainer-c0ae94f8.js";import"./AttributeStoreView-25c9cf29.js";import"./TiledDisplayObject-59c8de2f.js";import"./visualVariablesUtils-89ac3954.js";import"./visualVariablesUtils-42976aac.js";import"./VertexArrayObject-1d4af863.js";import"./TileContainer-c8ae7fcf.js";import"./WGLContainer-48b539b9.js";import"./ProgramTemplate-73e8fc6b.js";import"./MaterialKey-36e66990.js";import"./utils-60637b80.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-7823ef40.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b0ee872e.js";import"./floatRGBA-554fbd39.js";import"./normalizeUtilsSync-1a5007c4.js";import"./projectionSupport-569b0ed9.js";import"./json-48e3ea08.js";import"./Matcher-8b11ee19.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-8be9d4cb.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-b4c0d34c.js";import"./util-c5fe4f9c.js";import"./ComputedAttributeStorage-dc41c430.js";import"./arcadeTimeUtils-9461d561.js";import"./executionError-c1d13a98.js";import"./centroid-c75795a2.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t?.filter(g);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};