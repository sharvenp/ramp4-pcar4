import{t as l,dC as x,dD as P,jt as h,e as s,y as i,bh as w,ge as O,k as f,dF as C,j2 as H,r,bv as m,bV as Z,bp as L,j6 as E,bU as F,er as b,b as R,ju as k,ei as D,jv as M,jw as U,dI as V,dL as B,a4 as G}from"./main-66d02e41.js";import{c as J}from"./Analysis-f9380bda.js";import{g as c}from"./persistable-56bbb384.js";import"./preload-helper-388ac9d5.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-0fcce5c5.js";function S(e,t){return I(e)===I(t)}function I(e){if(l(e))return null;const t=e.layer!=null?e.layer.id:"";let o=null;return o=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,o==null?null:`o-${t}-${o}`}const z={json:{write:{writer:K,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:Q}}}};function K(e,t){l(e)||e.layer?.objectIdField==null||e.attributes==null||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function Q(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let u=class extends x(P(C)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return h(this.position,t.position)&&h(this.elevationInfo,t.elevationInfo)&&S(this.feature,t.feature)}};s([i({type:w}),c()],u.prototype,"position",void 0),s([i({type:O}),c()],u.prototype,"elevationInfo",void 0),s([i(z)],u.prototype,"feature",void 0),u=s([f("esri.analysis.LineOfSightAnalysisObserver")],u);const _=u;let p=class extends x(H){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return h(this.position,e.position)&&h(this.elevationInfo,e.elevationInfo)&&S(this.feature,e.feature)}};s([i({type:w}),c()],p.prototype,"position",void 0),s([i({type:O}),c()],p.prototype,"elevationInfo",void 0),s([i(z)],p.prototype,"feature",void 0),p=s([f("esri.analysis.LineOfSightAnalysisTarget")],p);const A=p;function W(e){return e?ee:te}function X(e,t){return l(t)||!t.mode?W(e).mode:t.mode}function Y(e,t){return X(!!r(e)&&e.hasZ,t)}const ee={mode:"absolute-height",offset:0},te={mode:"on-the-ground",offset:null},v=m.ofType(A);let a=class extends J{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(L(()=>this._computeExtent(),e=>{(l(e)||l(e.pending))&&this._set("extent",r(e)?e.extent:null)},E))}get targets(){return this._get("targets")||new v}set targets(e){this._set("targets",F(e,this.targets,v))}get spatialReference(){return r(this.observer)&&r(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[b(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return r(e)?R(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(l(this.observer)||l(this.observer.position)||l(e))return null;const t=y=>Y(y.position,y.elevationInfo)==="absolute-height",o=this.observer.position,j=k(o.x,o.y,o.z,o.x,o.y,o.z);for(const y of this.targets)if(r(y.position)){const d=D(y.position,e);if(r(d.pending))return{pending:d.pending,extent:null};if(r(d.geometry)){const{x:T,y:q,z:N}=d.geometry;M(j,[T,q,N])}}const g=U(j,e);return t(this.observer)&&this.targets.every(t)||(g.zmin=void 0,g.zmax=void 0),{pending:null,extent:g}}clear(){this.observer=null,this.targets.removeAll()}};s([i({type:["line-of-sight"]})],a.prototype,"type",void 0),s([i({type:_,json:{read:!0,write:!0}})],a.prototype,"observer",void 0),s([i({cast:Z,type:v,nonNullable:!0,json:{read:!0,write:!0}})],a.prototype,"targets",null),s([i({value:null,readOnly:!0})],a.prototype,"extent",void 0),s([i({readOnly:!0})],a.prototype,"spatialReference",null),s([i({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),a=s([f("esri.analysis.LineOfSightAnalysis")],a);const $=a,se=m.ofType(A);let n=class extends V(B(G)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new $,this.opacity=1}initialize(){this.addHandles(L(()=>this.analysis,(e,t)=>{r(t)&&t.parent===this&&(t.parent=null),r(e)&&(e.parent=this)},E))}async load(){return r(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return b(this.analysis,e=>e.observer)}set observer(e){b(this.analysis,t=>t.observer=e)}get targets(){return r(this.analysis)?this.analysis.targets:new m}set targets(e){F(e,this.analysis?.targets)}get fullExtent(){return r(this.analysis)?this.analysis.extent:null}get spatialReference(){return r(this.analysis)?R(this.analysis.spatialReference):null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new $)}};s([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),s([i({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),s([i({type:_,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"observer",null),s([i({type:se,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),s([i({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),s([i({readOnly:!0})],n.prototype,"fullExtent",null),s([i({readOnly:!0})],n.prototype,"spatialReference",null),s([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),s([i({type:["show","hide"]})],n.prototype,"listMode",void 0),n=s([f("esri.layers.LineOfSightLayer")],n);const pe=n;export{pe as default};
