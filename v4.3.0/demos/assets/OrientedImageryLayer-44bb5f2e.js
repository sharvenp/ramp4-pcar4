import{e as o,y as t,k as p,H as i,c as y}from"./main-83b7c6ef.js";import"./preload-helper-388ac9d5.js";let e=class extends i{constructor(r){super(r),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new y("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};o([t()],e.prototype,"cameraProperties",void 0),o([t()],e.prototype,"coverage",void 0),o([t()],e.prototype,"coveragePercent",void 0),o([t()],e.prototype,"defaultSearchLocation",void 0),o([t()],e.prototype,"depthImage",void 0),o([t()],e.prototype,"digitalElevationModel",void 0),o([t()],e.prototype,"geometryType",void 0),o([t()],e.prototype,"imageProperties",void 0),o([t()],e.prototype,"maximumDistance",void 0),o([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],e.prototype,"type",void 0),o([t({type:["OrientedImageryLayer"]})],e.prototype,"operationalLayerType",void 0),e=o([p("esri.layers.OrientedImageryLayer")],e);const s=e;export{s as default};
