import{p as ae,h as J,eW as G,c as d,gv as re,r as x,d3 as ve,eA as Te,b as P,h1 as Se,eX as se,iw as oe,t as Fe,ix as we,iy as Ve}from"./main-66d02e41.js";import{L as C,E as w,S as g,V as Ee}from"./color-1f9fb8e2.js";import{c as Ie}from"./utils-d393dd32.js";import{l as ze}from"./visualVariablesUtils-0dac9b59.js";import{f as V,_ as ue,A as Oe}from"./MaterialKey-3d7461d6.js";import"./ExpandedCIM-5df49e4b.js";import{e as pe}from"./util-3f0851ea.js";function ce(e){if(!e)return C.NONE;let t=0;for(const r of e)if(r.type==="size"){const s=ze(r);t|=s,r.target==="outline"&&(t|=s<<4)}else r.type==="color"?t|=C.COLOR:r.type==="opacity"?t|=C.OPACITY:r.type==="rotation"&&(t|=C.ROTATION);return t}function E(e){return e.type==="line-marker"?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function I(e){return Oe(e)}function b(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return Le(e,t,r);case"simple-marker":case"picture-marker":return Ne(e,t,r);case"simple-line":return Me(e,t,r);case"text":return Re(e,t,r);case"label":return $e(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...E(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function $e(e,t,r){const s=e.toJSON(),i=V(w.LABEL,{...t,placement:s.labelPlacement});return{materialKey:r?I(i):i,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}function Le(e,t,r){const s=V(w.FILL,t),i=r?I(s):s,n=e.clone(),l=n.outline,u=ue(t.symbologyType);u||(n.outline=null);const a={materialKey:i,hash:n.hash(),...E(n)};if(u)return a;const o=[];if(o.push(a),l){const p=V(w.LINE,{...t,isOutline:!0}),f={materialKey:r?I(p):p,hash:l.hash(),...E(l)};o.push(f)}return{type:"composite-symbol",layers:o,hash:o.reduce((p,f)=>f.hash+p,"")}}function Me(e,t,r){const s=ue(t.symbologyType)?g.DEFAULT:t.symbologyType,i=V(w.LINE,{...t,symbologyType:s}),n=r?I(i):i,l=e.clone(),u=l.marker;l.marker=null;const a=[];if(a.push({materialKey:n,hash:l.hash(),...E(l)}),u){const o=V(w.MARKER,t),p=r?I(o):o;u.color=u.color??l.color,a.push({materialKey:p,hash:u.hash(),lineWidth:l.width,...E(u)})}return{type:"composite-symbol",layers:a,hash:a.reduce((o,p)=>p.hash+o,"")}}function Ne(e,t,r){const s=V(w.MARKER,t),i=r?I(s):s,n=E(e);return{materialKey:i,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}function Re(e,t,r){const s=V(w.TEXT,t),i=r?I(s):s,n=E(e);return{materialKey:i,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}const pt=Object.freeze(Object.defineProperty({__proto__:null,createSymbolSchema:b},Symbol.toStringTag,{value:"Module"}));function Ae(e,t){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const r=e.getVisualVariablesForType("size");if(!r[0])return 0;const s=r[0];if(t&&s.field==="cluster_count"&&t.type==="cluster")return t.clusterMaxSize;if(s.target==="outline")return 0;if(s.transformationType==="stops")return s.stops.map(i=>i.size).reduce(K,0);if(s.transformationType==="clamped-linear"){let i=-1/0,n=-1/0;return i=typeof s.maxSize=="number"?s.maxSize:s.maxSize.stops.map(l=>l.size).reduce(K,0),n=typeof s.minSize=="number"?s.minSize:s.minSize.stops.map(l=>l.size).reduce(K,0),Math.max(i,n)}return s.transformationType==="real-world-size"?30:void 0}function K(e,t){return Math.max(e,t)}const D=8,fe=D-2,_=ae.getLogger("esri.views.2d.layers.features.support.rendererUtils"),ct=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),r=t.visualVariables.map(s=>de(s)?ye(s):s);return t.visualVariables=r,t};function Be(e){return e.map(t=>de(t)?ye(t.clone()):t)}function de(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function ye(e){return e.stops=Pe(e.type,e.stops??[]),e}function L(e,t,r){return(1-r)*e+r*t}function ke(e,t){const[r,...s]=t,i=s.pop(),n=s[0].value,l=s[s.length-1].value,u=(l-n)/fe,a=[];for(let o=n;o<l;o+=u){let p=0;for(;o>=s[p].value;)p++;const f=s[p],m=t[p-1],M=o-m.value,S=f.value===m.value?1:M/(f.value-m.value);if(e==="color"){const h=s[p],v=t[p-1],c=h.color.clone();c.r=L(v.color.r,c.r,S),c.g=L(v.color.g,c.g,S),c.b=L(v.color.b,c.b,S),c.a=L(v.color.a,c.a,S),a.push({value:o,color:c,label:h.label})}else if(e==="size"){const h=s[p],v=t[p-1],c=re(h.size),O=L(re(v.size),c,S);a.push({value:o,size:O,label:h.label})}else{const h=s[p],v=L(t[p-1].opacity,h.opacity,S);a.push({value:o,opacity:v,label:h.label})}}return[r,...a,i]}function Ce(e){const[t,...r]=e,s=r.pop();for(;r.length>fe;){let i=0,n=0;for(let l=1;l<r.length;l++){const u=r[l-1],a=r[l],o=Math.abs(a.value-u.value);o>n&&(n=o,i=l)}r.splice(i,1)}return[t,...r,s]}function Pe(e,t){return t.length<=D?t:(_.warn(`Found ${t.length} Visual Variable stops, but MapView only supports ${D}. Displayed stops will be simplified.`),t.length>2*D?ke(e,t):Ce(t))}function Y(){if(J("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:r,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:i}=G("2d");return e&&r&&s||t&&i?"symbol":J("heatmap-allow-raster-fallback")?"raster":"none"}function ft(e){if(!e)return!0;switch(e.type){case"dot-density":if(!G("2d").supportsTextureFloat)return _.error(new d("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const t=Y();if(t==="none"||t==="raster"&&!J("heatmap-force-raster")){const r=G("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(i=>!r[i]).join(", ");if(t==="none")return _.errorOnce(new d("webgl-missing-extension",`Missing WebGL${r.type} requirements for Heatmap: ${s}`)),!1;t==="raster"&&_.warnOnce(`Missing WebGL${r.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`)}break}}return!0}const z=ae.getLogger("esri.views.2d.layers.features.schemaUtils"),y="ValidationError";function W(e,t){let r=0,s=0,i=g.DEFAULT;if(x(e)){if(s=Ae(e,t),"visualVariables"in e&&(r=ce(e.visualVariables||[]),e.type==="dot-density"&&(i=g.DOT_DENSITY)),e.type==="heatmap"&&(i=g.HEATMAP),e.type==="dictionary")return{maxVVSize:s,vvFlags:r,symbologyType:g.DEFAULT};if(e.type==="pie-chart")return{maxVVSize:s,vvFlags:r,symbologyType:g.PIE_CHART};if(i!==g.DOT_DENSITY&&i!==g.HEATMAP){const n=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&n.push(e.backgroundFillSymbol);let l=!0,u=!0;for(const a of n)if(a.type==="cim"&&(u=!1),a.type==="simple-fill"||a.type==="picture-fill"){const o=a.outline,p=o&&o.style!=="none"&&o.style!=="solid",f=a.type==="simple-fill"&&a.style!=="none"&&a.style!=="solid";p&&(l=!1),(a.type==="picture-fill"||f||p)&&(u=!1)}l?i=u?g.OUTLINE_FILL_SIMPLE:g.OUTLINE_FILL:u&&(i=g.SIMPLE)}}return{vvFlags:r,maxVVSize:s,symbologyType:i}}let ie=null;function dt(e){if(J("esri-2d-update-debug")){const t=ne(e,!0);console.debug("Created new schema",t),console.debug("Schema diff",Te(ie,t)),ie=t}return ne(e)}function ne(e,t=!1){try{const r=Ke(e,t),s=qe(e),i={};r.map(u=>De(i,e,u));const n=x(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:P(Se(e.definitionExpression,n)),fields:e.fields.map(u=>u.toJSON()),gdbVersion:e.gdbVersion,historicMoment:e.historicMoment?.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:e.timeExtent?.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:r,tileRenderer:s,targets:i}}catch(r){if(r.fieldName===y)return z.error(r),null;throw r}}function De(e,t,r){switch(r.target){case"feature":return void H(e,U(t),r);case"aggregate":{if(!("featureReduction"in t))return;const s=t.featureReduction;switch(s?.type){case"selection":throw new d(y,"Mapview does not support `selection` reduction type",s);case"binning":return H(e,U(t),r),void _e(e,s,t.fields.map(i=>i.toJSON()),r);case"cluster":return H(e,U(t),r),void Je(e,s,t.fields.map(i=>i.toJSON()),r)}}}}function X(e,t){for(const r in t){const s=t[r];if(s.target!==e.name)continue;const i=e.attributes[r];if(i?.context){const n=i.context;n.mesh=n.mesh||s.context?.mesh,n.storage=n.storage||s.context?.storage}else e.attributes[r]=s}return e}function U(e){return[P(e.filter)?.toJSON()??null,P(P(e.featureEffect)?.filter)?.toJSON()??null]}function H(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),X(e.feature,r.attributes.fields),e}function me(e,t){const{onStatisticExpression:r,onStatisticField:s,statisticType:i}=e;switch(i){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(r){const{returnType:l}=r;return l?l==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(z.error(new d(y,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const n=t.find(l=>l.name===s);return n?n.type:(z.error(new d(y,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function _e(e,t,r,s){return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(t.fields??[]).map(i=>({...i.toJSON(),type:me(i,r)}))},attributes:{}}),X(e.aggregate,s.attributes.fields),e}function Je(e,t,r,s){return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:se(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(se(t.clusterMaxSize)/64),fields:(t.fields??[])?.map(i=>({...i.toJSON(),type:me(i,r)}))}}),X(e.aggregate,s.attributes.fields),e}function T(e,t){return t.field?F(e,{...t,type:"field",field:t.field}):t.valueExpression?F(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function F(e,t){switch(t.type){case"expression":{const r=t.valueExpression;if(!e.fields[r]){const s=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:s}}return{fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=JSON.stringify(t.label);if(!e.fields[r]){const s=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:s}}return{fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return t.target==="aggregate"&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function Ke(e,t=!1){const r=new Array;let s=0;return r.push(He(e,s++,t)),r}function q(e,t,r,s,i,n=!1){const l=F(e,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:u}=l;return{...b(t,i,n),fieldIndex:u,target:r,index:s}}function Ue(e,t,r){const s="featureReduction"in t&&t.featureReduction;if(!s)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const i="aggregate",n=[];let l=null,u=pe(t.geometryType),a=[],o=null;if(s)switch(s.type){case"selection":return z.error(new d(y,"Mapview does not support `selection` reduction type",s)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...s.fields??[]),s.type==="cluster"?u="esriGeometryPoint":s.type==="binning"&&(u="esriGeometryPolygon"),s.renderer&&!s.renderer.authoringInfo?.isAutoGenerated){if(s.type==="cluster"){const{renderer:f}=we(s.renderer,s,null);o=f}else o=s.renderer;const p=W(s.renderer,s);l=j(e,i,s.renderer,p,r),a=s&&s.labelsVisible&&s.labelingInfo||[]}else if(s.type==="cluster"){if(o=Ve(n,t.renderer,s,null,!0),s.symbol){const p=W(o,s);l={type:"simple",symbol:b(s.symbol,p,r),symbologyType:p.symbologyType}}a=s&&s.labelsVisible&&s.labelingInfo||[]}}return We(e,n),{labels:oe(a,s.type==="binning"?"esriGeometryPolygon":u),matcher:l,fields:n,rendererOverride:o}}function He(e,t,r=!1){const s={indexCount:0,fields:{}},i="featureReduction"in e?e.featureReduction??void 0:void 0,n=i?"aggregate":"feature";if("sublayers"in e){const c={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:g.DEFAULT},O={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},k={type:"subtype",classes:{}},ge={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:O,mesh:{matcher:c,aggregateMatcher:null,labels:k,sortKey:null}},Q=new Set;let be=0;for(const{renderer:$,subtypeCode:N,labelingInfo:he,labelsVisible:xe}of e.sublayers){let Z=0;"visualVariables"in $&&$.visualVariables&&($.visualVariables.some(B=>B.type!=="rotation")&&z.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),Z=ce($.visualVariables.filter(B=>B.type!=="size")));const ee={symbologyType:g.DEFAULT,vvFlags:Z,maxVVSize:0},R=j(s,n,$,ee,r),A=le(s,n,$),te=xe&&he;if(R.type==="dictionary")throw new d(y,"Dictionary renderer is not supported in subtype layers");if(R.type==="subtype")throw new d(y,"Nested subtype renderers is not supported");if(x(A)&&A.type==="subtype")throw new d(y,"Nested subtype storage is not supported");if(x(A)&&x(A.attributeMapping))throw new d(y,"Non-visual-variable attributes are not supported in subtype layers");if(R.type==="heatmap")throw new d(y,"Heatmaps are not supported in subtype layers");if(R.type==="pie-chart")throw new d(y,"Pie-charts are not supported in subtype layers");if(Q.has(N))throw new d(y,"Subtype codes for sublayers must be unique");Q.add(N),c.renderers[N]=R,O.mapping[N]=A,te&&(k.classes[N]=te.map(B=>q(s,B,"feature",be++,ee,r)))}return ge}if(e.renderer?.type==="heatmap"&&Y()==="raster"){const{radius:c,fieldOffset:O,field:k}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:n,storage:null,mesh:{radius:c,fieldOffset:O,field:T(s,{target:n,field:k,resultType:"numeric"}).field}}}const l=Ue(s,e,r),u=pe(e.geometryType),a=l.rendererOverride??e.renderer,o=W(a,i),p=j(s,n,a,o,r),f=le(s,n,a),m=Ge(s,e.orderBy,e.renderer,i),M=e.labelsVisible&&e.labelingInfo||[],S=oe(M,u);let h=0;const v=[...S.map(c=>q(s,c,"feature",h++,o,r)),...l.labels.map(c=>q(s,c,"aggregate",h++,o,r))];return{type:"symbol",target:n,attributes:s,aggregateFields:l.fields,storage:f,mesh:{matcher:p,labels:{type:"simple",classes:v},aggregateMatcher:l.matcher,sortKey:m}}}function qe(e){return e.renderer?.type==="heatmap"&&Y()==="raster"?{type:"heatmap"}:{type:"symbol"}}function Ge(e,t,r,s){if(x(s))return null;if(x(t)&&t.length){t.length>1&&z.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const i=t[0],n=i.order==="ascending"?"asc":"desc";return i.field?{field:i.field,order:n}:i.valueExpression?{fieldIndex:F(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(z.error(new d(y,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}return x(r)&&r.type==="unique-value"&&r.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}function We(e,t){const r={mesh:!0,storage:!0};for(const s of t){const{name:i,onStatisticField:n,onStatisticExpression:l,statisticType:u}=s;let a,o;const p="numeric",f="feature";l?o=F(e,{type:"expression",target:f,valueExpression:l.expression,resultType:p}).fieldIndex:a=F(e,{type:"field",target:f,field:n,resultType:p}).field,F(e,{type:"statistic",target:"aggregate",name:i,context:r,inField:a,inFieldIndex:o,statisticType:u})}}function le(e,t,r){let s;switch(r.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":s={visualVariables:!0,attributes:null};break;default:s=Ie(r).getStorageSpec(r)}return je(e,t,s,r)}function je(e,t,r,s){if(Fe(r))return null;const{visualVariables:i,attributes:n}=r;let l=null;i&&"visualVariables"in s&&(l=Ye(e,t,s.visualVariables));const u=x(l)?4:0;let a=null;return x(n)&&(a=n.map((o,p)=>{const{field:f,fieldIndex:m}=T(e,{valueExpression:o.valueExpression,field:o.field,resultType:"numeric",target:t});return{binding:p+u,field:f,fieldIndex:m}})),{type:"simple",target:t,attributeMapping:a,vvMapping:l}}function Ye(e,t,r){if(!r||!r.length)return[];const s={storage:!0},i="numeric";return Be(r).map(n=>{const l=Ee(n.type),{field:u,fieldIndex:a}=T(e,{target:t,valueExpression:n.valueExpression,field:n.field,context:s,resultType:i});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:l,field:u,fieldIndex:a,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field,valueRepresentation:n.valueRepresentation??null};case"color":return{type:"color",binding:l,field:u,fieldIndex:a,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field};case"opacity":return{type:"opacity",binding:l,field:u,fieldIndex:a,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field};case"rotation":return{type:"rotation",binding:l,field:u,fieldIndex:a}}}).filter(x)}function j(e,t,r,s,i=!1){const n=ve(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return Xe(n,r,s,i);case"class-breaks":return Ze(n,t,r,s,i);case"unique-value":return et(n,t,r,s,i);case"dictionary":return tt(n,r,s,i);case"heatmap":return rt(n,r,s,i);case"pie-chart":return Qe(n,r,s,i)}}function Xe(e,t,r,s=!1){const i=t.getSymbols(),n=i.length?i[0]:null;return{type:"simple",symbol:b(n,r,s),symbologyType:r.symbologyType}}function Qe(e,t,r,s=!1){const i=t.getSymbols(),n=i[0],l=i.length>1?i[1]:null;return{type:"pie-chart",markerSymbol:b(n,r,s),fillSymbol:b(l,r,s),symbologyType:r.symbologyType}}function Ze(e,t,r,s,i=!1){const n={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,{field:u,fieldIndex:a}=T(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:n}),o=r.normalizationType,p=o==="log"?"esriNormalizeByLog":o==="percent-of-total"?"esriNormalizeByPercentOfTotal":o==="field"?"esriNormalizeByField":null,f=r.classBreakInfos.map(m=>({symbol:b(m.symbol,s,i),min:m.minValue,max:m.maxValue})).sort((m,M)=>m.min-M.min);return{type:"interval",attributes:e.fields,field:u,fieldIndex:a,backgroundFillSymbol:b(l,s,i),defaultSymbol:b(r.defaultSymbol,s,i),intervals:f,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:p,isMaxInclusive:r.isMaxInclusive,symbologyType:s.symbologyType}}function et(e,t,r,s,i=!1){const n=[],l=r.backgroundFillSymbol,u={target:t,context:{mesh:!0},resultType:"string"};if(r.field&&typeof r.field!="string")throw new d(y,"Expected renderer.field to be a string",r);const{field:a,fieldIndex:o}=T(e,{...u,field:r.field,valueExpression:r.valueExpression});for(const p of r.uniqueValueInfos??[])n.push({value:""+p.value,symbol:b(p.symbol,s,i)});return{type:"map",attributes:e.fields,field:a,fieldIndex:o,field2:T(e,{...u,field:r.field2}).field,field3:T(e,{...u,field:r.field3}).field,fieldDelimiter:r.fieldDelimiter??void 0,backgroundFillSymbol:b(l,s),defaultSymbol:b(r.defaultSymbol,s),map:n,symbologyType:s.symbologyType}}function tt(e,t,r,s=!1){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}function rt(e,t,r,s=!1){const i=t.getSymbols(),n=i.length?i[0]:null;return{type:"heatmap",symbol:b(n,r,s),symbologyType:r.symbologyType}}export{j as $,dt as I,pt as c,ft as h,ct as n,b as o,W as w};
