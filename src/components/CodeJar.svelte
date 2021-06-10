<script>
    import {CodeJar} from "codejar";
    import {withLineNumbers as _wLN} from "codejar/linenumbers";

    export let element = null;

    let _class = "";
    export let style = undefined;

    export {_class as class};

    export let addClosing = true;
    export let indentOn = /{$/;
    export let spellcheck = false;
    export let tab = "\t";
    export let withLineNumbers = false;

    export let highlightCode = null;
    export let highlightElement = (element, syntax) => void 0;

    export let syntax = undefined;
    export let value = "";

    let codejar = null;

    function destroy() {
        codejar.destroy();

        const wrap = element.parentElement;
        if (wrap.classList.contains("codejar-wrap")) {
            const parent = wrap.parentElement;

            element.style.padding = "";

            parent.appendChild(element);
            wrap.remove();
        }
    }

    function mount(element, highlightElement, withLineNumbers, syntax) {
        if (codejar) destroy();

        const highlight = withLineNumbers
            ? _wLN((element) => highlightElement(element, syntax))
            : (element) => highlightElement(element, syntax);

        codejar = CodeJar(element, highlight, {
            addClosing,
            indentOn,
            spellcheck,
            tab,
        });

        codejar.onUpdate((text) => {
            if (text !== value) value = text;
        });
    }

    $: if (element) mount(element, highlightElement, withLineNumbers, syntax);
    $: if (codejar) codejar.updateOptions({addClosing, indentOn, spellcheck, tab});
    $: if (codejar && codejar.toString() !== value) codejar.updateCode(value);

</script>

<!-- prettier-ignore -->
<pre class="{syntax ? `language-${syntax}` : ''} {_class}" bind:this={element} {style}><code
        class={syntax ? `language-${syntax}` : ''}
        data-language={syntax}
        >{#if !codejar && highlightCode}{@html highlightCode(value, syntax)}{:else}{value}{/if}</code></pre>
