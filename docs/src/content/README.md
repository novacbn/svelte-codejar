## Description

Svelte Binding for the embeddable code editor CodeJar

## Sample

### Basic

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
-->

<CodeJar addClosing={true} indentOn={/{$/} spellcheck={false} tab="\t" bind:value />
```

### Syntax Highlighting

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
    const highlightElement = (element, syntax) => hljs.highlightBlock(element);

    // `highlightCode` applies during server-side rendering or Browsers with scripting,
    // disabled where the `CodeJar` Editor would not be active
    const highlightCode = (code, syntax) => hljs.highlight(syntax, code).value;
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

## Developer

### Installation

Open your terminal and install via `npm`:

```sh
npm install git+https://github.com/novacbn/svelte-codejar#0.0.1
```

Install current in-development code:

```sh
npm install git+https://github.com/novacbn/svelte-codejar
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
