import{bO as n,bP as s}from"./main-95e6e76d.js";import"./preload-helper-388ac9d5.js";window.debugInstance=null;let l={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:n.defaultLODs(n.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},layers:[{id:"AirEmissions",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:9,state:{opacity:1,visibility:!0},fixtures:{legend:{toggleSymbology:!1}}},{index:18,state:{opacity:1,visibility:!0},fixtures:{legend:{toggleSymbology:!1}}}],state:{opacity:1,visibility:!0},customRenderer:{}},{id:"MarineWaterQuality",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/Shellfish_Sites_Samples_Mollusques_Echantillons/MapServer/",sublayers:[{index:3},{index:4},{index:5}],state:{opacity:1,visibility:!1},customRenderer:{}},{id:"userOSM",layerType:"osm-tile"}],fixtures:{legend:{root:{children:[{name:"Title info section",infoType:"title",content:"The quick brown fox jumps over the lazy dog"},{name:"Text info section",infoType:"text",content:'"The quick brown fox jumps over the lazy dog" is an English-language pangram—a sentence that contains all the letters of the alphabet.'},{name:"Image info section",infoType:"image",content:"https://upload.wikimedia.org/wikipedia/commons/8/80/Fox_Jumping_Over_A_Dog_in_Signaling_for_Boys.png"},{name:"Markdown info section",infoType:"markdown",content:"[The *quick* **brown** fox jumps over the ~~lazy~~ dog](https://en.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog)"},{name:"Markdown info section",infoType:"template",content:`<div>
                                            <p>The first message sent on the Moscow–Washington hotline on August 30, 1963, was the test phrase "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG'S BACK 1234567890". Later, during testing, the Russian translators sent a message asking their American counterparts, "What does it mean when your people say 'The quick brown fox jumped over the lazy dog'?"</p>
                                            </div>`},{name:"Other pangrams",infoType:"title",content:"Other pangrams",children:[{name:"Waltz, bad nymph, for quick jigs vex.",infoType:"text",content:"Waltz, bad nymph, for quick jigs vex."},{name:"Sphinx of black quartz, judge my vow.",infoType:"text",content:"Sphinx of black quartz, judge my vow."},{name:"How vexingly quick daft zebras jump!",infoType:"text",content:"How vexingly quick daft zebras jump!"}]}]}},appbar:{items:["legend"]},mapnav:{items:["fullscreen","legend","home","basemap"]},details:{templates:{esri:"Details-Default-Template-Esri"}}}}}},o={loadDefaultFixtures:!1,loadDefaultEvents:!0};const a=s(document.getElementById("app"),l,o);a.fixture.addDefaultFixtures(["mapnav","legend","appbar","grid","details"]).then(()=>{a.panel.open("legend")});a.$element.component("Details-Default-Template-Esri",{props:["identifyData","fields"],template:`
        <div>
            <div
                class="p-5 pl-3 flex justify-end flex-wrap even:bg-green-100 border-2 border-black"
                v-for="(val, name, itemIdx) in itemData()"
                :key="itemIdx"
            >
                <span class="inline font-bold">{{ val.alias }}</span>
                <span class="flex-auto"></span>
                <span class="inline" v-html="val.value"></span>
            </div>
        </div>
    `,methods:{itemData(){const t={};Object.assign(t,this.identifyData.data),t.Symbol!==void 0&&delete t.Symbol;let i={};return this.fields.forEach(e=>{i[e.name]=e.alias||e.name}),Object.keys(t).map(e=>{t[e]={value:typeof t[e]=="number"?this.$iApi.$i18n.n(t[e],"number"):t[e],alias:i[e]||e}}),t}}});window.debugInstance=a;