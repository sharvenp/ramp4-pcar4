import"./main-0e79698b.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const l={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container"},d={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"},u=5,S={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank"},r="calcite-list-item-group",s="calcite-list-item";function m(e){const t=e.target.assignedElements({flatten:!0}),c=t.filter(n=>n?.matches(r)).map(n=>Array.from(n.querySelectorAll(s))).reduce((n,a)=>[...n,...a],[]),o=t.filter(n=>n?.matches(s));return[...c,...o]}function p(e){e.forEach(t=>{t.setPosition=e.indexOf(t)+1,t.setSize=e.length})}function C(e,t=!1){const c=t?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(c,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{l as C,S as I,u as M,d as S,C as a,m as g,p as u};
