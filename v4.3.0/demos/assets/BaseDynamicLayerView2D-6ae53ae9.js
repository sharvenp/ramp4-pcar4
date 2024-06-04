import{bq as s,p,e as r,y as a,k as m}from"./main-83b7c6ef.js";import{a as h}from"./BitmapContainer-79aa847c.js";import{f as n,u as d}from"./LayerView-26fc6116.js";import{v as c}from"./ExportStrategy-774f931a.js";import{i as u}from"./RefreshableLayerView-a1ff5882.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-3bef0b29.js";import"./definitions-cc1dbf1d.js";import"./VertexArrayObject-2b018746.js";import"./Texture-a2b3dbdd.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-0cddff94.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-41dc1806.js";import"./MaterialKey-51364210.js";import"./utils-4e6729a2.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-6f89b41c.js";import"./earcut-61f7b102.js";import"./Bitmap-30227fea.js";let t=class extends u(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const V=t;export{V as default};