import { an as ai, a3 as zt, a6 as Y, h as x, w, r, a as i, i as ii, ak as Ft, b as Ke, aE as ht, C as g, K as Kt } from './Theme-649bd40f.js';
import { n, o as o$1 } from './Button-256ac45f.js';
export { u as TooltipAm5 } from './Tooltip-97b470c3.js';
export { s as ColorSetAm5 } from './ColorSet-04144a31.js';
import './main-f8507314.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class l extends ai{setupDefaultRules(){super.setupDefaultRules(),this.rule("InterfaceColors").setAll({stroke:zt.fromHex(0),fill:zt.fromHex(2829099),primaryButton:zt.lighten(zt.fromHex(6788316),-.2),primaryButtonHover:zt.lighten(zt.fromHex(6779356),-.2),primaryButtonDown:zt.lighten(zt.fromHex(6872181),-.2),primaryButtonActive:zt.lighten(zt.fromHex(6872182),-.2),primaryButtonText:zt.fromHex(16777215),primaryButtonStroke:zt.lighten(zt.fromHex(6788316),-.2),secondaryButton:zt.fromHex(3881787),secondaryButtonHover:zt.lighten(zt.fromHex(3881787),.1),secondaryButtonDown:zt.lighten(zt.fromHex(3881787),.15),secondaryButtonActive:zt.lighten(zt.fromHex(3881787),.2),secondaryButtonText:zt.fromHex(12303291),secondaryButtonStroke:zt.lighten(zt.fromHex(3881787),-.2),grid:zt.fromHex(12303291),background:zt.fromHex(0),alternativeBackground:zt.fromHex(16777215),text:zt.fromHex(16777215),alternativeText:zt.fromHex(0),disabled:zt.fromHex(11382189),positive:zt.fromHex(5288704),negative:zt.fromHex(11730944)});}}class o extends ai{constructor(e,t){super(e,t),Object.defineProperty(this,"_dp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"responsiveRules",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this._dp=new Y([this._root._rootContainer.onPrivate("width",(e=>{this._isUsed()&&this._maybeApplyRules();})),this._root._rootContainer.onPrivate("height",(e=>{this._isUsed()&&this._maybeApplyRules();}))]);}static widthXXS(e,t){return e<=o.XXS}static widthXS(e,t){return e<=o.XS}static widthS(e,t){return e<=o.S}static widthM(e,t){return e<=o.M}static widthL(e,t){return e<=o.L}static widthXL(e,t){return e<=o.XL}static widthXXL(e,t){return e<=o.XXL}static heightXXS(e,t){return t<=o.XXS}static heightXS(e,t){return t<=o.XS}static heightS(e,t){return t<=o.S}static heightM(e,t){return t<=o.M}static heightL(e,t){return t<=o.L}static heightXL(e,t){return t<=o.XL}static heightXXL(e,t){return t<=o.XXL}static isXXS(e,t){return e<=o.XXS&&t<=o.XXS}static isXS(e,t){return e<=o.XS&&t<=o.XS}static isS(e,t){return e<=o.S&&t<=o.S}static isM(e,t){return e<=o.M&&t<=o.M}static isL(e,t){return e<=o.L&&t<=o.L}static isXL(e,t){return e<=o.XL&&t<=o.XL}static isXXL(e,t){return e<=o.XXL&&t<=o.XXL}static maybeXXS(e,t){return e<=o.XXS||t<=o.XXS}static maybeXS(e,t){return e<=o.XS||t<=o.XS}static maybeS(e,t){return e<=o.S||t<=o.S}static maybeM(e,t){return e<=o.M||t<=o.M}static maybeL(e,t){return e<=o.L||t<=o.L}static maybeXL(e,t){return e<=o.XL||t<=o.XL}static maybeXXL(e,t){return e<=o.XXL||t<=o.XXL}static newEmpty(e){return new this(e,!0)}addRule(e){return e.name&&!e.template&&(e.template=this.rule(e.name,e.tags)),this.responsiveRules.push(e),this._maybeApplyRule(e),e}removeRule(e){x(this.responsiveRules,e);}dispose(){this._dp&&this._dp.dispose();}_isUsed(){return -1!==this._root._rootContainer.get("themes").indexOf(this)}_maybeApplyRules(){w(this.responsiveRules,(e=>{this._maybeUnapplyRule(e);})),w(this.responsiveRules,(e=>{this._maybeApplyRule(e);}));}_maybeApplyRule(e){if(e.applied)return;const t=this._root._rootContainer.getPrivate("width"),i=this._root._rootContainer.getPrivate("height");e.relevant.call(e,t,i)&&(e.applied=!0,e.template&&e.settings&&e.template.setAll(e.settings),e.applying&&e.applying.call(e));}_maybeUnapplyRule(e){if(!e.applied)return;const t=this._root._rootContainer.getPrivate("width"),i=this._root._rootContainer.getPrivate("height");e.relevant.call(e,t,i)||(e.applied=!1,e.template&&e.template.removeAll(),e.removing&&e.removing.call(e));}setupDefaultRules(){super.setupDefaultRules();const e=e=>this.addRule(e);e({name:"Chart",relevant:o.widthXXS,settings:{paddingLeft:0,paddingRight:0}}),e({name:"Chart",relevant:o.heightXXS,settings:{paddingTop:0,paddingBottom:0}}),e({name:"Bullet",relevant:o.isXS,settings:{forceHidden:!0}}),e({name:"Legend",relevant:o.isXS,settings:{forceHidden:!0}}),e({name:"HeatLegend",tags:["vertical"],relevant:o.widthXS,settings:{forceHidden:!0}}),e({name:"HeatLegend",tags:["horizontal"],relevant:o.heightXS,settings:{forceHidden:!0}}),e({name:"Label",tags:["heatlegend","start"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"Label",tags:["heatlegend","end"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"Button",tags:["resize"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"AxisRendererX",relevant:o.heightXS,settings:{inside:!0}}),e({name:"AxisRendererY",relevant:o.widthXS,settings:{inside:!0}}),e({name:"AxisRendererXLabel",relevant:o.heightXS,settings:{minPosition:.1,maxPosition:.9}}),e({name:"AxisLabel",tags:["y"],relevant:o.widthXS,settings:{centerY:r,maxPosition:.9}}),e({name:"AxisLabel",tags:["x"],relevant:o.heightXXS,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["x","minor"],relevant:o.widthXXL,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["y"],relevant:o.widthXXS,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["y","minor"],relevant:o.heightXXL,settings:{forceHidden:!0}}),e({name:"AxisTick",tags:["x"],relevant:o.heightXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),e({name:"AxisTick",tags:["y"],relevant:o.widthXXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),e({name:"Grid",relevant:o.maybeXXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["radial"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["circular"],relevant:o.maybeS,settings:{inside:!0}}),e({name:"AxisTick",relevant:o.maybeS,settings:{inside:!0}}),e({name:"RadialLabel",tags:["circular"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"AxisTick",tags:["circular"],relevant:o.maybeXS,settings:{inside:!0}}),e({name:"PieChart",relevant:o.maybeXS,settings:{radius:i(99)}}),e({name:"PieChart",relevant:o.widthM,settings:{radius:i(99)}}),e({name:"RadialLabel",tags:["pie"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["pie"],relevant:o.widthM,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pie"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pie"],relevant:o.widthM,settings:{forceHidden:!0}}),e({name:"FunnelSeries",relevant:o.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["funnel","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["funnel","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["funnel","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["funnel","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"PyramidSeries",relevant:o.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["pyramid","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pyramid","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["pyramid","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pyramid","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"PictorialStackedSeries",relevant:o.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["pictorial","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pictorial","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["pictorial","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pictorial","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Label",tags:["flow","horizontal"],relevant:o.widthS,settings:{forceHidden:!0}}),e({name:"Label",tags:["flow","vertical"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Chord",relevant:o.maybeXS,settings:{radius:i(99)}}),e({name:"Label",tags:["hierarchy","node"],relevant:o.maybeXS,settings:{forceHidden:!0}});}}Object.defineProperty(o,"XXS",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(o,"XS",{enumerable:!0,configurable:!0,writable:!0,value:200}),Object.defineProperty(o,"S",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(o,"M",{enumerable:!0,configurable:!0,writable:!0,value:400}),Object.defineProperty(o,"L",{enumerable:!0,configurable:!0,writable:!0,value:600}),Object.defineProperty(o,"XL",{enumerable:!0,configurable:!0,writable:!0,value:800}),Object.defineProperty(o,"XXL",{enumerable:!0,configurable:!0,writable:!0,value:1e3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class u extends ii{constructor(){super(...arguments),Object.defineProperty(this,"thumb",{enumerable:!0,configurable:!0,writable:!0,value:this._makeThumb()}),Object.defineProperty(this,"startGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"endGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"_thumbBusy",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_endDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_thumbDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_gripDown",{enumerable:!0,configurable:!0,writable:!0,value:void 0});}_addOrientationClass(){this._settings.themeTags=Ft(this._settings.themeTags,["scrollbar",this._settings.orientation]),this._settings.background||(this._settings.background=n.new(this._root,{themeTags:Ft(this._settings.themeTags,["main","background"])}));}_makeButton(){return this.children.push(o$1.new(this._root,{themeTags:["resize","button",this.get("orientation")],icon:Ke.new(this._root,{themeTags:["icon"]})}))}_makeThumb(){return this.children.push(n.new(this._root,{themeTags:["thumb",this.get("orientation")]}))}_handleAnimation(t){t&&this._disposers.push(t.events.on("stopped",(()=>{this.setPrivateRaw("isBusy",!1),this._thumbBusy=!1;})));}_afterNew(){this._addOrientationClass(),super._afterNew();const t=this.startGrip,s=this.endGrip,e=this.thumb,a=this.get("background");a&&this._disposers.push(a.events.on("click",(t=>{this.setPrivateRaw("isBusy",!0);const s=this._display.toLocal(t.point),i=this.width(),a=this.height(),h=this.get("orientation");let r,n,o;r="vertical"==h?(s.y-e.height()/2)/a:(s.x-e.width()/2)/i,"vertical"==h?(n=r*a,o="y"):(n=r*i,o="x");const u=this.get("animationDuration",0);u>0?(this._thumbBusy=!0,this._handleAnimation(this.thumb.animate({key:o,to:n,duration:u,easing:this.get("animationEasing")}))):(this.thumb.set(o,n),this._root.events.once("frameended",(()=>{this.setPrivateRaw("isBusy",!1);})));}))),this._disposers.push(e.events.on("dblclick",(t=>{if(!ht(t.originalEvent,this))return;const s=this.get("animationDuration",0),e=this.get("animationEasing");this.animate({key:"start",to:0,duration:s,easing:e}),this.animate({key:"end",to:1,duration:s,easing:e});}))),this._disposers.push(t.events.on("pointerdown",(()=>{this.setPrivateRaw("isBusy",!0),this._startDown=!0,this._gripDown="start";}))),this._disposers.push(s.events.on("pointerdown",(()=>{this.setPrivateRaw("isBusy",!0),this._endDown=!0,this._gripDown="end";}))),this._disposers.push(e.events.on("pointerdown",(()=>{this.setPrivateRaw("isBusy",!0),this._thumbDown=!0,this._gripDown=void 0;}))),this._disposers.push(t.events.on("globalpointerup",(()=>{this._startDown&&this.setPrivateRaw("isBusy",!1),this._startDown=!1;}))),this._disposers.push(s.events.on("globalpointerup",(()=>{this._endDown&&this.setPrivateRaw("isBusy",!1),this._endDown=!1;}))),this._disposers.push(e.events.on("globalpointerup",(()=>{this._thumbDown&&this.setPrivateRaw("isBusy",!1),this._thumbDown=!1;}))),this._disposers.push(t.on("x",(()=>{this._updateThumb();}))),this._disposers.push(s.on("x",(()=>{this._updateThumb();}))),this._disposers.push(t.on("y",(()=>{this._updateThumb();}))),this._disposers.push(s.on("y",(()=>{this._updateThumb();}))),this._disposers.push(e.events.on("positionchanged",(()=>{this._updateGripsByThumb();}))),"vertical"==this.get("orientation")?(t.set("x",0),s.set("x",0),this._disposers.push(e.adapters.add("y",(t=>Math.max(Math.min(Number(t),this.height()-e.height()),0)))),this._disposers.push(e.adapters.add("x",(t=>this.width()/2))),this._disposers.push(t.adapters.add("x",(t=>this.width()/2))),this._disposers.push(s.adapters.add("x",(t=>this.width()/2))),this._disposers.push(t.adapters.add("y",(t=>Math.max(Math.min(Number(t),this.height()),0)))),this._disposers.push(s.adapters.add("y",(t=>Math.max(Math.min(Number(t),this.height()),0))))):(t.set("y",0),s.set("y",0),this._disposers.push(e.adapters.add("x",(t=>Math.max(Math.min(Number(t),this.width()-e.width()),0)))),this._disposers.push(e.adapters.add("y",(t=>this.height()/2))),this._disposers.push(t.adapters.add("y",(t=>this.height()/2))),this._disposers.push(s.adapters.add("y",(t=>this.height()/2))),this._disposers.push(t.adapters.add("x",(t=>Math.max(Math.min(Number(t),this.width()),0)))),this._disposers.push(s.adapters.add("x",(t=>Math.max(Math.min(Number(t),this.width()),0)))));}_updateChildren(){super._updateChildren(),(this.isDirty("end")||this.isDirty("start")||this._sizeDirty)&&this.updateGrips();}_changed(){if(super._changed(),this.isDirty("start")||this.isDirty("end")){const t="rangechanged";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this,start:this.get("start",0),end:this.get("end",1),grip:this._gripDown});}}updateGrips(){const t=this.startGrip,s=this.endGrip,e=this.get("orientation"),i=this.height(),a=this.width();"vertical"==e?(t.set("y",i*this.get("start",0)),s.set("y",i*this.get("end",1))):(t.set("x",a*this.get("start",0)),s.set("x",a*this.get("end",1)));const h=this.getPrivate("positionTextFunction"),r=Math.round(100*this.get("start",0)),n=Math.round(100*this.get("end",0));let o,u;h?(o=h.call(this,this.get("start",0)),u=h.call(this,this.get("end",0))):(o=r+"%",u=n+"%"),t.set("ariaLabel",this._t("From %1",void 0,o)),t.set("ariaValueNow",""+r),t.set("ariaValueText",r+"%"),t.set("ariaValueMin","0"),t.set("ariaValueMax","100"),s.set("ariaLabel",this._t("To %1",void 0,u)),s.set("ariaValueNow",""+n),s.set("ariaValueText",n+"%"),s.set("ariaValueMin","0"),s.set("ariaValueMax","100");}_updateThumb(){const t=this.thumb,s=this.startGrip,e=this.endGrip,i=this.height(),h=this.width();let r=s.x(),n=e.x(),o=s.y(),u=e.y(),d=0,p=1;"vertical"==this.get("orientation")?g(o)&&g(u)&&(this._thumbBusy||t.isDragging()||(t.set("height",u-o),t.set("y",o)),d=o/i,p=u/i):g(r)&&g(n)&&(this._thumbBusy||t.isDragging()||(t.set("width",n-r),t.set("x",r)),d=r/h,p=n/h),!this.getPrivate("isBusy")||this.get("start")==d&&this.get("end")==p||(this.set("start",d),this.set("end",p));const l=this.getPrivate("positionTextFunction"),m=Math.round(100*this.get("start",0)),g$1=Math.round(100*this.get("end",0));let b,c;l?(b=l.call(this,this.get("start",0)),c=l.call(this,this.get("end",0))):(b=m+"%",c=g$1+"%"),t.set("ariaLabel",this._t("From %1 to %2",void 0,b,c)),t.set("ariaValueNow",""+m),t.set("ariaValueText",m+"%");}_updateGripsByThumb(){const t=this.thumb,s=this.startGrip,e=this.endGrip;if("vertical"==this.get("orientation")){const i=t.height();s.set("y",t.y()),e.set("y",t.y()+i);}else {const i=t.width();s.set("x",t.x()),e.set("x",t.x()+i);}}}Object.defineProperty(u,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Scrollbar"}),Object.defineProperty(u,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ii.classNames.concat([u.className])});class d extends ai{setupDefaultRules(){super.setupDefaultRules(),this.rule("Component").setAll({interpolationDuration:600}),this.rule("Hierarchy").set("animationDuration",600),this.rule("Scrollbar").set("animationDuration",600),this.rule("Tooltip").set("animationDuration",300),this.rule("MapChart").set("animationDuration",1e3),this.rule("MapChart").set("wheelDuration",300),this.rule("Entity").setAll({stateAnimationDuration:600}),this.rule("Sprite").states.create("default",{stateAnimationDuration:600}),this.rule("Tooltip",["axis"]).setAll({animationDuration:200}),this.rule("WordCloud").set("animationDuration",500),this.rule("Polygon").set("animationDuration",600),this.rule("ArcDiagram").set("animationDuration",600);}}const p=["#2888B8","#EB7028","#48A375","#9370B1","#e55035","#3d9ccc","#DC7B04","#b87bb0","#3fa681","#EE6386"].map((t=>Kt(t)));

export { d as AnimatedThemeAm5, l as DarkThemeAm5, o as ResponsiveThemeAm5, u as ScrollbarAm5, ai as ThemeAm5, Kt as colorAm5, p as esriChartColorSet };
