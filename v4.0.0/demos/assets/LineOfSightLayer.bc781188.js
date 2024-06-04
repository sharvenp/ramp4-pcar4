import{lE as w,fY as O,c7 as M,P as j,e as n,K as t,N as s,O as h,i as p,lQ as f,bA as E,kn as S,lR as k,j as L,fh as C,ak as F,eR as R,eQ as D,bi as g,ae as Q,lS as K,fT as U,lT as Y,lU as Z,dw as B,dy as G,dD as H}from"./main.efb50b2c.js";import{w as v}from"./persistable.783d188f.js";import"./preload-helper.387dac8f.js";import"./multiOriginJSONSupportUtils.8128aa52.js";let J=0,o=class extends w(O(M(j))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${J++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const i=this.parent;if(n(i))switch(i.type){case"line-of-sight":i.removeAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(n)}};t([s({type:String,constructOnly:!0,clonable:!1})],o.prototype,"id",void 0),t([s({type:String})],o.prototype,"title",void 0),t([s({constructOnly:!0})],o.prototype,"type",void 0),t([s({clonable:!1,value:null})],o.prototype,"parent",null),t([s({readOnly:!0})],o.prototype,"extent",void 0),t([s({readOnly:!0})],o.prototype,"isEditable",null),t([s({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",void 0),t([s({readOnly:!0})],o.prototype,"nonEditableMessage",void 0),o=t([h("esri.analysis.Analysis")],o);const V=o;function A(e,i){return x(e)===x(i)}function x(e){if(p(e))return null;const i=e.layer!=null?e.layer.id:"";let l=null;return l=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,l==null?null:`o-${i}-${l}`}const _={json:{write:{writer:W,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:X}}}};function W(e,i){p(e)||e.layer?.objectIdField==null||e.attributes==null||(i.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function X(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let u=class extends w(O(j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return f(this.position,e.position)&&f(this.elevationInfo,e.elevationInfo)&&A(this.feature,e.feature)}};t([s({type:E}),v()],u.prototype,"position",void 0),t([s({type:S}),v()],u.prototype,"elevationInfo",void 0),t([s(_)],u.prototype,"feature",void 0),u=t([h("esri.analysis.LineOfSightAnalysisObserver")],u);const z=u;let y=class extends w(k){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return f(this.position,e.position)&&f(this.elevationInfo,e.elevationInfo)&&A(this.feature,e.feature)}};t([s({type:E}),v()],y.prototype,"position",void 0),t([s({type:S}),v()],y.prototype,"elevationInfo",void 0),t([s(_)],y.prototype,"feature",void 0),y=t([h("esri.analysis.LineOfSightAnalysisTarget")],y);const T=y;function ee(e,i){return p(i)||!i.mode?e?"absolute-height":"on-the-ground":i.mode}function te(e,i){return ee(!!n(e)&&e.hasZ,i)}const $=L.ofType(T);let a=class extends V{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}initialize(){this.own(F(()=>this._computeExtent(),e=>{(p(e)||p(e.pending))&&this._set("extent",n(e)?e.extent:null)},R))}get targets(){return this._get("targets")||new $}set targets(e){this._set("targets",D(e,this.targets,$))}get spatialReference(){return n(this.observer)&&n(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[g(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return n(e)?Q(e.pending):null}_computeExtent(){const e=this.spatialReference;if(p(this.observer)||p(this.observer.position)||p(e))return null;const i=d=>te(d.position,d.elevationInfo)==="absolute-height",l=this.observer.position,m=K(l.x,l.y,l.z,l.x,l.y,l.z);for(const d of this.targets)if(n(d.position)){const c=U(d.position,e);if(n(c.pending))return{pending:c.pending,extent:null};if(n(c.geometry)){const{x:q,y:P,z:N}=c.geometry;Y(m,[q,P,N])}}const b=Z(m,e);return i(this.observer)&&this.targets.every(i)||(b.zmin=null,b.zmax=null),{pending:null,extent:b}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],a.prototype,"type",void 0),t([s({type:z,json:{read:!0,write:!0}})],a.prototype,"observer",void 0),t([s({cast:C,type:$,nonNullable:!0,json:{read:!0,write:!0}})],a.prototype,"targets",null),t([s({value:null,readOnly:!0})],a.prototype,"extent",void 0),t([s({readOnly:!0})],a.prototype,"spatialReference",null),t([s({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),t([s({readOnly:!0})],a.prototype,"nonEditableMessage",void 0),a=t([h("esri.analysis.LineOfSightAnalysis")],a);const I=a,se=L.ofType(T);let r=class extends B(G(H)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new I,this.opacity=1}initialize(){this.own(F(()=>this.analysis,(e,i)=>{n(i)&&i.parent===this&&(i.parent=null),n(e)&&(e.parent=this)},R))}async load(){return n(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return g(this.analysis,e=>e.observer)}set observer(e){g(this.analysis,i=>i.observer=e)}get targets(){return n(this.analysis)?this.analysis.targets:null}set targets(e){g(this.analysis,i=>i.targets=e)}get fullExtent(){return n(this.analysis)?this.analysis.extent:null}get spatialReference(){return n(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new I)}};t([s({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),t([s({type:z,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"observer",null),t([s({type:se,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),t([s({readOnly:!0})],r.prototype,"fullExtent",null),t([s({readOnly:!0})],r.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([s({type:["show","hide"]})],r.prototype,"listMode",void 0),r=t([h("esri.layers.LineOfSightLayer")],r);const le=r;export{le as default};