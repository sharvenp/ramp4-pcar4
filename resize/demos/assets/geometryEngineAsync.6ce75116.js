import{ds as p,a2 as f}from"./main.33d7d020.js";function i(t){return Array.isArray(t)?t[0]?.spatialReference:t?.spatialReference}function y(t){return t&&(Array.isArray(t)?t.map(y):t.toJSON?t.toJSON():t)}function u(t){return Array.isArray(t)?t.map(r=>f(r)):f(t)}function w(t,r){let n;return Array.isArray(t)?n=t:(n=[],n.push(t),r!=null&&n.push(r)),n}let s;async function m(){return s||(s=p("geometryEngineWorker",{strategy:"distributed"})),s}async function e(t,r){return(await m()).invoke("executeGEOperation",{operation:t,parameters:y(r)})}async function A(t,r){return u(await e("clip",[i(t),t,r]))}async function h(t,r){return u(await e("cut",[i(t),t,r]))}function x(t,r){return e("contains",[i(t),t,r])}function E(t,r){return e("crosses",[i(t),t,r])}function O(t,r,n){return e("distance",[i(t),t,r,n])}function S(t,r){return e("equals",[i(t),t,r])}function J(t,r){return e("intersects",[i(t),t,r])}function N(t,r){return e("touches",[i(t),t,r])}function R(t,r){return e("within",[i(t),t,r])}function b(t,r){return e("disjoint",[i(t),t,r])}function k(t,r){return e("overlaps",[i(t),t,r])}function v(t,r,n){return e("relate",[i(t),t,r,n])}function L(t){return e("isSimple",[i(t),t])}async function j(t){return u(await e("simplify",[i(t),t]))}async function q(t,r){return u(await e("difference",[i(t),t,r]))}async function D(t,r){return u(await e("symmetricDifference",[i(t),t,r]))}async function G(t,r){return u(await e("intersect",[i(t),t,r]))}async function I(t,r=null){const n=w(t,r);return u(await e("union",[i(n),n]))}async function W(t,r,n,a,c,o){return u(await e("offset",[i(t),t,r,n,a,c,o]))}async function $(t,r,n,a=!1){const c=[i(t),t,r,n,a];return u(await e("buffer",c))}async function z(t,r,n,a,c,o){const l=[i(t),t,r,n,a,c,o];return u(await e("geodesicBuffer",l))}function d(t){return"xmin"in t?t.center:"x"in t?t:t.extent.center}async function B(t,r,n){if(t==null)throw new Error("Illegal Argument Exception");const a=t.spatialReference;n=n??d(t);const c=t.constructor.fromJSON(await e("rotate",[a,t,r,n]));return c.spatialReference=a,c}async function F(t,r,n,a){return u(await e("generalize",[i(t),t,r,n,a]))}async function K(t,r,n){return u(await e("densify",[i(t),t,r,n]))}async function M(t,r,n,a=0){return u(await e("geodesicDensify",[i(t),t,r,n,a]))}function P(t,r){return e("planarArea",[i(t),t,r])}function U(t,r){return e("planarLength",[i(t),t,r])}function V(t,r,n){return e("geodesicArea",[i(t),t,r,n])}function C(t,r,n){return e("geodesicLength",[i(t),t,r,n])}export{N as A,q as E,U as F,F as G,I,L as J,V as K,C as M,j as N,k as O,K as P,b as S,M as U,$ as V,P as W,z as b,S as d,J as g,v as h,D as j,G as k,A as l,O as m,x as p,B as q,W as v,E as w,R as x,h as y};