import{g6 as o,gv as t,g7 as h,g9 as l,gf as n,gd as d,gk as p,gl as c,gc as e,gs as v}from"./main.4cbfea05.js";import"./preload-helper.387dac8f.js";const _=o({name:"CrosshairsV",data(){return{visible:!1,handlers:[]}},mounted(){this.handlers.push(this.$iApi.event.on(t.MAP_EXTENTCHANGE,()=>{this.$iApi.geo.map.keysActive&&(this.visible=!0)})),this.handlers.push(this.$iApi.event.on(t.MAP_FOCUS,()=>{this.$iApi.geo.map.mouseFocus||(this.visible=!0)})),this.handlers.push(this.$iApi.event.on(t.MAP_MOUSEDOWN,()=>{this.visible=!1})),this.handlers.push(this.$iApi.event.on(t.MAP_BLUR,()=>{this.visible=!1}))},beforeUnmount(){this.handlers.forEach(s=>this.$iApi.event.off(s))}}),f=s=>(p("data-v-127554b4"),s=s(),c(),s),u=f(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},[e("g",{fill:"#545353",stroke:"#fff",id:"crosshairs"},[e("ellipse",{ry:".254",rx:".262",id:"path3808",cx:"12",cy:"12","stroke-width":".076"}),e("path",{d:"M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",id:"rect4632-6","stroke-width":".09"}),e("path",{d:"M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",id:"rect4632-6-0","stroke-width":".09"}),e("path",{d:"M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",id:"rect4632-6-4","stroke-width":".09"}),e("path",{d:"M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",id:"rect4632-6-9","stroke-width":".09"})])],-1)),m=[u];function g(s,i,r,a,w,$){return l(),n("div",{class:d(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230",{"opacity-0":!s.visible}])},m,2)}var A=h(_,[["render",g],["__scopeId","data-v-127554b4"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/crosshairs/crosshairs.vue"]]);class k extends v{added(){const{destroy:i,el:r}=this.mount(A,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]),this.removed=()=>{i()}}}export{k as default};
