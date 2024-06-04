import{e0 as z,r as G}from"./main-5cf1c59e.js";import{_ as q}from"./preload-helper-388ac9d5.js";import"./sphere-95480f68.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";var w,v;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(w||(w={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(v||(v={}));function J(){return U||(U=new Promise(e=>q(()=>import("./i3s-608d071b.js"),[],import.meta.url).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:K,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),U}function K(e){return z(`esri/libs/i3s/${e}`)}let U;var O,h,D,N,x;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(O||(O={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(h||(h={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(D||(D={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(N||(N={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(x||(x={}));async function re(e){await E();const t=[e.geometryBuffer];return{result:B(e,t),transferList:t}}async function ie(e){await E();const t=[e.geometryBuffer],{geometryBuffer:r}=e,f=r.byteLength,i=o._malloc(f),u=new Uint8Array(o.HEAPU8.buffer,i,f);u.set(new Uint8Array(r));const s=o.dracoDecompressPointCloudData(i,u.byteLength);if(o._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const p=s.featureIds?.length>0?s.featureIds.slice():null,y=s.positions.slice();return p&&t.push(p.buffer),t.push(y.buffer),{result:{positions:y,featureIds:p},transferList:t}}async function se(e){await E(),W(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function ae(e){await E(),Q(e)}async function fe(e){await E(),o.setLegacySchema(e.context,e.jsonSchema)}function ce(e){$(e)}let g,o;function Q(e){const t=e.modifications,r=o._malloc(8*t.length),f=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function B(e,t){if(!o)return null;const{context:r,localOrigin:f,globalTrafo:i,mbs:u,obb:s,elevationOffset:p,geometryBuffer:y,geometryDescriptor:k,indexToVertexProjector:H,vertexToRenderProjector:Y}=e,_=o._malloc(y.byteLength),P=33,L=o._malloc(P*Float64Array.BYTES_PER_ELEMENT),T=new Uint8Array(o.HEAPU8.buffer,_,y.byteLength);T.set(new Uint8Array(y));const a=new Float64Array(o.HEAPU8.buffer,L,P);b(a,f);let c=a.byteOffset+3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c);b(l,i),c+=16*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),b(l,u),c+=4*a.BYTES_PER_ELEMENT,G(s)&&(l=new Float64Array(a.buffer,c),b(l,s.center),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),b(l,s.halfSize),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),b(l,s.quaternion));const F=k,V={isDraco:!1,isLegacy:!1,color:e.layouts.some(d=>d.some(m=>m.name==="color")),normal:e.needNormals&&e.layouts.some(d=>d.some(m=>m.name==="normalCompressed")),uv0:e.layouts.some(d=>d.some(m=>m.name==="uv0")),uvRegion:e.layouts.some(d=>d.some(m=>m.name==="uvRegion")),featureIndex:F.featureIndex},n=o.process(r,!!e.obb,_,T.byteLength,F,V,L,p,H,Y,e.normalReferenceFrame);if(o._free(L),o._free(_),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;const A=n.componentOffsets.length>0?n.componentOffsets.slice():null,I=n.featureIds.length>0?n.featureIds.slice():null,R=n.interleavedVertedData.slice().buffer,M=n.indicesType===w.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),S=n.positions.slice(),C=n.positionIndicesType===w.Int16?new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2).slice():new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4).slice(),j={layout:e.layouts[0],interleavedVertexData:R,indices:M,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:S,indices:C}};return I&&t.push(I.buffer),A&&t.push(A.buffer),t.push(R),t.push(M.buffer),t.push(S.buffer),t.push(C.buffer),{componentOffsets:A,featureIds:I,transformedGeometry:j,obb:n.obb}}function le(e){return e===0?h.Unmodified:e===1?h.PotentiallyModified:e===2?h.Culled:h.Unknown}function W(e){const{context:t,buffer:r}=e,f=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(o.HEAPU8.buffer,f,i),s=new Float64Array(r);u.set(s),o.filterOBBs(t,f,i),s.set(u),o._free(f)}function $(e){o&&o.destroy(e)}function b(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function E(){return o?Promise.resolve():(g||(g=J().then(e=>{o=e,g=null})),g)}const ue={transform:B,destroy:$};export{ce as destroyContext,ie as dracoDecompressPointCloudData,se as filterObbsForModifications,W as filterObbsForModificationsSync,E as initialize,le as interpretObbModificationResults,re as process,fe as setLegacySchema,ae as setModifications,Q as setModificationsSync,ue as test};