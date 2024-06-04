import{gA as i}from"./main.efb50b2c.js";import{S as d,L as m}from"./section-item.8662205a.js";class c{legendConfig=void 0;children=[];headerControls=[]}const s={},l={ADD_ITEM:(e,t)=>{if(t.parent===void 0)e.children=[...e.children,t.item];else{if(!(t.item instanceof d)&&!(t.item instanceof m)){console.error("attempted to add an unsupported legend item type");return}t.parent.children=[...t.parent.children,t.item]}},REMOVE_ITEM:(e,t)=>{const o=n=>(n=n.filter(r=>(r===t&&!r.children.length&&r.onRemoved(),r!==t)),n.forEach(r=>{r.children=o(r.children)}),n=n.filter(r=>!(r instanceof d&&!r.children.length&&r.content==="")),n);e.children=o(e.children)},REPLACE_ITEM:(e,t)=>{if(t.oldItem.parent===void 0){const o=e.children,n=o.indexOf(t.oldItem);n>-1&&(o[n]=t.newItem),e.children=o}else{const o=t.oldItem.parent.children,n=o.indexOf(t.oldItem);n>-1&&(o[n]=t.newItem),t.oldItem.parent.children=o}}},a={addItem:(e,t)=>{e.commit("ADD_ITEM",t)},removeItem:(e,t)=>{e.commit("REMOVE_ITEM",t)},replaceItem:(e,t)=>{e.commit("REPLACE_ITEM",t)}};var I=(e=>(e.children="legend/children",e.headerControls="legend/headerControls",e.addItem="legend/addItem",e.removeItem="legend/removeItem",e.replaceItem="legend/replaceItem",e))(I||{});function h(){const e=new c;return{namespaced:!0,state:e,getters:{...s},actions:{...a,...i.actions(e)},mutations:{...l,...i.mutations(e)}}}export{I as L,h as l};