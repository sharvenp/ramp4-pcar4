import{dq as g,dr as M,r as t,ds as Z,dt as u,du as h,dv as l,dk as c,dw as p}from"./main-603bdb2f.js";import{t as f}from"./json-48e3ea08.js";const o=[0,0];function x(e,n){if(!n)return null;if("x"in n){const s={x:0,y:0};return[s.x,s.y]=e(n.x,n.y,o),n.z!=null&&(s.z=n.z),n.m!=null&&(s.m=n.m),s}if("xmin"in n){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=e(n.xmin,n.ymin,o),[s.xmax,s.ymax]=e(n.xmax,n.ymax,o),n.hasZ&&(s.zmin=n.zmin,s.zmax=n.zmax,s.hasZ=!0),n.hasM&&(s.mmin=n.mmin,s.mmax=n.mmax,s.hasM=!0),s}return"rings"in n?{rings:m(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:m(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:y(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:null}function m(e,n){const s=[];for(const i of e)s.push(y(i,n));return s}function y(e,n){const s=[];for(const i of e){const r=n(i[0],i[1],[0,0]);s.push(r),i.length>2&&r.push(i[2]),i.length>3&&r.push(i[3])}return s}async function v(e,n){if(!e||!n)return;const s=Array.isArray(e)?e.map(i=>t(i.geometry)?i.geometry.spatialReference:null).filter(t):[e];await Z(s.map(i=>({source:i,dest:n})))}const _=x.bind(null,g),d=x.bind(null,M);function w(e,n,s,i){if(!e||(s||(s=n,n=e.spatialReference),!u(n)||!u(s)||h(n,s)))return e;if(l(n,s)){const r=c(s)?_(e):d(e);return r.spatialReference=s,r}return p(f,[e],n,s,null,i)[0]}class b{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,s,i){if(!n||!n.length||!s||!i||h(s,i))return n;const r={geometries:n,inSpatialReference:s,outSpatialReference:i,resolve:null};return this._jobs.push(r),new Promise(a=>{r.resolve=a,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:s,inSpatialReference:i,outSpatialReference:r,resolve:a}=n;l(i,r)?c(r)?a(s.map(_)):a(s.map(d)):a(p(f,s,i,r,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const z=new b;function S(e,n,s){return z.push(e,n,s)}export{S as M,v as f,w as g};