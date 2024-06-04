import{e as p,y as d,bf as xe,bg as we,b1 as ve,n as Q,R as xt,bh as Ht,bi as Tt,bj as te,r as c,u as b,bk as W,b8 as I,bl as be,bm as $e,bn as N,ax as M,bo as Ot,bp as _,ai as Ae,bq as Te,br as Me,$ as Re,ar as Fe,b as ut,f as Mt,bs as _t,bt as ee,bu as re,bv as pt,bw as Ce,az as ne,bx as ht,by as Le,bz as De,bA as oe,bB as se,bC as Ie,m as Oe,bD as _e,bE as Ee,O as Pe,w as Rt,bF as je,bG as vt,bH as Se,k as Ne,l as ze}from"./main-95e6e76d.js";import{_ as ft}from"./preload-helper-388ac9d5.js";import{r as wt,b as We,x as ke,M as Et,j as Pt,k as jt,R as St,h as Nt,L as zt,_ as Ue,a as ot,v as Ft,g as Ct,c as He,d as lt,e as gt}from"./georeference-e99f399b.js";import{r as Ge}from"./imageUtils-c2d0d1ae.js";import{r as Be}from"./earcut-61f7b102.js";import{r as Gt}from"./deduplicate-02804d5f.js";import{e as Wt}from"./mat3f64-221ce671.js";import{e as ie}from"./mat4f64-1413b4a7.js";import{c as kt}from"./spatialReferenceEllipsoidUtils-91a60b7f.js";var Z;const bt=new WeakMap;let Ve=0,O=Z=class extends xt{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,r,n){if(t instanceof HTMLImageElement){const o={type:"image-element",src:Ht(t.src,n),crossOrigin:t.crossOrigin};e[r]=o}else if(t instanceof HTMLCanvasElement){const o=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this._encodeImageData(o)};e[r]=s}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:Ht(t.src,n),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[r]=o}else if(t instanceof ImageData){const o={type:"image-data",imageData:this._encodeImageData(t)};e[r]=o}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),r=document.createElement("canvas");return r.width=e.width,r.height=e.height,r.getContext("2d").putImageData(e,0,0),r}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const r=e.substr(e.length-4,4).toLowerCase(),n=e.substr(0,15).toLocaleLowerCase();if(r===".png"||n==="data:image/png;")return!0}return!1}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(r="")=>`d:${r},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(bt.has(this.data)||bt.set(this.data,++Ve),e(bt.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new Z(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const r=this.clone();return t.set(this,r),r}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let r=0;r<t.data.length;r++)e+=String.fromCharCode(t.data[r]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const e=atob(t.data),r=new Uint8ClampedArray(e.length);for(let n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return Ge(r,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new Z({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new Z({data:t}):Tt(Z,t)}};p([d({type:String,json:{write:xe}})],O.prototype,"url",null),p([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],O.prototype,"data",null),p([we("data")],O.prototype,"writeData",null),p([ve("data")],O.prototype,"readData",null),p([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],O.prototype,"transparent",null),p([d({json:{write:!0}})],O.prototype,"wrap",void 0),p([d({readOnly:!0})],O.prototype,"contentHash",null),O=Z=p([Q("esri.geometry.support.MeshTexture")],O);const nt=O;var Lt;let L=Lt=class extends xt{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const r=c(t)?t.get(this):null;if(r)return r;const n=new Lt(this.clonePropertiesWithDeduplication(e));return c(t)&&t.set(this,n),n}clonePropertiesWithDeduplication(t){return{color:c(this.color)?this.color.clone():null,colorTexture:c(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:c(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:c(this.colorTextureTransform)?this.colorTextureTransform:null,normalTextureTransform:c(this.normalTextureTransform)?this.normalTextureTransform:null}}};p([d({type:te,json:{write:!0}})],L.prototype,"color",void 0),p([d({type:nt,json:{write:!0}})],L.prototype,"colorTexture",void 0),p([d({type:nt,json:{write:!0}})],L.prototype,"normalTexture",void 0),p([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaMode",void 0),p([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaCutoff",void 0),p([d({nonNullable:!0,json:{write:!0}})],L.prototype,"doubleSided",void 0),p([d()],L.prototype,"colorTextureTransform",void 0),p([d()],L.prototype,"normalTextureTransform",void 0),L=Lt=p([Q("esri.geometry.support.MeshMaterial")],L);const Ut=L;var Dt;let C=Dt=class extends Ut{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const r=c(t)?t.get(this):null;if(r)return r;const n=new Dt(this.clonePropertiesWithDeduplication(e));return c(t)&&t.set(this,n),n}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:c(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:c(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:c(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:c(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null,occlusionTextureTransform:c(this.occlusionTextureTransform)?this.occlusionTextureTransform:null,emissiveTextureTransform:c(this.emissiveTextureTransform)?this.emissiveTextureTransform:null,metallicRoughnessTextureTransform:c(this.metallicRoughnessTextureTransform)?this.metallicRoughnessTextureTransform:null}}};p([d({type:te,json:{write:!0}})],C.prototype,"emissiveColor",void 0),p([d({type:nt,json:{write:!0}})],C.prototype,"emissiveTexture",void 0),p([d({type:nt,json:{write:!0}})],C.prototype,"occlusionTexture",void 0),p([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],C.prototype,"metallic",void 0),p([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],C.prototype,"roughness",void 0),p([d({type:nt,json:{write:!0}})],C.prototype,"metallicRoughnessTexture",void 0),p([d()],C.prototype,"occlusionTextureTransform",void 0),p([d()],C.prototype,"emissiveTextureTransform",void 0),p([d()],C.prototype,"metallicRoughnessTextureTransform",void 0),C=Dt=p([Q("esri.geometry.support.MeshMaterialMetallicRoughness")],C);const Ze=C;var ct;const ae="esri.geometry.support.MeshVertexAttributes",U=b.getLogger(ae);let T=ct=class extends xt{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return J(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},U)}castPosition(t){return t&&t instanceof Float32Array&&U.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),J(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},U)}castUv(t){return J(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},U)}castNormal(t){return J(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},U)}castTangent(t){return J(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},U)}clone(){const t={position:I(this.position),uv:I(this.uv),normal:I(this.normal),tangent:I(this.tangent),color:I(this.color)};return new ct(t)}clonePositional(){const t={position:I(this.position),normal:I(this.normal),tangent:I(this.tangent),uv:this.uv,color:this.color};return new ct(t)}};function $t(t,e,r,n){const{loggerTag:o,stride:s}=e;return t.length%s!=0?(n.error(o,`Invalid array length, expected a multiple of ${s}`),new r([])):t}function J(t,e,r,n,o){if(!t)return t;if(t instanceof e)return $t(t,n,e,o);for(const s of r)if(t instanceof s)return $t(new e(t),n,e,o);if(Array.isArray(t))return $t(new e(t),n,e,o);{const s=r.map(i=>`'${i.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new e([])}}function tt(t,e,r){e[r]=Je(t)}function Je(t){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=t[r];return e}p([d({json:{write:tt}})],T.prototype,"color",void 0),p([W("color")],T.prototype,"castColor",null),p([d({nonNullable:!0,json:{write:tt}})],T.prototype,"position",void 0),p([W("position")],T.prototype,"castPosition",null),p([d({json:{write:tt}})],T.prototype,"uv",void 0),p([W("uv")],T.prototype,"castUv",null),p([d({json:{write:tt}})],T.prototype,"normal",void 0),p([W("normal")],T.prototype,"castNormal",null),p([d({json:{write:tt}})],T.prototype,"tangent",void 0),p([W("tangent")],T.prototype,"castTangent",null),T=ct=p([Q(ae)],T);var rt;const le="esri.geometry.support.MeshComponent",Xe=b.getLogger(le);let E=rt=class extends xt{static from(t){return Tt(rt,t)}constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return J(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Xe)}castMaterial(t){return Tt(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?Ze:Ut,t)}clone(){return new rt({faces:I(this.faces),shading:this.shading,material:I(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const r={faces:I(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new rt(r)}};p([d({json:{write:!0}})],E.prototype,"faces",void 0),p([W("faces")],E.prototype,"castFaces",null),p([d({type:Ut,json:{write:!0}})],E.prototype,"material",void 0),p([W("material")],E.prototype,"castMaterial",null),p([d({type:String,json:{write:!0}})],E.prototype,"shading",void 0),p([d({type:Boolean})],E.prototype,"trustSourceNormals",void 0),E=rt=p([Q(le)],E);const K=E;function ce(t,e=!1){return t<=be?e?new Array(t).fill(0):new Array(t):new Float64Array(t)}function Ye(t,e,r){return Array.isArray(t)?t.slice(e,e+r):t.subarray(e,e+r)}function qe(t){const e=Qe(t.rings,t.hasZ,mt.CCW_IS_HOLE),r=new Array;let n=0,o=0;for(const a of e.polygons){const l=a.count,u=a.index,h=Ye(e.position,3*u,3*l),m=a.holeIndices.map(g=>g-u),f=new Uint32Array(Be(h,m,3));r.push({position:h,faces:f}),n+=h.length,o+=f.length}const s=Ke(r,n,o),i=Array.isArray(s.position)?Gt(s.position,3,{originalIndices:s.faces}):Gt(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(i.buffer),s.faces=i.indices,s}function Ke(t,e,r){if(t.length===1)return t[0];const n=ce(e),o=new Uint32Array(r);let s=0,i=0,a=0;for(const l of t){for(let u=0;u<l.position.length;u++)n[s++]=l.position[u];for(let u=0;u<l.faces.length;u++)o[i++]=l.faces[u]+a;a=s/3}return{position:n,faces:o}}function Qe(t,e,r){const n=t.length,o=new Array(n),s=new Array(n),i=new Array(n);let a=0,l=0,u=0,h=0;for(let g=0;g<n;++g)h+=t[g].length;const m=ce(3*h);let f=0;for(let g=n-1;g>=0;g--){const y=t[g],F=r===mt.CCW_IS_HOLE&&tr(y);if(F&&n!==1)o[a++]=y;else{let v=y.length;for(let x=0;x<a;++x)v+=o[x].length;const $={index:f,pathLengths:new Array(a+1),count:v,holeIndices:new Array(a)};$.pathLengths[0]=y.length,y.length>0&&(i[u++]={index:f,count:y.length}),f=F?st(y,y.length-1,-1,m,f,y.length,e):st(y,0,1,m,f,y.length,e);for(let x=0;x<a;++x){const A=o[x];$.holeIndices[x]=f,$.pathLengths[x+1]=A.length,A.length>0&&(i[u++]={index:f,count:A.length}),f=st(A,0,1,m,f,A.length,e)}a=0,$.count>0&&(s[l++]=$)}}for(let g=0;g<a;++g){const y=o[g];y.length>0&&(i[u++]={index:f,count:y.length}),f=st(y,0,1,m,f,y.length,e)}return s.length=l,i.length=u,{position:m,polygons:s,outlines:i}}function st(t,e,r,n,o,s,i){o*=3;for(let a=0;a<s;++a){const l=t[e];n[o++]=l[0],n[o++]=l[1],n[o++]=i?l[2]:0,e+=r}return o/3}function tr(t){return!$e(t,!1,!1)}var mt;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(mt||(mt={}));const It=b.getLogger("esri.geometry.support.meshUtils.centerAt");function er(t,e,r){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const n=r?.origin??t.origin;c(t.transform)?(r?.geographic!=null&&r.geographic!==t.transform.geographic&&It.warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),rr(t.transform,e,n)):wt(t.spatialReference,r)?nr(t,e,n):or(t,e,n)}function rr(t,e,r){const n=e.x-r.x,o=e.y-r.y,s=e.hasZ&&r.hasZ?e.z-r.z:0,i=t.origin;t.origin=[i[0]+n,i[1]+o,i[2]+s]}function nr(t,e,r){const n=We(t.vertexAttributes,r,{geographic:!0}),{position:o,normal:s,tangent:i}=ke(n,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}function or(t,e,r){const n=ar,o=ir;if(N(e,o,t.spatialReference)){if(!N(r,n,t.spatialReference)){const s=t.origin;n[0]=s.x,n[1]=s.y,n[2]=s.z,It.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}sr(t.vertexAttributes.position,o,n),t.vertexAttributesChanged()}else It.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function sr(t,e,r){if(t)for(let n=0;n<t.length;n+=3)for(let o=0;o<3;o++)t[n+o]+=e[o]-r[o]}const ir=M(),ar=M();async function lr(t,e,r){const{loadGLTFMesh:n}=await Ot(ft(()=>import("./loadGLTFMesh-8f03b0b1.js"),["./loadGLTFMesh-8f03b0b1.js","./main-95e6e76d.js","./preload-helper-388ac9d5.js","./main-d272b700.css","./mat3f64-221ce671.js","./BufferView-de5ba4bc.js","./vec33-7248db0d.js","./DefaultMaterial_COLOR_GAMMA-0d059b4f.js","./types-e1c0a5bf.js","./mat4f64-1413b4a7.js","./enums-64ab819c.js","./quat-9a7188b3.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./basicInterfaces-b7051eb1.js","./Indices-65eff7c3.js","./georeference-e99f399b.js","./spatialReferenceEllipsoidUtils-91a60b7f.js","./imageUtils-c2d0d1ae.js","./earcut-61f7b102.js","./deduplicate-02804d5f.js"],import.meta.url),r),o=await ue(e,r),s=n(new _({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:cr(o),useTransform:!0,signal:c(r)?r.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:a}=await s;t.vertexAttributes=i,t.components=a}function cr(t){const e=Ae(t.url);return r=>{const n=Te(r,e,e),o=n?n.replace(/^ *\.\//,""):null;return(o?t.files.get(o):null)??r}}async function ue(t,e){return t instanceof Blob?dt.fromBlob(t):typeof t=="string"?new dt(t):Array.isArray(t)?ur(t,e):pr(t,e)}async function ur(t,e){const r=new Map;let n=null;const o=await Me(t.map(async i=>({name:i.name,source:await ue(i instanceof Blob?i:i.source,e)}))),s=[];for(const i of o)i&&(Re(e)?i.source.dispose():s.push(i));Fe(e);for(const{name:i,source:a}of s)(ut(n)||/\.(gltf|glb)/i.test(i))&&(n=a.url),r.set(i,a.url),a.files&&a.files.forEach((l,u)=>r.set(u,l));if(ut(n))throw new Mt("mesh-load-external:missing-files","Missing files to load external mesh source");return new dt(n,()=>s.forEach(({source:i})=>i.dispose()),r)}async function pr(t,e){const{default:r}=await Ot(ft(()=>import("./main-95e6e76d.js").then(o=>o.oE),["./main-95e6e76d.js","./preload-helper-388ac9d5.js","./main-d272b700.css"],import.meta.url),e),n=typeof t.multipart[0]=="string"?await Promise.all(t.multipart.map(async o=>(await r(o,{responseType:"array-buffer"})).data)):t.multipart;return dt.fromBlob(new Blob(n))}let dt=class pe{constructor(e,r=()=>{},n=new Map){this.url=e,this.dispose=r,this.files=n}static fromBlob(e){const r=URL.createObjectURL(e);return new pe(r,()=>URL.revokeObjectURL(r))}};function hr(t,e,r){t.vertexAttributes&&t.vertexAttributes.position&&(c(t.transform)?(r?.geographic!=null&&r.geographic!==t.transform.geographic&&b.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),fr(t.transform,e)):wt(t.spatialReference,r)?gr(t,e):mr(t,e))}function fr(t,e){const r=t.origin;t.origin=_t(M(),r,e)}function gr(t,e){const r=t.spatialReference,n=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(n.length),a=c(o)?new Float32Array(o.length):null,l=c(s)?new Float32Array(s.length):null,u=t.extent.center,h=dr;ee(r,[u.x,u.y,u.z],Bt,kt(r)),re(Vt,Bt),pt(h,e,Vt),Et(n,r,i),c(o)&&c(a)&&Pt(o,n,i,r,a),c(s)&&c(l)&&jt(s,n,i,r,l),he(i,h),St(i,n,r),c(o)&&c(a)&&Nt(a,n,i,r,o),c(s)&&c(l)&&zt(l,n,i,r,s),t.vertexAttributesChanged()}function mr(t,e){he(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function he(t,e){if(t)for(let r=0;r<t.length;r+=3)for(let n=0;n<3;n++)t[r+n]+=e[n]}const dr=M(),Bt=ie(),Vt=Wt();function yr(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:r}=Mr,n=4*t.length,o=new Float64Array(3*n),s=new Float32Array(3*n),i=new Float32Array(2*n),a=new Uint32Array(2*t.length*3);let l=0,u=0,h=0,m=0;for(let f=0;f<t.length;f++){const g=t[f],y=l/3;for(const v of e)a[m++]=y+v;const F=g.corners;for(let v=0;v<4;v++){const $=F[v];let x=0;i[h++]=.25*r[v][0]+g.uvOrigin[0],i[h++]=g.uvOrigin[1]-.25*r[v][1];for(let A=0;A<3;A++)g.axis[A]!==0?(o[l++]=.5*g.axis[A],s[u++]=g.axis[A]):(o[l++]=.5*$[x++],s[u++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function xr(t,e){const r=t.components[0],n=r.faces,o=Rr[e],s=6*o,i=new Array(6),a=new Array(n.length-6);let l=0,u=0;for(let h=0;h<n.length;h++)h>=s&&h<s+6?i[l++]=n[h]:a[u++]=n[h];if(c(t.vertexAttributes.uv)){const h=new Float32Array(t.vertexAttributes.uv),m=4*o*2,f=[0,1,1,1,1,0,0,0];for(let g=0;g<f.length;g++)h[m+g]=f[g];t.vertexAttributes.uv=h}return t.components=[new K({faces:i,material:r.material}),new K({faces:a})],t}function wr(t=0){const e=Math.round(8*2**t),r=2*e,n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),i=new Float32Array(2*n),a=new Uint32Array(3*((e-1)*r*2));let l=0,u=0,h=0,m=0;for(let f=0;f<=e;f++){const g=f/e*Math.PI+.5*Math.PI,y=Math.cos(g),F=Math.sin(g);w[2]=F;const v=f===0||f===e,$=v?r-1:r;for(let x=0;x<=$;x++){const A=x/$*2*Math.PI;w[0]=-Math.sin(A)*y,w[1]=Math.cos(A)*y;for(let P=0;P<3;P++)o[l]=.5*w[P],s[l]=w[P],++l;i[u++]=(x+(v?.5:0))/r,i[u++]=f/e,f!==0&&x!==r&&(f!==e&&(a[h++]=m,a[h++]=m+1,a[h++]=m-r),f!==1&&(a[h++]=m,a[h++]=m-r,a[h++]=m-r-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function vr(t=0){const r=Math.round(16*2**t),n=(5-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),i=new Float32Array(2*n),a=new Uint32Array(3*(4*r));let l=0,u=0,h=0,m=0,f=0;for(let g=0;g<=5;g++){const y=g===0||g===5,F=g<=1||g>=5-1,v=g===2||g===4,$=y?r-1:r;for(let x=0;x<=$;x++){const A=x/$*2*Math.PI,P=y?0:.5;w[0]=P*Math.sin(A),w[1]=P*-Math.cos(A),w[2]=g<=2?.5:-.5;for(let k=0;k<3;k++)o[l++]=w[k],s[u++]=F?k===2?g<=1?1:-1:0:k===2?0:w[k]/P;i[h++]=(x+(y?.5:0))/r,i[h++]=g<=1?1*g/3:g<=3?1*(g-2)/3+1/3:1*(g-4)/3+2/3,v||g===0||x===r||(g!==5&&(a[m++]=f,a[m++]=f+1,a[m++]=f-r),g!==1&&(a[m++]=f,a[m++]=f-r,a[m++]=f-r-1)),f++}}return{position:o,normal:s,uv:i,faces:a}}function br(t,e){const r=typeof e=="number"?e:e!=null?e.width:1,n=typeof e=="number"?e:e!=null?e.height:1;switch(t){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}function $r(t){const e=et.facingAxisOrderSwap[t],r=et.position,n=et.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let i=0;for(let a=0;a<4;a++){const l=i;for(let u=0;u<3;u++){const h=e[u],m=Math.abs(h)-1,f=h>=0?1:-1;o[i]=r[l+m]*f,s[i]=n[l+m]*f,i++}}return{position:o,normal:s,uv:new Float32Array(et.uv),faces:new Uint32Array(et.faces),isPlane:!0}}const H=1,G=2,B=3,et={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[B,H,G],west:[-B,-H,G],north:[-H,B,G],south:[H,-B,G],up:[H,G,B],down:[H,-G,-B]}};function it(t,e,r){t.isPlane||Ar(t),Tr(t,r?.size);const{vertexAttributes:n,transform:o}=Ue(t,e,r);return{vertexAttributes:new T({...n,uv:t.uv}),transform:o,components:[new K({faces:t.faces,material:r&&r.material||null})],spatialReference:e.spatialReference}}function Ar(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function Tr(t,e){if(e==null)return;const r=typeof e=="number"?[e,e,e]:[e.width!=null?e.width:1,e.depth!=null?e.depth:1,e.height!=null?e.height:1];j[0]=r[0],j[4]=r[1],j[8]=r[2];for(let n=0;n<t.position.length;n+=3){for(let o=0;o<3;o++)w[o]=t.position[n+o];pt(w,w,j);for(let o=0;o<3;o++)t.position[n+o]=w[o]}if(r[0]!==r[1]||r[1]!==r[2]){j[0]=1/r[0],j[4]=1/r[1],j[8]=1/r[2];for(let n=0;n<t.normal.length;n+=3){for(let o=0;o<3;o++)w[o]=t.normal[n+o];pt(w,w,j),Ce(w,w);for(let o=0;o<3;o++)t.normal[n+o]=w[o]}}}const Mr={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},Rr={south:0,east:1,north:2,west:3,up:4,down:5},w=M(),j=Wt(),fe=b.getLogger("esri.geometry.support.meshUtils.rotate");function Fr(t,e,r){if(!t.vertexAttributes||!t.vertexAttributes.position||e[3]===0)return;const n=t.spatialReference;if(c(t.transform)){r?.geographic!=null&&r.geographic!==t.transform.geographic&&fe.warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=r?.origin??t.transform.getOriginPoint(n);Cr(t.transform,e,o)}else{const o=r?.origin??t.origin;wt(t.spatialReference,r)?Lr(t,e,o):Dr(t,e,o)}}function Cr(t,e,r){const n=ne(X,r.x,r.y,r.z),o=ht(X,n,t.origin);t.applyLocalInverse(o,Zt),t.rotation=Ft(t.rotation,e,ot()),t.applyLocalInverse(o,o),ht(o,o,Zt),t.translation=_t(M(),t.translation,o)}function Lr(t,e,r){const n=t.spatialReference,o=kt(n),s=ge;N(r,s,o)||N(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,u=new Float64Array(i.length),h=c(a)?new Float32Array(a.length):null,m=c(l)?new Float32Array(l.length):null;ee(o,s,yt,o),re(Xt,yt);const f=Jt;pt(Ct(Jt),Ct(e),Xt),f[3]=e[3],Et(i,n,u),c(a)&&c(h)&&Pt(a,i,u,n,h),c(l)&&c(m)&&jt(l,i,u,n,m),q(u,f,3,s),St(u,i,n),c(a)&&c(h)&&(q(h,f,3),Nt(h,i,u,n,a)),c(l)&&c(m)&&(q(m,f,4),zt(m,i,u,n,l)),t.vertexAttributesChanged()}function Dr(t,e,r){const n=ge;if(!N(r,n,t.spatialReference)){const o=t.origin;n[0]=o.x,n[1]=o.y,n[2]=o.z,fe.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}q(t.vertexAttributes.position,e,3,n),q(t.vertexAttributes.normal,e,3),q(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function q(t,e,r,n=oe){if(!ut(t)){Le(yt,He(e),Ct(e));for(let o=0;o<t.length;o+=r){for(let s=0;s<3;s++)X[s]=t[o+s]-n[s];De(X,X,yt);for(let s=0;s<3;s++)t[o+s]=X[s]+n[s]}}}const X=M(),Zt=M(),Jt=ot(),yt=ie(),Xt=Wt(),ge=M(),me=b.getLogger("esri.geometry.support.meshUtils.scale");function Ir(t,e,r){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const n=t.spatialReference;if(c(t.transform)){r?.geographic!=null&&r.geographic!==t.transform.geographic&&me.warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=r?.origin??t.transform.getOriginPoint(n);Or(t.transform,e,o)}else{const o=wt(t.spatialReference,r),s=r&&r.origin||t.origin;o?_r(t,e,s):Er(t,e,s)}}function Or(t,e,r){const n=ne(Y,r.x,r.y,r.z),o=ht(Y,n,t.origin);t.applyLocalInverse(o,Yt);const s=se(M(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),ht(o,o,Yt),t.translation=_t(M(),t.translation,o)}function _r(t,e,r){const n=t.spatialReference,o=kt(n),s=ye;N(r,s,o)||N(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,u=new Float64Array(i.length),h=c(a)?new Float32Array(a.length):null,m=c(l)?new Float32Array(l.length):null;Et(i,n,u),c(a)&&c(h)&&Pt(a,i,u,n,h),c(l)&&c(m)&&jt(l,i,u,n,m),de(u,e,s),St(u,i,n),c(a)&&c(h)&&Nt(h,i,u,n,a),c(l)&&c(m)&&zt(m,i,u,n,l),t.vertexAttributesChanged()}function Er(t,e,r){const n=ye;if(!N(r,n,t.spatialReference)){const o=t.origin;n[0]=o.x,n[1]=o.y,n[2]=o.z,me.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}de(t.vertexAttributes.position,e,n),t.vertexAttributesChanged()}function de(t,e,r=oe){if(t)for(let n=0;n<t.length;n+=3){for(let o=0;o<3;o++)Y[o]=t[n+o]-r[o];se(Y,Y,e);for(let o=0;o<3;o++)t[n+o]=Y[o]+r[o]}}const Y=M(),Yt=M(),ye=M();var D;const z="esri.geometry.Mesh";let R=D=class extends Ie(Oe.LoadableMixin(_e(Ee))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new T,this.type="mesh"}initialize(){(ut(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(Pe(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(t=>t.clone())}),()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&c(this.external)&&c(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new Rt({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new _({x:0,y:0,z:0,spatialReference:e})};const r=c(this.transform)?this.transform.project(t,e):t;let n=1/0,o=1/0,s=1/0,i=-1/0,a=-1/0,l=-1/0,u=0,h=0,m=0;const f=r.length,g=1/(f/3);let y=0;for(;y<f;){const F=r[y++],v=r[y++],$=r[y++];n=Math.min(n,F),o=Math.min(o,v),s=Math.min(s,$),i=Math.max(i,F),a=Math.max(a,v),l=Math.max(l,$),u+=g*F,h+=g*v,m+=g*$}return{extent:new Rt({xmin:n,ymin:o,zmin:s,xmax:i,ymax:a,zmax:l,spatialReference:e}),center:new _({x:u,y:h,z:m,spatialReference:e})}}get anchor(){if(c(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this._boundingInfo;return new _({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return c(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return!this.loaded&&c(this.external)&&c(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(K.from(t)),this.notifyChange("components")):b.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(e!==-1)return this.components.splice(e,1),void this.notifyChange("components")}b.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else b.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,r,n){return lt(At.x,t,V),lt(At.y,e,qt),lt(At.z,r,Kt),Ft(V,qt,V),Ft(V,Kt,V),Fr(this,V,n),this}offset(t,e,r,n){return this.loaded?(at[0]=t,at[1]=e,at[2]=r,hr(this,at,n),this):(b.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(Ir(this,t,e),this):(b.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(er(this,t,e),this):(b.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return c(this.external)&&this.addResolvingPromise(lr(this,this.external.source,t)),Promise.resolve(this)}updateExternalSource(t){this._set("external",t)}clone(){let t=null;if(this.components){const r=new Map,n=new Map;t=this.components.map(o=>o.cloneWithDeduplication(r,n))}const e={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:c(this.transform)?this.transform.clone():null,external:c(this.external)?{source:this.external.source,extent:c(this.external.extent)?this.external.extent.clone():null}:null};return new D(e)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const e=ft(()=>import("./gltfexport-16dd6769.js"),["./gltfexport-16dd6769.js","./main-95e6e76d.js","./preload-helper-388ac9d5.js","./main-d272b700.css","./quat-9a7188b3.js","./mat3f64-221ce671.js","./quatf64-3363c48e.js","./georeference-e99f399b.js","./mat4f64-1413b4a7.js","./spatialReferenceEllipsoidUtils-91a60b7f.js","./BufferView-de5ba4bc.js","./vec33-7248db0d.js","./enums-64ab819c.js","./imageutils-506b85e7.js","./resourceUtils-a8ed8f9e.js","./basicInterfaces-b7051eb1.js","./imageUtils-c2d0d1ae.js","./earcut-61f7b102.js","./deduplicate-02804d5f.js","./Indices-65eff7c3.js"],import.meta.url),r=this.load(),n=await Promise.all([e,r]),{toBinaryGLTF:o}=n[0];return o(this,t)}static createBox(t,e){if(!(t instanceof _))return b.getLogger(z).error(".createBox()","expected location to be a Point instance"),null;const r=new D(it(yr(),t,e));return e&&e.imageFace&&e.imageFace!=="all"?xr(r,e.imageFace):r}static createSphere(t,e){return t instanceof _?new D(it(wr(e&&e.densificationFactor||0),t,e)):(b.getLogger(z).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof _?new D(it(vr(e&&e.densificationFactor||0),t,e)):(b.getLogger(z).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){if(!(t instanceof _))return b.getLogger(z).error(".createPlane()","expected location to be a Point instance"),null;const r=e?.facing??"up",n=br(r,e?.size);return new D(it($r(r),t,{...e,size:n}))}static createFromPolygon(t,e){if(!(t instanceof je))return b.getLogger(z).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const r=qe(t);return new D({vertexAttributes:new T({position:r.position}),components:[new K({faces:r.faces,shading:"flat",material:e?.material??null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,r){if(!(t instanceof _))throw b.getLogger(z).error(".createfromGLTF()","expected location to be a Point instance"),new Mt("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:n}=await Ot(ft(()=>import("./loadGLTFMesh-8f03b0b1.js"),["./loadGLTFMesh-8f03b0b1.js","./main-95e6e76d.js","./preload-helper-388ac9d5.js","./main-d272b700.css","./mat3f64-221ce671.js","./BufferView-de5ba4bc.js","./vec33-7248db0d.js","./DefaultMaterial_COLOR_GAMMA-0d059b4f.js","./types-e1c0a5bf.js","./mat4f64-1413b4a7.js","./enums-64ab819c.js","./quat-9a7188b3.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./basicInterfaces-b7051eb1.js","./Indices-65eff7c3.js","./georeference-e99f399b.js","./spatialReferenceEllipsoidUtils-91a60b7f.js","./imageUtils-c2d0d1ae.js","./earcut-61f7b102.js","./deduplicate-02804d5f.js"],import.meta.url),r);return new D(await n(t,e,r))}static createWithExternalSource(t,e,r){const n=r?.extent??null,o=r?.transform?.clone()??new gt;o.origin=[t.x,t.y,t.z??0];const s=t.spatialReference;return new D({external:{source:e,extent:n},transform:o,spatialReference:s})}static createIncomplete(t,e){const r=e?.transform?.clone()??new gt;r.origin=[t.x,t.y,t.z??0];const n=t.spatialReference,o=new D({transform:r,spatialReference:n});return o.addResolvingPromise(Promise.reject(new Mt("mesh-incomplete","Mesh resources are not complete"))),o}};p([d({type:[K],json:{write:!0}})],R.prototype,"components",void 0),p([d({type:gt,json:{write:!0}})],R.prototype,"transform",void 0),p([d({constructOnly:!0})],R.prototype,"external",void 0),p([d({readOnly:!0})],R.prototype,"hasExtent",null),p([d({readOnly:!0})],R.prototype,"_boundingInfo",null),p([d({readOnly:!0})],R.prototype,"anchor",null),p([d({readOnly:!0})],R.prototype,"origin",null),p([d({readOnly:!0,json:{read:!1}})],R.prototype,"extent",null),p([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],R.prototype,"hasZ",void 0),p([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],R.prototype,"hasM",void 0),p([d({type:T,nonNullable:!0,json:{write:!0}})],R.prototype,"vertexAttributes",void 0),R=D=p([Q(z)],R);const At={x:vt(1,0,0),y:vt(0,1,0),z:vt(0,0,1)},V=ot(),qt=ot(),Kt=ot(),at=M(),Qt=R;function Pr(t,e,r){const n=r.features;r.features=[],delete r.geometryType;const o=Se.fromJSON(r);if(o.geometryType="mesh",!r.assetMaps)return o;const s=Wr(e,r.assetMaps),i=o.spatialReference??Ne.WGS84,a=r.globalIdFieldName,{outFields:l}=t,u=c(l)&&l.length>0?jr(l.includes("*")?null:new Set(l)):()=>({});for(const h of n){const m=Sr(h,a,i,e,s);c(m)&&o.features.push(new ze({geometry:m,attributes:u(h)}))}return o}function jr(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function Sr(t,e,r,n,o){const s=t.attributes[e],i=o.get(s);if(i==null||i.status===S.FAILED||i.url==null)return null;const a=Nr(t,r,n),l=Rt.fromJSON(t.geometry);l.spatialReference=r;const u=zr(t.attributes,n,i.projectVertices);return i.status===S.PENDING?Qt.createIncomplete(a,{extent:l,transform:u}):Qt.createWithExternalSource(a,[{name:i.name,source:i.url}],{extent:l,transform:u})}function Nr({attributes:t},e,{transformFieldRoles:r}){return new _({x:t[r.originX],y:t[r.originY],z:t[r.originZ],spatialReference:e})}function zr(t,{transformFieldRoles:e},r){return new gt({translation:[t[e.translationX],-t[e.translationZ],t[e.translationY]],rotation:lt([t[e.rotationX],t[e.rotationZ],t[e.rotationY]],t[e.rotationDeg]),scale:[t[e.scaleX],t[e.scaleY],t[e.scaleZ]],geographic:r})}var S;function Wr(t,e){const r=new Map;for(const n of e){const o=n.parentGlobalId;if(o==null)continue;const s=n.assetName,i=n.assetURL,a=n.conversionStatus;let l=r.get(o);if(l==null)switch(l={name:s,status:S.FAILED,url:i,projectVertices:kr(n.flags).projectVertices},r.set(o,l),a){case"COMPLETED":case"SUBMITTED":l.status=S.COMPLETED;break;case"INPROGRESS":l.status=S.PENDING;break;default:l.status=S.FAILED}else console.warn(`Multiple asset parts not expected. Ignoring additional parts. conflicting assetname: ${n.assetName}`)}return r}function kr(t){return{projectVertices:t.includes("PROJECT_VERTICES")}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(S||(S={}));const qr=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:Pr},Symbol.toStringTag,{value:"Module"}));export{qr as a,Ze as c,K as g,nt as m,T as p};