import{at as s,u as p,e as r,y as a,n as m}from"./main-bbf05f59.js";import{a as n}from"./BitmapContainer-c481ffe4.js";import{f as h,u as d}from"./LayerView-e9beb85f.js";import{v as c}from"./ExportStrategy-81206f78.js";import{i as u}from"./RefreshableLayerView-3e51d46a.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-b34df200.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-33fa1b3b.js";import"./Texture-c32f2268.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-79f680d1.js";import"./enums-55085e26.js";import"./ProgramTemplate-c2c04d7b.js";import"./MaterialKey-3b078c8e.js";import"./utils-935b3ce8.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-acbe441d.js";import"./earcut-61f7b102.js";import"./Bitmap-39bdadf6.js";let t=class extends u(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const k=t;export{k as default};