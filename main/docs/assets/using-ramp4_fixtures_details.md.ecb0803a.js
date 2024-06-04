import{_ as s,o as n,c as a,V as e}from"./chunks/framework.67234322.js";const F=JSON.parse('{"title":"Details Fixture","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/details.md","filePath":"using-ramp4/fixtures/details.md"}'),l={name:"using-ramp4/fixtures/details.md"},o=e(`<h1 id="details-fixture" tabindex="-1">Details Fixture <a class="header-anchor" href="#details-fixture" aria-label="Permalink to &quot;Details Fixture&quot;">​</a></h1><p>The details fixture adds a panel to RAMP that displays in-depth information about any specific data point on the map. It can be opened by performing an identify query either on the map or through the RAMP API.</p><h2 id="panels" tabindex="-1">Panels <a class="header-anchor" href="#panels" aria-label="Permalink to &quot;Panels&quot;">​</a></h2><p>The details fixture consists of three sections:</p><ol><li>The <strong>Layer List</strong> is the vertical column of icons along the left side of the panel. It contains a list of map layers participating in the identify and displays how many results were found for each layer. Clicking on one of these icons will display results for that layer.</li><li>The <strong>Feature Info</strong> view displays information about a single result item. This screen will look different depending on the format of the information returned by the identify query. This is also the screen that can be customized using custom templates (see below). Scroll controls can move the view to other results in the layer. The &quot;See List&quot; button will switch to <strong>List View</strong>.</li><li>The <strong>List View</strong> contains a list of all results found for the selected layer. Clicking on an item in this list will bring you to the <strong>Feature Info</strong> screen.</li></ol><h2 id="creating-a-custom-template" tabindex="-1">Creating a Custom Template <a class="header-anchor" href="#creating-a-custom-template" aria-label="Permalink to &quot;Creating a Custom Template&quot;">​</a></h2><p>If you don&#39;t want to use the provided templates for your layer results, you can create your own. The process is simple. All you need to do is create a Vue component and then add the layer-to-template binding to the RAMP configuration file.</p><p>The example below explains how to create a basic template for the details panel.</p><h3 id="example-creating-a-custom-template" tabindex="-1">Example: Creating a Custom Template <a class="header-anchor" href="#example-creating-a-custom-template" aria-label="Permalink to &quot;Example: Creating a Custom Template&quot;">​</a></h3><p><strong>1.</strong> The first thing you should do is create the Vue component that you want to use as the template. You can do this in various ways, but this example will make use of template literals. If you need to include Javascript that contains more than a single expression, use the <code>methods</code> option, as shown below.</p><p>To keep this example simple, the template created here will display the name of the point when it is clicked on and call a method to display the point&#39;s symbol, if it has one.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My_Custom_Component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">identifyData</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;span&gt;The feature name is: {{this.identifyData.data[&#39;name&#39;]}}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;div v-html=&quot;displaySymbol()&quot;/&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">displaySymbol</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">identifyData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Symbol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">                        &lt;span&gt;The feature symbol is: </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">identifyData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Symbol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                    </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>Note:</strong> it is important that you include the <code>identifyData</code> prop in the component since the details fixture will populate it with the results from the identify query. The <code>identifyData</code> prop is necessary in order to access the results.</p><p><strong>2.</strong> Once the custom component has been created, you will want to add your layer to RAMP and set the new component as a custom template in the details fixture. You can do both of these in the configuration file:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">map</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">layers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My_New_Layer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">layerType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">esri-feature</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://my-website.example/path/to/esri/layer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">fixtures</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My_Custom_Template</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>As shown in the config snippet above, template bindings should be placed under the layer&#39;s details fixture configuration. When the details panel first loads, it looks for any template bindings in here. Note that the <code>template</code> should match the name of the custom component that you registered on the host page.</p><p>After completing these two steps, the custom component should now be displayed when requesting data from <code>My_New_Layer</code>.</p><h3 id="zoom-button-configuration" tabindex="-1">Zoom Button Configuration <a class="header-anchor" href="#zoom-button-configuration" aria-label="Permalink to &quot;Zoom Button Configuration&quot;">​</a></h3><p>It is possible to change the icon for the zoom button in the details fixture by using the system variable <code>zoomIcon</code>. There are two built-in icons: <code>globe</code> and <code>magnify</code>. If you would like to customize the icon, the variable may be set to any emoji or SVG. Providing this value with a URL will not fetch the remote image.</p><p>Note that if the grid fixture is added, the zoom icon will be modified there as well.</p><p>Example usage which sets the zoom icon to the magnifying glass:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    configs: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        en: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            system: { zoomIcon: &#39;magnify&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,22),p=[o];function t(r,c,i,y,D,u){return n(),a("div",null,p)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};
