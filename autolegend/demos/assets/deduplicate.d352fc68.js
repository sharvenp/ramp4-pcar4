import{ii as L}from"./main.4cbfea05.js";function z(a,e,h){const n=a.byteLength/(4*e),l=new Uint32Array(a,0,n*e);let o=new Uint32Array(n);const g=h?.minReduction??0,c=h?.originalIndices||null,p=c?c.length:0,i=h?.componentOffsets||null;let U=0;if(i)for(let t=0;t<i.length-1;t++){const u=i[t+1]-i[t];u>U&&(U=u)}else U=n;const w=Math.floor(1.1*U)+1;(s==null||s.length<2*w)&&(s=new Uint32Array(L(2*w)));for(let t=0;t<2*w;t++)s[t]=0;let f=0;const A=!!i&&!!c,b=A?p:n,m=A?new Uint32Array(p):null,M=1.96;let j=g!==0?Math.ceil(4*M*M/(g*g)*g*(1-g)):b,d=1,x=i?i[1]:b;for(let t=0;t<b;t++){if(t===j){const r=1-f/t;if(r+M*Math.sqrt(r*(1-r)/t)<g)return null;j*=2}if(t===x){for(let r=0;r<2*w;r++)s[r]=0;if(c)for(let r=i[d-1];r<i[d];r++)m[r]=o[c[r]];x=i[++d]}const u=A?c[t]:t,I=u*e,q=$(l,I,e);let y=q%w,k=f;for(;s[2*y+1]!==0;){if(s[2*y]===q){const r=s[2*y+1]-1;if(O(l,I,r*e,e)){k=o[r];break}}y++,y>=w&&(y-=w)}k===f&&(s[2*y]=q,s[2*y+1]=u+1,f++),o[u]=k}if(g!==0&&1-f/n<g)return null;if(A){for(let t=i[d-1];t<m.length;t++)m[t]=o[c[t]];o=m}const C=new Uint32Array(e*f);f=0;for(let t=0;t<b;t++)o[t]===f&&(R(l,(A?c[t]:t)*e,C,f*e,e),f++);if(c&&!A){const t=new Uint32Array(p);for(let u=0;u<t.length;u++)t[u]=o[c[u]];o=t}return{buffer:C.buffer,indices:o,uniqueCount:f}}function O(a,e,h,n){for(let l=0;l<n;l++)if(a[e+l]!==a[h+l])return!1;return!0}function R(a,e,h,n,l){for(let o=0;o<l;o++)h[n+o]=a[e+o]}function $(a,e,h){let n=0;for(let l=0;l<h;l++)n=a[e+l]+n|0,n=n+(n<<11)+(n>>>2)|0;return n>>>0}let s=null;export{z as n};