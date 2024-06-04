import{_ as g}from"./preload-helper.387dac8f.js";import{a6 as y,mP as h,mQ as w,s as p,mR as v,mS as b,jc as x,mT as _,mU as E}from"./main.efb50b2c.js";const d=y.getLogger("esri.layers.support.labelFormatUtils"),m={type:"simple",evaluate:()=>null},F={getAttribute:(a,s)=>a.field(s)};async function $(a,s,e){if(!a||!a.symbol)return m;const t=a.where,o=h(a),i=t?await g(()=>import("./WhereClause.5a38bf79.js"),["assets/WhereClause.5a38bf79.js","assets/main.efb50b2c.js","assets/main.908c9a86.css","assets/preload-helper.387dac8f.js"]):null;let l;if(o.type==="arcade"){const n=await w(o.expression,e,s);l={type:"arcade",evaluate(u){try{const r=n.evaluate({$feature:"attributes"in u?n.repurposeFeature(u):u});if(r!=null)return r.toString()}catch{d.error(new p("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:u,expression:o}))}return null},needsHydrationToEvaluate:()=>E(o.expression)==null}}else l={type:"simple",evaluate:n=>o.expression.replace(/{[^}]*}/g,u=>{const r=u.slice(1,-1),c=s.get(r);if(!c)return u;let f=null;return"attributes"in n?n&&n.attributes&&(f=n.attributes[c.name]):f=n.field(c.name),f==null?"":V(f,c)})};if(t){let n;try{n=i.WhereClause.create(t,s)}catch(r){return d.error(new p("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:t,error:r})),m}const u=l.evaluate;l.evaluate=r=>{const c="attributes"in r?void 0:F;try{if(n.testFeature(r,c))return u(r)}catch(f){d.error(new p("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:t,feature:r,error:f}))}return null}}return l}function V(a,s){if(a==null)return"";const e=s.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const o=a;for(const i of e.codedValues)if(i.code===o)return i.name}else if(e.type==="range"){const o=+a,i="range"in e?e.range[0]:e.minValue,l="range"in e?e.range[1]:e.maxValue;if(i<=o&&o<=l)return e.name}}let t=a;return s.type==="date"||s.type==="esriFieldTypeDate"?t=v(t,b("short-date")):x(s)&&(t=_(+t)),t||""}export{$ as createLabelFunction,V as formatField};