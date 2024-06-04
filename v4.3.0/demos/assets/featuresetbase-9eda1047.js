import{c as ge}from"./arcadeTimeUtils-aff4f706.js";import{B as x,G as v,b as R,v as P,r as b,_ as he,Q as we,U as se,y as S,K as H,J as N,z as B,P as Ie,V as z,$ as Fe,C as Ee,l as j,g as De,a0 as be,a1 as V,a2 as K,a3 as Y}from"./arcadeUtils-e92a8b47.js";import{t as m,e as y}from"./executionError-c1d13a98.js";import{e as oe,E as Ae,j as fe,f as xe,c as ce,a as Ne,b as Te,d as Se,S as X,C as ve,I as Le,A as Pe,y as k,g as Re,x as J,D as L,h as _}from"./featureSetUtils-bc0717fd.js";import{t as Ce}from"./portalUtils-17493ab8.js";import{u as Me,A as ue}from"./SpatialFilter-f33d225b.js";import{ey as Oe,H as $,ef as W}from"./main-83b7c6ef.js";import{f as E}from"./WhereClause-3ab5e03d.js";import"./preload-helper-388ac9d5.js";import"./number-5348fdfb.js";import"./geometryEngineAsync-7dc4addf.js";function ke(l,n,i,d){if(d.length===1){if(N(d[0]))return Y(l,d[0],-1);if(z(d[0]))return Y(l,d[0].toArray(),-1)}return Y(l,d,-1)}async function ee(l,n,i){const d=l.getVariables();if(d.length>0){const w=[];for(let a=0;a<d.length;a++){const r={name:d[a]};w.push(await n.evaluateIdentifier(i,r))}const e={};for(let a=0;a<d.length;a++)e[d[a]]=w[a];return l.parameters=e,l}return l}function c(l,n,i=null){for(const d in l)if(d.toLowerCase()===n.toLowerCase())return l[d];return i}function de(l){if(l===null)return null;const n={type:c(l,"type",""),name:c(l,"name","")};if(n.type==="range")n.range=c(l,"range",[]);else{n.codedValues=[];for(const i of c(l,"codedValues",[]))n.codedValues.push({name:c(i,"name",""),code:c(i,"code",null)})}return n}function ne(l){if(l===null)return null;const n={},i=c(l,"wkt",null);i!==null&&(n.wkt=i);const d=c(l,"wkid",null);return d!==null&&(n.wkid=d),n}function me(l){if(l===null)return null;const n={hasZ:c(l,"hasz",!1),hasM:c(l,"hasm",!1)},i=c(l,"spatialreference",null);i&&(n.spatialReference=ne(i));const d=c(l,"x",null);if(d!==null)return n.x=d,n.y=c(l,"y",null),n;const w=c(l,"rings",null);if(w!==null)return n.rings=w,n;const e=c(l,"paths",null);if(e!==null)return n.paths=e,n;const a=c(l,"points",null);if(a!==null)return n.points=a,n;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const f=c(l,r,null);f!==null&&(n[r]=f)}return n}function ze(l,n){for(const i of n)if(i===l)return!0;return!1}function He(l){return!!l.layerDefinition&&!!l.featureSet&&ze(l.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&l.layerDefinition.objectIdField!==null&&l.layerDefinition.objectIdField!==""&&N(l.layerDefinition.fields)!==!1&&N(l.featureSet.features)!==!1}function Ye(l){l.mode==="async"&&(l.functions.timezone=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{if(x(e,1,2,n,i),v(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new m(n,y.InvalidParameter,i);const f=e[1].field("type");if(P(f)===!1)throw new m(n,y.InvalidParameter,i);switch(b(f).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(b(e[1].field("fieldname")))}throw new m(n,y.InvalidParameter,i)}const a=he(e[0],we(n));if(a===null)return null;const r=a.timeZone;return r==="system"?ge.systemTimeZoneCanonicalName:r})},l.functions.sqltimestamp=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{x(e,1,3,n,i);const a=e[0];if(se(a)){if(e.length===1)return a.toSQLString();if(e.length===2)return a.changeTimeZone(b(e[1])).toSQLString();throw new m(n,y.InvalidParameter,i)}if(v(a)){if(e.length!==3)throw new m(n,y.InvalidParameter,i);await a.load();const r=b(e[1]);if(se(e[2])===!1)throw new m(n,y.InvalidParameter,i);const f=a.fieldTimeZone(r);return f===null?e[2].toSQLString():e[2].changeTimeZone(f).toSQLString()}throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"sqltimestamp",min:2,max:4}),l.functions.featuresetbyid=function(n,i){return l.standardFunctionAsync(n,i,(d,w,e)=>{if(x(e,2,4,n,i),e[0]instanceof oe){const a=b(e[1]);let r=S(e[2],null);const f=H(S(e[3],!0));if(r===null&&(r=["*"]),N(r)===!1)throw new m(n,y.InvalidParameter,i);return e[0].featureSetById(a,f,r)}throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"featuresetbyid",min:2,max:4}),l.functions.getfeatureset=function(n,i){return l.standardFunctionAsync(n,i,(d,w,e)=>{if(x(e,1,2,n,i),B(e[0])){let a=S(e[1],"datasource");return a===null&&(a="datasource"),a=b(a).toLowerCase(),Ae(e[0].fullSchema(),a,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"getfeatureset",min:1,max:2}),l.functions.featuresetbyportalitem=function(n,i){return l.standardFunctionAsync(n,i,(d,w,e)=>{if(x(e,2,5,n,i),e[0]===null)throw new m(n,y.PortalRequired,i);if(e[0]instanceof Ie){const o=b(e[1]),t=b(e[2]);let s=S(e[3],null);const u=H(S(e[4],!0));if(s===null&&(s=["*"]),N(s)===!1)throw new m(n,y.InvalidParameter,i);let I=null;return n.services&&n.services.portal&&(I=n.services.portal),I=Ce(e[0],I),fe(o,t,n.spatialReference,s,u,I,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,y.PortalRequired,i);const a=b(e[0]),r=b(e[1]);let f=S(e[2],null);const p=H(S(e[3],!0));if(f===null&&(f=["*"]),N(f)===!1)throw new m(n,y.InvalidParameter,i);if(n.services&&n.services.portal)return fe(a,r,n.spatialReference,f,p,n.services.portal,n.lrucache,n.interceptor);throw new m(n,y.PortalRequired,i)})},l.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),l.functions.featuresetbyname=function(n,i){return l.standardFunctionAsync(n,i,(d,w,e)=>{if(x(e,2,4,n,i),e[0]instanceof oe){const a=b(e[1]);let r=S(e[2],null);const f=H(S(e[3],!0));if(r===null&&(r=["*"]),N(r)===!1)throw new m(n,y.InvalidParameter,i);return e[0].featureSetByName(a,f,r)}throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"featuresetbyname",min:2,max:4}),l.functions.featureset=function(n,i){return l.standardFunction(n,i,(d,w,e)=>{x(e,1,1,n,i);let a=e[0];const r={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(a))a=JSON.parse(a),a.layerDefinition!==void 0?(r.layerDefinition=a.layerDefinition,r.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(r.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(r.featureSet.features=a.features,r.featureSet.geometryType=a.geometryType,r.layerDefinition.geometryType=r.featureSet.geometryType,r.layerDefinition.objectIdField=a.objectIdFieldName,r.layerDefinition.typeIdField=a.typeIdFieldName,r.layerDefinition.globalIdField=a.globalIdFieldName,r.layerDefinition.fields=a.fields,a.spatialReference&&(r.layerDefinition.spatialReference=a.spatialReference));else{if(!(e[0]instanceof R))throw new m(n,y.InvalidParameter,i);{a=JSON.parse(e[0].castToText(!0));const f=c(a,"layerdefinition");if(f!==null){r.layerDefinition.geometryType=c(f,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.globalIdField=c(f,"globalidfield",""),r.layerDefinition.objectIdField=c(f,"objectidfield",""),r.layerDefinition.typeIdField=c(f,"typeidfield","");const p=c(f,"spatialreference",null);p&&(r.layerDefinition.spatialReference=ne(p));for(const t of c(f,"fields",[])){const s={name:c(t,"name",""),alias:c(t,"alias",""),type:c(t,"type",""),nullable:c(t,"nullable",!0),editable:c(t,"editable",!0),length:c(t,"length",null),domain:de(c(t,"domain"))};r.layerDefinition.fields.push(s)}const o=c(a,"featureset",null);if(o){const t={};for(const s of r.layerDefinition.fields)t[s.name.toLowerCase()]=s.name;for(const s of c(o,"features",[])){const u={},I=c(s,"attributes",{});for(const A in I)u[t[A.toLowerCase()]]=I[A];r.featureSet.features.push({attributes:u,geometry:me(c(s,"geometry",null))})}}}else{r.layerDefinition.geometryType=c(a,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.objectIdField=c(a,"objectidfieldname",""),r.layerDefinition.typeIdField=c(a,"typeidfieldname","");const p=c(a,"spatialreference",null);p&&(r.layerDefinition.spatialReference=ne(p));for(const t of c(a,"fields",[])){const s={name:c(t,"name",""),alias:c(t,"alias",""),type:c(t,"type",""),nullable:c(t,"nullable",!0),editable:c(t,"editable",!0),length:c(t,"length",null),domain:de(c(t,"domain"))};r.layerDefinition.fields.push(s)}const o={};for(const t of r.layerDefinition.fields)o[t.name.toLowerCase()]=t.name;for(const t of c(a,"features",[])){const s={},u=c(t,"attributes",{});for(const I in u)s[o[I.toLowerCase()]]=u[I];r.featureSet.features.push({attributes:s,geometry:me(c(t,"geometry",null))})}}}}if(He(r)===!1)throw new m(n,y.InvalidParameter,i);return(r?.layerDefinition?.geometryType||"")===""&&(r.layerDefinition.geometryType="esriGeometryNull"),xe.create(r,n.spatialReference)})},l.signatures.push({name:"featureset",min:1,max:1}),l.functions.filter=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{if(x(e,2,2,n,i),N(e[0])||z(e[0])){const a=[];let r=e[0];r instanceof Fe&&(r=r.toArray());let f=null;if(!Ee(e[1]))throw new m(n,y.InvalidParameter,i);f=e[1].createFunction(n);for(const p of r){const o=f(p);Oe(o)?await o===!0&&a.push(p):o===!0&&a.push(p)}return a}if(v(e[0])){const a=await e[0].load(),r=E.create(e[1],a.getFieldsIndex()),f=r.getVariables();if(f.length>0){const p=[];for(let t=0;t<f.length;t++){const s={name:f[t]};p.push(await l.evaluateIdentifier(n,s))}const o={};for(let t=0;t<f.length;t++)o[f[t]]=p[t];return r.parameters=o,new ce({parentfeatureset:e[0],whereclause:r})}return new ce({parentfeatureset:e[0],whereclause:r})}throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"filter",min:2,max:2}),l.functions.orderby=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{if(x(e,2,2,n,i),v(e[0])){const a=new Ne(e[1]);return new Te({parentfeatureset:e[0],orderbyclause:a})}throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"orderby",min:2,max:2}),l.functions.top=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{if(x(e,2,2,n,i),v(e[0]))return new Se({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return j(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,j(e[1]));if(z(e[0]))return j(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,j(e[1]));throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"top",min:2,max:2}),l.functions.first=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{if(x(e,1,1,n,i),v(e[0])){const a=await e[0].first(d.abortSignal);if(a!==null){const r=De.createFromGraphicLikeObject(a.geometry,a.attributes,e[0],n.timeReference);return r._underlyingGraphic=a,r}return a}return N(e[0])?e[0].length===0?null:e[0][0]:z(e[0])?e[0].length()===0?null:e[0].get(0):null})},l.signatures.push({name:"first",min:1,max:1}),l.functions.attachments=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{x(e,1,2,n,i);const a={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(a.minsize=j(e[1].field("minsize"))),e[1].hasField("metadata")&&(a.returnMetadata=H(e[1].field("metadata"))),e[1].hasField("maxsize")&&(a.maxsize=j(e[1].field("maxsize"))),e[1].hasField("types")){const r=be(e[1].field("types"),!1);r.length>0&&(a.types=r)}}else if(e[1]!==null)throw new m(n,y.InvalidParameter,i)}if(B(e[0])){let r=e[0]._layer;return r instanceof $&&(r=X(r,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),r===null?[]:v(r)===!1?[]:(await r.load(),r.queryAttachments(e[0].field(r.objectIdField),a.minsize,a.maxsize,a.types,a.returnMetadata))}if(e[0]===null)return[];throw new m(n,y.InvalidParameter,i)})},l.signatures.push({name:"attachments",min:1,max:2}),l.functions.featuresetbyrelationshipname=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{x(e,2,4,n,i);const a=e[0],r=b(e[1]);let f=S(e[2],null);const p=H(S(e[3],!0));if(f===null&&(f=["*"]),N(f)===!1)throw new m(n,y.InvalidParameter,i);if(e[0]===null)return null;if(!B(e[0]))throw new m(n,y.InvalidParameter,i);let o=a._layer;if(o instanceof $&&(o=X(o,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),o===null||v(o)===!1)return null;o=await o.load();const t=o.relationshipMetaData().filter(F=>F.name===r);if(t.length===0)return null;if(t[0].relationshipTableId!==void 0&&t[0].relationshipTableId!==null&&t[0].relationshipTableId>-1)return ve(o,t[0],a.field(o.objectIdField),o.spatialReference,f,p,n.lrucache,n.interceptor);let s=o.serviceUrl();if(!s)return null;s=s.charAt(s.length-1)==="/"?s+t[0].relatedTableId.toString():s+"/"+t[0].relatedTableId.toString();const u=await Le(s,o.spatialReference,f,p,n.lrucache,n.interceptor);await u.load();let I=u.relationshipMetaData();if(I=I.filter(F=>F.id===t[0].id),a.hasField(t[0].keyField)===!1||a.field(t[0].keyField)===null){const F=await o.getFeatureByObjectId(a.field(o.objectIdField),[t[0].keyField]);if(F){const D=E.create(I[0].keyField+"= @id",u.getFieldsIndex());return D.parameters={id:F.attributes[t[0].keyField]},u.filter(D)}return new Me({parentfeatureset:u})}const A=E.create(I[0].keyField+"= @id",u.getFieldsIndex());return A.parameters={id:a.field(t[0].keyField)},u.filter(A)})},l.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),l.functions.featuresetbyassociation=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{x(e,2,3,n,i);const a=e[0],r=b(S(e[1],"")).toLowerCase(),f=P(e[2])?b(e[2]):null;if(e[0]===null)return null;if(!B(e[0]))throw new m(n,y.InvalidParameter,i);let p=a._layer;if(p instanceof $&&(p=X(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),p===null||v(p)===!1)return null;await p.load();const o=p.serviceUrl(),t=await Pe(o,n.spatialReference);let s=null,u=null,I=!1;if(f!==null&&f!==""&&f!==void 0){for(const h of t.terminals)h.terminalName===f&&(u=h.terminalId);u===null&&(I=!0)}const A=t.associations.getFieldsIndex(),F=A.get("TOGLOBALID").name,D=A.get("FROMGLOBALID").name,Q=A.get("TOTERMINALID").name,q=A.get("FROMTERMINALID").name,G=A.get("FROMNETWORKSOURCEID").name,Z=A.get("TONETWORKSOURCEID").name,O=A.get("ASSOCIATIONTYPE").name,ye=A.get("ISCONTENTVISIBLE").name,pe=A.get("OBJECTID").name;for(const h of p.fields)if(h.type==="global-id"){s=a.field(h.name);break}let C=null,te=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",t.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),E.create("''",t.associations.getFieldsIndex()));const T="globalid",ae="globalId",re={};for(const h in t.lkp)re[h]=t.lkp[h].sourceId;const M=new Re(new W({name:"classname",alias:"classname",type:"string"}),null,re);let g="";switch(r){case"midspan":{g=`((${F}='${s}') OR ( ${D}='${s}')) AND (${O} IN (5))`,M.codefield=E.create(`CASE WHEN (${F}='${s}') THEN ${G} ELSE ${Z} END`,t.associations.getFieldsIndex());const h=K(L.findField(t.associations.fields,D));h.name=T,h.alias=T,C=new k(h,E.create(`CASE WHEN (${D}='${s}') THEN ${F} ELSE ${D} END`,t.associations.getFieldsIndex())),te=t.unVersion>=4?new _(L.findField(t.associations.fields,A.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",t.associations.getFieldsIndex()));break}case"junctionedge":{g=`((${F}='${s}') OR ( ${D}='${s}')) AND (${O} IN (4,6))`,M.codefield=E.create(`CASE WHEN (${F}='${s}') THEN ${G} ELSE ${Z} END`,t.associations.getFieldsIndex());const h=K(L.findField(t.associations.fields,D));h.name=T,h.alias=T,C=new k(h,E.create(`CASE WHEN (${D}='${s}') THEN ${F} ELSE ${D} END`,t.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),E.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,t.associations.getFieldsIndex()));break}case"connected":{let h=`${F}='@T'`,le=`${D}='@T'`;u!==null&&(h+=` AND ${Q}=@A`,le+=` AND ${q}=@A`),g="(("+h+") OR ("+le+"))",g=V(g,"@T",s??""),h=V(h,"@T",s??""),u!==null&&(h=V(h,"@A",u.toString()),g=V(g,"@A",u.toString())),M.codefield=E.create("CASE WHEN "+h+` THEN ${G} ELSE ${Z} END`,t.associations.getFieldsIndex());const U=K(L.findField(t.associations.fields,D));U.name=T,U.alias=T,C=new k(U,E.create("CASE WHEN "+h+` THEN ${D} ELSE ${F} END`,t.associations.getFieldsIndex()));break}case"container":g=`${F}='${s}' AND ${O} = 2`,u!==null&&(g+=` AND ${Q} = `+u.toString()),M.codefield=G,g="( "+g+" )",C=new J(L.findField(t.associations.fields,D),T,T);break;case"content":g=`(${D}='${s}' AND ${O} = 2)`,u!==null&&(g+=` AND ${q} = `+u.toString()),M.codefield=Z,g="( "+g+" )",C=new J(L.findField(t.associations.fields,F),T,T);break;case"structure":g=`(${F}='${s}' AND ${O} = 3)`,u!==null&&(g+=` AND ${Q} = `+u.toString()),M.codefield=G,g="( "+g+" )",C=new J(L.findField(t.associations.fields,D),T,ae);break;case"attached":g=`(${D}='${s}' AND ${O} = 3)`,u!==null&&(g+=` AND ${q} = `+u.toString()),M.codefield=Z,g="( "+g+" )",C=new J(L.findField(t.associations.fields,F),T,ae);break;default:throw new m(n,y.InvalidParameter,i)}return I&&(g="1 <> 1"),new L({parentfeatureset:t.associations,adaptedFields:[new _(L.findField(t.associations.fields,pe)),new _(L.findField(t.associations.fields,ye)),C,ie,M,te],extraFilter:g?E.create(g,t.associations.getFieldsIndex()):null})})},l.signatures.push({name:"featuresetbyassociation",min:2,max:6}),l.functions.groupby=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{if(x(e,3,3,n,i),!v(e[0]))throw new m(n,y.InvalidParameter,i);const a=await e[0].load(),r=[],f=[];let p=!1,o=[];if(P(e[1]))o.push(e[1]);else if(e[1]instanceof R)o.push(e[1]);else if(N(e[1]))o=e[1];else{if(!z(e[1]))throw new m(n,y.InvalidParameter,i);o=e[1].toArray()}for(const t of o)if(P(t)){const s=E.create(b(t),a.getFieldsIndex()),u=ue(s)===!0?b(t):"%%%%FIELDNAME";r.push({name:u,expression:s}),u==="%%%%FIELDNAME"&&(p=!0)}else{if(!(t instanceof R))throw new m(n,y.InvalidParameter,i);{const s=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",u=t.hasField("expression")?t.field("expression"):"";if(s==="%%%%FIELDNAME"&&(p=!0),!s)throw new m(n,y.InvalidParameter,i);r.push({name:s,expression:E.create(u||s,a.getFieldsIndex())})}}if(o=[],P(e[2]))o.push(e[2]);else if(N(e[2]))o=e[2];else if(z(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof R))throw new m(n,y.InvalidParameter,i);o.push(e[2])}for(const t of o){if(!(t instanceof R))throw new m(n,y.InvalidParameter,i);{const s=t.hasField("name")?t.field("name"):"",u=t.hasField("statistic")?t.field("statistic"):"",I=t.hasField("expression")?t.field("expression"):"";if(!s||!u||!I)throw new m(n,y.InvalidParameter,i);f.push({name:s,statistic:u.toLowerCase(),expression:E.create(I,a.getFieldsIndex())})}}if(p){const t={};for(const u of a.fields)t[u.name.toLowerCase()]=1;for(const u of r)u.name!=="%%%%FIELDNAME"&&(t[u.name.toLowerCase()]=1);for(const u of f)u.name!=="%%%%FIELDNAME"&&(t[u.name.toLowerCase()]=1);let s=0;for(const u of r)if(u.name==="%%%%FIELDNAME"){for(;t["field_"+s.toString()]===1;)s++;t["field_"+s.toString()]=1,u.name="FIELD_"+s.toString()}}for(const t of r)await ee(t.expression,l,n);for(const t of f)await ee(t.expression,l,n);return e[0].groupby(r,f)})},l.signatures.push({name:"groupby",min:3,max:3}),l.functions.distinct=function(n,i){return l.standardFunctionAsync(n,i,async(d,w,e)=>{if(v(e[0])){x(e,2,2,n,i);const a=await e[0].load(),r=[];let f=[];if(P(e[1]))f.push(e[1]);else if(e[1]instanceof R)f.push(e[1]);else if(N(e[1]))f=e[1];else{if(!z(e[1]))throw new m(n,y.InvalidParameter,i);f=e[1].toArray()}let p=!1;for(const o of f)if(P(o)){const t=E.create(b(o),a.getFieldsIndex()),s=ue(t)===!0?b(o):"%%%%FIELDNAME";r.push({name:s,expression:t}),s==="%%%%FIELDNAME"&&(p=!0)}else{if(!(o instanceof R))throw new m(n,y.InvalidParameter,i);{const t=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",s=o.hasField("expression")?o.field("expression"):"";if(t==="%%%%FIELDNAME"&&(p=!0),!t)throw new m(n,y.InvalidParameter,i);r.push({name:t,expression:E.create(s||t,a.getFieldsIndex())})}}if(p){const o={};for(const s of a.fields)o[s.name.toLowerCase()]=1;for(const s of r)s.name!=="%%%%FIELDNAME"&&(o[s.name.toLowerCase()]=1);let t=0;for(const s of r)if(s.name==="%%%%FIELDNAME"){for(;o["field_"+t.toString()]===1;)t++;o["field_"+t.toString()]=1,s.name="FIELD_"+t.toString()}}for(const o of r)await ee(o.expression,l,n);return e[0].groupby(r,[])}return ke("distinct",d,w,e)})})}export{Ye as registerFunctions};
