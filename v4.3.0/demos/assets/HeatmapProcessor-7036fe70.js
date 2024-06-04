import{e as _,k as F,eA as S,r as U,er as f,eB as v}from"./main-83b7c6ef.js";import{o as E}from"./definitions-cc1dbf1d.js";import{p as O}from"./BaseProcessor-ddc83ec6.js";import{o}from"./tileUtils-c2f19f52.js";import"./preload-helper-388ac9d5.js";class n{constructor(t,i){this.offset=t,this.extent=i}}function g(s){const t=s.key,i=new Map,r=256,e=E,a=s.tileInfoView.tileInfo.isWrappable;return i.set(o(t,-1,-1,a).id,new n([-e,-e],[e-r,e-r,e,e])),i.set(o(t,0,-1,a).id,new n([0,-e],[0,e-r,e,e])),i.set(o(t,1,-1,a).id,new n([e,-e],[0,e-r,r,e])),i.set(o(t,-1,0,a).id,new n([-e,0],[e-r,0,e,e])),i.set(o(t,1,0,a).id,new n([e,0],[0,0,r,e])),i.set(o(t,-1,1,a).id,new n([-e,e],[e-r,0,e,r])),i.set(o(t,0,1,a).id,new n([0,e],[0,0,e,r])),i.set(o(t,1,1,a).id,new n([e,e],[0,0,r,r])),i}let p=class extends O{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(s,t){const i=t.schema.processors[0];i.type==="heatmap"&&S(this._schema,i)&&(s.mesh=!0,this._schema=i)}onTileUpdate(s){for(const t of s.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(s){const t={clear:!0};return this._tileKeyToFeatureSets.delete(s.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:s.id,data:t})}async onTileMessage(s,t,i){this._tileKeyToFeatureSets.has(s.key.id)||this._tileKeyToFeatureSets.set(s.key.id,new Map);const r=this._tileKeyToFeatureSets.get(s.key.id);if(r&&U(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&r.set(t.addOrUpdate.instance,t),t.end){const e=[],a=g(s);this._tileKeyToFeatureSets.forEach((m,d)=>{if(d===s.key.id)m.forEach(l=>f(l.addOrUpdate,h=>e.push(h)));else if(a.has(d)){const l=a.get(d),[h,T]=l.offset;m.forEach(w=>f(w.addOrUpdate,k=>{const K=k.transform(h,T,1,1);e.push(K)}))}});const c=v(e,this._schema.mesh,512,512),u={tileKey:s.key.id,intensityInfo:c},y=[c.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",u,{...i,transferList:y})}}onTileError(s,t,i){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:s.id,error:t},i)}};p=_([F("esri.views.2d.layers.features.processors.HeatmapProcessor")],p);const b=p;export{b as default};