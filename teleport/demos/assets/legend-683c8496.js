import{bL as a,bM as r}from"./main-bbf05f59.js";import"./preload-helper-388ac9d5.js";window.debugInstance=null;let o={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],caption:{mapCoords:{formatter:"WEB_MERCATOR"},scaleBar:{imperialScale:!0}},mapMouseThrottle:200,lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:a.defaultLODs(a.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"baseEsriWorld",name:"World Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.",altText:"World Imagery",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",attribution:{text:{disabled:!0},logo:{disabled:!0}}}],initialBasemapId:"baseEsriWorld"},layers:[{id:"WaterQuantity",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:1,name:"Water quantity child",state:{opacity:1,visibility:!0},fixtures:{settings:{controls:["visibility","opacity"]}}},{index:9,name:"Carbon monoxide emissions by facility",state:{opacity:.5,visibility:!0},disabledControls:["opacity","visibility"]}],state:{opacity:1,visibility:!0},metadata:{url:"https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md",name:"Read Me!"},customRenderer:{}},{id:"WaterQuality",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:5,state:{}}],state:{opacity:1,visibility:!0},customRenderer:{}},{id:"CleanAir",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9",state:{opacity:.8,visibility:!0,hovertips:!1},mouseTolerance:10,customRenderer:{}},{id:"WFSLayer",layerType:"ogc-wfs",url:"https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&startindex=0&limit=1000&province__province=on",xyInAttribs:!0,colour:"#FF5555",state:{visibility:!1},customRenderer:{},metadata:{url:"https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md"},fixtures:{details:{template:"WFSLayer-Custom"}}}],fixtures:{legend:{root:{children:[{layerId:"WFSLayer",name:"WFSLayer"},{name:"Visibility Set",exclusiveVisibility:[{layerId:"CleanAir",name:"Clean Air in Set"},{name:"Group in Set",children:[{layerId:"WaterQuantity",name:"Water Quantity in Nested Group",sublayerIndex:1,controls:["datatable","metadata","reload","remove","settings","symbology"]},{layerId:"WaterQuantity",name:"CO2 in Nested Group",sublayerIndex:9},{layerId:"WaterQuality",name:"Water Quality in Nested Group",sublayerIndex:5}]}]}]}},appbar:{items:["wizard","legend"]}}}}},n={loadDefaultFixtures:!1,loadDefaultEvents:!0};const t=r(document.getElementById("app"),o,n);window.debugInstance=t;t.fixture.addDefaultFixtures(["appbar","crosshairs","grid","legend","metadata","scrollguard","panguard","settings","wizard"]).then(async()=>{t.panel.open("legend"),t.panel.pin("legend"),window.lApi=window.debugInstance.fixture.get("legend");let e=window.lApi.getLayerItem("CleanAir");e.uid="😎",await s()});const s=async()=>{console.log("===== RUNNING LEGEND API CRUD TESTS ====="),console.log("*********** Create ***********");let e=window.lApi.createItem({name:"Created Group",children:[]},window.lApi.getItem(window.lApi.getLegendConfig().root.children[1].uid));console.log('create group under "Visibility Set"',window.lApi.addItem(e,window.lApi.getItem(window.lApi.getLegendConfig().root.children[1].uid)));const i=window.debugInstance.geo.layer.createLayer({id:"Oilsands",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Oilsands/MapServer",layerType:"esri-map-image",name:"Oil Sands",sublayers:[{index:0,state:{opacity:.5,visibility:!0}},{index:1,state:{opacity:1,visibility:!1}},{index:2,state:{opacity:1,visibility:!1}}],state:{opacity:1,visibility:!0}});await window.debugInstance.geo.map.addLayer(i);let l=await window.lApi.addLayerItem(i,e);console.log('Add Oil Sands layer item under "Created Group"',l),console.log("*********** Read ***********"),console.log("get legend",window.lApi.getLegend()),console.log("get legend config",window.lApi.getLegendConfig()),console.log("get item WFSLayer",window.lApi.getItem("WFSLayer")),console.log("get layer item with layer id CleanAir",window.lApi.getLayerItem("CleanAir")),console.log("get item layer id MIL sublayer",window.lApi.getItem("WaterQuantity-9")),console.log("get item with uid",window.lApi.getItem("😎")),console.log("get all expanded (undefined=true)",window.lApi.getAllExpanded()),console.log("get all expanded true",window.lApi.getAllExpanded(!0)),console.log("get all expanded false",window.lApi.getAllExpanded(!1)),console.log("get all visible (undefined=true)",window.lApi.getAllVisible(!0)),console.log("get all visible true",window.lApi.getAllVisible()),console.log("get all visible false",window.lApi.getAllVisible(!1)),console.log("*********** Update ***********"),console.log("toggle expand/visibility using the buttons in the legend"),console.log("*********** Delete ***********"),console.log("remove item by legend id: run `window.lApi.removeItem(uid or legend item instance)`"),console.log("remove item by legend id: run `window.lApi.removeLayerItem(layerId)`"),console.log("=========================================")};
