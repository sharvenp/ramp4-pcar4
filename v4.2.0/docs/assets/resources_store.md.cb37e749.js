import{_ as e,o as s,c as a,V as n}from"./chunks/framework.3e3ef19e.js";const b=JSON.parse('{"title":"The Store","description":"","frontmatter":{},"headers":[],"relativePath":"resources/store.md","filePath":"resources/store.md"}'),t={name:"resources/store.md"},o=n(`<h1 id="the-store" tabindex="-1">The Store <a class="header-anchor" href="#the-store" aria-label="Permalink to &quot;The Store&quot;">​</a></h1><p>We use <code>🍍 Pinia 🍍</code> in RAMP to handle state storage and manipulation. <code>Pinia</code> is a state management library which handles reactive data and state across components in the app.</p><p>Full documentation can be found on the <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer"><code>Pinia</code> website</a>.</p><h2 id="our-store-setup" tabindex="-1">Our store setup <a class="header-anchor" href="#our-store-setup" aria-label="Permalink to &quot;Our store setup&quot;">​</a></h2><p>Core has multiple stores for its internal state to keep things organized. Things like <code>layers</code> , <code>config</code>, <code>panels</code> etc.</p><p>Each fixture is also able to have its own store. Since fixtures are removable/replaceable having core being in charge of stores for them isn&#39;t doable.</p><p>Core stores are added in <code>store/store.ts</code>.</p><p>You can also create your own custom store for a custom fixture or otherwise, and bind it to your RAMP instance&#39;s pinia instance. For an example of how this can be done, please see our <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/demos/starter-scripts/sample-fixtures/funtimes" target="_blank" rel="noreferrer">custom funtimes fixture</a>. A demo of the funtimes fixture is available <a href="https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/index-samples?sample=37" target="_blank" rel="noreferrer">here</a>.</p><h2 id="store-files" tabindex="-1">Store files <a class="header-anchor" href="#store-files" aria-label="Permalink to &quot;Store files&quot;">​</a></h2><p>For our core stores, each store folder has 3 files;</p><ul><li>A state file (<code>fixturename-state.ts</code>) which is where the state interface is declared, along with any other relevant types.</li><li>A store file (<code>fixturename-store.ts</code>) which is where the <code>state</code> ,<code>getters</code> and <code>actions</code> are, as well as the store creation function. This function allows us to have multiple copies of a fixture running with separate state.</li><li>An index file, which is just for store exporting.</li></ul><p>A store file contains a <code>defineStore(...)</code> function with two arguments: a unique store id and a Setup function.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const useNotificationStore = defineStore(&#39;notification&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ... setup function</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>A Setup function consists of <code>state</code> properties, as well as an optional set of <code>getters</code> and <code>actions</code>.</p><ul><li><code>state</code> properties represent data in the store, defined using <code>ref()</code>.</li><li><code>getters</code> retrieve info from the state, defined using <code>computed()</code></li><li><code>actions</code> act as methods to modify the state, defined using <code>function()</code></li></ul><p>Below is a simple example of a Setup function for the <code>notification</code> store:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // state</span></span>
<span class="line"><span style="color:#A6ACCD;">    const notificationStack = ref([]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const groups = ref({});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // getter</span></span>
<span class="line"><span style="color:#A6ACCD;">    const notificationNumber = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return notificationStack.value.length &gt;= 99</span></span>
<span class="line"><span style="color:#A6ACCD;">            ? 99</span></span>
<span class="line"><span style="color:#A6ACCD;">            : notificationStack.value.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // action</span></span>
<span class="line"><span style="color:#A6ACCD;">    function clearAll() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.values(groups.value).forEach(group =&gt; removeGroup(group));</span></span>
<span class="line"><span style="color:#A6ACCD;">        notificationStack.value = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return { notificationStack, groups, notificationNumber, clearAll };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Note that any <code>state</code> property, <code>getter</code>, or <code>action</code> that will be accessed from somewhere else in the app must be returned by the Setup function.</p><h2 id="how-the-store-is-accessed-internally" tabindex="-1">How the store is accessed internally <a class="header-anchor" href="#how-the-store-is-accessed-internally" aria-label="Permalink to &quot;How the store is accessed internally&quot;">​</a></h2><h3 id="accessing-the-store-inside-a-component" tabindex="-1">Accessing the store inside a component <a class="header-anchor" href="#accessing-the-store-inside-a-component" aria-label="Permalink to &quot;Accessing the store inside a component&quot;">​</a></h3><p>To interface with a store within a component, <code>useFixtureNameStore()</code> is called within <code>setup()</code>:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { useNotificationStore } from &#39;@/stores/notification&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const notificationStore = useNotificationStore();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then the store and its properties can be accessed anywhere in the component:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const number = computed(() =&gt; notificationStore.notificationNumber);</span></span>
<span class="line"><span style="color:#A6ACCD;">const clearAll = () =&gt; notificationStore.clearAll();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="accessing-the-store-outside-components" tabindex="-1">Accessing the store outside components <a class="header-anchor" href="#accessing-the-store-outside-components" aria-label="Permalink to &quot;Accessing the store outside components&quot;">​</a></h3><p>Using a store outside a component is nearly identical to using a store within a component, with the additional requirement of passing the <code>pinia</code> instance that was passed to the app to the <code>useFixtureNameStore()</code> function call.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const notificationStore = useNotificationStore(this.$vApp.$pinia);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="how-you-can-access-the-store" tabindex="-1">How you can access the store <a class="header-anchor" href="#how-you-can-access-the-store" aria-label="Permalink to &quot;How you can access the store&quot;">​</a></h2><p>The <code>InstanceAPI</code> has a method called <code>useStore()</code> which you can call to retrieve a desired store. See the <a href="./../api/instance.html#methods">instance API</a> documentation for details.</p>`,29),i=[o];function r(c,l,p,d,u,h){return s(),a("div",null,i)}const f=e(t,[["render",r]]);export{b as __pageData,f as default};