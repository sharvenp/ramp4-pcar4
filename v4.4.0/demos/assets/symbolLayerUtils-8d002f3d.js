import{_ as p}from"./preload-helper-388ac9d5.js";import{dt as d,c as n,r as a,U as h,du as b,dv as w,K as v,bP as z,dw as _}from"./main-0e79698b.js";let i=c();function c(){return new d(50)}function x(){i=c()}function I(e,r){if(e.type==="icon")return y(e,r);if(e.type==="object")return l(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function O(e,r){if(e.type==="icon")return g(e,r);if(e.type==="object")return L(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function y(e,r){if(e.resource?.href)return j(e.resource.href).then(t=>[t.width,t.height]);if(e.resource?.primitive)return a(r)?[r,r]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e,r){return y(e,r).then(t=>{if(e.size==null)return t;const o=t[0]/t[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]})}function j(e){return h(e,{responseType:"image"}).then(r=>r.data)}function l(e,r){return B(e,r).then(t=>b(t))}async function L(e,r){const t=await l(e,r);return w(t,e)}async function B(e,r){if(!e.isPrimitive){const o=v(e.resource?.href),s=i.get(o);if(s!==void 0)return s;const f=await p(()=>import("./objectResourceUtils-82df9363.js").then(m=>m.o),["./objectResourceUtils-82df9363.js","./devEnvironmentUtils-f2a1f21e.js","./main-0e79698b.js","./preload-helper-388ac9d5.js","./main-a75f83d6.css","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-96d0c4c0.js","./vec33-f2749258.js","./DefaultMaterial_COLOR_GAMMA-1d223339.js","./types-e1c0a5bf.js","./enums-64ab819c.js","./quat-b9b57ea4.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./basicInterfaces-b7051eb1.js","./Indices-512fb23f.js","./NestedMap-7c434b47.js","./requestImageUtils-4be56d3f.js","./sphere-3864607a.js","./lineSegment-2650954b.js","./VertexAttribute-15d1866a.js","./OrderIndependentTransparency-e1b3a745.js","./Texture-e6a6934e.js","./VertexArrayObject-0efe5607.js","./VertexElementDescriptor-2925c6af.js","./InterleavedLayout-a6339aab.js","./vec3f32-ad1dc57f.js","./doublePrecisionUtils-e3c3d0d8.js","./symbolColorUtils-2e536238.js"],import.meta.url),u=await f.fetch(o,{disableTextures:!0});return i.put(o,u.referenceBoundingBox),u.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=z(_(e.resource.primitive)),a(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}export{x as clearBoundingBoxCache,y as computeIconLayerResourceSize,I as computeLayerResourceSize,O as computeLayerSize,l as computeObjectLayerResourceSize};