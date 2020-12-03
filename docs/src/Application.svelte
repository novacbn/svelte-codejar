<script>
    import {hash} from "./stores/hash";

    import Layout from "./routes/$layout.svelte";

    import Index from "./routes/index.svelte";
    import Demo from "./routes/demo.svelte";

    const store = hash();
</script>

<Layout>
    {#if $store === '#/demo'}
        <Demo />
    {:else}
        <Index />
    {/if}
</Layout>
