import{b4 as i}from"./main-83b7c6ef.js";function a(r){if(Array.isArray(r)){if(r.length<i)return r;for(const t of r)if(t>=65536)return new Uint32Array(r);return new Uint16Array(r)}if(r.length<i)return Array.from(r);if(r.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return r;for(const t of r)if(t>=65536)return r;return new Uint16Array(r)}function y(r){const t=3*r;return t<=i?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let n=(()=>{const r=new Uint32Array(131072);for(let t=0;t<r.length;++t)r[t]=t;return r})();const u=[0],f=(()=>{const r=new Uint16Array(65536);for(let t=0;t<r.length;++t)r[t]=t;return r})();function A(r){if(r===1)return u;if(r<i)return Array.from(new Uint16Array(f.buffer,0,r));if(r<f.length)return new Uint16Array(f.buffer,0,r);if(r>n.length){const t=Math.max(2*n.length,r);n=new Uint32Array(t);for(let e=0;e<n.length;e++)n[e]=e}return new Uint32Array(n.buffer,0,r)}function l(r){if(r===1)return u;if(r<i)return Array.from(new Uint16Array(f.buffer,0,r));if(r<f.length)return new Uint16Array(f.slice(0,r));if(r>n.length){const t=new Uint32Array(r);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(n.slice(0,r))}export{a as n,A as o,y as t,l as u};
