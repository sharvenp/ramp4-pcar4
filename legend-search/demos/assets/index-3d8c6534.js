import{f as o}from"./fabric-5fe144fc.js";import{hi as n}from"./main-95e6e76d.js";import"./preload-helper-388ac9d5.js";class g extends n{get config(){return this.$iApi.fixture.get("export").config?.map}async make(e){const i=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),t=new Image;t.src=i.dataUrl;const a=await new Promise(r=>t.onload=()=>r(t));return new o.fabric.Image(a,e)}}export{g as default};