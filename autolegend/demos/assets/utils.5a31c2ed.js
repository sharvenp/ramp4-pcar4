import{K as _,N as m,O as U,P as B,R as F,a6 as q,m as S,cz as M,cA as P,cB as G,ao as z,i as Y,as as D,b9 as L,e as E,b6 as N,cC as k,cy as j,s as W}from"./main.4cbfea05.js";import{e as y,b as I,S as A}from"./Utils.1f611844.js";import{U as K}from"./MaterialKey.46bcefca.js";import{t as J,v as V}from"./enums.6e42a319.js";import{C as l}from"./enums.de935fa5.js";const R=-1;let p=class extends B{constructor(s){super(s),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=F("mapview-transitions-duration"),this.effects=[]}set effect(s){if(this._get("effect")!==(s=s||"")){this._set("effect",s);try{this._transitionTo($(s))}catch(e){this._transitionTo([]),q.getLogger(this.declaredClass).warn("Invalid Effect",{effect:s,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(s){this._updateForScale(s)}get transitioning(){return this._to!==null}canTransitionTo(s){try{return this.scale>0&&x(this._current,$(s),this.scale)}catch{return!1}}transitionStep(s,e){this._applyTimeTransition(s),this._updateForScale(e)}end(){this._applyTimeTransition(this.duration)}_transitionTo(s){this.scale>0&&x(this._current,s,this.scale)?(this._final=s,this._to=S(s),Q(this._current,this._to,this.scale),this._from=S(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=s),this._set("effects",this._current[0]?S(this._current[0].effects):[])}_applyTimeTransition(s){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=s;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const i=this._current[t],n=this._from[t],o=this._to[t];i.scale=X(n.scale,o.scale,e);for(let a=0;a<i.effects.length;a++){const c=i.effects[a],r=n.effects[a],d=o.effects[a];c.interpolate(r,d,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?S(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(s){if(this._set("scale",s),this._current.length===0)return;const e=this._current,t=this._current.length-1;let i,n,o=1;if(e.length===1||s>=e[0].scale)n=i=e[0].effects;else if(s<=e[t].scale)n=i=e[t].effects;else for(let a=0;a<t;a++){const c=e[a],r=e[a+1];if(c.scale>=s&&r.scale<=s){o=(s-c.scale)/(r.scale-c.scale),i=c.effects,n=r.effects;break}}for(let a=0;a<this.effects.length;a++)this.effects[a].interpolate(i[a],n[a],o)}};function $(s){const e=M(s)||[];return Z(e)?[{scale:R,effects:e}]:e}function x(s,e,t){return!s[0]?.effects||!e[0]?.effects?!0:!((s[0]?.scale===R||e[0]?.scale===R)&&(s.length>1||e.length>1)&&t<=0)&&P(s[0].effects,e[0].effects)}function Q(s,e,t){const i=s.length>e.length?s:e,n=s.length>e.length?e:s,o=n[n.length-1],a=o?.scale??t,c=o?.effects??[];for(let r=n.length;r<i.length;r++)n.push({scale:a,effects:[...c]});for(let r=0;r<i.length;r++)n[r].scale=n[r].scale===R?t:n[r].scale,i[r].scale=i[r].scale===R?t:i[r].scale,G(n[r].effects,i[r].effects)}function X(s,e,t){return s+(e-s)*t}function Z(s){const e=s[0];return!!e&&"type"in e}_([m()],p.prototype,"_to",void 0),_([m()],p.prototype,"duration",void 0),_([m({value:""})],p.prototype,"effect",null),_([m({readOnly:!0})],p.prototype,"effects",void 0),_([m({readOnly:!0})],p.prototype,"hasEffects",null),_([m({value:0})],p.prototype,"scale",null),_([m({readOnly:!0})],p.prototype,"transitioning",null),p=_([U("esri.layers.effects.EffectView")],p);const ee=1/F("mapview-transitions-duration");class te extends z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return Y(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=D(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=D(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled){const i=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===i)this.computedVisible=this.visible;else{const o=e*ee;this.computedOpacity=n>i?Math.max(i,n-o):Math.min(i,n+o),this.computedVisible=this.computedOpacity>0;const a=i===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}class oe extends te{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e)}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new p),this._effectView.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}_createTransforms(){return{dvs:L()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}class g{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,t){return E(e)&&e.type==="default"?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}}g.type="default",g.programSpec=null;class b extends g{static getStorageSpec({attributes:e}){return{visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,t){const{attributes:i,dotValue:n,referenceScale:o,dotSize:a,dotBlendingEnabled:c,seed:r,backgroundColor:d}=t,f=E(e)&&e.type==="dot-density"?e:this._createRendererSchema();f.dotValue=n,f.dotSize=a,f.dotScale=o,f.dotBlending=c,f.seed=r;const{colors:w,activeDots:v,backgroundColor:u}=f;for(let h=0;h<J;h++){const C=h>=i.length?null:i[h].color;y(w,C,4*h)}for(let h=0;h<8;h++)v[h]=h<t.attributes.length?1:0;return y(u,d),f}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}}b.type="dot-density",b.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:l.SHORT},{location:1,name:"a_id",count:3,type:l.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:l.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:l.FLOAT}]}};class O extends g{static getStorageSpec({field:e,valueExpression:t}){return{visualVariables:!1,attributes:e||t?[{field:e,valueExpression:t}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,t){const{radius:i,minDensity:n,maxDensity:o,referenceScale:a,field:c,valueExpression:r,colorStops:d}=t,f=o-n,w=c||r?1:0,v=d.map(({color:C,ratio:H})=>`${H}:${C.toString()}`).join();let u,h=!0;return E(e)&&e.type==="heatmap"?(u=e,h=v!==e.gradientHash):u=this._createRendererSchema(),u.radius=N(i),u.minDensity=n,u.densityRange=f,u.referenceScale=a,u.isFieldActive=w,h&&(u.gradient=k(d),u.gradientHash=v),u}}O.type="heatmap",O.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:l.SHORT},{location:1,name:"a_vertexOffset",count:2,type:l.SHORT},{location:4,name:"a_id",count:4,type:l.UNSIGNED_BYTE}]}};class T extends g{static getStorageSpec({attributes:e}){return{visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*V),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,t){const{attributes:i,defaultColor:n,holePercentage:o,othersCategory:a,outline:c}=t,r=E(e)&&e.type==="pie-chart"?e:this._createRendererSchema();for(let d=0;d<V;d++){const f=d>=i.length?new j([0,0,0,0]):i[d].color;y(r.colors,f,4*d)}return y(r.defaultColor,n),y(r.othersColor,a?.color),y(r.outlineColor,c?.color),r.outlineWidth=N(c?.width||0),r.holePercentage=o,r.sectorThreshold=a?.threshold||0,r.numberOfFields=i.length,r}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}T.type="pie-chart",T.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:l.SHORT},{location:1,name:"a_vertexOffset",count:2,type:l.SHORT},{location:2,name:"a_texCoords",count:2,type:l.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:l.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:l.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:l.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:l.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:l.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:l.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};function le(s,e){if(s.type!==e)throw new W("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${s.type}"`)}function ce(s){switch(s.type){case"dot-density":return b;case"heatmap":return O;case"pie-chart":return T;default:return g}}function he(s){const{geometryType:e,symbologyType:t}=K.load(s);switch(e){case I.FILL:if(t===A.DOT_DENSITY)return b;break;case I.MARKER:switch(t){case A.HEATMAP:return O;case A.PIE_CHART:return T}}return g}export{te as a,le as b,ce as c,g as e,p as h,he as p,oe as s};
