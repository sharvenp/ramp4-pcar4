import{cN as L,cK as P,cs as d,cO as M,cL as b,r as g,b as A}from"./main-5cf1c59e.js";const f=(r,n,t)=>[n,t],e=(r,n,t)=>[n,t,r[2]],m=(r,n,t)=>[n,t,r[2],r[3]];function T(r){return r?{originPosition:r.originPosition==="upper-left"?"upperLeft":r.originPosition==="lower-left"?"lowerLeft":r.originPosition,scale:r.tolerance?[r.tolerance,r.tolerance]:[1,1],translate:g(r.extent)?[r.extent.xmin,r.extent.ymax]:[0,0]}:null}function h({scale:r,translate:n},t){return Math.round((t-n[0])/r[0])}function x({scale:r,translate:n},t){return Math.round((n[1]-t)/r[1])}function p(r,n,t){const o=[];let u,i,l,s;for(let a=0;a<t.length;a++){const c=t[a];a>0?(l=h(r,c[0]),s=x(r,c[1]),l===u&&s===i||(o.push(n(c,l-u,s-i)),u=l,i=s)):(u=h(r,c[0]),i=x(r,c[1]),o.push(n(c,u,i)))}return o.length>0?o:null}function N(r,n,t,o){return p(r,t?o?m:e:o?e:f,n)}function O(r,n,t,o){const u=[],i=t?o?m:e:o?e:f;for(let l=0;l<n.length;l++){const s=p(r,i,n[l]);s&&s.length>=3&&u.push(s)}return u.length?u:null}function q(r,n,t,o){const u=[],i=t?o?m:e:o?e:f;for(let l=0;l<n.length;l++){const s=p(r,i,n[l]);s&&s.length>=2&&u.push(s)}return u.length?u:null}function y({scale:r,translate:n},t){return t*r[0]+n[0]}function z({scale:r,translate:n},t){return n[1]-t*r[1]}function $(r,n,t){const o=new Array(t.length);if(!t.length)return o;const[u,i]=r.scale;let l=y(r,t[0][0]),s=z(r,t[0][1]);o[0]=n(t[0],l,s);for(let a=1;a<t.length;a++){const c=t[a];l+=c[0]*u,s-=c[1]*i,o[a]=n(c,l,s)}return o}function w(r,n,t){const o=new Array(t.length);for(let u=0;u<t.length;u++)o[u]=$(r,n,t[u]);return o}function v(r,n,t,o){return $(r,t?o?m:e:o?e:f,n)}function B(r,n,t,o){return w(r,t?o?m:e:o?e:f,n)}function C(r,n,t,o){return w(r,t?o?m:e:o?e:f,n)}function E(r,n,t,o,u){return n.xmin=h(r,t.xmin),n.ymin=x(r,t.ymin),n.xmax=h(r,t.xmax),n.ymax=x(r,t.ymax),n!==t&&(o&&(n.zmin=t.zmin,n.zmax=t.zmax),u&&(n.mmin=t.mmin,n.mmax=t.mmax)),n}function F(r,n,t,o,u){return n.points=N(r,t.points,o,u)??[],n}function G(r,n,t,o,u){return n.x=h(r,t.x),n.y=x(r,t.y),n!==t&&(o&&(n.z=t.z),u&&(n.m=t.m)),n}function I(r,n,t,o,u){const i=O(r,t.rings,o,u);return i?(n.rings=i,n):null}function K(r,n,t,o,u){const i=q(r,t.paths,o,u);return i?(n.paths=i,n):null}function U(r,n){return r&&n?L(n)?G(r,{},n,!1,!1):P(n)?K(r,{},n,!1,!1):d(n)?I(r,{},n,!1,!1):M(n)?F(r,{},n,!1,!1):b(n)?E(r,{},n,!1,!1):null:null}function V(r,n,t,o,u){return g(t)&&(n.points=v(r,t.points,o,u)),n}function j(r,n,t,o,u){return A(t)||(n.x=y(r,t.x),n.y=z(r,t.y),n!==t&&(o&&(n.z=t.z),u&&(n.m=t.m))),n}function k(r,n,t,o,u){return g(t)&&(n.rings=C(r,t.rings,o,u)),n}function D(r,n,t,o,u){return g(t)&&(n.paths=B(r,t.paths,o,u)),n}export{k as B,D as C,G as O,U,V as q,T as s,j as v};
