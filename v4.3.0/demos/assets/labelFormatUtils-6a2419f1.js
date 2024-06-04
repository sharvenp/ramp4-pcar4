import{_ as y}from"./preload-helper-388ac9d5.js";import{p as g,eC as h,eD as w,t as v,c as p,eE as b,cX as x,eF as _,eG as E,eH as F}from"./main-83b7c6ef.js";const d=g.getLogger("esri.layers.support.labelFormatUtils"),m={type:"simple",evaluate:()=>null},V={getAttribute:(a,n)=>a.field(n)};async function $(a,n,e){if(!a||!a.symbol||!n)return m;const u=a.where,s=h(a),o=u?await y(()=>import("./WhereClause-3ab5e03d.js").then(r=>r.W),["./WhereClause-3ab5e03d.js","./main-83b7c6ef.js","./preload-helper-388ac9d5.js","./main-a75f83d6.css","./executionError-c1d13a98.js"],import.meta.url):null;let l;if(s.type==="arcade"){const r=await w(s.expression,e,n);if(v(r))return m;l={type:"arcade",evaluate(i){try{const t=r.evaluate({$feature:"attributes"in i?r.repurposeFeature(i):i});if(t!=null)return t.toString()}catch{d.error(new p("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:i,expression:s}))}return null},needsHydrationToEvaluate:()=>E(s.expression)==null}}else l={type:"simple",evaluate:r=>s.expression.replace(/{[^}]*}/g,i=>{const t=i.slice(1,-1),c=n.get(t);if(!c)return i;let f=null;return"attributes"in r?r&&r.attributes&&(f=r.attributes[c.name]):f=r.field(c.name),f==null?"":L(f,c)})};if(u){let r;try{r=o.WhereClause.create(u,n)}catch(t){return d.error(new p("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:u,error:t})),m}const i=l.evaluate;l.evaluate=t=>{const c="attributes"in t?void 0:V;try{if(r.testFeature(t,c))return i(t)}catch(f){d.error(new p("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:u,feature:t,error:f}))}return null}}return l}function L(a,n){if(a==null)return"";const e=n.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const s=a;for(const o of e.codedValues)if(o.code===s)return o.name}else if(e.type==="range"){const s=+a,o="range"in e?e.range[0]:e.minValue,l="range"in e?e.range[1]:e.maxValue;if(o<=s&&s<=l)return e.name}}let u=a;return n.type==="date"||n.type==="esriFieldTypeDate"?u=b(u,F("short-date")):x(n)&&(u=_(+u)),u||""}export{$ as createLabelFunction,L as formatField};
