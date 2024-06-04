import { y, u, i, c, l, p, o, m, T, h, a, b, d, A, O as O$1, x, g, w, E, L, B, F, I as I$1, U, j, V, M, S, k, q, v, z, C, D as D$1, G as G$1, H as H$1 } from './BufferView-71663aa0.js';
import { e } from './types-e38a67d0.js';
import { s } from './Util-38e6df20.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class D{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const s of e.fields.keys()){const t=e.fields.get(s);this[s]=new t.constructor(this.buffer,t.offset,this.stride);}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const s=this[e];return s&&s.elementCount===t.ElementCount&&s.elementType===t.ElementType?s:null}slice(e,t){return new D(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,s=0,i=e.count){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,i*r/4);new Uint32Array(this.buffer,s*r,i*r/4).set(n);}else {const n=new Uint8Array(e.buffer,t*r,i*r);new Uint8Array(this.buffer,s*r,i*r).set(n);}return this}get usedMemory(){return this.byteLength}dispose(){}}class G{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:N(e[1].constructor)}))));}vec2f(t,s){return this._appendField(t,u,s),this}vec2f64(e,s){return this._appendField(e,m,s),this}vec3f(e,t){return this._appendField(e,i,t),this}vec3f64(e,t){return this._appendField(e,T,t),this}vec4f(e,t){return this._appendField(e,c,t),this}vec4f64(e,t){return this._appendField(e,h,t),this}mat3f(e,t){return this._appendField(e,l,t),this}mat3f64(e,t){return this._appendField(e,a,t),this}mat4f(e,t){return this._appendField(e,p,t),this}mat4f64(e,t){return this._appendField(e,b,t),this}vec4u8(e,t){return this._appendField(e,x,t),this}f32(e,t){return this._appendField(e,y,t),this}f64(e,t){return this._appendField(e,o,t),this}u8(e,t){return this._appendField(e,d,t),this}u16(e,t){return this._appendField(e,g,t),this}i8(e,t){return this._appendField(e,j,t),this}vec2i8(e,t){return this._appendField(e,V,t),this}vec2i16(e,t){return this._appendField(e,q,t),this}vec2u8(e,t){return this._appendField(e,A,t),this}vec4u16(e,t){return this._appendField(e,L,t),this}u32(e,t){return this._appendField(e,B,t),this}_appendField(e$1,t,s$1){if(this._fields.has(e$1))return void s(!1,`${e$1} already added to vertex buffer layout`);const i=t.ElementCount*e(t.ElementType),r=this._stride;this._stride+=i,this._fields.set(e$1,{size:i,constructor:t,offset:r,optional:s$1});}createBuffer(e){return new D(this,e)}createView(e){return new D(this,e)}clone(){const e=new G;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,s)=>e._fields.set(s,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e$1=1;this._fields.forEach((t=>e$1=Math.max(e$1,e(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e$1-1)/e$1)*e$1,this._lastAligned=this._fields.size;}return this._stride}get fields(){return this._fields}}function H(){return new G}class I{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const s={...e,constructor:K(e.constructor)};this.fields.push([t,s]);})),this.stride=e.stride;}}const J=[y,u,i,c,l,p,o,m,T,h,a,b,d,A,O$1,x,g,w,E,L,B,F,I$1,U,j,V,M,S,k,q,v,z,C,D$1,G$1,H$1];function K(e){return `${e.ElementType}_${e.ElementCount}`}function N(e){return O.get(e)}const O=new Map;J.forEach((e=>O.set(K(e),e)));

export { H, I };
