import{f as n}from"./fabric-7086e574.js";import{hi as f,hE as s}from"./main-bbf05f59.js";import"./preload-helper-388ac9d5.js";class g extends f{get config(){return this.$iApi.fixture.get("export").config?.title}make(t){const e=this.config,i={text:"RAMP-Map / PCAR-Carte",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:30,top:0,left:0,originX:"center",originY:"top"};e&&(i.text=e.value);const o=s(i,t||{}),r=new n.fabric.Textbox(o.text,o);return Promise.resolve(r)}}export{g as default};
