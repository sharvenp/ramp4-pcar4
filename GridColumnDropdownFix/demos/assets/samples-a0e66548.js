import{_ as t}from"./preload-helper-388ac9d5.js";const a=(e,i)=>{const r=e[i];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((l,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+i)))})};var s="sample",_=new URL(window.location.href);document.getElementById("selectConfig").addEventListener("change",p);u();async function o(e){await a(Object.assign({"./starter-scripts/alternate.js":()=>t(()=>import("./alternate-3e40b1f3.js"),[],import.meta.url),"./starter-scripts/basemap-only.js":()=>t(()=>import("./basemap-only-fd974ac6.js"),["./basemap-only-fd974ac6.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/basemaps.js":()=>t(()=>import("./basemaps-aa7907bc.js"),["./basemaps-aa7907bc.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/cam.js":()=>t(()=>import("./cam-0ce08710.js"),["./cam-0ce08710.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/cccs.js":()=>t(()=>import("./cccs-fe8f0a22.js"),["./cccs-fe8f0a22.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/cesi.js":()=>t(()=>import("./cesi-971865ac.js"),["./cesi-971865ac.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-appbar-button.js":()=>t(()=>import("./custom-appbar-button-9c65e5b3.js"),["./custom-appbar-button-9c65e5b3.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-arrow.js":()=>t(()=>import("./custom-arrow-24a37851.js"),["./custom-arrow-24a37851.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-overviewmap.js":()=>t(()=>import("./custom-overviewmap-fed8cf62.js"),["./custom-overviewmap-fed8cf62.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-renderer.js":()=>t(()=>import("./custom-renderer-df565c0b.js"),["./custom-renderer-df565c0b.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-store.js":()=>t(()=>import("./custom-store-b834d10f.js"),["./custom-store-b834d10f.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css","./custom-store-a90dcc2b.css"],import.meta.url),"./starter-scripts/custom-symbology.js":()=>t(()=>import("./custom-symbology-602fc294.js"),["./custom-symbology-602fc294.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/delayed-start.js":()=>t(()=>import("./delayed-start-6d0e7fbc.js"),["./delayed-start-6d0e7fbc.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/disabled-options.js":()=>t(()=>import("./disabled-options-ea3a85c7.js"),["./disabled-options-ea3a85c7.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/error-layers.js":()=>t(()=>import("./error-layers-e1eaee5f.js"),["./error-layers-e1eaee5f.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/exclusive-fields.js":()=>t(()=>import("./exclusive-fields-a1d3b4c7.js"),["./exclusive-fields-a1d3b4c7.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/fog-hilight.js":()=>t(()=>import("./fog-hilight-253222a5.js"),["./fog-hilight-253222a5.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/form.js":()=>t(()=>import("./form-a50f5528.js"),["./form-a50f5528.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/geosearch-filtered.js":()=>t(()=>import("./geosearch-filtered-d670249d.js"),["./geosearch-filtered-d670249d.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/geosearch.js":()=>t(()=>import("./geosearch-e22809aa.js"),["./geosearch-e22809aa.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/grid-config.js":()=>t(()=>import("./grid-config-43832fe6.js"),["./grid-config-43832fe6.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/grid.js":()=>t(()=>import("./grid-eb24ce7e.js"),["./grid-eb24ce7e.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/help.js":()=>t(()=>import("./help-50589e2a.js"),["./help-50589e2a.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/info-section.js":()=>t(()=>import("./info-section-e471f2a5.js"),["./info-section-e471f2a5.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/lambert.js":()=>t(()=>import("./lambert-784a0088.js"),["./lambert-784a0088.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/layer-metadata.js":()=>t(()=>import("./layer-metadata-ea117d7f.js"),["./layer-metadata-ea117d7f.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/legend.js":()=>t(()=>import("./legend-edfaef3b.js"),["./legend-edfaef3b.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/main.js":()=>t(()=>import("./main-a963efac.js"),["./main-a963efac.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/map-image-layer.js":()=>t(()=>import("./map-image-layer-b19b6acb.js"),["./map-image-layer-b19b6acb.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/mapnav.js":()=>t(()=>import("./mapnav-d8df6462.js"),["./mapnav-d8df6462.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/multi-ramp.js":()=>t(()=>import("./multi-ramp-f84d9843.js"),["./multi-ramp-f84d9843.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/offscale-layer.js":()=>t(()=>import("./offscale-layer-38a969c5.js"),["./offscale-layer-38a969c5.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/panel-party.js":()=>t(()=>import("./panel-party-71ec6b85.js"),["./panel-party-71ec6b85.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/perm-filter.js":()=>t(()=>import("./perm-filter-620eadda.js"),["./perm-filter-620eadda.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/r2-config-upgraded.js":()=>t(()=>import("./r2-config-upgraded-fe37b51d.js"),["./r2-config-upgraded-fe37b51d.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/ramp-basic.js":()=>t(()=>import("./ramp-basic-f6c39a8d.js"),["./ramp-basic-f6c39a8d.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/section-item.js":()=>t(()=>import("./section-item-3261af0f.js"),["./section-item-3261af0f.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/simple-feature.js":()=>t(()=>import("./simple-feature-f372db2f.js"),["./simple-feature-f372db2f.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/simple-file.js":()=>t(()=>import("./simple-file-5f366c60.js"),["./simple-file-5f366c60.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/simple-mil.js":()=>t(()=>import("./simple-mil-1c63498f.js"),["./simple-mil-1c63498f.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/tree-grow.js":()=>t(()=>import("./tree-grow-a4c0fcd2.js"),["./tree-grow-a4c0fcd2.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/wet.js":()=>t(()=>import("./wet-9fe0db76.js"),["./wet-9fe0db76.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/wms-layer.js":()=>t(()=>import("./wms-layer-0d2246f5.js"),["./wms-layer-0d2246f5.js","./main-603bdb2f.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url)}),`./starter-scripts/${e}.js`)}function p(e){_.searchParams.set(s,document.getElementById("selectConfig").selectedIndex+1),window.location.href=_}function u(){var e=new URLSearchParams(_.search),i=e.get(s)-1,r=document.getElementById("selectConfig");e.has(s)&&i>=1&&r.item(i)?(r.options[i].selected="selected",o(r.options[i].value)):o(r.options[0].value)}
