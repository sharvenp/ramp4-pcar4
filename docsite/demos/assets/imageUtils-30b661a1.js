import{e as I,k as L}from"./main-69e2a69d.js";import{n as M}from"./BitmapTileContainer-5687d34d.js";const b=t=>{let e=class extends t{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new M(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren()}};return e=I([L("esri.views.2d.layers.BitmapTileLayerView2D")],e),e};function C(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function T(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function y(t,e,n,o){if(n.level===o.level)return e;const i=t.tileInfo.size,r=t.getTileResolution(n.level),l=t.getTileResolution(o.level);let a=t.getLODInfoAt(o.level);const m=a.getXForColumn(o.col),d=a.getYForRow(o.row);a=t.getLODInfoAt(n.level);const u=a.getXForColumn(n.col),w=a.getYForRow(n.row),s=C(e)/i[0],h=T(e)/i[1],g=Math.round(s*((m-u)/r)),f=Math.round(h*(-(d-w)/r)),v=Math.round(s*i[0]*(l/r)),p=Math.round(h*i[1]*(l/r)),c=V(i);return c.getContext("2d").drawImage(e,g,f,v,p,0,0,i[0],i[1]),c}function V(t){const e=document.createElement("canvas");return[e.width,e.height]=t,e}export{y as n,V as o,b as t};
