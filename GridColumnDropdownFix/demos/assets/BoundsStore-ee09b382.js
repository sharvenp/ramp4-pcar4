import{h as o,iM as h}from"./main-603bdb2f.js";import{h as a}from"./PooledRBush-ccd25bf4.js";const _=5e4,t={minX:0,minY:0,maxX:0,maxY:0};function u(d){t.minX=d[0],t.minY=d[1],t.maxX=d[2],t.maxY=d[3]}function l(d,s,i){u(s),d.search(t,i)}class B{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new a(9,o("esri-csp-restrictions")?s=>({minX:s[0],minY:s[1],maxX:s[2],maxY:s[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const s=new Array(this._idByBounds.size);let i=0;this._idByBounds.forEach((n,e)=>{s[i++]=e}),this._indexInvalid=!1,this._index.clear(),this._index.load(s)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(s=>this._idByBounds.has(s))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const s=h();for(const i of this._boundsById.values())i&&(s[0]=Math.min(i[0],s[0]),s[1]=Math.min(i[1],s[1]),s[2]=Math.max(i[2],s[2]),s[3]=Math.max(i[3],s[3]));return s}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(s){const i=this._boundsById.get(s);this._boundsById.delete(s),i&&(this._idByBounds.delete(i),this._indexInvalid||this._index.remove(i))}forEachInBounds(s,i){this._loadIndex(),l(this._index,s,n=>i(this._idByBounds.get(n)))}get(s){return this._boundsById.get(s)}has(s){return this._boundsById.has(s)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(s,i){if(!this._indexInvalid){const n=this._boundsById.get(s);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(s,i),i&&(this._idByBounds.set(i,s),this._indexInvalid||(this._boundsToLoad.push(i),this._boundsToLoad.length>_&&this._loadIndex()))}}export{B as o};
