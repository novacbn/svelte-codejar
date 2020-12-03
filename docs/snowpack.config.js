const gfm = require("remark-gfm");
const highlight = require("remark-highlight.js");

const {code_highlighted, code_inline} = require("./plugins/codeblock");

module.exports = {
    plugins: [
        "@snowpack/plugin-svelte",
        [
            "snowpack-plugin-markdown",
            {
                remark: [gfm, highlight, code_inline],
                rehype: [code_highlighted],
            },
        ],
        "@snowpack/plugin-webpack",
    ],

    buildOptions: {
        baseUrl: "/svelte-codejar",
    },

    mount: {
        public: "/",
        src: "/_dist_",
    },
};
