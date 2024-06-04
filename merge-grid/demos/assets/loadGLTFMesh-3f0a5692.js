import{r as u,U as _,fw as F,bj as R,d as T,cV as h,eA as M,o0 as B,kC as P,bG as D,b as j}from"./main-917dc16a.js";import{e as I}from"./mat3f64-221ce671.js";import{p as U,m as V,c as k,g as q}from"./meshFeatureSet-de4ba49b.js";import{c as N,x as G,L as z,O as L,i as O,E as K,T as Q,u as X}from"./BufferView-e9248713.js";import{t as Y,r as Z,o as H,a as J,f as W,e as ee,n as te}from"./vec33-245d3381.js";import{n as re,m as oe,r as b,a as ne,f as se,t as A,b as ae,d as ie,o as ue,e as ce,c as le,i as fe,g as me,h as pe,j as de}from"./DefaultMaterial_COLOR_GAMMA-38c83330.js";import{_ as $e}from"./georeference-bebde61d.js";import{t as xe}from"./resourceUtils-a8ed8f9e.js";import{u as ge}from"./Indices-e6d45433.js";import{E,D as C}from"./enums-64ab819c.js";import"./preload-helper-388ac9d5.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-61f7b102.js";import"./deduplicate-9e6e3f18.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-196741fe.js";import"./types-e1c0a5bf.js";import"./quat-e27d0ad2.js";import"./quatf64-3363c48e.js";import"./basicInterfaces-b7051eb1.js";async function Ze(e,t,n){const s=new re(Te(n)),r=(await oe(s,t,n,!0)).model,m=r.lods.shift(),c=new Map,l=new Map;r.textures.forEach((g,y)=>c.set(y,we(g))),r.materials.forEach((g,y)=>l.set(y,ve(g,c)));const i=be(m);for(const g of i.parts)ye(i,g,l);const{position:d,normal:f,tangent:o,color:a,texCoord0:p}=i.vertexAttributes,x={position:d.typedBuffer,normal:u(f)?f.typedBuffer:null,tangent:u(o)?o.typedBuffer:null,uv:u(p)?p.typedBuffer:null,color:u(a)?a.typedBuffer:null},v=$e(x,e,n);return{transform:v.transform,components:i.components,spatialReference:e.spatialReference,vertexAttributes:new U({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function Te(e){const t=e?.resolveFile;return t?{busy:!1,request:async(n,s,r)=>{const m=t(n);return(await _(m,{responseType:s==="image"?"image":s==="binary"?"array-buffer":"json",signal:u(r)?r.signal:null})).data}}:null}function w(e,t){if(j(e))return"-";const n=e.typedBuffer;return`${F(t,n.buffer,()=>t.size)}/${n.byteOffset}/${n.byteLength}`}function he(e){return u(e)?e.toString():"-"}function be(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,r=new Map,m=[];for(const c of e.parts){const{attributes:{position:l,normal:i,color:d,tangent:f,texCoord0:o}}=c,a=`
      ${w(l,s)}/
      ${w(i,s)}/
      ${w(d,s)}/
      ${w(f,s)}/
      ${w(o,s)}/
      ${he(c.transform)}
    `;let p=!1;const x=F(r,a,()=>(p=!0,{start:t,length:l.count}));p&&(t+=l.count),i&&(n.normal=!0),d&&(n.color=!0),f&&(n.tangent=!0),o&&(n.texCoord0=!0),m.push({gltf:c,writeVertices:p,region:x})}return{vertexAttributes:{position:b(Q,t),normal:n.normal?b(O,t):null,tangent:n.tangent?b(N,t):null,color:n.color?b(G,t):null,texCoord0:n.texCoord0?b(X,t):null},parts:m,components:[]}}function we(e){return new V({data:(xe(e.data),e.data),wrap:Re(e.parameters.wrap)})}function ve(e,t){const n=new R(Me(e.color,e.opacity)),s=e.emissiveFactor?new R(Be(e.emissiveFactor)):null;return new k({color:n,colorTexture:T(h(e.textureColor,r=>t.get(r))),normalTexture:T(h(e.textureNormal,r=>t.get(r))),emissiveColor:s,emissiveTexture:T(h(e.textureEmissive,r=>t.get(r))),occlusionTexture:T(h(e.textureOcclusion,r=>t.get(r))),alphaMode:Ce(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:T(h(e.textureMetallicRoughness,r=>t.get(r))),colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform})}function ye(e,t,n){t.writeVertices&&Ae(e,t);const s=t.gltf,r=Ee(s.indices||s.attributes.position.count,s.primitiveType),m=t.region.start;if(m)for(let c=0;c<r.length;c++)r[c]+=m;e.components.push(new q({faces:r,material:n.get(s.material),trustSourceNormals:!0}))}function Ae(e,t){const{position:n,normal:s,tangent:r,color:m,texCoord0:c}=e.vertexAttributes,l=t.region.start,{attributes:i,transform:d}=t.gltf,f=i.position.count;if(Y(n.slice(l,f),i.position,d),u(i.normal)&&u(s)){const o=M(I(),d),a=s.slice(l,f);Z(a,i.normal,o),B(o)&&H(a,a)}else u(s)&&J(s,0,0,1,{dstIndex:l,count:f});if(u(i.tangent)&&u(r)){const o=M(I(),d),a=r.slice(l,f);ne(a,i.tangent,o),B(o)&&se(a,a)}else u(r)&&A(r,0,0,1,1,{dstIndex:l,count:f});if(u(i.texCoord0)&&u(c)?ae(c.slice(l,f),i.texCoord0):u(c)&&ie(c,0,0,{dstIndex:l,count:f}),u(i.color)&&u(m)){const o=i.color,a=m.slice(l,f);if(o.elementCount===4)o instanceof N?ue(a,o,255):o instanceof G?ce(a,o):o instanceof z&&le(a,o,8);else{A(a,255,255,255,255);const p=L.fromTypedArray(a.typedBuffer,a.typedBufferStride);o instanceof O?W(p,o,255):o instanceof L?ee(p,o):o instanceof K&&te(p,o,8)}}else u(m)&&A(m.slice(l,f),255,255,255,255)}function Ee(e,t){switch(t){case E.TRIANGLES:return pe(e,ge);case E.TRIANGLE_STRIP:return me(e);case E.TRIANGLE_FAN:return fe(e)}}function Ce(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Re(e){return{horizontal:S(e.s),vertical:S(e.t)}}function S(e){switch(e){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function $(e){return e**(1/de)*255}function Me(e,t){return P($(e[0]),$(e[1]),$(e[2]),t)}function Be(e){return D($(e[0]),$(e[1]),$(e[2]))}export{Ze as loadGLTFMesh};
