import{fC as i,fm as c,e as a,jF as m,M as n,jG as f,jH as u,jI as p,jJ as S,jK as d,jL as h,ae as O,jM as x,jN as y,jO as N}from"./main.33d7d020.js";import{M as J,k as b,V as g}from"./rasterProjectionHelper.aa40e636.js";import{i as j}from"./utils.3343af15.js";import"./preload-helper.387dac8f.js";class P{convertVectorFieldData(e){const t=i.fromJSON(e.pixelBlock),s=c(t,e.type);return Promise.resolve(a(s)&&s.toJSON())}async decode(e){const t=await m(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?n.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(a(t)&&t.toJSON())}async updateSymbolizer(e){this.symbolizer=f.fromJSON(e.symbolizerJSON),e.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(a(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=u(i.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=p(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s?.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(l=>l?new i(l):null),s=S(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,r=s;return e.coefs&&(r=d(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=h(e.destDimension,e.gcsGrid),r=O(x(r,e.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:r?.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await y(e.meshType,e.simulationSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=n.fromJSON(e.projectedExtent),s=n.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new N({steps:e.datumTransformationSteps})),(e.includeGCSGrid||J(t.spatialReference,s.spatialReference,o))&&await b();const r=e.rasterTransform?j(e.rasterTransform):null;return g({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{P as default};
