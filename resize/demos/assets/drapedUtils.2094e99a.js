import{M as m,e as x,dh as p}from"./main.33d7d020.js";function u(e,n){return n?"xoffset"in n&&n.xoffset?Math.max(e,Math.abs(n.xoffset)):"yoffset"in n&&n.yoffset?Math.max(e,Math.abs(n.yoffset||0)):e:e}function M(e){let n=0,s=0;for(let r=0;r<e.length;r++){const t=e[r].size;typeof t=="number"&&(n+=t,s++)}return n/s}function c(e,n){return typeof e=="number"?e:e&&e.stops&&e.stops.length?M(e.stops):n}function b(e,n){if(!n)return e;const s=n.filter(i=>i.type==="size").map(i=>{const{maxSize:f,minSize:o}=i;return(c(f,e)+c(o,e))/2});let r=0;const t=s.length;if(t===0)return e;for(let i=0;i<t;i++)r+=s[i];const a=Math.floor(r/t);return Math.max(a,e)}function v(e){const n=e&&e.renderer,s=(e&&e.event&&e.event.pointerType)==="touch"?9:6;if(!n)return s;const r="visualVariables"in n?b(s,n.visualVariables):s;if(n.type==="simple")return u(r,n.symbol);if(n.type==="unique-value"){let t=r;return n.uniqueValueInfos.forEach(a=>{t=u(t,a.symbol)}),t}if(n.type==="class-breaks"){let t=r;return n.classBreakInfos.forEach(a=>{t=u(t,a.symbol)}),t}return n.type==="dot-density"||n.type,r}function z(e,n,s,r=new m){let t;if(s.type==="2d")t=n*s.resolution;else if(s.type==="3d"){const h=s.overlayPixelSizeInMapUnits(e),l=s.basemapSpatialReference;t=x(l)&&!l.equals(s.spatialReference)?p(l)/p(s.spatialReference):n*h}const a=e.x-t,i=e.y-t,f=e.x+t,o=e.y+t,{spatialReference:y}=s;return r.xmin=Math.min(a,f),r.ymin=Math.min(i,o),r.xmax=Math.max(a,f),r.ymax=Math.max(i,o),r.spatialReference=y,r}new m;export{z as a,v as s};
