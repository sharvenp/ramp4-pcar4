import{f as o}from"./fabric-d76f7b5c.js";import{bZ as n}from"./main-83b7c6ef.js";import"./preload-helper-388ac9d5.js";class g extends n{get config(){return this.$iApi.fixture.get("export").config?.map}async make(e){const a=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),t=new Image;t.src=a.dataUrl;const i=await new Promise(r=>t.onload=()=>r(t));return new o.fabric.Image(i,e)}}export{g as default};
