import{f as N}from"./main-5cf1c59e.js";import{S as l,E as i,L as v,A as S}from"./color-a7fe2a4e.js";var r,n;function k(t){switch(t){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function H(t){switch(t){case"top":return n.Top;case"middle":return n.Center;case"baseline":return n.Baseline;case"bottom":return n.Bottom}}function j(t){switch(t){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,n.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,n.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,n.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,n.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,n.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,n.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,n.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,n.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,n.Top];default:return console.debug(`Found invalid placement type ${t}`),[r.Center,n.Center]}}function q(t){switch(t){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function J(t){switch(t){case n.Top:return 1;case n.Center:return 0;case n.Bottom:case n.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${t}`),0}}function Q(t){switch(t){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function $(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}(function(t){t[t.Left=-1]="Left",t[t.Center=0]="Center",t[t.Right=1]="Right"})(r||(r={})),function(t){t[t.Top=1]="Top",t[t.Center=0]="Center",t[t.Bottom=-1]="Bottom",t[t.Baseline=2]="Baseline"}(n||(n={}));function Z(t,e,s){const o=v.SIZE_FIELD_STOPS|v.SIZE_MINMAX_VALUE|v.SIZE_SCALE_STOPS|v.SIZE_UNIT_VALUE,a=(e&(S.FIELD_TARGETS_OUTLINE|S.MINMAX_TARGETS_OUTLINE|S.SCALE_TARGETS_OUTLINE|S.UNIT_TARGETS_OUTLINE))>>>4;return t===i.LINE&&s.isOutline||t===i.FILL&&U(s.symbologyType)?o&a:o&~a}const T=0,b=8,X=7,f=8,z=11,E=11,A=12,M=13,I=14,C=15,w=16,B=17,_=18,O=19,P=20,F=21,R=26,D=Object.keys(l).filter(t=>typeof l[t]=="number").reduce((t,e)=>({...t,[e]:l[e]}),{});function G(t){return t===l.SIMPLE||t===l.OUTLINE_FILL_SIMPLE}function U(t){return t===l.OUTLINE_FILL||t===l.OUTLINE_FILL_SIMPLE}function W(t){return G(t.symbologyType)}function ee(t){return U(t.symbologyType)}function te(t,e){switch(t){case i.FILL:return p.from(e);case i.LINE:return d.from(e);case i.MARKER:return g.from(e);case i.TEXT:return y.from(e);case i.LABEL:return V.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function se(t){switch(c.load(t).geometryType){case i.MARKER:return new g(t);case i.FILL:return new p(t);case i.LINE:return new d(t);case i.TEXT:return new y(t);case i.LABEL:return new V(t)}}class c{static load(e){const s=this.shared;return s.data=e,s}constructor(e){this._data=0,this._data=e}set data(e){this._data=e??0}get data(){return this._data}get geometryType(){return this.bits(f,z)}set geometryType(e){this.setBits(e,f,z)}get mapAligned(){return!!this.bit(P)}set mapAligned(e){this.setBit(P,e)}get sdf(){return!!this.bit(E)}set sdf(e){this.setBit(E,e??!1)}get pattern(){return!!this.bit(A)}set pattern(e){this.setBit(A,e)}get textureBinding(){return this.bits(T,b)}set textureBinding(e){this.setBits(e,T,b)}get symbologyType(){return this.bits(F,R)}set symbologyType(e){this.setBits(e,F,R)}get geometryTypeString(){switch(this.geometryType){case i.FILL:return"fill";case i.MARKER:return"marker";case i.LINE:return"line";case i.TEXT:return"text";case i.LABEL:return"label";default:throw new N(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,s){const o=1<<e;s?this._data|=o:this._data&=~o}bit(e){return(this._data&1<<e)>>e}setBits(e,s,o){for(let a=s,u=0;a<o;a++,u++)this.setBit(a,(e&1<<u)!=0)}bits(e,s){let o=0;for(let a=e,u=0;a<s;a++,u++)o|=this.bit(a)<<u;return o}hasVV(){return!1}setVV(e,s){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:l[this.symbologyType],options:D,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(X&this.textureBinding)}}c.shared=new c(0);const h=t=>class extends t{get vvSizeMinMaxValue(){return this.bit(w)!==0}set vvSizeMinMaxValue(e){this.setBit(w,e)}get vvSizeScaleStops(){return this.bit(B)!==0}set vvSizeScaleStops(e){this.setBit(B,e)}get vvSizeFieldStops(){return this.bit(_)!==0}set vvSizeFieldStops(e){this.setBit(_,e)}get vvSizeUnitValue(){return this.bit(O)!==0}set vvSizeUnitValue(e){this.setBit(O,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,s){super.setVV(e,s);const o=Z(this.geometryType,e,s)&e;this.vvSizeMinMaxValue=!!(o&v.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(o&v.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(o&v.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(o&v.SIZE_SCALE_STOPS)}},x=t=>class extends t{get vvRotation(){return this.bit(C)!==0}set vvRotation(e){this.setBit(C,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,s){super.setVV(e,s),this.vvRotation=!s.isOutline&&!!(e&v.ROTATION)}},m=t=>class extends t{get vvColor(){return this.bit(M)!==0}set vvColor(e){this.setBit(M,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,s){super.setVV(e,s),this.vvColor=!s.isOutline&&!!(e&v.COLOR)}},L=t=>class extends t{get vvOpacity(){return this.bit(I)!==0}set vvOpacity(e){this.setBit(I,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,s){super.setVV(e,s),this.vvOpacity=!s.isOutline&&!!(e&v.OPACITY)}};let p=class extends m(L(h(c))){static load(e){const s=this.shared;return s.data=e,s}static from(e){const{symbologyType:s,vvFlags:o}=e,a=this.load(0);return a.geometryType=i.FILL,a.symbologyType=s,s!==l.DOT_DENSITY&&a.setVV(o,e),a.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}};p.shared=new p(0);class g extends m(L(x(h(c)))){static load(e){const s=this.shared;return s.data=e,s}static from(e){const{symbologyType:s,vvFlags:o}=e,a=this.load(0);return a.geometryType=i.MARKER,a.symbologyType=s,s!==l.HEATMAP&&a.setVV(o,e),a.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}g.shared=new g(0);class d extends m(L(h(c))){static load(e){const s=this.shared;return s.data=e,s}static from(e){const s=this.load(0);return s.geometryType=i.LINE,s.symbologyType=e.symbologyType,s.setVV(e.vvFlags,e),s.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}d.shared=new d(0);class y extends m(L(x(h(c)))){static load(e){const s=this.shared;return s.data=e,s}static from(e){const s=this.load(0);return s.geometryType=i.TEXT,s.symbologyType=e.symbologyType,s.setVV(e.vvFlags,e),s.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0);class V extends h(c){static load(e){const s=this.shared;return s.data=e,s}static from(e){const s=this.load(0);return s.geometryType=i.LABEL,s.symbologyType=e.symbologyType,s.setVV(e.vvFlags,e),s.mapAligned=$(e.placement),s.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}V.shared=new V(0);export{se as A,d as C,g as N,ee as O,y as P,c as U,V as Z,U as _,j as a,W as b,q as c,r as e,te as f,$ as i,H as n,J as o,k as r,Q as s,n as t,p as w};
