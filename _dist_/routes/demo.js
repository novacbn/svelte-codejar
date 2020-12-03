import './demo.css.proxy.js';
/* src/routes/demo.svelte generated by Svelte v3.30.1 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	listen,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../../web_modules/svelte/internal.js";

import CodeEditor from "../components/CodeEditor.js";

function create_fragment(ctx) {
	let codeeditor;
	let t0;
	let div;
	let span0;
	let t4;
	let span1;
	let label;
	let small2;
	let t6;
	let input;
	let current;
	let mounted;
	let dispose;

	codeeditor = new CodeEditor({
			props: {
				withLineNumbers: /*withLineNumbers*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(codeeditor.$$.fragment);
			t0 = space();
			div = element("div");
			span0 = element("span");
			span0.innerHTML = `<small>Syntax: Javascript</small> - <small>Theme: GitHub</small>`;
			t4 = space();
			span1 = element("span");
			label = element("label");
			small2 = element("small");
			small2.innerHTML = `<code>withLineNumbers:</code>`;
			t6 = space();
			input = element("input");
			attr(input, "type", "checkbox");
			attr(div, "class", "svelte-u5363u");
		},
		m(target, anchor) {
			mount_component(codeeditor, target, anchor);
			insert(target, t0, anchor);
			insert(target, div, anchor);
			append(div, span0);
			append(div, t4);
			append(div, span1);
			append(span1, label);
			append(label, small2);
			append(label, t6);
			append(label, input);
			input.checked = /*withLineNumbers*/ ctx[0];
			current = true;

			if (!mounted) {
				dispose = listen(input, "change", /*input_change_handler*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			const codeeditor_changes = {};
			if (dirty & /*withLineNumbers*/ 1) codeeditor_changes.withLineNumbers = /*withLineNumbers*/ ctx[0];
			codeeditor.$set(codeeditor_changes);

			if (dirty & /*withLineNumbers*/ 1) {
				input.checked = /*withLineNumbers*/ ctx[0];
			}
		},
		i(local) {
			if (current) return;
			transition_in(codeeditor.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(codeeditor.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(codeeditor, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let withLineNumbers = false;

	function input_change_handler() {
		withLineNumbers = this.checked;
		$$invalidate(0, withLineNumbers);
	}

	return [withLineNumbers, input_change_handler];
}

class Demo extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Demo;