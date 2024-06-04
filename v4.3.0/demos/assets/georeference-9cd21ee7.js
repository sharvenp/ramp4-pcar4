import{dj as ir,iz as sr,iA as lr,e as A,y as T,k as cr,dB as fr,aW as _,aX as ur,iB as pr,iC as X,iD as k,iE as w,iF as yr,fB as Y,iG as gr,bh as mr,r as L,iH as hr,iI as Ar,di as B,p as Tr,iJ as q,fh as U,fg as D,iK as $r,aV as dr,iL as Pr,b1 as Fr,b2 as Er,t as m,es as C,iM as Z,iN as Mr,bD as vr,iO as xr,iP as Rr}from"./main-83b7c6ef.js";import{e as Q}from"./mat3f64-221ce671.js";import{e as $,o as _r}from"./mat4f64-1413b4a7.js";import{c as M}from"./spatialReferenceEllipsoidUtils-e68210b7.js";import{v as z,y as wr,x as Cr}from"./quat-07509e98.js";import{e as G}from"./quatf64-3363c48e.js";import{T as p,i as u}from"./BufferView-91b08b32.js";import{t as F,e as br,r as d,o as rr}from"./vec33-45c7ad11.js";function E(r=Or){return[r[0],r[1],r[2],r[3]]}function ut(r,t,e=E()){return ir(e,r),e[3]=t,e}function pt(r,t,e=E()){return z(v,r,S(r)),z(H,t,S(t)),wr(v,H,v),Nr(e,sr(Cr(e,v)))}function yt(r){return r}function S(r){return lr(r[3])}function Nr(r,t){return r[3]=t,r}const Or=[0,0,1,0],v=G(),H=G();E();var j;let g=j=class extends fr{constructor(r){super(r),this.origin=_(),this.translation=_(),this.rotation=E(),this.scale=ur(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return z(J,this.rotation,S(this.rotation)),pr(r,J,this.translation,this.scale),r}get localMatrixInverse(){return X($(),this.localMatrix)}applyLocal(r,t){return k(t,r,this.localMatrix)}applyLocalInverse(r,t){return k(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=p.fromTypedArray(e),n=p.fromTypedArray(r);if(this.geographic){const l=M(t),c=$();return w(t,this.origin,c,l),yr(c,c,this.localMatrix),F(o,n,c),Y(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;gr(a,_r)?br(o,n):F(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new mr({x:t,y:e,z:o,spatialReference:r})}equals(r){return L(r)&&this.geographic===r.geographic&&hr(this.origin,r.origin)&&Ar(this.localMatrix,r.localMatrix)}clone(){const r={origin:B(this.origin),translation:B(this.translation),rotation:E(this.rotation),scale:B(this.scale),geographic:this.geographic};return new j(r)}};A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"origin",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"translation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),A([T({type:Boolean,nonNullable:!0,json:{write:!0}})],g.prototype,"geographic",void 0),A([T()],g.prototype,"localMatrix",null),A([T()],g.prototype,"localMatrixInverse",null),g=j=A([cr("esri.geometry.support.MeshTransform")],g);const J=G(),Br=g;function I(r,t){return r.isGeographic||r.isWebMercator&&(t?.geographic??!0)}const b=Tr.getLogger("esri.geometry.support.meshUtils.normalProjection");function Lr(r,t,e,o,n){return O(o)?(N(h.TO_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(b.error("Cannot convert spatial reference to PCPF"),n)}function zr(r,t,e,o,n){return O(o)?(N(h.FROM_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(b.error("Cannot convert to spatial reference from PCPF"),n)}function Sr(r,t,e){return Y(r,t,0,e,M(t),0,r.length/3),e}function jr(r,t,e){return Y(r,M(e),0,t,e,0,r.length/3),t}function Vr(r,t,e){if(m(r))return t;const o=p.fromTypedArray(r),n=p.fromTypedArray(t);return F(n,o,e),t}function Yr(r,t,e){if(m(r))return t;C(f,e);const o=u.fromTypedArray(r),n=u.fromTypedArray(t);return d(n,o,f),Z(f)||rr(n,n),t}function Gr(r,t,e){if(m(r))return t;C(f,e);const o=u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(d(n,o,f),Z(f)||rr(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function Ir(r,t,e,o,n){if(!O(o))return b.error("Cannot convert spatial reference to PCPF"),n;N(h.TO_PCPF,u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Wr(r,t,e,o,n){if(!O(o))return b.error("Cannot convert to spatial reference from PCPF"),n;N(h.FROM_PCPF,u.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function N(r,t,e,o,n,a){if(!t)return;const i=e.count,l=M(n);if(tr(n))for(let c=0;c<i;c++)o.getVec(c,x),t.getVec(c,y),w(l,x,R,l),q(f,R),r===h.FROM_PCPF&&U(f,f),D(y,y,f),a.setVec(c,y);else for(let c=0;c<i;c++){o.getVec(c,x),t.getVec(c,y),w(l,x,R,l),q(f,R);const P=$r(e.get(c,1));let s=Math.cos(P);r===h.TO_PCPF&&(s=1/s),f[0]*=s,f[1]*=s,f[2]*=s,f[3]*=s,f[4]*=s,f[5]*=s,r===h.FROM_PCPF&&U(f,f),D(y,y,f),dr(y,y),a.setVec(c,y)}return a}function O(r){return tr(r)||kr(r)}function tr(r){return r.isWGS84||Pr(r)||Fr(r)||Er(r)}function kr(r){return r.isWebMercator}var h;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const x=_(),y=_(),R=$(),f=Q();function er(r,t,e){return I(t.spatialReference,e)?Dr(r,t,e):Ur(r,t,e)}function qr(r,t,e){const{position:o,normal:n,tangent:a}=r;if(m(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return er({position:Vr(o,new Float64Array(o.length),i),normal:L(n)?Yr(n,new Float32Array(n.length),i):null,tangent:L(a)?Gr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function gt(r,t,e){if(e?.useTransform){const{position:o,normal:n,tangent:a}=r;return{vertexAttributes:{position:o,normal:n,tangent:a},transform:new Br({origin:[t.x,t.y,t.z??0],geographic:I(t.spatialReference,e)})}}return{vertexAttributes:er(r,t,e),transform:null}}function K(r,t,e){return I(t.spatialReference,e)?Xr(r,t,e):nr(r,t,e)}function mt(r,t,e,o){if(m(t))return K(r,e,o);const n=qr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?nr(n,e,o):K(n,e,o)}function Ur(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:P}=W(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*c+a,o[s+1]=n[s+1]*c+i,o[s+2]=n[s+2]*P+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Dr(r,t,e){const o=t.spatialReference,n=or(t,e,V),a=new Float64Array(r.position.length),i=Hr(r.position,n,o,a),l=C(ar,n);return{position:i,normal:Jr(i,a,r.normal,l,o),tangent:Kr(i,a,r.tangent,l,o)}}function Hr(r,t,e,o){F(p.fromTypedArray(o),p.fromTypedArray(r),t);const n=new Float64Array(r.length);return jr(o,n,e)}function Jr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);return d(u.fromTypedArray(a),u.fromTypedArray(e),o),zr(a,r,t,n,a),a}function Kr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);d(u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return Wr(a,r,t,n,a),a}function nr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:P}=W(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/c,o[s+1]=(n[s+1]-i)/c,o[s+2]=(n[s+2]-l)/P;return{position:o,normal:r.normal,tangent:r.tangent}}function Xr(r,t,e){const o=t.spatialReference;or(t,e,V);const n=X(tt,V),a=new Float64Array(r.position.length),i=Zr(r.position,o,n,a),l=C(ar,n);return{position:i,normal:Qr(r.normal,r.position,a,o,l),tangent:rt(r.tangent,r.position,a,o,l)}}function or(r,t,e){w(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:o,vertical:n}=W(t?t.unit:null,r.spatialReference);return Mr(e,e,[o,o,n]),e}function Zr(r,t,e,o){const n=Sr(r,t,o),a=p.fromTypedArray(n),i=new Float64Array(n.length),l=p.fromTypedArray(i);return F(l,a,e),i}function Qr(r,t,e,o,n){if(m(r))return null;const a=Lr(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a);return d(i,i,n),a}function rt(r,t,e,o,n){if(m(r))return null;const a=Ir(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return d(i,i,n),a}function W(r,t){if(m(r))return et;const e=t.isGeographic?1:vr(t),o=t.isGeographic?1:xr(t),n=Rr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const V=$(),tt=$(),ar=Q(),et={horizontal:1,vertical:1};export{Br as L,mt as M,jr as R,gt as _,Sr as a,K as b,Ir as c,Wr as d,E as e,S as f,yt as g,zr as h,ut as i,Lr as j,qr as k,I as r,pt as v,er as x};
