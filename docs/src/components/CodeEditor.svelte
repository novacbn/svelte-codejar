<script context="module">
    import hljs from "highlight.js/lib/core";
    import javascript from "highlight.js/lib/languages/javascript";

    hljs.registerLanguage("javascript", javascript);

    const highlightElement = (element, syntax) => hljs.highlightBlock(element);
</script>

<script>
    import {CodeJar} from "svelte-codejar";

    export let value = `console.log("Hello World!");`;
    export let withLineNumbers = false;
</script>

<style>
    .card {
        padding: 0;
    }

    .card,
    .card > :global(*) {
        max-height: 70vh;
        min-height: 4.5ex;
    }
</style>

<div class="card">
    <CodeJar syntax="javascript" bind:value {highlightElement} {withLineNumbers} />
</div>
