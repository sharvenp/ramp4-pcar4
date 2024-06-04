import{ek as ir,el as sr,em as lr,e as A,y as T,n as cr,R as ur,ax as w,bG as fr,en as pr,eo as K,bz as I,bt as _,ep as yr,eq as V,er as gr,bp as mr,r as B,es as hr,et as Ar,eu as L,u as Tr,bu as U,ev as W,bv as D,ew as $r,bw as Pr,ex as Fr,ey as dr,ez as Er,b as m,eA as b,eB as Q,eC as Mr,e2 as vr,eD as xr,eE as Rr}from"./main-95e6e76d.js";import{e as X}from"./mat3f64-221ce671.js";import{e as $,o as wr}from"./mat4f64-1413b4a7.js";import{c as M}from"./spatialReferenceEllipsoidUtils-91a60b7f.js";import{v as z,y as _r,x as br}from"./quat-9a7188b3.js";import{e as G}from"./quatf64-3363c48e.js";import{T as p,i as f}from"./BufferView-de5ba4bc.js";import{t as d,e as Cr,r as P,o as rr}from"./vec33-7248db0d.js";function E(r=Or){return[r[0],r[1],r[2],r[3]]}function ft(r,t,e=E()){return ir(e,r),e[3]=t,e}function pt(r,t,e=E()){return z(v,r,S(r)),z(H,t,S(t)),_r(v,H,v),Nr(e,sr(br(e,v)))}function yt(r){return r}function S(r){return lr(r[3])}function Nr(r,t){return r[3]=t,r}const Or=[0,0,1,0],v=G(),H=G();E();var Y;let g=Y=class extends ur{constructor(r){super(r),this.origin=w(),this.translation=w(),this.rotation=E(),this.scale=fr(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return z(J,this.rotation,S(this.rotation)),pr(r,J,this.translation,this.scale),r}get localMatrixInverse(){return K($(),this.localMatrix)}applyLocal(r,t){return I(t,r,this.localMatrix)}applyLocalInverse(r,t){return I(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=p.fromTypedArray(e),n=p.fromTypedArray(r);if(this.geographic){const l=M(t),c=$();return _(t,this.origin,c,l),yr(c,c,this.localMatrix),d(o,n,c),V(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;gr(a,wr)?Cr(o,n):d(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new mr({x:t,y:e,z:o,spatialReference:r})}equals(r){return B(r)&&this.geographic===r.geographic&&hr(this.origin,r.origin)&&Ar(this.localMatrix,r.localMatrix)}clone(){const r={origin:L(this.origin),translation:L(this.translation),rotation:E(this.rotation),scale:L(this.scale),geographic:this.geographic};return new Y(r)}};A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"origin",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"translation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),A([T({type:Boolean,nonNullable:!0,json:{write:!0}})],g.prototype,"geographic",void 0),A([T()],g.prototype,"localMatrix",null),A([T()],g.prototype,"localMatrixInverse",null),g=Y=A([cr("esri.geometry.support.MeshTransform")],g);const J=G(),Lr=g;function k(r,t){return r.isGeographic||r.isWebMercator&&(t?.geographic??!0)}const C=Tr.getLogger("esri.geometry.support.meshUtils.normalProjection");function Br(r,t,e,o,n){return O(o)?(N(h.TO_PCPF,f.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n)),n):(C.error("Cannot convert spatial reference to PCPF"),n)}function zr(r,t,e,o,n){return O(o)?(N(h.FROM_PCPF,f.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n)),n):(C.error("Cannot convert to spatial reference from PCPF"),n)}function Sr(r,t,e){return V(r,t,0,e,M(t),0,r.length/3),e}function Yr(r,t,e){return V(r,M(e),0,t,e,0,r.length/3),t}function jr(r,t,e){if(m(r))return t;const o=p.fromTypedArray(r),n=p.fromTypedArray(t);return d(n,o,e),t}function Vr(r,t,e){if(m(r))return t;b(u,e);const o=f.fromTypedArray(r),n=f.fromTypedArray(t);return P(n,o,u),Q(u)||rr(n,n),t}function Gr(r,t,e){if(m(r))return t;b(u,e);const o=f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=f.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(P(n,o,u),Q(u)||rr(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function kr(r,t,e,o,n){if(!O(o))return C.error("Cannot convert spatial reference to PCPF"),n;N(h.TO_PCPF,f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function qr(r,t,e,o,n){if(!O(o))return C.error("Cannot convert to spatial reference from PCPF"),n;N(h.FROM_PCPF,f.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function N(r,t,e,o,n,a){if(!t)return;const i=e.count,l=M(n);if(tr(n))for(let c=0;c<i;c++)o.getVec(c,x),t.getVec(c,y),_(l,x,R,l),U(u,R),r===h.FROM_PCPF&&W(u,u),D(y,y,u),a.setVec(c,y);else for(let c=0;c<i;c++){o.getVec(c,x),t.getVec(c,y),_(l,x,R,l),U(u,R);const F=$r(e.get(c,1));let s=Math.cos(F);r===h.TO_PCPF&&(s=1/s),u[0]*=s,u[1]*=s,u[2]*=s,u[3]*=s,u[4]*=s,u[5]*=s,r===h.FROM_PCPF&&W(u,u),D(y,y,u),Pr(y,y),a.setVec(c,y)}return a}function O(r){return tr(r)||Ir(r)}function tr(r){return r.isWGS84||Fr(r)||dr(r)||Er(r)}function Ir(r){return r.isWebMercator}var h;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const x=w(),y=w(),R=$(),u=X();function er(r,t,e){return k(t.spatialReference,e)?Dr(r,t,e):Wr(r,t,e)}function Ur(r,t,e){const{position:o,normal:n,tangent:a}=r;if(m(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return er({position:jr(o,new Float64Array(o.length),i),normal:B(n)?Vr(n,new Float32Array(n.length),i):null,tangent:B(a)?Gr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function gt(r,t,e){if(e?.useTransform){const{position:o,normal:n,tangent:a}=r;return{vertexAttributes:{position:o,normal:n,tangent:a},transform:new Lr({origin:[t.x,t.y,t.z??0],geographic:k(t.spatialReference,e)})}}return{vertexAttributes:er(r,t,e),transform:null}}function Z(r,t,e){return k(t.spatialReference,e)?Kr(r,t,e):nr(r,t,e)}function mt(r,t,e,o){if(m(t))return Z(r,e,o);const n=Ur(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?nr(n,e,o):Z(n,e,o)}function Wr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*c+a,o[s+1]=n[s+1]*c+i,o[s+2]=n[s+2]*F+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Dr(r,t,e){const o=t.spatialReference,n=or(t,e,j),a=new Float64Array(r.position.length),i=Hr(r.position,n,o,a),l=b(ar,n);return{position:i,normal:Jr(i,a,r.normal,l,o),tangent:Zr(i,a,r.tangent,l,o)}}function Hr(r,t,e,o){d(p.fromTypedArray(o),p.fromTypedArray(r),t);const n=new Float64Array(r.length);return Yr(o,n,e)}function Jr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);return P(f.fromTypedArray(a),f.fromTypedArray(e),o),zr(a,r,t,n,a),a}function Zr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);P(f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return qr(a,r,t,n,a),a}function nr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/c,o[s+1]=(n[s+1]-i)/c,o[s+2]=(n[s+2]-l)/F;return{position:o,normal:r.normal,tangent:r.tangent}}function Kr(r,t,e){const o=t.spatialReference;or(t,e,j);const n=K(tt,j),a=new Float64Array(r.position.length),i=Qr(r.position,o,n,a),l=b(ar,n);return{position:i,normal:Xr(r.normal,r.position,a,o,l),tangent:rt(r.tangent,r.position,a,o,l)}}function or(r,t,e){_(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:o,vertical:n}=q(t?t.unit:null,r.spatialReference);return Mr(e,e,[o,o,n]),e}function Qr(r,t,e,o){const n=Sr(r,t,o),a=p.fromTypedArray(n),i=new Float64Array(n.length),l=p.fromTypedArray(i);return d(l,a,e),i}function Xr(r,t,e,o,n){if(m(r))return null;const a=Br(r,t,e,o,new Float32Array(r.length)),i=f.fromTypedArray(a);return P(i,i,n),a}function rt(r,t,e,o,n){if(m(r))return null;const a=kr(r,t,e,o,new Float32Array(r.length)),i=f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return P(i,i,n),a}function q(r,t){if(m(r))return et;const e=t.isGeographic?1:vr(t),o=t.isGeographic?1:xr(t),n=Rr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const j=$(),tt=$(),ar=X(),et={horizontal:1,vertical:1};export{qr as L,Sr as M,Yr as R,gt as _,E as a,Z as b,S as c,ft as d,Lr as e,Ur as f,yt as g,zr as h,mt as i,Br as j,kr as k,k as r,pt as v,er as x};
