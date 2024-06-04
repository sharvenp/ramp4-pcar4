import{K as u,N as d,kF as me,cY as de,dC as ye,O as et,an as vt,lG as Gt,ml as xe,fN as Tt,cy as ee,e as f,a6 as W,lO as z,m as E,ej as we,mm as N,b8 as M,V as _t,bA as C,mn as ve,aK as $e,jq as Ae,au as be,b3 as Me,i as it,s as Rt,i6 as Pt,is as ne,ir as St,iC as re,iE as ft,i7 as Fe,ba as oe,ig as gt,mo as se,jW as Te,iq as Re,by as ie,bt as De,Z as Ee,eT as Oe,dS as Ce,ak as Le,M as Dt,bS as Ie,bh as At,F as _e,h as Pe}from"./main.33d7d020.js";import{_ as mt}from"./preload-helper.387dac8f.js";import{r as $t,M as Se,x as je,a as jt,j as Nt,k as zt,O as Ut,h as Wt,L as kt,b as Ne,c as at,g as Et,l as Ot,d as ze,e as pt,f as dt}from"./georeference.702129f6.js";import{x as Ue}from"./earcut.d30cbec0.js";import{n as We}from"./deduplicate.69eb3fdf.js";import{a as Ht}from"./quatf64.ddec7ef6.js";import{e as ae}from"./mat4f64.a79dd289.js";var q;const bt=new WeakMap;let ke=0,O=q=class extends vt{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,n,r){if(t instanceof HTMLImageElement){const o={type:"image-element",src:Gt(t.src,r),crossOrigin:t.crossOrigin};e[n]=o}else if(t instanceof HTMLCanvasElement){const o=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this._encodeImageData(o)};e[n]=s}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:Gt(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[n]=o}else{const o={type:"image-data",imageData:this._encodeImageData(t)};e[n]=o}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),n=document.createElement("canvas");return n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0),n}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const n=e.substr(e.length-4,4).toLowerCase(),r=e.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(t){t!=null?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(n="")=>`d:${n},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(bt.has(this.data)||bt.set(this.data,++ke),e(bt.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new q(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const n=this.clone();return t.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let n=0;n<t.data.length;n++)e+=String.fromCharCode(t.data[n]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const e=atob(t.data),n=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return xe(n,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new q({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new q({data:t}):Tt(q,t)}};u([d({type:String,json:{write:me}})],O.prototype,"url",null),u([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],O.prototype,"data",null),u([de("data")],O.prototype,"writeData",null),u([ye("data")],O.prototype,"readData",null),u([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],O.prototype,"transparent",null),u([d({json:{write:!0}})],O.prototype,"wrap",void 0),u([d({readOnly:!0})],O.prototype,"contentHash",null),O=q=u([et("esri.geometry.support.MeshTexture")],O);const st=O;var Ct;let L=Ct=class extends vt{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Ct(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:f(this.color)?this.color.clone():null,colorTexture:f(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:f(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};u([d({type:ee,json:{write:!0}})],L.prototype,"color",void 0),u([d({type:st,json:{write:!0}})],L.prototype,"colorTexture",void 0),u([d({type:st,json:{write:!0}})],L.prototype,"normalTexture",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaMode",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaCutoff",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"doubleSided",void 0),L=Ct=u([et("esri.geometry.support.MeshMaterial")],L);const Bt=L;var Lt;let I=Lt=class extends Bt{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Lt(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:f(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:f(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:f(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:f(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null}}};u([d({type:ee,json:{write:!0}})],I.prototype,"emissiveColor",void 0),u([d({type:st,json:{write:!0}})],I.prototype,"emissiveTexture",void 0),u([d({type:st,json:{write:!0}})],I.prototype,"occlusionTexture",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"metallic",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"roughness",void 0),u([d({type:st,json:{write:!0}})],I.prototype,"metallicRoughnessTexture",void 0),I=Lt=u([et("esri.geometry.support.MeshMaterialMetallicRoughness")],I);const He=I;var ht;const H=W.getLogger("esri.geometry.support.MeshVertexAttributes");let b=ht=class extends vt{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return Y(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},H)}castPosition(t){return t&&t instanceof Float32Array&&H.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),Y(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},H)}castUv(t){return Y(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},H)}castNormal(t){return Y(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},H)}castTangent(t){return Y(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},H)}clone(){const t={position:E(this.position),uv:E(this.uv),normal:E(this.normal),tangent:E(this.tangent),color:E(this.color)};return new ht(t)}clonePositional(){const t={position:E(this.position),normal:E(this.normal),tangent:E(this.tangent),uv:this.uv,color:this.color};return new ht(t)}};function Mt(t,e,n,r){const{loggerTag:o,stride:s}=e;return t.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function Y(t,e,n,r,o){if(!t)return t;if(t instanceof e)return Mt(t,r,e,o);for(const s of n)if(t instanceof s)return Mt(new e(t),r,e,o);if(Array.isArray(t))return Mt(new e(t),r,e,o);{const s=n.map(i=>`'${i.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new e([])}}function nt(t,e,n){e[n]=Be(t)}function Be(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n];return e}u([d({json:{write:nt}})],b.prototype,"color",void 0),u([z("color")],b.prototype,"castColor",null),u([d({nonNullable:!0,json:{write:nt}})],b.prototype,"position",void 0),u([z("position")],b.prototype,"castPosition",null),u([d({json:{write:nt}})],b.prototype,"uv",void 0),u([z("uv")],b.prototype,"castUv",null),u([d({json:{write:nt}})],b.prototype,"normal",void 0),u([z("normal")],b.prototype,"castNormal",null),u([d({json:{write:nt}})],b.prototype,"tangent",void 0),u([z("tangent")],b.prototype,"castTangent",null),b=ht=u([et("esri.geometry.support.MeshVertexAttributes")],b);var ot;const Ge=W.getLogger("esri.geometry.support.MeshComponent");let _=ot=class extends vt{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return Tt(ot,t)}castFaces(t){return Y(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Ge)}castMaterial(t){return Tt(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?He:Bt,t)}clone(){return new ot({faces:E(this.faces),shading:this.shading,material:E(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const n={faces:E(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new ot(n)}};u([d({json:{write:!0}})],_.prototype,"faces",void 0),u([z("faces")],_.prototype,"castFaces",null),u([d({type:Bt,json:{write:!0}})],_.prototype,"material",void 0),u([z("material")],_.prototype,"castMaterial",null),u([d({type:String,json:{write:!0}})],_.prototype,"shading",void 0),u([d({type:Boolean})],_.prototype,"trustSourceNormals",void 0),_=ot=u([et("esri.geometry.support.MeshComponent")],_);const Q=_;function Ve(t){const e=qe(t.rings,t.hasZ,yt.CCW_IS_HOLE),n=[];let r=0,o=0;for(const a of e.polygons){const c=a.count,l=a.index,g=new Float64Array(e.position.buffer,3*l*e.position.BYTES_PER_ELEMENT,3*c),m=a.holeIndices.map(h=>h-l),p=new Uint32Array(Ue(g,m,3));n.push({position:g,faces:p}),r+=g.length,o+=p.length}const s=Ze(n,r,o),i=We(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(i.buffer),s.faces=i.indices,s}function Ze(t,e,n){if(t.length===1)return t[0];const r=new Float64Array(e),o=new Uint32Array(n);let s=0,i=0,a=0;for(const c of t){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(let l=0;l<c.faces.length;l++)o[i++]=c.faces[l]+a;a=s/3}return{position:r,faces:o}}function qe(t,e,n){const r=t.length,o=new Array(r),s=new Array(r),i=new Array(r);let a=0,c=0,l=0,g=0;for(let h=0;h<r;++h)g+=t[h].length;const m=new Float64Array(3*g);let p=0;for(let h=r-1;h>=0;h--){const y=t[h],T=n===yt.CCW_IS_HOLE&&Ye(y);if(T&&r!==1)o[a++]=y;else{let v=y.length;for(let x=0;x<a;++x)v+=o[x].length;const $={index:p,pathLengths:new Array(a+1),count:v,holeIndices:new Array(a)};$.pathLengths[0]=y.length,y.length>0&&(i[l++]={index:p,count:y.length}),p=T?lt(y,y.length-1,-1,m,p,y.length,e):lt(y,0,1,m,p,y.length,e);for(let x=0;x<a;++x){const A=o[x];$.holeIndices[x]=p,$.pathLengths[x+1]=A.length,A.length>0&&(i[l++]={index:p,count:A.length}),p=lt(A,0,1,m,p,A.length,e)}a=0,$.count>0&&(s[c++]=$)}}for(let h=0;h<a;++h){const y=o[h];y.length>0&&(i[l++]={index:p,count:y.length}),p=lt(y,0,1,m,p,y.length,e)}return c<r&&(s.length=c),l<r&&(i.length=l),{position:m,polygons:s,outlines:i}}function lt(t,e,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=t[e];r[o++]=c[0],r[o++]=c[1],r[o++]=i?c[2]:0,e+=n}return o/3}function Ye(t){return!we(t,!1,!1)}var yt;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(yt||(yt={}));const It=W.getLogger("esri.geometry.support.meshUtils.centerAt");function Je(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=n?.origin??t.origin;f(t.transform)?(n?.geographic!=null&&n.geographic!==t.transform.geographic&&It.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),Xe(t.transform,e,r)):$t(t.spatialReference,n)?Ke(t,e,r):Qe(t,e,r)}function Xe(t,e,n){const r=e.x-n.x,o=e.y-n.y,s=e.hasZ&&n.hasZ?e.z-n.z:0,i=t.origin;t.origin=[i[0]+r,i[1]+o,i[2]+s]}function Ke(t,e,n){const r=Se(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:i}=je(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}function Qe(t,e,n){const r=nn,o=en;if(N(e,o,t.spatialReference)){if(!N(n,r,t.spatialReference)){const s=t.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,It.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}tn(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else It.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function tn(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]}const en=M(),nn=M();async function rn(t,e,n){const{loadGLTFMesh:r}=await _t(mt(()=>import("./loadGLTFMesh.7c68d165.js"),["assets/loadGLTFMesh.7c68d165.js","assets/main.33d7d020.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js","assets/quatf64.ddec7ef6.js","assets/BufferView.961dc329.js","assets/vec33.31db2bc4.js","assets/DefaultMaterial_COLOR_GAMMA.4913c503.js","assets/types.9ecfa3b0.js","assets/mat4f64.a79dd289.js","assets/enums.de935fa5.js","assets/quat.67cfba08.js","assets/vectorStacks.26dacdb1.js","assets/lineSegment.eb17a81e.js","assets/georeference.702129f6.js","assets/earcut.d30cbec0.js","assets/deduplicate.69eb3fdf.js"]),n),o=await le(e,n),s=r(new C({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:on(o),useTransform:!0,signal:f(n)?n.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:a}=await s;t.vertexAttributes=i,t.components=a}function on(t){const e=$e(t.url);return n=>{const r=ve(n,e,e),o=r?r.replace(/^ *\.\//,""):null;return t.files.get(o)??n}}async function le(t,e){return t instanceof Blob?tt.fromBlob(t):typeof t=="string"?new tt(t):Array.isArray(t)?sn(t,e):an(t,e)}async function sn(t,e){const n=new Map;let r=null;const o=await Ae(t.map(async i=>({name:i.name,source:await le(i instanceof Blob?i:i.source,e)}))),s=[];for(const i of o)i&&(be(e)?i.source.dispose():s.push(i));Me(e);for(const{name:i,source:a}of s)(it(r)||/\.(gltf|glb)/i.test(i))&&(r=a.url),n.set(i,a.url),a.files&&a.files.forEach((c,l)=>n.set(l,c));if(it(r))throw new Rt("mesh-load-external:missing-files","Missing files to load external mesh source");return new tt(r,()=>s.forEach(({source:i})=>i.dispose()),n)}async function an(t,e){const{default:n}=await _t(mt(()=>import("./main.33d7d020.js").then(function(o){return o.nb}),["assets/main.33d7d020.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js"]),e),r=typeof t.multipart[0]=="string"?await Promise.all(t.multipart.map(async o=>(await n(o,{responseType:"array-buffer"})).data)):t.multipart;return tt.fromBlob(new Blob(r))}class tt{constructor(e,n=()=>{},r=new Map){this.url=e,this.dispose=n,this.files=r}static fromBlob(e){const n=URL.createObjectURL(e);return new tt(n,()=>URL.revokeObjectURL(n))}}const ln=W.getLogger("esri.geometry.support.meshUtils.offset");function cn(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&(f(t.transform)?(n?.geographic!=null&&n.geographic!==t.transform.geographic&&ln.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),un(t.transform,e)):$t(t.spatialReference,n)?pn(t,e):hn(t,e))}function un(t,e){const n=t.origin;t.origin=Pt(M(),n,e)}function pn(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(r.length),a=f(o)?new Float32Array(o.length):null,c=f(s)?new Float32Array(s.length):null,l=t.extent.center,g=fn;ne(n,[l.x,l.y,l.z],Vt,St(n)),re(Zt,Vt),ft(g,e,Zt),jt(r,n,i),f(o)&&Nt(o,r,i,n,a),f(s)&&zt(s,r,i,n,c),ce(i,g),Ut(i,r,n),f(o)&&Wt(a,r,i,n,o),f(s)&&kt(c,r,i,n,s),t.vertexAttributesChanged()}function hn(t,e){ce(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function ce(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const fn=M(),Vt=ae(),Zt=Ht();function gn(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=An,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let c=0,l=0,g=0,m=0;for(let p=0;p<t.length;p++){const h=t[p],y=c/3;for(const v of e)a[m++]=y+v;const T=h.corners;for(let v=0;v<4;v++){const $=T[v];let x=0;i[g++]=.25*n[v][0]+h.uvOrigin[0],i[g++]=h.uvOrigin[1]-.25*n[v][1];for(let A=0;A<3;A++)h.axis[A]!==0?(o[c++]=.5*h.axis[A],s[l++]=h.axis[A]):(o[c++]=.5*$[x++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function mn(t,e){const n=t.components[0],r=n.faces,o=bn[e],s=6*o,i=new Uint32Array(6),a=new Uint32Array(r.length-6);let c=0,l=0;for(let g=0;g<r.length;g++)g>=s&&g<s+6?i[c++]=r[g]:a[l++]=r[g];if(f(t.vertexAttributes.uv)){const g=new Float32Array(t.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let h=0;h<p.length;h++)g[m+h]=p[h];t.vertexAttributes.uv=g}return t.components=[new Q({faces:i,material:n.material}),new Q({faces:a})],t}function dn(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((e-1)*n*2));let c=0,l=0,g=0,m=0;for(let p=0;p<=e;p++){const h=p/e*Math.PI+.5*Math.PI,y=Math.cos(h),T=Math.sin(h);w[2]=T;const v=p===0||p===e,$=v?n-1:n;for(let x=0;x<=$;x++){const A=x/$*2*Math.PI;w[0]=-Math.sin(A)*y,w[1]=Math.cos(A)*y;for(let P=0;P<3;P++)o[c]=.5*w[P],s[c]=w[P],++c;i[l++]=(x+(v?.5:0))/n,i[l++]=p/e,p!==0&&x!==n&&(p!==e&&(a[g++]=m,a[g++]=m+1,a[g++]=m-n),p!==1&&(a[g++]=m,a[g++]=m-n,a[g++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function yn(t=0){const n=Math.round(16*2**t),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let c=0,l=0,g=0,m=0,p=0;for(let h=0;h<=5;h++){const y=h===0||h===5,T=h<=1||h>=5-1,v=h===2||h===4,$=y?n-1:n;for(let x=0;x<=$;x++){const A=x/$*2*Math.PI,P=y?0:.5;w[0]=P*Math.sin(A),w[1]=P*-Math.cos(A),w[2]=h<=2?.5:-.5;for(let k=0;k<3;k++)o[c++]=w[k],s[l++]=T?k===2?h<=1?1:-1:0:k===2?0:w[k]/P;i[g++]=(x+(y?.5:0))/n,i[g++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,v||h===0||x===n||(h!==5&&(a[m++]=p,a[m++]=p+1,a[m++]=p-n),h!==1&&(a[m++]=p,a[m++]=p-n,a[m++]=p-n-1)),p++}}return{position:o,normal:s,uv:i,faces:a}}function xn(t,e){const n=typeof e=="number"?e:e!=null?e.width:1,r=typeof e=="number"?e:e!=null?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function wn(t){const e=rt.facingAxisOrderSwap[t],n=rt.position,r=rt.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const g=e[l],m=Math.abs(g)-1,p=g>=0?1:-1;o[i]=n[c+m]*p,s[i]=r[c+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(rt.uv),faces:new Uint32Array(rt.faces),isPlane:!0}}const B=1,G=2,V=3,rt={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[V,B,G],west:[-V,-B,G],north:[-B,V,G],south:[B,-V,G],up:[B,G,V],down:[B,-G,-V]}};function ct(t,e,n){t.isPlane||vn(t),$n(t,n&&n.size);const{vertexAttributes:r,transform:o}=Ne(t,e,n);return{vertexAttributes:new b({...r,uv:t.uv}),transform:o,components:[new Q({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function vn(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function $n(t,e){if(e==null)return;const n=typeof e=="number"?[e,e,e]:[e.width!=null?e.width:1,e.depth!=null?e.depth:1,e.height!=null?e.height:1];S[0]=n[0],S[4]=n[1],S[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let o=0;o<3;o++)w[o]=t.position[r+o];ft(w,w,S);for(let o=0;o<3;o++)t.position[r+o]=w[o]}if(n[0]!==n[1]||n[1]!==n[2]){S[0]=1/n[0],S[4]=1/n[1],S[8]=1/n[2];for(let r=0;r<t.normal.length;r+=3){for(let o=0;o<3;o++)w[o]=t.normal[r+o];ft(w,w,S),Fe(w,w);for(let o=0;o<3;o++)t.normal[r+o]=w[o]}}}const An={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},bn={south:0,east:1,north:2,west:3,up:4,down:5},w=M(),S=Ht(),ue=W.getLogger("esri.geometry.support.meshUtils.rotate");function Mn(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||e[3]===0)return;const r=t.spatialReference;if(f(t.transform)){n?.geographic!=null&&n.geographic!==t.transform.geographic&&ue.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=n?.origin??t.transform.getOriginPoint(r);Fn(t.transform,e,o)}else{const o=n?.origin??t.origin;$t(t.spatialReference,n)?Tn(t,e,o):Rn(t,e,o)}}function Fn(t,e,n){const r=oe(J,n.x,n.y,n.z),o=gt(J,r,t.origin);t.applyLocalInverse(o,qt),t.rotation=Et(t.rotation,e,at()),t.applyLocalInverse(o,o),gt(o,o,qt),t.translation=Pt(M(),t.translation,o)}function Tn(t,e,n){const r=t.spatialReference,o=St(r),s=pe;N(n,s,o)||N(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;ne(o,s,xt,o),re(Jt,xt);const p=Yt;ft(Ot(Yt),Ot(e),Jt),p[3]=e[3],jt(i,r,l),f(a)&&Nt(a,i,l,r,g),f(c)&&zt(c,i,l,r,m),K(l,p,3,s),Ut(l,i,r),f(a)&&(K(g,p,3),Wt(g,i,l,r,a)),f(c)&&(K(m,p,4),kt(m,i,l,r,c)),t.vertexAttributesChanged()}function Rn(t,e,n){const r=pe;if(!N(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ue.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}K(t.vertexAttributes.position,e,3,r),K(t.vertexAttributes.normal,e,3),K(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function K(t,e,n,r=se){if(!it(t)){Te(xt,ze(e),Ot(e));for(let o=0;o<t.length;o+=n){for(let s=0;s<3;s++)J[s]=t[o+s]-r[s];Re(J,J,xt);for(let s=0;s<3;s++)t[o+s]=J[s]+r[s]}}}const J=M(),qt=M(),Yt=at(),xt=ae(),Jt=Ht(),pe=M(),he=W.getLogger("esri.geometry.support.meshUtils.scale");function Dn(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if(f(t.transform)){n?.geographic!=null&&n.geographic!==t.transform.geographic&&he.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=n?.origin??t.transform.getOriginPoint(r);En(t.transform,e,o)}else{const o=$t(t.spatialReference,n),s=n&&n.origin||t.origin;o?On(t,e,s):Cn(t,e,s)}}function En(t,e,n){const r=oe(X,n.x,n.y,n.z),o=gt(X,r,t.origin);t.applyLocalInverse(o,Xt);const s=ie(M(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),gt(o,o,Xt),t.translation=Pt(M(),t.translation,o)}function On(t,e,n){const r=t.spatialReference,o=St(r),s=ge;N(n,s,o)||N(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;jt(i,r,l),f(a)&&Nt(a,i,l,r,g),f(c)&&zt(c,i,l,r,m),fe(l,e,s),Ut(l,i,r),f(a)&&Wt(g,i,l,r,a),f(c)&&kt(m,i,l,r,c),t.vertexAttributesChanged()}function Cn(t,e,n){const r=ge;if(!N(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,he.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}fe(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}function fe(t,e,n=se){if(t)for(let r=0;r<t.length;r+=3){for(let o=0;o<3;o++)X[o]=t[r+o]-n[o];ie(X,X,e);for(let o=0;o<3;o++)t[r+o]=X[o]+n[o]}}const X=M(),Xt=M(),ge=M();var D;const R=W.getLogger("esri.geometry.Mesh");let F=D=class extends De(Ee.LoadableMixin(Oe(Ce))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new b,this.type="mesh"}initialize(){(it(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(Le(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(t=>t.clone()),transform:f(this.transform)?this.transform.clone():null}),()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&f(this.external)&&f(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new Dt({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new C({x:0,y:0,z:0,spatialReference:e})};const n=f(this.transform)?this.transform.project(t,e):t;let r=1/0,o=1/0,s=1/0,i=-1/0,a=-1/0,c=-1/0,l=0,g=0,m=0;const p=n.length,h=1/(p/3);let y=0;for(;y<p;){const T=n[y++],v=n[y++],$=n[y++];r=Math.min(r,T),o=Math.min(o,v),s=Math.min(s,$),i=Math.max(i,T),a=Math.max(a,v),c=Math.max(c,$),l+=h*T,g+=h*v,m+=h*$}return{extent:new Dt({xmin:r,ymin:o,zmin:s,xmax:i,ymax:a,zmax:c,spatialReference:e}),center:new C({x:l,y:g,z:m,spatialReference:e})}}get anchor(){if(f(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new C({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return f(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&f(this.external)&&f(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(Q.from(t)),this.notifyChange("components")):R.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(e!==-1)return this.components.splice(e,1),void this.notifyChange("components")}R.error("removeComponent()","Provided component is not part of the list of components")}else R.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return pt(Ft.x,t,Z),pt(Ft.y,e,Kt),pt(Ft.z,n,Qt),Et(Z,Kt,Z),Et(Z,Qt,Z),Mn(this,Z,r),this}offset(t,e,n,r){return this.loaded?(ut[0]=t,ut[1]=e,ut[2]=n,cn(this,ut,r),this):(R.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(Dn(this,t,e),this):(R.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(Je(this,t,e),this):(R.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return f(this.external)&&this.addResolvingPromise(rn(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map(r=>r.cloneWithDeduplication(t,e)):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:f(this.transform)?this.transform.clone():null,external:f(this.external)?{source:this.external.source,extent:f(this.external.extent)?this.external.extent.clone():null}:null};return new D(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await mt(()=>import("./gltfexport.905498a2.js"),["assets/gltfexport.905498a2.js","assets/main.33d7d020.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js","assets/quat.67cfba08.js","assets/quatf64.ddec7ef6.js","assets/georeference.702129f6.js","assets/mat4f64.a79dd289.js","assets/BufferView.961dc329.js","assets/vec33.31db2bc4.js","assets/enums.de935fa5.js","assets/imageutils.6308b96a.js","assets/earcut.d30cbec0.js","assets/deduplicate.69eb3fdf.js"]);return e(this,t)}static createBox(t,e){if(!(t instanceof C))return R.error(".createBox()","expected location to be a Point instance"),null;const n=new D(ct(gn(),t,e));return e&&e.imageFace&&e.imageFace!=="all"?mn(n,e.imageFace):n}static createSphere(t,e){return t instanceof C?new D(ct(dn(e&&e.densificationFactor||0),t,e)):(R.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof C?new D(ct(yn(e&&e.densificationFactor||0),t,e)):(R.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){if(!(t instanceof C))return R.error(".createPlane()","expected location to be a Point instance"),null;const n=e?.facing??"up",r=xn(n,e?.size);return new D(ct(wn(n),t,{...e,size:r}))}static createFromPolygon(t,e){if(!(t instanceof Ie))return R.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=Ve(t);return new D({vertexAttributes:new b({position:n.position}),components:[new Q({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,n){if(!(t instanceof C))throw R.error(".createfromGLTF()","expected location to be a Point instance"),new Rt("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await _t(mt(()=>import("./loadGLTFMesh.7c68d165.js"),["assets/loadGLTFMesh.7c68d165.js","assets/main.33d7d020.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js","assets/quatf64.ddec7ef6.js","assets/BufferView.961dc329.js","assets/vec33.31db2bc4.js","assets/DefaultMaterial_COLOR_GAMMA.4913c503.js","assets/types.9ecfa3b0.js","assets/mat4f64.a79dd289.js","assets/enums.de935fa5.js","assets/quat.67cfba08.js","assets/vectorStacks.26dacdb1.js","assets/lineSegment.eb17a81e.js","assets/georeference.702129f6.js","assets/earcut.d30cbec0.js","assets/deduplicate.69eb3fdf.js"]),n);return new D(await r(t,e,n))}static createWithExternalSource(t,e,n){const r=n?.extent??null,o=n?.transform.clone()??new dt;o.origin=[t.x,t.y,t.z??0];const s=t.spatialReference;return new D({external:{source:e,extent:r},transform:o,spatialReference:s})}static createIncomplete(t,e){const n=e?.transform.clone()??new dt;n.origin=[t.x,t.y,t.z??0];const r=t.spatialReference,o=new D({transform:n,spatialReference:r});return o.addResolvingPromise(Promise.reject(new Rt("mesh-incomplete","Mesh resources are not complete"))),o}};u([d({type:[Q],json:{write:!0}})],F.prototype,"components",void 0),u([d({type:dt,json:{write:!0}})],F.prototype,"transform",void 0),u([d({constructOnly:!0})],F.prototype,"external",void 0),u([d({readOnly:!0})],F.prototype,"hasExtent",null),u([d({readOnly:!0})],F.prototype,"boundingInfo",null),u([d({readOnly:!0})],F.prototype,"anchor",null),u([d({readOnly:!0})],F.prototype,"origin",null),u([d({readOnly:!0,json:{read:!1}})],F.prototype,"extent",null),u([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],F.prototype,"hasZ",void 0),u([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],F.prototype,"hasM",void 0),u([d({type:b,nonNullable:!0,json:{write:!0}})],F.prototype,"vertexAttributes",void 0),F=D=u([et("esri.geometry.Mesh")],F);const Ft={x:At(1,0,0),y:At(0,1,0),z:At(0,0,1)},Z=at(),Kt=at(),Qt=at(),ut=M(),te=F;var U,wt;(function(t){t.featureGUID="featureGUID",t.assetName="assetName",t.hash="hash",t.type="type",t.conversionStatus="conversionStatus",t.flags="flags",t.complexity="complexity",t.size="size",t.seqNo="seqNo",t.sourceHash="sourceHash",t.assetURL="assetURL"})(U||(U={})),function(t){t.SUBMITTED="SUBMITTED",t.INPROGRESS="INPROGRESS",t.FAILED="FAILED",t.COMPLETED="COMPLETED"}(wt||(wt={}));function Ln(t,e,n){const r=n.features;n.features=[],delete n.geometryType;const o=_e.fromJSON(n);o.geometryType="mesh";const s=o.spatialReference,i=it(t.outFields)||!t.outFields.length?()=>({}):In(t.outFields.includes("*")?null:new Set(t.outFields));for(const a of r){const c=_n(a,s,e);f(c)&&o.features.push(new Pe({geometry:c,attributes:i(a)}))}return o}function In(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const n in e)t.has(n)||delete e[n];return e}}function _n(t,e,n){const{status:r,source:o}=jn(t);if(r===j.FAILED)return null;const s=Pn(t,e,n),i=Dt.fromJSON(t.geometry);i.spatialReference=e;const a=Sn(t,n);return r===j.PENDING?te.createIncomplete(s,{extent:i,transform:a}):te.createWithExternalSource(s,o,{extent:i,transform:a})}function Pn({attributes:t},e,{transformFieldRoles:n}){return new C({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}function Sn({attributes:t,assetMappings:e},{transformFieldRoles:n}){return new dt({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:pt([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!e[U.flags]?.includes("PROJECT_VERTICES")})}function jn(t){if(!t.assetMappings)return{status:j.FAILED};const e=[],n=new Map;for(const r of t.assetMappings){const o=r[U.seqNo],s=r[U.assetName],i=r[U.assetURL],a=r[U.conversionStatus];if(a===wt.FAILED)return{status:j.FAILED};if(a!==wt.COMPLETED)return{status:j.PENDING};if(o==null)e.push({name:s,source:i});else{const c=n.get(s);let l;c?l=c.multipart:(l=[],e.push({name:s,source:{multipart:l}}),n.set(s,{multipart:l})),l[o]=i}}return{status:j.COMPLETED,source:e}}var j;(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(j||(j={}));var Gn=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:Ln},Symbol.toStringTag,{value:"Module"}));export{Gn as a,He as c,Q as f,st as m,b as p};
