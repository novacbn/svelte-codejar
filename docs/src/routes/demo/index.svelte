<script context="module">
    const DEMO_TABS = {
        highlightjs: "highlightjs",
        prismjs: "prismjs",
    };
</script>

<script>
    import {browser} from "$app/env";
    import {base} from "$app/paths";

    import MainLayout from "../_MainLayout.svelte";

    let iframe_element;

    let current = DEMO_TABS.prismjs;

    let withLineNumbers = false;

    function update_iframe(options = {withLineNumbers}) {
        iframe_element.contentWindow.postMessage(options);
    }

    // NOTE: We need to support for when the CodeJar first initializes and following customize updates

    $: if (iframe_element) {
        window.addEventListener("message", () => {
            update_iframe();
        });
    }

    $: if (iframe_element) update_iframe({withLineNumbers});
</script>

<MainLayout>
    {#if browser}
        <nav class="tabs">
            <a
                class:active={current === DEMO_TABS.prismjs}
                href="#"
                on:click|preventDefault={() => (current = DEMO_TABS.prismjs)}
            >
                PrismJS
            </a>

            <a
                class:active={current === DEMO_TABS.highlightjs}
                href="#"
                on:click|preventDefault={() => (current = DEMO_TABS.highlightjs)}
            >
                highlight.js
            </a>
        </nav>

        <br />

        <iframe bind:this={iframe_element} src="{base}/demo/samples/{current}" />

        <center>
            <small>Syntax: <code>HTML</code></small>
        </center>

        <br />

        <fieldset>
            <legend>Customize</legend>

            <label>
                <code>withLineNumbers</code>:
                <br />
                <input type="checkbox" bind:checked={withLineNumbers} />
            </label>
        </fieldset>

        <br />
    {:else}
        <div class="card">
            <p>Your client currently does not support Javascript, or is otherwise disabled.</p>
        </div>
    {/if}

    <style>
        iframe {
            width: 100%;
            height: 40ex;

            border-radius: 4px;
            box-shadow: 0 1px 3px var(--color-grey);
        }
    </style>
</MainLayout>
