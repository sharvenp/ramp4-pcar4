import{aO as p,l as a,j as o,r as g,e as s,y as m,n as l}from"./main-603bdb2f.js";import{f as c,u as n}from"./LayerView-14601027.js";import{i as d}from"./GraphicContainer-037850c8.js";import{a as u}from"./GraphicsView2D-a4d9dc0b.js";import"./preload-helper-388ac9d5.js";import"./Container-b4bf9dc0.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-ad7fb661.js";import"./color-10c327f7.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-01acf21b.js";import"./FeatureContainer-ab36e686.js";import"./AttributeStoreView-9b70e1f3.js";import"./TiledDisplayObject-6df683c8.js";import"./visualVariablesUtils-89dc4921.js";import"./visualVariablesUtils-deb4dc5a.js";import"./VertexArrayObject-20fac169.js";import"./TileContainer-f2929a4e.js";import"./WGLContainer-c55f096e.js";import"./ProgramTemplate-af38da7d.js";import"./MaterialKey-88392fa3.js";import"./utils-fe408506.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-73983267.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-2271bf98.js";import"./floatRGBA-7b173f92.js";import"./normalizeUtilsSync-c605b608.js";import"./projectionSupport-e6c864f8.js";import"./json-48e3ea08.js";import"./Matcher-4cfc6b9d.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-0e35e4fa.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-eb21628c.js";import"./util-9a7026fd.js";import"./ComputedAttributeStorage-38f57b9d.js";import"./arcadeTimeUtils-5b3f08c9.js";import"./executionError-c1d13a98.js";import"./centroid-bb392727.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t?.filter(g);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};