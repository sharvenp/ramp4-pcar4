import{ei as o}from"./main-e6c796d9.js";function l(i){return t[e(i)]||c}function e(i){return i instanceof Blob?i.type:g(i.url)}function g(i){const a=o(i);return p[a]||n}const t={},n="text/plain",c=t[n],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const i in p)t[p[i]]=i;export{l as t};
