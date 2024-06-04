import { H as x$1 } from './main-f8507314.js';
import { J, C, r as re } from './rasterProjectionHelper-cf42d028.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{constructor(t=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e);}decreaseRefCount(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.refCount--,t.refCount<=0&&(r.delete(s),t.controller&&t.controller.abort()),t.refCount}return 0}getBlock(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.ts=Date.now(),t.refCount++,r.delete(s),r.set(s,t),t.block}return null}putBlock(t,e,s,r){const i=this._cachedBlocks,c=t+"/"+e;if(i.has(c)){const t=i.get(c);t.ts=Date.now(),t.refCount++;}else i.set(c,{block:s,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer();}deleteBlock(t,e){const s=this._cachedBlocks,r=t+"/"+e;s.has(r)&&s.delete(r);}updateMaxSize(t){this._size=t,this._trim();}empty(){this._cachedBlocks.clear(),this._clearTimer();}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(null!=this._timer)return;const t=this._cachedBlocks;this._timer=setInterval((()=>{const e=Array.from(t),s=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=s-this._duration;r++)t.delete(e[r][0]);0===t.size&&this._clearTimer();}),this._interval);}_trim(){const t=this._cachedBlocks;if(-1===this._size||this._size>=t.size)return;const e=Array.from(t);for(let s=0;s<e.length-this._size;s++)t.delete(e[s][0]);}_clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r=new Map,c=new t;function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function u(e,t){const n={extent:null,rasterInfo:t,cache:new Map},o=r.get(e);return o?(o.push(n),o.length-1):(r.set(e,[n]),0)}function a(e,t){const n=r.get(e);n&&(n[t]=null,n.some((e=>null!=e))||r.delete(e));}function s(e,t,n){const o=r.get(e);if(!o)return null==t?c.decreaseRefCount(e,n):0;if(null==t||null==o[t])return c.decreaseRefCount(e,n);const l=o[t]?.cache,i=l?.get(n);if(l&&i){if(i.refCount--,0===i.refCount){l.delete(n);for(let e=0;e<o.length;e++)o[e]?.cache.delete(n);i.controller&&i.controller.abort();}return i.refCount}return 0}function m(e,t,n){const o=r.get(e);if(!o)return null==t?c.getBlock(e,n):null;if(null==t||null==o[t]){for(let e=0;e<o.length;e++){const t=o[e]?.cache.get(n);if(t)return t.refCount++,t.block}return c.getBlock(e,n)}const l=o[t]?.cache.get(n);if(l)return l.refCount++,l.block;for(let r=0;r<o.length;r++){if(r===t||!o[r])continue;const e=o[r]?.cache,l=e?.get(n);if(e&&l)return l.refCount++,e.set(n,l),l.block}return null}function x(e,t,n,o,l=null){const i=r.get(e);if(!i)return void(null==t&&c.putBlock(e,n,o,l));if(null==t||null==i[t])return void c.putBlock(e,n,o,l);const u={refCount:1,block:o,isResolved:!1,isRejected:!1,controller:l};o.then((()=>u.isResolved=!0)).catch((()=>u.isRejected=!0)),i[t]?.cache.set(n,u);}function h(e,t,n){const o=r.get(e);o?null!=t&&null!=o[t]?o[t]?.cache.delete(n):c.deleteBlock(e,n):null==t&&c.deleteBlock(e,n);}function d(e,t){const n=r.get(e);return n?n[t]??null:null}function g(e,r,c,i,u,a,f=null){const s=d(e,r);if(!s)return;const m=s.extent,{cache:x,rasterInfo:h}=s;if(m&&m.xmin===c.xmin&&m.xmax===c.xmax&&m.ymin===c.ymin&&m.ymax===c.ymax)return;i=i??0;const g=c.clone().normalize(),{spatialReference:y,transform:p}=h,k=new Set;for(let d=0;d<g.length;d++){const e=g[d];if(e.xmax-e.xmin<=i||e.ymax-e.ymin<=i)continue;let r=J(e,y,f);null!=p&&(r=p.inverseTransform(r));const c=new x$1({x:i,y:i,spatialReference:e.spatialReference});if(null==u&&!(u=C(c,y,e,f)))return;const{pyramidLevel:s,pyramidResolution:m,excessiveReading:x}=re(u,h,a||"closest");if(x)return;const{storageInfo:M}=h,{origin:R}=M,C$1={x:Math.max(0,Math.floor((r.xmin-R.x)/m.x)),y:Math.max(0,Math.floor((R.y-r.ymax)/m.y))},B=Math.ceil((r.xmax-r.xmin)/m.x-.1),j=Math.ceil((r.ymax-r.ymin)/m.y-.1),v=s>0?M.pyramidBlockWidth:M.blockWidth,b=s>0?M.pyramidBlockHeight:M.blockHeight,w=1,$=Math.max(0,Math.floor(C$1.x/v)-w),I=Math.max(0,Math.floor(C$1.y/b)-w),H=Math.floor((C$1.x+B-1)/v)+w,E=Math.floor((C$1.y+j-1)/b)+w;for(let t=I;t<=E;t++)for(let e=$;e<=H;e++)k.add(`${s}/${t}/${e}`);}x.forEach(((e,t)=>{if(!k.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t);}})),s.extent={xmin:c.xmin,ymin:c.ymin,xmax:c.xmax,ymax:c.ymax};}

export { a, g, h, i, m, s, u, x };
