import{at as s,u as p,e as r,y as a,n as m}from"./main-603bdb2f.js";import{a as n}from"./BitmapContainer-d969d97f.js";import{f as h,u as d}from"./LayerView-14601027.js";import{v as c}from"./ExportStrategy-375bfe9f.js";import{i as u}from"./RefreshableLayerView-f6f047c1.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-c55f096e.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-20fac169.js";import"./Texture-ad7fb661.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-10c327f7.js";import"./enums-55085e26.js";import"./ProgramTemplate-af38da7d.js";import"./MaterialKey-88392fa3.js";import"./utils-fe408506.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-b4bf9dc0.js";import"./earcut-61f7b102.js";import"./Bitmap-ebcf5656.js";let t=class extends u(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const k=t;export{k as default};