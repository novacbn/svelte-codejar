<script context="module">
    import hljs from "highlight.js/lib/core.js";
    import xml from "highlight.js/lib/languages/xml.js";

    hljs.registerLanguage("html", xml);

    const highlight = (code, syntax) =>
        hljs.highlight(code, {
            language: syntax,
        }).value;
</script>

<script>
    import "highlight.js/styles/monokai-sublime.css";

    import {getContext} from "svelte";

    import {DEFAULT_CODE_SAMPLE, DEFAULT_CODE_SYNTAX} from "./_sample";

    const store = getContext("CodeJar");
    const options = getContext("options");

    const CodeJar = $store;

    let syntax = DEFAULT_CODE_SYNTAX;
    let value = DEFAULT_CODE_SAMPLE;

    $: ({withLineNumbers = false} = $options);
</script>

<CodeJar {highlight} {syntax} {value} {withLineNumbers} />
