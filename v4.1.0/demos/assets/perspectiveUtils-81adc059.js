import{e as a,y as s,n as F,c7 as J,b as u,f4 as c,d as M,gv as N,bF as O,r as p,az as h,bv as v,ev as x,c2 as m,dW as z,gw as b,dZ as f,ax as V}from"./main-e6c796d9.js";import{a as W}from"./normalizeUtilsSync-db04ca77.js";import{e as i}from"./mat3f64-221ce671.js";let n=class extends J{constructor(e){super(e)}get bounds(){const e=this.coords;return u(e)||u(e.extent)?null:c(e.extent)}get coords(){const e=M(this.element.georeference)?.coords;return N(e,this.spatialReference).geometry}get normalizedCoords(){return O.fromJSON(W(this.coords))}get normalizedBounds(){const e=p(this.normalizedCoords)?this.normalizedCoords.extent:null;return p(e)?c(e):null}};a([s()],n.prototype,"spatialReference",void 0),a([s()],n.prototype,"element",void 0),a([s()],n.prototype,"bounds",null),a([s()],n.prototype,"coords",null),a([s()],n.prototype,"normalizedCoords",null),a([s()],n.prototype,"normalizedBounds",null),n=a([F("esri.layers.support.MediaElementView")],n);const t=V(),l=i(),d=i(),y=i();function D(e,o,r){return h(t,o[0],o[1],1),v(t,t,x(l,r)),t[2]===0?m(e,t[0],t[1]):m(e,t[0]/t[2],t[1]/t[2])}function G(e,o,r){return g(d,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),g(y,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),z(e,b(d,d),y),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function g(e,o,r,$,C,w,B,R,S){f(e,o,$,w,r,C,B,1,1,1),h(t,R,S,1),b(l,e);const[j,k,E]=v(t,t,x(l,l));return f(l,j,0,0,0,k,0,0,0,E),z(e,l,e)}export{D as h,G as j,n as u};
