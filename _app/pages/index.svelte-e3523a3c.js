import{S as c,i as l,s as i,j as u,m as r,o as d,x as k,u as h,v as g,J as m,l as p,K as v,f,I as y,d as w}from"../chunks/vendor-c89e8ae1.js";/* empty css                               */import{M as b}from"../chunks/_MainLayout-4225f935.js";import"../chunks/paths-28a87002.js";const j=`<h1><code>svelte-codejar</code></h1>
<h2>Description</h2>
<p>Svelte Binding for the embeddable code editor CodeJar</p>
<h2>Demo</h2>
<p>See a demo at <a href="https://novacbn.github.io/svelte-codejar/demo">novacbn.github.io/svelte-codejar/demo</a></p>
<h2>Sample</h2>
<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>CodeJar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@novacbn/svelte-codejar"</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">console.log("Hello World!");</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--
    \`CodeJar\` options with their defaults
    See more information at: https://github.com/antonmedv/codejar#getting-started
--></span>

<span class="token comment">&lt;!--
    **NOTE**: Syntax highlighting is optional and must be provided by you. See the
    sample below on how to use it

    **NOTE2**: When setting \`CodeJar.tab\`, if you're using escape characters such
    as \`\\t\`, you need encapsulate it as a raw string (see below). Otherwise the Svelte
    compiler will escape the value when it parses your code
--></span>

&lt;CodeJar addClosing={true} indentOn={/{$/} spellcheck={false} tab={"\\t"} bind:value />
</code></pre>
<h2>Syntax Highlighting</h2>
<h3>highlight.js</h3>
<blockquote>
<p><strong>NOTE</strong>: The sample below uses <a href="https://highlightjs.org/">highlight.js</a>, see the link for more information.</p>
</blockquote>
<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// We need to configure highlight.js for Javascript, and then alias the</span>
    <span class="token comment">// exports to match the function signatures that \`CodeJar\` Component expects</span>
    <span class="token keyword">import</span> hljs <span class="token keyword">from</span> <span class="token string">"highlight.js/lib/core"</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> javascript <span class="token keyword">from</span> <span class="token string">"highlight.js/lib/languages/javascript"</span><span class="token punctuation">;</span>

    hljs<span class="token punctuation">.</span><span class="token function">registerLanguage</span><span class="token punctuation">(</span><span class="token string">"javascript"</span><span class="token punctuation">,</span> javascript<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \`highlight\` takes the input code and returns the highlighted HTML markup</span>
    <span class="token keyword">const</span> <span class="token function-variable function">highlight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> syntax</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        hljs<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            language<span class="token operator">:</span> syntax<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>CodeJar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@novacbn/svelte-codejar"</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">console.log("Hello World!");</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--
    Now we pass \`CodeJar\` our syntax highlighting functions along with the
    language syntax used for highlighting

    We also need to pass the \`hljs\` class so highlight.js knows which element
    to style
--></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeJar</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hljs<span class="token punctuation">"</span></span> <span class="token attr-name">syntax</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript<span class="token punctuation">"</span></span> <span class="token attr-name">{highlight}</span> <span class="token attr-name">{value}</span> <span class="token punctuation">/></span></span>
</code></pre>
<h3>PrismJS</h3>
<blockquote>
<p><strong>NOTE</strong>: The code is the same as above, but with <a href="https://prismjs.com/">PrismJS</a> calls instead of highlight.js</p>
</blockquote>
<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> Prism <span class="token keyword">from</span> <span class="token string">"prismjs"</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">highlight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> syntax</span><span class="token punctuation">)</span> <span class="token operator">=></span> Prism<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> Prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>syntax<span class="token punctuation">]</span><span class="token punctuation">,</span> syntax<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>CodeJar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@novacbn/svelte-codejar"</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">console.log("Hello World!");</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeJar</span> <span class="token attr-name">syntax</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript<span class="token punctuation">"</span></span> <span class="token attr-name">{highlight}</span> <span class="token attr-name">{value}</span> <span class="token punctuation">/></span></span>
</code></pre>
<h2>FAQ</h2>
<h3>SvelteKit \u2014 <code>ReferenceError: window is not defined</code></h3>
<p>When using the library with <a href="https://kit.svelte.dev">SvelteKit</a> with SSR (serverside rendering) enabled you might get this error:</p>
<pre><code>[vite] Error when evaluating SSR module /node_modules/codejar/codejar.js?v=4f67a3d5:
ReferenceError: window is not defined
</code></pre>
<p>Nothing much can do about that, CodeJar <a href="https://github.com/antonmedv/codejar/blob/b037e29b6565269a2f797e62f51966d77cdf3978/codejar.ts#L1">makes a <code>window</code> assignment</a> in its module scope. However you can do a workaround via <a href="https://svelte.dev/docs#onMount"><code>onMount</code></a> or other similar workflows:</p>
<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>onMount<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@novacbn/svelte-codejar"</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

    <span class="token comment">// **NOTE:** Since \`onMount\` is only called on the client, we can just</span>
    <span class="token comment">// make our import there. And assign to our Component's scope</span>
    <span class="token keyword">let</span> CodeJar<span class="token punctuation">;</span>
    <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token punctuation">{</span>CodeJar<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"@novacbn/svelte-codejar"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

{#if CodeJar}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeJar</span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span> <span class="token punctuation">/></span></span>
{:else}
<span class="token comment">&lt;!--
    **NOTE:** Normally the \`CodeJar\` Svelte handles fall through for us, and
    renders / syntax highlights without an editor during SSR / non-JS enabled clients
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>{value}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
{/if}
</code></pre>
<p>Only downside being you have to manually syntax highlight your code in the <code>{:else}</code> block for SSR / non-JS enabled clients.</p>
<h2>Developer</h2>
<h3>Installation</h3>
<p>Open your terminal and install via <code>npm</code>:</p>
<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @novacbn/svelte-codejar
</code></pre>
<h3>Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Typing</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>addClosing</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Sets whether the Editor automatically adds closing delimiters, like brackets, quotes, etc...</td>
</tr>
<tr>
<td>indentOn</td>
<td><code>RegExp</code></td>
<td><code>/{$/</code></td>
<td>Represents what expression is used to detect when the Editor needs to auto indent with the configured tab characters</td>
</tr>
<tr>
<td>spellcheck</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sets whether to enable the Browser's spellcheck or not</td>
</tr>
<tr>
<td>tab</td>
<td><code>string</code></td>
<td><code>\\t</code></td>
<td>Sets the characters inserted whenever the end-user pressed the tab key</td>
</tr>
<tr>
<td>highlight</td>
<td><code>(code: string, syntax?: string) =&gt; string</code></td>
<td><code>null</code></td>
<td>Callback is called to highlight the current code and return the rendered HTML markup</td>
</tr>
<tr>
<td>syntax</td>
<td><code>string</code></td>
<td><code>undefined</code></td>
<td>Sets the current language mode of the Editor</td>
</tr>
<tr>
<td>value</td>
<td><code>string</code></td>
<td><code>&quot;&quot;</code></td>
<td>Sets the current text of the Editor</td>
</tr>
<tr>
<td>class</td>
<td><code>string</code></td>
<td><code>&quot;&quot;</code></td>
<td>Applies <code>class=&quot;&quot;</code> to the <code>&lt;pre&gt;</code> container element</td>
</tr>
<tr>
<td>style</td>
<td><code>string</code></td>
<td><code>undefined</code></td>
<td>Applies <code>style=&quot;&quot;</code> to the <code>&lt;pre&gt;</code> container element</td>
</tr>
</tbody>
</table>
<h3>Events</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Typing</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>change</code></td>
<td><code>CustomEvent&lt;{value: string}&gt;</code></td>
<td>Fires whenever the end-user changes the input</td>
</tr>
</tbody>
</table>
<h3>API</h3>
<ul>
<li>
<p>Components</p>
<ul>
<li><code>CodeJar</code></li>
</ul>
</li>
</ul>
`;function S(e){let s,a;return{c(){s=new m,a=p(),this.h()},l(n){s=v(n),a=p(),this.h()},h(){s.a=a},m(n,t){s.m(j,n,t),f(n,a,t)},p:y,d(n){n&&w(a),n&&s.d()}}}function x(e){let s,a;return s=new b({props:{$$slots:{default:[S]},$$scope:{ctx:e}}}),{c(){u(s.$$.fragment)},l(n){r(s.$$.fragment,n)},m(n,t){d(s,n,t),a=!0},p(n,[t]){const o={};t&1&&(o.$$scope={dirty:t,ctx:n}),s.$set(o)},i(n){a||(k(s.$$.fragment,n),a=!0)},o(n){h(s.$$.fragment,n),a=!1},d(n){g(s,n)}}}class $ extends c{constructor(s){super();l(this,s,null,x,i,{})}}export{$ as default};
