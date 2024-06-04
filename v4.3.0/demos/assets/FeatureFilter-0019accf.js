import{p as m,c as _,aa as p,fN as u,aj as c,t as y}from"./main-83b7c6ef.js";import{v as f,n as w}from"./timeSupport-3f80e5d3.js";import{J as I}from"./utils-bb0ec691.js";import{p as b}from"./FeatureStore2D-ad1e651f.js";import{_ as T}from"./preload-helper-388ac9d5.js";import"./projectionSupport-bba819ba.js";import"./json-48e3ea08.js";import"./CircularArray-f044fa62.js";import"./ComputedAttributeStorage-a982b1ef.js";import"./arcadeTimeUtils-aff4f706.js";import"./executionError-c1d13a98.js";import"./centroid-c920a25c.js";import"./definitions-cc1dbf1d.js";import"./visualVariablesUtils-2d71d25e.js";import"./color-0cddff94.js";import"./enums-f1a6a48a.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./visualVariablesUtils-8dcb4296.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),g={getAttribute:(r,e)=>r.field(e)};async function v(r,e){const t=await T(()=>import("./WhereClause-3ab5e03d.js").then(i=>i.W),["./WhereClause-3ab5e03d.js","./main-83b7c6ef.js","./preload-helper-388ac9d5.js","./main-a75f83d6.css","./executionError-c1d13a98.js"],import.meta.url);try{const i=t.WhereClause.create(r,e);if(!i.isStandardized){const s=new _("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const h=s.readArcadeFeature();return i.testFeature(h,g)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const a=1,E=2;class M{constructor(e){this._geometryBounds=p(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,a)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((h,o)=>{const l=!!(this._idToVisibility.get(o)&a),n=s.has(o);!l&&n?t.push(o):l&&!n&&i.push(o),this._idToVisibility.set(o,n?a|E:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h}=this;return u.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h})}async update(e,t){this._hash=JSON.stringify(e);const i=await I(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await v(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await f(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=w(this._serviceInfo.timeInfo,e.timeExtent,b);else{const t=new _("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!!y(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{t&a||(this._idToVisibility.set(i,a),e.push(i))}),e}}export{M as default};
