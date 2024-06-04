import{f3 as k,bp as U,U as z,fg as I,j as F,O as W,aP as H,aO as v,w as L,r as D,b as Y,g9 as K,k as $,fd as J,a2 as j,bK as Q,a5 as X,e as V,y as S,n as Z}from"./main-5cf1c59e.js";import{b as P,g as tt,d as et}from"./kmlUtils-ad4816e8.js";import{T as it,S as at,R as st}from"./Bitmap-3711f231.js";import{a as rt}from"./BitmapContainer-ba92ca09.js";import{f as ot,u as nt}from"./LayerView-c0560467.js";import{i as M}from"./GraphicContainer-7d499223.js";import{a as R}from"./GraphicsView2D-4c7d71e2.js";import{C as lt,$ as ht}from"./rasterProjectionHelper-8a44529a.js";import{n as pt}from"./WGLContainer-7874abb9.js";import{I as mt,o as ct}from"./RenderingContext-fbef425d.js";import{P as T,G as E,D as q,L as G,Y as dt,V as gt,f as N}from"./enums-64ab819c.js";import{x as ut}from"./VertexArrayObject-ab13e3c1.js";import{l as _t}from"./rasterUtils-20ce08c1.js";import{E as B}from"./Texture-3b1fa19c.js";import"./preload-helper-388ac9d5.js";import"./Container-191a0ce8.js";import"./definitions-19bfb61c.js";import"./color-a7fe2a4e.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-fed738ba.js";import"./FeatureContainer-f5ba59e0.js";import"./AttributeStoreView-064109fb.js";import"./TiledDisplayObject-a85ac290.js";import"./visualVariablesUtils-ee4ab76f.js";import"./visualVariablesUtils-e5595195.js";import"./TileContainer-946fa843.js";import"./utils-76d681a4.js";import"./MaterialKey-fe729802.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-23a50084.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ee5d9361.js";import"./floatRGBA-b5c59a98.js";import"./normalizeUtilsSync-68d98734.js";import"./projectionSupport-215b6a73.js";import"./json-48e3ea08.js";import"./Matcher-8d5067fa.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-09dbcf79.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-f5308cff.js";import"./util-6f06d662.js";import"./ComputedAttributeStorage-f7beeabd.js";import"./arcadeTimeUtils-02563f44.js";import"./executionError-c1d13a98.js";import"./centroid-108b2481.js";import"./ProgramTemplate-901aaaaf.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./programUtils-1d6d7e20.js";import"./NestedMap-7c434b47.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./basicInterfaces-b7051eb1.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./webgl-debug-b1f7a2c5.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas").getContext("webgl");i.getExtension("OES_texture_float"),this._rctx=new mt(i,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=ct("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new pt(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const i=k(t.extent,a),s=new U({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:n,y:l}=lt(s,a,t.extent);let h=(n+l)/2;const o=Math.round((i.xmax-i.xmin)/h),d=Math.round((i.ymax-i.ymin)/h);h=(i.width/o+i.height/d)/2;const C=new U({x:h,y:h,spatialReference:i.spatialReference}),w=ht({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:C,hasWrapAround:!0,spacing:[16,16]}),x=_t(this._rctx,w),u=new B(this._rctx,{width:o,height:d,pixelFormat:T.RGBA,dataType:E.UNSIGNED_BYTE,wrapMode:q.CLAMP_TO_EDGE,samplingMode:G.LINEAR,hasMipmap:!1}),m=new ut(this._rctx,{colorTarget:dt.TEXTURE,depthStencilTarget:gt.NONE,width:o,height:d},u);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,o,d),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(x,1),this._quad.bind();const{width:y=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,f),this._program.setUniform2fv("u_transformSpacing",w.spacing),this._program.setUniform2fv("u_transformGridSize",w.size),this._program.setUniform2f("u_targetImageSize",o,d),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),x.dispose(),r){const{width:_=0,height:c=0}=m.descriptor,b=new ImageData(_,c);return m.readPixels(0,0,_,c,T.RGBA,E.UNSIGNED_BYTE,b.data),m.detachColorTexture(N.COLOR_ATTACHMENT0),m.dispose(),{texture:u,extent:i,imageData:b}}return m.detachColorTexture(N.COLOR_ATTACHMENT0),m.dispose(),{texture:u,extent:i}}reprojectBitmapData(t,a){const r=it(t.bitmapData)?at(t.bitmapData):t.bitmapData,i=new B(this._rctx,{width:t.bitmapData.width,height:t.bitmapData.height,pixelFormat:T.RGBA,dataType:E.UNSIGNED_BYTE,wrapMode:q.CLAMP_TO_EDGE,samplingMode:G.LINEAR,hasMipmap:!1},r),s=this.reprojectTexture({texture:i,extent:t.extent},a,!0);s.texture.dispose();const n=document.createElement("canvas"),l=s.imageData;return n.width=l.width,n.height=l.height,n.getContext("2d").putImageData(l,0,0),{bitmapData:n,extent:s.extent}}async loadAndReprojectBitmapData(t,a,r){const i=(await z(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=i.width,s.height=i.height;const n=s.getContext("2d");n.drawImage(i,0,0);const l=n.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:l,extent:a};const h=this.reprojectBitmapData({bitmapData:l,extent:a},r);return{bitmapData:h.bitmapData,extent:h.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class O{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let g=class extends ot(nt){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new rt,this._kmlVisualData=new O,this._fetchController=null,this.allVisiblePoints=new I,this.allVisiblePolylines=new I,this.allVisiblePolygons=new I,this.allVisibleMapImages=new F}async hitTest(e,t){const a=this.layer;return[this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map(r=>(r.layer=a,r.sourceLayer=a,{type:"graphic",graphic:r,layer:a,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),W(()=>this.layer.visibleSublayers,e=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of e){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=H(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=v(this._polygonsView),this._polylinesView=v(this._polylinesView),this._pointsView=v(this._pointsView),this._imageReprojector=v(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,L.fromJSON(e.extent),this.view.spatialReference).then(t=>{const a=new st(t.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});a.x=t.extent.xmin,a.y=t.extent.ymax,a.resolution=t.extent.width/t.bitmapData.width,a.rotation=e.rotation,this._mapImageContainer.addChild(a),this._bitmapIndex.set(e,a)})}async _getViewDependentUrl(e,t){const{viewFormat:a,viewBoundScale:r,httpQuery:i}=e;if(D(a)){if(Y(t))throw new Error("Loading this network link requires a view state.");let s;if(await K(),D(r)&&r!==1){const c=new L(t.extent);c.expand(r),s=c}else s=t.extent;s=k(s,$.WGS84);const n=k(s,$.WebMercator),l=s.xmin,h=s.xmax,o=s.ymin,d=s.ymax,C=t.size[0]*t.pixelRatio,w=t.size[1]*t.pixelRatio,x=Math.max(n.width,n.height),u={"[bboxWest]":l.toString(),"[bboxEast]":h.toString(),"[bboxSouth]":o.toString(),"[bboxNorth]":d.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":C.toString(),"[vertPixels]":w.toString(),"[terrainEnabled]":"0","[clientVersion]":J,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const b in c)for(const A in u)c[b]=c[b].replace(A,u[A])},y=j(a);m(y);let f={};D(i)&&(f=j(i),m(f));const _=Q(e.href);return _.query={..._.query,...y,...f},`${_.path}?${X(y)}`}return e.href}async _fetchService(e){const t=new O;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!t?.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,a){return this._fetchParsedKML(e,a).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const s=i.points?await P(i.points):[],n=i.polylines?await P(i.polylines):[],l=i.polygons?await P(i.polygons):[],h=i.mapImages||[];if(t.allPoints.push(...s.map(o=>({item:o,sublayerId:i.id}))),t.allPolylines.push(...n.map(o=>({item:o,sublayerId:i.id}))),t.allPolygons.push(...l.map(o=>({item:o,sublayerId:i.id}))),t.allMapImages.push(...h.map(o=>({item:o,sublayerId:i.id}))),i.networkLink){const o=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(o,t,a)}}})}_fetchParsedKML(e,t){return tt(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>et(a.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};V([S()],g.prototype,"_pointsView",void 0),V([S()],g.prototype,"_polylinesView",void 0),V([S()],g.prototype,"_polygonsView",void 0),V([S()],g.prototype,"updating",void 0),g=V([Z("esri.views.2d.layers.KMLLayerView2D")],g);const ve=g;export{ve as default};
