import{K as e,O as l,an as R,N as t,a2 as S,dS as $,M as q,bS as O,j as x,eQ as A,s as j,ak as u,eR as c,eS as I,bt as N,c7 as P,eT as U,ao as _,P as C,a6 as L,bj as b}from"./main.33d7d020.js";import{s as M}from"./utils.7b62fe23.js";let g=class extends R{};g=e([l("esri.views.layers.support.ClipArea")],g);const y=g;var f;let p=f=class extends y{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};e([t({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),e([t({readOnly:!0})],p.prototype,"version",null),p=f=e([l("esri.views.layers.support.ClipRect")],p);const V=p;var w;const E={base:$,key:"type",typeMap:{extent:q,polygon:O}};let d=w=class extends y{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new w({geometry:this.geometry.clone()})}};e([t({types:E,json:{read:S,write:!0}})],d.prototype,"geometry",void 0),e([t({readOnly:!0})],d.prototype,"version",null),d=w=e([l("esri.views.layers.support.Geometry")],d);const T=d;let h=class extends y{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};e([t({type:[[[Number]]],json:{write:!0}})],h.prototype,"path",void 0),e([t({readOnly:!0})],h.prototype,"version",null),h=e([l("esri.views.layers.support.Path")],h);const k=h,v=x.ofType({key:"type",base:y,typeMap:{rect:V,path:k,geometry:T}}),F=a=>{let i=class extends a{constructor(){super(...arguments),this.attached=!1,this.clips=new v,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){const s=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new j("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new M),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([u(()=>this.suspended,r=>{this.container&&(this.container.visible=!r),this.view&&!r&&this.updateRequested&&this.view.requestUpdate()},c),u(()=>this.layer?.opacity??1,r=>{this.container&&(this.container.opacity=r)},c),u(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",r=>{this.container&&(this.container.blendMode=r)},c),u(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,r=>{this.container&&(this.container.effect=r)},c),I(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(r=>{r===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const s=this.view?.spatialReference;return s==null||this.supportsSpatialReference(s)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(s){const o=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!o)return!0;const{minScale:r,maxScale:m}=o;return(r===0||s<=r)&&(m===0||s>=m)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(s){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",s),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(s))):this.updateRequested=!1}hitTest(s,o){return Promise.resolve(null)}supportsSpatialReference(s){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const s=super.getSuspendInfo(),o=!this.spatialReferenceSupported,r=this.visibleAtCurrentScale;return o&&(s.spatialReferenceNotSupported=o),r&&(s.outsideScaleRange=r),s}};return e([t()],i.prototype,"attached",void 0),e([t({type:v,set(s){const o=A(s,this._get("clips"),v);this._set("clips",o)}})],i.prototype,"clips",void 0),e([t()],i.prototype,"container",void 0),e([t()],i.prototype,"moving",void 0),e([t({readOnly:!0})],i.prototype,"spatialReferenceSupported",null),e([t({readOnly:!0})],i.prototype,"updateParameters",void 0),e([t()],i.prototype,"updateRequested",void 0),e([t()],i.prototype,"updating",null),e([t()],i.prototype,"view",void 0),e([t({readOnly:!0})],i.prototype,"visibleAtCurrentScale",null),i=e([l("esri.views.2d.layers.LayerView2D")],i),i};let n=class extends N(P(U(_.EventedMixin(C)))){constructor(a){super(a),this.layer=null,this.parent=null}initialize(){this.when().catch(a=>{if(a.name!=="layerview:create-error"){const i=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";L.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${i}')`,a)}})}get fullOpacity(){return b(this.get("layer.opacity"),1)*b(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer?.legendEnabled===!0}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return this.layer?.visible===!0}set visible(a){a!==void 0?this._override("visible",a):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const a=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},i=this;return i.view&&i.view.ready||(a.viewNotReady=!0),this.layer&&this.layer.loaded||(a.layerNotLoaded=!0),this.visible||(a.layerInvisible=!0),a}isUpdating(){return!1}};e([t()],n.prototype,"fullOpacity",null),e([t()],n.prototype,"layer",void 0),e([t()],n.prototype,"parent",void 0),e([t({readOnly:!0})],n.prototype,"suspended",null),e([t({readOnly:!0})],n.prototype,"suspendInfo",null),e([t({readOnly:!0})],n.prototype,"legendEnabled",null),e([t({type:Boolean,readOnly:!0})],n.prototype,"updating",null),e([t({readOnly:!0})],n.prototype,"updatingProgress",null),e([t()],n.prototype,"visible",null),e([t()],n.prototype,"view",void 0),n=e([l("esri.views.layers.LayerView")],n);const H=n;export{F as f,H as u};
