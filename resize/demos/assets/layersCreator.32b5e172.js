import{E as d,t as T,b as f,j as g}from"./main.33d7d020.js";import{a as L}from"./lazyLayerLoader.b0ff2619.js";import{selectLayerClassPath as G}from"./portalLayers.539e4ee4.js";import"./preload-helper.387dac8f.js";import"./layersLoader.5f3c0699.js";import"./jsonContext.02fb24c4.js";import"./portalItemUtils.82e777bf.js";function m(e){return u(e,"notes")}function M(e){return u(e,"route")}function u(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function A(e,r,y){if(!r)return;const t=[];for(const a of r){const i=V(a,y);a.layerType==="GroupLayer"?t.push(U(i,a,y)):t.push(i)}const n=await d(t);for(const a of n)!a.value||y.filter&&!y.filter(a.value)||e.add(a.value)}const v={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},w={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},b={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},W={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},F={ArcGISFeatureLayer:"FeatureLayer"},C={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function V(e,r){return O(await B(e,r),e,r)}async function O(e,r,y){const t=new e;return t.read(r,y.context),t.type==="group"&&S(r)&&await D(t,r,y.context),await T(t,y.context),t}async function B(e,r){const y=r.context,t=h(y);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const a=t[n];let i=a?L[a]:L.UnknownLayer;if(I(e)){const s=y?.portal;if(e.itemId){const o=new f({id:e.itemId,portal:s});await o.load();const c=(await G(o)).className||"UnknownLayer";i=L[c]}}else n==="ArcGISFeatureLayer"?m(e)?i=L.MapNotesLayer:M(e)?i=L.RouteLayer:S(e)&&(i=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=L.WMTSLayer:n==="WFS"&&e.wfsInfo.version!=="2.0.0"&&(i=L.UnsupportedLayer);return i()}function S(e){return e.layerType!=="ArcGISFeatureLayer"||I(e)?!1:(e.featureCollection?.layers?.length??0)>1}function I(e){return e.type==="Feature Collection"}function h(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=b;break;case"ground":r=w;break;default:r=v}else switch(e.layerContainerType){case"basemap":r=C;break;case"tables":r=F;break;default:r=W}return r}async function U(e,r,y){const t=new g,n=A(t,Array.isArray(r.layers)?r.layers:[],y),a=await e;if(await n,a.type==="group")return a.layers.addMany(t),a}async function D(e,r,y){const t=L.FeatureLayer,n=await t(),a=r.featureCollection,i=a.showLegend,s=a.layers.map((o,c)=>{const l=new n;l.read(o,y);const p={...y,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${c}`,visibility:r.visibleLayers?.includes(c)??!0},p),i!=null&&l.read({showLegend:i},p),l});e.layers.addMany(s)}export{A as populateOperationalLayers};