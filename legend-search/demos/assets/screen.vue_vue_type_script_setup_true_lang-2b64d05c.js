import{gK as I,gL as z,gM as $,hr as M,gN as L,g$ as o,gQ as t,gX as a,h0 as r,gP as h,gT as s,gU as x,hc as u,hd as p,h6 as k,hm as S,hn as N,gV as U,h3 as j,h4 as O,gW as D,gY as T,gZ as K,gO as q,gR as A,gS as B,hp as C,hf as E}from"./main-95e6e76d.js";const V=e=>(j("data-v-2cf2ae85"),e=e(),O(),e),F={class:"mb-10"},H=["aria-label"],P={key:0,class:"w-full h-30"},Q=["alt","src"],R=["alt","src"],W=["alt"],X={class:"pl-5"},Y={class:"ml-auto pr-5"},Z=["content"],G=V(()=>s("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)),J=[G],ee={key:0,class:"rv-basemap-check absolute top-0 right-0"},te=V(()=>s("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)),ae=[te],se=I({__name:"item",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},setup(e){const{t:b}=z(),g=$("iApi"),m=M(),c=L(()=>m.activeBasemapConfig),v=l=>{l.id!==c.value.id&&g?.geo.map.setBasemap(l.id)};return(l,n)=>{const f=o("truncate"),_=o("tippy"),y=o("focus-item");return t(),a("div",F,[r((t(),a("button",{class:"basemap-item-button bg-gray-300",type:"button","aria-label":h(b)("basemap.select"),onClick:n[2]||(n[2]=i=>v(e.basemap))},[s("div",null,[s("div",{class:x(["flex hover:opacity-50 basemap-item-image basemap-item-container",e.basemap.hideThumbnail?"h-30":"h-180"])},[e.basemap.hideThumbnail?(t(),a("img",P)):e.basemap.thumbnailUrl?(t(),a("img",{key:1,class:"w-full h-180",alt:e.basemap.altText,src:e.basemap.thumbnailUrl},null,8,Q)):e.tileSchema.thumbnailTileUrls&&e.tileSchema.thumbnailTileUrls.length>0&&e.basemap.layers.every(i=>i.layerType==="esri-tile")?(t(!0),a(u,{key:2},p(e.basemap.layers,i=>(t(),a("div",{key:i.id,class:"flex basemap-item-inner h-180"},[(t(!0),a(u,null,p(e.tileSchema.thumbnailTileUrls,(w,d)=>(t(),a("img",{class:"w-full",alt:e.basemap.altText,src:i.url+w,key:d},null,8,R))),128))]))),128)):(t(),a("img",{key:3,class:"w-full bg-white h-180",alt:e.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,W))],2)]),s("div",{class:x(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center",e.basemap.hideThumbnail&&e.basemap.id===h(c).id?"opacity-85":"opacity-75"])},[r((t(),a("div",X,[s("span",null,k(e.basemap.name),1)])),[[f]]),s("div",Y,[r((t(),a("a",{onClick:n[0]||(n[0]=S(()=>{},["stop"])),onKeydown:n[1]||(n[1]=N(S(()=>{},["prevent"]),["enter","space"])),content:e.basemap.description},J,40,Z)),[[_,{placement:"bottom",trigger:"click focus"}]])])],2),e.basemap.id===h(c).id&&!e.basemap.hideThumbnail?(t(),a("div",ee,ae)):U("",!0)],8,H)),[[y]])])}}});const ie=D(se,[["__scopeId","data-v-2cf2ae85"]]),le={class:"h-600 overflow-y-auto"},ne={class:"font-bold text-xl"},ce={key:0,class:"border-t border-b border-gray-600"},re=I({__name:"screen",props:{panel:{type:Object}},setup(e){const{t:b}=z(),g=M(),m=T([]),c=T([]);K(()=>{const l=g.config.map;m.value=l.tileSchemas,c.value=l.basemaps});const v=l=>c.value.filter(n=>n.tileSchemaId===l);return(l,n)=>{const f=q("panel-screen"),_=o("truncate"),y=o("focus-list");return t(),A(f,{panel:e.panel},{header:B(()=>[C(k(h(b)("basemap.title")),1)]),content:B(()=>[s("div",le,[(t(!0),a(u,null,p(m.value,(i,w)=>(t(),a("div",{class:"mx-5",key:i.id},[s("div",{class:x((w===0?"mt-5":"mt-36")+" flex mb-5")},[r((t(),a("h3",ne,[C(k(i.name),1)])),[[_]])],2),c.value.length>0?r((t(),a("ul",ce,[(t(!0),a(u,null,p(v(i.id),d=>(t(),a("li",{key:d.id},[E(ie,{basemap:d,tileSchema:i,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])),[[y]]):U("",!0)]))),128))])]),_:1},8,["panel"])}}});export{re as _};
