import{hF as b,hi as $,hG as T,hl as H,h8 as L}from"./main-7ed7b27d.js";import{f as E}from"./fabric-cbcd44d9.js";import{_ as y}from"./screen.vue_vue_type_script_setup_true_lang-bf23e160.js";import"./preload-helper-388ac9d5.js";var S={},M={get exports(){return S},set exports(w){S=w}};(function(w,i){(function(a,l){l()})(b,function(){function a(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function l(t,e,r){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){m(o.response,e,r)},o.onerror=function(){console.error("could not download file")},o.send()}function u(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function d(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof b=="object"&&b.global===b?b:void 0,F=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!F?function(t,e,r){var o=s.URL||s.webkitURL,n=document.createElement("a");e=e||t.name||"download",n.download=e,n.rel="noopener",typeof t=="string"?(n.href=t,n.origin===location.origin?d(n):u(n.href)?l(t,e,r):d(n,n.target="_blank")):(n.href=o.createObjectURL(t),setTimeout(function(){o.revokeObjectURL(n.href)},4e4),setTimeout(function(){d(n)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,r){if(e=e||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(a(t,r),e);else if(u(t))l(t,e,r);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout(function(){d(o)})}}:function(t,e,r,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof t=="string")return l(t,e,r);var n=t.type==="application/octet-stream",x=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||n&&x||F)&&typeof FileReader<"u"){var h=new FileReader;h.onloadend=function(){var f=h.result;f=c?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=f:location=f,o=null},h.readAsDataURL(t)}else{var g=s.URL||s.webkitURL,v=g.createObjectURL(t);o?o.location=v:location.href=v,o=null,setTimeout(function(){g.revokeObjectURL(v)},4e4)}});s.saveAs=m.saveAs=m,w.exports=m})})(M);E.fabric.Object.prototype.objectCaching=!1;const A=1200,p={TOP:40,RIGHT:40,BOTTOM:40,LEFT:40};class O extends ${fcFabric;fcFabricDownload;options={runningHeight:0,scale:1};get config(){return super.config}_parseConfig(i){if(!i)return;const a=T(this.$vApp.$pinia);a.componentSelectedState={title:i.title?.selected??!0,map:i.map?.selected??!0,mapElements:i.mapElements?.selected??!0,legend:i.legend?.selected??!0,footnote:i.footnote?.selected??!0,timestamp:i.timestamp?.selected??!0},a.fileName=i.fileName||"",this.handlePanelWidths(["export"])}getSubFixture(i){return this.$iApi.fixture.get(i)}async make(i,a){const l=T(this.$vApp.$pinia);this.fcFabric=new E.fabric.StaticCanvas(i,{backgroundColor:"#fff"}),this.fcFabricDownload=new E.fabric.StaticCanvas(null,{backgroundColor:"#fff"}),this.options.runningHeight=0;const u=l.componentSelectedState,d=this.getSubFixture("export-title"),s=this.getSubFixture("export-map"),F=this.getSubFixture("export-scalebar"),m=this.getSubFixture("export-northarrow"),t=this.getSubFixture("export-legend");let e,r,o,n,x;const c=[];u.title&&(e=await d.make({top:this.options.runningHeight,left:0,originX:"left",width:a,textAlign:"center"}),this.options.runningHeight+=e.height+40,c.push(e)),u.map&&(r=await s.make({top:this.options.runningHeight}),e&&(e.left=r.width/2,e.originX="center"),this.options.runningHeight+=r.height+40,c.push(r)),!r&&e&&(e.width=A),this.options.scale=a/((r?.width??A)+p.LEFT+p.RIGHT),u.mapElements&&(o=await F.make({top:this.options.runningHeight,left:0}),this.options.runningHeight+=o.height+40,c.push(o),n=await m.make({top:o.top,left:a/this.options.scale}),n.top+=n.height/2-20,n.left+=-n.width*2,c.push(n)),u.legend&&(x=await t.make({width:t.config?.columnWidth??r?.width??A}),x.top=this.options.runningHeight,this.options.runningHeight+=x.height,c.push(x));const h=new E.fabric.Group(c,{top:p.TOP*this.options.scale,left:p.LEFT*this.options.scale}),g=await new Promise(v=>{h.clone(f=>{v(f)})});g.top=p.TOP,g.left=p.LEFT,this.fcFabricDownload.add(g),h.scale(this.options.scale),this.fcFabric.add(h),this.fcFabric.setDimensions({width:a,height:(this.options.runningHeight+p.TOP+p.BOTTOM)*this.options.scale}),this.fcFabric.renderAll(),this.fcFabricDownload.setDimensions({width:(r?.width??A)+p.LEFT+p.RIGHT,height:this.options.runningHeight+p.TOP+p.BOTTOM}),this.fcFabricDownload.renderAll()}export(){if(!this.fcFabric)return;const i=new Date,a=this.config?.fileName||`map-carte - ${i.getFullYear()}-${i.getMonth()}-${i.getDay()}, ${i.getHours()}_${i.getMinutes()}`;S.saveAs(this.fcFabricDownload.toDataURL({format:"png",quality:1}),`${a}.png`)}}const R={en:{"export.title":"Export","export.alertName":"Export","export.download":"Download image","export.refresh":"Refresh","export.scaleBar.approx":"{0} approx.","export.menu":"Settings Menu","export.menu.component.title":"Title","export.menu.component.map":"Map","export.menu.component.mapElements":"North arrow and scalebar","export.menu.component.legend":"Legend","export.menu.component.footnote":"Footnote","export.menu.component.timestamp":"Timestamp"},fr:{"export.title":"Exporter","export.alertName":"Exporter","export.download":"Télécharger l'image","export.refresh":"Rafraîchir","export.scaleBar.approx":"Environ {0}","export.menu":"Menu des paramètres","export.menu.component.title":"Titre","export.menu.component.map":"Carte","export.menu.component.mapElements":"Flèche du nord et échelle graphique","export.menu.component.legend":"Légende","export.menu.component.footnote":"Référence","export.menu.component.timestamp":"Horodatage"}};class _ extends O{initialized(){this.$iApi.fixture.add("export-title"),this.$iApi.fixture.add("export-map"),this.$iApi.fixture.add("export-legend"),this.$iApi.fixture.add("export-northarrow"),this.$iApi.fixture.add("export-scalebar")}added(){this.$iApi.panel.register({id:"export",config:{screens:{"export-screen":H(y)},style:{"flex-grow":"1","max-width":"800px"},button:{tooltip:"export.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'},alertName:"export.alertName"}},{i18n:{messages:R}}),this._parseConfig(this.config);const i=this.$vApp.$watch(()=>this.config,a=>this._parseConfig(a));this.removed=()=>{i(),this.$iApi.fixture.get("export-title")?.remove(),this.$iApi.fixture.get("export-map")?.remove(),this.$iApi.fixture.get("export-legend")?.remove(),this.$iApi.fixture.get("export-northarrow")?.remove(),this.$iApi.fixture.get("export-scalebar")?.remove(),this.$iApi.fixture.get("appbar")&&L(this.$vApp.$pinia).removeButton("export"),T(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("export")}}}export{_ as default};