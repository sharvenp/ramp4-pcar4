import{gK as E,gL as C,hJ as M,h7 as H,gN as L,hH as q,gQ as s,gX as o,gT as r,gP as t,hn as P,hm as z,gM as N,gY as R,h9 as I,hv as D,g_ as G,g$ as S,h0 as y,hp as T,h6 as f,hc as A,hd as B,gZ as Z,hj as F,gW as O,h2 as X,gO as J,gR as j,gS as K,hf as V,gV as k,hK as Q,hL as U}from"./main-bbf05f59.js";const W={class:"rv-geosearch-bar h-26 mb-8 mx-8"},Y=["placeholder","value","aria-label"],ee=E({__name:"search-bar",setup($){const{t:d}=C(),u=M(),c=H(),h=L(()=>u.searchVal),g=a=>u.setSearchTerm(a),b=q(500,a=>{g(a)});return(a,p)=>(s(),o("div",W,[r("input",{type:"search",class:"border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:t(d)("geosearch.searchText"),value:t(h),onInput:p[0]||(p[0]=n=>t(b)(n.target.value)),onKeyup:p[1]||(p[1]=P(n=>{t(c).mobileView&&n.target.blur()},["enter"])),"aria-label":t(d)("geosearch.searchText"),onKeypress:p[2]||(p[2]=P(z(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,Y)]))}}),te={class:"rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14"},se={class:"w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0"},oe=["value"],ne={value:"",disabled:"",hidden:""},ae={class:"sm:w-1/2 h-26 sm:mx-16 flex"},re=["value"],ce={value:"",disabled:"",hidden:""},le=["disabled","content"],ie=r("div",{class:"rv-geosearch-icon"},[r("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[r("path",{d:"M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "})])],-1),de=[ie],ue=E({__name:"top-filters",setup($){const{t:d}=C(),u=N("iApi"),c=M(),h=R([]),g=R([]),b=R([]),a=L(()=>c.queryParams),p=L(()=>u.language),n=_=>c.setProvince(_),e=_=>c.setType(_),m=()=>{n({}),e({})},w=()=>{c.initService(u.language,u.fixture.get("geosearch").config);const _=h.value.find(l=>a.value.province===l.name)?.code,x=g.value.find(l=>a.value.type===l.name)?.code;c.getProvinces.then(l=>{h.value=l,n({province:l.find(i=>i.code===_)?.name,forceReRun:!0})}),c.getTypes.then(l=>{g.value=l,e({type:l.find(i=>i.code===x)?.name,forceReRun:!0})})};return I(()=>{w(),b.value.push(D(p,w))}),G(()=>{b.value.forEach(_=>_())}),(_,x)=>{const l=S("truncate"),i=S("tippy");return s(),o("div",te,[r("div",se,[y((s(),o("select",{class:"form-select border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",value:t(a).province,onChange:x[0]||(x[0]=v=>n({province:v.target.value}))},[y((s(),o("option",ne,[T(f(t(d)("geosearch.filters.province")),1)])),[[l]]),(s(!0),o(A,null,B(h.value,v=>y((s(),o("option",{key:v.code},[T(f(v.name),1)])),[[l]])),128))],40,oe)),[[l]])]),r("div",ae,[y((s(),o("select",{class:"form-select border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",value:t(a).type,onChange:x[1]||(x[1]=v=>e({type:v.target.value}))},[r("option",ce,f(t(d)("geosearch.filters.type")),1),(s(!0),o(A,null,B(g.value,v=>(s(),o("option",{key:v.code},f(v.name),1))),128))],40,re)),[[l]]),y((s(),o("button",{type:"button",class:"text-gray-400 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",disabled:!t(a).type&&!t(a).province,onClick:m,content:t(d)("geosearch.filters.clear")},de,8,le)),[[i,{placement:"bottom"}]])])])}}}),he={class:"rv-geosearch-bottom-filters"},pe={class:"bg-white"},_e={class:"ml-8 cursor-pointer"},ge=["checked"],be=E({__name:"bottom-filters",setup($){const{t:d}=C(),u=N("iApi"),c=M(),h=L(()=>c.resultsVisible),g=q(300,n=>{a(n).then(e=>{b({extent:e,visible:h.value})})}),b=n=>{c.setMapExtent(n)},a=async n=>n.sr.wkid===4326?n:await u.geo.proj.projectGeometry(4326,n),p=n=>{a(u.geo.map.getExtent()).then(e=>{b({extent:e,visible:n})})};return Z(()=>{u.event.on(F.MAP_EXTENTCHANGE,g,"geosearch_map_extent")}),G(()=>{u.event.off("geosearch_map_extent")}),(n,e)=>(s(),o("div",he,[r("div",pe,[r("label",_e,[r("input",{type:"checkbox",class:"form-checkbox border-2 mx-8 border-gray-600 cursor-pointer",checked:t(h),onChange:e[0]||(e[0]=m=>p(m.target.checked)),onKeypress:e[1]||(e[1]=P(z(()=>{},["prevent"]),["enter"]))},null,40,ge),T(f(t(d)("geosearch.visible")),1)])])]))}});const ve={},fe={class:"w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14"},me={class:"h-full progressbar bg-blue-800 rounded-full top-0","aria-valuemin":"0","aria-valuemax":"100"},xe={class:"flex items-center h-full"};function ye($,d){return s(),o("div",fe,[r("div",me,[r("span",xe,[X($.$slots,"default",{},void 0,!0)])])])}const Le=O(ve,[["render",ye],["__scopeId","data-v-83b0fe00"]]),we={class:"flex flex-col h-full"},$e={key:1,class:"text-red-900 text-xs px-8 mb-10"},ke={key:2,class:"px-8 mb-10 truncate"},Se={class:"relative h-48"},Te={class:"font-bold text-blue-600"},Ee={key:3,class:"rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"},Ce=["onClick"],Me={class:"rv-result-description px-8"},Re={class:"flex-1 text-left truncate font-bold"},Ve=["innerHTML"],Pe={key:0,class:"text-gray-600 text-sm"},Ae={key:0,class:"flex-1 text-left truncate text-sm"},je=E({__name:"screen",props:{panel:{type:Object}},setup($){const{t:d}=C(),u=N("iApi"),c=M(),h=L(()=>c.searchVal),g=L(()=>c.searchResults),b=L(()=>c.loadingResults),a=L(()=>c.failedServices),p=e=>{let m=new Q("zoomies",[[[e.bbox[0],e.bbox[1]],[e.bbox[0],e.bbox[3]],[e.bbox[2],e.bbox[3]],[e.bbox[2],e.bbox[1]],[e.bbox[0],e.bbox[1]]]],U.latLongSR(),!0);u.geo.map.zoomMapTo(m)},n=(e,m)=>{const w=e.replace(new RegExp(`${h.value}`,"gi"),_=>'<span class="font-bold text-blue-600">'+_+"</span>");return m?w+",":w};return(e,m)=>{const w=J("panel-screen"),_=S("truncate"),x=S("focus-item"),l=S("focus-list");return s(),j(w,{panel:$.panel},{header:K(()=>[T(f(t(d)("geosearch.title")),1)]),content:K(()=>[r("div",we,[V(ee),V(ue),t(b)?(s(),j(Le,{key:0,class:"flex-none"})):k("",!0),t(a).length>0&&!t(b)?(s(),o("div",$e,f(t(d)("geosearch.serviceError",{services:t(a).join(", ")})),1)):k("",!0),t(h)&&t(g).length===0&&!t(b)?(s(),o("div",ke,[r("span",Se,[T(f(t(d)("geosearch.noResults")),1),r("span",Te,'"'+f(t(h))+'"',1)])])):k("",!0),t(g).length>0?y((s(),o("ul",Ee,[(s(!0),o(A,null,B(t(g),(i,v)=>(s(),o("li",{class:"relative h-56",key:v},[y((s(),o("button",{type:"button",class:"absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",onClick:Be=>p(i),style:{"border-bottom":"1px solid lightgray"}},[y((s(),o("div",Me,[r("div",Re,[r("span",{innerHTML:n(i.name,i.location.province)},null,8,Ve),i.location.province?(s(),o("span",Pe,f(i.location.city?" "+i.location.city+", "+i.location.province.abbr:" "+i.location.province.abbr),1)):k("",!0)]),i.type?(s(),o("div",Ae,f(i.type),1)):k("",!0)])),[[_]])],8,Ce)),[[x,"show-truncate"]])]))),128))])),[[l]]):k("",!0),V(be,{class:"mt-auto"})])]),_:1},8,["panel"])}}});export{je as _};