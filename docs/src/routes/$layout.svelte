<script context="module">
    const LINKS = [
        {href: "#/", text: "README"},
        {href: "#/demo", text: "Demo"},

        {
            href: "https://github.com/novacbn/svelte-codejar",
            text: "GitHub",
            target: "_blank",
            rel: "noopener",
        },

        {
            href: "https://medv.io/codejar/",
            text: "CodeJar",
            target: "_blank",
            rel: "noopener",
        },
    ];

    function is_active(href, hash = "") {
        if (!href.startsWith("#")) return false;

        return href === hash || hash.slice(2) === href.slice(2);
    }
</script>

<script>
    import {hash} from "../stores/hash";

    const store = hash();
</script>

<style>
    nav {
        display: inline-flex;
    }
</style>

<main class="container">
    <center>
        <h1><code>svelte-codejar</code></h1>

        <nav class="tabs">
            {#each LINKS as link (link.href)}
                <a
                    class:active={is_active(link.href, $store)}
                    href={link.href}
                    target={link.target}
                    rel={link.rel}>{link.text}</a>
            {/each}
        </nav>
    </center>

    <slot />
</main>
