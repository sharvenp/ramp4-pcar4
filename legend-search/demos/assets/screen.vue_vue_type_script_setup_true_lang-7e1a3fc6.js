import{gK as y,gL as $,gY as g,g$ as M,gQ as l,gX as m,gT as o,h0 as x,gP as k,h6 as C,gU as b,hf as H,gS as v,h1 as I,hW as L,h3 as O,h4 as T,gW as V,gM as j,hV as E,gN as N,h9 as z,hv as D,g_ as R,gO as q,gR as w,hp as A,hd as U,hc as W,hX as X}from"./main-95e6e76d.js";import{m as S}from"./marked.esm-75dc6516.js";const F=e=>(O("data-v-80d95056"),e=e(),T(),e),K=["content"],P={class:"text-lg text-left flex-grow"},Q=F(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)),Y=[Q],G=["innerHTML"],J=y({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(e){const{t:d}=$(),n=g(!1),h=()=>{n.value=!n.value};return(c,s)=>{const i=M("tippy");return l(),m("div",null,[o("div",null,[x((l(),m("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:s[0]||(s[0]=a=>h()),content:k(d)(n.value?"help.section.collapse":"help.section.expand")},[o("span",P,C(e.helpSection.header),1),o("div",{class:b(["dropdown-icon",{"transform -rotate-180":n.value}])},Y,2)],8,K)),[[i,{placement:"top-end",hideOnClick:!1}]]),H(L,{name:"help-item",mode:"out-in"},{default:v(()=>[x(o("div",{innerHTML:e.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,G),[[I,n.value]])]),_:1})])])}}});const Z=V(J,[["__scopeId","data-v-80d95056"]]),ne=y({__name:"screen",props:{panel:{type:Object,required:!0}},setup(e){const d=j("iApi"),n=E(),{t:h}=$(),c=N(()=>n.location),s=g([]),i=g([]);return z(()=>{i.value.push(D(()=>d.language,(a,f)=>{if(a===f)return;const r=new S.Renderer,p=c.value.slice(-1)==="/"?c.value:`${c.value}/`;r.image=(t,u)=>(t.indexOf("http")===-1&&(t=`${p}images/`+t),`<img src="${t}" alt="${u}">`),X.get(`${p}${a}.md`).then(t=>{const u=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;let B=t.data.replace(new RegExp(String.fromCharCode(13),"g"),"");s.value=[];let _;for(;_=u.exec(B);)s.value.push({header:_[1],info:S(_[0].split(`
`).splice(2).join(`
`),{renderer:r})})})},{immediate:!0}))}),R(()=>{i.value.forEach(a=>a())}),(a,f)=>{const r=q("panel-screen");return l(),w(r,{panel:e.panel},{header:v(()=>[A(C(k(h)("help.title")),1)]),content:v(()=>[(l(!0),m(W,null,U(s.value,(p,t)=>(l(),w(Z,{helpSection:p,key:t},null,8,["helpSection"]))),128))]),_:1},8,["panel"])}}});export{ne as _};
