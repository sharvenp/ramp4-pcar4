import{c3 as r,bZ as c,fp as a,fr as m,c9 as p,ch as u,fo as i,c5 as d,c7 as _,ca as f,cb as h}from"./main-0e79698b.js";import"./preload-helper-388ac9d5.js";const b=["src"],x=r({__name:"snowman",props:{fixture:{type:c,required:!0},message:String},setup(n){const e=n,t=a(),s=a("https://i.ya-webdesign.com/images/evil-snowman-png-1.png");return m(()=>{setTimeout(()=>{t.value.parentNode.removeChild(t.value),e.fixture.remove()},6e3)}),(l,o)=>(p(),u("div",{class:"absolute top-0 right-0",ref_key:"el",ref:t},[i("img",{style:{width:"250px"},src:s.value,alt:"Snowman",srcset:""},null,8,b)],512))}}),g=i("span",{class:"block h-24"},"⛄",-1),w=r({__name:"appbar-button",setup(n){const e=d("iApi"),t=()=>{e.fixture.add("snowman")};return(s,l)=>{const o=_("appbar-button",!0);return p(),f(o,{onClickFunction:t,tooltip:"⛄"},{default:h(()=>[g]),_:1})}}});class C extends c{added(){this.$iApi.component("snowman-appbar-button",w);const e=this.extend(x,{propsData:{message:"I'm snowman prop.",fixture:this}});this.$vApp.$el.appendChild(e)}removed(){}}export{C as default};
