import{at as s,u as p,e as r,y as a,n as m}from"./main-95e6e76d.js";import{a as n}from"./BitmapContainer-8311112b.js";import{f as h,u as d}from"./LayerView-ed1c4eb4.js";import{v as c}from"./ExportStrategy-76b94673.js";import{i as u}from"./RefreshableLayerView-eba15e45.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-da7a04c6.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-5d37e7ae.js";import"./Texture-543e779a.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-5d0ed0f1.js";import"./enums-55085e26.js";import"./ProgramTemplate-0023d51c.js";import"./MaterialKey-0dd846d5.js";import"./utils-6d343beb.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-0472060a.js";import"./earcut-61f7b102.js";import"./Bitmap-f428adf2.js";let t=class extends u(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const k=t;export{k as default};