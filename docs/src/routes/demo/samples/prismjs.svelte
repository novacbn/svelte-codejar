<script context="module">
    import Prism from "prismjs";

    const highlightElement = (element, syntax) => Prism.highlightElement(element);

    const highlightCode = (code, syntax) => Prism.highlight(code, Prism.languages[syntax], syntax);

</script>

<script>
    import "prismjs/themes/prism-tomorrow.css";

    import {getContext} from "svelte";

    import {DEFAULT_CODE_SAMPLE, DEFAULT_CODE_SYNTAX} from "./_sample";

    const store = getContext("CodeJar");
    const options = getContext("options");

    const CodeJar = $store;

    let syntax = DEFAULT_CODE_SYNTAX;
    let value = DEFAULT_CODE_SAMPLE;

    $: ({withLineNumbers = false} = $options);

</script>

<CodeJar {highlightCode} {highlightElement} {syntax} {withLineNumbers} bind:value />
