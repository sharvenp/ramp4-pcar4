import{h as i}from"./main-5cf1c59e.js";import{T as n}from"./color-a7fe2a4e.js";import{c as l,h as a,x as o}from"./WGLContainer-7874abb9.js";const c=(s,e)=>s.key.level-e.key.level!=0?s.key.level-e.key.level:s.key.row-e.key.row!=0?s.key.row-e.key.row:s.key.col-e.key.col;class p extends l{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(c),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,t=super.createRenderParams(e);return t.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,t.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),t}prepareRenderPasses(e){const r=super.prepareRenderPasses(e);return r.push(e.registerRenderPass({name:"stencil",brushes:[a],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT,target:()=>this.getStencilTarget()})),i("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[o],drawPhase:n.DEBUG,target:()=>this.children})),r}getStencilTarget(){return this.children}setStencilReference(e){let r=1;for(const t of this.children)t.stencilRef=r++}}export{p as i};
