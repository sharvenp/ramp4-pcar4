import{r as o,l as f,j as w,O as p,aQ as n,fn as y,b as _,e as V,n as v}from"./main-5cf1c59e.js";import{h as C}from"./Container-191a0ce8.js";import{r as b}from"./GroupContainer-ea63450e.js";import{f as H,u as T}from"./LayerView-c0560467.js";import{i as g}from"./GraphicContainer-7d499223.js";import{a as m}from"./GraphicsView2D-4c7d71e2.js";import"./preload-helper-388ac9d5.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-3b1fa19c.js";import"./WGLContainer-7874abb9.js";import"./VertexArrayObject-ab13e3c1.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a7fe2a4e.js";import"./enums-55085e26.js";import"./ProgramTemplate-901aaaaf.js";import"./MaterialKey-fe729802.js";import"./utils-76d681a4.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./BaseGraphicContainer-fed738ba.js";import"./FeatureContainer-f5ba59e0.js";import"./AttributeStoreView-064109fb.js";import"./TiledDisplayObject-a85ac290.js";import"./visualVariablesUtils-ee4ab76f.js";import"./visualVariablesUtils-e5595195.js";import"./TileContainer-946fa843.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-23a50084.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ee5d9361.js";import"./floatRGBA-b5c59a98.js";import"./normalizeUtilsSync-68d98734.js";import"./projectionSupport-215b6a73.js";import"./json-48e3ea08.js";import"./Matcher-8d5067fa.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-09dbcf79.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-f5308cff.js";import"./util-6f06d662.js";import"./ComputedAttributeStorage-f7beeabd.js";import"./arcadeTimeUtils-02563f44.js";import"./executionError-c1d13a98.js";import"./centroid-108b2481.js";const d="sublayers",l="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends H(T){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):w.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t?.filter(o);return e?.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new m({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([p(()=>s.visible,h=>r.container.visible=h,n),p(()=>r.updating,()=>this.notifyChange("updating"),n)],l)}this._updateHighlight()}else o(this.layer.sublayers)&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new C,r=new g(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const h=new m({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",h.graphicUpdateHandler),p(()=>s.visible,u=>h.container.visible=u,n),p(()=>h.updating,()=>this.notifyChange("updating"),n)],l),a.addChild(h.container),this.container.addChild(a),i.push(h)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};c=V([v("esri.views.2d.layers.MapNotesLayerView2D")],c);const Ci=c;export{Ci as default};