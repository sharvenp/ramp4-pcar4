import{b as G}from"./main-7ffb345c.js";function P(n,r){return n?r?4:3:r?3:2}function L(n,r,l,N,u){if(G(r)||!r.lengths.length)return null;const s=u?.originPosition==="upperLeft"?-1:1;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const t=n.coords,e=[],o=l?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:i,coords:E}=r,F=P(l,N);let b=0;for(const I of i){const c=O(o,E,b,I,l,N,s);c&&e.push(c),b+=I*F}if(e.sort((I,c)=>{let T=s*I[2]-s*c[2];return T===0&&l&&(T=I[4]-c[4]),T}),e.length){let I=6*e[0][2];t[0]=e[0][0]/I,t[1]=e[0][1]/I,l&&(I=6*e[0][4],t[2]=I!==0?e[0][3]/I:0),(t[0]<o[0]||t[0]>o[1]||t[1]<o[2]||t[1]>o[3]||l&&(t[2]<o[4]||t[2]>o[5]))&&(t.length=0)}if(!t.length){const I=r.lengths[0]?S(E,0,i[0],l,N):null;if(!I)return null;t[0]=I[0],t[1]=I[1],l&&I.length>2&&(t[2]=I[2])}return n}function O(n,r,l,N,u,s,t=1){const e=P(u,s);let o=l,i=l+e,E=0,F=0,b=0,I=0,c=0;for(let _=0,V=N-1;_<V;_++,o+=e,i+=e){const h=r[o],m=r[o+1],f=r[o+2],g=r[i],p=r[i+1],A=r[i+2];let Y=h*p-g*m;I+=Y,E+=(h+g)*Y,F+=(m+p)*Y,u&&(Y=h*A-g*f,b+=(f+A)*Y,c+=Y),h<n[0]&&(n[0]=h),h>n[1]&&(n[1]=h),m<n[2]&&(n[2]=m),m>n[3]&&(n[3]=m),u&&(f<n[4]&&(n[4]=f),f>n[5]&&(n[5]=f))}if(I*t>0&&(I*=-1),c*t>0&&(c*=-1),!I)return null;const T=[E,F,.5*I];return u&&(T[3]=b,T[4]=.5*c),T}function S(n,r,l,N,u){const s=P(N,u);let t=r,e=r+s,o=0,i=0,E=0,F=0;for(let b=0,I=l-1;b<I;b++,t+=s,e+=s){const c=n[t],T=n[t+1],_=n[t+2],V=n[e],h=n[e+1],m=n[e+2],f=N?a(c,T,_,V,h,m):d(c,T,V,h);if(f)if(o+=f,N){const g=M(c,T,_,V,h,m);i+=f*g[0],E+=f*g[1],F+=f*g[2]}else{const g=q(c,T,V,h);i+=f*g[0],E+=f*g[1]}}return o>0?N?[i/o,E/o,F/o]:[i/o,E/o]:l>0?N?[n[r],n[r+1],n[r+2]]:[n[r],n[r+1]]:null}function d(n,r,l,N){const u=l-n,s=N-r;return Math.sqrt(u*u+s*s)}function a(n,r,l,N,u,s){const t=N-n,e=u-r,o=s-l;return Math.sqrt(t*t+e*e+o*o)}function q(n,r,l,N){return[n+.5*(l-n),r+.5*(N-r)]}function M(n,r,l,N,u,s){return[n+.5*(N-n),r+.5*(u-r),l+.5*(s-l)]}export{L as e};
