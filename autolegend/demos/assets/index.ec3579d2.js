import{g6 as n,gs as o,g7 as s,g9 as a,gf as l,gc as r,g8 as d,ga as _,gb as h}from"./main.4cbfea05.js";import"./preload-helper.387dac8f.js";const g=n({name:"SnowmanV",props:{fixture:{type:o,required:!0},message:String},data(){return{url:"https://i.ya-webdesign.com/images/evil-snowman-png-1.png"}},mounted(){this.$options.iApi,this.fixture,setTimeout(()=>{this.$el.parentNode.removeChild(this.$el),this.fixture.remove()},6e3)}}),f={class:"absolute top-0 right-0"},w=["src"];function $(e,t,p,i,c,m){return a(),l("div",f,[r("img",{style:{width:"250px"},src:e.url,alt:"Snowman",srcset:""},null,8,w)])}var x=s(g,[["render",$],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/snowman/snowman.vue"]]);const b=n({name:"SnowmanAppbarButtonV",methods:{togglePanel(){this.$iApi.fixture.add("snowman")}}}),v=r("span",{class:"block h-24"},"\u26C4",-1);function C(e,t,p,i,c,m){const u=d("appbar-button",!0);return a(),_(u,{onClickFunction:e.togglePanel,tooltip:"\u26C4"},{default:h(()=>[v]),_:1},8,["onClickFunction"])}var k=s(b,[["render",C],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/snowman/appbar-button.vue"]]);class B extends o{added(){this.$iApi.component("snowman-appbar-button",k);const t=this.extend(x,{propsData:{message:"I'm snowman prop.",fixture:this}});this.$vApp.$el.appendChild(t)}removed(){}}export{B as default};
