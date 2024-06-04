import{gK as u,gW as f,gO as d,gQ as _,gR as h,gS as o,hp as y,gT as r,h6 as v,hl as p,hO as e,bO as n,bP as b}from"./main-7ffb345c.js";import"./preload-helper-388ac9d5.js";const x=u({name:"IklobFixtureV",data(){return{gazeboText:""}},props:{panel:Object},methods:{onCatSeen(){this.gazeboText="The cat on the gazebo panel has been seen!"}},created(){this.$iApi.event.once("gazebo/beholdMyText",this.onCatSeen)}}),S={class:"flex flex-col items-center mt-16"},T=r("span",{class:"text-6xl"},"🤷‍♂️",-1),M={class:"mt-16"};function C(a,s,i,l,c,m){const g=d("panel-screen");return _(),h(g,{panel:a.panel},{header:o(()=>[y(" Iklob Panel ")]),content:o(()=>[r("div",S,[T,r("span",M,v(a.gazeboText),1)])]),_:1},8,["panel"])}const E=f(x,[["render",C]]);class I{added(){this.$iApi.panel.register({id:"iklob-p1",config:{screens:{"iklob-s1":p(E)},button:{icon:"<span>I</span>",tooltip:"Iklob"},alertName:"Iklob"}},{i18n:{messages:{en:{Iklob:"Iklob"},fr:{Iklob:"[fr] Iklob"}}}})}}class W{added(){this.id,this.$iApi,this.$vApp;const i={id:"diligord-p1",config:{screens:{"diligord-s1":p({props:["panel"],data(){return{title:"Diligord Panel",count:0}},render(){const c=d("panel-screen");return e(c,{panel:this.panel},{header:()=>e("span",this.title),content:()=>e("div",{class:"flex flex-col items-center"},[e("button",{class:"bg-blue-500 hover:bg-blue-700 font-bold text-white py-8 px-16",onClick:()=>this.count+=10},[e("span",this.count)]),e("label",{class:"mt-16"},this.$iApi.$i18n.t("changeTitle")),e("input",{class:"border-2  p-8 mb-10",value:this.title,onInput:m=>{this.title=m.target.value}}),e("label","Hint: Change title to fight for a surprise."),this.title==="fight"?e("img",{style:{width:"300px",marginTop:"30px"},src:"https://media.giphy.com/media/sGAlRSaXKjTfq/giphy.gif"}):null])})}})},button:{icon:"<span>D</span>",tooltip:"Diligord"},alertName:"Diligord"}},l=this.extend({render(){return e("p",{style:{marginTop:"80px",fontWeight:"bold",color:"#34495e",fontSize:"20pt",textAlign:"center"}},[this.firstName," ",this.lastName," aka ",this.alias])},data(){return{firstName:"Walter",lastName:"White",alias:"Heisenberg"}}});document.querySelector(".ramp-app").after(l),this.$iApi.panel.register(i,{i18n:{messages:{en:{Diligord:"Diligord",changeTitle:"Change panel title"},fr:{Diligord:"[fr] Diligord",changeTitle:"Changer le titre du panneau"}}}})}}const R=r("div",{class:"flex flex-col items-center mt-16"},[r("img",{class:"my-16",src:"https://i.pinimg.com/originals/5f/12/01/5f120106a81b52d9813aabe8d14b1552.gif",alt:"",srcset:""})],-1),A=u({__name:"screen",props:["panel"],setup(a){return(s,i)=>{const l=d("panel-screen");return _(),h(l,{panel:a.panel},{header:o(()=>[y(" Mouruge Panel ")]),content:o(()=>[R]),_:1},8,["panel"])}}});class B{added(){this.$iApi.panel.register({id:"mouruge-p1",config:{screens:{"mouruge-s1":p(A)},button:{icon:"<span>M</span>",tooltip:"Mouruge"},alertName:"Mouruge"}},{i18n:{messages:{en:{Mouruge:"Mouruge"},fr:{Mouruge:"[fr] Mouruge"}}}})}}window.debugInstance=null;let D={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}},{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],caption:{mapCoords:{formatter:"WEB_MERCATOR"},scaleBar:{imperialScale:!0}},lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:n.defaultLODs(n.defaultTileSchemas()[0])},{id:"LOD_ESRI_World_AuxMerc_3857",lods:n.defaultLODs(n.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0},{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"baseNrCan",name:"Canada Base Map - Transportation (CBMT)",description:"The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"The Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseSimple",name:"Canada Base Map - Simple",description:"Canada Base Map - Simple",altText:"Canada base map - Simple",layers:[{id:"SMR",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBME_CBCE_HS_RO_3978",name:"Canada Base Map - Elevation (CBME)",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Elevation (CBME)",layers:[{id:"CBME_CBCE_HS_RO_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBMT_CBCT_GEOM_3978",name:"Canada Base Map - Transportation (CBMT)",description:" The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT_CBCT_GEOM_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseEsriWorld",name:"World Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.",altText:"World Imagery",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",attribution:{text:{disabled:!0},logo:{disabled:!0}}},{id:"baseEsriPhysical",name:"World Physical Map",description:"This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.",altText:"World Physical Map",layers:[{id:"World_Physical_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriRelief",name:"World Shaded Relief",description:"This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.",altText:"World Shaded Relief",layers:[{id:"World_Shaded_Relief",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriStreet",name:"World Street Map",description:"This worldwide street map presents highway-level data for the world.",altText:"ESWorld Street Map",layers:[{id:"World_Street_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTerrain",name:"World Terrain Base",description:"This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.",altText:"World Terrain Base",layers:[{id:"World_Terrain_Base",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTopo",name:"World Topographic Map",description:"This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.",altText:"World Topographic Map",layers:[{id:"World_Topo_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"}],initialBasemapId:"baseEsriWorld"},layers:[{id:"WaterQuantity",name:"Water quantity parent",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:1,name:"Water quantity child",state:{opacity:1,visibility:!0},fixtures:{details:{template:"Water-Quantity-Template"}}}],state:{opacity:1,visibility:!0},customRenderer:{}},{id:"WaterQuality",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:5,state:{opacity:1,visibility:!0}}],state:{opacity:1,visibility:!0},customRenderer:{}},{id:"CleanAir",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9",state:{opacity:.8,visibility:!0},customRenderer:{}},{id:"WFSLayer",layerType:"ogc-wfs",url:"https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&startindex=0&limit=1000&province__province=on",xyInAttribs:!0,colour:"#FF5555",state:{visibility:!0},customRenderer:{},metadata:{url:"https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md"},fixtures:{details:{template:"WFSLayer-Custom"}}}],fixtures:{legend:{root:{children:[{name:"Visibility Set",exclusiveVisibility:[{layerId:"CleanAir",name:"Clean Air in Set"},{name:"Group in Set",children:[{layerId:"WaterQuantity",name:"Water Quantity in Nested Group",sublayerIndex:1},{layerId:"WaterQuality",name:"Water Quality in Nested Group",sublayerIndex:5}]}]},{layerId:"WFSLayer",name:"WFSLayer"}]}},appbar:{items:[["diligord-p1",{id:"gazebo"},"iklob-p1","mouruge-p1"],["snowman","legend","geosearch","basemap"]]},mapnav:{items:["fullscreen","help","home","basemap"]},export:{title:{value:"All Your Base are Belong to Us"}}},panels:{open:[{id:"diligord-p1"},{id:"iklob-p1"},{id:"mouruge-p1"}]},system:{animate:!0}}}},L={loadDefaultFixtures:!0,loadDefaultEvents:!0,startRequired:!1};const t=b(document.getElementById("app"),D,L);window.debugInstance=t;t.fixture.add("iklob",I);t.fixture.add("diligord",W);t.fixture.add("mouruge",B);t.fixture.add("gazebo");t.fixture.add("snowman");t.fixture.add("export");t.$element.component("WFSLayer-Custom",{props:["identifyData"],template:`
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `});t.$element.component("Water-Quantity-Template",{props:["identifyData"],template:`
        <div style="align-items: center; justify-content: center; font-size: 14px; font-family: Arial, sans-serif;">
            <div v-html="renderHeader()" />
            <div v-html="createSection('Station ID', 'StationID')" />
            <div v-html="createSection('Province', 'E_Province')" />
            <div v-html="createSection('Report Year', 'Report_Year')" />
            <div v-if="this.identifyData.loaded">
                <div style="display: flex; flex-direction: row; color: #a0aec0; font-weight: bold; padding-top: 5px;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        Latitude
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        Longitude
                    </div>
                </div>
                <div style="display: flex; flex-direction: row;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        {{this.identifyData.data['Latitude']}}
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        {{this.identifyData.data['Longitude']}}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; padding-top: 5px; color: #4299e1;">
                    <span style="font-weight: bold; color: #a0aec0;">Links</span>
                    <span v-html="this.identifyData.data['E_DetailPageURL']"></span>
                    <span v-html="this.identifyData.data['E_URL_Historical']"></span>
                    <span v-html="this.identifyData.data['E_URL_RealTime']"></span>
                </div>
            </div>
        </div>
    `,methods:{renderHeader(){return this.identifyData.loaded?this.identifyData.data.Symbol==="3"?`
                    <span style="display: flex; font-size: 20px; background-color: #e53e3e; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data.StationName}
                    </span>
                `:`
                    <span style="display: flex; font-size: 20px; background-color: #3182ce; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data.StationName}
                    </span>
                `:`
                <span style="display: flex; font-size: 20px; background-color: #e21e5e; color: white; padding: 4px; text-align: center;">
                    Loading...
                </span>
                `},createSection(a,s){var i=this.identifyData.loaded?this.identifyData.data[s]:"Loading...";return`
            <div style="display: flex; flex-direction: column; padding-top: 5px;">
                <span style="color: #a0aec0; font-weight: bold;">
                    ${a}
                </span>
                <span>
                    ${i}
                </span>
            </div>
            `}}});
