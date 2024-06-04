import{f as p,t as S,bQ as T,C as v,b4 as d,x as F,bR as G}from"./main-603bdb2f.js";import{t as b,r as $}from"./fetchService-0ec470bd.js";import{e as D}from"./jsonContext-018980df.js";import"./preload-helper-388ac9d5.js";async function z(e,r){const t=e.instance.portalItem;if(t&&t.id)return await t.load(r),O(e),x(e,r)}function O(e){const r=e.instance.portalItem;if(!r?.type||!e.supportedTypes.includes(r.type))throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:e.supportedTypes.join(", ")})}async function x(e,r){const t=e.instance,n=t.portalItem;if(!n)return;const{url:o,title:l}=n,a=D(n);if(t.type==="group")return t.read({title:l},a),C(t,e);o&&t.read({url:o},a);const s=await g(e,r);return s&&t.read(s,a),t.resourceReferences={portalItem:n,paths:a.readResourcePaths??[]},t.type!=="subtype-group"&&t.read({title:l},a),S(t,a)}async function C(e,r){let t;const{portalItem:n}=e;if(!n)return;const o=n.type,l=r.layerModuleTypeMap,a=T(n,"Oriented Imagery Layer")??!1;switch(o){case"Feature Service":t=a?l.OrientedImageryLayer:l.FeatureLayer;break;case"Stream Service":t=l.StreamLayer;break;case"Scene Service":t=l.SceneLayer;break;case"Feature Collection":t=l.FeatureLayer;break;default:throw new p("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}let[s,i]=await Promise.all([t(),g(r)]),u=()=>s;if(o==="Feature Service"){if(i=n.url?await P(i,n.url):{},h(i).length){const w=l.SubtypeGroupLayer,I=await w();u=L=>L.layerType==="SubtypeGroupLayer"?I:s}return c(e,u,i,await J(n.url))}return y(i)>0?c(e,u,i):M(e,u)}async function M(e,r){const{portalItem:t}=e;if(!t?.url)return;const n=await b(t.url);n&&c(e,r,{layers:n.layers?.map(f),tables:n.tables?.map(f)})}function f(e){return{id:e.id,name:e.name}}function c(e,r,t,n){let o=t.layers||[];const l=t.tables||[];if(e.portalItem?.type==="Feature Collection"&&(o.forEach(a=>{a?.layerDefinition?.type==="Table"&&l.push(a)}),o=o.filter(a=>a?.layerDefinition?.type!=="Table")),"coverage"in t){const a=R(t);a&&e.add(a)}o.reverse().forEach(a=>{const s=m(e,r(a),t,a,n?.(a));e.add(s)}),l.reverse().forEach(a=>{const s=m(e,r(a),t,a,n?.(a));e.tables.add(s)})}function m(e,r,t,n,o){const l=e.portalItem,a=new r({portalItem:l.clone(),layerId:n.id});if("sourceJSON"in a&&(a.sourceJSON=o),a.type!=="subtype-group"&&(a.sublayerTitleMode="service-name"),l.type==="Feature Collection"){const s={origin:"portal-item",portal:l.portal||v.getDefault()};a.read(n,s);const i=t.showLegend;i!=null&&a.read({showLegend:i},s)}return a}async function g(e,r){if(e.supportsData===!1)return;const t=e.instance,n=t.portalItem;if(!n)return;let o=null;try{o=await n.fetchData("json",r)}catch{}if(N(t)){let l=null,a=!0;if(o&&y(o)>0){if(t.layerId==null){const s=h(o);t.layerId=t.type==="subtype-group"?s?.[0]:k(o)}l=E(o,t),l&&(y(o)===1&&(a=!1),o.showLegend!=null&&(l.showLegend=o.showLegend))}return a&&t.sublayerTitleMode!=="service-name"&&(t.sublayerTitleMode="item-title-and-service-name"),l}return o}async function P(e,r){if(e?.layers==null||e?.tables==null){const t=await b(r);(e=e||{}).layers=e.layers||t?.layers,e.tables=e.tables||t?.tables}return e}function k(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function E(e,r){const{layerId:t}=r,n=e.layers?.find(o=>o.id===t)||e.tables?.find(o=>o.id===t);return n&&j(n,r)?n:null}function y(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function N(e){return e.type!=="stream"&&e.type!=="oriented-imagery"&&"layerId"in e}function R(e){const{coverage:r}=e;if(!r)return null;const t=new URL(r);if(r.toLowerCase().includes("item.html")){const n=t.searchParams.get("id"),o=t.origin;return d.fromPortalItem({portalItem:new F({id:n,url:o})})}if(G(r))return d.fromArcGISServerUrl({url:r});throw new p("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}function h(e){const r=[];return e?.layers?.forEach(t=>{t.layerType==="SubtypeGroupLayer"&&r.push(t.id)}),r}function j(e,r){return!(r.type==="feature"&&"layerType"in e&&e.layerType==="SubtypeGroupLayer"||r.type==="subtype-group"&&!("layerType"in e))}async function J(e){const{layersJSON:r}=await $(e);if(!r)return null;const t=[...r.layers,...r.tables];return n=>t.find(o=>o.id===n.id)}export{k as getFirstLayerOrTableId,y as getNumLayersAndTables,h as getSubtypeGroupLayerIds,z as load,P as preprocessFSItemData};
