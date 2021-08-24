<script context="module">
    import Prism from "prismjs";

    const highlight = (code, syntax) => Prism.highlight(code, Prism.languages[syntax], syntax);
</script>

<script>
    import "prismjs/themes/prism-tomorrow.css";

    import {getContext} from "svelte";

    import {DEFAULT_CODE_SAMPLE, DEFAULT_CODE_SYNTAX} from "./_sample";

    const store = getContext("CodeJar");
    const options = getContext("options");

    const CodeJar = $store;

    $: ({withLineNumbers = false} = $options);
</script>

<CodeJar
    syntax={DEFAULT_CODE_SYNTAX}
    value={DEFAULT_CODE_SAMPLE}
    {highlight}
    {withLineNumbers}
    catchTab
/>
