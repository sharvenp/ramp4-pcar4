import{bZ as L,h_ as w,c3 as b,c5 as E,fp as r,c6 as $,gL as N,fr as z,gM as C,fq as T,fs as W,b$ as B,h$ as G,hY as H,i0 as R,i1 as Y,c9 as q,ch as O,fo as j,i2 as X}from"./main-83b7c6ef.js";import"./preload-helper-388ac9d5.js";class V extends L{_parseConfig(t){const e=w(this.$vApp.$pinia);t&&(e.arrowIcon=t.arrowIcon,e.poleIcon,t.poleIcon)}get config(){return super.config}}const F="path",D=12,K="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",U="#ff0000ff",Z=5,J=6,Q={style:F,size:D,path:K,colour:U,xOffset:Z,yOffset:J},ee=["innerHTML"],te=b({__name:"northarrow",setup(g){const t=w(),e=E("iApi"),i=r(),d=$(()=>t.arrowIcon),s=$(()=>t.poleIcon),l=r(0),n=r(0),c=r(!1),m=r(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`),y=r(!1),M=N([]);z(()=>{d?.value&&(m.value=`<img width='25' src='${d.value}'>`),e.geo.map.esriView?.ready&&S(e.geo.map.getExtent()),M.push(e.event.on(C.MAP_EXTENTCHANGE,T(300,S)))}),W(()=>{M.forEach(h=>e.event.off(h))});const S=async h=>{const o=document.querySelector(".inner-shell"),p=i.value.querySelector(".northarrow").getBoundingClientRect().width,f=document.querySelector(".appbar")?.clientWidth||0,_=h.sr;if(_.isWebMercator())c.value=!0,l.value=0,n.value=f+(o.clientWidth-f-p)/2;else{const x=new B("pole",{x:-96,y:90}),k=await e.geo.proj.projectGeometry(_,x),u=e.geo.map.mapPointToScreenPoint(k);if(u.screenY<0){c.value=!0;const a={screenX:o.clientWidth/2,screenY:o.clientHeight};l.value=Math.atan((u.screenX-a.screenX)/(a.screenY-u.screenY))*180/Math.PI,n.value=o.clientWidth/2+o.clientHeight*Math.tan(l.value*Math.PI/180)-p/2,n.value=Math.max(f-p/2,Math.min(e.geo.map.getPixelWidth()-p/2,n.value))}else if(c.value=!1,!y.value){y.value=!0;let a;s.value?a={style:G.ICON,icon:s.value,height:16.5,width:16.5}:a=Q;const A=e.geo.layer.createLayer({id:v,layerType:H.GRAPHIC,url:"",cosmetic:!0});e.geo.map.addLayer(A);const P=new R(k,"northpole"),I=new Y(a);P.style=I,A.addGraphic(P)}}};return(h,o)=>(q(),O("div",{class:"absolute transition-all duration-300 ease-out",style:X({"transform-origin":"top center",transform:`rotate(${l.value}deg)`,left:`${n.value}px`,visibility:c.value?"visible":"hidden"}),ref_key:"el",ref:i},[j("span",{class:"northarrow",innerHTML:m.value},null,8,ee)],4))}}),v="RampPoleMarker";class re extends V{async added(){this._parseConfig(this.config);const t=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s)),{destroy:e,el:i}=this.mount(te,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(i.childNodes[0]),this.removed=()=>{t(),this.$iApi.geo.layer.getLayer(v)&&this.$iApi.geo.map.removeLayer(v),w(this.$vApp.$pinia).$reset(),e()}}}export{v as POLE_MARKER_LAYER_ID,re as default};