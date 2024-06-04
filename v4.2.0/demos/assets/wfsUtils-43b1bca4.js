import{U as T,fD as U,c as l,fE as I,fF as C,fG as E,fH as S,f as P,t as x,w as M,ar as O,cD as w,ap as L,bC as j,E as V,ef as y,fI as W,r as N}from"./main-66d02e41.js";import{s as X}from"./geojson-a5146bf8.js";import{o as h,n as b}from"./xmlUtils-444cb4c0.js";function z(n){return _(n)??Y(n)}function Y(n){const t=new Date(n).getTime();return Number.isNaN(t)?null:t}function _(n){const t=q.exec(n);if(!t?.groups)return null;const e=t.groups,r=+e.year,s=+e.month-1,a=+e.day,o=+(e.hours??"0"),i=+(e.minutes??"0"),u=+(e.seconds??"0");if(o>23||i>59||u>59)return null;const p=e.ms??"0",c=p?+p.padEnd(3,"0").substring(0,3):0;let m;if(e.isUTC)m=Date.UTC(r,s,a,o,i,u,c);else if(e.offsetSign){const f=+e.offsetHours,D=+e.offsetMinutes;m=6e4*(e.offsetSign==="+"?-1:1)*(60*f+D)+Date.UTC(r,s,a,o,i,u,c)}else m=new Date(r,s,a,o,i,u,c).getTime();return Number.isNaN(m)?null:m}const q=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,F="xlink:href",d="2.0.0",$="__esri_wfs_id__",H="wfs-layer:getWFSLayerTypeInfo-error",J="wfs-layer:empty-service",G="wfs-layer:feature-type-not-found",Q="wfs-layer:geojson-not-supported",B="wfs-layer:kvp-encoding-not-supported",K="wfs-layer:malformed-json",k="wfs-layer:unknown-geometry-type",Z="wfs-layer:unknown-field-type",ee="wfs-layer:unsupported-spatial-reference",te="wfs-layer:unsupported-wfs-version";async function Se(n,t){const e=ne((await T(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:d,...t?.customParameters},signal:t?.signal})).data);return se(n,e),e}function ne(n){const t=R(n);be(t),v(t);const e=t.firstElementChild,r=U(oe(e));return{operations:ae(e),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}const re=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function ae(n){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(h(n,{OperationsMetadata:{Operation:r=>{switch(r.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:s=>{e.GetCapabilities.url=s.getAttribute(F)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:s=>{e.DescribeFeatureType.url=s.getAttribute(F)}}}};case"GetFeature":return{DCP:{HTTP:{Get:s=>{e.GetFeature.url=s.getAttribute(F)}}},Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:a=>{const o=a.textContent;o&&re.has(o.toLowerCase())&&(e.GetFeature.outputFormat=o)}}}}}}},Constraint:r=>{switch(r.getAttribute("name")){case"KVPEncoding":return{DefaultValue:s=>{t=s.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:s=>{e.GetFeature.supportsPagination=s.textContent.toLowerCase()==="true"}}}}}}),!t)throw new l(B,"WFS service doesn't support key/value pair (KVP) encoding");if(x(e.GetFeature.outputFormat))throw new l(Q,"WFS service doesn't support GeoJSON output format");return e}function se(n,t){I(n)&&(C(n,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=E(t.operations.DescribeFeatureType.url)),C(n,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=E(t.operations.GetFeature.url)))}function oe(n){return b(n,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),s=a=>{const o=parseInt(a.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);Number.isNaN(o)||r.add(o)};return h(t,{Name:a=>{const{name:o,prefix:i}=g(a.textContent);e.typeName=`${i}:${o}`,e.name=o,e.namespacePrefix=i,e.namespaceUri=a.lookupNamespaceURI(i)},Abstract:a=>{e.description=a.textContent},Title:a=>{e.title=a.textContent},WGS84BoundingBox:a=>{e.extent=ie(a)},DefaultSRS:s,DefaultCRS:s,OtherSRS:s,OtherCRS:s}),e.title||(e.title=e.name),e.supportedSpatialReferences.push(...r),e}}})}function ie(n){let t,e,r,s;for(const a of n.children)switch(a.localName){case"LowerCorner":[t,e]=a.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[r,s]=a.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:r,ymax:s,spatialReference:w}}function ue(n,t,e){return S(n,r=>e?r.name===t&&r.namespaceUri===e:r.typeName===t||r.name===t)}async function xe(n,t,e,r={}){const{featureType:s,extent:a}=await pe(n,t,e,r),{fields:o,geometryType:i,swapXY:u,objectIdField:p,geometryField:c}=await ce(n,s.typeName,r);return{url:n.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:o,geometryField:c,geometryType:i,objectIdField:p,spatialReference:r.spatialReference??P.WGS84,extent:a,swapXY:u,wfsCapabilities:n,customParameters:r.customParameters}}async function pe(n,t,e,r={}){const{spatialReference:s=P.WGS84}=r,a=n.readFeatureTypes(),o=t?ue(a,t,e):a.next().value;if(x(o))throw t?new l(G,`The type '${t}' could not be found in the service`):new l(J,"The service is empty");let i=new M({...o.extent,spatialReference:s});if(!O(s,w))try{await L(w,s,void 0,r),i=j(i,w)}catch{throw new l(ee,"Projection not supported")}return{extent:i,spatialReference:s,featureType:o}}async function ce(n,t,e={}){const[r,s]=await V([ye(n.operations.DescribeFeatureType.url,t,e),me(n,t,e)]);if(r.error||s.error)throw new l(H,`An error occurred while getting info about the feature type '${t}'`,{error:r.error||s.error});const{fields:a,errors:o}=r.value??{},i=r.value?.geometryType||s.value?.geometryType,u=s.value?.swapXY??!1;if(x(i))throw new l(k,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:i,fields:a,errors:o});return{...le(a??[]),geometryType:i,swapXY:u}}function le(n){const t=n.find(r=>r.type==="geometry");let e=n.find(r=>r.type==="oid");return n=n.filter(r=>r.type!=="geometry"),e||(e=new y({name:$,type:"oid",alias:$}),n.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:n}}async function me(n,t,e={}){let r,s=!1;const[a,o]=await Promise.all([we(n.operations.GetFeature.url,t,n.operations.GetFeature.outputFormat,{...e,count:1}),T(n.operations.GetFeature.url,{responseType:"text",query:A(t,void 0,{...e,count:1}),signal:e?.signal})]),i=a.type==="FeatureCollection"&&a.features[0]?.geometry;if(i){let u;switch(r=W.fromJSON(X(i.type)),i.type){case"Point":u=i.coordinates;break;case"LineString":case"MultiPoint":u=i.coordinates[0];break;case"MultiLineString":case"Polygon":u=i.coordinates[0][0];break;case"MultiPolygon":u=i.coordinates[0][0][0]}const p=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(o.data);if(p){const c=u[0].toFixed(3),m=u[1].toFixed(3),f=parseFloat(p[1]).toFixed(3);c===parseFloat(p[2]).toFixed(3)&&m===f&&(s=!0)}}return{geometryType:r,swapXY:s}}async function ye(n,t,e){return fe(t,(await T(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:d,TYPENAME:t,...e?.customParameters},signal:e?.signal})).data)}function fe(n,t){const{name:e}=g(n),r=R(t);v(r);const s=S(b(r.firstElementChild,{element:a=>({name:a.getAttribute("name"),typeName:g(a.getAttribute("type")).name})}),({name:a})=>a===e);if(N(s)){const a=S(b(r.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===s.typeName);if(N(a))return ge(a)}throw new l(G,`Type '${n}' not found in document`,{document:new XMLSerializer().serializeToString(r)})}const de=new Set(["objectid","fid"]);function ge(n){const t=[],e=[];let r;const s=b(n,{complexContent:{extension:{sequence:{element:a=>a}}}});for(const a of s){const o=a.getAttribute("name");if(!o)continue;let i,u;if(a.hasAttribute("type")?i=g(a.getAttribute("type")).name:h(a,{simpleType:{restriction:m=>(i=g(m.getAttribute("base")).name,{maxLength:f=>{u=+f.getAttribute("value")}})}}),!i)continue;const p=a.getAttribute("nillable")==="true";let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new y({name:o,alias:o,type:"integer",nullable:p}));break;case"float":case"double":case"decimal":e.push(new y({name:o,alias:o,type:"double",nullable:p}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new y({name:o,alias:o,type:"string",nullable:p,length:u??255}));break;case"datetime":case"date":e.push(new y({name:o,alias:o,type:"date",nullable:p,length:u??36}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new l(k,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(n)}));break;default:t.push(new l(Z,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(n)}))}c&&e.push(new y({name:o,alias:o,type:"geometry",nullable:p}))}for(const a of e)if(a.type==="integer"&&!a.nullable&&de.has(a.name.toLowerCase())){a.type="oid";break}return{geometryType:r,fields:e,errors:t}}async function we(n,t,e,r){let{data:s}=await T(n,{responseType:"text",query:A(t,e,r),signal:r?.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(r?.dateFields?.length){const a=new Set(r.dateFields);return JSON.parse(s,(o,i)=>a.has(o)?z(i):i)}return JSON.parse(s)}catch(a){throw new l(K,"Error while parsing the response",{response:s,error:a})}}function A(n,t,e){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:n,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:e?.startIndex,COUNT:e?.count,...e?.customParameters}}function R(n){return new DOMParser().parseFromString(n.trim(),"text/xml")}function g(n){const[t,e]=n.split(":");return{prefix:e?t:"",name:e??t}}function be(n){const t=n.firstElementChild?.getAttribute("version");if(t&&t!==d)throw new l(te,`Unsupported WFS version ${t}. Supported version: ${d}`)}function v(n){let t="",e="";if(h(n.firstElementChild,{Exception:r=>(t=r.getAttribute("exceptionCode"),{ExceptionText:s=>{e=s.textContent}})}),t)throw new l(`wfs-layer:${t}`,e)}export{$ as C,Se as D,we as K,ue as W,xe as X,le as z};
