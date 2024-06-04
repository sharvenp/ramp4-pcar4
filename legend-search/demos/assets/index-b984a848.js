import{hi as u,hY as p,h_ as i,hX as d,ip as f,hl as y,iq as g}from"./main-95e6e76d.js";import m from"./screen-2589d591.js";import"./preload-helper-388ac9d5.js";class w extends u{toggleWizard(e){const r=this.$iApi.panel.get("wizard");this.$iApi.panel.toggle(r,e)}}class h extends p{layerCount=0;constructor(e){super(e)}async fetchFileInfo(e,r,t){switch(t||(t=await this.$iApi.geo.layer.files.fetchFileData(e,r)),r){case i.GEOJSON:return this.getGeojsonInfo(e,t);case i.SHAPEFILE:return this.getShapfileInfo(e,t);case i.CSV:return this.getCsvInfo(e,t);default:console.error(`Unsupported file type passed to fetchFileInfo - '${r}'`)}}async getGeojsonInfo(e,r){return r instanceof ArrayBuffer&&(r=JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(r)))),{config:{id:`geojson#${++this.layerCount}`,layerType:i.GEOJSON,url:e,name:e.substr(e.lastIndexOf("/")+1),state:{opacity:1,visibility:!0},rawData:r},fields:[{name:"OBJECTID",type:"oid"}].concat(this.$iApi.geo.layer.files.extractGeoJsonFields(r)),configOptions:["name","nameField","tooltipField","colour"]}}async getCsvInfo(e,r){return r instanceof ArrayBuffer&&(r=new TextDecoder("utf-8").decode(new Uint8Array(r))),{config:{id:`csv#${++this.layerCount}`,layerType:i.CSV,url:e,name:e.substr(e.lastIndexOf("/")+1),state:{opacity:1,visibility:!0},rawData:r},fields:[{name:"OBJECTID",type:"oid"}].concat(this.$iApi.geo.layer.files.extractCsvFields(r)),latLonFields:this.$iApi.geo.layer.files.filterCsvLatLonFields(r),configOptions:["name","nameField","tooltipField","latField","longField","colour"]}}async getShapfileInfo(e,r){const t=await this.$iApi.geo.layer.files.shapefileToGeoJson(r);return this.getGeojsonInfo(e,t)}async fetchServiceInfo(e,r){switch(r){case i.FEATURE:return this.getFeatureInfo(e);case i.MAPIMAGE:return this.getMapImageInfo(e);case i.TILE:return this.getTileInfo(e);case i.IMAGERY:return this.getImageryInfo(e);case i.WFS:return this.getWfsInfo(e);case i.WMS:return this.getWmsInfo(e)}}async getFeatureInfo(e){const r=await d.get(e,{params:{f:"json"}});return{config:{id:`${i.FEATURE}#${++this.layerCount}`,url:e,layerType:i.FEATURE,name:r.data.name,nameField:r.data.displayField,tooltipField:r.data.displayField,state:{opacity:1,visibility:!0}},fields:r.data.fields,configOptions:["name","nameField","tooltipField"]}}async getMapImageInfo(e){const r=await d.get(e,{params:{f:"json"}});return{config:{id:`${i.MAPIMAGE}#${++this.layerCount}`,url:e,layerType:i.MAPIMAGE,name:r.data.mapName,sublayers:[],state:{opacity:1,visibility:!0}},layers:o(r.data.layers),configOptions:["name","sublayers"]};function o(n){return n.map(a=>{const l=s(a,n);return a.level=l,a.indent=Array.from(Array(l)).fill("-").join(""),a.index=a.id,a});function s(a,l){return a.parentLayerId===-1?0:s(l[a.parentLayerId],l)+1}}}async getTileInfo(e){const r=await d.get(e,{params:{f:"json"}});return{config:{id:`${i.TILE}#${++this.layerCount}`,url:e,layerType:i.TILE,name:r.data.mapName,state:{opacity:1,visibility:!0}},configOptions:["name"]}}async getImageryInfo(e){const r=await d.get(e,{params:{f:"json"}});return{config:{id:`${i.IMAGERY}#${++this.layerCount}`,url:e,layerType:i.IMAGERY,name:r.data.name,state:{opacity:1,visibility:!0}},configOptions:["name"]}}async getWfsInfo(e){const r=new f(e),{startindex:t,limit:o}=r.queryMap,n=await this.$iApi.geo.layer.ogc.loadWfsData(e,-1,parseInt(t)||0,parseInt(o)||1e3);return this.getGeojsonInfo(e.match(/\/([^/]+)\/items/)?.[1]||"Layer",n)}async getWmsInfo(e){const r=await this.$iApi.geo.layer.ogc.parseCapabilities(e);return{config:{id:`${i.WMS}#${++this.layerCount}`,url:e,layerType:i.WMS,name:e,featureInfoMimeType:r.queryTypes[0],state:{opacity:1,visibility:!0}},layers:o(r.layers),configOptions:["name","sublayers"]};function o(n,s=0){return[].concat.apply([],n.map(a=>(a.level=s,a.indent=Array.from(Array(s)).fill("-").join(""),a.id=a.name,a.layers.length>0?a.id?[].concat(a,o(a.layers,s+1)):[].concat([],o(a.layers,s)):a.id?a:[])))}}guessFormatFromURL(e){switch(e.match(/\.(zip|csv|geojson|json)$/)?.[1]){case"zip":return i.SHAPEFILE;case"csv":return i.CSV;case"geojson":case"json":return i.GEOJSON}return e.match(/\/ImageServer\/?$/gi)?i.IMAGERY:e.match(/\/collections\//gi)?i.WFS:e.match(/arcgis\/rest\/services\//gi)?e.match(/\/\d+\/?$/g)?i.FEATURE:i.MAPIMAGE:e.match(/service=|version=|\/wms/gi)?i.WMS:""}}const z={en:{"wizard.title":"Import Layer","wizard.upload.title":"Upload data","wizard.upload.or":"or","wizard.upload.file.label":"Upload a file","wizard.upload.file.help":"Drop or select a file to upload","wizard.upload.file.error.failed":"File upload failed","wizard.upload.url.label":"URL to file or service","wizard.upload.url.error.required":"URL is required","wizard.upload.url.error.url":"Please enter a valid URL","wizard.format.title":"Select format","wizard.format.type.service":"Service type","wizard.format.type.file":"File format","wizard.format.type.error.required":"Service or file type is required","wizard.format.type.error.invalid":"Invalid file or service type","wizard.format.type.error.failure":"Failed to load data from file/service","wizard.format.info.cors":"Service needs to be CORS enabled","wizard.format.warn.cors":"Service may not support CORS","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"zipped Shapefile","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"ESRI Feature Layer","wizard.layerType.esriMapImage":"ESRI Map Image Layer","wizard.layerType.esriImagery":"ESRI Image Layer","wizard.layerType.esriTile":"ESRI Tile Layer","wizard.layerType.ogcWms":"OGC Web Map Service","wizard.layerType.ogcWfs":"OGC Web Feature Service","wizard.configure.title":"Configure layer","wizard.configure.name.error.required":"Name is required","wizard.configure.name.label":"Layer Name","wizard.configure.nameField.label":"Primary Field","wizard.configure.tooltipField.label":"Tooltip Field","wizard.configure.latField.label":"Latitude Field","wizard.configure.longField.label":"Longitude Field","wizard.configure.sublayers.error.required":"Sublayers are required","wizard.configure.sublayers.label":"Layers","wizard.configure.sublayers.help":"Hold Ctrl to select multiple layers","wizard.configure.colour.label":"Colour","wizard.configure.colour.hue":"Hue","wizard.configure.colour.copy":"Copy colour","wizard.configure.colour.hex":"Hex","wizard.step.cancel":"Cancel","wizard.step.continue":"Continue"},fr:{"wizard.title":"Importer un fichier","wizard.upload.title":"Charger des données","wizard.upload.or":"ou","wizard.upload.file.label":"Télécharger un fichier","wizard.upload.file.help":"Déposer ou sélectionner un fichier à télécharger","wizard.upload.file.error.failed":"Le téléchargement du fichier a échoué","wizard.upload.url.label":"URL vers fichier ou service","wizard.upload.url.error.required":"L’URL est requise","wizard.upload.url.error.url":"Veuillez saisir une adresse URL valide","wizard.format.title":"Choisir un format","wizard.format.type.service":"Type de service","wizard.format.type.file":"Format du fichier","wizard.format.type.error.required":"Le service ou le type de fichier est requis","wizard.format.type.error.invalid":"Type de fichier ou de service non valide","wizard.format.type.error.failure":"Échec du chargement des données à partir du fichier/service","wizard.format.info.cors":"Le service doit être compatible CORS.","wizard.format.warn.cors":"Le service ne pend peut-être pas en charge CORS.","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"Shapefile zippé","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"Couche d'éléments d'ESRI","wizard.layerType.esriMapImage":"Couche d’image de la carte ESRI","wizard.layerType.esriImagery":"Couche d'images d'ESRI","wizard.layerType.esriTile":"Couche de tuiles d'ESRI","wizard.layerType.ogcWms":"Couche WMS de l'OGC","wizard.layerType.ogcWfs":"Service d'entités Web OGC","wizard.configure.title":"Configurer la couche","wizard.configure.name.error.required":"Le champ Nom est obligatoire","wizard.configure.name.label":"Nom de la couche","wizard.configure.nameField.label":"Champ clé","wizard.configure.tooltipField.label":"Champ infobulle","wizard.configure.latField.label":"Champ latitude","wizard.configure.longField.label":"Champ longitude","wizard.configure.sublayers.error.required":"Des sous-couches sont requises","wizard.configure.sublayers.label":"Couches","wizard.configure.sublayers.help":"Maintenez la touche CTRL enfoncée pour sélectionner plusieurs couches","wizard.configure.colour.label":"Couleur","wizard.configure.colour.hue":"Teinte","wizard.configure.colour.copy":"Copier la couleur","wizard.configure.colour.hex":"Hex","wizard.step.cancel":"Annuler","wizard.step.continue":"Continuer"}};class F extends w{added(){this.$iApi.panel.register({wizard:{screens:{"wizard-screen":y(m)},button:{tooltip:"wizard.title",icon:'<svg class="fill-current" viewBox="0 0 23 21"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>'},style:{width:"350px"},alertName:"wizard.title"}},{i18n:{messages:z}});let e=new h(this.$iApi);const r=g(this.$vApp.$pinia);r.layerSource=e,this.removed=()=>{this.$iApi.panel.remove("wizard"),e=void 0,r.$reset()}}}export{F as default};
