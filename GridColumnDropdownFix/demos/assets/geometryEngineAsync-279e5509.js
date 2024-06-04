import{v as f,aU as w}from"./main-603bdb2f.js";function i(t){return Array.isArray(t)?t[0]?.spatialReference:t?.spatialReference}function l(t){return t&&(Array.isArray(t)?t.map(l):t.toJSON?t.toJSON():t)}function u(t){return Array.isArray(t)?t.map(r=>f(r)):f(t)}function m(t,r){let n;return Array.isArray(t)?n=t:(n=[],n.push(t),r!=null&&n.push(r)),n}let s;async function g(){return s||(s=w("geometryEngineWorker",{strategy:"distributed"})),s}async function e(t,r){return(await g()).invoke("executeGEOperation",{operation:t,parameters:l(r)})}async function h(t,r){return u(await e("clip",[i(t),t,r]))}async function x(t,r){return u(await e("cut",[i(t),t,r]))}function v(t,r){return e("contains",[i(t),t,r])}function E(t,r){return e("crosses",[i(t),t,r])}function O(t,r,n){return e("distance",[i(t),t,r,n])}function R(t,r){return e("equals",[i(t),t,r])}function S(t,r){return e("intersects",[i(t),t,r])}function J(t,r){return e("touches",[i(t),t,r])}function N(t,r){return e("within",[i(t),t,r])}function b(t,r){return e("disjoint",[i(t),t,r])}function k(t,r){return e("overlaps",[i(t),t,r])}function D(t,r,n){return e("relate",[i(t),t,r,n])}function L(t){return e("isSimple",[i(t),t])}async function j(t){return u(await e("simplify",[i(t),t]))}async function B(t,r=!1){return u(await e("convexHull",[i(t),t,r]))}async function G(t,r){return u(await e("difference",[i(t),t,r]))}async function H(t,r){return u(await e("symmetricDifference",[i(t),t,r]))}async function U(t,r){return u(await e("intersect",[i(t),t,r]))}async function W(t,r=null){const n=m(t,r);return u(await e("union",[i(n),n]))}async function $(t,r,n,a,c,o){return u(await e("offset",[i(t),t,r,n,a,c,o]))}async function q(t,r,n,a=!1){const c=[i(t),t,r,n,a];return u(await e("buffer",c))}async function z(t,r,n,a,c,o){const p=[i(t),t,r,n,a,c,o];return u(await e("geodesicBuffer",p))}function d(t){return"xmin"in t?t.center:"x"in t?t:t.extent?.center}async function C(t,r,n){if(t==null)throw new y;const a=t.spatialReference;if((n=n??d(t))==null)throw new y;const c=t.constructor.fromJSON(await e("rotate",[a,t,r,n]));return c.spatialReference=a,c}async function F(t,r,n,a){return u(await e("generalize",[i(t),t,r,n,a]))}async function I(t,r,n){return u(await e("densify",[i(t),t,r,n]))}async function K(t,r,n,a=0){return u(await e("geodesicDensify",[i(t),t,r,n,a]))}function M(t,r){return e("planarArea",[i(t),t,r])}function P(t,r){return e("planarLength",[i(t),t,r])}function Z(t,r,n){return e("geodesicArea",[i(t),t,r,n])}function Q(t,r,n){return e("geodesicLength",[i(t),t,r,n])}class y extends Error{constructor(){super("Illegal Argument Exception")}}export{b as A,F as B,I as C,U as D,G as E,P as F,C as H,L as J,Z as K,q as L,Q as M,j as N,k as O,z as P,D as R,J as S,K as U,M as W,W as b,O as d,R as g,S as h,B as j,H as k,E as m,v as p,$ as v,x as w,N as x,h as y};
