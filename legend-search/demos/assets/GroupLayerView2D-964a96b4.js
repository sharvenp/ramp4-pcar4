import{e as t,y as a,f$ as p,n as d,j as V,O as l,g0 as y,fk as w,b as o}from"./main-95e6e76d.js";import{r as v}from"./GroupContainer-0ad89fca.js";import{u,f as b}from"./LayerView-ed1c4eb4.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-da7a04c6.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-5d37e7ae.js";import"./Texture-543e779a.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-5d0ed0f1.js";import"./enums-55085e26.js";import"./ProgramTemplate-0023d51c.js";import"./MaterialKey-0dd846d5.js";import"./utils-6d343beb.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-0472060a.js";import"./earcut-61f7b102.js";let s=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new V}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),y),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},y)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",w(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){o(i)&&(i=this._firstVisibleOnLayerOrder(),o(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(r=>l(()=>r.visible,n=>this._applyVisibility(()=>{n!==this.visible&&(r.visible=this.visible)},()=>this._applyExclusiveVisibility(n?r:null)),y)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([a({cast:p})],s.prototype,"layerViews",null),t([a({readOnly:!0})],s.prototype,"updatingProgress",null),t([a()],s.prototype,"view",void 0),s=t([d("esri.views.layers.GroupLayerView")],s);const m=s;let h=class extends b(m){constructor(){super(...arguments),this.container=new v}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};h=t([d("esri.views.2d.layers.GroupLayerView2D")],h);const z=h;export{z as default};
