import{e as a,y as s,k as F,dF as J,t as d,fe as p,b as M,ei as N,bi as O,r as c,ff as g,fg as x,fh as z,fi as f,ax as $,fj as b,aw as m,aW as V}from"./main-83b7c6ef.js";import{a as W}from"./normalizeUtilsSync-2d2f9847.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends J{constructor(e){super(e)}get bounds(){const e=this.coords;return d(e)||d(e.extent)?null:p(e.extent)}get coords(){const e=M(this.element.georeference)?.coords;return N(e,this.spatialReference).geometry}get normalizedCoords(){return O.fromJSON(W(this.coords))}get normalizedBounds(){const e=c(this.normalizedCoords)?this.normalizedCoords.extent:null;return c(e)?p(e):null}};a([s()],n.prototype,"spatialReference",void 0),a([s()],n.prototype,"element",void 0),a([s()],n.prototype,"bounds",null),a([s()],n.prototype,"coords",null),a([s()],n.prototype,"normalizedCoords",null),a([s()],n.prototype,"normalizedBounds",null),n=a([F("esri.layers.support.MediaElementView")],n);const t=V(),i=u(),l=u(),y=u();function G(e,o,r){return g(t,o[0],o[1],1),x(t,t,z(i,r)),t[2]===0?f(e,t[0],t[1]):f(e,t[0]/t[2],t[1]/t[2])}function H(e,o,r){return h(l,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),h(y,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),$(e,b(l,l),y),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function h(e,o,r,v,C,j,k,w,B){m(e,o,v,j,r,C,k,1,1,1),g(t,w,B,1),b(i,e);const[R,S,E]=x(t,t,z(i,i));return m(i,R,0,0,0,S,0,0,0,E),$(e,i,e)}export{G as h,H as j,n as u};