import{bz as p,j as a,bv as o,r as g,e as s,y as m,k as l}from"./main-0e79698b.js";import{f as c,u as n}from"./LayerView-61d44bf3.js";import{i as d}from"./GraphicContainer-80ad716a.js";import{a as u}from"./GraphicsView2D-c15aafde.js";import"./preload-helper-388ac9d5.js";import"./Container-ff6d0743.js";import"./definitions-cc1dbf1d.js";import"./enums-64ab819c.js";import"./Texture-e6a6934e.js";import"./color-f2e13497.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-0fae08a6.js";import"./FeatureContainer-0924820d.js";import"./AttributeStoreView-72ec5d09.js";import"./TiledDisplayObject-86e05a87.js";import"./visualVariablesUtils-b79c5597.js";import"./visualVariablesUtils-436caaf7.js";import"./VertexArrayObject-0efe5607.js";import"./TileContainer-ea8ab26f.js";import"./WGLContainer-2ec9aa53.js";import"./ProgramTemplate-500ab2a5.js";import"./MaterialKey-7d20a19e.js";import"./utils-8435076a.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-670b19a3.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-7ea86154.js";import"./floatRGBA-0cd7caa2.js";import"./normalizeUtilsSync-a61b534e.js";import"./projectionSupport-73dabd21.js";import"./json-48e3ea08.js";import"./Matcher-2e651e51.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-58445575.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-2aecdeed.js";import"./util-3f33aae1.js";import"./ComputedAttributeStorage-a2be2179.js";import"./arcadeTimeUtils-f3c3ba23.js";import"./executionError-c1d13a98.js";import"./centroid-cfb3585f.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t?.filter(g);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};
