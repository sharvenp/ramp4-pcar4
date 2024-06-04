import{x as y,f,bN as o,b7 as i}from"./main-bbf05f59.js";import{a as L}from"./lazyLayerLoader-c1f1142e.js";import{getNumLayersAndTables as l,preprocessFSItemData as N,getSubtypeGroupLayerIds as w,getFirstLayerOrTableId as d}from"./layersLoader-47b09674.js";import{t as n}from"./fetchService-34bf0d9b.js";import"./preload-helper-388ac9d5.js";import"./jsonContext-4366b4df.js";async function U(e){!e.portalItem||e.portalItem instanceof y||(e={...e,portalItem:new y(e.portalItem)});const a=await I(e.portalItem);return new a.constructor({portalItem:e.portalItem,...a.properties})}async function I(e){return await e.load(),g(await S(e))}async function S(e){switch(e.type){case"Map Service":return T(e);case"Feature Service":return v(e);case"Feature Collection":return F(e);case"Scene Service":return b(e);case"Image Service":return G(e);case"Stream Service":return M();case"Vector Tile Service":return $();case"GeoJson":return h();case"CSV":return C();case"KML":return V();case"WFS":return j();case"WMTS":return D();case"WMS":return W();case"Feed":return K();default:throw new f("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function g(e){const a=L[e.className];return{constructor:await a(),properties:e.properties}}async function T(e){return await k(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function v(e){if(o(e,"Oriented Imagery Layer"))return O(e);const a=await m(e);if(typeof a=="object"){const r={};return a.id!=null&&(r.layerId=a.id),{className:a.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}async function b(e){const a=await m(e);if(typeof a=="object"){const r={};let t;if(a.id!=null?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,e.typeKeywords?.length){for(const c of Object.keys(i))if(e.typeKeywords.includes(c))return{className:i[c]}}const s=await n(t);return{className:i[s?.layerType]||"SceneLayer",properties:r}}return a===!1?(await n(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}:{className:"GroupLayer"}}async function F(e){await e.load();const a=o(e,"Map Notes"),r=o(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(o(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return l(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function G(e){await e.load();const a=e.typeKeywords?.map(p=>p.toLowerCase())??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=(await e.fetchData())?.layerType;if(r==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(r==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const t=await n(e.url),s=t.cacheType?.toLowerCase(),c=t.capabilities?.toLowerCase().includes("tilesonly");return s==="map"||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function M(){return{className:"StreamLayer"}}function $(){return{className:"VectorTileLayer"}}function h(){return{className:"GeoJSONLayer"}}function C(){return{className:"CSVLayer"}}function V(){return{className:"KMLLayer"}}function j(){return{className:"WFSLayer"}}function W(){return{className:"WMSLayer"}}function D(){return{className:"WMTSLayer"}}function K(){return{className:"StreamLayer"}}async function O(e){await e.load();const a=await e.fetchData();return a.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:a}}async function k(e){return(await n(e.url)).tileInfo}async function m(e){const a=e.url;if(!a||a.match(/\/\d+$/))return{};await e.load();const r=await e.fetchData();if(e.type==="Feature Service"){const t=u(await N(r,a));if(typeof t=="object"){const s=w(r);t.className=t.id!=null&&s.includes(t.id)?"SubtypeGroupLayer":"FeatureLayer"}return t}return l(r)>0?u(r):u(await n(a))}function u(e){return l(e)===1&&{id:d(e)}}export{U as fromItem,S as selectLayerClassPath};
