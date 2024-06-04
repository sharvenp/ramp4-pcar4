import{_ as l,o as n,c as t,V as s,C as e,a}from"./chunks/framework.2e1eab7a.js";const f=JSON.parse('{"title":"Default Setup","description":"","frontmatter":{},"headers":[],"relativePath":"app/defaults.md","filePath":"app/defaults.md"}'),o={name:"app/defaults.md"},r=s('<h1 id="default-setup" tabindex="-1">Default Setup <a class="header-anchor" href="#default-setup" aria-label="Permalink to &quot;Default Setup&quot;">​</a></h1><p>The RAMP instance provides APIs to set up fixtures and events, allowing a high degree of customization. However, there is also a default setup that will provide stock fixtures and events. The default setup will result in a functional viewer that only requires a configuration file.</p><h2 id="default-fixtures" tabindex="-1">Default Fixtures <a class="header-anchor" href="#default-fixtures" aria-label="Permalink to &quot;Default Fixtures&quot;">​</a></h2><p>The following fixtures are included in the default setup. Any special interfaces they support is also noted; this information is relevant when replacing defaults fixtures, as discussed in the Examples section below.</p><p>TODO maybe these lists go in separate pages, like reference pages.</p><h3 id="appbar" tabindex="-1">Appbar <a class="header-anchor" href="#appbar" aria-label="Permalink to &quot;Appbar&quot;">​</a></h3><p>The <code>appbar</code> provides a means to open and track panels, or run custom commands.</p><p>Continued <a href="./appbar.html">here</a>.</p><h3 id="mapnav" tabindex="-1">Mapnav <a class="header-anchor" href="#mapnav" aria-label="Permalink to &quot;Mapnav&quot;">​</a></h3><p>The <code>mapnav</code> provides a means pan and zoom the map. TODO create and hyperlink to <code>mapnav.md</code>, or provide any other relevant info here.</p><h3 id="legend" tabindex="-1">Legend <a class="header-anchor" href="#legend" aria-label="Permalink to &quot;Legend&quot;">​</a></h3><p>The <code>legend</code> provides an interactive listing of the layers and other data on the map. TODO create and hyperlink to <code>legend.md</code></p><h3 id="grid" tabindex="-1">Grid <a class="header-anchor" href="#grid" aria-label="Permalink to &quot;Grid&quot;">​</a></h3><p>The <code>grid</code> provides a tabular view of attributes for a feature class.</p><p>Continued <a href="./grid.html">here</a>.</p><h3 id="details" tabindex="-1">Details <a class="header-anchor" href="#details" aria-label="Permalink to &quot;Details&quot;">​</a></h3><p>The <code>details</code> provides an interface to view information about a feature / voxel, and to see a collection of identify results.</p><p>Continued <a href="./details.html">here</a>.</p><h3 id="basemap" tabindex="-1">Basemap <a class="header-anchor" href="#basemap" aria-label="Permalink to &quot;Basemap&quot;">​</a></h3><p>The <code>basemap</code> provides a means to change the basemap layers of the map. TODO create and hyperlink to <code>basemap.md</code>, or provide any other relevant info here.</p><h3 id="geosearch" tabindex="-1">Geosearch <a class="header-anchor" href="#geosearch" aria-label="Permalink to &quot;Geosearch&quot;">​</a></h3><p>The <code>geosearch</code> is a utility that allows one to search for geographic names and zoom to the results.</p><p>Continued <a href="./geosearch.html">here</a>.</p><h3 id="help" tabindex="-1">Help <a class="header-anchor" href="#help" aria-label="Permalink to &quot;Help&quot;">​</a></h3><p>The <code>help</code> provides a means to display user help for the application. TODO create and hyperlink to <code>help.md</code>, or provide any other relevant info here.</p><h3 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h3><p>The <code>settings</code> allow you to make live modifications to a layer on the map.</p><p>Continued <a href="./settings.html">here</a>.</p><h3 id="northarrow" tabindex="-1">Northarrow <a class="header-anchor" href="#northarrow" aria-label="Permalink to &quot;Northarrow&quot;">​</a></h3><p>The <code>northarrow</code> provides an arrow at the top of the map pointing to the geographic north pole. TODO create and hyperlink to <code>northarrow.md</code></p><h3 id="overviewmap" tabindex="-1">Overviewmap <a class="header-anchor" href="#overviewmap" aria-label="Permalink to &quot;Overviewmap&quot;">​</a></h3><p>The <code>overviewmap</code> provides a smaller map displaying the current map extent within the context of a larger area. TODO create and hyperlink to <code>overviewmap.md</code></p><h3 id="crosshairs" tabindex="-1">Crosshairs <a class="header-anchor" href="#crosshairs" aria-label="Permalink to &quot;Crosshairs&quot;">​</a></h3><p>The <code>crosshairs</code> displays crosshairs at the centre of the map when keyboard navigation is active. TODO create and hyperlink to <code>crosshairs.md</code></p><h2 id="default-events" tabindex="-1">Default Events <a class="header-anchor" href="#default-events" aria-label="Permalink to &quot;Default Events&quot;">​</a></h2><p>All events are specific to a RAMP instance. An event on one instance says nothing about a different instance.</p><h3 id="core-events" tabindex="-1">Core Events <a class="header-anchor" href="#core-events" aria-label="Permalink to &quot;Core Events&quot;">​</a></h3><p>These events will always be present, regardless of what fixtures are active. Event names here include the <code>GlobalEvents</code> enum value first. Italics in the payload indicate a property of a general payload object.</p><p>TODO if we have API docs that expose the payload interfaces, link to those definitions. Otherwise we&#39;ll need to put the interface specs here</p>',39),p=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Event Name"),e("th",null,"Payload"),e("th",null,"Event Announces")])]),e("tbody",null,[e("tr",null,[e("td",null,[a("APPBAR_BUTTON_CLICK"),e("br"),a("'appbar/click'")]),e("td",null,[e("em",null,"id"),a(": button component/panel id")]),e("td",null,"A button in the appbar was clicked")]),e("tr",null,[e("td",null,[a("COMPONENT"),e("br"),a("'ramp/component'")]),e("td",null,[e("em",null,"id"),a(": component id")]),e("td",null,"A vue component registered")]),e("tr",null,[e("td",null,[a("CONFIG_CHANGE"),e("br"),a("'config/change'")]),e("td",null,"RampConfig object"),e("td",null,"The config was changed")]),e("tr",null,[e("td",null,[a("FILTER_CHANGE"),e("br"),a("'filter/change'")]),e("td",null,"FilterEventParam object"),e("td",null,"A filter has changed")]),e("tr",null,[e("td",null,[a("FIXTURE_ADDED"),e("br"),a("'fixture/added'")]),e("td",null,"FixtureInstance object"),e("td",null,"A fixture has been added")]),e("tr",null,[e("td",null,[a("FIXTURE_REMOVED"),e("br"),a("'fixture/removed'")]),e("td",null,"FixtureInstance object"),e("td",null,"A fixture has been removed")]),e("tr",null,[e("td",null,[a("LAYER_DRAWSTATECHANGE"),e("br"),a("'layer/drawstatechange'")]),e("td",null,[e("em",null,"state"),a(": new value, layer: LayerInstance object")]),e("td",null,"The layer draw state changed")]),e("tr",null,[e("td",null,[a("LAYER_INITIATIONSTATECHANGE"),e("br"),a("'layer/initiationStatechange'")]),e("td",null,[e("em",null,"state"),a(": new value, layer: LayerInstance object")]),e("td",null,"The layer layer state changed")]),e("tr",null,[e("td",null,[a("LAYER_LAYERSTATECHANGE"),e("br"),a("'layer/layerstatechange'")]),e("td",null,[e("em",null,"state"),a(": new value, layer: LayerInstance object")]),e("td",null,"The layer load state changed")]),e("tr",null,[e("td",null,[a("LAYER_OPACITYCHANGE"),e("br"),a("'layer/opacitychange'")]),e("td",null,[e("em",null,"opacity"),a(": new value, layer: LayerInstance object")]),e("td",null,"The layer opacity changed")]),e("tr",null,[e("td",null,[a("LAYER_REGISTERED"),e("br"),a("'layer/registered'")]),e("td",null,"LayerInstance object"),e("td",null,"The layer was added to the map")]),e("tr",null,[e("td",null,[a("LAYER_RELOAD_END"),e("br"),a("'layer/reloadend'")]),e("td",null,"LayerInstance object"),e("td",null,"The layer finished reloading")]),e("tr",null,[e("td",null,[a("LAYER_RELOAD_START"),e("br"),a("'layer/reloadstart'")]),e("td",null,"LayerInstance object"),e("td",null,"The layer started reloading")]),e("tr",null,[e("td",null,[a("LAYER_REMOVE"),e("br"),a("'layer/remove'")]),e("td",null,"LayerInstance object"),e("td",null,"The layer was removed from the map")]),e("tr",null,[e("td",null,[a("LAYER_VISIBILITYCHANGE"),e("br"),a("'layer/visibilitychange'")]),e("td",null,[e("em",null,"visibility"),a(": new value, layer: LayerInstance object")]),e("td",null,"The layer visibility changed")]),e("tr",null,[e("td",null,[a("MAP_BASEMAPCHANGE"),e("br"),a("'map/basemapchanged'")]),e("td",null,"basemapId: string, schemaChanged: boolean"),e("td",null,"The basemap was changed")]),e("tr",null,[e("td",null,[a("MAP_BLUR"),e("br"),a("'map/blur'")]),e("td",null,"KeyboardEvent object"),e("td",null,"The map lost focus")]),e("tr",null,[e("td",null,[a("MAP_CLICK"),e("br"),a("'map/click'")]),e("td",null,"MapClick object"),e("td",null,"The map was clicked")]),e("tr",null,[e("td",null,[a("MAP_CREATED"),e("br"),a("'map/created'")]),e("td",null,"none"),e("td",null,"The map was created")]),e("tr",null,[e("td",null,[a("MAP_DESTROYED"),e("br"),a("'map/destroyed'")]),e("td",null,"none"),e("td",null,"The map was destroyed")]),e("tr",null,[e("td",null,[a("MAP_DOUBLECLICK"),e("br"),a("'map/doubleclick'")]),e("td",null,"MapClick object"),e("td",null,"The map was double clicked")]),e("tr",null,[e("td",null,[a("MAP_EXTENTCHANGE"),e("br"),a("'map/extentchanged'")]),e("td",null,"RAMP Extent object"),e("td",null,"The map extent changed")]),e("tr",null,[e("td",null,[a("MAP_FOCUS"),e("br"),a("'map/focus'")]),e("td",null,"KeyboardEvent object"),e("td",null,"The map gained focus")]),e("tr",null,[e("td",null,[a("MAP_GRAPHICHIT"),e("br"),a("'map/graphichit'")]),e("td",{"layer,":"","graphicHit,":"","attributes,":"","icon,":"",screenPoint:""}),e("td",null,"A graphic was found where the mouse/crosshair is")]),e("tr",null,[e("td",null,[a("MAP_IDENTIFY"),e("br"),a("'map/identify'")]),e("td",null,"MapIdentifyResult object"),e("td",null,"A map identify was requested")]),e("tr",null,[e("td",null,[a("MAP_KEYDOWN"),e("br"),a("'map/keydown'")]),e("td",null,"KeyboardEvent object"),e("td",null,"A key was pressed")]),e("tr",null,[e("td",null,[a("MAP_KEYUP"),e("br"),a("'map/keyup'")]),e("td",null,"KeyboardEvent object"),e("td",null,"A key was released")]),e("tr",null,[e("td",null,[a("MAP_MOUSEDOWN"),e("br"),a("'map/mousedown'")]),e("td",null,"PointerEvent object"),e("td",null,"A mouse button was depressed")]),e("tr",null,[e("td",null,[a("MAP_MOUSELEAVE"),e("br"),a("'map/mouseleave'")]),e("td",null,"PointerEvent object"),e("td",null,"The mouse left the map")]),e("tr",null,[e("td",null,[a("MAP_MOUSEMOVE"),e("br"),a("'map/mousemove'")]),e("td",null,"MapMove object"),e("td",null,"The mouse moved over the map")]),e("tr",null,[e("td",null,[a("MAP_MOUSEMOVE_END"),e("br"),a("'map/mousemoveend'")]),e("td",null,"MapMove object"),e("td",null,"The mouse started moving over the map")]),e("tr",null,[e("td",null,[a("MAP_MOUSEMOVE_START"),e("br"),a("'map/mousemovestart'")]),e("td",null,"MapMove object"),e("td",null,"The mouse stopped moving over the map")]),e("tr",null,[e("td",null,[a("MAP_REFRESH_END"),e("br"),a("'map/refreshend'")]),e("td",null,"none"),e("td",null,"The map view started refreshing")]),e("tr",null,[e("td",null,[a("MAP_REFRESH_START"),e("br"),a("'map/refreshstart'")]),e("td",null,"none"),e("td",null,"The map view finished refreshing")]),e("tr",null,[e("td",null,[a("MAP_REORDER"),e("br"),a("'map/reorder'")]),e("td",null,[e("em",null,"newIndex"),a(": z-index, layer: LayerInstance object")]),e("td",null,"A layer was reordered")]),e("tr",null,[e("td",null,[a("MAP_RESIZED"),e("br"),a("'map/resized'")]),e("td",null,[e("em",null,"height"),a(": new height, "),e("em",null,"width"),a(": new width")]),e("td",null,"The map view changed size")]),e("tr",null,[e("td",null,[a("MAP_SCALECHANGE"),e("br"),a("'map/scalechanged'")]),e("td",null,"scale denominator: number"),e("td",null,"The map scale changed")]),e("tr",null,[e("td",null,[a("MAP_START"),e("br"),a("'map/start'")]),e("td",null,"none"),e("td",null,"The map startup was requested")]),e("tr",null,[e("td",null,[a("PANEL_CLOSED"),e("br"),a("'panel/closed'")]),e("td",null,"PanelInstance object"),e("td",null,"A panel was closed")]),e("tr",null,[e("td",null,[a("PANEL_MINIMIZED"),e("br"),a("'panel/closed'")]),e("td",null,"PanelInstance object"),e("td",null,"A panel was minimized")]),e("tr",null,[e("td",null,[a("PANEL_OPENED"),e("br"),a("'panel/opened'")]),e("td",null,"PanelInstance object"),e("td",null,"A panel was opened")]),e("tr",null,[e("td",null,[a("RAMP_MOBILEVIEW_CHANGE"),e("br"),a("'ramp/mobile'")]),e("td",null,"mobileMode: boolean"),e("td",null,"The screen changes to/from mobile resolution")]),e("tr",null,[e("td",null,[a("USER_LAYER_ADDED"),e("br"),a("'user/layeradded'")]),e("td",null,"LayerInstance object"),e("td",null,"A layer was added during the session")])])],-1),d=s(`<h3 id="core-fixture-events" tabindex="-1">Core Fixture Events <a class="header-anchor" href="#core-fixture-events" aria-label="Permalink to &quot;Core Fixture Events&quot;">​</a></h3><p>These events will be present if the associated core fixtures are running</p><p>TODO add stuff as we make events that core fixtures raise</p><table><thead><tr><th>Event Name</th><th>Payload</th><th>Event Announces</th></tr></thead><tbody><tr><td>DETAILS_TOGGLE<br>&#39;details/toggle&#39;</td><td>{ data: any, uid: string, format: string }, boolean (optional)</td><td>A feature&#39;s details panel toggle was requested with optional force open/close</td></tr><tr><td>GRID_TOGGLE<br>&#39;grid/toggle&#39;</td><td>layer: LayerInstance, <em>open</em>: boolean (optional)</td><td>Grid panel toggle was requested with optional force open/close</td></tr><tr><td>HELP_TOGGLE<br>&#39;help/toggle&#39;</td><td>boolean (optional)</td><td>Help panel toggle was requested with optional force open/close</td></tr><tr><td>METADATA_TOGGLE<br>&#39;metadata/toggle&#39;</td><td>{ type: string, layerName: string, url: string, layer: LayerInstance }, open: boolean (optional)</td><td>Metadata panel toggle was requested with optional force open/close</td></tr><tr><td>REORDER_TOGGLE<br>&#39;reorder/toggle&#39;</td><td>boolean (optional)</td><td>Layer reorder panel toggle was requested with optional force open/close</td></tr><tr><td>SETTINGS_TOGGLE<br>&#39;settings/toggle&#39;</td><td>layer: LayerInstance, <em>open</em>: boolean (optional)</td><td>Settings panel toggle was requested for a layer with optional force open/close</td></tr><tr><td>WIZARD_TOGGLE<br>&#39;wizard/open&#39;</td><td>boolean (optional)</td><td>Wizard panel toggle was requested with optional force open/close</td></tr></tbody></table><h2 id="default-events-handlers" tabindex="-1">Default Events Handlers <a class="header-anchor" href="#default-events-handlers" aria-label="Permalink to &quot;Default Events Handlers&quot;">​</a></h2><p>Along with the default fixtures, there are default event handlers that are applied to make them react to each other and to the RAMP core. See the examples section below and the <a href="./../api/events.html">Events API page</a> for details on how to work with event handlers.</p><h3 id="map-handlers" tabindex="-1">Map Handlers <a class="header-anchor" href="#map-handlers" aria-label="Permalink to &quot;Map Handlers&quot;">​</a></h3><ul><li><code>ramp_map_click_runs_identify</code> causes the identify process to start when the map is clicked</li><li><code>ramp_map_identify_opens_identify_results</code> causes the identify results panel to open, displaying the results.</li><li><code>ramp_map_keydown_updates_key_handler</code> causes a key press to be processed on the map</li><li><code>ramp_map_keyup_updates_key_handler</code> causes a key release to be processed on the map</li><li><code>ramp_map_blur_updates_key_handler</code> causes keyboard navigation to stop when the map loses focus</li></ul><h3 id="map-component-handlers" tabindex="-1">Map Component Handlers <a class="header-anchor" href="#map-component-handlers" aria-label="Permalink to &quot;Map Component Handlers&quot;">​</a></h3><p>Updates the map attribution in the map-caption by retrieving it from the current basemap config</p><ul><li><code>ramp_config_change_updates_map_attribs</code> when a configuration file changes (e.g. new language)</li><li><code>ramp_map_basemap_updates_map_attribs</code> when the basemap changes</li><li><code>ramp_map_created_updates_map_attribs</code> when the map is created</li></ul><p>Updates the scalebar in the map-caption</p><ul><li><code>ramp_map_resize_updates_scalebar</code> when the map resizes</li><li><code>ramp_map_scale_updates_scalebar</code> when the map scale changes</li></ul><p>Updates the co-ordinates in the map-caption</p><ul><li><code>ramp_map_keydown_updates_coords</code> when panning using a keyboard</li><li><code>ramp_map_mouse_updates_coords</code> when moving the mouse</li></ul><p>Creates or updates the feature maptip</p><ul><li><code>ramp_map_extent_updates_maptip</code> check for graphics when map extent changes</li><li><code>ramp_map_graphichit_creates_maptip</code> create maptip content when a new feature is hit</li><li><code>ramp_map_mouse_updates_maptip</code> check for graphics when mouse moves</li><li><code>ramp_map_mouseleave_removes_maptip</code> remove the maptip when the mouse leaves the map</li></ul><p>Changes to the basemap causing tile layers to no longer be visible</p><ul><li><code>ramp_map_basemap_checks_proj</code> will notify the user if there is a projection mismatch</li></ul><h3 id="layer-handlers" tabindex="-1">Layer Handlers <a class="header-anchor" href="#layer-handlers" aria-label="Permalink to &quot;Layer Handlers&quot;">​</a></h3><p>Changes to layers causing changes to the legend</p><ul><li><code>ramp_layer_error_updates_legend</code> legend will reflect error state</li><li><code>ramp_layer_register_binds_legend</code> will connect a legend item to layer when it is registered (created)</li><li><code>ramp_layer_reload_end_binds_legend</code> will connect a legend item to layer when layer finishes a reload</li><li><code>ramp_layer_reload_start_updates_legend</code> legend will reflect loading state when layer reload starts</li><li><code>ramp_layer_remove_updates_legend</code> clears bound items from legend when layer is removed</li><li><code>ramp_layer_useradd_updates_legend</code> adds a legend entry when layers are added via user controls</li></ul><p>Changes to layers causing changes in other fixtures</p><ul><li><code>ramp_layer_remove_updates_details</code> clear details info for layer that has been removed</li><li><code>ramp_layer_remove_checks_grid</code> close and remove grid if all its layers have been removed</li></ul><h3 id="panel-handlers" tabindex="-1">Panel Handlers <a class="header-anchor" href="#panel-handlers" aria-label="Permalink to &quot;Panel Handlers&quot;">​</a></h3><p>Reacting to panels opening and closing</p><ul><li><code>ramp_panel_close_updates_appbar</code> causes the appbar to remove a temporary button when the respective panel is closed</li><li><code>ramp_panel_open_updates_appbar</code> causes the appbar to add a temporary button when a panel without a fixed button is opened</li></ul><p>Handling panel toggle event requests (open/close type actions)</p><ul><li><code>ramp_toggle_details</code> feature details panel</li><li><code>ramp_toggle_grid</code> grid panel</li><li><code>ramp_toggle_help</code> help panel</li><li><code>ramp_toggle_metadata</code> metadata panel</li><li><code>ramp_toggle_reorder</code> layer reorder panel</li><li><code>ramp_toggle_settings</code> layer settings panel</li><li><code>ramp_toggle_wizard</code> import wizard panel</li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="default-setup-1" tabindex="-1">Default Setup <a class="header-anchor" href="#default-setup-1" aria-label="Permalink to &quot;Default Setup&quot;">​</a></h3><p>Creating a default instance of RAMP. No special action is required.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Create a default instance the long-winded way.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultEvents</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultFixtures</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultEvents</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="replacing-default-fixtures" tabindex="-1">Replacing Default Fixtures <a class="header-anchor" href="#replacing-default-fixtures" aria-label="Permalink to &quot;Replacing Default Fixtures&quot;">​</a></h3><p>Replacing a default fixture with a custom fixture of the same name and interface. Note that we can just call <code>addDefaultFixtures()</code> without any special parameters; when it attempts to load the default <code>help</code> fixture, it will see the already loaded fixture and use that.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CustomHelpFixtureClass)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultFixtures</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Note that if the default fixture exposes any methods on its API, a replacement fixture must also implement the method signature. Otherwise runtime errors will likely occur, or some adjustments on the default event handlers will be required to remove any calls to the methods (in which case it is likely easier to just give the fixture a unique name and remove the default fixture).</p><h3 id="subsets-of-the-default-setup" tabindex="-1">Subsets of the Default Setup <a class="header-anchor" href="#subsets-of-the-default-setup" aria-label="Permalink to &quot;Subsets of the Default Setup&quot;">​</a></h3><p>Adding a subset of default fixtures. This map does very little! Note we could also suppress and then selectively add the necessary default event handlers. This would be slightly more efficient (we would not have handlers reacting and then realizing there is nothing to do), but also requires one to figure out what event handlers are still needed.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CustomHelpFixtureClass)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixtures</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addDefaultFixtures</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">appbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mapnav</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="specify-starting-fixtures" tabindex="-1">Specify Starting Fixtures <a class="header-anchor" href="#specify-starting-fixtures" aria-label="Permalink to &quot;Specify Starting Fixtures&quot;">​</a></h3><p>Provide a set of fixtures in the config to be loaded by the RAMP instance. The value of <code>loadDefaultFixtures</code> is ignored and the specified fixtures will be loaded.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> configs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">startingFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">appbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mapnav</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">configs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">en</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">fr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loadDefaultFixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ignored</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,45),i=[r,p,d];function c(u,h,m,y,D,b){return n(),t("div",null,i)}const F=l(o,[["render",c]]);export{f as __pageData,F as default};
