import{e as r,y as o,n as y,R as q,jQ as x,gB as v,b8 as u,aX as B,aY as _,aZ as E,l9 as N,a_ as L,lm as V,fb as g,o as A,r as O,b0 as k,lf as D,n2 as S,f as l,V as K,U as G,u as C,lh as M,fY as U,b1 as Y,lp as z,lN as Q,bg as X,li as Z,b4 as H}from"./main-7ed7b27d.js";import{E as J,L as T}from"./SceneService-536aca02.js";import{c as P,d as W,b as ee,a as te}from"./PointCloudUniqueValueRenderer-301644dd.js";import"./preload-helper-388ac9d5.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-a05ddf5c.js";let c=class extends q{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],c);const m=c;var b;let d=b=class extends m{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([o({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([o({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const re=d;var w;let f=w=class extends m{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new w({field:this.field,includedReturns:u(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=w=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const oe=f;var I;let p=I=class extends m{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new I({field:this.field,mode:this.mode,values:u(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=I=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const ie=p,se={key:"type",base:m,typeMap:{value:ie,bitfield:re,return:oe}};var $;let h=$=class extends P{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new $({...this.cloneProperties(),field:u(this.field)})}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],h.prototype,"field",void 0),h=$=r([y("esri.renderers.PointCloudRGBRenderer")],h);const ne=h,F={key:"type",base:P,typeMap:{"point-cloud-class-breaks":W,"point-cloud-rgb":ne,"point-cloud-stretch":ee,"point-cloud-unique-value":te},errorContext:"renderer"},R=Z();let i=class extends J(B(_(E(N(L(V(H))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new g;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new g({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){A("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=O(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(k).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=D(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=K(this.parsedUrl.path,`./statistics/${s.key}`);return G(a,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(j=>j.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(T.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(T.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(M)],i.prototype,"popupEnabled",void 0),r([o({type:U,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[se],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[g]})],i.prototype,"fields",void 0),r([o(R.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([Y("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(R.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(z)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(Q)],i.prototype,"legendEnabled",void 0),r([o({types:F,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:F},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([X("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([y("esri.layers.PointCloudLayer")],i);const fe=i;export{fe as default};
