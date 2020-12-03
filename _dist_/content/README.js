export const FRONTMATTER={},HTML=`<h2>Description</h2>
<p>Svelte Binding for the embeddable code editor CodeJar</p>
<h2>Sample</h2>
<h3>Basic</h3>
<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>></span><span
  class="javascript"
>
    <span class="hljs-keyword">import</span> {CodeJar} <span class="hljs-keyword">from</span> <span class="hljs-string">"svelte-codejar"</span>;

    <span class="hljs-keyword">export</span> <span class="hljs-keyword">let</span> value = <span class="hljs-string">\`console.log("Hello World!");\`</span>;
</span><span
  class="hljs-tag"
>&lt;/<span class="hljs-name">script</span>></span>

<span class="hljs-comment">&lt;!--
    \`CodeJar\` options with their defaults
    See more information at: https://github.com/antonmedv/codejar#getting-started
--></span>

<span class="hljs-comment">&lt;!--
    **NOTE**: Syntax highlighting is optional and must be provided by you. See the
    sample below on how to use it
--></span>

<span class="hljs-tag">&lt;<span class="hljs-name">CodeJar</span> <span class="hljs-attr">addClosing</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">indentOn</span>=<span class="hljs-string">{/{$/}</span> <span class="hljs-attr">spellcheck</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">tab</span>=<span class="hljs-string">"\\t"</span> <span class="hljs-attr">bind:value</span> /></span></code></pre>
<h3>Syntax Highlighting</h3>
<blockquote>
<p><strong>NOTE</strong>: The sample below uses <a href="https://highlightjs.org/">highlight.js</a>, see the link for more information.</p>
</blockquote>
<pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">context</span>=<span class="hljs-string">"module"</span>></span><span
  class="javascript"
>
    <span
  class="hljs-comment"
>// We need to configure highlight.js for Javascript, and then alias the</span>
    <span
  class="hljs-comment"
>// exports to match the function signatures that \`CodeJar\` Component expects</span>
    <span class="hljs-keyword">import</span> hljs <span class="hljs-keyword">from</span> <span class="hljs-string">"highlight.js/lib/core"</span>;
    <span class="hljs-keyword">import</span> javascript <span class="hljs-keyword">from</span> <span class="hljs-string">"highlight.js/lib/languages/javascript"</span>;

    hljs.registerLanguage(<span class="hljs-string">"javascript"</span>, javascript);

    <span
  class="hljs-comment"
>// \`highlightElement\` applies whenever the \`CodeJar\` Editor is active on the Browser,</span>
    <span
  class="hljs-comment"
>// and needs to apply syntax highlighting to the container \`HTMLElement\`</span>
    <span class="hljs-keyword">const</span> highlightElement = <span class="hljs-function">(<span class="hljs-params">element, syntax</span>) =></span> hljs.highlightBlock(element);

    <span
  class="hljs-comment"
>// \`highlightCode\` applies during server-side rendering or Browsers with scripting,</span>
    <span
  class="hljs-comment"
>// disabled where the \`CodeJar\` Editor would not be active</span>
    <span class="hljs-keyword">const</span> highlightCode = <span class="hljs-function">(<span class="hljs-params">code, syntax</span>) =></span> hljs.highlight(syntax, code).value;
</span><span
  class="hljs-tag"
>&lt;/<span class="hljs-name">script</span>></span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>></span><span
  class="javascript"
>
    <span class="hljs-keyword">import</span> {CodeJar} <span class="hljs-keyword">from</span> <span class="hljs-string">"svelte-codejar"</span>;

    <span class="hljs-keyword">export</span> <span class="hljs-keyword">let</span> value = <span class="hljs-string">\`console.log("Hello World!");\`</span>;
</span><span
  class="hljs-tag"
>&lt;/<span class="hljs-name">script</span>></span>

<span class="hljs-comment">&lt;!--
    Now we pass \`CodeJar\` our syntax highlighting functions along with the
    language syntax used for highlighting
--></span>

<span class="hljs-tag">&lt;<span class="hljs-name">CodeJar</span> <span class="hljs-attr">syntax</span>=<span class="hljs-string">"javascript"</span> {<span class="hljs-attr">highlightCode</span>} {<span class="hljs-attr">highlightElement</span>} <span class="hljs-attr">bind:value</span> /></span></code></pre>
<h2>Developer</h2>
<h3>Installation</h3>
<p>Open your terminal and install via <code>npm</code>:</p>
<pre><code
  class="hljs language-sh"
>npm install git+https://github.com/novacbn/svelte-codejar<span
  class="hljs-comment"
>#0.0.1</span></code></pre>
<p>Install current in-development code:</p>
<pre><code
  class="hljs language-sh"
>npm install git+https://github.com/novacbn/svelte-codejar</code></pre>
<h3>Properties</h3>







































































<table><thead><tr><th>Name</th><th>Typing</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>addClosing</td><td><code>boolean</code></td><td><code>true</code></td><td>Sets whether the Editor automatically adds closing delimiters, like brackets, quotes, etc...</td></tr><tr><td>indentOn</td><td><code>RegExp</code></td><td><code>/{$/</code></td><td>Represents what expression is used to detect when the Editor needs to auto indent with the configured tab characters</td></tr><tr><td>spellcheck</td><td><code>boolean</code></td><td><code>false</code></td><td>Sets whether to enable the Browser's spellcheck or not</td></tr><tr><td>tab</td><td><code>string</code></td><td><code>\\t</code></td><td>Sets the characters inserted whenever the end-user pressed the tab key</td></tr><tr><td>highlightCode</td><td><code>(code: string, syntax: string) => string</code></td><td><code>null</code></td><td>Whenever SSR is enabled or the end-user does not have Javascript enabled, this callback is called to render the highlighted HTML-marked up code</td></tr><tr><td>highlightElement</td><td><code>(element: HTMLElement, syntax: string) => void</code></td><td><code>(code, syntax) => void 0</code></td><td>Whenever <code>CodeJar</code> has new input, this callback is called to highlight the <code><code></code> element</td></tr><tr><td>syntax</td><td><code>string</code></td><td><code>undefined</code></td><td>Sets the current language mode of the Editor</td></tr><tr><td>value</td><td><code>string</code></td><td><code>""</code></td><td>Sets the current text of the Editor</td></tr><tr><td>class</td><td><code>string</code></td><td><code>""</code></td><td>Applies <code>class=""</code> to the <code><pre></code> container element</td></tr><tr><td>style</td><td><code>string</code></td><td><code>undefined</code></td><td>Applies <code>style=""</code> to the <code><pre></code> container element</td></tr></tbody></table>
<h3>API</h3>
<ul>
<li>
<p>Components</p>
<ul>
<li><code>CodeJar</code></li>
</ul>
</li>
</ul>`;
