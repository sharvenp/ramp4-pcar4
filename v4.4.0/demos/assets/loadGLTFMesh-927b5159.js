import{r as u,U as G,ep as F,eq as R,b as T,er as h,es as M,et as B,eu as P,aX as D,t as q}from"./main-0e79698b.js";import{e as I}from"./mat3f64-221ce671.js";import{p as U,m as j,c as z,g as V}from"./meshFeatureSet-2eb79e70.js";import{c as N,x as O,L as X,O as L,i as _,E as k,T as K,u as Q}from"./BufferView-96d0c4c0.js";import{t as Y,r as Z,o as H,a as J,f as W,e as ee,n as te}from"./vec33-f2749258.js";import{n as re,m as oe,r as b,a as ne,f as se,t as E,b as ae,d as ie,o as ue,e as ce,c as le,i as fe,g as me,h as pe,j as $e}from"./DefaultMaterial_COLOR_GAMMA-1d223339.js";import{_ as de}from"./georeference-483f3771.js";import{t as xe}from"./resourceUtils-a8ed8f9e.js";import{u as ge}from"./Indices-512fb23f.js";import{E as A,D as C}from"./enums-64ab819c.js";import"./preload-helper-388ac9d5.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-61f7b102.js";import"./deduplicate-70067c74.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-0743e646.js";import"./types-e1c0a5bf.js";import"./quat-b9b57ea4.js";import"./quatf64-3363c48e.js";import"./basicInterfaces-b7051eb1.js";async function Ze(e,t,n){const s=new re(Te(n)),r=(await oe(s,t,n,!0)).model,m=r.lods.shift(),c=new Map,l=new Map;r.textures.forEach((g,y)=>c.set(y,ve(g))),r.materials.forEach((g,y)=>l.set(y,we(g,c)));const i=be(m);for(const g of i.parts)ye(i,g,l);const{position:$,normal:f,tangent:o,color:a,texCoord0:p}=i.vertexAttributes,x={position:$.typedBuffer,normal:u(f)?f.typedBuffer:null,tangent:u(o)?o.typedBuffer:null,uv:u(p)?p.typedBuffer:null,color:u(a)?a.typedBuffer:null},w=de(x,e,n);return{transform:w.transform,components:i.components,spatialReference:e.spatialReference,vertexAttributes:new U({position:w.vertexAttributes.position,normal:w.vertexAttributes.normal,tangent:w.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function Te(e){const t=e?.resolveFile;return t?{busy:!1,request:async(n,s,r)=>{const m=t(n);return(await G(m,{responseType:s==="image"?"image":s==="binary"?"array-buffer":"json",signal:u(r)?r.signal:null})).data}}:null}function v(e,t){if(q(e))return"-";const n=e.typedBuffer;return`${F(t,n.buffer,()=>t.size)}/${n.byteOffset}/${n.byteLength}`}function he(e){return u(e)?e.toString():"-"}function be(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,r=new Map,m=[];for(const c of e.parts){const{attributes:{position:l,normal:i,color:$,tangent:f,texCoord0:o}}=c,a=`
      ${v(l,s)}/
      ${v(i,s)}/
      ${v($,s)}/
      ${v(f,s)}/
      ${v(o,s)}/
      ${he(c.transform)}
    `;let p=!1;const x=F(r,a,()=>(p=!0,{start:t,length:l.count}));p&&(t+=l.count),i&&(n.normal=!0),$&&(n.color=!0),f&&(n.tangent=!0),o&&(n.texCoord0=!0),m.push({gltf:c,writeVertices:p,region:x})}return{vertexAttributes:{position:b(K,t),normal:n.normal?b(_,t):null,tangent:n.tangent?b(N,t):null,color:n.color?b(O,t):null,texCoord0:n.texCoord0?b(Q,t):null},parts:m,components:[]}}function ve(e){return new j({data:(xe(e.data),e.data),wrap:Re(e.parameters.wrap)})}function we(e,t){const n=new R(Me(e.color,e.opacity)),s=e.emissiveFactor?new R(Be(e.emissiveFactor)):null;return new z({color:n,colorTexture:T(h(e.textureColor,r=>t.get(r))),normalTexture:T(h(e.textureNormal,r=>t.get(r))),emissiveColor:s,emissiveTexture:T(h(e.textureEmissive,r=>t.get(r))),occlusionTexture:T(h(e.textureOcclusion,r=>t.get(r))),alphaMode:Ce(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:T(h(e.textureMetallicRoughness,r=>t.get(r))),colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform})}function ye(e,t,n){t.writeVertices&&Ee(e,t);const s=t.gltf,r=Ae(s.indices||s.attributes.position.count,s.primitiveType),m=t.region.start;if(m)for(let c=0;c<r.length;c++)r[c]+=m;e.components.push(new V({faces:r,material:n.get(s.material),trustSourceNormals:!0}))}function Ee(e,t){const{position:n,normal:s,tangent:r,color:m,texCoord0:c}=e.vertexAttributes,l=t.region.start,{attributes:i,transform:$}=t.gltf,f=i.position.count;if(Y(n.slice(l,f),i.position,$),u(i.normal)&&u(s)){const o=M(I(),$),a=s.slice(l,f);Z(a,i.normal,o),B(o)&&H(a,a)}else u(s)&&J(s,0,0,1,{dstIndex:l,count:f});if(u(i.tangent)&&u(r)){const o=M(I(),$),a=r.slice(l,f);ne(a,i.tangent,o),B(o)&&se(a,a)}else u(r)&&E(r,0,0,1,1,{dstIndex:l,count:f});if(u(i.texCoord0)&&u(c)?ae(c.slice(l,f),i.texCoord0):u(c)&&ie(c,0,0,{dstIndex:l,count:f}),u(i.color)&&u(m)){const o=i.color,a=m.slice(l,f);if(o.elementCount===4)o instanceof N?ue(a,o,255):o instanceof O?ce(a,o):o instanceof X&&le(a,o,8);else{E(a,255,255,255,255);const p=L.fromTypedArray(a.typedBuffer,a.typedBufferStride);o instanceof _?W(p,o,255):o instanceof L?ee(p,o):o instanceof k&&te(p,o,8)}}else u(m)&&E(m.slice(l,f),255,255,255,255)}function Ae(e,t){switch(t){case A.TRIANGLES:return pe(e,ge);case A.TRIANGLE_STRIP:return me(e);case A.TRIANGLE_FAN:return fe(e)}}function Ce(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Re(e){return{horizontal:S(e.s),vertical:S(e.t)}}function S(e){switch(e){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function d(e){return e**(1/$e)*255}function Me(e,t){return P(d(e[0]),d(e[1]),d(e[2]),t)}function Be(e){return D(d(e[0]),d(e[1]),d(e[2]))}export{Ze as loadGLTFMesh};