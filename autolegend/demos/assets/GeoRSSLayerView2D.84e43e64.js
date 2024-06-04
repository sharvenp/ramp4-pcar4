import{ak as l,bn as h,F as g,j as f,fe as w,ff as u,fg as n,K as d,O as b}from"./main.4cbfea05.js";import{f as S,u as V}from"./LayerView.afe98ab1.js";import{i as v}from"./GraphicContainer.2c0272df.js";import{a as _}from"./BaseGraphicContainer.c9c55d71.js";import"./preload-helper.387dac8f.js";import"./utils.5a31c2ed.js";import"./Utils.1f611844.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.b1d5d5f9.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.46bcefca.js";import"./CIMSymbolHelper.8f048a50.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.dd22af05.js";import"./projectionSupport.75d4be9e.js";import"./json.d1a0fa35.js";import"./VertexArrayObject.b03f3d79.js";import"./FeatureContainer.167646ea.js";import"./TileContainer.d7b4bd0c.js";import"./WGLContainer.3c5baf4e.js";import"./ProgramTemplate.8a26705e.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./visualVariablesUtils.801b8cc6.js";import"./visualVariablesUtils.b09e0a69.js";import"./Matcher.47a58cad.js";import"./tileUtils.cd147e2e.js";import"./TileClipper.b79bc359.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.955dfa12.js";import"./quantizationUtils.e8ec02b2.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.5aea7eee.js";import"./createSymbolSchema.ff346692.js";import"./MD5.97b39efc.js";import"./util.2e69a6d9.js";import"./ComputedAttributeStorage.ccc1e355.js";import"./centroid.afdacd26.js";import"./vec3f32.8d37ecf5.js";let y=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=i;return p}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([l(()=>this.layer?.featureCollections,e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),p=new f(i.features),s=t.drawingInfo,c=r?w.fromJSON(r):null,a=u(s.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new v(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>this.layer?.polygonSymbol,e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>this.layer?.lineSymbol,e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>this.layer?.pointSymbol,e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ce=y;export{ce as default};