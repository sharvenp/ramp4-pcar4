import{e as c,y as f,n as S,R as h,cq as m,k_ as d,bK as w,fu as R,U as $,k$ as v,a7 as u,f as l,C as J}from"./main-5cf1c59e.js";import"./preload-helper-388ac9d5.js";let i=class extends h{constructor(t){super(t),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map(n=>n.toJSON()),r=this.geometries[0],e={};return e.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),e.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:m(r),geometries:t}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(e.transformForward=this.transformForward),e}};c([f()],i.prototype,"geometries",void 0),c([f({json:{read:{source:"outSR"}}})],i.prototype,"outSpatialReference",void 0),c([f()],i.prototype,"transformation",void 0),c([f()],i.prototype,"transformForward",void 0),i=c([S("esri.rest.support.ProjectParameters")],i);const p=i,N=d(p);async function O(o,t,r){t=N(t);const e=w(o),n={...e.query,f:"json",...t.toJSON()},s=t.outSpatialReference,a=m(t.geometries[0]),g=R(n,r);return $(e.path+"/project",g).then(({data:{geometries:y}})=>v(y,a,s))}async function j(o=null,t){if(u.geometryServiceUrl)return u.geometryServiceUrl;if(!o)throw new l("internal:geometry-service-url-not-configured");let r;r="portal"in o?o.portal||J.getDefault():o,await r.load({signal:t});const e=r.helperServices?.geometry?.url;if(!e)throw new l("internal:geometry-service-url-not-configured");return e}async function b(o,t,r=null,e){const n=await j(r,e),s=new p;s.geometries=[o],s.outSpatialReference=t;const a=await O(n,s,{signal:e});if(a&&Array.isArray(a)&&a.length===1)return a[0];throw new l("internal:geometry-service-projection-failed")}export{j as getGeometryServiceURL,b as projectGeometry};
