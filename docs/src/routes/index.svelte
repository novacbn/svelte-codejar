<script>
    import "prismjs/themes/prism-tomorrow.css";

    import {html} from "../../../README.md";
    import MainLayout from "./_MainLayout.svelte";

</script>

<MainLayout>
    {@html html}
</MainLayout>
