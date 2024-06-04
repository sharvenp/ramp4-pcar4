import{e as A,a as S}from"./quatf64.ddec7ef6.js";import{iL as _,iM as T,ij as W,iN as X,iO as Y,iP as $,iQ as D,iR as N,iS as Q,iT as R,iU as U,iV as V,ib as Z,ic as b,iW as k,i7 as w,b8 as B,bh as j,iX as g}from"./main.33d7d020.js";function C(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function v(n,o,a){a*=.5;const r=Math.sin(a);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(a),n}function F(n,o){const a=2*Math.acos(o[3]),r=Math.sin(a/2);return r>_?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),a}function z(n,o,a){const r=o[0],e=o[1],c=o[2],i=o[3],t=a[0],u=a[1],h=a[2],M=a[3];return n[0]=r*M+i*t+e*h-c*u,n[1]=e*M+i*u+c*t-r*h,n[2]=c*M+i*h+r*u-e*t,n[3]=i*M-r*t-e*u-c*h,n}function G(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],i=o[3],t=Math.sin(a),u=Math.cos(a);return n[0]=r*u+i*t,n[1]=e*u+c*t,n[2]=c*u-e*t,n[3]=i*u-r*t,n}function H(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],i=o[3],t=Math.sin(a),u=Math.cos(a);return n[0]=r*u-c*t,n[1]=e*u+i*t,n[2]=c*u+r*t,n[3]=i*u-e*t,n}function J(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],i=o[3],t=Math.sin(a),u=Math.cos(a);return n[0]=r*u+e*t,n[1]=e*u-r*t,n[2]=c*u+i*t,n[3]=i*u-c*t,n}function K(n,o){const a=o[0],r=o[1],e=o[2];return n[0]=a,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),n}function P(n,o,a,r){const e=o[0],c=o[1],i=o[2],t=o[3];let u,h,M,l,f,q=a[0],m=a[1],p=a[2],d=a[3];return h=e*q+c*m+i*p+t*d,h<0&&(h=-h,q=-q,m=-m,p=-p,d=-d),1-h>_?(u=Math.acos(h),M=Math.sin(u),l=Math.sin((1-r)*u)/M,f=Math.sin(r*u)/M):(l=1-r,f=r),n[0]=l*e+f*q,n[1]=l*c+f*m,n[2]=l*i+f*p,n[3]=l*t+f*d,n}function nn(n){const o=g(),a=g(),r=g(),e=Math.sqrt(1-o),c=Math.sqrt(o);return n[0]=e*Math.sin(2*Math.PI*a),n[1]=e*Math.cos(2*Math.PI*a),n[2]=c*Math.sin(2*Math.PI*r),n[3]=c*Math.cos(2*Math.PI*r),n}function on(n,o){const a=o[0],r=o[1],e=o[2],c=o[3],i=a*a+r*r+e*e+c*c,t=i?1/i:0;return n[0]=-a*t,n[1]=-r*t,n[2]=-e*t,n[3]=c*t,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function E(n,o){const a=o[0]+o[4]+o[8];let r;if(a>0)r=Math.sqrt(a+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,i=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*i+i]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*c+i]-o[3*i+c])*r,n[c]=(o[3*c+e]+o[3*e+c])*r,n[i]=(o[3*i+e]+o[3*e+i])*r}return n}function en(n,o,a,r){const e=.5*Math.PI/180;o*=e,a*=e,r*=e;const c=Math.sin(o),i=Math.cos(o),t=Math.sin(a),u=Math.cos(a),h=Math.sin(r),M=Math.cos(r);return n[0]=c*u*M-i*t*h,n[1]=i*t*M+c*u*h,n[2]=i*u*h-c*t*M,n[3]=i*u*M+c*t*h,n}function an(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=T,tn=W,un=X,hn=z,Mn=Y,sn=$,ln=D,L=N,fn=L,O=Q,qn=O,x=R,mn=U,pn=V;function dn(n,o,a){const r=Z(o,a);return r<-.999999?(b(s,Pn,o),k(s)<1e-6&&b(s,bn,o),w(s,s),v(n,s,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(b(s,o,a),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+r,x(n,n))}const s=B(),Pn=j(1,0,0),bn=j(0,1,0);function gn(n,o,a,r,e,c){return P(y,o,e,c),P(I,a,r,c),P(n,y,I,2*c*(1-c)),n}const y=A(),I=A();function xn(n,o,a,r){const e=yn;return e[0]=a[0],e[3]=a[1],e[6]=a[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],x(n,E(n,e))}const yn=S();Object.freeze(Object.defineProperty({__proto__:null,identity:C,setAxisAngle:v,getAxisAngle:F,multiply:z,rotateX:G,rotateY:H,rotateZ:J,calculateW:K,slerp:P,random:nn,invert:on,conjugate:rn,fromMat3:E,fromEuler:en,str:an,copy:cn,set:tn,add:un,mul:hn,scale:Mn,dot:sn,lerp:ln,length:L,len:fn,squaredLength:O,sqrLen:qn,normalize:x,exactEquals:mn,equals:pn,rotationTo:dn,sqlerp:gn,setAxes:xn},Symbol.toStringTag,{value:"Module"}));export{mn as K,rn as S,en as k,v,F as x,z as y};