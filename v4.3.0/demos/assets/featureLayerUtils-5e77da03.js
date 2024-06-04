import{p as K,x as m,q as F,c as n,u as f,z as D,H as R,E as q,t as z,A as B,B as C,C as G,r as $,D as M,F as g,G as d,I as U}from"./main-83b7c6ef.js";import{i as w}from"./originUtils-1469eeaf.js";import{r as Y}from"./fetchService-adb34096.js";import{o as v}from"./jsonContext-d3cd7e5a.js";import"./preload-helper-388ac9d5.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";const _=K.getLogger("esri.layers.FeatureLayer"),c="Feature Service";function y(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function E(a,e){if(e.type!==c)throw new n("feature-layer:portal-item-wrong-type",y(a,`should have portal item of type "${c}"`))}async function J(a){if(await a.load(),F(a))throw new n("feature-layer:save",y(a,"using an in-memory source cannot be saved to a portal item"))}function j(a,e){let r=(a.messages??[]).filter(({type:t})=>t==="error").map(({name:t,message:s,details:o})=>new n(t,s,o));if(e?.ignoreUnsupported&&(r=r.filter(({name:t})=>t!=="layer:unsupported"&&t!=="symbol:unsupported"&&t!=="symbol-layer:unsupported"&&t!=="property:unsupported"&&t!=="url:unsupported")),r.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function h(a,e,r){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const t=a.write({},e);return j(e,r),t}function N(a){const{layer:e,layerJSON:r}=a;return e.isTable?{layers:[],tables:[r]}:{layers:[r],tables:[]}}function b(a){f(a,d.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,r,t)=>t.indexOf(e)===r))}function H(a){const e=a.portalItem;if(!e)throw _.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",y(a,"requires the portalItem property to be set"));if(!e.loaded)throw new n("feature-layer:portal-item-not-loaded",y(a,"cannot be saved to a portal item that does not exist or is inaccessible"));E(a,e)}async function O(a,e){return/\/\d+\/?$/.test(a.url??"")?N(e[0]):k(a,e)}async function k(a,e){const{layer:{url:r,customParameters:t,apiKey:s}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await Q(o,{url:r??"",customParameters:t,apiKey:s},e.map(l=>l.layer.layerId)));for(const l of e)P(l.layer,l.layerJSON,o);return o}async function Q(a,e,r){var t,s;a||(a={}),(t=a).layers||(t.layers=[]),(s=a).tables||(s.tables=[]);const{url:o,customParameters:l,apiKey:i}=e,{serviceJSON:u,layersJSON:p}=await Y(o,{customParameters:l,apiKey:i}),I=A(a.layers,u.layers,r),S=A(a.tables,u.tables,r);a.layers=I.itemResources,a.tables=S.itemResources;const T=[...I.added,...S.added],L=p?[...p.layers,...p.tables]:[];return await V(a,T,o,L),a}function A(a,e,r){const t=D(a,e,(o,l)=>o.id===l.id);a=a.filter(o=>!t.removed.some(l=>l.id===o.id));const s=t.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!r.includes(o))}}async function V(a,e,r,t){const s=e.map(({id:o})=>new R({url:r,layerId:o,sourceJSON:t.find(({id:l})=>l===o)}));await q(s.map(o=>o.load())),s.forEach(o=>{const{layerId:l,loaded:i,defaultPopupTemplate:u}=o;!i||z(u)||P(o,{id:l,popupInfo:u.toJSON()},a)})}function P(a,e,r){a.isTable?x(r.tables,e):x(r.layers,e)}function x(a,e){if(!a)return;const r=a.findIndex(({id:t})=>t===e.id);r===-1?a.push(e):a[r]=e}function W(a){const{portalItem:e}=a;return U(a)&&!a.dynamicDataSource&&!!e?.loaded&&e.type===c}async function X(a){if(!a?.length)throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(t=>t.load()));for(const t of a)if(!W(t))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${y(t,"does not conform")}`,{layer:t});const e=a.map(t=>t.portalItem.id);if(new Set(e).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const r=a.map(t=>t.layerId);if(new Set(r).size!==r.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Z(a,e){var r,t;let s=B.from(e);return s.id&&(s=s.clone(),s.id=null),(r=s).type??(r.type=c),(t=s).portal??(t.portal=C.getDefault()),E(a,s),s}async function aa(a,e){const{url:r,layerId:t,title:s,fullExtent:o,isTable:l}=a,i=G(r),u=$(i)&&i.serverType==="FeatureServer";e.url=u?r:`${r}/${t}`,e.title||(e.title=s),e.extent=null,!l&&$(o)&&(e.extent=await M(o)),g(e,d.METADATA),g(e,d.MULTI_LAYER),f(e,d.SINGLE_LAYER),l&&f(e,d.TABLE),b(e)}async function ea(a,e,r){const t=a.portal;await t?.signIn(),await t?.user?.addItem({item:a,data:e,folder:r?.folder})}const da=m(ta);async function ta(a,e){await J(a),H(a);const r=a.portalItem,t=v(r),s=await h(a,t,e),o=await O(r,[{layer:a,layerJSON:s}]);return b(r),await r.update({data:o}),w(t),r}const ya=m(async(a,e)=>{await X(a);const r=a[0].portalItem,t=v(r),s=await Promise.all(a.map(l=>h(l,t,e))),o=await O(r,a.map((l,i)=>({layer:l,layerJSON:s[i]})));return b(r),await r.update({data:o}),await Promise.all(a.slice(1).map(l=>l.portalItem.reload())),w(t),r.clone()}),ca=m(ra);async function ra(a,e,r){await J(a);const t=Z(a,e),s=v(t),o=N({layer:a,layerJSON:await h(a,s,r)});return await aa(a,t),await ea(t,o,r),a.portalItem=t,w(s),t}export{da as save,ya as saveAll,ca as saveAs};
