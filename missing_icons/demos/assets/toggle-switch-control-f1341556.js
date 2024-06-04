import{hy as k,gN as m,gQ as O,gX as V,h0 as C,gT as f,gU as w,h2 as B,gV as T,hz as j,hn as q,hm as D,h1 as N,gK as K,gY as S,hA as I,hv as M,hB as H,g_ as z,hp as R,h6 as U,gR as E,gP as P,h3 as A,h4 as Q,gW as W}from"./main-7ed7b27d.js";var L={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return n=>["number","string","boolean"].indexOf(typeof n)!==-1||n==null},required:!1},modelValue:{validator:function(e){return n=>["number","string","boolean"].indexOf(typeof n)!==-1||n==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,n){const a=function(u,c,o){const{value:t,modelValue:d,falseValue:i,trueValue:l,disabled:p}=k(u),r=d&&d.value!==void 0?d:t,h=m(()=>r.value===l.value),y=v=>{c.emit("input",v),c.emit("update:modelValue",v),c.emit("change",v)},x=()=>{y(l.value)},_=()=>{y(i.value)};return[null,void 0,!1,0,"0","off"].indexOf(r.value)!==-1&&[i.value,l.value].indexOf(r.value)===-1&&_(),[!0,1,"1","on"].indexOf(r.value)!==-1&&[i.value,l.value].indexOf(r.value)===-1&&x(),{externalValue:r,checked:h,update:y,check:x,uncheck:_,handleInput:v=>{y(v.target.checked?l.value:i.value)},handleClick:()=>{p.value||(h.value?_():x())}}}(e,n),s=function(u,c,o){const{trueValue:t,falseValue:d,onLabel:i,offLabel:l}=k(u),p=o.checked,r=o.update;return{label:m(()=>{let h=p.value?i.value:l.value;return h||(h="&nbsp;"),h}),toggle:()=>{r(p.value?d.value:t.value)},on:()=>{r(t.value)},off:()=>{r(d.value)}}}(e,0,{checked:a.checked,update:a.update}),g=function(u,c,o){const t=k(u),d=t.disabled,i=o.checked,l=m(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...t.classes.value}));return{classList:m(()=>({container:l.value.container,toggle:[l.value.toggle,d.value?i.value?l.value.toggleOnDisabled:l.value.toggleOffDisabled:i.value?l.value.toggleOn:l.value.toggleOff],handle:[l.value.handle,d.value?i.value?l.value.handleOnDisabled:l.value.handleOffDisabled:i.value?l.value.handleOn:l.value.handleOff],label:l.value.label}))}}(e,0,{checked:a.checked}),b=function(u,c,o){const{disabled:t}=k(u),d=o.check,i=o.uncheck,l=o.checked;return{handleSpace:()=>{t.value||(l.value?i():d())}}}(e,0,{check:a.check,uncheck:a.uncheck,checked:a.checked});return{...a,...g,...s,...b}}};const X=["tabindex","aria-checked","aria-describedby","aria-labelledby"],Y=["id","name","value","checked","disabled"],$=["innerHTML"],F=["checked"];L.render=function(e,n,a,s,g,b){return O(),V("div",j({class:e.classList.container,tabindex:a.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":a.describedby,"aria-labelledby":a.labelledby,role:"switch"},a.aria,{onKeypress:n[1]||(n[1]=q(D((...u)=>e.handleSpace&&e.handleSpace(...u),["prevent"]),["space"]))}),[C(f("input",{type:"checkbox",id:a.id,name:a.name,value:a.trueValue,checked:e.checked,disabled:a.disabled},null,8,Y),[[N,!1]]),f("div",{class:w(e.classList.toggle),onClick:n[0]||(n[0]=(...u)=>e.handleClick&&e.handleClick(...u))},[f("span",{class:w(e.classList.handle)},null,2),B(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[f("span",{class:w(e.classList.label),innerHTML:e.label},null,10,$)]),a.required?(O(),V("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,F)):T("v-if",!0)],2)],16,X)},L.__file="src/Toggle.vue";const G=e=>(A("data-v-954ce775"),e=e(),Q(),e),J={class:"flex flex-row rv-label"},Z={class:"flex items-center"},ee=["innerHTML"],le=G(()=>f("div",{class:"flex-1"},null,-1)),ae=K({__name:"toggle-switch-control",props:{config:{type:Object,required:!0},name:String,icon:String},emits:["toggled"],setup(e,{emit:n}){const a=e,s=S(a.config.value),g=S(!!a.config.disabled),b=S(0),u=I([]);u.push(M(H(a,"config"),(o,t)=>{s.value=o.value,g.value=!!o.disabled,b.value+=g.value!==t.disabled?1:0},{deep:!0}));const c=()=>{g.value||(s.value=!s.value,n("toggled",s.value))};return z(()=>{u.forEach(o=>o())}),(o,t)=>(O(),V("div",J,[f("div",Z,[f("div",{innerHTML:e.icon,class:"p-8 pl-0"},null,8,ee),R(" "+U(e.name),1)]),le,(O(),E(P(L),{onChange:t[0]||(t[0]=d=>n("toggled",d)),onKeyupCapture:[q(D(c,["stop"]),["enter"]),q(D(c,["stop"]),["space"])],disabled:g.value,key:b.value,modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=d=>s.value=d),classes:{container:"inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30",toggle:"flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-blue-500 border-blue-500 justify-start text-white",toggleOff:"bg-gray-200 border-gray-200 justify-end text-gray-700",toggleOnDisabled:"bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed",toggleOffDisabled:"bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed",handle:"inline-block bg-white w-15 h-15 top-0 rounded-full absolute transition-all",handleOn:"left-full transform -translate-x-full",handleOff:"left-0",handleOnDisabled:"bg-gray-100 left-full transform -translate-x-full",handleOffDisabled:"bg-gray-100 left-0",label:"text-center w-8 border-box whitespace-nowrap select-none"}},null,8,["onKeyupCapture","disabled","modelValue"]))]))}});const ne=W(ae,[["__scopeId","data-v-954ce775"]]);export{ne as T};
