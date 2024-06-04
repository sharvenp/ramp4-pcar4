import{_ as M}from"./preload-helper-388ac9d5.js";import{s as O,cA as P,bd as b,v as A,t as g,ag as _,ah as E,ai as G,ar as N,bE as U,cB as J,cC as B,ac as q,cD as h,r as z,cE as Z,cF as y,cG as k,cH as S,cI as p,cJ as C,cK as I,cL as K}from"./main-83b7c6ef.js";import{f as x,g as $}from"./projectionSupport-bba819ba.js";const j=new O({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),w=Object.freeze({}),d=new S,D=new S,R=new S,m={esriGeometryPoint:p,esriGeometryPolyline:C,esriGeometryPolygon:I,esriGeometryMultipoint:K};function tt(t,a,r,n=t.hasZ,e=t.hasM){if(g(a))return null;const s=t.hasZ&&n,o=t.hasM&&e;if(r){const i=y(R,a,t.hasZ,t.hasM,"esriGeometryPoint",r,n,e);return p(i,s,o)}return p(a,s,o)}function it(t,a,r,n,e,s,o=a,i=r){const c=a&&o,l=r&&i,f=z(n)?"coords"in n?n:n.geometry:null;if(g(f))return null;if(e){let u=Z(D,f,a,r,t,e,o,i);return s&&(u=y(R,u,c,l,t,s)),m[t]?.(u,c,l)??null}if(s){const u=y(R,f,a,r,t,s,o,i);return m[t]?.(u,c,l)??null}return k(d,f,a,r,o,i),m[t]?.(d,c,l)??null}async function et(t,a,r){const{outFields:n,orderByFields:e,groupByFieldsForStatistics:s,outStatistics:o}=t;if(n)for(let i=0;i<n.length;i++)n[i]=n[i].trim();if(e)for(let i=0;i<e.length;i++)e[i]=e[i].trim();if(s)for(let i=0;i<s.length;i++)s[i]=s[i].trim();if(o)for(let i=0;i<o.length;i++)o[i].onStatisticField&&(o[i].onStatisticField=o[i].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),L(t,a,r)}async function L(t,a,r){if(!t)return null;let{where:n}=t;if(t.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||a&&a===n)&&(t.where=null),!t.geometry)return t;let e=await H(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=t.geometry;e=P(e),e.spatialReference=s}if(e){await x(e.spatialReference,r),e=V(e,r);const s=(await b(A(e)))[0];if(g(s))throw w;const o="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,i=o&&v(e,r)?{densificationStep:8*o}:void 0,c=s.toJSON(),l=await $(c,c.spatialReference,r,i);if(!l)throw w;l.spatialReference=r,t.geometry=l}return t}function v(t,a){if(!t)return!1;const r=t.spatialReference;return(_(t)||E(t)||G(t))&&!N(r,a)&&!U(r,a)}function V(t,a){const r=t.spatialReference;return v(t,a)&&_(t)?{spatialReference:r,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function H(t){const{distance:a,units:r}=t,n=t.geometry;if(a==null||"vertexAttributes"in n)return n;const e=n.spatialReference,s=r?j.fromJSON(r):J(e),o=e&&(B(e)||q(e))?n:await x(e,h).then(()=>$(n,h));return(await T())(o.spatialReference,o,a,s)}async function T(){return(await M(()=>import("./geometryEngineJSON-e42ff21a.js").then(t=>t.g),["./geometryEngineJSON-e42ff21a.js","./geometryEngineBase-807394fe.js","./json-48e3ea08.js"],import.meta.url)).geodesicBuffer}function nt(t){return t&&F in t?JSON.parse(JSON.stringify(t,X)):t}const F="_geVersion",X=(t,a)=>t!==F?a:void 0;export{nt as E,w as F,L as J,tt as b,it as v,et as z};
