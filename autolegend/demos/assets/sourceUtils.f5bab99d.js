import{_ as p}from"./preload-helper.387dac8f.js";import{jc as g,hR as y,jd as w,je as I,jf as _,cK as f,i as h}from"./main.4cbfea05.js";class b{constructor(){this.code=null,this.description=null}}class j{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new j(e)}class v{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function F(e){return new v(e)}const a=new Set;function G(e,t,n,m=!1,u){a.clear();for(const r in n){const i=e.get(r);if(!i)continue;const l=n[r],s=q(i,l);if(s!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:l,sanitizedValue:s}}),a.add(i.name),i&&(m||i.editable)){const c=I(i,s);if(c)return d(_(c,i,s));t[i.name]=s}}for(const r of e.requiredFields)if(!a.has(r.name))return d(`missing required field "${r.name}"`);return null}function q(e,t){let n=t;return typeof t=="string"&&g(e)?n=parseFloat(t):t!=null&&y(e)&&typeof t!="string"&&(n=String(t)),w(n)}let o;function R(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(h(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function P(){return h(o)&&(o=await p(()=>import("./geometryEngineJSON.2762c1dd.js"),["assets/geometryEngineJSON.2762c1dd.js","assets/geometryEngineBase.f43341a0.js","assets/geometryEngineJSON.d3fb0de1.js","assets/json.d1a0fa35.js"])),o}async function S(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await P()}export{d as a,F as f,R as g,G as m,S as w};
