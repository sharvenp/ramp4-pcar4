import{_ as t}from"./preload-helper-388ac9d5.js";const a=(e,i)=>{const r=e[i];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((l,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+i)))})};var s="sample",_=new URL(window.location.href);document.getElementById("selectConfig").addEventListener("change",p);u();async function o(e){await a(Object.assign({"./starter-scripts/alternate.js":()=>t(()=>import("./alternate-3e40b1f3.js"),[],import.meta.url),"./starter-scripts/basemap-only.js":()=>t(()=>import("./basemap-only-1ba14960.js"),["./basemap-only-1ba14960.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/basemaps.js":()=>t(()=>import("./basemaps-2aaadb0a.js"),["./basemaps-2aaadb0a.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/cam.js":()=>t(()=>import("./cam-cc47220c.js"),["./cam-cc47220c.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/cccs.js":()=>t(()=>import("./cccs-c657bf25.js"),["./cccs-c657bf25.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/cesi.js":()=>t(()=>import("./cesi-20a1ca5d.js"),["./cesi-20a1ca5d.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-appbar-button.js":()=>t(()=>import("./custom-appbar-button-50cd5068.js"),["./custom-appbar-button-50cd5068.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-arrow.js":()=>t(()=>import("./custom-arrow-668e7bbe.js"),["./custom-arrow-668e7bbe.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-overviewmap.js":()=>t(()=>import("./custom-overviewmap-e96986f6.js"),["./custom-overviewmap-e96986f6.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-renderer.js":()=>t(()=>import("./custom-renderer-8c6c384d.js"),["./custom-renderer-8c6c384d.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/custom-store.js":()=>t(()=>import("./custom-store-3df9d0fd.js"),["./custom-store-3df9d0fd.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css","./custom-store-a90dcc2b.css"],import.meta.url),"./starter-scripts/custom-symbology.js":()=>t(()=>import("./custom-symbology-2f352e53.js"),["./custom-symbology-2f352e53.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/delayed-start.js":()=>t(()=>import("./delayed-start-02a88e30.js"),["./delayed-start-02a88e30.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/disabled-options.js":()=>t(()=>import("./disabled-options-f64f93c7.js"),["./disabled-options-f64f93c7.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/error-layers.js":()=>t(()=>import("./error-layers-c49a047f.js"),["./error-layers-c49a047f.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/exclusive-fields.js":()=>t(()=>import("./exclusive-fields-d8d667b6.js"),["./exclusive-fields-d8d667b6.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/fog-hilight.js":()=>t(()=>import("./fog-hilight-44b4774c.js"),["./fog-hilight-44b4774c.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/form.js":()=>t(()=>import("./form-c2307140.js"),["./form-c2307140.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/geosearch-filtered.js":()=>t(()=>import("./geosearch-filtered-23162544.js"),["./geosearch-filtered-23162544.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/geosearch.js":()=>t(()=>import("./geosearch-4649aa64.js"),["./geosearch-4649aa64.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/grid-config.js":()=>t(()=>import("./grid-config-7743d191.js"),["./grid-config-7743d191.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/grid.js":()=>t(()=>import("./grid-b85abb21.js"),["./grid-b85abb21.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/help.js":()=>t(()=>import("./help-c529bebb.js"),["./help-c529bebb.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/info-section.js":()=>t(()=>import("./info-section-bd283bef.js"),["./info-section-bd283bef.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/lambert.js":()=>t(()=>import("./lambert-0ca29b85.js"),["./lambert-0ca29b85.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/layer-metadata.js":()=>t(()=>import("./layer-metadata-d73fab8d.js"),["./layer-metadata-d73fab8d.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/legend.js":()=>t(()=>import("./legend-c94472b7.js"),["./legend-c94472b7.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/main.js":()=>t(()=>import("./main-257d5698.js"),["./main-257d5698.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/map-image-layer.js":()=>t(()=>import("./map-image-layer-07d4475e.js"),["./map-image-layer-07d4475e.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/mapnav.js":()=>t(()=>import("./mapnav-11c6074b.js"),["./mapnav-11c6074b.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/multi-ramp.js":()=>t(()=>import("./multi-ramp-2d058fce.js"),["./multi-ramp-2d058fce.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/offscale-layer.js":()=>t(()=>import("./offscale-layer-9f569126.js"),["./offscale-layer-9f569126.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/panel-party.js":()=>t(()=>import("./panel-party-81510cfa.js"),["./panel-party-81510cfa.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/perm-filter.js":()=>t(()=>import("./perm-filter-093c8976.js"),["./perm-filter-093c8976.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/r2-config-upgraded.js":()=>t(()=>import("./r2-config-upgraded-5f850aa8.js"),["./r2-config-upgraded-5f850aa8.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/ramp-basic.js":()=>t(()=>import("./ramp-basic-55392eaf.js"),["./ramp-basic-55392eaf.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/section-item.js":()=>t(()=>import("./section-item-4adde049.js"),["./section-item-4adde049.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/simple-feature.js":()=>t(()=>import("./simple-feature-6ec8c09e.js"),["./simple-feature-6ec8c09e.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/simple-file.js":()=>t(()=>import("./simple-file-cb67b2b5.js"),["./simple-file-cb67b2b5.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/simple-mil.js":()=>t(()=>import("./simple-mil-538f884a.js"),["./simple-mil-538f884a.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/tree-grow.js":()=>t(()=>import("./tree-grow-20bcd7f8.js"),["./tree-grow-20bcd7f8.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/wet.js":()=>t(()=>import("./wet-f4a7f144.js"),["./wet-f4a7f144.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url),"./starter-scripts/wms-layer.js":()=>t(()=>import("./wms-layer-8a6d1973.js"),["./wms-layer-8a6d1973.js","./main-7ed7b27d.js","./preload-helper-388ac9d5.js","./main-5700f243.css"],import.meta.url)}),`./starter-scripts/${e}.js`)}function p(e){_.searchParams.set(s,document.getElementById("selectConfig").selectedIndex+1),window.location.href=_}function u(){var e=new URLSearchParams(_.search),i=e.get(s)-1,r=document.getElementById("selectConfig");e.has(s)&&i>=1&&r.item(i)?(r.options[i].selected="selected",o(r.options[i].value)):o(r.options[0].value)}
