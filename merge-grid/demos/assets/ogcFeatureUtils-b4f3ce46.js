import{u as E,b as y,f as g,U as j,jn as _,dU as B,k as I,jM as Q,cW as V,r as k,dL as H,dz as X,f2 as G,iD as Y,jN as ee}from"./main-917dc16a.js";import{T as te,L as ne,I as ie}from"./geojson-61e54bed.js";import{o as ae}from"./clientSideDefaults-22323d2f.js";const q=E.getLogger("esri.layers.graphics.sources.ogcfeature"),R="http://www.opengis.net/def/crs/",pe=`${R}OGC/1.3/CRS84`;async function ge(e,n,t={},i=5){const{links:s}=e,l=f(s,"items","application/geo+json")||f(s,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(l))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:d}=await j(l.href,{signal:t.signal,query:{limit:i,...t.customParameters,token:t.apiKey},headers:{accept:"application/geo+json"}});await te(d);const o=ne(d,{geometryType:n.geometryType}),u=n.fields||o.fields||[],x=n.hasZ!=null?n.hasZ:o.hasZ,h=o.geometryType,m=n.objectIdField||o.objectIdFieldName||"OBJECTID";let r=n.timeInfo;const T=u.find(({name:a})=>a===m);if(T)T.editable=!1,T.nullable=!1;else{if(!o.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u.unshift({name:m,alias:m,type:o.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(m!==o.objectIdFieldName){const a=u.find(({name:c})=>c===o.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}u===o.fields&&o.unknownFields.length>0&&q.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}});for(const a of u){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!_.jsonValues.includes(a.type))throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(r){const a=new B(u);if(r.startTimeField){const c=a.get(r.startTimeField);c?(r.startTimeField=c.name,c.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const c=a.get(r.endTimeField);c?(r.endTimeField=c.name,c.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const c=a.get(r.trackIdField);c?r.trackIdField=c.name:(r.trackIdField=null,q.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(q.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}return{drawingInfo:h?ae(h):null,extent:de(e),geometryType:h,fields:u,hasZ:!!x,objectIdField:m,timeInfo:r}}async function ye(e,n={}){const{links:t}=e,i=f(t,"data","application/json")||f(t,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(y(i))throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:s,customParameters:l,signal:d}=n,{data:o}=await j(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:s}});return o}async function we(e,n={}){const{links:t}=e,i=f(t,"conformance","application/json")||f(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(y(i))throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:s,customParameters:l,signal:d}=n,{data:o}=await j(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:s}});return o}async function be(e,n={}){const{apiKey:t,customParameters:i,signal:s}=n,{data:l}=await j(e,{signal:s,headers:{accept:"application/json"},query:{...i,token:t}});return l}async function he(e,n={}){const t="application/vnd.oai.openapi+json;version=3.0",i=f(e.links,"service-desc",t);if(y(i))return q.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:s,customParameters:l,signal:d}=n,{data:o}=await j(i.href,{signal:d,headers:{accept:t},query:{...l,token:s}});return o}function Fe(e){const n=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e)?.groups;if(!n)return null;const{authority:t,code:i}=n;switch(t.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return I.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return I.WGS84.wkid;default:return null}case"esri":case"epsg":{const s=Number.parseInt(i,10);return Number.isNaN(s)?null:s}default:return null}}async function Ie(e,n,t){const i=await se(e,n,t);return Q(i)}async function se(e,n,t){const{collection:i,layerDefinition:s,maxRecordCount:l,queryParameters:{apiKey:d,customParameters:o},spatialReference:u,supportedCrs:x}=e,{links:h}=i,m=f(h,"items","application/geo+json")||f(h,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(m))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:r,num:T,start:a,timeExtent:c,where:P}=n;if(n.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const Z=I.fromJSON(u),F=V(n.outSpatialReference,Z),$=F.isWGS84?null:D(F,x),K=ce(r,x),L=oe(c),J=le(P),z=T??(a!=null&&a!==void 0?10:l),{data:w}=await j(m.href,{...t,query:{...o,...K,crs:$,datetime:L,query:J,limit:z,startindex:a,token:d},headers:{accept:"application/geo+json"}});let S=!1;w.links&&(S=!!w.links.find(v=>v.rel==="next")),!S&&Number.isInteger(w.numberMatched)&&Number.isInteger(w.numberReturned)&&(S=w.numberReturned<w.numberMatched);const{fields:A,geometryType:N,hasZ:M,objectIdField:O}=s,W=ie(w,{geometryType:N,hasZ:M,objectIdField:O});if(!$&&F.isWebMercator){for(const b of W)if(k(b.geometry)&&N!=null){const v=H(b.geometry,N,M,!1);v.spatialReference=I.WGS84,b.geometry=X(G(v,F))}}for(const b of W)b.objectId=b.attributes[O];const U=$||!$&&F.isWebMercator?F.toJSON():Y,p=new ee;return p.exceededTransferLimit=S,p.features=W,p.fields=A,p.geometryType=N,p.hasZ=M,p.objectIdFieldName=O,p.spatialReference=U,p}function re(e){return k(e)&&e.type==="extent"}function D(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const s=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return s?`${R}${s}`:null}function C(e){if(y(e))return"";const{xmin:n,ymin:t,xmax:i,ymax:s}=e;return`${n},${t},${i},${s}`}function oe(e){if(y(e))return null;const{start:n,end:t}=e;return`${k(n)?n.toISOString():".."}/${k(t)?t.toISOString():".."}`}function le(e){return y(e)||!e||e==="1=1"?null:e}function ce(e,n){if(!re(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:C(e)};const i=D(t,n);return k(i)?{bbox:C(e),"bbox-crs":i}:t.isWebMercator?{bbox:C(G(e,I.WGS84))}:null}function de(e){const n=e.extent?.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,s=t[0],l=t[1],d=i?void 0:t[2];return{xmin:s,ymin:l,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:I.WGS84.toJSON()}}function f(e,n,t){return e.find(i=>i.rel===n&&i.type===t)||e.find(i=>i.rel===n&&!i.type)}export{pe as F,ge as I,Ie as N,he as S,ye as T,R as j,we as k,se as q,Fe as v,be as x};
