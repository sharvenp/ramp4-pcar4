import{eu as e,ax as a,ek as m,bx as s,eR as b,kw as p,bB as x,aR as j,bs as k}from"./main-95e6e76d.js";import{s as w,c as R}from"./sphere-dae08082.js";function c(r){return r?{origin:e(r.origin),vector:e(r.vector)}:{origin:a(),vector:a()}}function P(r,o,n=c()){return m(n.origin,r),s(n.vector,o,r),n}function d(r,o,n){return h(r,o,0,1,n)}function h(r,o,n,u,i){const{vector:t,origin:v}=r,f=s(R.get(),o,v),g=b(t,f)/p(t);return x(i,t,j(g,n,u)),k(i,i,r.origin)}new w(()=>c());export{P as b,d as j,c as v};
