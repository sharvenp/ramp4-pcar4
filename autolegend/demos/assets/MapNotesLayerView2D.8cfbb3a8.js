import{e as o,h as f,j as w,ak as p,bn as n,eS as y,i as _,K as V,O as v}from"./main.4cbfea05.js";import{s as C}from"./utils.5a31c2ed.js";import{r as b}from"./GroupContainer.b4a7b86c.js";import{f as T,u as H}from"./LayerView.afe98ab1.js";import{i as g}from"./GraphicContainer.2c0272df.js";import{a as d}from"./BaseGraphicContainer.c9c55d71.js";import"./preload-helper.387dac8f.js";import"./Utils.1f611844.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.b1d5d5f9.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.46bcefca.js";import"./WGLContainer.3c5baf4e.js";import"./VertexArrayObject.b03f3d79.js";import"./ProgramTemplate.8a26705e.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./CIMSymbolHelper.8f048a50.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.dd22af05.js";import"./projectionSupport.75d4be9e.js";import"./json.d1a0fa35.js";import"./FeatureContainer.167646ea.js";import"./TileContainer.d7b4bd0c.js";import"./visualVariablesUtils.801b8cc6.js";import"./visualVariablesUtils.b09e0a69.js";import"./Matcher.47a58cad.js";import"./tileUtils.cd147e2e.js";import"./TileClipper.b79bc359.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.955dfa12.js";import"./quantizationUtils.e8ec02b2.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.5aea7eee.js";import"./createSymbolSchema.ff346692.js";import"./MD5.97b39efc.js";import"./util.2e69a6d9.js";import"./ComputedAttributeStorage.ccc1e355.js";import"./centroid.afdacd26.js";import"./vec3f32.8d37ecf5.js";const m="sublayers",l="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends T(H){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate)}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):w.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.handles.add([p(()=>s.visible,a=>r.container.visible=a,n),p(()=>r.updating,()=>this.notifyChange("updating"),n)],l)}this._updateHighlight()}else o(this.layer.sublayers)&&this.handles.add(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.handles.remove(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new C,r=new g(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.handles.add([s.on("graphic-update",a.graphicUpdateHandler),p(()=>s.visible,u=>a.container.visible=u,n),p(()=>a.updating,()=>this.notifyChange("updating"),n)],l),h.addChild(a.container),this.container.addChild(h),i.push(a)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};c=V([v("esri.views.2d.layers.MapNotesLayerView2D")],c);const wi=c;export{wi as default};