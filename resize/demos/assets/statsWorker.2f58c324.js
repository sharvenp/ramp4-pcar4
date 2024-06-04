import{bA as N,ae as C,hx as S,bQ as A,b6 as R,f2 as B,k as O,hy as j,hz as k}from"./main.33d7d020.js";import{O as q}from"./quantizationUtils.0b483864.js";import{T as G,s as Y,m as _,c as Q,V as U,g as Z,h as H,y as J,D as K,z as L}from"./utils.6785e9a0.js";import"./preload-helper.387dac8f.js";let z=null;function W(n,a,s){return n.x<0?n.x+=a:n.x>s&&(n.x-=a),n}function X(n,a,s,t){const i=S(s)?A(s):null,r=i?Math.round((i.valid[1]-i.valid[0])/a.scale[0]):null;return n.map(l=>{const e=new N(C(l.geometry));return q(a,e,e,e.hasZ,e.hasM),l.geometry=i?W(e,r,t[0]):e,l})}function aa(n,a=18,s,t,i,r){const l=new Float64Array(i*r);a=Math.round(R(a));let e=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,u=0,m=0,d=0,f=0;const c=j(t,s);for(const{geometry:v,attributes:I}of n){const{x:y,y:w}=v,E=Math.max(0,y-a),M=Math.max(0,w-a),g=Math.min(r,w+a),b=Math.min(i,y+a),P=+c(I);for(let x=M;x<g;x++)for(let T=E;T<b;T++){const F=x*i+T,$=k(T-y,x-w,a),D=l[F];u=l[F]+=$*P;const V=u-D;m+=V,d+=V*V,u<e&&(e=u),u>o&&(o=u),f++}}if(!f)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const p=(o-e)/2;return{mean:m/f,stdDev:Math.sqrt((d-m*m/f)/f),min:e,max:o,mid:p,count:f}}async function h(n,a){if(!a)return[];const s=n.field,t=n.valueExpression,i=n.normalizationType,r=n.normalizationField,l=n.normalizationTotal,e=[],o=n.viewInfoParams;let u=null,m=null;if(t){if(!z){const{arcadeUtils:c}=await B();z=c}u=z.createFunction(t),m=o&&z.getViewInfo({viewingMode:o.viewingMode,scale:o.scale,spatialReference:new O(o.spatialReference)})}const d=n.fieldInfos,f=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&d?{fields:d}:null;return a.forEach(c=>{const p=c.attributes;let v;if(t){const I=f?{...c,layer:f}:c,y=z.createExecContext(I,m);v=z.executeFunction(u,y)}else p&&(v=p[s]);if(i&&isFinite(v)){const I=p&&parseFloat(p[r]);v=G(v,i,I,l)}e.push(v)}),e}async function oa(n){const{attribute:a,features:s}=n,{normalizationType:t,normalizationField:i,minValue:r,maxValue:l,fieldType:e}=a,o=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:t,normalizationField:i,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s),u=Y({normalizationType:t,normalizationField:i,minValue:r,maxValue:l}),m={value:.5,fieldType:e},d=e==="esriFieldTypeString"?_({values:o,supportsNullCount:u,percentileParams:m}):Q({values:o,minValue:r,maxValue:l,useSampleStdDev:!t,supportsNullCount:u,percentileParams:m});return U(d,e==="esriFieldTypeDate")}async function la(n){const{attribute:a,features:s}=n,t=await h({field:a.field,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s),i=Z(t);return H(i,a.domain,a.returnAllCodedValues)}async function sa(n){const{attribute:a,features:s}=n,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:l,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s),u=J(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return K(u,e)}async function ra(n){const{attribute:a,features:s}=n,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:l,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s);return L(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ua(n){const{attribute:a,features:s}=n,{field:t,radius:i,fieldOffset:r,transform:l,spatialReference:e,size:o}=a,u=X(s,l,e,o),{count:m,min:d,max:f,mean:c,stdDev:p}=aa(u,i,r,t,o[0],o[1]);return{count:m,min:d,max:f,avg:c,stddev:p}}export{sa as classBreaks,ua as heatmapStatistics,ra as histogram,oa as summaryStatistics,la as uniqueValues};
