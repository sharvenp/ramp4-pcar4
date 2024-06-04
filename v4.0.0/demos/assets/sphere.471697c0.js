import{i6 as $,by as h,iy as R,b8 as p,ib as A,ig as l,id as T,bx as a,a6 as z,jU as E,iM as L,jV as X,ia as V,i as U,jW as W,iq as k,ih as B,ic as q,jT as D,i7 as F,jX as x,ba as _,jP as G}from"./main.efb50b2c.js";import{s as H,c as f,f as I}from"./vectorStacks.78d4f069.js";var g;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(g||(g={}));function mt(t){return t?{origin:R(t.origin),direction:R(t.direction)}:{origin:p(),direction:p()}}function jt(t,e){const n=N.get();return n.origin=t,n.direction=e,n}function J(t,e,n){const o=A(t.direction,l(n,e,t.origin));return $(n,t.origin,h(n,t.direction,o)),n}function K(){return{origin:null,direction:null}}const N=new H(K);function Q(t,e){const n=A(t,e)/(a(t)*a(e));return-T(n)}const tt=z.getLogger("esri.geometry.support.sphere");function P(){return E()}function Z(t,e=P()){return L(e,t)}function nt(t,e){return X(t[0],t[1],t[2],e)}function et(t){return t}function ot(t){t[0]=t[1]=t[2]=t[3]=0}function it(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function M(t){return t[3]}function rt(t){return t}function st(t,e,n,o){return X(t,e,n,o)}function ct(t,e,n){return t!==n&&V(n,t),n[3]=t[3]+e,n}function ut(t,e,n){return tt.error("sphere.setExtent is not yet supported"),t===n?n:Z(t,n)}function b(t,e,n){if(U(e))return!1;const{origin:o,direction:i}=e,r=at;r[0]=o[0]-t[0],r[1]=o[1]-t[1],r[2]=o[2]-t[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],c=2*(i[0]*r[0]+i[1]*r[1]+i[2]*r[2]),d=c*c-4*s*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(d<0)return!1;const S=Math.sqrt(d);let u=(-c-S)/(2*s);const m=(-c+S)/(2*s);return(u<0||m<u&&m>0)&&(u=m),!(u<0)&&(n&&(n[0]=o[0]+i[0]*u,n[1]=o[1]+i[1]*u,n[2]=o[2]+i[2]*u),!0)}const at=p();function ft(t,e){return b(t,e,null)}function gt(t,e,n){if(b(t,e,n))return n;const o=v(t,e,f.get());return $(n,e.origin,h(f.get(),e.direction,B(e.origin,o)/a(e.direction))),n}function v(t,e,n){const o=f.get(),i=I.get();q(o,e.origin,e.direction);const r=M(t);q(n,o,e.origin),h(n,n,1/a(n)*r);const s=C(t,e.origin),c=Q(e.origin,n);return W(i,c+s,o),k(n,n,i),n}function lt(t,e,n){return b(t,e,n)?n:(J(e,t,n),w(t,n,n))}function w(t,e,n){const o=l(f.get(),e,t),i=h(f.get(),o,t[3]/a(o));return $(n,i,t)}function dt(t,e){const n=l(f.get(),e,t),o=D(n),i=t[3]*t[3];return Math.sqrt(Math.abs(o-i))}function C(t,e){const n=l(f.get(),e,t),o=a(n),i=M(t),r=i+Math.abs(i-o);return T(i/r)}const j=p();function O(t,e,n,o){const i=l(j,e,t);switch(n){case g.X:{const r=x(i,j)[2];return _(o,-Math.sin(r),Math.cos(r),0)}case g.Y:{const r=x(i,j),s=r[1],c=r[2],d=Math.sin(s);return _(o,-d*Math.cos(c),-d*Math.sin(c),Math.cos(s))}case g.Z:return F(o,i);default:return}}function Y(t,e){const n=l(y,e,t);return a(n)-t[3]}function pt(t,e,n,o){const i=Y(t,e),r=O(t,e,g.Z,y),s=h(y,r,n-i);return $(o,e,s)}function ht(t,e){const n=G(t,e),o=M(t);return n<=o*o}const y=p(),$t=P();Object.freeze(Object.defineProperty({__proto__:null,create:P,copy:Z,fromCenterAndRadius:nt,wrap:et,clear:ot,fromRadius:it,getRadius:M,getCenter:rt,fromValues:st,elevate:ct,setExtent:ut,intersectRay:b,intersectsRay:ft,intersectRayClosestSilhouette:gt,closestPointOnSilhouette:v,closestPoint:lt,projectPoint:w,distanceToSilhouette:dt,angleToSilhouette:C,axisAt:O,altitudeAt:Y,setAltitudeAt:pt,containsPoint:ht,tmpSphere:$t},Symbol.toStringTag,{value:"Module"}));export{rt as E,ht as Q,ft as X,P as _,mt as d,jt as j,M as k,Z as q};