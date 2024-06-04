import{gK as b,gL as w,gM as T,g$ as c,gQ as t,gX as o,h0 as l,gU as p,gP as r,gT as s,gV as x,h6 as y,hm as v,hn as C,h1 as I,ho as S,h3 as z,h4 as B,gW as M,hk as O,gN as V,gY as $,gZ as j,gO as A,gR as N,gS as _,hp as D,hc as K,hd as E,hf as L}from"./main-95e6e76d.js";const q=e=>(z("data-v-22607f60"),e=e(),B(),e),F={class:"mt-10"},H=["aria-label"],P=["alt","src"],Q=["alt"],R={class:"absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"},U={class:"pl-5"},W={class:"ml-auto pr-5"},X=["content"],Y=q(()=>s("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)),Z=[Y],G=b({__name:"item",props:{area:{type:Object,required:!0},showThumbnail:{type:Boolean}},setup(e){const{t:h}=w(),u=T("iApi"),i=n=>{if(!n.extent){console.error("selected area of interest doesn't have an extent specified.");return}u?.geo.map.zoomMapTo(S.fromConfig("area-of-interest-extent",n.extent))};return(n,a)=>{const f=c("truncate"),d=c("tippy"),m=c("focus-item");return t(),o("div",F,[l((t(),o("button",{type:"button",class:p(["area-of-interest-item-button bg-gray-300 w-full",{"border border-gray-300":e.showThumbnail}]),"aria-label":r(h)("areas-of-interest.select"),onClick:a[2]||(a[2]=g=>i(e.area))},[s("div",null,[s("div",{class:p(["flex hover:opacity-50 area-of-interest-item-image",e.showThumbnail?"h-180":"h-30"])},[e.area.thumbnail?(t(),o("img",{key:0,class:"w-full bg-white object-contain",alt:e.area.altText||e.area.title,src:e.area.thumbnail},null,8,P)):e.showThumbnail?(t(),o("img",{key:1,class:"w-full bg-white object-contain py-30",alt:e.area.altText||e.area.title,src:"https://openclipart.org/image/800px/160615"},null,8,Q)):x("",!0)],2)]),s("div",R,[l((t(),o("div",U,[s("span",null,y(e.area.title),1)])),[[f]]),l(s("div",W,[l((t(),o("a",{onClick:a[0]||(a[0]=v(()=>{},["stop"])),onKeydown:a[1]||(a[1]=C(v(()=>{},["prevent"]),["enter","space"])),content:e.area.description},Z,40,X)),[[d,{placement:"bottom",trigger:"click focus"}]])],512),[[I,e.area.description]])])],10,H)),[[m]])])}}});const J=M(G,[["__scopeId","data-v-22607f60"]]),ee={class:"h-600 overflow-y-auto"},te={class:"mx-5"},se={key:0},oe=b({__name:"screen",props:{panel:{type:Object}},setup(e){const{t:h}=w(),u=O(),i=V(()=>u.areas);let n=$(!1);return j(()=>{n.value=!!i.value?.some(a=>a.thumbnail)}),(a,f)=>{const d=A("panel-screen"),m=c("focus-list");return t(),N(d,{panel:e.panel},{header:_(()=>[D(y(r(h)("areas-of-interest.title")),1)]),content:_(()=>[s("div",ee,[s("div",te,[r(i).length>0?l((t(),o("ul",se,[(t(!0),o(K,null,E(r(i),(g,k)=>(t(),o("li",{key:k},[L(J,{area:g,"show-thumbnail":r(n),class:"block relative overflow-hidden"},null,8,["area","show-thumbnail"])]))),128))])),[[m]]):x("",!0)])])]),_:1},8,["panel"])}}});export{oe as _};
