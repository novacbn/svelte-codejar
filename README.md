# svelte-codejar

## Description

Svelte Binding for the embeddable code editor CodeJar

## Sample

### Basic

```svelte
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

<CodeJar
    addClosing={true}
    indentOn={/{$/}
    spellcheck={false}
    tab="\t"

    bind:value
    />
```

### Syntax Highlighting

> **NOTE**: The sample below uses [highlight.js](https://highlightjs.org/), see the link for more information.

```svelte
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
~~NOT AVAILABLE YET~~
```

Install current in-development code:

```sh
~~NOT AVAILABLE YET~~
```

### API

-   Components

    -   `CodeJar`
