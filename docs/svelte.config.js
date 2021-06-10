import adapter from "@sveltejs/adapter-static";
import markdownIt from "markdown-it";
import markdownItPrism from "markdown-it-prism";
import {plugin as markdownPlugin, Mode as MarkdownMode} from "vite-plugin-markdown";

/** @type {import('@sveltejs/kit').Config} */
export default {
    kit: {
        adapter: adapter(),
        target: "body",

        paths: {
            // base: "/svelte-codejar",
        },

        vite: () => {
            /** @type {import('vite').UserConfig} */
            return {
                plugins: [
                    markdownPlugin({
                        markdownIt: markdownIt({html: true}).use(markdownItPrism),
                        mode: [MarkdownMode.HTML],
                    }),
                ],
            };
        },
    },
};
