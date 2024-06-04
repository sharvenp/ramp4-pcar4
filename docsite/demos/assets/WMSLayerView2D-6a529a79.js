import{e as s,y as m,fc as F,k as I,fk as M,bz as S,c as g,bq as E,p as q,bp as R,w as U}from"./main-69e2a69d.js";import{a as b}from"./BitmapContainer-477c2a9d.js";import{f as V,u as W}from"./LayerView-3c3a6846.js";import{v as L}from"./ExportStrategy-e19338e4.js";import{i as j}from"./RefreshableLayerView-11eae078.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-73e62161.js";import"./definitions-cc1dbf1d.js";import"./VertexArrayObject-0184481a.js";import"./Texture-f9376f18.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-c2cf25df.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-779862e7.js";import"./MaterialKey-394f2e49.js";import"./utils-3ff9d654.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-ee830452.js";import"./earcut-61f7b102.js";import"./Bitmap-c81bfe5f.js";const z=e=>{let t=class extends e{initialize(){this.exportImageParameters=new M({layer:this.layer})}destroy(){this.exportImageParameters=S(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(a){const{layer:i}=this;if(!a)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:p}=i;if(!p)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(a);if(!u)return Promise.resolve([]);const{extent:r,width:o,height:n,x:d,y:c}=u;if(!(r&&o&&n))throw new g("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:r,width:o,height:n});return i.fetchFeatureInfo(r,o,n,d,c)}};return s([m()],t.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],t.prototype,"exportImageVersion",null),s([m()],t.prototype,"layer",void 0),s([m(F)],t.prototype,"timeExtent",void 0),t=s([I("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends z(j(V(W))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{E(t)||q.getLogger(this.declaredClass).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:a}=e;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=S(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:a}=this,{x:i,y:p}=e,{spatialReference:u}=t;let r,o=0,n=0;if(a.children.some(C=>{const{width:x,height:f,resolution:w,x:l,y}=C,v=l+w*x,P=y-w*f;return i>=l&&i<=v&&p<=y&&p>=P&&(r=new U({xmin:l,ymin:P,xmax:v,ymax:y,spatialReference:u}),o=x,n=f,!0)}),!r)return null;const d=r.width/o,c=Math.round((i-r.xmin)/d),$=Math.round((r.ymax-p)/d);return{extent:r,width:o,height:n,x:c,y:$}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,a,i){return this.layer.fetchImageBitmap(e,t,a,{timeExtent:this.timeExtent,...i})}};s([m()],h.prototype,"strategy",void 0),s([m()],h.prototype,"updating",void 0),h=s([I("esri.views.2d.layers.WMSLayerView2D")],h);const pt=h;export{pt as default};