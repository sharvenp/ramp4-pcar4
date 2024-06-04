import{_ as $}from"./preload-helper.387dac8f.js";import{Y as U,hT as G,L as N,a2 as O,i as g,hZ as P,h_ as Z,cD as b,hE as R,c1 as p,e as v,bY as J,bZ as y,h$ as B,i0 as h,b_ as E,i1 as x,i2 as L}from"./main.efb50b2c.js";import{f as d,g as F}from"./projectionSupport.a2ec70ff.js";const j=new U({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),_=Object.freeze({}),w=new p,k=new p,S=new p,m={esriGeometryPoint:h,esriGeometryPolyline:E,esriGeometryPolygon:x,esriGeometryMultipoint:L};function C(t,r,a,n=t.hasZ,i=t.hasM){if(g(r))return null;const o=t.hasZ&&n,s=t.hasM&&i;if(a){const e=y(S,r,t.hasZ,t.hasM,"esriGeometryPoint",a,n,i);return h(e,o,s)}return h(r,o,s)}function K(t,r,a,n,i,o,s=r,e=a){const l=r&&s,u=a&&e,f=v(n)?"coords"in n?n:n.geometry:null;if(g(f))return null;if(i){let c=J(k,f,r,a,t,i,s,e);return o&&(c=y(S,c,l,u,t,o)),m[t](c,l,u)}if(o){const c=y(S,f,r,a,t,o,s,e);return m[t](c,l,u)}return B(w,f,r,a,s,e),m[t](w,l,u)}async function q(t,r,a){const{outFields:n,orderByFields:i,groupByFieldsForStatistics:o,outStatistics:s}=t;if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(o)for(let e=0;e<o.length;e++)o[e]=o[e].trim();if(s)for(let e=0;e<s.length;e++)s[e].onStatisticField&&(s[e].onStatisticField=s[e].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),z(t,r,a)}async function z(t,r,a){if(!t)return null;let{where:n}=t;if(t.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||r&&r===n)&&(t.where=null),!t.geometry)return t;let i=await A(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:l}=t.geometry;i=G(i),i.spatialReference=l}t.geometry=i,await d(i.spatialReference,a);const o=(await N(O(i)))[0];if(g(o))throw _;const s=o.toJSON(),e=await F(s,s.spatialReference,a);if(!e)throw _;return e.spatialReference=a,t.geometry=e,t}async function A(t){const{geometry:r,distance:a,units:n}=t;if(a==null||"vertexAttributes"in r)return r;const i=r.spatialReference,o=n?j.fromJSON(n):P(i),s=i&&(Z(i)||b(i))?r:await d(i,R).then(()=>F(r,R));return(await D())(s.spatialReference,s,a,o)}async function D(){return(await $(()=>import("./geometryEngineJSON.2762c1dd.js"),["assets/geometryEngineJSON.2762c1dd.js","assets/geometryEngineBase.f43341a0.js","assets/geometryEngineJSON.d3fb0de1.js","assets/json.d1a0fa35.js"])).geodesicBuffer}function H(t){return t&&M in t?JSON.parse(JSON.stringify(t,I)):t}const M="_geVersion",I=(t,r)=>t!==M?r:void 0;export{K as J,C as O,q as P,_ as U,z as v,H as x};