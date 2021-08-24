<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {ICodeJarOptions} from "../actions/codejar";
    import {codejar} from "../actions/codejar";

    type $$Events = {
        change: CustomEvent<{value: string}>;
    };

    type $$Props = {
        element?: HTMLPreElement;

        class?: string;
        style?: string;

        syntax?: string;
    } & ICodeJarOptions;

    const dispatch = createEventDispatcher();

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = undefined;
    export let style: $$Props["style"] = undefined;

    export {_class as class};

    export let addClosing: $$Props["addClosing"] = undefined;
    export let catchTab: $$Props["catchTab"] = undefined;
    export let history: $$Props["history"] = undefined;
    export let indentOn: $$Props["indentOn"] = undefined;
    export let preserveIdent: $$Props["preserveIdent"] = undefined;
    export let spellcheck: $$Props["spellcheck"] = undefined;
    export let tab: $$Props["tab"] = undefined;

    export let withLineNumbers: $$Props["withLineNumbers"] = undefined;

    export let highlight: $$Props["highlight"] = undefined;

    export let syntax: $$Props["syntax"] = undefined;
    export let value: $$Props["value"] = "";

    function on_update(value: string): void {
        dispatch("change", {value});
    }
</script>

<!-- prettier-ignore -->
<pre
    bind:this={element}
    class="{syntax ? `language-${syntax}` : ''} {_class}"
    style={style ? style : ""}
    use:codejar={{
        addClosing,
        catchTab,
        highlight,
        history,
        indentOn,
        onUpdate: on_update,
        preserveIdent,
        spellcheck,
        syntax,
        tab,
        value,
        withLineNumbers
    }}><code class={syntax ? `language-${syntax}` : ''}>{highlight ? highlight(value, syntax) : value}</code></pre>
