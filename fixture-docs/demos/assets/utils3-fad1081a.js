/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const i={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container"},l={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"},d=5,u={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank"},r="calcite-list-item-group",s="calcite-list-item";function S(e){const t=e.target.assignedElements({flatten:!0}),c=t.filter(n=>n?.matches(r)).map(n=>Array.from(n.querySelectorAll(s))).reduce((n,a)=>[...n,...a],[]),o=t.filter(n=>n?.matches(s));return[...c,...o]}function m(e){e.forEach(t=>{t.setPosition=e.indexOf(t)+1,t.setSize=e.length})}function p(e,t=!1){const c=t?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(c,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{i as C,u as I,d as M,l as S,p as a,S as g,m as u};