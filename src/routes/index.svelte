<script lang="ts">
    import "prismjs/themes/prism-tomorrow.css";

    import Prism from "prismjs";
    import {DEFAULT_CODE_SAMPLE, DEFAULT_CODE_SYNTAX} from "./_sample";

    import CodeJar from "../lib/components/CodeJar.svelte";

    const highlight = (code: string) =>
        Prism.highlight(code, Prism.languages[DEFAULT_CODE_SYNTAX], DEFAULT_CODE_SYNTAX);

    let value: string = DEFAULT_CODE_SAMPLE;
</script>

<CodeJar class="code-editor" syntax={DEFAULT_CODE_SYNTAX} {highlight} bind:value />

<style>
    :global(body) {
        margin: 0;
    }

    :global(.code-editor) {
        margin: 0 !important;
    }
</style>
