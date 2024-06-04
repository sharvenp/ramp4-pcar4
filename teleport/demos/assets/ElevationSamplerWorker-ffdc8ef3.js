import{r as l,h}from"./main-bbf05f59.js";import{h as m}from"./PooledRBush-e0387f5b.js";import{f as u}from"./georeference-32db351e.js";import"./preload-helper-388ac9d5.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-ea924916.js";import"./quat-af809cba.js";import"./quatf64-3363c48e.js";import"./BufferView-246ab3ce.js";import"./vec33-6f5e76d5.js";class g{async createIndex(t,o){const e=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new m;const a=this._createMeshData(t),n=l(o)?await o.invoke("createIndexThread",a,{transferList:e}):this.createIndexThread(a).result;return this._createPooledRBush().fromJSON(n)}createIndexThread(t){const o=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,o,t.components.map(a=>new Uint32Array(a))):this._createIndexAllThread(e,o)}_createIndexAllThread(t,o){const e=new Array(o.length/9);let a=0;for(let n=0;n<o.length;n+=9)e[a++]=c(o,n+0,n+3,n+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,o,e){let a=0;for(const s of e)a+=s.length/3;const n=new Array(a);let p=0;for(const s of e)for(let i=0;i<s.length;i+=3)n[p++]=c(o,3*s[i+0],3*s[i+1],3*s[i+2]);return t.load(n),{result:t.toJSON()}}_createMeshData(t){const o=(t.transform?u({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(e=>!e.faces)?{position:o}:{position:o,components:t.components.map(e=>e.faces)}}_createPooledRBush(){return new m(9,h("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function c(r,t,o,e){return{minX:Math.min(r[t+0],r[o+0],r[e+0]),maxX:Math.max(r[t+0],r[o+0],r[e+0]),minY:Math.min(r[t+1],r[o+1],r[e+1]),maxY:Math.max(r[t+1],r[o+1],r[e+1]),p0:[r[t+0],r[t+1],r[t+2]],p1:[r[o+0],r[o+1],r[o+2]],p2:[r[e+0],r[e+1],r[e+2]]}}export{g as default};
