import{b9 as n,ba as m,w as p}from"./main-0e79698b.js";import{p as c}from"./queryTopFeatures-c40ebc0d.js";import"./preload-helper-388ac9d5.js";async function u(o,a,r){const e=n(o),t=await c(e,m.from(a),{...r});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{u as executeForTopExtents};
