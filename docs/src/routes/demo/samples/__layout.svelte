<script>
    /**
     * NOTE: Each highligher sample is its own route instead of dynamic one,
     * so they can load their CSS stylesheets individually without overlap
     */

    import {onMount, setContext} from "svelte";
    import {writable} from "svelte/store";

    const store = writable(null);
    setContext("CodeJar", store);

    const options = writable({});
    setContext("options", options);

    function on_message(event) {
        $options = event.data;
    }

    onMount(async () => {
        window.parent.postMessage(null);
        $store = (await import("@novacbn/svelte-codejar")).CodeJar;
    });
</script>

<svelte:window on:message={on_message} />

{#if $store}
    <slot />
{:else}
    <h2>Importing editor...</h2>
{/if}

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(html, body, pre) {
        padding: 0;
        margin: 0 !important;
    }

    :global(pre) {
        min-width: 100vw;
        min-height: 100vh;
        resize: none !important;
    }
</style>
