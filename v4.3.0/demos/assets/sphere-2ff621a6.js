import{jQ as Y,jR as W,jS as k,jT as D,jU as H,di as V,aW as p,aS as C,dk as g,dn as P,dm as d,jV as f,jn as O,jW as I,aH as K,eu as X,dj as U,p as F,t as G,j0 as J,aT as z,jX as N,iD as tt,dl as et,aV as st,jY as A,ff as R,iY as it}from"./main-83b7c6ef.js";import{n as rt}from"./mat3f64-221ce671.js";import{n as nt}from"./mat4f64-1413b4a7.js";import{n as ot}from"./quatf64-3363c48e.js";class ct{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&Y(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*x);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,x));e++)this._items.push(this._allocator())}}const x=1024;let l=class u{constructor(e,s,i){this._itemByteSize=e,this._itemCreate=s,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this._itemByteSize)}get(){this._itemsPtr===0&&Y(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const s=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let i=0;i<this._itemsPerBuffer;++i)this._items.push(this._itemCreate(s,i*this._itemByteSize));this._buffers.push(s)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=m){return new u(16,k,e)}static createVec3f64(e=m){return new u(24,D,e)}static createVec4f64(e=m){return new u(32,H,e)}static createMat3f64(e=m){return new u(72,rt,e)}static createMat4f64(e=m){return new u(128,nt,e)}static createQuatf64(e=m){return new u(32,ot,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const m=4*W.KILOBYTES;l.createVec2f64();const h=l.createVec3f64();l.createVec4f64();l.createMat3f64();const at=l.createMat4f64();l.createQuatf64();var _;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(_||(_={}));function ut(t){return t?T(V(t.origin),V(t.direction)):T(p(),p())}function T(t,e){return{origin:t,direction:e}}function Yt(t,e){const s=ht.get();return s.origin=t,s.direction=e,s}function ft(t,e,s){const i=C(t.direction,g(s,e,t.origin));return P(s,t.origin,d(s,t.direction,i)),s}const ht=new ct(()=>ut());function mt(t,e){const s=C(t,e)/(f(t)*f(e));return-O(s)}function B(){return I()}function Z(t,e=B()){return K(e,t)}function _t(t,e){return X(t[0],t[1],t[2],e)}function gt(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function $t(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function M(t){return t[3]}function pt(t){return t}function dt(t,e,s,i){return X(t,e,s,i)}function Pt(t,e,s){return t!==s&&U(s,t),s[3]=t[3]+e,s}function Mt(t,e,s){return F.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===s?s:Z(t,s)}function w(t,e,s){if(G(e))return!1;const{origin:i,direction:r}=e,n=wt;n[0]=i[0]-t[0],n[1]=i[1]-t[1],n[2]=i[2]-t[2];const o=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(o===0)return!1;const c=2*(r[0]*n[0]+r[1]*n[1]+r[2]*n[2]),$=c*c-4*o*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-t[3]*t[3]);if($<0)return!1;const b=Math.sqrt($);let a=(-c-b)/(2*o);const y=(-c+b)/(2*o);return(a<0||y<a&&y>0)&&(a=y),!(a<0)&&(s&&(s[0]=i[0]+r[0]*a,s[1]=i[1]+r[1]*a,s[2]=i[2]+r[2]*a),!0)}const wt=p();function yt(t,e){return w(t,e,null)}function St(t,e,s){if(w(t,e,s))return s;const i=q(t,e,h.get());return P(s,e.origin,d(h.get(),e.direction,J(e.origin,i)/f(e.direction))),s}function q(t,e,s){const i=h.get(),r=at.get();z(i,e.origin,e.direction);const n=M(t);z(s,i,e.origin),d(s,s,1/f(s)*n);const o=E(t,e.origin),c=mt(e.origin,s);return N(r,c+o,i),tt(s,s,r),s}function jt(t,e,s){return w(t,e,s)?s:(ft(e,t,s),v(t,s,s))}function v(t,e,s){const i=g(h.get(),e,t),r=d(h.get(),i,t[3]/f(i));return P(s,r,t)}function Bt(t,e){const s=g(h.get(),e,t),i=et(s),r=t[3]*t[3];return Math.sqrt(Math.abs(i-r))}function E(t,e){const s=g(h.get(),e,t),i=f(s),r=M(t),n=r+Math.abs(r-i);return O(r/n)}const S=p();function L(t,e,s,i){const r=g(S,e,t);switch(s){case _.X:{const n=A(r,S)[2];return R(i,-Math.sin(n),Math.cos(n),0)}case _.Y:{const n=A(r,S),o=n[1],c=n[2],$=Math.sin(o);return R(i,-$*Math.cos(c),-$*Math.sin(c),Math.cos(o))}case _.Z:return st(i,r);default:return}}function Q(t,e){const s=g(j,e,t);return f(s)-t[3]}function bt(t,e,s,i){const r=Q(t,e),n=L(t,e,_.Z,j),o=d(j,n,s-r);return P(i,e,o)}function Vt(t,e){const s=it(t,e),i=M(t);return s<=i*i}const j=p(),zt=B();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:Q,angleToSilhouette:E,axisAt:L,clear:lt,closestPoint:jt,closestPointOnSilhouette:q,containsPoint:Vt,copy:Z,create:B,distanceToSilhouette:Bt,elevate:Pt,fromCenterAndRadius:_t,fromRadius:$t,fromValues:dt,getCenter:pt,getRadius:M,intersectRay:w,intersectRayClosestSilhouette:St,intersectsRay:yt,projectPoint:v,setAltitudeAt:bt,setExtent:Mt,tmpSphere:zt,wrap:gt},Symbol.toStringTag,{value:"Module"}));export{Vt as N,B as R,M as T,yt as V,Z as _,h as c,ut as d,pt as k,Yt as p,ct as s};
