<script context="module">
    import hljs from "highlight.js/lib/core.js";
    import css from "highlight.js/lib/languages/css.js";
    import javascript from "highlight.js/lib/languages/javascript.js";
    import xml from "highlight.js/lib/languages/xml.js";

    hljs.registerLanguage("css", css);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("javascript", javascript);

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

    $: ({withLineNumbers = false} = $options);
</script>

<CodeJar
    class="hljs"
    syntax={DEFAULT_CODE_SYNTAX}
    value={DEFAULT_CODE_SAMPLE}
    {highlight}
    {withLineNumbers}
/>
