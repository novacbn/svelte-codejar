import {CodeJar} from "codejar";
import {withLineNumbers as _withLineNumbers} from "codejar/linenumbers";

import type {IHighlightElement, IOptions} from "../types/codejar";

import type {IActionHandle} from "./actions";

export type ICodeJarAction = IActionHandle;

export type IHighlightCode = (code: string, syntax?: string) => string;

export interface ICodeJarOptions extends Partial<IOptions> {
    highlight?: IHighlightCode;

    onUpdate?: (value: string) => void;

    syntax?: string;

    withLineNumbers?: boolean;

    value: string;
}

export function codejar(element: HTMLElement, options: ICodeJarOptions): ICodeJarAction {
    let {
        highlight,
        onUpdate,
        syntax,
        value,
        withLineNumbers = false,
        ...extended_options
    } = options;

    let jar = CodeJar(element, wrap_highlight(highlight), extended_options);

    function on_input(event: Event): void {
        if (onUpdate) onUpdate(jar.toString());
    }

    function wrap_highlight(highlight?: IHighlightCode): IHighlightElement {
        const _highlight = highlight
            ? (element: HTMLElement) => {
                  element.innerHTML = highlight(jar.toString(), syntax);
              }
            : (element: HTMLElement) => void 0;

        return withLineNumbers ? _withLineNumbers(_highlight) : _highlight;
    }

    element.addEventListener("input", on_input);
    return {
        destroy() {
            jar.destroy();
            element.removeEventListener("input", on_input);
        },

        update(new_options) {
            ({
                highlight,
                on_update: onUpdate,
                syntax,
                value,
                withLineNumbers = false,
                ...extended_options
            } = new_options);

            if (options.highlight !== highlight || options.withLineNumbers !== withLineNumbers) {
                jar.destroy();
                jar = CodeJar(element, wrap_highlight(highlight), options);
            } else jar.updateOptions(extended_options);

            if (value !== jar.toString()) jar.updateCode(value);
            options = {highlight, value, withLineNumbers, ...extended_options};
        },
    };
}
