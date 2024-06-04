import{e as r,y as a,fH as g,n as m,gs as l,fg as d,at as u,u as c,O as y}from"./main-5cf1c59e.js";import{a as f}from"./BitmapContainer-ba92ca09.js";import{f as x,u as w}from"./LayerView-c0560467.js";import{a as v}from"./GraphicsView2D-4c7d71e2.js";import{n as H}from"./HighlightGraphicContainer-9e3c24dd.js";import{v as _}from"./ExportStrategy-ebd67539.js";import{i as I}from"./RefreshableLayerView-fdd59cb4.js";import{S as V,a as P}from"./drapedUtils-dffb59a9.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-7874abb9.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-ab13e3c1.js";import"./Texture-3b1fa19c.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a7fe2a4e.js";import"./enums-55085e26.js";import"./ProgramTemplate-901aaaaf.js";import"./MaterialKey-fe729802.js";import"./utils-76d681a4.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-191a0ce8.js";import"./earcut-61f7b102.js";import"./ExpandedCIM-23a50084.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ee5d9361.js";import"./floatRGBA-b5c59a98.js";import"./normalizeUtilsSync-68d98734.js";import"./projectionSupport-215b6a73.js";import"./json-48e3ea08.js";import"./AttributeStoreView-064109fb.js";import"./TiledDisplayObject-a85ac290.js";import"./visualVariablesUtils-ee4ab76f.js";import"./visualVariablesUtils-e5595195.js";import"./Matcher-8d5067fa.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-09dbcf79.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-f5308cff.js";import"./util-6f06d662.js";import"./ComputedAttributeStorage-f7beeabd.js";import"./arcadeTimeUtils-02563f44.js";import"./executionError-c1d13a98.js";import"./centroid-108b2481.js";import"./BaseGraphicContainer-fed738ba.js";import"./FeatureContainer-f5ba59e0.js";import"./TileContainer-946fa843.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-3711f231.js";import"./popupUtils-ed804171.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return r([a()],e.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],e.prototype,"floors",null),r([a({readOnly:!0})],e.prototype,"exportImageVersion",null),r([a()],e.prototype,"layer",void 0),r([a()],e.prototype,"suspended",void 0),r([a(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this.declaredClass).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,o=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new H(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:o,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,o){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...o})}fetchImageBitmap(t,e,i,o){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...o})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([a()],s.prototype,"strategy",void 0),r([a()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Ct=s;export{Ct as default};
