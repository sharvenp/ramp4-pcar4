import{cp as N,b as V,co as A,dk as J,dl as S,cN as R,cO as X,cL as $,cs as E,cK as k,cE as K,dm as j,dn as q,dp as p}from"./main-95e6e76d.js";function H(t){return M(t,!0)}function Q(t){return M(t,!1)}function M(t,s){if(V(t))return null;const i=t.spatialReference,n=A(i),e="toJSON"in t?t.toJSON():t;if(!n)return e;const h=J(i)?102100:4326,u=S[h].maxX,_=S[h].minX;if(R(e))return T(e,u,_);if(X(e))return e.points=e.points.map(o=>T(o,u,_)),e;if($(e))return z(e,n);if(E(e)||k(e)){const o=K(D,e),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,_)*(2*u),m=x===0?e:j(e,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?w(m,u,s):r.xmin<_?w(m,_,s):m}return e}function z(t,s){if(!s)return t;const i=B(t,s).map(n=>n.extent);return i.length<2?i[0]||t:i.length>2?(t.xmin=s.valid[0],t.xmax=s.valid[1],t):{rings:i.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function T(t,s,i){if(Array.isArray(t)){const n=t[0];if(n>s){const e=p(n,s);t[0]=n+e*(-2*s)}else if(n<i){const e=p(n,i);t[0]=n+e*(-2*i)}}else{const n=t.x;if(n>s){const e=p(n,s);t.x+=e*(-2*s)}else if(n<i){const e=p(n,i);t.x+=e*(-2*i)}}return t}function B(t,s){const i=[],{ymin:n,ymax:e,xmin:h,xmax:u}=t,_=t.xmax-t.xmin,[o,r]=s.valid,{x,frameId:m}=L(t.xmin,s),{x:a,frameId:c}=L(t.xmax,s),b=x===a&&_>0;if(_>2*r){const g={xmin:h<u?x:a,ymin:n,xmax:r,ymax:e},O={xmin:o,ymin:n,xmax:h<u?a:x,ymax:e},P={xmin:0,ymin:n,xmax:r,ymax:e},C={xmin:o,ymin:n,xmax:0,ymax:e},f=[],d=[];I(g,P)&&f.push(m),I(g,C)&&d.push(m),I(O,P)&&f.push(c),I(O,C)&&d.push(c);for(let y=m+1;y<c;y++)f.push(y),d.push(y);i.push(new l(g,[m]),new l(O,[c]),new l(P,f),new l(C,d))}else x>a||b?i.push(new l({xmin:x,ymin:n,xmax:r,ymax:e},[m]),new l({xmin:o,ymin:n,xmax:a,ymax:e},[c])):i.push(new l({xmin:x,ymin:n,xmax:a,ymax:e},[m]));return i}function L(t,s){const[i,n]=s.valid,e=2*n;let h,u=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,u=h):t<i&&(h=Math.ceil(Math.abs(t-i)/e),t+=h*e,u=-h),{x:t,frameId:u}}function I(t,s){const{xmin:i,ymin:n,xmax:e,ymax:h}=s;return v(t,i,n)&&v(t,i,h)&&v(t,e,h)&&v(t,e,n)}function v(t,s,i){return s>=t.xmin&&s<=t.xmax&&i>=t.ymin&&i<=t.ymax}function w(t,s,i=!0){const n=!k(t);if(n&&q(t),i)return new F().cut(t,s);const e=n?t.rings:t.paths,h=n?4:2,u=e.length,_=-2*s;for(let o=0;o<u;o++){const r=e[o];if(r&&r.length>=h){const x=[];for(const m of r)x.push([m[0]+_,m[1]]);e.push(x)}}return n?t.rings=e:t.paths=e,t}class l{constructor(s,i){this.extent=s,this.frameIds=i}}const D=N();class F{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,i){let n;if(this._xCut=i,s.rings)this._closed=!0,n=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,n=s.paths,this._minPts=2}for(const h of n){if(!h||h.length<this._minPts)continue;let u=!0;for(const _ of h)u?(this.moveTo(_),u=!1):this.lineTo(_);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&n.push(h);const e=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=e;n.push(h)}return this._closed?s.rings=n:s.paths=n,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const i=this._side(s[0]);if(i*this._prevSide==-1){const n=this._intersect(this._prevPt,s);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(s[0],s[1],i)}else this._lineTo(s[0],s[1],i);this._prevSide=i,this._prevPt=s}close(){const s=this._firstPt,i=this._prevPt;s[0]===i[0]&&s[1]===i[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,i,n){this._closed?(this._lineIn.push([n<=0?s:this._xCut,i]),this._lineOut.push([n>=0?s:this._xCut,i])):(n<=0&&this._lineIn.push([s,i]),n>=0&&this._lineOut.push([s,i]))}_lineTo(s,i,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?s:this._xCut,i),this._addPolyVertex(this._lineOut,n>=0?s:this._xCut,i)):n<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,i])):n>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,i])):this._prevSide<0?(this._lineIn.push([s,i]),this._lineOut.push([s,i])):this._prevSide>0&&(this._lineOut.push([s,i]),this._lineIn.push([s,i]))}_addPolyVertex(s,i,n){const e=s.length;e>1&&s[e-1][0]===i&&s[e-2][0]===i?s[e-1][1]=n:s.push([i,n])}_checkClosingPt(s){const i=s.length;i>3&&s[0][0]===this._xCut&&s[i-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[i-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,i){const n=(this._xCut-s[0])/(i[0]-s[0]);return s[1]+n*(i[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}export{H as a,Q as p};
