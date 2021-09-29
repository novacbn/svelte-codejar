<script context="module">
    import {base} from "$app/paths";
    import {getHighlighter, setCDN, setOnigasmWASM} from "shiki";

    setCDN(`${base}/extern/shiki/`);
    setOnigasmWASM(`${base}/extern/shiki/onigasm.wasm`);

    async function load_shiki() {
        const highlighter = await getHighlighter({
            theme: "monokai",
            langs: ["css", "html", "javascript"],
        });

        return (code, syntax) => highlighter.codeToHtml(code, syntax);
    }
</script>

<script>
    import {getContext} from "svelte";

    import {DEFAULT_CODE_SAMPLE, DEFAULT_CODE_SYNTAX} from "./_sample";

    const store = getContext("CodeJar");
    const options = getContext("options");

    const CodeJar = $store;
    const highlighter_promise = load_shiki();

    $: ({withLineNumbers = false} = $options);
</script>

{#await highlighter_promise}
    <h2>Loading Shiki highlighting...</h2>
{:then highlight}
    <CodeJar
        syntax={DEFAULT_CODE_SYNTAX}
        value={DEFAULT_CODE_SAMPLE}
        {highlight}
        {withLineNumbers}
        catchTab
    />
{/await}
