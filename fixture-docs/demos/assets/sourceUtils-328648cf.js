import{_ as p}from"./preload-helper-388ac9d5.js";import{jq as g,jr as y,jp as w,iV as I,js as _,dt as f,b as m}from"./main-5cf1c59e.js";class b{constructor(){this.code=null,this.description=null}}class j{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new j(e)}class v{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function F(e){return new v(e)}const l=new Set;function G(e,t,n,h=!1,u){l.clear();for(const r in n){const i=e.get(r);if(!i)continue;const a=n[r],s=q(i,a);if(s!==a&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:a,sanitizedValue:s}}),l.add(i.name),i&&(h||i.editable)){const c=g(i,s);if(c)return d(y(c,i,s));t[i.name]=s}}for(const r of e?.requiredFields??[])if(!l.has(r.name))return d(`missing required field "${r.name}"`);return null}function q(e,t){let n=t;return typeof t=="string"&&w(e)?n=parseFloat(t):t!=null&&I(e)&&typeof t!="string"&&(n=String(t)),_(n)}let o;function S(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(m(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function P(){return m(o)&&(o=await p(()=>import("./geometryEngineJSON-1fb2e5fd.js"),["./geometryEngineJSON-1fb2e5fd.js","./geometryEngineBase-807394fe.js","./geometryEngineJSON-24dd3ed7.js","./json-48e3ea08.js"],import.meta.url)),o}async function T(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await P()}export{d as a,F as f,S as g,G as m,T as w};