import{f as n}from"./fabric.301f9abe.js";import{gs as f,gP as s}from"./main.4cbfea05.js";import"./preload-helper.387dac8f.js";class l extends f{get config(){return this.$iApi.fixture.get("export").config?.title}make(t){const e=this.config,i={text:"RAMP-Map / PCAR-Carte",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:30,top:0,left:0,originX:"center",originY:"top"};e&&(i.text=e.value);const o=s(i,t||{}),r=new n.fabric.Textbox(o.text,o);return Promise.resolve(r)}}export{l as default};