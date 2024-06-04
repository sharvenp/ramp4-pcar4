import{h as s,j as p,K as r,N as a,O as o}from"./main.33d7d020.js";import{f as g,u as m}from"./LayerView.53ba493a.js";import{i as l}from"./GraphicContainer.560ad31d.js";import{a as c}from"./BaseGraphicContainer.150dd7ff.js";import"./preload-helper.387dac8f.js";import"./utils.7b62fe23.js";import"./Utils.57d8db19.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.f83f8541.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.cf505ce5.js";import"./CIMSymbolHelper.5220d63f.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.81c030fc.js";import"./projectionSupport.c4301e0c.js";import"./json.d1a0fa35.js";import"./VertexArrayObject.b7b30936.js";import"./FeatureContainer.8afc87c8.js";import"./TileContainer.d3a549ea.js";import"./WGLContainer.adae2513.js";import"./ProgramTemplate.68308178.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./visualVariablesUtils.21a05a73.js";import"./visualVariablesUtils.ad8715a1.js";import"./Matcher.18f213b9.js";import"./tileUtils.fe90fe1b.js";import"./TileClipper.b8f35890.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.2d641832.js";import"./quantizationUtils.0b483864.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.b60ba386.js";import"./createSymbolSchema.6c920fb3.js";import"./MD5.97b39efc.js";import"./util.c2280301.js";import"./ComputedAttributeStorage.0aefd524.js";import"./centroid.ebd55a46.js";import"./vec3f32.8d37ecf5.js";const n={remove(){},pause(){},resume(){}};let h=class extends g(m){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate)}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof s?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):p.isCollection(i)&&i.length>0&&(t=i.map(e=>e&&e.uid).toArray()),t=t?.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):n}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};r([a()],h.prototype,"graphicsView",void 0),h=r([o("esri.views.2d.layers.GraphicsLayerView2D")],h);const hi=h;export{hi as default};
