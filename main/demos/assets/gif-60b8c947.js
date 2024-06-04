import { aA as n$1 } from './main-f8507314.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t={},r={},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.loop=n.conditional=n.parse=void 0;var a=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,a)}));else if("function"==typeof r)r(t,n,a,e);else {var i=Object.keys(r)[0];Array.isArray(r[i])?(a[i]={},e(t,r[i],n,a[i])):a[i]=r[i](t,n,a,e);}return n};n.parse=a;var i=function(e,t){return function(r,n,a,i){t(r,n,a)&&i(r,e,n,a);}};n.conditional=i;var o=function(e,t){return function(r,n,a,i){for(var o=[],d=r.pos;t(r,n,a);){var s={};if(i(r,e,n,s),r.pos===d)break;d=r.pos,o.push(s);}return o}};n.loop=o;var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.readBits=d.readArray=d.readUnsigned=d.readString=d.peekBytes=d.readBytes=d.peekByte=d.readByte=d.buildStream=void 0;var s=function(e){return {data:e,pos:0}};d.buildStream=s;var c=function(){return function(e){return e.data[e.pos++]}};d.readByte=c;var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};d.peekByte=u;var l=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};d.readBytes=l;var f=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}};d.peekBytes=f;var p=function(e){return function(t){return Array.from(l(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}};d.readString=p;var g=function(e){return function(t){var r=l(2)(t);return e?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}};d.readUnsigned=g;var y=function(e,t){return function(r,n,a){for(var i="function"==typeof t?t(r,n,a):t,o=l(e),d=new Array(i),s=0;s<i;s++)d[s]=o(r);return d}};d.readArray=y;var h=function(e,t,r){for(var n=0,a=0;a<r;a++)n+=e[t+a]&&Math.pow(2,r-a-1);return n},v=function(e){return function(t){for(var r=c()(t),n=new Array(8),a=0;a<8;a++)n[7-a]=!!(r&1<<a);return Object.keys(e).reduce((function(t,r){var a=e[r];return a.length?t[r]=h(n,a.index,a.length):t[r]=n[a.index],t}),{})}};d.readBits=v,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n,r=d,a={blocks:function(e){for(var t=0,n=[],a=e.data.length,i=0,o=(0, r.readByte)()(e);o!==t&&o;o=(0, r.readByte)()(e)){if(e.pos+o>=a){var d=a-e.pos;n.push((0, r.readBytes)(d)(e)),i+=d;break}n.push((0, r.readBytes)(o)(e)),i+=o;}for(var s=new Uint8Array(i),c=0,u=0;u<n.length;u++)s.set(n[u],c),c+=n[u].length;return s}},i=(0, t.conditional)({gce:[{codes:(0, r.readBytes)(2)},{byteSize:(0, r.readByte)()},{extras:(0, r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0, r.readUnsigned)(!0)},{transparentColorIndex:(0, r.readByte)()},{terminator:(0, r.readByte)()}]},(function(e){var t=(0, r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),o=(0, t.conditional)({image:[{code:(0, r.readByte)()},{descriptor:[{left:(0, r.readUnsigned)(!0)},{top:(0, r.readUnsigned)(!0)},{width:(0, r.readUnsigned)(!0)},{height:(0, r.readUnsigned)(!0)},{lct:(0, r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0, t.conditional)({lct:(0, r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0, r.readByte)()},a]}]},(function(e){return 44===(0, r.peekByte)()(e)})),s=(0, t.conditional)({text:[{codes:(0, r.readBytes)(2)},{blockSize:(0, r.readByte)()},{preData:function(e,t,n){return (0, r.readBytes)(n.text.blockSize)(e)}},a]},(function(e){var t=(0, r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),c=(0, t.conditional)({application:[{codes:(0, r.readBytes)(2)},{blockSize:(0, r.readByte)()},{id:function(e,t,n){return (0, r.readString)(n.blockSize)(e)}},a]},(function(e){var t=(0, r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),u=(0, t.conditional)({comment:[{codes:(0, r.readBytes)(2)},a]},(function(e){var t=(0, r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),l=[{header:[{signature:(0, r.readString)(3)},{version:(0, r.readString)(3)}]},{lsd:[{width:(0, r.readUnsigned)(!0)},{height:(0, r.readUnsigned)(!0)},{gct:(0, r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0, r.readByte)()},{pixelAspectRatio:(0, r.readByte)()}]},(0, t.conditional)({gct:(0, r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0, t.loop)([i,c,u,o,s],(function(e){var t=(0, r.peekByte)()(e);return 33===t||44===t}))}];e.default=l;}(r);var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.deinterlace=void 0;var w=function(e,t){for(var r=new Array(e.length),n=e.length/t,a=function(n,a){var i=e.slice(a*t,(a+1)*t);r.splice.apply(r,[n*t,t].concat(i));},i=[0,4,2,1],o=[8,8,4,2],d=0,s=0;s<4;s++)for(var c=i[s];c<n;c+=o[s])a(c,d),d++;return r};m.deinterlace=w;var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.lzw=void 0;var B=function(e,t,r){var n,a,i,o,d,s,c,u,l,f,p,g,y,h,v,m,w=4096,x=-1,B=r,b=new Array(r),k=new Array(w),A=new Array(w),U=new Array(w+1);for(d=(a=1<<(f=e))+1,n=a+2,c=x,i=(1<<(o=f+1))-1,u=0;u<a;u++)k[u]=0,A[u]=u;for(p=g=y=h=v=m=0,l=0;l<B;){if(0===h){if(g<o){p+=t[m]<<g,g+=8,m++;continue}if(u=p&i,p>>=o,g-=o,u>n||u==d)break;if(u==a){i=(1<<(o=f+1))-1,n=a+2,c=x;continue}if(c==x){U[h++]=A[u],c=u,y=u;continue}for(s=u,u==n&&(U[h++]=y,u=c);u>a;)U[h++]=A[u],u=k[u];y=255&A[u],U[h++]=y,n<w&&(k[n]=c,A[n]=y,0==(++n&i)&&n<w&&(o++,i+=n)),c=s;}h--,b[v++]=U[h],l++;}for(l=v;l<B;l++)b[l]=0;return b};x.lzw=B,Object.defineProperty(t,"__esModule",{value:!0});var b=t.decompressFrames=t.decompressFrame=C=t.parseGIF=void 0,k=I(r),A=n,U=d,S=m,z=x;function I(e){return e&&e.__esModule?e:{default:e}}var _=function(e){var t=new Uint8Array(e);return (0, A.parse)((0, U.buildStream)(t),k.default)},C=t.parseGIF=_,j=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var a=4*n,i=e.pixels[n],o=e.colorTable[i]||[0,0,0];r[a]=o[0],r[a+1]=o[1],r[a+2]=o[2],r[a+3]=i!==e.transparentIndex?255:0;}return r},M=function(e,t,r){if(e.image){var n=e.image,a=n.descriptor.width*n.descriptor.height,i=(0, z.lzw)(n.data.minCodeSize,n.data.blocks,a);n.descriptor.lct.interlaced&&(i=(0, S.deinterlace)(i,n.descriptor.width));var o={pixels:i,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?o.colorTable=n.lct:o.colorTable=t,e.gce&&(o.delay=10*(e.gce.delay||10),o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),r&&(o.patch=j(o)),o}console.warn("gif frame does not have associated image.");};t.decompressFrame=M;var F=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return M(r,e.gct,t)}))};let D,O,T;function P(e,t){return D??=document.createElement("canvas"),D.width=e,D.height=t,D.getContext("2d",{willReadFrequently:!0})}async function G(t,r){const n=C(t),a=b(n,!0),{width:i,height:o}=n.lsd,d=P(i,o),s=[],c=[];let u=0;for(const l of a){const t=n$1(l.delay||100);c.push(t),u+=t;const r=R(new ImageData(l.patch,l.dims.width,l.dims.height)),n=3===l.disposalType?d.getImageData(l.dims.left,l.dims.top,l.dims.width,l.dims.height):void 0;d.drawImage(r,l.dims.left,l.dims.top);const a=d.getImageData(0,0,i,o);s.push(a),1===l.disposalType||(2===l.disposalType?d.clearRect(l.dims.left,l.dims.top,l.dims.width,l.dims.height):3===l.disposalType&&d.putImageData(n,l.dims.left,l.dims.top));}return {frameCount:a.length,duration:u,frameDurations:c,getFrame:e=>s[e],width:i,height:o}}function R(e){return O??=document.createElement("canvas"),T??=O.getContext("2d",{willReadFrequently:!0}),O.width=e.width,O.height=e.height,T.putImageData(e,0,0),O}b=t.decompressFrames=F;const E=[71,73,70];function q(e){const t=new Uint8Array(e);return !E.some(((e,r)=>e!==t[r]))}function V(e){if(!q(e))return !1;const t=new DataView(e),r=t.getUint8(10);let n=13+(128&r?3*2**(1+(7&r)):0),a=0,i=!1;for(;!i;){switch(t.getUint8(n++)){case 33:if(!o())return !1;break;case 44:d();break;case 59:i=!0;break;default:return !1}if(a>1)return !0}function o(){switch(t.getUint8(n++)){case 249:s();break;case 1:c();break;case 254:u();break;case 255:l();break;default:return !1}return !0}function d(){a++,n+=8;const e=t.getUint8(n++);n+=128&e?3*2**(1+(7&e)):0,n++,f();}function s(){n++,n+=4,f();}function c(){a++,n++,n+=12,f();}function u(){f();}function l(){n++,n+=8,n+=3,f();}function f(){let e;for(;e=t.getUint8(n++);)n+=e;}return !1}

export { V as isAnimatedGIF, q as isGIF, G as parseGif };
