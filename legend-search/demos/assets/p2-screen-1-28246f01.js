import{gK as c,gL as g,gO as i,gQ as b,gR as u,gS as o,hp as s,h6 as r,gP as m,gT as n}from"./main-95e6e76d.js";import"./preload-helper-388ac9d5.js";const d={class:"flex flex-row justify-center items-center mt-16"},f={class:"mt-16"},w=c({__name:"p2-screen-1",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(e){const{t:a}=g();return(h,t)=>{const l=i("panel-screen");return b(),u(l,{panel:e.panel},{header:o(()=>[s(" Gazebo/Panel 2/Screen A ")]),content:o(()=>[s(r(m(a)("gz.hello"))+" ",1),n("div",d,[n("button",{type:"button",onClick:t[0]||(t[0]=p=>e.panel.show({screen:"p-2-screen-2",props:{greeting:"Howdy?"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"}," Go back to B "),n("button",{type:"button",onClick:t[1]||(t[1]=p=>e.panel.show("p-2-screen-3")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," Go to C ")]),n("p",f,r(e.greeting),1)]),_:1},8,["panel"])}}});export{w as default};
