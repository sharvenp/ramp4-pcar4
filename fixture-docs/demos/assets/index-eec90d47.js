import{hi as x,hu as C}from"./main-5cf1c59e.js";import{f as a}from"./fabric-a03a5645.js";import"./preload-helper-388ac9d5.js";const M=30,N=20,T=16,G=12,L=8,u=32,d=32,k=350,w=20,m="Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";class E extends x{get config(){return this.$iApi.fixture.get("export").config?.legend}async make(o){const r=C(this.$vApp.$pinia).layers;if(r.length===0)return new a.fabric.Group([],{originX:"left"});const t=Math.min(r.length,Math.floor(o.width/(k+w))||1),e=(o.width-(t-1)*w)/t;let n=0;const l=(await Promise.all(this._makeSegments(r,e))).map(({title:c,items:f},b)=>{b>0&&(n+=M),c.top=n,n+=c.height+N;const p=f.map(({title:h,items:y},I)=>{const S=[];return h&&!(f.length===1&&h.text===c.text)&&(I>0&&(n+=T),h.top=n,n+=h.height+G,S.push(h)),y.forEach(g=>{g.top=n,n+=g.height+L}),[...S,...y].filter(g=>g)});return new a.fabric.Group([c,...p.flat()])}).flat(),s=this._makeColumns(l,e,t);return Promise.resolve(s)}_makeColumns(o,r,t){let e=0,n=0,i=0;const l=o[o.length-1].aCoords.bl.y/t;return o.forEach((s,c)=>{const f=c!==o.length-1?o[c+1].top-s.top:s.height,b=i>l*(e+1),p=n!==0&&f>l,h=t-e>o.length-c;(b||p||h)&&e<t&&(++e,n=0),s.left=e*(r+w),s.top=n,n+=f,i+=f}),new a.fabric.Group(o,{originX:"left"})}_makeSegments(o,r){return o.map(async t=>{const e=new a.fabric.Textbox(t.name,{fontSize:24,fontFamily:m,width:r}),n=this._getLayerTreeIds(t);let i=[];return i=t.supportsSublayers?await Promise.all(this._makeSegmentChunks(n,t,r)):await Promise.all(this._makeSegmentChunks([-1],t,r)),{title:e,items:i}})}_makeSegmentChunks(o,r,t){const e=r;return o.map(async n=>{const i=n===-1?e:e.getSublayer(n);if(!i)return{title:new a.fabric.Textbox("ERROR",{fontSize:20,fontFamily:m,width:t}),items:[]};await Promise.all(i.legend.map(f=>f.drawPromise));const l=i.legend,s=new a.fabric.Textbox(i.name,{fontSize:20,fontFamily:m,width:t}),c=await Promise.all(this._makeChunkItems(l,t));return{title:s,items:c}})}_makeChunkItems(o,r){return o.map(async t=>{const e=(await F(a.fabric.loadSVGFromString)(t.svgcode))[0];if(t.esriStandard){e.originY="center",e.top=u/2;const n=new a.fabric.Textbox(t.label,{fontSize:12,fontFamily:m,originY:"center",left:d+20,top:u/2,width:r-d-20});return new a.fabric.Group([e,n],{height:u})}else{const n=new a.fabric.Textbox(t.label,{fontSize:12,fontFamily:m,originY:"center",left:0,top:u/2,width:r}),i=Number(t.imgWidth),l=Number(t.imgHeight),s=Math.min(1,r/i);return e&&(e.originY="center",e.top=l*s/2+u,e.scaleToHeight(l*s),e.scaleToWidth(i*s)),new a.fabric.Group([n,e].filter(Boolean),{height:l*s+u})}})}_getLayerTreeIds(o){const r=[],t=[...o.sublayers];for(;t.length>0;){const e=t.shift();e&&(e.visibility&&r.push(e.layerIdx),t.push(...e.sublayers))}return r}}const F=_=>o=>new Promise(r=>{_(o,t=>{r(t)})});export{E as default};
