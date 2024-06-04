import{gk as a,g4 as c,r as i,jT as m,w as n,jU as f,jV as u,jW as p,jX as S,jY as d,jZ as h,d as y,j_ as x,j$ as O,k0 as N}from"./main-5cf1c59e.js";import{C as J,i as b}from"./utils-86a2964a.js";import{M as g,T as k,$ as w}from"./rasterProjectionHelper-8a44529a.js";import"./preload-helper-388ac9d5.js";class D{convertVectorFieldData(t){const e=a.fromJSON(t.pixelBlock),s=c(e,t.type);return Promise.resolve(i(s)?s.toJSON():null)}async decode(t){const e=await m(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=a.fromJSON(t.pixelBlock),t.extent=t.extent?n.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(i(e)?e.toJSON():null)}async updateSymbolizer(t){this.symbolizer=f.fromJSON(t.symbolizerJSON),t.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=J(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:n.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(s=>i(s)?a.fromJSON(s):null),primaryRasterIds:t.primaryRasterIds});return i(e)?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(a.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(i(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=u(a.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=p(a.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((s,r)=>{e.set(r,s?.toJSON())}),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(l=>l?new a(l):null),s=S(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let r,o=s;return t.coefs&&(o=d(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(r=h(t.destDimension,t.gcsGrid),o=y(x(o,t.isUV?"vector-uv":"vector-magdir",r))),{pixelBlock:o?.toJSON(),localNorthDirections:r}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:r,indexData:o}=await O(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:r.buffer,indexBuffer:o.buffer},transferList:[r.buffer,o.buffer]}}async getProjectionOffsetGrid(t){const e=n.fromJSON(t.projectedExtent),s=n.fromJSON(t.srcBufferExtent);let r=null;t.datumTransformationSteps&&(r=new N({steps:t.datumTransformationSteps})),(t.includeGCSGrid||g(e.spatialReference,s.spatialReference,r))&&await k();const o=t.rasterTransform?b(t.rasterTransform):null;return w({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:r,rasterTransform:o})}}export{D as default};
