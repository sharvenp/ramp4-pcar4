import{_ as h}from"./preload-helper.387dac8f.js";import{e as f,ab as v,i as I,s as O,ac as L,ad as P,d as T,U as g}from"./main.33d7d020.js";import{a as C}from"./lazyLayerLoader.b0ff2619.js";async function k(r){const t=r.properties?.customParameters,e=await N(r.url,t),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await h(()=>import("./GroupLayer.2aa83570.js"),["assets/GroupLayer.2aa83570.js","assets/main.33d7d020.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js"])).default({title:e.parsedUrl.title});return F(s,e,a),s}function S(r,t){return r?r.find(e=>e.id===t):null}function F(r,t,e){function a(s,l){const o={...e,layerId:s,sublayerTitleMode:"service-name"};return f(l)&&(o.sourceJSON=l),new t.Constructor(o)}t.sublayerIds.forEach(s=>{const l=a(s,S(t.sublayerInfos,s));r.add(l)}),t.tableIds.forEach(s=>{const l=a(s,S(t.tableInfos,s));r.tables.add(l)})}async function N(r,t){let e=v(r);if(I(e)&&(e=await J(r,t)),I(e))throw new O("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let l;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":l=s!=null?"FeatureLayer":x(r,t).then(n=>n?"TileLayer":"MapImageLayer");break;case"ImageServer":l=i(r,{customParameters:t}).then(n=>{const c=n.tileInfo&&n.tileInfo.format;return n.tileInfo?c?.toUpperCase()!=="LERC"||n.cacheType&&n.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":l=i(e.url.path,{customParameters:t}).then(n=>{if(n){if(n?.layerType==="Voxel")return"VoxelLayer";if(n?.layers&&Array.isArray(n.layers)&&n.layers.length>0){const c={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},p=n.layers[0]?.layerType;if(c[p]!=null)return c[p]}}return"SceneLayer"});break;default:l=o[a]}const u={FeatureLayer:!0,SceneLayer:!0},d=a==="FeatureServer",y={parsedUrl:e,Constructor:null,layerOrTableId:d?s:null,sublayerIds:null,tableIds:null},m=await l;if(u[m]&&s==null){const n=await U(r,a,t);d&&(y.sublayerInfos=n.layerInfos,y.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(y.sublayerIds=n.layerIds,y.tableIds=n.tableIds):d&&(y.layerOrTableId=n.layerIds[0]??n.tableIds[0],y.sourceJSON=n.layerInfos[0]??n.tableInfos[0])}return y.Constructor=await _(m),y}async function J(r,t){const e=await i(r,{customParameters:t});let a=null,s=null;const l=e.type;if(l==="Feature Layer"||l==="Table"?(a="FeatureServer",s=e.id):l==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":b(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&b(e.layers?.[0])&&(a="SceneServer"),!a)return null;const o=s!=null?L(r):null;return{title:f(o)&&e.name||P(r),serverType:a,sublayer:s,url:{path:f(o)?o.serviceUrl:T(r).path}}}function b(r){return r?.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function U(r,t,e){let a,s=!1;if(t==="FeatureServer"){const u=await V(r,{customParameters:e});s=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await i(r,{customParameters:e});const l=a?.layers,o=a?.tables;return{layerIds:l?.map(u=>u.id).reverse()||[],tableIds:o?.map(u=>u.id).reverse()||[],layerInfos:s?l:[],tableInfos:s?o:[]}}function w(r){return!r.type||r.type==="Feature Layer"}async function V(r,t){let e=await i(r,t);e=e||{},e.layers=e.layers?.filter(w)||[];const a={serviceJSON:e};if(e.currentVersion<10.5)return a;const s=await i(r+"/layers",t);return a.layersJSON={layers:s?.layers?.filter(w)||[],tables:s?.tables||[]},a}async function _(r){return(0,C[r])()}async function x(r,t){return(await i(r,{customParameters:t})).tileInfo}async function i(r,t){return(await g(r,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}})).data}export{V as fetchFeatureService,k as fromUrl};
