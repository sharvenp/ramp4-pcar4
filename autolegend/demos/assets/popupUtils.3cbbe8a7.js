import{e as l,i as c,fc as h,e_ as I}from"./main.4cbfea05.js";async function x(e,p=e.popupTemplate){if(c(p))return[];const i=await p.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:o}=p,{objectIdField:t,typeIdField:n,globalIdField:a,relationships:u}=e;if(i.includes("*"))return["*"];const f=o?await h(e):[],s=I(e.fieldsIndex,[...i,...f]);return n&&s.push(n),s&&t&&e.fieldsIndex.has(t)&&!s.includes(t)&&s.push(t),s&&a&&e.fieldsIndex.has(a)&&!s.includes(a)&&s.push(a),u&&u.forEach(r=>{const{keyField:d}=r;s&&d&&e.fieldsIndex.has(d)&&!s.includes(d)&&s.push(d)}),s}function T(e,p){return e.popupTemplate?e.popupTemplate:l(p)&&p.defaultPopupTemplateEnabled&&l(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{x as d,T as s};
