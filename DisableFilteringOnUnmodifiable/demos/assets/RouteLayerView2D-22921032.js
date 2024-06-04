import{j as l,gx as m,r as a,aQ as u,b as _,O as c,e as n,y as d,n as w}from"./main-7ffb345c.js";import{b as y,h as f,O as k,g as M,f as v,a as I,D as V}from"./Stop-fa9d91b0.js";import{f as G,u as F}from"./LayerView-9d8c4708.js";import{i as H}from"./GraphicContainer-c18a3a4e.js";import{a as C}from"./GraphicsView2D-c80f7156.js";import"./preload-helper-388ac9d5.js";import"./Container-0f2cd2ac.js";import"./definitions-19bfb61c.js";import"./enums-64ab819c.js";import"./Texture-4bbb623b.js";import"./color-a672d284.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-9e320846.js";import"./FeatureContainer-c0ae94f8.js";import"./AttributeStoreView-25c9cf29.js";import"./TiledDisplayObject-59c8de2f.js";import"./visualVariablesUtils-89ac3954.js";import"./visualVariablesUtils-42976aac.js";import"./VertexArrayObject-1d4af863.js";import"./TileContainer-c8ae7fcf.js";import"./WGLContainer-48b539b9.js";import"./ProgramTemplate-73e8fc6b.js";import"./MaterialKey-36e66990.js";import"./utils-60637b80.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-7823ef40.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b0ee872e.js";import"./floatRGBA-554fbd39.js";import"./normalizeUtilsSync-1a5007c4.js";import"./projectionSupport-569b0ed9.js";import"./json-48e3ea08.js";import"./Matcher-8b11ee19.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-8be9d4cb.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-b4c0d34c.js";import"./util-c5fe4f9c.js";import"./ComputedAttributeStorage-dc41c430.js";import"./arcadeTimeUtils-9461d561.js";import"./executionError-c1d13a98.js";import"./centroid-c75795a2.js";const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],h={graphic:null,property:null,oldValue:null,newValue:null};function g(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof v||t instanceof I||t instanceof V}function O(t){return l.isCollection(t)&&t.length&&g(t.getItemAt(0))}function A(t){return Array.isArray(t)&&t.length>0&&g(t[0])}let o=class extends G(F){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>a(this.layer)&&!this.destroyed?[a(this.layer.routeInfo)?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=g(t)?[this._getNetworkFeatureUid(t)]:A(t)?t.map(r=>this._getNetworkFeatureUid(r)):O(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(a);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(a).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new H(t.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return _(i.symbol)?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(a));for(const e of t.added)this.addHandles([c(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),c(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const p=this._createGraphic(t);return this._networkFeatureMap.set(t,p),this._networkGraphicMap.set(p,t),void this._graphics.add(p)}const s=this._networkFeatureMap.get(t);s[e]=i,h.graphic=s,h.property=e,h.oldValue=r,h.newValue=i,this._graphicsView.graphicUpdateHandler(h)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([d()],o.prototype,"_graphics",void 0),n([d()],o.prototype,"_routeItems",null),o=n([w("esri.views.2d.layers.RouteLayerView2D")],o);const Ct=o;export{Ct as default};