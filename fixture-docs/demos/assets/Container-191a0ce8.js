import{e as u,y as m,n as I,c7 as S,h as D,u as W,b8 as T,cS as q,cT as E,cU as P,S as $,b as H,Z as w,ay as V}from"./main-5cf1c59e.js";import{J as G}from"./definitions-19bfb61c.js";import{M as A,P as F,G as L,D as U,L as N}from"./enums-64ab819c.js";import{E as j}from"./Texture-3b1fa19c.js";const R=-1;let d=class extends S{constructor(i){super(i),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=D("mapview-transitions-duration"),this.effects=[]}set effect(i){if(this._get("effect")!==(i=i||"")){this._set("effect",i);try{this._transitionTo(x(i))}catch(t){this._transitionTo([]),W.getLogger(this.declaredClass).warn("Invalid Effect",{effect:i,error:t})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(i){this._updateForScale(i)}get transitioning(){return this._to!==null}canTransitionTo(i){try{return this.scale>0&&M(this._current,x(i),this.scale)}catch{return!1}}transitionStep(i,t){this._applyTimeTransition(i),this._updateForScale(t)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(i){this.scale>0&&M(this._current,i,this.scale)?(this._final=i,this._to=T(i),B(this._current,this._to,this.scale),this._from=T(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=i),this._set("effects",this._current[0]?T(this._current[0].effects):[])}_applyTimeTransition(i){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=i;const t=Math.min(1,this._time/this.duration);for(let e=0;e<this._current.length;e++){const s=this._current[e],h=this._from[e],a=this._to[e];s.scale=k(h.scale,a.scale,t);for(let n=0;n<s.effects.length;n++){const c=s.effects[n],r=h.effects[n],p=a.effects[n];c.interpolate(r,p,t)}}t===1&&(this._current=this._final,this._set("effects",this._current[0]?T(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(i){if(this._set("scale",i),this._current.length===0)return;const t=this._current,e=this._current.length-1;let s,h,a=1;if(t.length===1||i>=t[0].scale)h=s=t[0].effects;else if(i<=t[e].scale)h=s=t[e].effects;else for(let n=0;n<e;n++){const c=t[n],r=t[n+1];if(c.scale>=i&&r.scale<=i){a=(i-c.scale)/(r.scale-c.scale),s=c.effects,h=r.effects;break}}for(let n=0;n<this.effects.length;n++)this.effects[n].interpolate(s[n],h[n],a)}};function x(i){const t=q(i)||[];return J(t)?[{scale:R,effects:t}]:t}function M(i,t,e){return!i[0]?.effects||!t[0]?.effects?!0:!((i[0]?.scale===R||t[0]?.scale===R)&&(i.length>1||t.length>1)&&e<=0)&&E(i[0].effects,t[0].effects)}function B(i,t,e){const s=i.length>t.length?i:t,h=i.length>t.length?t:i,a=h[h.length-1],n=a?.scale??e,c=a?.effects??[];for(let r=h.length;r<s.length;r++)h.push({scale:n,effects:[...c]});for(let r=0;r<s.length;r++)h[r].scale=h[r].scale===R?e:h[r].scale,s[r].scale=s[r].scale===R?e:s[r].scale,P(h[r].effects,s[r].effects)}function k(i,t,e){return i+(t-i)*e}function J(i){const t=i[0];return!!t&&"type"in t}u([m()],d.prototype,"_to",void 0),u([m()],d.prototype,"duration",void 0),u([m({value:""})],d.prototype,"effect",null),u([m({readOnly:!0})],d.prototype,"effects",void 0),u([m({readOnly:!0})],d.prototype,"hasEffects",null),u([m({value:0})],d.prototype,"scale",null),u([m({readOnly:!0})],d.prototype,"transitioning",null),d=u([I("esri.layers.effects.EffectView")],d);const X=1/D("mapview-transitions-duration");let Y=class extends ${constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return H(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=w(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=w(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const s=this._fadeOutResolver||!this.visible?0:this.opacity,h=this.computedOpacity;if(h===s)this.computedVisible=this.visible;else{const a=t*X;this.computedOpacity=h>s?Math.max(s,h-a):Math.min(s,h+a),this.computedVisible=this.computedOpacity>0;const n=s===this.computedOpacity;this.inFadeTransition=!n,n||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};const Z=1,rt=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],ht=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],v=256,_={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},O=W.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function z(i,t){t.fillColor[0]=i.color.r/255,t.fillColor[1]=i.color.g/255,t.fillColor[2]=i.color.b/255,t.fillColor[3]=i.color.a,i.haloColor?(t.outlineColor[0]=i.haloColor.r/255,t.outlineColor[1]=i.haloColor.g/255,t.outlineColor[2]=i.haloColor.b/255,t.outlineColor[3]=i.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=i.fillOpacity,t.outlineColor[3]*=i.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=_.outlineWidth,t.outerHaloWidth=_.outerHaloWidth,t.innerHaloWidth=_.innerHaloWidth,t.outlinePosition=_.outlinePosition}const K=[0,0,0,0];class Q{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_.outlinePosition,outlineWidth:_.outlineWidth,innerHaloWidth:_.innerHaloWidth,outerHaloWidth:_.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*v),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;z(t,e);const s=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,h=e.outlinePosition-e.outlineWidth/2,a=e.outlinePosition+e.outlineWidth/2,n=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,c=Math.sqrt(Math.PI/2)*Z,r=Math.abs(s)>c?Math.round(10*(Math.abs(s)-c))/10:0,p=Math.abs(n)>c?Math.round(10*(Math.abs(n)-c))/10:0;let g;r&&!p?O.error("The outer rim of the highlight is "+r+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!r&&p?O.error("The inner rim of the highlight is "+p+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):r&&p&&O.error("The highlight is "+Math.max(r,p)+"px away from the edge of the feature; consider reducing some width values.");const o=[void 0,void 0,void 0,void 0];function b(l,C,f){o[0]=(1-f)*l[0]+f*C[0],o[1]=(1-f)*l[1]+f*C[1],o[2]=(1-f)*l[2]+f*C[2],o[3]=(1-f)*l[3]+f*C[3]}const{_texelData:y}=this;for(let l=0;l<v;++l)g=s+l/(v-1)*(n-s),g<s?(o[4*l+0]=0,o[4*l+1]=0,o[4*l+2]=0,o[4*l+3]=0):g<h?b(K,e.outlineColor,(g-s)/(h-s)):g<a?[o[0],o[1],o[2],o[3]]=e.outlineColor:g<n?b(e.outlineColor,e.fillColor,(g-a)/(n-a)):[o[4*l+0],o[4*l+1],o[4*l+2],o[4*l+3]]=e.fillColor,y[4*l+0]=255*o[0],y[4*l+1]=255*o[1],y[4*l+2]=255*o[2],y[4*l+3]=255*o[3];this._minMaxDistance[0]=s,this._minMaxDistance[1]=n,this._shadeTexChanged=!0}applyHighlightOptions(t,e){this._shadeTex||(this._shadeTex=new j(t,{target:A.TEXTURE_2D,pixelFormat:F.RGBA,dataType:L.UNSIGNED_BYTE,wrapMode:U.CLAMP_TO_EDGE,width:v,height:1,samplingMode:N.LINEAR})),this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,v,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,G),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}}class ot extends Y{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new d),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new Q),this._highlightGradient.setHighlightOptions(t),this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const s=t.parent;return s&&s!==this&&s.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:V()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{d as a,ot as h,ht as i,Z as o,Y as r,rt as t};
