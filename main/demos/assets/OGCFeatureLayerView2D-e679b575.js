import { aX as e, aY as y, aZ as c } from './main-f8507314.js';
import { X } from './FeatureLayerView2D-8cc1bec4.js';
import './preload-helper-a4975f27.js';
import './Container-29c877ca.js';
import './highlightReasons-37631734.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-7c55ed72.js';
import './LayerView-6bd1df42.js';
import './TechniqueInstance-fc319124.js';
import './UpdateTracking2D-dee4718c.js';
import './TurboLine-86951e9d.js';
import './enums-d24bcbbf.js';
import './earcut-e4ee099e.js';
import './GeometryUtils-efa782a2.js';
import './Rect-09e0f861.js';
import './LabelMetric-bee43066.js';
import './Program-57208008.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-38e6df20.js';
import './constants-412c3a33.js';
import './TileContainer-a76b8e30.js';
import './WGLContainer-e62a58a3.js';
import './ProgramTemplate-f2f19931.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-191ce4fa.js';
import './floatRGBA-3a08a461.js';
import './FeatureCommandQueue-60b8395c.js';
import './HighlightCounter-dd2884ca.js';
import './popupUtils-57b34e58.js';
import './RefreshableLayerView-a701ceec.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
