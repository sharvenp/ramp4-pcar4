import{ea as I,eb as L,kQ as g,l5 as p,ec as i,kX as A,kR as S,eg as w}from"./main-5cf1c59e.js";import{u as D}from"./interactive-573cbe88.js";import{g as z,u as M,a as v,I as f,C as a,S as C}from"./utils3-fad1081a.js";import{s as _,a as P,c as H}from"./loadable-25ad9e4e.js";import{d as B}from"./icon-ac93cdd1.js";import"./preload-helper-388ac9d5.js";import"./observers-4f67f1fb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const O="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:300;outline:2px solid var(--calcite-ui-brand)}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}",b=new Map,F="calcite-list",y=I(class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=g(this,"calciteListItemSelect",6),this.calciteInternalListItemSelect=g(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemActive=g(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=g(this,"calciteInternalFocusPreviousItem",6),this.handleContentSlotChange=t=>{this.hasCustomContent=p(t)},this.handleActionsStartSlotChange=t=>{this.hasActionsStart=p(t)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=p(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=p(t)},this.handleContentEndSlotChange=t=>{this.hasContentEnd=p(t)},this.handleDefaultSlotChange=t=>{const{parentListEl:e}=this,n=z(t);M(n);const o=!!n.length;o&&e&&!e.openable&&(e.openable=!0),this.openable=o,o||(this.open=!1)},this.toggleOpen=()=>{this.open=!this.open},this.itemClicked=()=>{this.toggleSelected(),this.calciteInternalListItemActive.emit()},this.toggleSelected=()=>{this.disabled||(this.selectionMode!=="none"&&(this.selected=!this.selected),this.calciteListItemSelect.emit())},this.handleItemKeyDown=t=>{const{key:e}=t,n=t.composedPath(),{containerEl:o,contentEl:c,actionsStartEl:s,actionsEndEl:l,open:u,openable:m}=this,r=[s,c,l].filter(Boolean),d=r.findIndex(h=>n.includes(h));if(e===" ")t.preventDefault(),this.toggleSelected();else if(e==="ArrowRight"){t.preventDefault();const h=d+1;d===-1?!u&&m?(this.open=!0,this.focusCell(null)):r[0]&&this.focusCell(r[0]):r[d]&&r[h]&&this.focusCell(r[h])}else if(e==="ArrowLeft"){t.preventDefault();const h=d-1;d===-1?(this.focusCell(null),u&&m?this.open=!1:this.calciteInternalFocusPreviousItem.emit()):d===0?(this.focusCell(null),o.focus()):r[d]&&r[h]&&this.focusCell(r[h])}},this.focusCellNull=()=>{this.focusCell(null)},this.focusCell=(t,e=!0)=>{const{contentEl:n,actionsStartEl:o,actionsEndEl:c,parentListEl:s}=this;e&&b.set(s,null),[o,n,c].filter(Boolean).forEach((l,u)=>{const m="tabindex";l===t?(l.setAttribute(m,"0"),e&&b.set(s,u)):l.removeAttribute(m)}),t?.focus()},this.active=!1,this.description=void 0,this.disabled=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.level=null,this.visualLevel=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1}activeHandler(t){t||this.focusCell(null,!1)}handleSelectedChange(t){t&&this.calciteInternalListItemSelect.emit()}connectedCallback(){const{el:t}=this;this.parentListEl=t.closest(F),this.level=v(t)+1,this.visualLevel=v(t,!0),this.setSelectionDefaults()}componentWillLoad(){_(this)}componentDidLoad(){P(this)}componentDidRender(){D(this,"managed")}async setFocus(){await H(this);const{containerEl:t,contentEl:e,actionsStartEl:n,actionsEndEl:o,parentListEl:c}=this,s=b.get(c);if(typeof s=="number"){const l=[n,e,o].filter(Boolean);l[s]?this.focusCell(l[s]):t?.focus();return}t?.focus()}renderSelected(){const{selected:t,selectionMode:e,selectionAppearance:n}=this;return e==="none"||n==="border"?null:i("td",{class:a.selectionContainer,key:"selection-container",onClick:this.itemClicked},i("calcite-icon",{icon:t?e==="multiple"?f.selectedMultiple:f.selectedSingle:f.unselected,scale:"s"}))}renderOpen(){const{el:t,open:e,openable:n,parentListEl:o}=this,c=A(t);return n?i("td",{class:a.openContainer,key:"open-container",onClick:this.toggleOpen},i("calcite-icon",{icon:e?f.open:c==="rtl"?f.closedRTL:f.closedLTR,scale:"s"})):o?.openable?i("td",{class:a.openContainer,key:"open-container",onClick:this.itemClicked},i("calcite-icon",{icon:f.blank,scale:"s"})):null}renderActionsStart(){const{label:t,hasActionsStart:e}=this;return i("td",{"aria-label":t,class:a.actionsStart,hidden:!e,key:"actions-start-container",ref:n=>this.actionsStartEl=n,role:"gridcell"},i("slot",{name:C.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:t,hasActionsEnd:e}=this;return i("td",{"aria-label":t,class:a.actionsEnd,hidden:!e,key:"actions-end-container",ref:n=>this.actionsEndEl=n,role:"gridcell"},i("slot",{name:C.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return i("div",{class:a.contentStart,hidden:!t},i("slot",{name:C.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:t}=this;return i("div",{class:a.customContent,hidden:!t},i("slot",{name:C.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:t}=this;return i("div",{class:a.contentEnd,hidden:!t},i("slot",{name:C.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentProperties(){const{label:t,description:e,hasCustomContent:n}=this;return!n&&(t||e)?i("div",{class:a.content,key:"content"},t?i("div",{class:a.label,key:"label"},t):null,e?i("div",{class:a.description,key:"description"},e):null):null}renderContentContainer(){const{description:t,label:e,selectionMode:n,hasCustomContent:o}=this,c=o||!!e||!!t,s=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return i("td",{"aria-label":e,class:{[a.contentContainer]:!0,[a.contentContainerSelectable]:n!=="none",[a.contentContainerHasCenterContent]:c},key:"content-container",onClick:this.itemClicked,ref:l=>this.contentEl=l,role:"gridcell"},s)}render(){const{openable:t,open:e,level:n,setPosition:o,setSize:c,active:s,label:l,selected:u,selectionAppearance:m,selectionMode:r}=this,d=r!=="none"&&m==="border",h=d&&u,x=d&&!u;return i(w,null,i("tr",{"aria-expanded":t?S(e):null,"aria-label":l,"aria-level":n,"aria-posinset":o,"aria-selected":S(u),"aria-setsize":c,class:{[a.container]:!0,[a.containerBorderSelected]:h,[a.containerBorderUnselected]:x},onFocus:this.focusCellNull,onKeyDown:this.handleItemKeyDown,ref:k=>this.containerEl=k,role:"row",style:{"--calcite-list-item-spacing-indent-multiplier":`${this.visualLevel}`},tabIndex:s?0:-1},this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),i("div",{class:{[a.nestedContainer]:!0,[a.nestedContainerHidden]:t&&!e}},i("slot",{onSlotchange:this.handleDefaultSlotChange})))}setSelectionDefaults(){const{parentListEl:t,selectionMode:e,selectionAppearance:n}=this;t&&(e||(this.selectionMode=t.selectionMode),n||(this.selectionAppearance=t.selectionAppearance))}get el(){return this}static get watchers(){return{active:["activeHandler"],selected:["handleSelectedChange"]}}static get style(){return O}},[1,"calcite-list-item",{active:[4],description:[1],disabled:[516],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],level:[32],visualLevel:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],setFocus:[64]}]);function E(){if(typeof customElements>"u")return;["calcite-list-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,y);break;case"calcite-icon":customElements.get(e)||B();break}})}E();const W=y,X=E;export{W as CalciteListItem,X as defineCustomElement};
