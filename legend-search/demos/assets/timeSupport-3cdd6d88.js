import{_ as N}from"./preload-helper-388ac9d5.js";import{iY as w,iZ as E,cs as S,dY as I,cL as m,i_ as T,i$ as _,cz as v,f as R,dt as G,cq as q}from"./main-95e6e76d.js";import{f as $}from"./projectionSupport-8db80048.js";import{v as f}from"./utils-9d5edc3a.js";function C(e){return e==="mesh"?w:E(e)}function P(e,t){return e?t?4:3:t?3:2}function M(e,t,i,r){return b(e,t,i,r.coords[0],r.coords[1])}function F(e,t,i,r,s,n){const l=P(s,n),{coords:a,lengths:u}=r;if(!u)return!1;for(let o=0,c=0;o<u.length;o++,c+=l)if(!b(e,t,i,a[c],a[c+1]))return!1;return!0}function b(e,t,i,r,s){if(!e)return!1;const n=P(t,i),{coords:l,lengths:a}=e;let u=!1,o=0;for(const c of a)u=x(u,l,n,o,c,r,s),o+=c*n;return u}function x(e,t,i,r,s,n,l){let a=e,u=r;for(let o=r,c=r+s*i;o<c;o+=i){u=o+i,u===c&&(u=r);const h=t[o],p=t[o+1],A=t[u],y=t[u+1];(p<l&&y>=l||y<l&&p>=l)&&h+(l-p)/(y-p)*(A-h)<n&&(a=!a)}return a}const d="feature-store:unsupported-query",j={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function O(e){return e!=null&&g.spatialRelationship[e]===!0}function Y(e){return e!=null&&g.queryGeometry[q(e)]===!0}function D(e){return e!=null&&g.layerGeometry[e]===!0}function U(){return N(()=>import("./geometryEngineJSON-1fb2e5fd.js"),["./geometryEngineJSON-1fb2e5fd.js","./geometryEngineBase-807394fe.js","./geometryEngineJSON-24dd3ed7.js","./json-48e3ea08.js"],import.meta.url)}function H(e,t,i,r,s){if(S(t)&&i==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const n=I(new v,t,!1,!1);return Promise.resolve(l=>M(n,!1,!1,l))}if(S(t)&&i==="esriGeometryMultipoint"){const n=I(new v,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>F(n,!1,!1,l,r,s))}if(m(t)&&i==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(n=>T(t,f(i,r,s,n)));if(m(t)&&i==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(n=>_(t,f(i,r,s,n)));if(m(t)&&e==="esriSpatialRelIntersects"){const n=C(i);return Promise.resolve(l=>n(t,f(i,r,s,l)))}return U().then(n=>{const l=n[j[e]].bind(null,t.spatialReference,t);return a=>l(f(i,r,s,a))})}async function J(e,t,i){const{spatialRel:r,geometry:s}=e;if(s){if(!O(r))throw new R(d,"Unsupported query spatial relationship",{query:e});if(G(s.spatialReference)&&G(i)){if(!Y(s))throw new R(d,"Unsupported query geometry type",{query:e});if(!D(t))throw new R(d,"Unsupported layer geometry type",{query:e});if(e.outSR)return $(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function K(e){if(m(e))return!0;if(S(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Q(e,t){if(!e)return null;const i=t.featureAdapter,{startTimeField:r,endTimeField:s}=e;let n=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&s)await t.forEach(a=>{const u=i.getAttribute(a,r),o=i.getAttribute(a,s);u==null||isNaN(u)||(n=Math.min(n,u)),o==null||isNaN(o)||(l=Math.max(l,o))});else{const a=r||s;await t.forEach(u=>{const o=i.getAttribute(u,a);o==null||isNaN(o)||(n=Math.min(n,o),l=Math.max(l,o))})}return{start:n,end:l}}function X(e,t,i){if(!t||!e)return null;const{startTimeField:r,endTimeField:s}=e;if(!r&&!s)return null;const{start:n,end:l}=t;return n===null&&l===null?null:n===void 0&&l===void 0?L():r&&s?V(i,r,s,n,l):W(i,r||s,n,l)}function V(e,t,i,r,s){return r!=null&&s!=null?n=>{const l=e.getAttribute(n,t),a=e.getAttribute(n,i);return(l==null||l<=s)&&(a==null||a>=r)}:r!=null?n=>{const l=e.getAttribute(n,i);return l==null||l>=r}:s!=null?n=>{const l=e.getAttribute(n,t);return l==null||l<=s}:void 0}function W(e,t,i,r){return i!=null&&r!=null&&i===r?s=>e.getAttribute(s,t)===i:i!=null&&r!=null?s=>{const n=e.getAttribute(s,t);return n>=i&&n<=r}:i!=null?s=>e.getAttribute(s,t)>=i:r!=null?s=>e.getAttribute(s,t)<=r:void 0}function L(){return()=>!1}export{K as I,J as P,X as n,Q as t,H as v};
