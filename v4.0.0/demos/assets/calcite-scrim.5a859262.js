import{dn as b,dp as v,dq as t,dr as S}from"./main.efb50b2c.js";import"./preload-helper.387dac8f.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */function C(i){return i.map(a=>{let n="";for(let e=0;e<a;e++)n+=((1+Math.random())*65536|0).toString(16).substring(1);return n}).join("-")}const j=()=>C([2,1,1,1,3]);/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const L='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;margin-left:auto;margin-right:auto;display:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-top:4rem;padding-bottom:4rem;opacity:1;min-height:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;-webkit-transform:scale(1, 1);transform:scale(1, 1);animation:loader-color-shift 6s alternate-reverse infinite linear}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-top:0px;padding-bottom:0px}:host{display:none}:host([active]){display:-ms-flexbox;display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-top:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);width:var(--calcite-loader-size);left:50%;margin-left:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;width:var(--calcite-loader-size);height:var(--calcite-loader-size);left:50%;margin-left:calc(var(--calcite-loader-size) / 2 * -1);-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svg{position:absolute;top:0px;left:0px;-webkit-transform-origin:center;transform-origin:center;overflow:visible;width:var(--calcite-loader-size);height:var(--calcite-loader-size);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){-webkit-animation:none;animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svg--3{-webkit-animation:none;animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:all var(--calcite-internal-animation-timing-fast) linear;transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;-webkit-animation:none;animation:none;stroke:currentColor;stroke-width:2;padding-top:0px;padding-bottom:0px;height:var(--calcite-loader-size-inline);min-height:var(--calcite-loader-size-inline);width:var(--calcite-loader-size-inline);-webkit-margin-end:calc(var(--calcite-loader-size-inline) * 0.5);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0px;left:0px;margin:0px;width:var(--calcite-loader-size-inline);height:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{width:var(--calcite-loader-size-inline);height:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, -webkit-transform var(--calcite-internal-animation-timing-medium) linear 1000ms;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, -webkit-transform var(--calcite-internal-animation-timing-medium) linear 1000ms;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms, -webkit-transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, -webkit-transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, -webkit-transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, -webkit-transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color var(--calcite-internal-animation-timing-medium) linear, -webkit-transform var(--calcite-internal-animation-timing-medium) linear;transition:color var(--calcite-internal-animation-timing-medium) linear, -webkit-transform var(--calcite-internal-animation-timing-medium) linear;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear, -webkit-transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444% 139.6262222222%;-webkit-animation-duration:0.72s;animation-duration:0.72s}@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}.loader__svg--2{stroke-dasharray:55.8504888889% 139.6262222222%;-webkit-animation-duration:0.96s;animation-duration:0.96s}@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}.loader__svg--3{stroke-dasharray:13.9626222222% 139.6262222222%;-webkit-animation-duration:1.16s;animation-duration:1.16s}@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}',$=b(class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.inline=!1,this.scale="m",this.value=0,this.text="",this.noPadding=!1}render(){const{el:i,inline:a,label:n,scale:e,text:o,type:s,value:c}=this,x=i.id||j(),_=.45,r=a?this.getInlineSize(e):this.getSize(e),f=r*_,l=`0 0 ${r} ${r}`,m=s==="determinate",k=2*f*Math.PI,p=c/100*k,D=k-p,g=Math.floor(c),z={"aria-valuenow":g,"aria-valuemin":0,"aria-valuemax":100,complete:g===100},d={r:f,cx:r/2,cy:r/2},E={"stroke-dasharray":`${p} ${D}`};return t(S,Object.assign({"aria-label":n,id:x,role:"progressbar"},m?z:{}),t("div",{class:"loader__svgs"},t("svg",{class:"loader__svg loader__svg--1",viewBox:l},t("circle",Object.assign({},d))),t("svg",{class:"loader__svg loader__svg--2",viewBox:l},t("circle",Object.assign({},d))),t("svg",Object.assign({class:"loader__svg loader__svg--3",viewBox:l},m?{style:E}:{}),t("circle",Object.assign({},d)))),o&&t("div",{class:"loader__text"},o),m&&t("div",{class:"loader__percentage"},c))}getSize(i){return{s:32,m:56,l:80}[i]}getInlineSize(i){return{s:12,m:16,l:20}[i]}get el(){return this}static get style(){return L}},[1,"calcite-loader",{active:[516],inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1],noPadding:[4,"no-padding"]}]);function h(){if(typeof customElements>"u")return;["calcite-loader"].forEach(a=>{switch(a){case"calcite-loader":customElements.get(a)||customElements.define(a,$);break}})}h();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const u={scrim:"scrim",content:"content"},H={loading:"Loading"},O="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:absolute;top:0px;right:0px;bottom:0px;left:0px;z-index:50;display:-ms-flexbox;display:flex;height:100%;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}@-webkit-keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;top:0px;right:0px;bottom:0px;left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;-webkit-animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background)}.content{padding:1rem}",w=b(class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intlLoading=H.loading,this.loading=!1}render(){const{el:i,loading:a,intlLoading:n}=this,e=i.innerHTML.trim().length>0,o=a?t("calcite-loader",{active:!0,label:n}):null,s=e?t("div",{class:u.content},t("slot",null)):null;return t("div",{class:u.scrim},o,s)}get el(){return this}static get style(){return O}},[1,"calcite-scrim",{intlLoading:[1,"intl-loading"],loading:[516]}]);function y(){if(typeof customElements>"u")return;["calcite-scrim","calcite-loader"].forEach(a=>{switch(a){case"calcite-scrim":customElements.get(a)||customElements.define(a,w);break;case"calcite-loader":customElements.get(a)||h();break}})}y();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const B=w,I=y;export{B as CalciteScrim,I as defineCustomElement};
