import{_ as P}from"./preload-helper-388ac9d5.js";import{s as F,iN as M,bd as N,v as b,b as S,cL as _,cs as U,cK as A,du as G,ga as z,iO as E,iP as J,dk as k,iD as d,r as q,cw as B,cx as y,iQ as Z,cz as g,iR as p,cy as K,iS as j,iT as C}from"./main-5cf1c59e.js";import{f as x,g as $}from"./projectionSupport-215b6a73.js";const D=new F({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),w=Object.freeze({}),h=new g,I=new g,R=new g,m={esriGeometryPoint:p,esriGeometryPolyline:K,esriGeometryPolygon:j,esriGeometryMultipoint:C};function tt(t,a,r,n=t.hasZ,e=t.hasM){if(S(a))return null;const s=t.hasZ&&n,o=t.hasM&&e;if(r){const i=y(R,a,t.hasZ,t.hasM,"esriGeometryPoint",r,n,e);return p(i,s,o)}return p(a,s,o)}function it(t,a,r,n,e,s,o=a,i=r){const c=a&&o,l=r&&i,f=q(n)?"coords"in n?n:n.geometry:null;if(S(f))return null;if(e){let u=B(I,f,a,r,t,e,o,i);return s&&(u=y(R,u,c,l,t,s)),m[t]?.(u,c,l)??null}if(s){const u=y(R,f,a,r,t,s,o,i);return m[t]?.(u,c,l)??null}return Z(h,f,a,r,o,i),m[t]?.(h,c,l)??null}async function et(t,a,r){const{outFields:n,orderByFields:e,groupByFieldsForStatistics:s,outStatistics:o}=t;if(n)for(let i=0;i<n.length;i++)n[i]=n[i].trim();if(e)for(let i=0;i<e.length;i++)e[i]=e[i].trim();if(s)for(let i=0;i<s.length;i++)s[i]=s[i].trim();if(o)for(let i=0;i<o.length;i++)o[i].onStatisticField&&(o[i].onStatisticField=o[i].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),L(t,a,r)}async function L(t,a,r){if(!t)return null;let{where:n}=t;if(t.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||a&&a===n)&&(t.where=null),!t.geometry)return t;let e=await V(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=t.geometry;e=M(e),e.spatialReference=s}if(e){await x(e.spatialReference,r),e=T(e,r);const s=(await N(b(e)))[0];if(S(s))throw w;const o="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,i=o&&v(e,r)?{densificationStep:8*o}:void 0,c=s.toJSON(),l=await $(c,c.spatialReference,r,i);if(!l)throw w;l.spatialReference=r,t.geometry=l}return t}function v(t,a){if(!t)return!1;const r=t.spatialReference;return(_(t)||U(t)||A(t))&&!G(r,a)&&!z(r,a)}function T(t,a){const r=t.spatialReference;return v(t,a)&&_(t)?{spatialReference:r,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function V(t){const{distance:a,units:r}=t,n=t.geometry;if(a==null||"vertexAttributes"in n)return n;const e=n.spatialReference,s=r?D.fromJSON(r):E(e),o=e&&(J(e)||k(e))?n:await x(e,d).then(()=>$(n,d));return(await Q())(o.spatialReference,o,a,s)}async function Q(){return(await P(()=>import("./geometryEngineJSON-1fb2e5fd.js"),["./geometryEngineJSON-1fb2e5fd.js","./geometryEngineBase-807394fe.js","./geometryEngineJSON-24dd3ed7.js","./json-48e3ea08.js"],import.meta.url)).geodesicBuffer}function nt(t){return t&&O in t?JSON.parse(JSON.stringify(t,X)):t}const O="_geVersion",X=(t,a)=>t!==O?a:void 0;export{nt as E,w as F,L as J,tt as b,it as v,et as z};
