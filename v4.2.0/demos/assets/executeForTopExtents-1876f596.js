import{b9 as n,ba as m,w as p}from"./main-66d02e41.js";import{p as c}from"./queryTopFeatures-059c278c.js";import"./preload-helper-388ac9d5.js";async function u(o,a,r){const e=n(o),t=await c(e,m.from(a),{...r});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{u as executeForTopExtents};
