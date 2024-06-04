import{dj as $e,aV as ve,fC as ze,n1 as ge,l2 as fe,aW as Ee,aX as K,dD as A,j4 as z,j5 as R,e,y as o,j3 as ee,k as d,dB as m,e5 as Oe,gf as $,eq as E,bv as u,bU as te,az as Y,n2 as H,a9 as G,p as Re,f as Ie,ar as Ce,dk as ke,n3 as Ue,bh as ne,n4 as We,n5 as Je,dn as Qe,gb as Xe,dI as Ge,dJ as Ke,dK as Ye,dL as He,ga as Ze,lQ as et,r as F,dM as tt,c as le,w as Ne,ef as O,fV as it,t as ot,dQ as st,dR as rt,dO as be,f$ as nt,a4 as lt}from"./main-83b7c6ef.js";import{E as at}from"./SceneService-4cbab1eb.js";import{g as pt}from"./persistable-4c608b14.js";import{v as ae,y as ut}from"./quat-07509e98.js";import{e as se}from"./quatf64-3363c48e.js";import"./preload-helper-388ac9d5.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-795586db.js";import"./resourceExtension-d03ff5ad.js";import"./mat3f64-221ce671.js";const g=Ee(),Se=se(),xe=se(),we=se(),Te=K(0,0,1),ct=K(0,1,0),yt=K(1,0,0);function C(t){$e(g,t),ve(g,g);const i=Math.atan2(g[1],g[0]),s=ae(se(),Te,-i);ze(g,g,s);const r=-1*Math.atan2(g[2],g[0]);return[ge(i)+270,ge(r)+90]}function ie(t,i){return ae(xe,Te,fe(t-270)),ae(we,ct,fe(i-90)),ut(Se,xe,we),$e(g,yt),ze(g,g,Se),ve(g,g),[g[0],g[1],g[2]]}let I=class extends A(m){constructor(i){super(i),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(R(i),0,!0)}set orientation(i){const s=ie(i,this.tilt);this._set("normal",s),this._set("orientation",i)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(R(s),0,!0)}set tilt(i){const s=ie(this.orientation,i);this._set("normal",s),this._set("tilt",i)}};e([o({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],I.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(R(t),0,!0))],I.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(R(t),0,!0))],I.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=e([d("esri.layers.voxel.VoxelSlice")],I);const oe=I;let S=class extends A(m){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(R(i),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(R(s),0,!0)}};e([o({type:Boolean,json:{default:!0,write:!0}})],S.prototype,"enabled",void 0),e([o({type:String,json:{origins:{service:{read:Oe}},write:{enabled:!0,isRequired:!0}}}),pt({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],S.prototype,"href",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"orientation",null),e([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],S.prototype,"tilt",null),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"normal",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"point",void 0),e([o({type:[$],json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"sizeInPixel",void 0),e([o({type:[oe],json:{write:!0}})],S.prototype,"slices",void 0),e([o({type:$,json:{default:0,write:!0}})],S.prototype,"timeId",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"variableId",void 0),S=e([d("esri.layers.voxel.VoxelSection")],S);const pe=S;let U=class extends m{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],U.prototype,"diffuseFactor",void 0),e([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],U.prototype,"specularFactor",void 0),U=e([d("esri.layers.voxel.VoxelSimpleShading")],U);const qe=U;let N=class extends m{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};e([o({type:["discrete","continuous"],json:{write:!0}})],N.prototype,"continuity",void 0),e([o({type:Boolean,json:{write:!0}})],N.prototype,"hasNoData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"noData",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"offset",void 0),e([o({type:Number,json:{write:!0}})],N.prototype,"scale",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"type",void 0),N=e([d("esri.layers.voxel.VoxelFormat")],N);const Ve=N;let j=class extends m{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"id",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),e([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"name",void 0),e([o({type:Ve,json:{write:!0}})],j.prototype,"originalFormat",void 0),e([o({type:Ve,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"renderingFormat",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"unit",void 0),e([o({type:Number,json:{write:!0}})],j.prototype,"volumeId",void 0),e([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],j.prototype,"type",void 0),j=e([d("esri.layers.voxel.VoxelVariable")],j);const dt=j;let L=class extends A(m){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};e([o({type:E,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],L.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],L.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],L.prototype,"label",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],L.prototype,"colorLocked",void 0),L=e([d("esri.layers.voxel.VoxelIsosurface")],L);const De=L;let W=class extends A(m){constructor(){super(...arguments),this.color=null,this.position=0}};e([o({type:E,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],W.prototype,"color",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"position",void 0),W=e([d("esri.layers.voxel.VoxelColorStop")],W);const ue=W;let J=class extends A(m){constructor(){super(...arguments),this.opacity=1,this.position=0}};e([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],J.prototype,"opacity",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"position",void 0),J=e([d("esri.layers.voxel.VoxelOpacityStop")],J);const ce=J;let Q=class extends A(m){constructor(){super(...arguments),this.enabled=!1,this.range=null}};e([o({type:Boolean,json:{default:!1,write:!0}})],Q.prototype,"enabled",void 0),e([o({type:[Number],json:{write:!0}})],Q.prototype,"range",void 0),Q=e([d("esri.layers.voxel.VoxelRangeFilter")],Q);const ht=Q;var V;(function(t){t[t.Color=1]="Color",t[t.Alpha=2]="Alpha",t[t.Both=3]="Both"})(V||(V={}));let T=class extends A(m){constructor(i){super(i),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(u.ofType(ue)),this.opacityStops=new(u.ofType(ce))}set colorStops(i){this._set("colorStops",te(i,this._get("colorStops"),u.ofType(ue)))}set opacityStops(i){this._set("opacityStops",te(i,this._get("opacityStops"),u.ofType(ce)))}getPreviousNext(i,s,r){let n=i;for(;--n>0&&s[n].type!==r&&s[n].type!==V.Both;);let l=i;const y=s.length;for(;++l<y&&s[l].type!==r&&s[l].type!==V.Both;);return[n,l]}get rasterizedTransferFunction(){const i=[];if(this.colorStops.length<2)return i;const s=[],r=[],n=1e-5;for(const a of this.colorStops){if(!a.color)return i;r.push({color:{r:a.color.r,g:a.color.g,b:a.color.b,a:Math.round(255*(1-a.color.a))},position:a.position,type:V.Color})}if(this.opacityStops.length===0)for(const a of r)s.push({color:a.color,position:a.position});else{for(const c of this.opacityStops){const f=Y(c.position,0,1),h=Math.round(255*Y(1-c.opacity,0,1));let b=!1;for(const v of r)if(v.type===V.Color&&Math.abs(v.position-f)<n){v.color.a=h,v.type=V.Both,b=!0;break}b||r.push({color:{r:0,g:0,b:0,a:h},position:c.position,type:V.Alpha})}r.sort((c,f)=>c.position<f.position?-1:1);const a=r.length;for(let c=0;c<a;++c){const f=r[c];if(f.type!==V.Both)if(f.type===V.Color){const[h,b]=this.getPreviousNext(c,r,V.Alpha);if(h!==-1&&b!==a){const v=(f.position-r[h].position)/(r[b].position-r[h].position);f.color.a=Math.round(H(r[h].color.a,r[b].color.a,v))}else f.color.a=h!==-1?r[h].color.a:r[b].color.a}else{const[h,b]=this.getPreviousNext(c,r,V.Color);if(h!==-1&&b!==a){const v=(f.position-r[h].position)/(r[b].position-r[h].position),k=r[h].color,Be=r[b].color;["r","g","b"].forEach(re=>{f.color[re]=Math.round(H(k[re],Be[re],v))})}else["r","g","b"].forEach(h!==-1?v=>{f.color[v]=r[h][v]}:v=>{f.color[v]=r[b][v]})}}for(const c of r)s.push({color:c.color,position:c.position})}s[0].position=0,s[s.length-1].position=1;let l=0,y=1;for(let a=0;a<this._colorMapSize;++a){const c=a/this._colorMapSize;for(;c>s[y].position;)l=y++;const f=(c-s[l].position)/(s[y].position-s[l].position),h=s[l].color,b=s[y].color,v=new E;["r","g","b"].forEach(k=>{v[k]=Math.round(H(h[k],b[k],f))}),v.a=Y(1-H(h.a,b.a,f)/255,0,1),i.push(v)}return i}getColorForContinuousDataValue(i,s){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let n=this.stretchRange[0],l=this.stretchRange[1];if(n>l){const a=n;n=l,l=a}i=Y(i,n,l);const y=r[Math.round((i-n)/(l-n)*(this._colorMapSize-1))].clone();return s||(y.a=1),y}};e([o({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),e([o({type:u.ofType(ue),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),e([o({type:u.ofType(ce),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),e([o({type:ht,json:{write:!0}})],T.prototype,"rangeFilter",void 0),e([o({type:[E],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=e([d("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const mt=T;let _=class extends A(m){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};e([o({type:E,json:{type:[$],write:{enabled:!0,isRequired:!0}}})],_.prototype,"color",void 0),e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"value",void 0),e([o({type:Boolean,json:{default:!0,write:!0}})],_.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],_.prototype,"label",void 0),_=e([d("esri.layers.voxel.VoxelUniqueValue")],_);const Ae=_;var ye;let M=ye=class extends m{constructor(t){super(t),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(u.ofType(Ae)),this.isosurfaces=new(u.ofType(De))}clone(){return new ye({variableId:this.variableId,label:this.label,transferFunction:G(this.transferFunction),uniqueValues:G(this.uniqueValues),isosurfaces:G(this.isosurfaces)})}};e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"variableId",void 0),e([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),e([o({type:mt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],M.prototype,"transferFunction",void 0),e([o({type:u.ofType(Ae),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],M.prototype,"uniqueValues",void 0),e([o({type:u.ofType(De),json:{write:{enabled:!0,overridePolicy(){const t=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:t&&i}}}}})],M.prototype,"isosurfaces",void 0),M=ye=e([d("esri.layers.voxel.VoxelVariableStyle")],M);const Fe=M;let Z=class extends m{constructor(){super(...arguments),this.values=null}};e([o({type:[Number],json:{write:!0}})],Z.prototype,"values",void 0),Z=e([d("esri.layers.voxel.VoxelIrregularSpacing")],Z);const vt=Z;let X=class extends m{constructor(){super(...arguments),this.scale=1,this.offset=0}};e([o({type:Number,json:{write:!0}})],X.prototype,"scale",void 0),e([o({type:Number,json:{write:!0}})],X.prototype,"offset",void 0),X=e([d("esri.layers.voxel.VoxelRegularSpacing")],X);const gt=X;let x=class extends m{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};e([o({type:vt,json:{write:!0}})],x.prototype,"irregularSpacing",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isPositiveUp",void 0),e([o({type:Boolean,json:{write:!0}})],x.prototype,"isWrappedDateLine",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"label",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"name",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"quantity",void 0),e([o({type:gt,json:{write:!0}})],x.prototype,"regularSpacing",void 0),e([o({type:Number,json:{write:!0}})],x.prototype,"size",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"unit",void 0),e([o({type:Boolean,json:{read:!1}})],x.prototype,"isRegular",null),x=e([d("esri.layers.voxel.VoxelDimension")],x);const ft=x,Le="esri.layers.voxel.VoxelVolume",je=Re.getLogger(Le);let w=class extends m{constructor(t){super(t),this.id=0,this.dimensions=null,this.spatialReference=Ie.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let t=2;t<4;++t)if(this.dimensions[t].size>0)return t;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[t[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const t=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return s.isRegular&&!s.isPositiveUp&&(n[2]*=-1),[(t[1]-t[0])/n[0],(i[1]-i[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const t=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!t&&i)return"xyt";if(t&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const t=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[t].size]}computeVoxelSpaceLocation(t){if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return je.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!Ce(this.spatialReference,t.spatialReference))return je.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=K(t.x,t.y,t.z??0);ke(i,i,this.originInLayerSpace3D),Ue(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const r=t.z??0,n=s.irregularSpacing.values,l=s.isPositiveUp?1:-1,y=n.reduce((a,c)=>Math.abs(l*c-r)<Math.abs(l*a-r)?c:a);for(let a=0;a<n.length;++a)if(n[a]===y){i[2]=a;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(t){if(!this.isValid)return new ne({x:0,y:0,spatialReference:this.spatialReference});const i=We(t);if(Je(i,i,this.voxelSizeInLayerSpaceSigned),Qe(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new ne({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(t[2]<0?i[2]=s.irregularSpacing.values[0]:t[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[t[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new ne({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),e([o({type:[ft],json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"dimensions",void 0),e([o({type:Ie,json:{read:{enabled:!1}}})],w.prototype,"spatialReference",void 0),e([o({type:Number,json:{read:!1}})],w.prototype,"zDimension",null),e([o({type:[Boolean],json:{read:!1}})],w.prototype,"isValid",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"originInLayerSpace3D",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"voxelSizeInLayerSpaceSigned",null),e([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],w.prototype,"volumeType",null),e([o({type:[Number],json:{read:!1}})],w.prototype,"sizeInVoxels",null),w=e([d(Le)],w);const Me=w;var de;let B=de=class extends m{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const t=new de;return t.apronWidth===this.apronWidth&&t.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"apronWidth",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"brickSize",void 0),e([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"maxLodLevel",void 0),e([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"nodeSize",void 0),B=de=e([d("esri.layers.voxel.VoxelVolumeIndex")],B);const bt=B;let q=class extends A(m){constructor(i){super(i),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(R(i),0,!0)}set orientation(i){const s=ie(i,this.tilt);this._set("normal",s),this._set("orientation",i)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[i,s]=C(this.normal);return z.normalize(R(s),0,!0)}set tilt(i){const s=ie(this.orientation,i);this._set("normal",s),this._set("tilt",i)}};e([o({type:Boolean,json:{default:!0,write:!0}})],q.prototype,"enabled",void 0),e([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(R(t),0,!0))],q.prototype,"orientation",null),e([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ee(t=>z.normalize(R(t),0,!0))],q.prototype,"tilt",null),e([o({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),e([o({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=e([d("esri.layers.voxel.VoxelDynamicSection")],q);const he=q;var me;let D=me=class extends m{constructor(t){super(t),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(u.ofType(oe)),this.dynamicSections=new(u.ofType(he))}set slices(t){this._set("slices",te(t,this._get("slices"),u.ofType(oe)))}set dynamicSections(t){this._set("dynamicSections",te(t,this._get("dynamicSections"),u.ofType(he)))}clone(){return new me({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:G(this.slices),dynamicSections:G(this.dynamicSections)})}};e([o({type:$,json:{write:{enabled:!0,isRequired:!0}}})],D.prototype,"volumeId",void 0),e([o({type:Number,json:{default:1,write:!0}})],D.prototype,"verticalExaggeration",void 0),e([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],D.prototype,"exaggerationMode",void 0),e([o({type:Number,json:{default:0,write:!0}})],D.prototype,"verticalOffset",void 0),e([o({type:u.ofType(oe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],D.prototype,"slices",null),e([o({type:u.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],D.prototype,"dynamicSections",null),D=me=e([d("esri.layers.voxel.VoxelVolumeStyle")],D);const Pe=D,_e="esri.layers.VoxelLayer",P=Re.getLogger(_e);let p=class extends at(Xe(Ge(Ke(Ye(He(Ze(lt))))))){constructor(t){super(t),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new qe,this.opacity=1,this.variables=new u,this.volumes=new u,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!0,this.popupTemplate=null,this.test=null,this.volumeStyles=new(u.ofType(Pe)),this.variableStyles=new(u.ofType(Fe)),this.sections=new(u.ofType(pe)),t?.constantUpscaling&&(this.test={constantUpscaling:!0})}set url(t){this._set("url",et(t,P))}load(t){const i=F(t)?t.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},t).catch(tt).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(s),Promise.resolve(this)}read(t,i){super.read(t,i);for(const s of this.volumes)s.spatialReference=this.spatialReference}readVersion(t,i){return super.parseVersionString(t)}validateLayer(t){if(t.layerType&&t.layerType!==this.operationalLayerType)throw new le("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new le("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new le("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(t,i,s){if(t!=null&&typeof t=="object"){const r=Ne.fromJSON(t,s);if(r.zmin===0&&r.zmax===0&&Array.isArray(i.volumes)){const n=Me.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let y=l.regularSpacing.offset,a=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(y>a){const c=y;y=a,a=c}r.zmin=y,r.zmax=a}}}return r}return null}get voxelFields(){const t=[new O({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new O({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new O({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],i=this.getVolume(null);if(F(i)){if(i.volumeType==="xyzt"||i.volumeType==="xyt"){const s=new O({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});t.push(s);const r=new O({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});t.push(r)}if(i.volumeType!=="xyt"){const s=new O({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});t.push(s)}}return t}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(t){const i=this.voxelFields,s=this.title;return it({fields:i,title:s},t)}getConfiguration(){const t={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return t.index&&this.index?.isValid()?JSON.stringify(t):""}getVariableStyle(t){let i=-1;if(i=F(t)?t:this.currentVariableId,!this.variableStyles||i===-1)return null;const s=this.variableStyles.findIndex(r=>r.variableId===i);return s<0?null:this.variableStyles.getItemAt(s)}getVariable(t){let i=-1;if(i=F(t)?t:this.currentVariableId,!this.variables||i===-1)return null;const s=this.variables.findIndex(r=>r.id===i);return s<0?null:this.variables.getItemAt(s)}getVolume(t){const i=this.getVariable(t);return F(i)?this.volumes.find(({id:s})=>s===i.volumeId):null}getVolumeStyle(t){const i=this.getVariable(t);return F(i)?this.volumeStyles.find(({volumeId:s})=>s===i.volumeId):null}getColorForContinuousDataValue(t,i,s){const r=this.getVariable(t);if(ot(r)||r.renderingFormat?.continuity!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(y=>y.variableId===t);if(n<0)return null;const l=this.variableStyles.getItemAt(n);return l.transferFunction?l.transferFunction.getColorForContinuousDataValue(i,s):null}getSections(){const t=[];for(const i of this.sections)t.push(new pe({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return t}getVariableStyles(){const t=[];for(const i of this.variableStyles){const s=this._getVariable(i);if(F(s)){const r=i.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),P.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(r.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(s.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&P.error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(P.error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(s.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)P.error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());t.push(r)}else P.error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return t}getVolumeStyles(){const t=[];for(const i of this.volumeStyles){const s=this._getVolumeFromVolumeId(i.volumeId);if(F(s)){const r=i.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");t.push(r)}else P.error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return t}_getVariable(t){const i=t.variableId;for(const s of this.variables)if(s.id===i)return s;return null}_getVolumeFromVolumeId(t){for(const i of this.volumes)if(i.id===t)return i;return null}_isPlaneValid(t,i,s){if(!t.point||!Array.isArray(t.point)||t.point.length!==3||!t.normal||!Array.isArray(t.normal)||t.normal.length!==3)return!1;for(let l=0;l<3;++l){const y=t.point[l];if(y<0||y>=s[i[l]].size)return!1}const r=K(t.normal[0],t.normal[1],t.normal[2]);ve(r,r);const n=1e-6;return!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<n)&&(t.normal[0]=r[0],t.normal[1]=r[1],t.normal[2]=r[2],!0)}};e([o({type:["Voxel"]})],p.prototype,"operationalLayerType",void 0),e([o(st)],p.prototype,"legendEnabled",void 0),e([o({json:{write:!0}})],p.prototype,"title",void 0),e([o(rt)],p.prototype,"url",null),e([o({type:u.ofType(pe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],p.prototype,"sections",void 0),e([o({type:$,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],p.prototype,"currentVariableId",void 0),e([o({type:u.ofType(Pe),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],p.prototype,"volumeStyles",void 0),e([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],p.prototype,"renderMode",void 0),e([o({type:u.ofType(Fe),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],p.prototype,"variableStyles",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],p.prototype,"enableSlices",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],p.prototype,"enableSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],p.prototype,"enableDynamicSections",void 0),e([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],p.prototype,"enableIsosurfaces",void 0),e([o({type:qe,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],p.prototype,"shading",void 0),e([o({type:["show","hide"]})],p.prototype,"listMode",void 0),e([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],p.prototype,"opacity",void 0),e([o({type:u.ofType(dt)})],p.prototype,"variables",void 0),e([o({type:u.ofType(Me)})],p.prototype,"volumes",void 0),e([o({type:bt})],p.prototype,"index",void 0),e([o({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],p.prototype,"minScale",void 0),e([o({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],p.prototype,"maxScale",void 0),e([o({json:{read:!1},readOnly:!0})],p.prototype,"type",void 0),e([o({readOnly:!0,json:{name:"serviceVersion"}})],p.prototype,"version",void 0),e([be("service","version")],p.prototype,"readVersion",null),e([o({type:Ne})],p.prototype,"fullExtent",void 0),e([be("service","fullExtent",["fullExtent"])],p.prototype,"readFullExtent",null),e([o({readOnly:!0,clonable:!1,json:{read:!1}})],p.prototype,"voxelFields",null),e([o(nt)],p.prototype,"popupEnabled",void 0),e([o({readOnly:!0})],p.prototype,"defaultPopupTemplate",null),p=e([d(_e)],p);const Wt=p;export{Wt as default};
