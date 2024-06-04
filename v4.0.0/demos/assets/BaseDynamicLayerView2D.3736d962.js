import{a6 as o,b2 as p,K as r,N as a,O as m}from"./main.efb50b2c.js";import{t as n}from"./BitmapContainer.e35b4cc9.js";import{f as h,u as d}from"./LayerView.098e8f00.js";import{S as c}from"./ExportStrategy.315d2a85.js";import{i as y}from"./RefreshableLayerView.cc3cb63d.js";import"./preload-helper.387dac8f.js";import"./WGLContainer.83fa1e96.js";import"./enums.de935fa5.js";import"./utils.9619dae6.js";import"./Utils.f67560a4.js";import"./enums.6e42a319.js";import"./Texture.627d6838.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.c216087c.js";import"./VertexArrayObject.e5cd7959.js";import"./ProgramTemplate.1056febf.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./Bitmap.3de272b0.js";const g=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||g.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const N=t;export{N as default};
