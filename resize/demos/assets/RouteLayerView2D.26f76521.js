import{j as l,fW as m,e as o,bn as u,i as _,ak as g,K as p,N as d,O as w}from"./main.33d7d020.js";import{b as f,h as y,O as k,g as v,a as M,c as V,D as G}from"./Stop.de5ee252.js";import{f as I,u as F}from"./LayerView.53ba493a.js";import{i as H}from"./GraphicContainer.560ad31d.js";import{a as C}from"./BaseGraphicContainer.150dd7ff.js";import"./preload-helper.387dac8f.js";import"./utils.7b62fe23.js";import"./Utils.57d8db19.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.f83f8541.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.cf505ce5.js";import"./CIMSymbolHelper.5220d63f.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.81c030fc.js";import"./projectionSupport.c4301e0c.js";import"./json.d1a0fa35.js";import"./VertexArrayObject.b7b30936.js";import"./FeatureContainer.8afc87c8.js";import"./TileContainer.d3a549ea.js";import"./WGLContainer.adae2513.js";import"./ProgramTemplate.68308178.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./visualVariablesUtils.21a05a73.js";import"./visualVariablesUtils.ad8715a1.js";import"./Matcher.18f213b9.js";import"./tileUtils.fe90fe1b.js";import"./TileClipper.b8f35890.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.2d641832.js";import"./quantizationUtils.0b483864.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.b60ba386.js";import"./createSymbolSchema.6c920fb3.js";import"./MD5.97b39efc.js";import"./util.c2280301.js";import"./ComputedAttributeStorage.0aefd524.js";import"./centroid.ebd55a46.js";import"./vec3f32.8d37ecf5.js";const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof f||t instanceof y||t instanceof k||t instanceof v||t instanceof M||t instanceof V||t instanceof G}function A(t){return l.isCollection(t)&&t.length&&c(t.getItemAt(0))}function O(t){return Array.isArray(t)&&t.length&&c(t[0])}let h=class extends I(F){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>[o(this.layer.routeInfo)?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:O(t)?t.map(r=>this._getNetworkFeatureUid(r)):A(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(o);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(o).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new H(t.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.handles.remove(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return _(i.symbol)?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(o));for(const e of t.added)this.handles.add([g(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),g(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const n=this._createGraphic(t);return this._networkFeatureMap.set(t,n),this._networkGraphicMap.set(n,t),void this._graphics.add(n)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};p([d()],h.prototype,"_graphics",void 0),p([d()],h.prototype,"_routeItems",null),h=p([w("esri.views.2d.layers.RouteLayerView2D")],h);const Vt=h;export{Vt as default};