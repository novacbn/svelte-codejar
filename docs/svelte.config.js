import markdownIt from "markdown-it";
import markdownItPrism from "markdown-it-prism";
import adapter from "@sveltejs/adapter-static";
import {plugin as markdownPlugin, Mode as MarkdownMode} from "vite-plugin-markdown";

/** @type {import('@sveltejs/kit').Config} */
export default {
    kit: {
        adapter: adapter(),
        target: "body",

        paths: {
            base: process.env.NODE_ENV === "production" ? "/svelte-codejar" : "",
        },

        /** @type {import('vite').UserConfig} */
        vite: {
            plugins: [
                markdownPlugin({
                    markdownIt: markdownIt({html: true}).use(markdownItPrism),
                    mode: [MarkdownMode.HTML],
                }),
            ],
        },
    },
};
