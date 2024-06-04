import{dj as G,k0 as c,e as q}from"./main.4cbfea05.js";import{_ as J}from"./preload-helper.387dac8f.js";import"./sphere.16b64c71.js";import"./vectorStacks.9461a4b2.js";import"./quatf64.ddec7ef6.js";import"./mat4f64.a79dd289.js";var _,v;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(_||(_={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(v||(v={}));function K(){return P||(P=new Promise(e=>J(()=>import("./i3s.b1c4fa13.js"),[]).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:Q,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),P}function Q(e){return G(`esri/libs/i3s/${e}`)}let P;var D,p,N,x,B;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(D||(D={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(p||(p={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(N||(N={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(x||(x={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(B||(B={}));async function ie(e){await g();const t=[e.geometryBuffer];return{result:$(e,t),transferList:t}}async function se(e){await g();const t=[e.geometryBuffer],{geometryBuffer:r}=e,f=r.byteLength,i=o._malloc(f),d=new Uint8Array(o.HEAPU8.buffer,i,f);d.set(new Uint8Array(r));const s=o.dracoDecompressPointCloudData(i,d.byteLength);if(o._free(i),s.error.length>0)throw`i3s.wasm: ${s.error}`;const E=s.featureIds?.length>0?c(s.featureIds):null,b=c(s.positions);return E&&t.push(E.buffer),t.push(b.buffer),{result:{positions:b,featureIds:E},transferList:t}}async function ae(e){await g(),X(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function fe(e){await g(),W(e)}async function ce(e){await g(),o.setLegacySchema(e.context,e.jsonSchema)}function ue(e){k(e)}let w,o;function W(e){const t=e.modifications,r=o._malloc(8*t.length),f=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function $(e,t){if(!o)return null;const{context:r,localOrigin:f,globalTrafo:i,mbs:d,obb:s,elevationOffset:E,geometryBuffer:b,geometryDescriptor:H,indexToVertexProjector:Y,vertexToRenderProjector:j}=e,L=o._malloc(b.byteLength),T=33,A=o._malloc(T*Float64Array.BYTES_PER_ELEMENT),F=new Uint8Array(o.HEAPU8.buffer,L,b.byteLength);F.set(new Uint8Array(b));const a=new Float64Array(o.HEAPU8.buffer,A,T);h(a,f);let u=a.byteOffset+3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u);h(l,i),u+=16*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u),h(l,d),u+=4*a.BYTES_PER_ELEMENT,q(s)&&(l=new Float64Array(a.buffer,u),h(l,s.center),u+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u),h(l,s.halfSize),u+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,u),h(l,s.quaternion));const R=H,V={isDraco:!1,isLegacy:!1,color:e.layouts.some(m=>m.some(y=>y.name==="color")),normal:e.needNormals&&e.layouts.some(m=>m.some(y=>y.name==="normalCompressed")),uv0:e.layouts.some(m=>m.some(y=>y.name==="uv0")),uvRegion:e.layouts.some(m=>m.some(y=>y.name==="uvRegion")),featureIndex:R.featureIndex},n=o.process(r,!!e.obb,L,F.byteLength,R,V,A,E,Y,j,e.normalReferenceFrame);if(o._free(A),o._free(L),n.error.length>0)throw`i3s.wasm: ${n.error}`;if(n.discarded)return null;const I=n.componentOffsets.length>0?c(n.componentOffsets):null,U=n.featureIds.length>0?c(n.featureIds):null,M=c(n.interleavedVertedData).buffer,S=n.indicesType===_.Int16?c(new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2)):c(new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4)),C=c(n.positions),O=n.positionIndicesType===_.Int16?c(new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2)):c(new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4)),z={layout:e.layouts[0],interleavedVertexData:M,indices:S,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:C,indices:O}};return U&&t.push(U.buffer),I&&t.push(I.buffer),t.push(M),t.push(S.buffer),t.push(C.buffer),t.push(O.buffer),{componentOffsets:I,featureIds:U,transformedGeometry:z,obb:n.obb}}function le(e){return e===0?p.Unmodified:e===1?p.PotentiallyModified:e===2?p.Culled:p.Unknown}function X(e){const{context:t,buffer:r}=e,f=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(o.HEAPU8.buffer,f,i),s=new Float64Array(r);d.set(s),o.filterOBBs(t,f,i),s.set(d),o._free(f)}function k(e){o&&o.destroy(e)}function h(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function g(){return o?Promise.resolve():(w||(w=K().then(e=>{o=e,w=null})),w)}const de={transform:$,destroy:k};export{ue as destroyContext,se as dracoDecompressPointCloudData,ae as filterObbsForModifications,X as filterObbsForModificationsSync,g as initialize,le as interpretObbModificationResults,ie as process,ce as setLegacySchema,fe as setModifications,W as setModificationsSync,de as test};