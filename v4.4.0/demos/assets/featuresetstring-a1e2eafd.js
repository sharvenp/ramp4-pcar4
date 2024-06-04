import{B as o,z as s,a5 as T,l as u,r as m,G as c,a6 as w,a7 as A,b as f,Q as p,a8 as g,a9 as x,aa as F,ab as I,ac as O,y as j,ad as D,ae as y}from"./arcadeUtils-cccf1f41.js";import{t as v,e as l}from"./executionError-c1d13a98.js";import"./main-0e79698b.js";import"./preload-helper-388ac9d5.js";import"./arcadeTimeUtils-f3c3ba23.js";import"./number-6c754bee.js";function b(a,e){return a&&a.domain?a.domain.type==="coded-value"||a.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:y[a.field.type],codedValues:a.domain.codedValues.map(t=>({name:t.name,code:t.code}))},p(e)):f.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:y[a.field.type],min:a.domain.min,max:a.domain.max},p(e)):null}function Z(a){a.mode==="async"&&(a.functions.domain=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,3,e,t),s(n[0]))return b(T(n[0],m(n[1]),n[2]===void 0?void 0:u(n[2])),e);if(c(n[0]))return await n[0]._ensureLoaded(),b(w(m(n[1]),n[0],null,n[2]===void 0?void 0:u(n[2])),e);throw new v(e,l.InvalidParameter,t)})},a.functions.subtypes=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0])){const r=A(n[0]);return r?f.convertObjectToArcadeDictionary(r,p(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypes();return r?f.convertObjectToArcadeDictionary(r,p(e)):null}throw new v(e,l.InvalidParameter,t)})},a.functions.domainname=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return g(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const r=w(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return x(r,n[2])}throw new v(e,l.InvalidParameter,t)})},a.signatures.push({name:"domainname",min:2,max:4}),a.functions.domaincode=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return F(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const r=w(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return I(r,n[2])}throw new v(e,l.InvalidParameter,t)})},a.signatures.push({name:"domaincode",min:2,max:4})),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,(i,d,n)=>{if(o(n,1,2,e,t),!c(n[0]))return O(n[0],n[1]);{const r=j(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},a.functions.gdbversion=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new v(e,l.InvalidParameter,t)})},a.functions.schema=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),c(n[0]))return await n[0].load(),f.convertObjectToArcadeDictionary(n[0].schema(),p(e));if(s(n[0])){const r=D(n[0]);return r?f.convertObjectToArcadeDictionary(r,p(e)):null}throw new v(e,l.InvalidParameter,t)})}}export{Z as registerFunctions};