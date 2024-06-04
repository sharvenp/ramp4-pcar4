import{_ as s,o as t,c as a,V as o}from"./chunks/framework.2e1eab7a.js";const d=JSON.parse('{"title":"Tooltips","description":"","frontmatter":{},"headers":[],"relativePath":"app/tooltips.md","filePath":"app/tooltips.md"}'),n={name:"app/tooltips.md"},l=o('<h1 id="tooltips" tabindex="-1">Tooltips <a class="header-anchor" href="#tooltips" aria-label="Permalink to &quot;Tooltips&quot;">​</a></h1><p>We use <a href="https://github.com/KABBOUCHI/vue-tippy" target="_blank" rel="noreferrer">vue-tippy</a> for tooltips. All the documentation is there but for a basic use case:</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Tooltip content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-tippy</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">t(&#39;translation.string.path&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-tippy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{placement: &#39;left&#39;}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5),e=[l];function p(r,c,i,D,F,y){return t(),a("div",null,e)}const h=s(n,[["render",p]]);export{d as __pageData,h as default};