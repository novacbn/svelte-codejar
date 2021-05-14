# `svelte-codejar`

## Description

Svelte Binding for the embeddable code editor CodeJar

## Demo

See a demo at [novacbn.github.io/svelte-codejar/demo](https://novacbn.github.io/svelte-codejar/demo)

## Sample

```html
<script>
    import {CodeJar} from "svelte-codejar";

    export let value = `console.log("Hello World!");`;
</script>

<!--
    `CodeJar` options with their defaults
    See more information at: https://github.com/antonmedv/codejar#getting-started
-->

<!--
    **NOTE**: Syntax highlighting is optional and must be provided by you. See the
    sample below on how to use it

    **NOTE2**: When setting `CodeJar.tab`, if you're using escape characters such
    as `\t`, you need encapsulate it as a raw string (see below). Otherwise the Svelte
    compiler will escape the value when it parses your code
-->

<CodeJar addClosing={true} indentOn={/{$/} spellcheck={false} tab={"\t"} bind:value />
```

## Syntax Highlighting

### highlight.js

> **NOTE**: The sample below uses [highlight.js](https://highlightjs.org/), see the link for more information.

```html
<script context="module">
    // We need to configure highlight.js for Javascript, and then alias the
    // exports to match the function signatures that `CodeJar` Component expects
    import hljs from "highlight.js/lib/core";
    import javascript from "highlight.js/lib/languages/javascript";

    hljs.registerLanguage("javascript", javascript);

    // `highlightElement` applies whenever the `CodeJar` Editor is active on the Browser,
    // and needs to apply syntax highlighting to the container `HTMLElement`
    const highlightElement = (element, syntax) => hljs.highlightElement(element);

    // `highlightCode` applies during server-side rendering or Browsers with scripting,
    // disabled where the `CodeJar` Editor would not be active
    const highlightCode = (code, syntax) =>
        hljs.highlight(code, {
            language: syntax,
        }).value;
</script>

<script>
    import {CodeJar} from "svelte-codejar";

    export let value = `console.log("Hello World!");`;
</script>

<!--
    Now we pass `CodeJar` our syntax highlighting functions along with the
    language syntax used for highlighting
-->

<CodeJar syntax="javascript" {highlightCode} {highlightElement} bind:value />
```

### PrismJS

> **NOTE**: The code is the same as above, but with [PrismJS](https://prismjs.com/) calls instead of highlight.js

```html
<script context="module">
    import Prism from "prismjs";

    const highlightElement = (element, syntax) => Prism.highlightElement(element);

    const highlightCode = (code, syntax) => Prism.highlight(code, Prism.languages[syntax], syntax);
</script>

<script>
    import {CodeJar} from "svelte-codejar";

    export let value = `console.log("Hello World!");`;
</script>

<CodeJar syntax="javascript" {highlightCode} {highlightElement} bind:value />
```

## FAQ

### SvelteKit — `ReferenceError: window is not defined`

When using the library with [SvelteKit](https://kit.svelte.dev) with SSR (serverside rendering) enabled you might get this error:

```
[vite] Error when evaluating SSR module /node_modules/codejar/codejar.js?v=4f67a3d5:
ReferenceError: window is not defined
```

Nothing much can do about that, CodeJar [makes a `window` assignment](https://github.com/antonmedv/codejar/blob/b037e29b6565269a2f797e62f51966d77cdf3978/codejar.ts#L1) in its module scope. However you can do a workaround via [`onMount`](https://svelte.dev/docs#onMount) or other similar workflows:

```html
<script>
    import {onMount} from "svelte-codejar";

    export let value = "";

    // **NOTE:** Since `onMount` is only called on the client, we can just
    // make our import there. And assign to our Component's scope
    let CodeJar;
    onMount(async () => {
        ({CodeJar} = await import("svelte-codejar"));
    });
</script>

{#if CodeJar}
<CodeJar bind:value />
{:else}
<!--
    **NOTE:** Normally the `CodeJar` Svelte handles fall through for us, and
    renders / syntax highlights without an editor during SSR / non-JS enabled clients
-->
<pre><code>{value}</code></pre>
{/if}
```

Only downside being you have to manually syntax highlight your code in the `{:else}` block for SSR / non-JS enabled clients.

## Developer

### Installation

Open your terminal and install via `npm`:

```bash
npm install github:novacbn/svelte-codejar#0.0.3
```

Install current in-development code:

```bash
npm install github:novacbn/svelte-codejar
```

### Properties

| Name             | Typing                                           | Default                    | Description                                                                                                          |
| ---------------- | ------------------------------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| addClosing       | `boolean`                                        | `true`                     | Sets whether the Editor automatically adds closing delimiters, like brackets, quotes, etc...                         |
| indentOn         | `RegExp`                                         | `/{$/`                     | Represents what expression is used to detect when the Editor needs to auto indent with the configured tab characters |
| spellcheck       | `boolean`                                        | `false`                    | Sets whether to enable the Browser's spellcheck or not                                                               |
| tab              | `string`                                         | `\t`                       | Sets the characters inserted whenever the end-user pressed the tab key                                               |
| highlightCode    | `(code: string, syntax: string) => string`       | `null`                     | Whenever `CodeJar` is used in SSR / disabled Javascript, this callback is called to render highlighted HTML markup   |
| highlightElement | `(element: HTMLElement, syntax: string) => void` | `(code, syntax) => void 0` | Whenever `CodeJar` has new input, this callback is called to highlight the `<code>` element                          |
| syntax           | `string`                                         | `undefined`                | Sets the current language mode of the Editor                                                                         |
| value            | `string`                                         | `""`                       | Sets the current text of the Editor                                                                                  |
| class            | `string`                                         | `""`                       | Applies `class=""` to the `<pre>` container element                                                                  |
| style            | `string`                                         | `undefined`                | Applies `style=""` to the `<pre>` container element                                                                  |

### API

-   Components

    -   `CodeJar`
