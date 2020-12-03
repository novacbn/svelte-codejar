const visit = require("unist-util-visit");

const HIGHLIGHTJS_CLASS_NAME = "hljs-tag";

const NODE_TYPE_CODE_INLINE = "inlineCode";

const NODE_TYPE_TEXT = "text";

const TAG_NAME_SPAN = "span";

function CodeOptions(options = {}) {
    let {replacements = []} = options;

    replacements = [
        [/</g, "&lt;"],
        //[/>/g, "&gt;"],
        ...replacements,
    ];

    return {replacements};
}

exports.code_inline = function code_inline(options = {}) {
    const {replacements} = CodeOptions(options);

    return (tree) => {
        visit(tree, NODE_TYPE_CODE_INLINE, (node) => {
            for (const replacement of replacements) {
                const [expression, sub] = replacement;

                node.value = node.value.replace(expression, sub);
            }
        });
    };
};

exports.code_highlighted = function code_highlighted(options = {}) {
    const {replacements} = CodeOptions(options);

    return (tree) => {
        visit(tree, (node) => {
            const {className, tagName} = node;
            if (tagName !== TAG_NAME_SPAN && className !== HIGHLIGHTJS_CLASS_NAME) return;

            visit(node, NODE_TYPE_TEXT, (child) => {
                for (const replacement of replacements) {
                    const [expression, sub] = replacement;

                    child.value = child.value.replace(expression, sub);
                }
            });
        });
    };
};
