import{dr as Xt,gx as Gt,aA as Kt,aB as Jt,dx as G,aC as W,dq as Qt,aD as Zt,gT as te,gU as ee}from"./main-0e79698b.js";import{_ as ne}from"./preload-helper-388ac9d5.js";import{d as ie}from"./debounce-31e0cfcc.js";import{g as oe}from"./guid-9426053f.js";function P(t){return t.split("-")[1]}function ct(t){return t==="y"?"height":"width"}function H(t){return t.split("-")[0]}function Y(t){return["top","bottom"].includes(H(t))?"x":"y"}function pt(t,e,n){let{reference:i,floating:o}=t;const r=i.x+i.width/2-o.width/2,s=i.y+i.height/2-o.height/2,a=Y(e),c=ct(a),f=i[c]/2-o[c]/2,m=H(e),l=a==="x";let u;switch(m){case"top":u={x:r,y:i.y-o.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:s};break;case"left":u={x:i.x-o.width,y:s};break;default:u={x:i.x,y:i.y}}switch(P(e)){case"start":u[a]-=f*(n&&l?-1:1);break;case"end":u[a]+=f*(n&&l?-1:1);break}return u}const re=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:o}),{x:m,y:l}=pt(f,i,c),u=i,p={},d=0;for(let v=0;v<a.length;v++){const{name:y,fn:h}=a[v],{x:g,y:w,data:b,reset:x}=await h({x:m,y:l,initialPlacement:i,placement:u,strategy:o,middlewareData:p,rects:f,platform:s,elements:{reference:t,floating:e}});if(m=g??m,l=w??l,p={...p,[y]:{...p[y],...b}},x&&d<=50){d++,typeof x=="object"&&(x.placement&&(u=x.placement),x.rects&&(f=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:o}):x.rects),{x:m,y:l}=pt(f,u,c)),v=-1;continue}}return{x:m,y:l,placement:u,strategy:o,middlewareData:p}};function se(t){return{top:0,right:0,bottom:0,left:0,...t}}function Dt(t){return typeof t!="number"?se(t):{top:t,right:t,bottom:t,left:t}}function it(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function q(t,e){var n;e===void 0&&(e={});const{x:i,y:o,platform:r,rects:s,elements:a,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:l="floating",altBoundary:u=!1,padding:p=0}=e,d=Dt(p),y=a[u?l==="floating"?"reference":"floating":l],h=it(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(y)))==null||n?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:f,rootBoundary:m,strategy:c})),g=l==="floating"?{...s.floating,x:i,y:o}:s.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),b=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},x=it(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:w,strategy:c}):g);return{top:(h.top-x.top+d.top)/b.y,bottom:(x.bottom-h.bottom+d.bottom)/b.y,left:(h.left-x.left+d.left)/b.x,right:(x.right-h.right+d.right)/b.x}}const ae=Math.min,ce=Math.max;function ot(t,e,n){return ce(t,ae(e,n))}const le=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:i=0}=t||{},{x:o,y:r,placement:s,rects:a,platform:c}=e;if(n==null)return{};const f=Dt(i),m={x:o,y:r},l=Y(s),u=ct(l),p=await c.getDimensions(n),d=l==="y"?"top":"left",v=l==="y"?"bottom":"right",y=a.reference[u]+a.reference[l]-m[l]-a.floating[u],h=m[l]-a.reference[l],g=await(c.getOffsetParent==null?void 0:c.getOffsetParent(n));let w=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0;w===0&&(w=a.floating[u]);const b=y/2-h/2,x=f[d],A=w-p[u]-f[v],T=w/2-p[u]/2+b,D=ot(x,T,A),_=P(s)!=null&&T!=D&&a.reference[u]/2-(T<x?f[d]:f[v])-p[u]/2<0?T<x?x-T:A-T:0;return{[l]:m[l]-_,data:{[l]:D,centerOffset:T-D}}}}),Ht=["top","right","bottom","left"],ht=Ht.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),fe={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(t){return t.replace(/left|right|bottom|top/g,e=>fe[e])}function St(t,e,n){n===void 0&&(n=!1);const i=P(t),o=Y(t),r=ct(o);let s=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Q(s)),{main:s,cross:Q(s)}}const ue={start:"end",end:"start"};function Z(t){return t.replace(/start|end/g,e=>ue[e])}function de(t,e,n){return(t?[...n.filter(o=>P(o)===t),...n.filter(o=>P(o)!==t)]:n.filter(o=>H(o)===o)).filter(o=>t?P(o)===t||(e?Z(o)!==o:!1):!0)}const me=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o;const{rects:r,middlewareData:s,placement:a,platform:c,elements:f}=e,{crossAxis:m=!1,alignment:l,allowedPlacements:u=ht,autoAlignment:p=!0,...d}=t,v=l!==void 0||u===ht?de(l||null,p,u):u,y=await q(e,d),h=((n=s.autoPlacement)==null?void 0:n.index)||0,g=v[h];if(g==null)return{};const{main:w,cross:b}=St(g,r,await(c.isRTL==null?void 0:c.isRTL(f.floating)));if(a!==g)return{reset:{placement:v[0]}};const x=[y[H(g)],y[w],y[b]],A=[...((i=s.autoPlacement)==null?void 0:i.overflows)||[],{placement:g,overflows:x}],T=v[h+1];if(T)return{data:{index:h+1,overflows:A},reset:{placement:T}};const D=A.map(E=>{const R=P(E.placement);return[E.placement,R&&m?E.overflows.slice(0,2).reduce((M,S)=>M+S,0):E.overflows[0],E.overflows]}).sort((E,R)=>E[1]-R[1]),_=((o=D.filter(E=>E[2].slice(0,P(E[0])?2:3).every(R=>R<=0))[0])==null?void 0:o[0])||D[0][0];return _!==a?{data:{index:h+1,overflows:A},reset:{placement:_}}:{}}}};function pe(t){const e=Q(t);return[Z(t),e,Z(e)]}function he(t,e,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?r:s;default:return[]}}function ge(t,e,n,i){const o=P(t);let r=he(H(t),n==="start",i);return o&&(r=r.map(s=>s+"-"+o),e&&(r=r.concat(r.map(Z)))),r}const gt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:o,rects:r,initialPlacement:s,platform:a,elements:c}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:l,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:d=!0,...v}=t,y=H(i),h=H(s)===s,g=await(a.isRTL==null?void 0:a.isRTL(c.floating)),w=l||(h||!d?[Q(s)]:pe(s));!l&&p!=="none"&&w.push(...ge(s,d,p,g));const b=[s,...w],x=await q(e,v),A=[];let T=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&A.push(x[y]),m){const{main:E,cross:R}=St(i,r,g);A.push(x[E],x[R])}if(T=[...T,{placement:i,overflows:A}],!A.every(E=>E<=0)){var D,X;const E=(((D=o.flip)==null?void 0:D.index)||0)+1,R=b[E];if(R)return{data:{index:E,overflows:T},reset:{placement:R}};let M=(X=T.filter(S=>S.overflows[0]<=0).sort((S,N)=>S.overflows[1]-N.overflows[1])[0])==null?void 0:X.placement;if(!M)switch(u){case"bestFit":{var _;const S=(_=T.map(N=>[N.placement,N.overflows.filter(z=>z>0).reduce((z,Yt)=>z+Yt,0)]).sort((N,z)=>N[1]-z[1])[0])==null?void 0:_[0];S&&(M=S);break}case"initialPlacement":M=s;break}if(i!==M)return{reset:{placement:M}}}return{}}}};function vt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function wt(t){return Ht.some(e=>t[e]>=0)}const ve=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...i}=t,{rects:o}=e;switch(n){case"referenceHidden":{const r=await q(e,{...i,elementContext:"reference"}),s=vt(r,o.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:wt(s)}}}case"escaped":{const r=await q(e,{...i,altBoundary:!0}),s=vt(r,o.floating);return{data:{escapedOffsets:s,escaped:wt(s)}}}default:return{}}}}};async function we(t,e){const{placement:n,platform:i,elements:o}=t,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=H(n),a=P(n),c=Y(n)==="x",f=["left","top"].includes(s)?-1:1,m=r&&c?-1:1,l=typeof e=="function"?e(t):e;let{mainAxis:u,crossAxis:p,alignmentAxis:d}=typeof l=="number"?{mainAxis:l,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...l};return a&&typeof d=="number"&&(p=a==="end"?d*-1:d),c?{x:p*m,y:u*f}:{x:u*f,y:p*m}}const xe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,o=await we(e,t);return{x:n+o.x,y:i+o.y,data:o}}}};function ye(t){return t==="x"?"y":"x"}const be=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:h,y:g}=y;return{x:h,y:g}}},...c}=t,f={x:n,y:i},m=await q(e,c),l=Y(H(o)),u=ye(l);let p=f[l],d=f[u];if(r){const y=l==="y"?"top":"left",h=l==="y"?"bottom":"right",g=p+m[y],w=p-m[h];p=ot(g,p,w)}if(s){const y=u==="y"?"top":"left",h=u==="y"?"bottom":"right",g=d+m[y],w=d-m[h];d=ot(g,d,w)}const v=a.fn({...e,[l]:p,[u]:d});return{...v,data:{x:v.x-n,y:v.y-i}}}}};function C(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){return C(t).getComputedStyle(t)}const xt=Math.min,$=Math.max,tt=Math.round;function Ft(t){const e=L(t);let n=parseFloat(e.width),i=parseFloat(e.height);const o=t.offsetWidth,r=t.offsetHeight,s=tt(n)!==o||tt(i)!==r;return s&&(n=o,i=r),{width:n,height:i,fallback:s}}function F(t){return _t(t)?(t.nodeName||"").toLowerCase():""}let K;function Bt(){if(K)return K;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(K=t.brands.map(e=>e.brand+"/"+e.version).join(" "),K):navigator.userAgent}function k(t){return t instanceof C(t).HTMLElement}function O(t){return t instanceof C(t).Element}function _t(t){return t instanceof C(t).Node}function yt(t){if(typeof ShadowRoot>"u")return!1;const e=C(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function et(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function Ee(t){return["table","td","th"].includes(F(t))}function lt(t){const e=/firefox/i.test(Bt()),n=L(t),i=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||(i?i!=="none":!1)||e&&n.willChange==="filter"||e&&(n.filter?n.filter!=="none":!1)||["transform","perspective"].some(o=>n.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const r=n.contain;return r!=null?r.includes(o):!1})}function ft(){return/^((?!chrome|android).)*safari/i.test(Bt())}function ut(t){return["html","body","#document"].includes(F(t))}function Mt(t){return O(t)?t:t.contextElement}const It={x:1,y:1};function V(t){const e=Mt(t);if(!k(e))return It;const n=e.getBoundingClientRect(),{width:i,height:o,fallback:r}=Ft(e);let s=(r?tt(n.width):n.width)/i,a=(r?tt(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}function I(t,e,n,i){var o,r;e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),a=Mt(t);let c=It;e&&(i?O(i)&&(c=V(i)):c=V(t));const f=a?C(a):window,m=ft()&&n;let l=(s.left+(m&&((o=f.visualViewport)==null?void 0:o.offsetLeft)||0))/c.x,u=(s.top+(m&&((r=f.visualViewport)==null?void 0:r.offsetTop)||0))/c.y,p=s.width/c.x,d=s.height/c.y;if(a){const v=C(a),y=i&&O(i)?C(i):i;let h=v.frameElement;for(;h&&i&&y!==v;){const g=V(h),w=h.getBoundingClientRect(),b=getComputedStyle(h);w.x+=(h.clientLeft+parseFloat(b.paddingLeft))*g.x,w.y+=(h.clientTop+parseFloat(b.paddingTop))*g.y,l*=g.x,u*=g.y,p*=g.x,d*=g.y,l+=w.x,u+=w.y,h=C(h).frameElement}}return{width:p,height:d,top:u,right:l+p,bottom:u+d,left:l,x:l,y:u}}function B(t){return((_t(t)?t.ownerDocument:t.document)||window.document).documentElement}function nt(t){return O(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Te(t){let{rect:e,offsetParent:n,strategy:i}=t;const o=k(n),r=B(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},a={x:1,y:1};const c={x:0,y:0};if((o||!o&&i!=="fixed")&&((F(n)!=="body"||et(r))&&(s=nt(n)),k(n))){const f=I(n);a=V(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-s.scrollLeft*a.x+c.x,y:e.y*a.y-s.scrollTop*a.y+c.y}}function Nt(t){return I(B(t)).left+nt(t).scrollLeft}function Ce(t){const e=B(t),n=nt(t),i=t.ownerDocument.body,o=$(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=$(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Nt(t);const a=-n.scrollTop;return L(i).direction==="rtl"&&(s+=$(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:a}}function j(t){if(F(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yt(t)&&t.host||B(t);return yt(e)?e.host:e}function Vt(t){const e=j(t);return ut(e)?e.ownerDocument.body:k(e)&&et(e)?e:Vt(e)}function U(t,e){var n;e===void 0&&(e=[]);const i=Vt(t),o=i===((n=t.ownerDocument)==null?void 0:n.body),r=C(i);return o?e.concat(r,r.visualViewport||[],et(i)?i:[]):e.concat(i,U(i))}function Ae(t,e){const n=C(t),i=B(t),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,c=0;if(o){r=o.width,s=o.height;const f=ft();(!f||f&&e==="fixed")&&(a=o.offsetLeft,c=o.offsetTop)}return{width:r,height:s,x:a,y:c}}function Oe(t,e){const n=I(t,!0,e==="fixed"),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=k(t)?V(t):{x:1,y:1},s=t.clientWidth*r.x,a=t.clientHeight*r.y,c=o*r.x,f=i*r.y;return{width:s,height:a,x:c,y:f}}function bt(t,e,n){let i;if(e==="viewport")i=Ae(t,n);else if(e==="document")i=Ce(B(t));else if(O(e))i=Oe(e,n);else{const s={...e};if(ft()){var o,r;const a=C(t);s.x-=((o=a.visualViewport)==null?void 0:o.offsetLeft)||0,s.y-=((r=a.visualViewport)==null?void 0:r.offsetTop)||0}i=s}return it(i)}function Re(t,e){const n=e.get(t);if(n)return n;let i=U(t).filter(a=>O(a)&&F(a)!=="body"),o=null;const r=L(t).position==="fixed";let s=r?j(t):t;for(;O(s)&&!ut(s);){const a=L(s),c=lt(s);a.position==="fixed"?o=null:(r?!c&&!o:!c&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position))?i=i.filter(l=>l!==s):o=a,s=j(s)}return e.set(t,i),i}function Pe(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const s=[...n==="clippingAncestors"?Re(e,this._c):[].concat(n),i],a=s[0],c=s.reduce((f,m)=>{const l=bt(e,m,o);return f.top=$(l.top,f.top),f.right=xt(l.right,f.right),f.bottom=xt(l.bottom,f.bottom),f.left=$(l.left,f.left),f},bt(e,a,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Le(t){return k(t)?Ft(t):t.getBoundingClientRect()}function Et(t,e){return!k(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function ke(t){let e=j(t);for(;k(e)&&!ut(e);){if(lt(e))return e;e=j(e)}return null}function Tt(t,e){const n=C(t);let i=Et(t,e);for(;i&&Ee(i)&&L(i).position==="static";)i=Et(i,e);return i&&(F(i)==="html"||F(i)==="body"&&L(i).position==="static"&&!lt(i))?n:i||ke(t)||n}function De(t,e,n){const i=k(e),o=B(e),r=I(t,!0,n==="fixed",e);let s={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(i||!i&&n!=="fixed")if((F(e)!=="body"||et(o))&&(s=nt(e)),k(e)){const c=I(e,!0);a.x=c.x+e.clientLeft,a.y=c.y+e.clientTop}else o&&(a.x=Nt(o));return{x:r.left+s.scrollLeft-a.x,y:r.top+s.scrollTop-a.y,width:r.width,height:r.height}}const rt={getClippingRect:Pe,convertOffsetParentRelativeRectToViewportRelativeRect:Te,isElement:O,getDimensions:Le,getOffsetParent:Tt,getDocumentElement:B,getScale:V,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t;const o=this.getOffsetParent||Tt,r=this.getDimensions;return{reference:De(e,await o(n),i),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>L(t).direction==="rtl"};function He(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=!0,animationFrame:a=!1}=i,c=o&&!a,f=c||r?[...O(t)?U(t):t.contextElement?U(t.contextElement):[],...U(e)]:[];f.forEach(d=>{c&&d.addEventListener("scroll",n,{passive:!0}),r&&d.addEventListener("resize",n)});let m=null;if(s){let d=!0;m=new ResizeObserver(()=>{d||n(),d=!1}),O(t)&&!a&&m.observe(t),!O(t)&&t.contextElement&&!a&&m.observe(t.contextElement),m.observe(e)}let l,u=a?I(t):null;a&&p();function p(){const d=I(t);u&&(d.x!==u.x||d.y!==u.y||d.width!==u.width||d.height!==u.height)&&n(),u=d,l=requestAnimationFrame(p)}return n(),()=>{var d;f.forEach(v=>{c&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),(d=m)==null||d.disconnect(),m=null,a&&cancelAnimationFrame(l)}}const Se=(t,e,n)=>{const i=new Map,o={platform:rt,...n},r={...o.platform,_c:i};return re(t,e,{...o,platform:r})},Fe=globalThis.calciteComponentsConfig,Be={floatingUINonChromiumPositioningFix:!0,...Fe},_e=Me();async function Me(){function t(){return navigator.userAgentData}function e(){const i=t();return i?.brands?i.brands.map(({brand:o,version:r})=>`${o}/${r}`).join(" "):navigator.userAgent}function n(){const i=t();return i?.brands?!!i.brands.find(({brand:o,version:r})=>(o==="Google Chrome"||o==="Chromium")&&Number(r)>=109):!!navigator.userAgent.split(" ").find(o=>{const[r,s]=o.split("/");return r==="Chrome"&&parseInt(s)>=109})}if(Be.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test(e())||n())){const{offsetParent:i}=await ne(()=>import("./utils4-dd22d174.js"),[],import.meta.url),o=rt.getOffsetParent;rt.getOffsetParent=r=>o(r,i)}}const zt="data-placement",Ct=100,At=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],st={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Ie({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:i,offsetSkidding:o,arrowEl:r,type:s}){const a=[be(),ve()];if(s==="menu")return[...a,gt({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(s==="popover"||s==="tooltip"){const c=[...a,xe({mainAxis:typeof i=="number"?i:0,crossAxis:typeof o=="number"?o:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?c.push(me({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||c.push(gt(n?{fallbackPlacements:n}:{})),r&&c.push(le({element:r})),c}return[]}function on(t,e){const n=t.filter(i=>At.includes(i));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${At.map(i=>`"${i}"`).join(", ").trim()}`,{el:e}),n}function Ne(t,e){const n=["left","right"];return Xt(t)==="rtl"&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function Ve(t,e,n=!1){if(t.open)return n?ze(e):Wt(e)}const ze=ie(Wt,Ct,{leading:!0,maxWait:Ct});async function Wt({referenceEl:t,floatingEl:e,overlayPositioning:n="absolute",placement:i,flipDisabled:o,flipPlacements:r,offsetDistance:s,offsetSkidding:a,includeArrow:c=!1,arrowEl:f,type:m}){if(!t||!e||c&&!f)return null;await _e;const{x:l,y:u,placement:p,strategy:d,middlewareData:v}=await Se(t,e,{strategy:n,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:Ne(e,i),middleware:Ie({placement:i,flipDisabled:o,flipPlacements:r,offsetDistance:s,offsetSkidding:a,arrowEl:f,type:m})});if(v?.arrow){const{x:b,y:x}=v.arrow;Object.assign(f.style,{left:b!=null?`${b}px`:"",top:x!=null?`${x}px`:""})}const h=v?.hide?.referenceHidden?"hidden":null,g=h?"none":null;e.setAttribute(zt,p);const w=`translate(${Math.round(l)}px,${Math.round(u)}px)`;Object.assign(e.style,{visibility:h,pointerEvents:g,position:d,top:"0",left:"0",transform:w})}const at=new WeakMap;function We(t,e,n){if(!n||!e)return;$t(t,e,n);const i=t.overlayPositioning;Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:i}),i==="absolute"&&Ut(n);const o=He;at.set(t,o(e,n,()=>t.reposition()))}function $t(t,e,n){if(!n||!e)return;dt(n).removeEventListener("transitionend",mt);const i=at.get(t);i&&i(),at.delete(t)}const Ot=4,$e=Math.ceil(Math.hypot(Ot,Ot));function Ue(t){!t||t.style.position!=="absolute"||dt(t).addEventListener("transitionend",mt)}function dt(t){return t.shadowRoot||t}function mt(t){const e=t.target;if(t.propertyName==="opacity"&&e.classList.contains(st.animation)){const n=qe(e);Ut(n),dt(n).removeEventListener("transitionend",mt)}}function Ut(t){t.style.transform="",t.style.top="0",t.style.left="0"}function qe(t){return Gt(t,`[${zt}]`)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const J=new WeakMap;function je(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function Ye(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function Rt(t){if(qt(t),t.transitionEl){const e=je.bind(t),n=Ye.bind(t);J.set(t,[t.transitionEl,e,n]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",n)}}function qt(t){if(!J.has(t))return;const[e,n,i]=J.get(t);e.removeEventListener("transitionstart",n),e.removeEventListener("transitionend",i),J.delete(t)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const Pt={container:"container",arrow:"arrow"},Xe=500,Lt="aria-describedby";function jt(t){const{referenceElement:e}=t;return(typeof e=="string"?te(t,{id:e}):e)||null}class Ge{constructor(){this.registeredElements=new WeakMap,this.hoverTimeout=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:n}=this,i=e.find(o=>n.has(o));return n.get(i)},this.keyDownHandler=e=>{if(e.key==="Escape"&&!e.defaultPrevented){const{activeTooltipEl:n}=this;if(n&&n.open){this.clearHoverTimeout(),this.toggleTooltip(n,!1);const i=jt(n);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.queryHoveredTooltip=e=>{const{activeTooltipEl:n}=this;if(n&&e.includes(n)){this.clearHoverTimeout();return}const i=this.queryTooltip(e);i?this.toggleHoveredTooltip(i,!0):n&&this.toggleHoveredTooltip(n,!1)},this.pointerMoveHandler=e=>{const n=e.composedPath();this.clearHoverTimeout(),this.hoverTimeout=window.setTimeout(()=>this.queryHoveredTooltip(n),Xe)},this.pointerDownHandler=e=>{if(!ee(e))return;const n=this.queryTooltip(e.composedPath());this.clickedTooltip=n,n?.closeOnClick&&(this.toggleTooltip(n,!1),this.clearHoverTimeout())},this.focusInHandler=e=>{this.queryFocusedTooltip(e,!0)},this.focusOutHandler=e=>{this.queryFocusedTooltip(e,!1)},this.toggleHoveredTooltip=(e,n)=>{n&&this.closeExistingTooltip(),this.toggleTooltip(e,n)}}registerElement(e,n){this.registeredElementCount++,this.registeredElements.set(e,n),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:!0}),document.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.addEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.addEventListener("focusin",this.focusInHandler,{capture:!0}),document.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.removeEventListener("focusin",this.focusInHandler,{capture:!0}),document.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverTimeout(){window.clearTimeout(this.hoverTimeout)}closeExistingTooltip(){const{activeTooltipEl:e}=this;e&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,n){this.closeExistingTooltip(),n&&this.clearHoverTimeout(),this.toggleTooltip(e,n)}toggleTooltip(e,n){e.open=n,n&&(this.activeTooltipEl=e)}queryFocusedTooltip(e,n){const i=this.queryTooltip(e.composedPath());if(!i||i===this.clickedTooltip){this.clickedTooltip=null;return}this.toggleFocusedTooltip(i,n)}}const Ke='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}',kt=new Ge,Je=Kt(class extends Jt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=G(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=G(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=G(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=G(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${oe()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=t=>{this.transitionEl=t,Rt(this)},this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=jt(this.el),We(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:n,effectiveReferenceElement:i}=this;t&&n&&!i&&console.warn(`${e.tagName}: reference-element id "${n}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();"setAttribute"in t&&t.setAttribute(Lt,e),kt.registerElement(t,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&t.removeAttribute(Lt),kt.unregisterElement(t))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=$e,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(t){t?this.reposition(!0):Ue(this.el)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){Rt(this),this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),$t(this,this.effectiveReferenceElement,this.el),qt(this)}async reposition(t=!1){const{el:e,effectiveReferenceElement:n,placement:i,overlayPositioning:o,offsetDistance:r,offsetSkidding:s,arrowEl:a}=this;return Ve(this,{floatingEl:e,referenceEl:n,overlayPositioning:o,placement:i,offsetDistance:r,offsetSkidding:s,includeArrow:!0,arrowEl:a,type:"tooltip"},t)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:t,label:e,open:n}=this,i=t&&n,o=!i;return W(Zt,{"aria-hidden":Qt(o),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":o,id:this.getId(),role:"tooltip"},W("div",{class:{[st.animation]:!0,[st.animationActive]:i},ref:this.setTransitionEl},W("div",{class:Pt.arrow,ref:r=>this.arrowEl=r}),W("div",{class:Pt.container},W("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return Ke}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],reposition:[64]}]);function Qe(){if(typeof customElements>"u")return;["calcite-tooltip"].forEach(e=>{switch(e){case"calcite-tooltip":customElements.get(e)||customElements.define(e,Je);break}})}Qe();export{st as F,Je as T,We as a,$e as b,Rt as c,Qe as d,$t as e,on as f,qt as g,Ve as r,Ue as u};
