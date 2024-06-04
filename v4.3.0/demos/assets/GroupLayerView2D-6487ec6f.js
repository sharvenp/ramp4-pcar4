import{e as t,y as a,bV as p,k as d,bv as V,bp as l,e2 as y,bU as w,t as o}from"./main-83b7c6ef.js";import{r as v}from"./GroupContainer-b2bc8a35.js";import{u as b,f as u}from"./LayerView-26fc6116.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-3bef0b29.js";import"./definitions-cc1dbf1d.js";import"./VertexArrayObject-2b018746.js";import"./Texture-a2b3dbdd.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-0cddff94.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-41dc1806.js";import"./MaterialKey-51364210.js";import"./utils-4e6729a2.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-6f89b41c.js";import"./earcut-61f7b102.js";let s=class extends b{constructor(i){super(i),this.type="group",this.layerViews=new V}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),y),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},y)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",w(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){o(i)&&(i=this._firstVisibleOnLayerOrder(),o(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(r=>l(()=>r.visible,n=>this._applyVisibility(()=>{n!==this.visible&&(r.visible=this.visible)},()=>this._applyExclusiveVisibility(n?r:null)),y)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([a({cast:p})],s.prototype,"layerViews",null),t([a({readOnly:!0})],s.prototype,"updatingProgress",null),t([a()],s.prototype,"view",void 0),s=t([d("esri.views.layers.GroupLayerView")],s);const m=s;let h=class extends u(m){constructor(){super(...arguments),this.container=new v}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};h=t([d("esri.views.2d.layers.GroupLayerView2D")],h);const z=h;export{z as default};