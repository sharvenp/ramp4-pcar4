import{g as a,c as t}from"./main.efb50b2c.js";import"./preload-helper.387dac8f.js";window.debugInstance=null;let r={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:a.defaultLODs(a.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},layers:[],fixtures:{appbar:{items:["geosearch"]}}}}},s={loadDefaultFixtures:!1,loadDefaultEvents:!0};const e=t(document.getElementById("app"),r,s);e.fixture.addDefaultFixtures(["appbar","geosearch"]).then(()=>{e.panel.open("geosearch")});window.debugInstance=e;
