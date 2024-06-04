import{_ as p}from"./preload-helper-388ac9d5.js";import{iU as h,f as n,r as a,U as d,l0 as b,l1 as w,af as v,gn as z,l2 as g}from"./main-bbf05f59.js";let i=c();function c(){return new h(50)}function I(){i=c()}function P(e,r){if(e.type==="icon")return l(e,r);if(e.type==="object")return y(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function O(e,r){if(e.type==="icon")return _(e,r);if(e.type==="object")return L(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,r){if(e.resource?.href)return j(e.resource.href).then(t=>[t.width,t.height]);if(e.resource?.primitive)return a(r)?[r,r]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(e,r){return l(e,r).then(t=>{if(e.size==null)return t;const o=t[0]/t[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]})}function j(e){return d(e,{responseType:"image"}).then(r=>r.data)}function y(e,r){return B(e,r).then(t=>b(t))}async function L(e,r){const t=await y(e,r);return w(t,e)}async function B(e,r){if(!e.isPrimitive){const o=v(e.resource?.href),s=i.get(o);if(s!==void 0)return s;const f=await p(()=>import("./objectResourceUtils-b381bae6.js").then(m=>m.o),["./objectResourceUtils-b381bae6.js","./devEnvironmentUtils-f2a1f21e.js","./main-bbf05f59.js","./preload-helper-388ac9d5.js","./main-a75f83d6.css","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-246ab3ce.js","./vec33-6f5e76d5.js","./DefaultMaterial_COLOR_GAMMA-7eded577.js","./types-e1c0a5bf.js","./enums-64ab819c.js","./quat-af809cba.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./basicInterfaces-b7051eb1.js","./Indices-601f8204.js","./NestedMap-7c434b47.js","./requestImageUtils-4fd34acd.js","./sphere-6c5bce5f.js","./lineSegment-ba5a6c0f.js","./VertexAttribute-15d1866a.js","./OrderIndependentTransparency-e1b3a745.js","./Texture-c32f2268.js","./VertexArrayObject-33fa1b3b.js","./VertexElementDescriptor-2925c6af.js","./InterleavedLayout-664ab227.js","./vec3f32-ad1dc57f.js","./doublePrecisionUtils-e3c3d0d8.js","./symbolColorUtils-09698eb9.js"],import.meta.url),u=await f.fetch(o,{disableTextures:!0});return i.put(o,u.referenceBoundingBox),u.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=z(g(e.resource.primitive)),a(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}export{I as clearBoundingBoxCache,l as computeIconLayerResourceSize,P as computeLayerResourceSize,O as computeLayerSize,y as computeObjectLayerResourceSize};
