import{ea as d,eb as u,ec as l}from"./main-95e6e76d.js";import{c as h}from"./observers-4f67f1fb.js";import"./preload-helper-388ac9d5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const r={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},p="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}",m=d(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=h("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(e,t)=>{const a=e>1;return!(e&&t>1)&&!a?null:t<e?"retreating":"advancing"},this.updateFlowProps=()=>{const{el:e,items:t}=this,a=Array.from(e.querySelectorAll("calcite-flow-item")).filter(i=>i.closest("calcite-flow")===e),o=t.length,n=a.length,c=a[n-1],s=a[n-2];if(n&&c&&a.forEach(i=>{i.showBackButton=i===c&&n>1,i.hidden=i!==c}),s&&(s.menuOpen=!1),this.items=a,o!==n){const i=this.getFlowDirection(o,n);this.itemCount=n,this.flowDirection=i}},this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:e}=this,t=e[e.length-1];return t?(t.beforeBack?t.beforeBack:()=>Promise.resolve()).call(t).then(()=>(t.remove(),t)):void 0}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){this.itemMutationObserver?.disconnect()}handleItemBackClick(){this.back()}render(){const{flowDirection:e}=this,t={[r.frame]:!0,[r.frameAdvancing]:e==="advancing",[r.frameRetreating]:e==="retreating"};return l("div",{class:t},l("slot",null))}get el(){return this}static get style(){return p}},[1,"calcite-flow",{flowDirection:[32],itemCount:[32],items:[32],back:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function f(){if(typeof customElements>"u")return;["calcite-flow"].forEach(t=>{switch(t){case"calcite-flow":customElements.get(t)||customElements.define(t,m);break}})}f();const b=m,y=f;export{b as CalciteFlow,y as defineCustomElement};
