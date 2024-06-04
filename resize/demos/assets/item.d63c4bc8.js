import{g6 as z,h1 as q,g7 as E,gg as T,g9 as l,gf as o,ge as n,gh as c,gc as s,gy as g,gz as N,gd as m,hf as p,gv as V,gW as v,g8 as S,gr as U,gb as R,gB as f,gm as y,gk as G,gl as Z,go as b,gp as H,gQ as W,gN as L,mM as j,ga as C,gq as K,mN as P}from"./main.33d7d020.js";import{m as Q}from"./marked.esm.fe0f66b5.js";import{a as X,L as A,b as D,I as Y,S as J,c as _}from"./section-item.35579ba5.js";import"./preload-helper.387dac8f.js";const x=z({name:"CheckboxV",props:{value:{type:Object,required:!0},legendItem:{type:Object,required:!0},checked:{type:Boolean},label:{type:String},isRadio:{type:Boolean},disabled:{type:Boolean}},data(){return{initialChecked:this.legendItem.visibility}},mounted(){this.legendItem.checkVisibilityRules(),this.initialChecked=this.legendItem.visibility===this.checked},methods:{_noSymbolsVisible(e){return!e.symbologyStack.some(t=>t.visibility)},toggleVisibility(){if(this.value instanceof X)this.legendItem.toggleVisibility();else if(this.legendItem instanceof A){if(this._noSymbolsVisible(this.legendItem)?(this.legendItem.setSymbologyVisibility(void 0,!1),this.legendItem.setSymbologyVisibility(this.value.uid,!0),this.legendItem.toggleVisibility(!0)):this.legendItem.setSymbologyVisibility(this.value.uid,!this.value.lastVisbility),this._noSymbolsVisible(this.legendItem)&&this.legendItem.toggleVisibility(!1),this.legendItem.layer?.supportsFeatures){const e=this.legendItem.symbologyStack.filter(r=>r.lastVisbility===!0).map(r=>r.definitionClause||"");let t="";e.length===0?t="1=2":e.length<this.legendItem.symbologyStack.length&&(t=e.join(" OR ")),this.legendItem.layer?.setSqlFilter(q.SYMBOL,t)}this.initialChecked=!0}}}}),ee=["aria-label","checked","disabled","content"];function te(e,t,r,d,u,h){const w=T("tippy");return l(),o("div",{class:"relative",onMouseover:t[3]||(t[3]=g(()=>{},["stop"]))},[n(" TODO: see if getting this to use v-model works; children wouldnt update properly on initial try "),c(s("input",{type:"checkbox","aria-label":e.$t(e.checked?`legend.visibility.hide${e.label}`:`legend.visibility.show${e.label}`),onClick:t[0]||(t[0]=g(()=>{},["stop"])),checked:e.checked&&e.initialChecked,onChange:t[1]||(t[1]=g(a=>e.toggleVisibility(),["stop"])),onKeyup:t[2]||(t[2]=N(g(a=>e.toggleVisibility(),["stop"]),["enter"])),class:m([[e.isRadio?"form-radio":"form-checkbox rounded-none",e.disabled?"text-gray-400 border-gray-300":"text-black cursor-pointer border-gray-500 hover:border-black"],"mx-5 h-15 w-15"]),tabindex:"-1",disabled:e.disabled,content:e.$t(e.checked?`legend.visibility.hide${e.label}`:`legend.visibility.show${e.label}`)},null,42,ee),[[w,{placement:"top-end",hideOnClick:!1}]])],32)}var le=E(x,[["render",te],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/checkbox.vue"]]);const oe=z({name:"LegendOptionsV",props:{legendItem:A},data(){return{LayerControl:p}},methods:{toggleSymbology(){this.legendItem.layerControlAvailable(p.Symbology)&&this.legendItem.toggleSymbology()},toggleGrid(){this.legendItem.layerControlAvailable(p.Datatable)&&this.getFixtureExists("grid")&&this.$iApi.event.emit(V.GRID_TOGGLE,this.legendItem.layer)},toggleSettings(){this.legendItem.layerControlAvailable(p.Settings)&&this.getFixtureExists("settings")&&this.$iApi.event.emit(V.SETTINGS_TOGGLE,this.legendItem.layer)},toggleMetadata(){if(this.legendItem.layerControlAvailable(p.Metadata)&&this.getFixtureExists("metadata")){const e=this.legendItem?.layer?.config.metadata||this.legendItem?.layer?.parentLayer?.config?.metadata||{},t=e?.name||this.legendItem?.layer?.name||"";e.url?this.$iApi.event.emit(V.METADATA_TOGGLE,{type:"html",layerName:t,url:e.url,layer:this.legendItem.layer}):console.warn("Layer does not have a metadata url defined")}},zoomToLayerBoundary(){this.legendItem.layerControlAvailable(p.BoundaryZoom)&&this.legendItem?.layer?.zoomToLayerBoundary()},removeLayer(){this.legendItem.layerControlAvailable(p.Remove)&&this.$iApi.geo.map.removeLayer(this.legendItem.layerUid)},reloadLayer(){this.legendItem.layerControlAvailable(p.Reload)&&(v(this.legendItem.layer).reload(),this.$refs["dropdown-menu"].open=!1)},getFixtureExists(e){try{return!!this.$iApi.fixture.get(e)}catch{return!1}}}}),I=e=>(G("data-v-b07d2324"),e=e(),Z(),e),se=I(()=>s("div",{class:"flex p-4"},[s("svg",{class:"inline-block fill-current w-18 h-18 mx-4",viewBox:"0 0 23 21"},[s("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})])],-1)),ne=I(()=>s("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[s("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})],-1)),ie=I(()=>s("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[s("g",null,[s("path",{d:"M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z "})])],-1)),ae=I(()=>s("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[s("path",{d:"M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z "})],-1)),re=I(()=>s("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[s("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1)),de=I(()=>s("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 24 24"},[s("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)),ge=I(()=>s("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[s("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})],-1)),me=I(()=>s("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 24 24"},[s("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1));function ye(e,t,r,d,u,h){const w=S("dropdown-menu");return l(),o("div",{onClick:t[7]||(t[7]=g(()=>{},["stop"])),onMouseover:t[8]||(t[8]=g(()=>{},["stop"])),class:"options display-block cursor-auto"},[U(w,{class:"flex-shrink-0",position:"bottom-end",tooltip:e.$t("legend.layer.options"),"tooltip-placement":"left",ref:"dropdown-menu"},{header:R(()=>[se]),default:R(()=>[s("a",{href:"#",class:m(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(e.LayerControl.Metadata)||!e.getFixtureExists("metadata")}]),onClick:t[0]||(t[0]=(...a)=>e.toggleMetadata&&e.toggleMetadata(...a))},[ne,f(" "+y(e.$t("legend.layer.controls.metadata")),1)],2),s("a",{href:"#",class:m(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(e.LayerControl.Settings)||!e.getFixtureExists("settings")}]),onClick:t[1]||(t[1]=(...a)=>e.toggleSettings&&e.toggleSettings(...a))},[ie,f(" "+y(e.$t("legend.layer.controls.settings")),1)],2),s("a",{href:"#",class:m(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(e.LayerControl.Datatable)||!e.getFixtureExists("grid")}]),onClick:t[2]||(t[2]=(...a)=>e.toggleGrid&&e.toggleGrid(...a))},[ae,f(" "+y(e.$t("legend.layer.controls.datatable")),1)],2),s("a",{href:"#",class:m(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(e.LayerControl.Symbology)}]),onClick:t[3]||(t[3]=(...a)=>e.toggleSymbology&&e.toggleSymbology(...a))},[re,f(" "+y(e.$t("legend.layer.controls.symbology")),1)],2),s("a",{href:"#",class:m(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(e.LayerControl.BoundaryZoom)}]),onClick:t[4]||(t[4]=(...a)=>e.zoomToLayerBoundary&&e.zoomToLayerBoundary(...a))},[de,f(" "+y(e.$t("legend.layer.controls.boundaryzoom")),1)],2),s("a",{href:"#",class:m(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(e.LayerControl.Remove)}]),onClick:t[5]||(t[5]=(...a)=>e.removeLayer&&e.removeLayer(...a))},[ge,f(" "+y(e.$t("legend.layer.controls.remove")),1)],2),s("a",{href:"#",class:m(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(e.LayerControl.Reload)}]),onClick:t[6]||(t[6]=(...a)=>e.reloadLayer&&e.reloadLayer(...a))},[me,f(" "+y(e.$t("legend.layer.controls.reload")),1)],2)]),_:1},8,["tooltip"])],32)}var ce=E(oe,[["render",ye],["__scopeId","data-v-b07d2324"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/legend-options.vue"]]);const he=z({name:"LegendSymbologyStackV",props:{visible:{type:Boolean,required:!0},legendItem:{type:Object,required:!0}},data(){return{stack:[]}},mounted(){this.legendItem.loadPromise.then(()=>{this.legendItem.layerUid!==void 0&&Promise.all(v(this.legendItem.symbologyStack).map(e=>e.drawPromise)).then(e=>{this.stack=v(this.legendItem).symbologyStack})})}}),pe=e=>(G("data-v-8c81fb38"),e=e(),Z(),e),ve={key:0},ue={key:0,class:"relative left-3"},fe=["innerHTML"],be=["src"],Ie={class:"symbologyIcon w-32 h-32"},Le=["innerHTML"],ke=["src"],we=pe(()=>s("div",{class:"h-32 w-32 inline-flex justify-center items-center"},[s("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},[s("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})])],-1));function $e(e,t,r,d,u,h){return e.visible?(l(),o(b,{key:1},[n(" If the symbology stack is already open, display an X in the place of the stack. "),we],2112)):(l(),o("div",ve,[n(" Multiple icons to display "),e.stack.length>1?(l(),o("div",ue,[n(" the :class line calculates margin-left for each of the 3 symbols, and gives a margin-top to symbols that arent the first "),(l(!0),o(b,null,H(e.stack.slice(0,3).reverse(),(w,a)=>(l(),o("div",{class:m(["absolute",[a==0?"symbol-0":a==1?"left-3 symbol-1":"left-6 symbol-2"]]),style:W({"z-index":3-a}),key:a},[e.stack[a].svgcode?(l(),o("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:e.stack[a].svgcode},null,8,fe)):e.stack[a].imgUrl?(l(),o("img",{key:1,class:"symbologyIcon w-28 h-28",src:e.stack[a].imgUrl},null,8,be)):n("v-if",!0)],6))),128))])):e.stack.length>0?(l(),o(b,{key:1},[n(" Only one icon to display. "),s("div",Ie,[e.stack[0].svgcode?(l(),o("span",{key:0,innerHTML:e.stack[0].svgcode},null,8,Le)):e.stack[0].imgUrl?(l(),o("img",{key:1,class:"symbologyIcon w-full h-full",src:e.stack[0].imgUrl},null,8,ke)):n("v-if",!0)])],2112)):n("v-if",!0)]))}var Ce=E(he,[["render",$e],["__scopeId","data-v-8c81fb38"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/symbology-stack.vue"]]);const Me=z({name:"LegendItemV",props:{legendItem:{type:Object,required:!0}},components:{checkbox:le,"symbology-stack":Ce,options:ce},data(){return{mobileMode:this.get("panel/mobileView"),layerConfigs:this.get(L.layerConfigs),LegendType:D,symbologyStack:[],LayerItem:A,InfoType:Y,hovered:!1}},computed:{layerType(){return this.legendItem instanceof A?v(this.legendItem.layer)?.layerType:""},isAnimationEnabled(){return this.$iApi.animate},isGroup(){return this.legendItem.children.length>0},isSection(){return this.legendItem instanceof J&&this.legendItem.content!==""}},methods:{controlAvailable(e){return Object.values(_).includes(e)?this.legendItem.controlAvailable(e):this.legendItem.layerControlAvailable(e)},markdownToHtml(e){return Q(e)},toggleExpand(){this.legendItem.children.length===0||!this.controlAvailable("expandButton")||(this.legendItem.toggleExpanded(),this.$nextTick(()=>this.$el.querySelector(".legend-group")?.scrollIntoView(!1)),this.$iApi.updateAlert(this.$t(`legend.alert.group${this.legendItem.expanded?"Expanded":"Collapsed"}`)))},toggleSymbology(){if(this.controlAvailable(p.Symbology)){const e=this.legendItem.toggleSymbology();this.$nextTick(()=>this.$el.querySelector(".symbology-stack")?.scrollIntoView(!1)),this.$iApi.updateAlert(this.$t(`legend.alert.symbology${e?"Expanded":"Collapsed"}`))}},toggleGrid(){this.controlAvailable(p.Datatable)&&this.getDatagridExists()&&this.$iApi.event.emit(V.GRID_TOGGLE,this.legendItem.layer)},getLegendGraphic(e){const t=document.createElement("span");t.innerHTML=e.svgcode;const r=t.firstElementChild;return r?.classList.add("max-w-full"),r?.classList.add("h-full"),r?.setAttribute("height",e.imgHeight),r?.setAttribute("width",e.imgWidth),t.outerHTML},getDatagridExists(){try{return!!this.$iApi.fixture.get("grid")}catch{return!1}},reloadIfReady(){if(this.legendItem.reload(),this.legendItem._loadCancelled){const e=setInterval(()=>{this.legendItem.layer&&Promise.allSettled([this.legendItem.layer.loadPromise]).then(()=>{clearInterval(e),this.reloadLayer()})},250)}else this.reloadLayer()},reloadLayer(){setTimeout(()=>{if(this.legendItem._loadCancelled=!1,this.legendItem.layer!==void 0)v(this.legendItem.layer).reload().then(()=>this.$iApi.$vApp.$store.set(L.removeErrorLayer,this.legendItem.layer)).catch(()=>this.$iApi.$vApp.$store.set(L.addErrorLayers,[this.legendItem.layer]));else{const e=this.legendItem.layerIdx===void 0||this.legendItem.layerIdx===-1?this.layerConfigs.find(t=>t.id===this.legendItem.layerId):this.layerConfigs.find(t=>t.id===this.legendItem.parentLayerId);e!==void 0&&this.recreateLayer(e)}this.legendItem.loadPromise.catch(()=>{console.error("Failed to reload layer -",this.legendItem.name)})},500)},async recreateLayer(e){try{await new Promise(async(t,r)=>{const d=this.$iApi.geo.layer.createLayer(e);this.$iApi.$vApp.$store.set(L.removeErrorLayer,d);const u=this.$iApi.geo.layer.getLayer(d.id);if(u){const[h]=await j(v(u).reload());h&&(this.$iApi.$vApp.$store.set(L.addErrorLayers,[d]),r(h))}else this.$iApi.geo.map.addLayer(d).catch(()=>r());t(d)})}catch{return}},cancelLayer(){const e=v(this.legendItem);if(e.type===D.Error){this.legendItem._hidden=!0;let t=!1;const r=setInterval(()=>{t?clearInterval(r):e.layer&&e.layer.layerExists&&(this.$iApi.geo.map.removeLayer(e.layer),this.$iApi.$vApp.$store.set(L.removeErrorLayer,e.layerId),this.$iApi.$vApp.$store.set(L.removeLayerConfig,e.layerId),this.$iApi.fixture.get("legend")?.removeLayerItem(e.layerId),t=!0)},250)}else{this.legendItem.error(),this.legendItem._loadCancelled=!0;const t=setInterval(()=>{const r=this.$iApi.geo.layer.allLayers().find(d=>d.id===e.parentLayerId||d.id===e.layerId)??this.$iApi.geo.layer.allErrorLayers().find(d=>d.id===e.parentLayerId||d.id===e.layerId);if(r){clearInterval(t);const d=this.$iApi.fixture.get("legend")?.getLayerItem(r);d&&(d.error(),d._loadCancelled=!0),r.sublayers?.forEach(u=>{const h=this.$iApi.fixture.get("legend")?.getLayerItem(u);h&&(h.error(),h._loadCancelled=!0)})}},250)}},hover(e){this.hovered=!0,setTimeout(()=>{this.hovered&&(this.mobileMode||e._tippy?.show())},300)}},mounted(){this.legendItem instanceof A&&this.legendItem.loadPromise.then(()=>{if(this.symbologyStack=[],!this.legendItem.layer){console.warn("Attempted to mount legend item component with undefined layer");return}Promise.all(v(this.legendItem.symbologyStack.map(e=>e.drawPromise))).then(()=>{this.symbologyStack=v(this.legendItem.symbologyStack)})})}}),k=e=>(G("data-v-2a3a4c23"),e=e(),Z(),e),Se={class:"relative"},Ae=["content"],Te={key:0,class:"flex ml-3 mr-10"},Ve={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px"},ze=P('<path d="M0 0h24v24H0V0z" fill="none" data-v-2a3a4c23></path><path d="M0 0h24v24H0V0z" fill="none" data-v-2a3a4c23></path><circle cx="15.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-2a3a4c23></path>',7),Ee=[ze],Be=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px" data-v-2a3a4c23><path d="M0 0h24v24H0V0z" fill="none" data-v-2a3a4c23></path><path d="M0 0h24v24H0V0z" fill="none" data-v-2a3a4c23></path><circle cx="15.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-2a3a4c23></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-2a3a4c23></path></svg>',1),He=["disabled","content"],Ge=["src"],Ze=k(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)),Oe=[Ze],Re=["content"],De=k(()=>s("svg",{class:"inline-block fill-current w-18 h-18",viewBox:"0 0 24 24"},[s("path",{d:"M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"})],-1)),Ue=[De],Pe={key:4,class:"flex-1 pointer-events-none"},Fe={key:5,class:"flex-1"},qe={key:0,class:"text-lg font-bold"},Ne={key:1},We=["src"],je=["innerHTML"],Ke={key:6,class:"relative"},Qe=["content"],Xe=k(()=>s("div",{class:"flex p-8"},[s("svg",{class:"inline-block fill-current w-18 h-18",viewBox:"0 0 24 24"},[s("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})])],-1)),Ye=[Xe],Je={key:7,class:"relative"},_e=["content"],xe={class:"flex p-8"},et={key:0,class:"fill-current w-18 h-18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},tt=k(()=>s("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},null,-1)),lt=[tt],ot={key:1,class:"inline-block fill-current w-18 h-18 mr-1",viewBox:"0 0 23 21"},st=k(()=>s("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},null,-1)),nt=[st],it={key:9,class:"relative"},at=["content"],rt=k(()=>s("svg",{class:"m-auto",xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 0 24 24",width:"18"},[s("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)),dt=[rt],gt={key:0,class:"flex-1 h-3"},mt=k(()=>s("div",{class:"progress-line"},null,-1)),yt=[mt],ct={key:0,class:"symbology-stack default-focus-style"},ht={key:0},pt={key:0,class:"m-5"},vt={key:0,class:"items-center grid-cols-1"},ut={key:0,class:"symbologyIcon w-full p-5"},ft=["src"],bt=["innerHTML"],It={key:2,class:"flex-1 p-5 bg-black-75 text-white"},Lt={class:"flex items-center"},kt={key:0,class:"symbologyIcon"},wt=["src"],$t={key:1,class:"symbologyIcon"},Ct=["innerHTML"],Mt={class:"flex-1 ml-15"},St={key:1},At={class:"flex p-5 ml-48"},Tt={key:0,class:"relative animate-spin spinner h-20 w-20 mr-10 pt-2"},Vt={class:"flex-1 text-gray-500"},zt={key:1,class:"legend-group border-l-2 ml-4 pl-4"};function Et(e,t,r,d,u,h){const w=S("symbology-stack"),a=S("options"),B=S("checkbox"),F=S("legend-item-v"),$=T("tippy"),M=T("truncate"),O=T("focus-item");return e.legendItem.hidden?n("v-if",!0):(l(),o("div",{key:e.legendItem.visibility},[s("div",Se,[c((l(),o("div",{class:m(["flex items-center hover:bg-gray-200",[e.legendItem.type===e.LegendType.Item?"loaded-item default-focus-style":e.legendItem.type===e.LegendType.Error?"non-loaded-item bg-red-200":"non-loaded-item",e.legendItem instanceof e.LayerItem?"p-5":"px-5 py-10",e.isGroup&&e.controlAvailable("expandButton")||!e.isGroup&&e.legendItem instanceof e.LayerItem&&e.controlAvailable("datatable")&&e.getDatagridExists()&&e.legendItem.type===e.LegendType.Item?"cursor-pointer":"cursor-default"]]),onMouseover:t[9]||(t[9]=g(i=>e.hover(i.currentTarget),["stop"])),onMouseout:t[10]||(t[10]=g(i=>(e.mobileMode||i.currentTarget?._tippy?.hide(),e.hovered=!1),["self"])),onClick:t[11]||(t[11]=()=>{!e.isGroup&&e.legendItem instanceof e.LayerItem&&e.controlAvailable("datatable")&&e.getDatagridExists()&&e.legendItem.type===e.LegendType.Item?e.toggleGrid():e.isGroup&&e.toggleExpand()}),content:e.isGroup&&e.controlAvailable("expandButton")?e.$t(e.legendItem.expanded?"legend.group.collapse":"legend.group.expand"):e.legendItem instanceof e.LayerItem&&e.legendItem.type===e.LegendType.Item&&e.controlAvailable("datatable")&&e.getDatagridExists()?e.$t("legend.layer.data"):"","truncate-trigger":""},[n(" smiley face. very important that we migrate this "),e.legendItem.type!==e.LegendType.Item?(l(),o("div",Te,[e.legendItem.type===e.LegendType.Placeholder?(l(),o("svg",Ve,Ee)):(l(),o(b,{key:1},[n(" sad face for layer error "),Be],2112))])):n("v-if",!0),n(" symbology stack toggle"),e.legendItem.type===e.LegendType.Item&&e.legendItem instanceof e.LayerItem&&e.legendItem.layer.legend.length>0?(l(),o("div",{key:1,class:"relative w-32 h-32 mr-15",onMouseover:t[1]||(t[1]=g(()=>{},["stop"]))},[c((l(),o("button",{type:"button",onClick:t[0]||(t[0]=g((...i)=>e.toggleSymbology&&e.toggleSymbology(...i),["stop"])),class:m([e.controlAvailable("symbology")?"cursor-pointer":"cursor-default"]),disabled:!e.controlAvailable("symbology"),content:e.legendItem instanceof e.LayerItem&&e.legendItem.symbologyExpanded?e.$t("legend.symbology.hide"):e.$t("legend.symbology.expand")},[e.legendItem.coverIcon?(l(),o("img",{key:1,class:m([{"pointer-events-none":!e.controlAvailable("symbology")},"w-32 h-32 hover:scale-105"]),src:e.legendItem.coverIcon,alt:"Cover icon not found :("},null,10,Ge)):(l(),C(w,{key:0,class:m([{"pointer-events-none":!e.controlAvailable("symbology")},"w-32 h-32"]),visible:e.legendItem instanceof e.LayerItem&&e.legendItem.symbologyExpanded,legendItem:e.legendItem},null,8,["class","visible","legendItem"]))],10,He)),[[$,{placement:"top-start"}]])],32)):n("v-if",!0),n(" dropdown icon "),e.isGroup&&e.controlAvailable("expandButton")?(l(),o("div",{key:2,class:m(["expand-toggle mr-5 pointer-events-none",{"rotate-180":e.legendItem.expanded}])},Oe,2)):n("v-if",!0),n(" offscale icon "),e.legendItem instanceof e.LayerItem&&e.legendItem.layerOffscale?c((l(),o("div",{key:3,class:"relative mr-10",content:e.$t("legend.layer.offscale"),onMouseover:t[2]||(t[2]=g(()=>{},["stop"]))},Ue,40,Re)),[[$,{placement:"top-start"}]]):n("v-if",!0),n(" name or info section"),e.isSection?(l(),o("div",Fe,[e.legendItem.infoType===e.InfoType.Title?(l(),o("h3",qe,y(e.legendItem.content),1)):e.legendItem.infoType===e.InfoType.Text?(l(),o("p",Ne,y(e.legendItem.content),1)):e.legendItem.infoType===e.InfoType.Image?(l(),o("img",{key:2,src:e.legendItem.content,alt:"InfoType image not found :("},null,8,We)):e.legendItem.infoType===e.InfoType.Markdown?(l(),o("div",{key:3,class:"ramp-markdown",innerHTML:e.markdownToHtml(e.legendItem.content)},null,8,je)):(l(),C(K(`${e.legendItem.uid}-info-section`),{key:4}))])):c((l(),o("div",Pe,[s("span",null,y(e.legendItem.name??(!e.legendItem.layer||e.legendItem?.layer?.name===""?e.legendItem.layerId:e.legendItem.layer?.name)),1)])),[[M,{externalTrigger:!0}]]),n(" reload for error'd items "),e.legendItem.type===e.LegendType.Error?(l(),o("div",Ke,[c((l(),o("button",{type:"button",class:"text-gray-500 hover:text-black",content:e.$t("legend.layer.controls.reload"),onMouseover:t[3]||(t[3]=g(()=>{},["stop"])),onClick:t[4]||(t[4]=g((...i)=>e.reloadIfReady&&e.reloadIfReady(...i),["stop"]))},Ye,40,Qe)),[[$,{placement:"top-start"}]])])):n("v-if",!0),n(" cancel for loading and error'd items "),e.legendItem.type!==e.LegendType.Item&&e.legendItem instanceof e.LayerItem?(l(),o("div",Je,[c((l(),o("button",{type:"button",class:"text-gray-500 hover:text-black",content:e.legendItem.type===e.LegendType.Error?e.$t("legend.layer.controls.remove"):e.$t("legend.layer.controls.cancel"),onMouseover:t[5]||(t[5]=g(()=>{},["stop"])),onClick:t[6]||(t[6]=g((...i)=>e.cancelLayer&&e.cancelLayer(...i),["stop"]))},[s("div",xe,[e.legendItem.type===e.LegendType.Placeholder?(l(),o("svg",et,lt)):(l(),o("svg",ot,nt))])],40,_e)),[[$,{placement:"top-start"}]])])):n("v-if",!0),n(" options dropdown menu "),e.legendItem.type===e.LegendType.Item&&e.legendItem instanceof e.LayerItem?(l(),C(a,{key:8,legendItem:e.legendItem},null,8,["legendItem"])):n("v-if",!0),n(" zoom button for offscale layers "),e.legendItem instanceof e.LayerItem&&e.legendItem.layerOffscale?(l(),o("div",it,[c((l(),o("button",{type:"button",class:"p-4",content:e.$t("legend.layer.zoomToVisible"),onMouseover:t[7]||(t[7]=g(()=>{},["stop"])),onClick:t[8]||(t[8]=g(i=>e.legendItem.layer.zoomToVisibleScale(),["stop"]))},dt,40,at)),[[$,{placement:"top-start"}]])])):e.legendItem.type===e.LegendType.Item&&e.controlAvailable("visibilityButton")?(l(),o(b,{key:10},[n(" visibility "),U(B,{checked:e.legendItem.visibility,value:e.legendItem,isRadio:e.legendItem.parent&&e.legendItem.parent.exclusive,legendItem:e.legendItem,disabled:e.legendItem instanceof e.LayerItem&&!e.legendItem.layerControlAvailable("visibility"),label:e.isGroup?"Group":"Layer"},null,8,["checked","value","isRadio","legendItem","disabled","label"])],2112)):n("v-if",!0)],42,Ae)),[[O,"show-truncate"],[$,{placement:"top-start",trigger:"manual focus",aria:"describedby"}]]),e.legendItem.type===e.LegendType.Placeholder||e.legendItem.layerRedrawing&&e.legendItem.visibility?(l(),o("div",gt,yt)):n("v-if",!0)]),n(" Symbology Stack Section "),e.legendItem instanceof e.LayerItem&&e.legendItem.symbologyExpanded?c((l(),o("div",ct,[e.symbologyStack.length>0?(l(),o("div",ht,[n(" display each symbol "),e.legendItem instanceof e.LayerItem&&e.legendItem.description?(l(),o("p",pt,y(e.legendItem.description),1)):n("v-if",!0),(l(!0),o(b,null,H(e.symbologyStack,i=>(l(),o("div",{class:"m-5",key:i.uid},[n(" for WMS layers and image render styles "),i.imgUrl&&e.legendItem.symbologyRenderStyle==="images"||!i.imgUrl&&e.layerType==="ogc-wms"?(l(),o("div",vt,[i.imgUrl?(l(),o("div",ut,[s("img",{class:"max-w-full",src:i.imgUrl},null,8,ft)])):i.imgHeight?(l(),o("div",{key:1,class:"symbologyIcon w-full p-5",innerHTML:e.getLegendGraphic(i)},null,8,bt)):n("v-if",!0),i.label?c((l(),o("div",It,[s("span",null,y(i.label),1),!i.imgUrl&&e.symbologyStack.length>1||i.imgUrl&&i.definitionClause?(l(),C(B,{key:0,class:"float-right",value:i,legendItem:e.legendItem,checked:i.visibility,disabled:!e.controlAvailable("visibility"),label:"Symbol"},null,8,["value","legendItem","checked","disabled"])):n("v-if",!0)])),[[M]]):n("v-if",!0)])):(l(),o(b,{key:1},[n(" for non-WMS layers "),s("div",Lt,[i.imgUrl?(l(),o("div",kt,[s("img",{class:"w-32 h-32",src:i.imgUrl},null,8,wt)])):i.svgcode?(l(),o("div",$t,[s("span",{innerHTML:i.svgcode},null,8,Ct)])):n("v-if",!0),c((l(),o("div",Mt,[f(y(i.label),1)])),[[M]]),!i.imgUrl&&e.symbologyStack.length>1||i.imgUrl&&i.definitionClause?(l(),C(B,{key:2,value:i,legendItem:e.legendItem,checked:i.visibility,disabled:!e.controlAvailable("visibility"),label:"Symbol"},null,8,["value","legendItem","checked","disabled"])):n("v-if",!0)])],2112))]))),128))])):(l(),o("div",St,[n(" display loading text "),c((l(),o("div",At,[e.isAnimationEnabled?(l(),o("div",Tt)):n("v-if",!0),c((l(),o("div",Vt,[s("span",null,y(e.$t("legend.symbology.loading")),1)])),[[M]])])),[[M]])]))])),[[O]]):n("v-if",!0),n(" Display children of the group "),e.legendItem.expanded?(l(),o("div",zt,[(l(!0),o(b,null,H(e.legendItem.children,i=>(l(),C(F,{legendItem:i,key:i.uid},null,8,["legendItem"]))),128))])):n("v-if",!0)]))}var Ot=E(Me,[["render",Et],["__scopeId","data-v-2a3a4c23"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/item.vue"]]);export{Ot as default};