import{J as E,K as M,c as g,r as N,B as S,L as c,M as f,N as R,O as w,P as U,Q as D,R as P,S as W,W as d,X as h,Y as v}from"./main-69e2a69d.js";import{c as B,a as $}from"./devEnvironmentUtils-f2a1f21e.js";import"./preload-helper-388ac9d5.js";function Q(e,t,a,l){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?F(e,t,l):E(e,t,l).then(n=>C(M(n),e.name,t,a,l)):Promise.reject(new g("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function C(e,t,a,l,n){const u=e.data,m=a&&N(a.portal)?a.portal:S.getDefault(),b={portal:m,url:c(e.baseUrl),origin:"portal-item"},o=u.items.find(r=>r.name===t);if(!o){const r=`The symbol name '${t}' could not be found`;return Promise.reject(new g("symbolstyleutils:symbol-name-not-found",r,{symbolName:t}))}let i=f(R(o,l),b),y=o.thumbnail?.href??null;const p=o.thumbnail&&o.thumbnail.imageData;B()&&(i=$(i)??"",y=$(y));const O={portal:m,url:c(w(i)),origin:"portal-item"};return U(i,n).then(r=>{const j=l==="cimRef"?D(r.data):r.data,s=P(j,O);if(s&&W(s)){if(y){const x=f(y,b);s.thumbnail=new d({url:x})}else p&&(s.thumbnail=new d({url:`data:image/png;base64,${p}`}));e.styleUrl?s.styleOrigin=new h({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new h({portal:a.portal,styleName:e.styleName,name:t}))}return s})}function F(e,t,a){const l=v.replace(/\{SymbolName\}/gi,e.name),n=N(t.portal)?t.portal:S.getDefault();return U(l,a).then(u=>{const m=D(u.data);return P(m,{portal:n,url:c(w(l)),origin:"portal-item"})})}export{C as fetchSymbolFromStyle,Q as resolveWebStyleSymbol};
