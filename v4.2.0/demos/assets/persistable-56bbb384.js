import{_ as P}from"./preload-helper-388ac9d5.js";import{i as N}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{e3 as x,e4 as _,e5 as O,e6 as d,e7 as R,e8 as b,e9 as $,ea as F,eb as y,ec as S,ed as j,V as J,aF as A,ee as E}from"./main-66d02e41.js";import{t as f}from"./resourceExtension-0fcce5c5.js";function C(e){const r=e?.origins??[void 0];return(o,n)=>{const s=T(e,o,n);for(const a of r){const i=x(o,a,n);for(const t in s)i[t]=s[t]}}}function T(e,r,o){if(e?.type==="resource")return V(e,r,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=E;return{read:n,write:s}}}}function V(e,r,o){const n=_(r,o);return{type:String,read:(s,a,i)=>{const t=O(s,a,i);return n.type===String?t:typeof n.type=="function"?new n.type({url:t}):void 0},write:{writer(s,a,i,t){if(!t||!t.resources)return typeof s=="string"?void(a[i]=d(s,t)):void(a[i]=s.write({},t));const l=L(s),p=d(l,{...t,verifyItemRelativeUrls:t&&t.verifyItemRelativeUrls?{writtenUrls:t.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},R.NO),c=n.type!==String&&(!N(this)||t&&t.origin&&this.originIdOf(o)>b(t.origin)),u={object:this,propertyName:o,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:t,params:e};t&&t.portalItem&&p&&!$(p)?c?B(u):D(u):t&&t.portalItem&&(p==null||F(p)!=null||y(p)||c)?g(u):a[i]=p}}}}function g(e){const{targetUrl:r,params:o,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const t=S(r),l=t?.filename??j(),p=o?.prefix??t?.prefix,c=v(n,r,s),u=J(p,l),U=`${u}.${f(c)}`,m=s.portalItem.resourceFromPath(U);y(r)&&s.resources&&s.resources.pendingOperations.push(K(r).then(I=>{m.path=`${u}.${f(I)}`,a[i]=m.itemRelativeUrl}).catch(()=>{}));const w=o?.compress??!1;s.resources&&h({...e,resource:m,content:c,compress:w,updates:s.resources.toAdd}),a[i]=m.itemRelativeUrl}function B(e){const{context:r,targetUrl:o,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!r.portalItem)return;const t=r.portalItem.resourceFromPath(o),l=v(s,o,r),p=f(l),c=A(t.path),u=n?.compress??!1;p===c?(r.resources&&h({...e,resource:t,content:l,compress:u,updates:r.resources.toUpdate}),a[i]=o):g(e)}function D({context:e,targetUrl:r,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function h({object:e,propertyName:r,updates:o,resource:n,content:s,compress:a}){o.push({resource:n,content:s,compress:a,finish:i=>{Y(e,r,i)}})}function v(e,r,o){return typeof e=="string"?{url:r}:new Blob([JSON.stringify(e.toJSON(o))],{type:"application/json"})}async function K(e){const r=(await P(()=>import("./main-66d02e41.js").then(n=>n.oF),["./main-66d02e41.js","./preload-helper-388ac9d5.js","./main-a1b2c4c4.css"],import.meta.url)).default,{data:o}=await r(e,{responseType:"blob"});return o}function L(e){return e==null?null:typeof e=="string"?e:e.url}function Y(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{C as g};