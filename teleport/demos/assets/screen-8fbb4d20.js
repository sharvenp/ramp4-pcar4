import{gT as l,gY as _,hA as le,gN as N,hv as Re,gZ as Me,g_ as Pe,gQ as v,gX as y,h2 as X,hp as ve,gV as E,gP as o,hc as _e,hd as Ee,h6 as x,gK as oe,gL as Ie,h0 as fe,hQ as Ge,hn as Ye,hm as Fe,hR as Xe,gU as We,h3 as Ae,h4 as Ve,gW as Oe,gM as He,g$ as Ze,h1 as Le,hf as O,gS as P,hW as Je,ir as Qe,iq as et,h_ as z,is as tt,it as D,gO as at,gR as H,iu as Ne,hj as lt,hb as ot}from"./main-bbf05f59.js";import"./preload-helper-388ac9d5.js";function q(e,a,t){return Math.max(a,Math.min(e,t))}function M(e,a=2){return e.toFixed(a).replace(/\.?0+$/,"")}function Ue(e){return e.endsWith(".")?NaN:(parseFloat(e)%360+360)%360/360}function Be(e){return M(360*e)}function Z(e){if(!e.endsWith("%"))return NaN;const a=e.substring(0,e.length-1);if(a.endsWith("."))return NaN;const t=parseFloat(a);return Number.isNaN(t)?NaN:q(t,0,100)/100}function ce(e){return M(100*e)+"%"}function he(e){if(e.endsWith("%"))return Z(e);if(e.endsWith("."))return NaN;const a=parseFloat(e);return Number.isNaN(a)?NaN:q(a,0,255)/255}function ge(e){return M(255*e)}function be(e){return e.endsWith("%")?Z(e):q(parseFloat(e),0,1)}function me(e){return String(e)}const Ce={hsl:{h:{to:Be,from:Ue},s:{to:ce,from:Z},l:{to:ce,from:Z},a:{to:me,from:be}},hwb:{h:{to:Be,from:Ue},w:{to:ce,from:Z},b:{to:ce,from:Z},a:{to:me,from:be}},rgb:{r:{to:ge,from:he},g:{to:ge,from:he},b:{to:ge,from:he},a:{to:me,from:be}}};function ue(e){const a=e.replace(/^#/,""),t=[],n=a.length>4?2:1;for(let b=0;b<a.length;b+=n){const $=a.slice(b,b+n);t.push($.repeat(n%2+1))}t.length===3&&t.push("ff");const c=t.map(b=>parseInt(b,16)/255);return{r:c[0],g:c[1],b:c[2],a:c[3]}}function ye(e){const a=e.l<.5?e.l*(1+e.s):e.l+e.s-e.l*e.s,t=2*e.l-a;return{r:we(t,a,e.h+1/3),g:we(t,a,e.h),b:we(t,a,e.h-1/3),a:e.a}}function we(e,a,t){return t<0?t+=1:t>1&&(t-=1),t<1/6?e+6*(a-e)*t:t<.5?a:t<2/3?e+(a-e)*(2/3-t)*6:e}function ae(e){return{r:xe(5,e),g:xe(3,e),b:xe(1,e),a:e.a}}function xe(e,a){const t=(e+6*a.h)%6;return a.v-a.v*a.s*Math.max(0,Math.min(t,4-t,1))}function G(e){return{h:e.h,s:e.b===1?0:1-e.w/(1-e.b),v:1-e.b,a:e.a}}function Y(e){const a=Math.min(e.r,e.g,e.b),t=Math.max(e.r,e.g,e.b);let n;return n=t===a?0:t===e.r?(0+(e.g-e.b)/(t-a))/6:t===e.g?(2+(e.b-e.r)/(t-a))/6:(4+(e.r-e.g)/(t-a))/6,n<0&&(n+=1),{h:n,w:a,b:1-t,a:e.a}}function ke(e){const a=Y(e),t=a.w,n=1-a.b,c=(n+t)/2;let b;return b=n===0||t===1?0:(n-c)/Math.min(c,1-c),{h:a.h,s:b,l:c,a:e.a}}function de(e){return"#"+Object.values(e).map(a=>{const t=255*a,n=Math.round(t).toString(16);return n.length===1?"0"+n:n}).join("")}const rt={hex:[["hsl",e=>L(e,[ue,ke])],["hsv",e=>L(e,[ue,Y,G])],["hwb",e=>L(e,[ue,Y])],["rgb",ue]],hsl:[["hex",e=>L(e,[ye,de])],["hsv",function(e){const a=e.l+e.s*Math.min(e.l,1-e.l),t=a===0?0:2-2*e.l/a;return{h:e.h,s:t,v:a,a:e.a}}],["hwb",e=>L(e,[ye,Y])],["rgb",ye]],hsv:[["hex",e=>L(e,[ae,de])],["hsl",function(e){const a=e.v-e.v*e.s/2,t=Math.min(a,1-a),n=t===0?0:(e.v-a)/t;return{h:e.h,s:n,l:a,a:e.a}}],["hwb",function(e){return{h:e.h,w:(1-e.s)*e.v,b:1-e.v,a:e.a}}],["rgb",ae]],hwb:[["hex",e=>L(e,[G,ae,de])],["hsl",e=>L(e,[G,ae,ke])],["hsv",G],["rgb",e=>L(e,[G,ae])]],rgb:[["hex",de],["hsl",ke],["hsv",e=>L(e,[Y,G])],["hwb",Y]]};function L(e,a){return a.reduce((t,n)=>n(t),e)}function pe(e){const a={};for(const t in e)a[t]=e[t];return a}const nt={hex:(e,a)=>a&&[5,9].includes(e.length)?e.substring(0,e.length-(e.length-1)/4):e,hsl:(e,a)=>`hsl(${M(360*e.h)} ${M(100*e.s)}% ${M(100*e.l)}%`+(a?")":` / ${M(e.a)})`),hwb:(e,a)=>`hwb(${M(360*e.h)} ${M(100*e.w)}% ${M(100*e.b)}%`+(a?")":` / ${M(e.a)})`),rgb:(e,a)=>`rgb(${M(255*e.r)} ${M(255*e.g)} ${M(255*e.b)}`+(a?")":` / ${M(e.a)})`)};function je(e,a,t){return nt[a](e,t)}function De(e){return/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(e)}function it(e){if(typeof e!="string")return{format:function(u){return Object.prototype.hasOwnProperty.call(u,"r")?"rgb":Object.prototype.hasOwnProperty.call(u,"w")?"hwb":Object.prototype.hasOwnProperty.call(u,"v")?"hsv":"hsl"}(e),color:e};if(De(e))return{format:"hex",color:e};if(!e.includes("(")){const g=document.createElement("canvas").getContext("2d");g.fillStyle=e;const u=g.fillStyle;return u==="#000000"&&e!=="black"?null:{format:"hex",color:u}}const[a,t]=e.split("("),n=a.substring(0,3),c=t.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");c.length===3&&c.push("1");const b=(n+"a").split(""),$=Object.fromEntries(b.map((g,u)=>[g,Ce[n][g].from(c[u])]));return{format:n,color:$}}const Se=["hex","hsl","hwb","rgb"],st=["show","hide"],ct={class:"vacp-range-input-group"},ut=["for"],dt={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},pt=["id","value"],vt=["for"],ft={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},ht=["id","value"],gt=l("span",{class:"vacp-visually-hidden"},"Copy color",-1),bt=l("svg",{class:"vacp-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 32 32"},[l("path",{d:"M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z",fill:"currentColor"})],-1),mt={class:"vacp-color-inputs"},yt={class:"vacp-color-input-group"},wt=["for"],xt=l("span",{class:"vacp-color-input-label-text"}," Hex ",-1),kt=["id","value"],St=["id","for","onInput"],zt={class:"vacp-color-input-label-text"},$t=["id","value","onInput"],_t=l("span",{class:"vacp-visually-hidden"},"Switch format",-1),Et=l("svg",{class:"vacp-icon","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15"},[l("path",{d:"M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z",fill:"currentColor"})],-1);var qe={__name:"ColorPicker",props:{color:{type:[String,Object],default:"#ffffffff"},id:{type:String,default:"color-picker"},visibleFormats:{type:Array,default:()=>Se,validator:e=>e.length>0&&e.every(a=>Se.includes(a))},defaultFormat:{type:String,default:"hsl",validator:e=>Se.includes(e)},alphaChannel:{type:String,default:"show",validator:e=>st.includes(e)}},emits:["color-change"],setup(e,{emit:a}){const t=e,n=_(null),c=_(null),b=_(null),$=_(!1),g=_(t.visibleFormats.includes(t.defaultFormat)?t.defaultFormat:t.visibleFormats[0]),u=le({hex:"#ffffffff",hsl:{h:0,s:0,l:1,a:1},hsv:{h:0,s:0,v:1,a:1},hwb:{h:0,w:1,b:0,a:1},rgb:{r:1,g:1,b:1,a:1}}),U=N(function(){const r=Object.keys(u[g.value]);return g.value!=="hex"&&t.alphaChannel==="hide"?r.slice(0,3):r}),W=N(function(){return t.alphaChannel==="hide"&&[5,9].includes(u.hex.length)?u.hex.substring(0,u.hex.length-(u.hex.length-1)/4):u.hex});function S(){const r=(t.visibleFormats.findIndex(s=>s===g.value)+1)%t.visibleFormats.length;g.value=t.visibleFormats[r]}function f(r){$.value=!0,F(r)}function m(r){$.value=!0,B(r)}function V(){$.value=!1}function F(r){r.buttons===1&&$.value!==!1&&c.value instanceof HTMLElement&&I(c.value,r.clientX,r.clientY)}function B(r){if($.value===!1||!(c.value instanceof HTMLElement))return;r.preventDefault();const s=r.touches[0];I(c.value,s.clientX,s.clientY)}function I(r,s,h){const w=function(A,K,te){const i=A.getBoundingClientRect(),d=K-i.left,T=te-i.top;return{x:q(d/i.width,0,1),y:q(1-T/i.height,0,1)}}(r,s,h),k=pe(u.hsv);k.s=w.x,k.v=w.y,j("hsv",k)}function p(r){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(r.key))return;r.preventDefault();const s=["ArrowLeft","ArrowDown"].includes(r.key)?-1:1,h=["ArrowLeft","ArrowRight"].includes(r.key)?"s":"v",w=r.shiftKey?10:1,k=u.hsv[h]+s*w*.01,A=pe(u.hsv);A[h]=q(k,0,1),j("hsv",A)}function J(r){const s=it(r);s!==null&&j(s.format,s.color)}function re(r,s){const h=r.currentTarget,w=pe(u.hsv);w[s]=parseInt(h.value)/parseInt(h.max),j("hsv",w)}function Q(r){const s=r.target;De(s.value)&&j("hex",s.value)}function ee(r,s){const h=r.target,w=pe(u[g.value]),k=Ce[g.value][s].from(h.value);Number.isNaN(k)||k===void 0||(w[s]=k,j(g.value,w))}function j(r,s){let h=s;if(t.alphaChannel==="hide")if(typeof s!="string")s.a=1,h=s;else if([5,9].includes(s.length)){const w=(s.length-1)/4;h=s.substring(0,s.length-w)+"f".repeat(w)}else[4,7].includes(s.length)&&(h=s+"f".repeat((s.length-1)/3));if(!function(w,k){if(typeof w=="string"||typeof k=="string")return w===k;for(const A in w)if(w[A]!==k[A])return!1;return!0}(u[r],h)){(function(k,A){u[k]=A;for(const[K,te]of rt[k])u[K]=te(u[k])})(r,h);const w=function(){const k=t.alphaChannel==="hide",A=je(u[g.value],g.value,k);return{colors:u,cssColor:A}}();a("color-change",w)}(function(){n.value instanceof HTMLElement&&c.value instanceof HTMLElement&&b.value instanceof HTMLElement&&(n.value.style.setProperty("--vacp-hsl-h",String(u.hsl.h)),n.value.style.setProperty("--vacp-hsl-s",String(u.hsl.s)),n.value.style.setProperty("--vacp-hsl-l",String(u.hsl.l)),n.value.style.setProperty("--vacp-hsl-a",String(u.hsl.a)),c.value.style.position="relative",c.value.style.backgroundColor="hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%)",c.value.style.backgroundImage="linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)",b.value.style.boxSizing="border-box",b.value.style.position="absolute",b.value.style.left=100*u.hsv.s+"%",b.value.style.bottom=100*u.hsv.v+"%")})()}async function ne(){const r=u[g.value],s=t.alphaChannel==="hide",h=je(r,g.value,s);await window.navigator.clipboard.writeText(h)}function ie(r,s){return Ce[r][s].to(u[r][s])}function se(r){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(r.key)||!r.shiftKey)return;const s=r.currentTarget,h=parseFloat(s.step),w=["ArrowLeft","ArrowDown"].includes(r.key)?-1:1,k=q(parseFloat(s.value)+w*h*10,parseInt(s.min),parseInt(s.max));s.value=String(k-w*h)}return Re(()=>t.color,J),Me(function(){document.addEventListener("mousemove",F,{passive:!1}),document.addEventListener("touchmove",B,{passive:!1}),document.addEventListener("mouseup",V),document.addEventListener("touchend",V),J(t.color)}),Pe(function(){document.removeEventListener("mousemove",F),document.removeEventListener("touchmove",B),document.removeEventListener("mouseup",V),document.removeEventListener("touchend",V)}),(r,s)=>(v(),y("div",{ref_key:"colorPicker",ref:n,class:"vacp-color-picker"},[l("div",{ref_key:"colorSpace",ref:c,class:"vacp-color-space",onMousedown:f,onTouchstart:m},[l("div",{ref_key:"thumb",ref:b,class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",onKeydown:p},null,544)],544),l("div",ct,[l("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${e.id}-hue-slider`},[l("span",dt,[X(r.$slots,"hue-range-input-label",{},()=>[ve("Hue")])]),l("input",{id:`${e.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:360*u.hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:se,onInput:s[0]||(s[0]=h=>re(h,"h"))},null,40,pt)],8,ut),e.alphaChannel==="show"?(v(),y("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${e.id}-alpha-slider`},[l("span",ft,[X(r.$slots,"alpha-range-input-label",{},()=>[ve("Alpha")])]),l("input",{id:`${e.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:100*u.hsv.a,type:"range",min:"0",max:"100",step:"1",onKeydownPassive:se,onInput:s[1]||(s[1]=h=>re(h,"a"))},null,40,ht)],8,vt)):E("v-if",!0)]),l("button",{class:"vacp-copy-button",type:"button",onClick:ne},[X(r.$slots,"copy-button",{},()=>[gt,bt])]),l("div",mt,[l("div",yt,[g.value==="hex"?(v(),y("label",{key:0,class:"vacp-color-input-label",for:`${e.id}-color-hex`},[xt,l("input",{id:`${e.id}-color-hex`,class:"vacp-color-input",type:"text",value:o(W),onInput:Q},null,40,kt)],8,wt)):(v(!0),y(_e,{key:1},Ee(o(U),h=>(v(),y("label",{id:`${e.id}-color-${g.value}-${h}-label`,key:`${e.id}-color-${g.value}-${h}-label`,class:"vacp-color-input-label",for:`${e.id}-color-${g.value}-${h}`,onInput:w=>ee(w,h)},[l("span",zt,x(h.toUpperCase()),1),l("input",{id:`${e.id}-color-${g.value}-${h}`,class:"vacp-color-input",type:"text",value:ie(g.value,h),onInput:w=>ee(w,h)},null,40,$t)],40,St))),128))]),e.visibleFormats.length>1?(v(),y("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:S},[X(r.$slots,"format-switch-button",{},()=>[_t,Et])])):E("v-if",!0)])],512))}};(function(e,a){a===void 0&&(a={});var t=a.insertAt;if(e&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",t==="top"&&n.firstChild?n.insertBefore(c,n.firstChild):n.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}})(".vacp-color-picker{--vacp-color:hsl(calc(var(--vacp-hsl-h)*360) calc(var(--vacp-hsl-s)*100%) calc(var(--vacp-hsl-l)*100%)/var(--vacp-hsl-a));--vacp-focus-color:#19f;--vacp-focus-outline:2px solid var(--vacp-focus-color);--vacp-border-width:1px;--vacp-border-color:#000;--vacp-border:var(--vacp-border-width) solid var(--vacp-border-color);--vacp-color-space-width:300px;--vacp-spacing:6px;grid-gap:var(--vacp-spacing);background-color:#fff;display:grid;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:.8em;grid-template-columns:1fr min-content;max-width:var(--vacp-color-space-width);padding:var(--vacp-spacing)}.vacp-color-picker *,.vacp-color-picker :after,.vacp-color-picker :before{box-sizing:border-box}.vacp-color-picker button::-moz-focus-inner{border:none;padding:0}.vacp-color-picker :focus{outline:var(--vacp-focus-outline)}.vacp-color-space{grid-column:1/-1;height:calc(var(--vacp-color-space-width)*.6);overflow:hidden}.vacp-color-space-thumb{--vacp-thumb-size:calc(var(--vacp-spacing)*4);border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);height:var(--vacp-thumb-size);margin-bottom:calc(var(--vacp-thumb-size)*-1/2);margin-left:calc(var(--vacp-thumb-size)*-1/2);width:var(--vacp-thumb-size)}.vacp-color-space-thumb:focus{box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color),0 0 0 3px var(--vacp-focus-color);outline-color:transparent}.vacp-range-input-label{--vacp-slider-track-width:100%;--vacp-slider-track-height:calc(var(--vacp-spacing)*3);display:block}.vacp-range-input-group{display:flex;flex-direction:column;justify-content:center}.vacp-range-input-group>:not(:first-child){margin-top:var(--vacp-spacing)}.vacp-range-input,.vacp-range-input::-webkit-slider-thumb{-webkit-appearance:none}.vacp-range-input{background:none;border:none;display:block;height:var(--vacp-slider-track-height);margin-bottom:calc(var(--vacp-spacing)/2 + 1px);margin-left:0;margin-right:0;margin-top:calc(var(--vacp-spacing)/2 + 1px);padding:0;width:var(--vacp-slider-track-width)}.vacp-range-input:focus{outline:none}.vacp-range-input::-moz-focus-outer{border:none}.vacp-range-input--alpha{background-color:#fff;background-image:linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee),linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee);background-position:0 0,var(--vacp-spacing) var(--vacp-spacing);background-size:calc(var(--vacp-spacing)*2) calc(var(--vacp-spacing)*2)}.vacp-range-input::-moz-range-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-webkit-slider-runnable-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-ms-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input:focus::-moz-range-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-webkit-slider-runnable-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-ms-track{outline:var(--vacp-focus-outline)}.vacp-range-input--alpha::-moz-range-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-webkit-slider-runnable-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-ms-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--hue::-moz-range-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-webkit-slider-runnable-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-ms-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input::-moz-range-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;width:var(--vacp-slider-track-height)}.vacp-range-input::-webkit-slider-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-range-input::-ms-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-copy-button{align-items:center;align-self:center;background-color:#fff;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;height:calc(var(--vacp-spacing)*6);justify-content:center;justify-self:center;overflow:hidden;position:relative;width:calc(var(--vacp-spacing)*6)}.vacp-copy-button:enabled:focus{border-color:var(--vacp-border-color);box-shadow:0 0 0 2px var(--vacp-focus-color);outline:none}.vacp-copy-button:enabled:hover{background-color:#0002}.vacp-color-inputs{align-items:center;display:flex;grid-column:1/-1}.vacp-color-inputs>:not(:first-child){margin-left:var(--vacp-spacing)}.vacp-color-input-group{column-gap:var(--vacp-spacing);display:grid;flex-grow:1;grid-auto-flow:column}.vacp-color-input-label{text-align:center}.vacp-color-input{border:var(--vacp-border);margin:0;margin-top:calc(var(--vacp-spacing)/2);text-align:center;width:100%}.vacp-color-input,.vacp-format-switch-button{background-color:#fff;color:inherit;font:inherit;padding:var(--vacp-spacing)}.vacp-format-switch-button{align-items:center;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;justify-content:center;margin:0}.vacp-format-switch-button:enabled:focus{border-color:var(--vacp-border-color)}.vacp-format-switch-button:enabled:hover{background-color:#0002}.vacp-visually-hidden{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}"),qe.__file="src/ColorPicker.vue";const Ft={class:"flex justify-end mb-20"},Ct=["disabled"],ze=oe({__name:"form-footer",props:{disabled:{type:Boolean,default:!0}},setup(e){const{t:a}=Ie();return(t,n)=>(v(),y("div",Ft,[l("button",{class:"hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",type:"button",onClick:n[0]||(n[0]=c=>t.$emit("cancel"))},x(o(a)("wizard.step.cancel")),1),l("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",type:"button",disabled:e.disabled,onClick:n[1]||(n[1]=c=>t.$emit("submit"))},x(o(a)("wizard.step.continue")),9,Ct)]))}}),Ke=e=>(Ae("data-v-2122a1a9"),e=e(),Ve(),e),Mt={class:"input-wrapper mb-12"},It={key:0},At={class:"text-base font-bold"},Vt={class:"relative py-8 mb-0.5 h-75","data-type":"file"},Ot=Ke(()=>l("div",{class:"upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center"},[l("svg",{class:"w-30 h-30 m-auto",fill:"#a8a8a8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 58"},[l("path",{d:"M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"}),l("polygon",{points:"27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"})])],-1)),Tt={class:"text-gray-400 text-xs mb-1"},Lt={key:1},Nt={class:"text-base font-bold"},Ut={class:"mb-0.5","data-type":"url"},Bt=["value"],jt={key:0,class:"text-red-900 text-xs"},Rt={key:2},Pt={class:"text-base font-bold"},Wt={key:0,class:"flex items-center pb-4 min-w-0"},Ht=["aria-label","placeholder"],Dt=Ke(()=>l("div",{class:"-ml-30"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",fit:"",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false",class:"fill-current w-24 h-24 flex-shrink-0"},[l("g",{id:"search_cache224"},[l("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})])])],-1)),qt={class:"relative mb-0.5","data-type":"select"},Kt={key:0},Gt=["value"],Yt={class:"text-gray-400 text-xs mb-1"},Xt={key:0,class:"text-red-900 text-xs"},Zt={key:1},Jt=["size","value"],Qt=["value"],ea={key:0,class:"text-red-900 text-xs"},ta={key:1,class:"text-red-900 text-xs"},aa={key:3},la={class:"text-base font-bold"},oa={class:"relative mb-0.5"},ra=["value"],na={key:0,class:"text-red-900 text-xs"},ia=oe({__name:"form-input",props:{defaultOption:{type:Boolean,default:!1},formatError:{type:Boolean,default:!1},failureError:{type:Boolean,default:!1},help:{type:[String,Boolean],default:!1},label:{type:[String,Boolean],default:!1},modelValue:{type:[String,Array],default:""},name:{type:[String,Boolean],default:!1},options:{type:Array,default(){return[]}},size:{type:[Number,String],default:0},multiple:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},type:{type:String,default:"text"},url:{type:[String,Boolean],default:!1},validation:{type:Boolean,default:!1},validationMessages:{type:Object}},emits:["update:modelValue","link","select","upload","text"],setup(e,{emit:a}){const t=e,{t:n}=Ie(),c=_(!1),b=_(!1),$=_(!1),g=_([]),u=_("");if(t.defaultOption&&t.modelValue===""&&t.options.length){let S=t.options[0].value;if(t.name==="latField"){const f=new RegExp(/^(y|lat.*)$/i);S=t.options.find(V=>f.test(V.label))?.value||S}else if(t.name==="longField"){const f=new RegExp(/^(x|long.*)$/i);S=t.options.find(V=>f.test(V.label))?.value||S}a("update:modelValue",S)}const U=S=>{let f;try{f=new URL(S)}catch{return c.value=!1,!1}f.protocol==="http:"||f.protocol==="https:"?c.value=!0:c.value=!1},W=S=>{S&&S.length>0?$.value=!1:$.value=!0};return(S,f)=>(v(),y("div",Mt,[e.type==="file"?(v(),y("div",It,[l("label",At,x(e.label),1),l("div",Vt,[l("input",{class:"absolute w-full opacity-0 inset-0 cursor-pointer",type:"file",name:"file",accept:".geojson,.json,.csv,.zip",onInput:f[0]||(f[0]=m=>{a("upload",m.target.files[0]),m.target.value=""})},null,32),Ot]),l("div",Tt,x(e.help),1)])):e.type==="url"?(v(),y("div",Lt,[l("label",Nt,x(e.label),1),l("div",Ut,[l("input",{class:"text-sm w-full border-solid border-gray-300 mb-5 leading-5 focus:border-green-500",type:"url",name:"url",value:e.modelValue,onChange:f[1]||(f[1]=m=>c.value?b.value=!1:b.value=!0),onInput:f[2]||(f[2]=m=>{U(m.target.value),a("link",m.target.value,c.value),b.value=!1})},null,40,Bt)]),b.value?(v(),y("div",jt,x(e.modelValue?e.validationMessages?.invalid:e.validationMessages?.required),1)):E("",!0)])):e.type==="select"?(v(),y("div",Rt,[l("label",Pt,x(e.label),1),e.searchable&&e.options.length>4?(v(),y("div",Wt,[fe(l("input",{onKeypress:f[3]||(f[3]=Ye(Fe(()=>{},["prevent"]),["enter"])),enterkeyhint:"done","onUpdate:modelValue":f[4]||(f[4]=m=>u.value=m),class:"rv-global-search rv-input w-full min-w-0","aria-invalid":"false","aria-label":o(n)("wizard.configure.sublayers.search"),placeholder:o(n)("wizard.configure.sublayers.search")},null,40,Ht),[[Ge,u.value]]),Dt])):E("",!0),l("div",qt,[e.multiple?(v(),y("div",Kt,[fe(l("select",{class:"block border-solid border-gray-300 w-full p-3 overflow-y-auto",multiple:"","onUpdate:modelValue":f[5]||(f[5]=m=>g.value=m),onChange:f[6]||(f[6]=()=>{a("select",g.value),W(g.value)})},[(v(!0),y(_e,null,Ee(e.options.filter(m=>m.label.toLowerCase().includes(u.value.toLowerCase().trim())),m=>(v(),y("option",{class:"p-6",key:m.label,value:m.value},x(m.label),9,Gt))),128))],544),[[Xe,g.value]]),l("div",Yt,x(e.help),1),e.validation&&$.value?(v(),y("div",Xt,x(e.validationMessages?.required),1)):E("",!0)])):(v(),y("div",Zt,[l("select",{class:We(["block border-solid border-gray-300 w-full p-3 overflow-y-auto",e.size&&"configure-select"]),size:e.size,value:e.modelValue,onInput:f[7]||(f[7]=m=>e.size?a("select",m.target.value):a("update:modelValue",m.target.value))},[(v(!0),y(_e,null,Ee(e.options,m=>(v(),y("option",{class:"p-6",key:m.label,value:m.value},x(m.label),9,Qt))),128))],42,Jt),e.validation&&e.formatError?(v(),y("div",ea,x(e.validationMessages?.invalid),1)):E("",!0),e.validation&&e.failureError?(v(),y("div",ta,x(e.validationMessages?.failure),1)):E("",!0)]))])])):(v(),y("div",aa,[l("label",la,x(e.label),1),l("div",oa,[l("input",{class:"border-solid border-gray-300 p-3 w-full",type:"text",value:e.modelValue,onChange:f[8]||(f[8]=m=>a("text",m.target.value))},null,40,ra)]),e.validation&&!e.modelValue?(v(),y("div",na,x(e.validationMessages?.required),1)):E("",!0)]))]))}});const R=Oe(ia,[["__scopeId","data-v-2122a1a9"]]),sa=e=>(Ae("data-v-674cf5db"),e=e(),Ve(),e),ca={class:"step relative flex flex-col px-12 overflow-y-hidden"},ua={class:"stepper-header flex pb-24"},da={key:1,class:"flex-none stepper-check w-24 h-24 text-gray-400"},pa=sa(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},[l("g",{id:"check_circle"},[l("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})])],-1)),va=[pa],fa={class:"flex flex-col overflow-hidden"},ha={class:"pl-12 flex items-center text-md"},ga={class:"pl-12 text-xs transition-opacity duration-1000 ease-out"},ba={class:"pl-36"},ma=oe({__name:"stepper-item",props:{title:{type:String,required:!0},summary:{type:String}},setup(e){const a=He("stepper"),t=_(-1);Me(()=>{t.value=a.numSteps++});const n=()=>a.activeIndex>t.value,c=()=>a.activeIndex===t.value;return(b,$)=>{const g=Ze("truncate");return v(),y("div",ca,[l("div",ua,[n()?(v(),y("div",da,va)):(v(),y("div",{key:0,class:We(["w-24 h-24 bg-gray-400 rounded-full flex justify-center items-center text-white text-xs font-semibold",{"bg-blue-500":c}])},x(t.value+1),3)),l("div",fa,[l("div",ha,x(e.title),1),fe((v(),y("div",ga,[ve(x(e.summary),1)])),[[Le,!c()],[g]])])]),O(Je,{name:"step",mode:"out-in"},{default:P(()=>[fe(l("div",ba,[X(b.$slots,"default",{},void 0,!0)],512),[[Le,c()]])]),_:3})])}}});const $e=Oe(ma,[["__scopeId","data-v-674cf5db"]]),ya={class:"py-12"},wa=oe({__name:"stepper",props:{activeStep:{type:Number,default:0}},setup(e){const a=e,t=N(()=>a.activeStep),n=le([]),c=le({activeIndex:a.activeStep,numSteps:0});return Qe("stepper",c),n.push(Re(t,()=>{c.activeIndex=a.activeStep})),Pe(()=>{n.forEach(b=>b())}),(b,$)=>(v(),y("div",ya,[X(b.$slots,"default")]))}}),Te=e=>(Ae("data-v-17b719c3"),e=e(),Ve(),e),xa=Te(()=>l("span",{class:"block text-center mb-10"},"or",-1)),ka={key:0,class:"inline-flex items-center mb-10"},Sa=Te(()=>l("svg",{class:"inline-block fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[l("path",{d:"M0 0h24v24H0z",fill:"none"}),l("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)),za={class:"px-5 text-xs"},$a=["for"],_a={key:6,class:"text-base font-bold"},Ea={class:"sr-only"},Fa={class:"sr-only"},Ca=Te(()=>l("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15"},[l("path",{d:"M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",fill:"currentColor"}),l("path",{d:"M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",fill:"currentColor"})],-1)),Ma=oe({__name:"screen",props:{panel:{type:Object,required:!0}},setup(e){const a=et(),{t}=Ie(),n=He("iApi"),c=_(),b=N(()=>a.layerSource),$=N(()=>a.currStep),g=_(),u=_(),U=_(!1),W=_(!1),S=_(!1),f=_(!1),m=le([{value:z.FEATURE,label:t("wizard.layerType.esriFeature")},{value:z.MAPIMAGE,label:t("wizard.layerType.esriMapImage")},{value:z.TILE,label:t("wizard.layerType.esriTile")},{value:z.IMAGERY,label:t("wizard.layerType.esriImagery")},{value:z.WMS,label:t("wizard.layerType.ogcWms")},{value:z.WFS,label:t("wizard.layerType.ogcWfs")}]),V=le([{value:z.GEOJSON,label:t("wizard.fileType.geojson")},{value:z.SHAPEFILE,label:t("wizard.fileType.shapefile")},{value:z.CSV,label:t("wizard.fileType.csv")}]),F=N({get(){return a.url},set(i){a.url=i}}),B=N({get(){return a.fileData},set(i){a.fileData=i}}),I=N({get(){return a.typeSelection},set(i){a.typeSelection=i}}),p=N({get(){return a.layerInfo},set(i){a.layerInfo=i}}),J=N(()=>{let i=n.geo.proxy!=="";switch(I.value){case z.FEATURE:case z.MAPIMAGE:case z.TILE:case z.IMAGERY:return!i;case z.WFS:return!0;case z.WMS:return!i;case z.GEOJSON:case z.SHAPEFILE:case z.CSV:return!!(r()&&!B.value);default:return!1}});tt(()=>(($.value===D.FORMAT||$.value===D.CONFIGURE)&&(U.value=!0,a.goToStep(D.FORMAT)),!1)),Me(()=>{$.value===D.CONFIGURE&&(p.value?.configOptions.includes("colour")&&K(),f.value=!p.value?.configOptions.includes("sublayers")&&!!p.value?.config.name)});const re=async i=>{const d=new FileReader;d.onload=T=>{B.value=d.result,F.value=i.name,Q(T)},d.readAsArrayBuffer(i)},Q=i=>{i?.preventDefault(),I.value=b.value.guessFormatFromURL(F.value),a.goToStep(D.FORMAT)},ee=async()=>{W.value=!1;try{p.value=r()?await b.value.fetchFileInfo(F.value,I.value,B.value):await b.value.fetchServiceInfo(F.value,I.value),r()&&B.value&&(p.value.config.url="")}catch{W.value=!0;return}const i=I.value===z.FEATURE&&!(p.value&&p.value.fields);if(!p.value||i){U.value=!0,p.value={config:{id:"Placeholder",layerType:z.UNKNOWN,url:""},configOptions:[]};return}K(),a.goToStep(D.CONFIGURE),p.value.configOptions.includes("sublayers")?f.value=!1:f.value=!0},j=async i=>{const d=Object.assign(p.value.config,i),T=n.geo.layer.createLayer(d);n.geo.map.addLayer(T),T.userAdded=!0,n.event.emit(lt.USER_LAYER_ADDED,T),S.value=!1,a.goToStep(D.UPLOAD)},ne=()=>p.value?.fields.map(i=>({value:i.name,label:i.alias||i.name})),ie=i=>p.value?.latLonFields[i].map(d=>({value:d,label:d})),se=()=>p.value?.layers.map((i,d)=>({label:`${i.indent}${i.name}`,value:I.value===z.MAPIMAGE?{index:i.id,state:{opacity:1,visibility:!0}}:{id:i.id},id:`${i.indent}${i.name}-${d}`})),r=()=>B.value||F.value.match(/\.(zip|csv|json|geojson)$/),s=i=>{re(i),F.value=""},h=(i,d)=>{F.value=i.trim(),d?S.value=!0:S.value=!1},w=i=>{I.value=i,U.value=!1},k=i=>{p.value.config.name=i;const d=p.value?.config.sublayers;(d?i&&d.length>0:i)?f.value=!0:f.value=!1},A=i=>{p.value.config.sublayers=i,i.length>0&&p.value?.config.name?f.value=!0:f.value=!1},K=()=>{g.value=p.value?.config.colour??"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");do u.value=Math.random().toString(36).substring(2,9);while(document.getElementById(u.value+"-hue-slider")!==null)},te=i=>{p.value.config.colour=i.colors.hex.substring(0,7),ot(()=>{c.value.querySelector(".vacp-copy-button").style.backgroundColor=p.value?.config.colour})};return(i,d)=>{const T=at("panel-screen");return v(),H(T,{panel:e.panel},{header:P(()=>[ve(x(o(t)("wizard.title")),1)]),content:P(()=>[O(wa,{activeStep:o($)},{default:P(()=>[O($e,{title:o(t)("wizard.upload.title"),summary:o(F)},{default:P(()=>[l("form",{name:"upload",onSubmit:Q},[O(R,{type:"file",name:"file",label:o(t)("wizard.upload.file.label"),help:o(t)("wizard.upload.file.help"),onUpload:s},null,8,["label","help"]),xa,O(R,{type:"url",name:"url",modelValue:o(F),"onUpdate:modelValue":d[0]||(d[0]=C=>Ne(F)?F.value=C:null),label:o(t)("wizard.upload.url.label"),onLink:h,validation:!0,"validation-messages":{required:o(t)("wizard.upload.url.error.required"),invalid:o(t)("wizard.upload.url.error.url")}},null,8,["modelValue","label","validation-messages"]),O(ze,{onSubmit:Q,onCancel:d[1]||(d[1]=()=>{S.value=!1,o(a).goToStep(0)}),disabled:!S.value},null,8,["disabled"])],32)]),_:1},8,["title","summary"]),O($e,{title:o(t)("wizard.format.title"),summary:o(I)},{default:P(()=>[l("form",{name:"format",onSubmit:ee},[o(J)?(v(),y("div",ka,[Sa,l("span",za,x(o(t)("wizard.format.info.cors")),1)])):E("",!0),O(R,{type:"select",name:"type",modelValue:o(I),"onUpdate:modelValue":d[2]||(d[2]=C=>Ne(I)?I.value=C:null),onSelect:w,size:r()?V.length:m.length,label:r()?o(t)("wizard.format.type.file"):o(t)("wizard.format.type.service"),options:r()?V:m,formatError:U.value,failureError:W.value,validation:!0,"validation-messages":{required:o(t)("wizard.format.type.error.required"),invalid:o(t)("wizard.format.type.error.invalid"),failure:`${o(t)("wizard.format.type.error.failure")}.${o(J)?" "+o(t)("wizard.format.warn.cors")+".":""}`},onKeydown:d[3]||(d[3]=Fe(()=>{},["stop"]))},null,8,["modelValue","size","label","options","formatError","failureError","validation-messages"]),O(ze,{onSubmit:ee,onCancel:d[4]||(d[4]=()=>{U.value=!1,W.value=!1,o(F)?S.value=!0:S.value=!1,o(a).goToStep(0)}),disabled:!1})],32)]),_:1},8,["title","summary"]),O($e,{title:o(t)("wizard.configure.title")},{default:P(()=>[l("form",{name:"configure",onSubmit:j,ref_key:"formElement",ref:c},[o(p)?.configOptions.includes("name")?(v(),H(R,{key:0,type:"text",name:"name",modelValue:o(p).config.name,"onUpdate:modelValue":d[5]||(d[5]=C=>o(p).config.name=C),onText:k,label:o(t)("wizard.configure.name.label"),validation:!0,"validation-messages":{required:o(t)("wizard.configure.name.error.required")}},null,8,["modelValue","label","validation-messages"])):E("",!0),o(p)?.configOptions.includes("nameField")?(v(),H(R,{key:1,type:"select",name:"nameField",modelValue:o(p).config.nameField,"onUpdate:modelValue":d[6]||(d[6]=C=>o(p).config.nameField=C),label:o(t)("wizard.configure.nameField.label"),defaultOption:!0,options:ne()},null,8,["modelValue","label","options"])):E("",!0),o(p)?.configOptions.includes("tooltipField")?(v(),H(R,{key:2,type:"select",name:"tooltipField",modelValue:o(p).config.tooltipField,"onUpdate:modelValue":d[7]||(d[7]=C=>o(p).config.tooltipField=C),label:o(t)("wizard.configure.tooltipField.label"),options:ne()},null,8,["modelValue","label","options"])):E("",!0),o(p)?.configOptions.includes("latField")?(v(),H(R,{key:3,type:"select",name:"latField",modelValue:o(p).config.latField,"onUpdate:modelValue":d[8]||(d[8]=C=>o(p).config.latField=C),defaultOption:!0,label:o(t)("wizard.configure.latField.label"),options:ie("lat")},null,8,["modelValue","label","options"])):E("",!0),o(p)?.configOptions.includes("longField")?(v(),H(R,{key:4,type:"select",name:"longField",modelValue:o(p).config.longField,"onUpdate:modelValue":d[9]||(d[9]=C=>o(p).config.longField=C),defaultOption:!0,label:o(t)("wizard.configure.longField.label"),options:ie("lon")},null,8,["modelValue","label","options"])):E("",!0),o(p)?.configOptions.includes("sublayers")?(v(),H(R,{key:5,type:"select",name:"sublayers",modelValue:o(p).config.sublayers,"onUpdate:modelValue":d[10]||(d[10]=C=>o(p).config.sublayers=C),onSelect:A,label:o(t)("wizard.configure.sublayers.label"),help:o(t)("wizard.configure.sublayers.help"),options:se(),multiple:!0,searchable:!0,validation:!0,"validation-messages":{required:o(t)("wizard.configure.sublayers.error.required")},onKeydown:d[11]||(d[11]=Fe(()=>{},["stop"]))},null,8,["modelValue","label","help","options","validation-messages"])):E("",!0),l("label",{class:"sr-only",for:`${u.value}-color-hex`},x(o(t)("wizard.configure.colour.hex")),9,$a),o(p)?.configOptions.includes("colour")?(v(),y("label",_a,x(o(t)("wizard.configure.colour.label")),1)):E("",!0),o(p)?.configOptions.includes("colour")?(v(),H(o(qe),{key:7,"alpha-channel":"hide","visible-formats":["hex"],"default-format":"hex",id:u.value,color:g.value,onColorChange:te},{"hue-range-input-label":P(()=>[l("span",Ea,x(o(t)("wizard.configure.colour.hue")),1)]),"copy-button":P(()=>[l("span",Fa,x(o(t)("wizard.configure.colour.copy")),1),Ca]),_:1},8,["id","color"])):E("",!0),O(ze,{onSubmit:j,onCancel:d[12]||(d[12]=C=>o(a).goToStep(1)),disabled:!f.value},null,8,["disabled"])],544)]),_:1},8,["title"])]),_:1},8,["activeStep"])]),_:1},8,["panel"])}}});const Va=Oe(Ma,[["__scopeId","data-v-17b719c3"]]);export{Va as default};
