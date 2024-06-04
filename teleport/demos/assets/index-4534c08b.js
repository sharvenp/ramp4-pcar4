import{hi as o,hM as a,hl as h,h8 as g}from"./main-bbf05f59.js";import{C as c,G as f}from"./screen-03db1854.js";import"./preload-helper-388ac9d5.js";import"./linkify-html.es-e51a510f.js";class d{constructor(e){this.baseLayer=e,this._title=e.title??"",this._showFilter=e.showFilter??!0,this._filterByExtent=e.filterByExtent??!1,this._columns={},this._open=!0,this._filtered=!0,this._search=e.search??!0,this._searchFilter=e.searchFilter??"",this._applyToMap=e.applyToMap??!1,this.parsecolumns()}parsecolumns(){this.baseLayer.columns&&this.baseLayer.columns.forEach(e=>{this._columns[e.field]=new c(e)})}getColumnFilterValue(e,t){const r=this._columns[e].filter;return t==="min"?r.min:t==="max"?r.max:r.value}setColumnFilterValue(e,t,r){let i=t;if(t&&typeof t=="string"){const s=/[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;i=t.replace(s,"\\$&")}r==="min"?this._columns[e].filter.min=i:r==="max"?this._columns[e].filter.max=i:this._columns[e].filter.value=i,this._columns[e].filter.value!==""?this._filtered=!0:this._checkFilters()}clearFilters(){Object.entries(this._columns).forEach(([,e])=>{e.filter.static||(e.filter.min=null,e.filter.max=null,e.filter.value="")}),this._filterByExtent=!1,this._filtered=!1,this._searchFilter=""}_checkFilters(){this._filtered=Object.values(this._columns).some(e=>e.filter.value!==""||e.filter.min||e.filter.max)}get filtered(){return this._filtered}get title(){return this._title}set title(e){this._title=e}get colFilter(){return this._showFilter}set colFilter(e){this._showFilter=e}get filterByExtent(){return this._filterByExtent}set filterByExtent(e){this._filterByExtent=e}get open(){return this._open}set open(e){this._open=e}get search(){return this._search}set search(e){this._search=e}get searchFilter(){return this._searchFilter}set searchFilter(e){this._searchFilter=e}get applyToMap(){return this._applyToMap}set applyToMap(e){this._applyToMap=e}get columns(){return this._columns}set columns(e){this._columns=e}}class p extends o{toggleGrid(e,t){const r=a(this.$vApp.$pinia);let i=r.grids[e];i===void 0&&(i={id:e,state:new d({})},r.addGrid(i));const s=r.currentId;r.currentId=e||void 0;const l=this.$iApi.panel.get("grid");if(t===!1){l.close();return}!l.isOpen||!l.isVisible?this.$iApi.panel.open("grid"):s!==e||t===!0?l.show({screen:"grid-screen",props:{key:e}}):l.close()}_parseConfig(){const e=a(this.$vApp.$pinia);this.handlePanelWidths(["grid"]),this.handlePanelTeleports(["grid"]);const t=this.getLayerFixtureConfigs();Object.keys(t).forEach(r=>{const i={id:r,state:new d(t[r])};e.addGrid(i)})}}const u={en:{"grid.title":"Datatable","grid.alertName":"Grid","grid.splash.loading":"Loading data...","grid.splash.building":"Building table...","grid.splash.cancel":"Cancel","grid.clearAll":"Clear search and filters","grid.layer.loading":"The layer is loading...","grid.label.columns":"Hide columns","grid.label.filters.show":"Show filters","grid.label.filters.hide":"Hide filters","grid.label.filters.apply":"Apply filters to map","grid.header.sort.0":"Sort ascending","grid.header.sort.1":"Sort descending","grid.header.sort.2":"Sort default","grid.header.reorder.left":"Move left","grid.header.reorder.right":"Move right","grid.filters.label.global":"Search table","grid.filters.column.label.text":"Search {0}...","grid.filters.clear":"Clear filters","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.label.info":"{range} of {total} entries shown","grid.filters.label.filtered":"(filtered from {max} total entries)","grid.filters.extent":"Filter by extent","grid.cells.zoom":"Zoom to feature","grid.cells.details":"Details","grid.button.title":"Grid"},fr:{"grid.title":"Tableau de données","grid.alertName":"Grille","grid.splash.loading":"Chargement des données...","grid.splash.building":"Création du tableau...","grid.splash.cancel":"Annuler","grid.clearAll":"Effacer la recherche et les filtres","grid.layer.loading":"La couche est en cours de téléchargement...","grid.label.columns":"Masquer les colonnes","grid.label.filters.show":"Afficher les filtres","grid.label.filters.hide":"Masquer les filtres","grid.label.filters.apply":"Appliquer les filtres à la carte","grid.header.sort.0":"Tri ascendant","grid.header.sort.1":"Tri descendant","grid.header.sort.2":"Tri par défaut","grid.header.reorder.left":"Déplacer vers la gauche","grid.header.reorder.right":"Déplacer vers la droite","grid.filters.label.global":"Tableau de recherche","grid.filters.column.label.text":"Rechercher {0}...","grid.filters.clear":"Supprimer les filtres","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.label.info":"{range} de {total} saisies affichées","grid.filters.label.filtered":"(filtré à partir d’un total de {max} saisies)","grid.filters.extent":"Filtrer par étendue","grid.cells.zoom":"Zoom à l'élément","grid.cells.details":"Détails","grid.button.title":"Grille"}};class v extends p{async added(){this.$iApi.panel.register({grid:{screens:{"grid-screen":h(f)},style:{width:"450px"},controls:{expand:!0},button:{tooltip:"grid.button.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /> <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" /></svg>'},expanded:!0,alertName:"grid.alertName"}},{i18n:{messages:u}}),this._parseConfig()}removed(){this.$iApi.fixture.get("appbar")&&g(this.$vApp.$pinia).removeButton("grid"),a(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("grid")}}export{v as default};