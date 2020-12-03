<script>
    import CodeEditor from "../components/CodeEditor.svelte";

    let withLineNumbers = false;
</script>

<style>
    div {
        display: flex;

        align-items: center;
        justify-content: space-between;
    }
</style>

<CodeEditor {withLineNumbers} />

<div>
    <span><small>Syntax: Javascript</small> - <small>Theme: GitHub</small></span>

    <span>
        <label>
            <small><code>withLineNumbers: </code></small>
            <input type="checkbox" bind:checked={withLineNumbers} />
        </label>
    </span>
</div>
