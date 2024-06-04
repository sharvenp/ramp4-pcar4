import{e as L}from"./mat3f64-221ce671.js";import{e as b}from"./quatf64-3363c48e.js";import{eF as y,eG as O,eH as S,eI as T,eJ as G,eK as Y,eL as w,eM as D,eN as F,eO as H,eP as J,eQ as K,eR as N,eS as P,eT as Q,bw as R,ax as U,bG as A,eU as W}from"./main-7ed7b27d.js";function X(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function _(n,e,a){a*=.5;const o=Math.sin(a);return n[0]=o*e[0],n[1]=o*e[1],n[2]=o*e[2],n[3]=Math.cos(a),n}function Z(n,e){const a=2*Math.acos(e[3]),o=Math.sin(a/2);return o>y()?(n[0]=e[0]/o,n[1]=e[1]/o,n[2]=e[2]/o):(n[0]=1,n[1]=0,n[2]=0),a}function j(n,e,a){const o=e[0],r=e[1],c=e[2],t=e[3],u=a[0],i=a[1],h=a[2],M=a[3];return n[0]=o*M+t*u+r*h-c*i,n[1]=r*M+t*i+c*u-o*h,n[2]=c*M+t*h+o*i-r*u,n[3]=t*M-o*u-r*i-c*h,n}function k(n,e,a){a*=.5;const o=e[0],r=e[1],c=e[2],t=e[3],u=Math.sin(a),i=Math.cos(a);return n[0]=o*i+t*u,n[1]=r*i+c*u,n[2]=c*i-r*u,n[3]=t*i-o*u,n}function B(n,e,a){a*=.5;const o=e[0],r=e[1],c=e[2],t=e[3],u=Math.sin(a),i=Math.cos(a);return n[0]=o*i-c*u,n[1]=r*i+t*u,n[2]=c*i+o*u,n[3]=t*i-r*u,n}function C(n,e,a){a*=.5;const o=e[0],r=e[1],c=e[2],t=e[3],u=Math.sin(a),i=Math.cos(a);return n[0]=o*i+r*u,n[1]=r*i-o*u,n[2]=c*i+t*u,n[3]=t*i-c*u,n}function V(n,e){const a=e[0],o=e[1],r=e[2];return n[0]=a,n[1]=o,n[2]=r,n[3]=Math.sqrt(Math.abs(1-a*a-o*o-r*r)),n}function g(n,e,a,o){const r=e[0],c=e[1],t=e[2],u=e[3];let i,h,M,l,f,m=a[0],q=a[1],p=a[2],$=a[3];return h=r*m+c*q+t*p+u*$,h<0&&(h=-h,m=-m,q=-q,p=-p,$=-$),1-h>y()?(i=Math.acos(h),M=Math.sin(i),l=Math.sin((1-o)*i)/M,f=Math.sin(o*i)/M):(l=1-o,f=o),n[0]=l*r+f*m,n[1]=l*c+f*q,n[2]=l*t+f*p,n[3]=l*u+f*$,n}function nn(n){const e=W,a=e(),o=e(),r=e(),c=Math.sqrt(1-a),t=Math.sqrt(a);return n[0]=c*Math.sin(2*Math.PI*o),n[1]=c*Math.cos(2*Math.PI*o),n[2]=t*Math.sin(2*Math.PI*r),n[3]=t*Math.cos(2*Math.PI*r),n}function en(n,e){const a=e[0],o=e[1],r=e[2],c=e[3],t=a*a+o*o+r*r+c*c,u=t?1/t:0;return n[0]=-a*u,n[1]=-o*u,n[2]=-r*u,n[3]=c*u,n}function on(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function v(n,e){const a=e[0]+e[4]+e[8];let o;if(a>0)o=Math.sqrt(a+1),n[3]=.5*o,o=.5/o,n[0]=(e[5]-e[7])*o,n[1]=(e[6]-e[2])*o,n[2]=(e[1]-e[3])*o;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[3*r+r]&&(r=2);const c=(r+1)%3,t=(r+2)%3;o=Math.sqrt(e[3*r+r]-e[3*c+c]-e[3*t+t]+1),n[r]=.5*o,o=.5/o,n[3]=(e[3*c+t]-e[3*t+c])*o,n[c]=(e[3*c+r]+e[3*r+c])*o,n[t]=(e[3*t+r]+e[3*r+t])*o}return n}function rn(n,e,a,o){const r=.5*Math.PI/180;e*=r,a*=r,o*=r;const c=Math.sin(e),t=Math.cos(e),u=Math.sin(a),i=Math.cos(a),h=Math.sin(o),M=Math.cos(o);return n[0]=c*i*M-t*u*h,n[1]=t*u*M+c*i*h,n[2]=t*i*h-c*u*M,n[3]=t*i*M+c*u*h,n}function an(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=O,tn=S,un=T,hn=j,Mn=G,sn=Y,ln=w,z=D,fn=z,E=F,mn=E,d=H,qn=J,pn=K;function $n(n,e,a){const o=N(e,a);return o<-.999999?(P(s,gn,e),Q(s)<1e-6&&P(s,Pn,e),R(s,s),_(n,s,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(P(s,e,a),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+o,d(n,n))}const s=U(),gn=A(1,0,0),Pn=A(0,1,0);function dn(n,e,a,o,r,c){return g(x,e,r,c),g(I,a,o,c),g(n,x,I,2*c*(1-c)),n}const x=b(),I=b();function xn(n,e,a,o){const r=In;return r[0]=a[0],r[3]=a[1],r[6]=a[2],r[1]=o[0],r[4]=o[1],r[7]=o[2],r[2]=-e[0],r[5]=-e[1],r[8]=-e[2],d(n,v(n,r))}const In=L();Object.freeze(Object.defineProperty({__proto__:null,add:un,calculateW:V,conjugate:on,copy:cn,dot:sn,equals:pn,exactEquals:qn,fromEuler:rn,fromMat3:v,getAxisAngle:Z,identity:X,invert:en,len:fn,length:z,lerp:ln,mul:hn,multiply:j,normalize:d,random:nn,rotateX:k,rotateY:B,rotateZ:C,rotationTo:$n,scale:Mn,set:tn,setAxes:xn,setAxisAngle:_,slerp:g,sqlerp:dn,sqrLen:mn,squaredLength:E,str:an},Symbol.toStringTag,{value:"Module"}));export{qn as K,on as S,rn as k,_ as v,Z as x,j as y};
