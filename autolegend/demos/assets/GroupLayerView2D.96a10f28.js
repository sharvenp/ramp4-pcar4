import{K as t,N as a,fh as p,O as d,j as V,ak as l,fi as y,eQ as w,i as o}from"./main.4cbfea05.js";import{r as v}from"./GroupContainer.b4a7b86c.js";import{u,f as b}from"./LayerView.afe98ab1.js";import"./preload-helper.387dac8f.js";import"./WGLContainer.3c5baf4e.js";import"./enums.de935fa5.js";import"./utils.5a31c2ed.js";import"./Utils.1f611844.js";import"./enums.6e42a319.js";import"./Texture.b1d5d5f9.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.46bcefca.js";import"./VertexArrayObject.b03f3d79.js";import"./ProgramTemplate.8a26705e.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";let s=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new V}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),y),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},y)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",w(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){o(i)&&(i=this._firstVisibleOnLayerOrder(),o(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(r=>l(()=>r.visible,n=>this._applyVisibility(()=>{n!==this.visible&&(r.visible=this.visible)},()=>this._applyExclusiveVisibility(n?r:null)),y)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([a({cast:p})],s.prototype,"layerViews",null),t([a({readOnly:!0})],s.prototype,"updatingProgress",null),t([a()],s.prototype,"view",void 0),s=t([d("esri.views.layers.GroupLayerView")],s);const m=s;let h=class extends b(m){constructor(){super(...arguments),this.container=new v}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};h=t([d("esri.views.2d.layers.GroupLayerView2D")],h);const j=h;export{j as default};