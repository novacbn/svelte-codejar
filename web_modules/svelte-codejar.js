import { S as SvelteComponent, i as init$1, s as safe_not_equal, e as element, a as attr, b as insert, c as append, n as noop, d as detach, f as binding_callbacks, t as text, g as set_data, h as empty, H as HtmlTag } from './common/index-9ef63cc3.js';

function CodeJar(editor, highlight, opt = {}) {
    const options = Object.assign({ tab: "\t", indentOn: /{$/, spellcheck: false, addClosing: true }, opt);
    let listeners = [];
    let history = [];
    let at = -1;
    let focus = false;
    let callback;
    let prev; // code content prior keydown event
    let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    editor.setAttribute("contentEditable", isFirefox ? "true" : "plaintext-only");
    editor.setAttribute("spellcheck", options.spellcheck ? "true" : "false");
    editor.style.outline = "none";
    editor.style.overflowWrap = "break-word";
    editor.style.overflowY = "auto";
    editor.style.resize = "vertical";
    editor.style.whiteSpace = "pre-wrap";
    highlight(editor);
    const debounceHighlight = debounce(() => {
        const pos = save();
        highlight(editor);
        restore(pos);
    }, 30);
    let recording = false;
    const shouldRecord = (event) => {
        return !isUndo(event) && !isRedo(event)
            && event.key !== "Meta"
            && event.key !== "Control"
            && event.key !== "Alt"
            && !event.key.startsWith("Arrow");
    };
    const debounceRecordHistory = debounce((event) => {
        if (shouldRecord(event)) {
            recordHistory();
            recording = false;
        }
    }, 300);
    const on = (type, fn) => {
        listeners.push([type, fn]);
        editor.addEventListener(type, fn);
    };
    on("keydown", event => {
        if (event.defaultPrevented)
            return;
        prev = toString();
        handleNewLine(event);
        handleTabCharacters(event);
        if (options.addClosing)
            handleSelfClosingCharacters(event);
        handleUndoRedo(event);
        if (shouldRecord(event) && !recording) {
            recordHistory();
            recording = true;
        }
    });
    on("keyup", event => {
        if (event.defaultPrevented)
            return;
        if (event.isComposing)
            return;
        if (prev !== toString())
            debounceHighlight();
        debounceRecordHistory(event);
        if (callback)
            callback(toString());
    });
    on("focus", _event => {
        focus = true;
    });
    on("blur", _event => {
        focus = false;
    });
    on("paste", event => {
        recordHistory();
        handlePaste(event);
        recordHistory();
        if (callback)
            callback(toString());
    });
    function save() {
        const s = window.getSelection();
        const pos = { start: 0, end: 0, dir: undefined };
        visit(editor, el => {
            if (el === s.anchorNode && el === s.focusNode) {
                pos.start += s.anchorOffset;
                pos.end += s.focusOffset;
                pos.dir = s.anchorOffset <= s.focusOffset ? "->" : "<-";
                return "stop";
            }
            if (el === s.anchorNode) {
                pos.start += s.anchorOffset;
                if (!pos.dir) {
                    pos.dir = "->";
                }
                else {
                    return "stop";
                }
            }
            else if (el === s.focusNode) {
                pos.end += s.focusOffset;
                if (!pos.dir) {
                    pos.dir = "<-";
                }
                else {
                    return "stop";
                }
            }
            if (el.nodeType === Node.TEXT_NODE) {
                if (pos.dir != "->")
                    pos.start += el.nodeValue.length;
                if (pos.dir != "<-")
                    pos.end += el.nodeValue.length;
            }
        });
        return pos;
    }
    function restore(pos) {
        const s = window.getSelection();
        let startNode, startOffset = 0;
        let endNode, endOffset = 0;
        if (!pos.dir)
            pos.dir = "->";
        if (pos.start < 0)
            pos.start = 0;
        if (pos.end < 0)
            pos.end = 0;
        // Flip start and end if the direction reversed
        if (pos.dir == "<-") {
            const { start, end } = pos;
            pos.start = end;
            pos.end = start;
        }
        let current = 0;
        visit(editor, el => {
            if (el.nodeType !== Node.TEXT_NODE)
                return;
            const len = (el.nodeValue || "").length;
            if (current + len >= pos.start) {
                if (!startNode) {
                    startNode = el;
                    startOffset = pos.start - current;
                }
                if (current + len >= pos.end) {
                    endNode = el;
                    endOffset = pos.end - current;
                    return "stop";
                }
            }
            current += len;
        });
        // If everything deleted place cursor at editor
        if (!startNode)
            startNode = editor;
        if (!endNode)
            endNode = editor;
        // Flip back the selection
        if (pos.dir == "<-") {
            [startNode, startOffset, endNode, endOffset] = [endNode, endOffset, startNode, startOffset];
        }
        s.setBaseAndExtent(startNode, startOffset, endNode, endOffset);
    }
    function beforeCursor() {
        const s = window.getSelection();
        const r0 = s.getRangeAt(0);
        const r = document.createRange();
        r.selectNodeContents(editor);
        r.setEnd(r0.startContainer, r0.startOffset);
        return r.toString();
    }
    function afterCursor() {
        const s = window.getSelection();
        const r0 = s.getRangeAt(0);
        const r = document.createRange();
        r.selectNodeContents(editor);
        r.setStart(r0.endContainer, r0.endOffset);
        return r.toString();
    }
    function handleNewLine(event) {
        if (event.key === "Enter") {
            const before = beforeCursor();
            const after = afterCursor();
            let [padding] = findPadding(before);
            let newLinePadding = padding;
            // If last symbol is "{" ident new line
            // Allow user defines indent rule
            if (options.indentOn.test(before)) {
                newLinePadding += options.tab;
            }
            if (isFirefox) {
                preventDefault(event);
                insert("\n" + newLinePadding);
            }
            else {
                // Normal browsers
                if (newLinePadding.length > 0) {
                    preventDefault(event);
                    insert("\n" + newLinePadding);
                }
            }
            // Place adjacent "}" on next line
            if (newLinePadding !== padding && after[0] === "}") {
                const pos = save();
                insert("\n" + padding);
                restore(pos);
            }
        }
    }
    function handleSelfClosingCharacters(event) {
        const open = `([{'"`;
        const close = `)]}'"`;
        const codeAfter = afterCursor();
        if (close.includes(event.key) && codeAfter.substr(0, 1) === event.key) {
            const pos = save();
            preventDefault(event);
            pos.start = ++pos.end;
            restore(pos);
        }
        else if (open.includes(event.key)) {
            const pos = save();
            preventDefault(event);
            const text = event.key + close[open.indexOf(event.key)];
            insert(text);
            pos.start = ++pos.end;
            restore(pos);
        }
    }
    function handleTabCharacters(event) {
        if (event.key === "Tab") {
            preventDefault(event);
            if (event.shiftKey) {
                const before = beforeCursor();
                let [padding, start,] = findPadding(before);
                if (padding.length > 0) {
                    const pos = save();
                    // Remove full length tab or just remaining padding
                    const len = Math.min(options.tab.length, padding.length);
                    restore({ start, end: start + len });
                    document.execCommand("delete");
                    pos.start -= len;
                    pos.end -= len;
                    restore(pos);
                }
            }
            else {
                insert(options.tab);
            }
        }
    }
    function handleUndoRedo(event) {
        if (isUndo(event)) {
            preventDefault(event);
            at--;
            const record = history[at];
            if (record) {
                editor.innerHTML = record.html;
                restore(record.pos);
            }
            if (at < 0)
                at = 0;
        }
        if (isRedo(event)) {
            preventDefault(event);
            at++;
            const record = history[at];
            if (record) {
                editor.innerHTML = record.html;
                restore(record.pos);
            }
            if (at >= history.length)
                at--;
        }
    }
    function recordHistory() {
        if (!focus)
            return;
        const html = editor.innerHTML;
        const pos = save();
        const lastRecord = history[at];
        if (lastRecord) {
            if (lastRecord.html === html
                && lastRecord.pos.start === pos.start
                && lastRecord.pos.end === pos.end)
                return;
        }
        at++;
        history[at] = { html, pos };
        history.splice(at + 1);
        const maxHistory = 300;
        if (at > maxHistory) {
            at = maxHistory;
            history.splice(0, 1);
        }
    }
    function handlePaste(event) {
        preventDefault(event);
        const text = (event.originalEvent || event).clipboardData.getData("text/plain");
        const pos = save();
        insert(text);
        highlight(editor);
        restore({ start: pos.start + text.length, end: pos.start + text.length });
    }
    function visit(editor, visitor) {
        const queue = [];
        if (editor.firstChild)
            queue.push(editor.firstChild);
        let el = queue.pop();
        while (el) {
            if (visitor(el) === "stop")
                break;
            if (el.nextSibling)
                queue.push(el.nextSibling);
            if (el.firstChild)
                queue.push(el.firstChild);
            el = queue.pop();
        }
    }
    function isCtrl(event) {
        return event.metaKey || event.ctrlKey;
    }
    function isUndo(event) {
        return isCtrl(event) && !event.shiftKey && event.key === "z";
    }
    function isRedo(event) {
        return isCtrl(event) && event.shiftKey && event.key === "z";
    }
    function insert(text) {
        text = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        document.execCommand("insertHTML", false, text);
    }
    function debounce(cb, wait) {
        let timeout = 0;
        return (...args) => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => cb(...args), wait);
        };
    }
    function findPadding(text) {
        // Find beginning of previous line.
        let i = text.length - 1;
        while (i >= 0 && text[i] !== "\n")
            i--;
        i++;
        // Find padding of the line.
        let j = i;
        while (j < text.length && /[ \t]/.test(text[j]))
            j++;
        return [text.substring(i, j) || "", i, j];
    }
    function toString() {
        return editor.textContent || "";
    }
    function preventDefault(event) {
        event.preventDefault();
    }
    return {
        updateOptions(options) {
            options = Object.assign(Object.assign({}, options), options);
        },
        updateCode(code) {
            editor.textContent = code;
            highlight(editor);
        },
        onUpdate(cb) {
            callback = cb;
        },
        toString,
        destroy() {
            for (let [type, fn] of listeners) {
                editor.removeEventListener(type, fn);
            }
        },
    };
}

function withLineNumbers(highlight, options = {}) {
    const opts = Object.assign({ class: "codejar-linenumbers", wrapClass: "codejar-wrap", width: "35px", backgroundColor: "rgba(128, 128, 128, 0.15)", color: "" }, options);
    let lineNumbers;
    return function (editor) {
        highlight(editor);
        if (!lineNumbers) {
            lineNumbers = init(editor, opts);
            editor.addEventListener("scroll", () => lineNumbers.style.top = `-${editor.scrollTop}px`);
        }
        const code = editor.textContent || "";
        const linesCount = code.replace(/\n+$/, "\n").split("\n").length + 1;
        let text = "";
        for (let i = 1; i < linesCount; i++) {
            text += `${i}\n`;
        }
        lineNumbers.innerText = text;
    };
}
function init(editor, opts) {
    const css = getComputedStyle(editor);
    const wrap = document.createElement("div");
    wrap.className = opts.wrapClass;
    wrap.style.position = "relative";
    const gutter = document.createElement("div");
    gutter.className = opts.class;
    wrap.appendChild(gutter);
    // Add own styles
    gutter.style.position = "absolute";
    gutter.style.top = "0px";
    gutter.style.left = "0px";
    gutter.style.bottom = "0px";
    gutter.style.width = opts.width;
    gutter.style.overflow = "hidden";
    gutter.style.backgroundColor = opts.backgroundColor;
    gutter.style.color = opts.color || css.color;
    gutter.style.setProperty("mix-blend-mode", "difference");
    // Copy editor styles
    gutter.style.fontFamily = css.fontFamily;
    gutter.style.fontSize = css.fontSize;
    gutter.style.lineHeight = css.lineHeight;
    gutter.style.paddingTop = css.paddingTop;
    gutter.style.paddingLeft = css.paddingLeft;
    gutter.style.borderTopLeftRadius = css.borderTopLeftRadius;
    gutter.style.borderBottomLeftRadius = css.borderBottomLeftRadius;
    // Add line numbers
    const lineNumbers = document.createElement("div");
    lineNumbers.style.position = "relative";
    lineNumbers.style.top = "0px";
    gutter.appendChild(lineNumbers);
    // Tweak editor styles
    editor.style.paddingLeft = `calc(${opts.width} + ${gutter.style.paddingLeft})`;
    editor.style.whiteSpace = "pre";
    // Swap editor with a wrap
    editor.parentNode.insertBefore(wrap, editor);
    wrap.appendChild(editor);
    return lineNumbers;
}

/* node_modules/svelte-codejar/src/components/CodeJar.svelte generated by Svelte v3.30.1 */

function create_else_block(ctx) {
	let t;

	return {
		c() {
			t = text(/*value*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*value*/ 1) set_data(t, /*value*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (67:9) {#if !codejar && highlightCode}
function create_if_block(ctx) {
	let html_tag;
	let raw_value = /*highlightCode*/ ctx[3](/*value*/ ctx[0], /*syntax*/ ctx[4]) + "";
	let html_anchor;

	return {
		c() {
			html_anchor = empty();
			html_tag = new HtmlTag(html_anchor);
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*highlightCode, value, syntax*/ 25 && raw_value !== (raw_value = /*highlightCode*/ ctx[3](/*value*/ ctx[0], /*syntax*/ ctx[4]) + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

function create_fragment(ctx) {
	let pre;
	let code;
	let code_class_value;

	function select_block_type(ctx, dirty) {
		if (!/*codejar*/ ctx[6] && /*highlightCode*/ ctx[3]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	return {
		c() {
			pre = element("pre");
			code = element("code");
			if_block.c();
			attr(code, "class", code_class_value = /*syntax*/ ctx[4] ? `language-${/*syntax*/ ctx[4]}` : "");
			attr(code, "data-language", /*syntax*/ ctx[4]);
			attr(pre, "class", /*_class*/ ctx[1]);
			attr(pre, "style", /*style*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, pre, anchor);
			append(pre, code);
			if_block.m(code, null);
			/*pre_binding*/ ctx[13](pre);
		},
		p(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(code, null);
				}
			}

			if (dirty & /*syntax*/ 16 && code_class_value !== (code_class_value = /*syntax*/ ctx[4] ? `language-${/*syntax*/ ctx[4]}` : "")) {
				attr(code, "class", code_class_value);
			}

			if (dirty & /*syntax*/ 16) {
				attr(code, "data-language", /*syntax*/ ctx[4]);
			}

			if (dirty & /*_class*/ 2) {
				attr(pre, "class", /*_class*/ ctx[1]);
			}

			if (dirty & /*style*/ 4) {
				attr(pre, "style", /*style*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(pre);
			if_block.d();
			/*pre_binding*/ ctx[13](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { class: _class = "" } = $$props;
	let { style = undefined } = $$props;
	let { addClosing = true } = $$props;
	let { indentOn = /{$/ } = $$props;
	let { spellcheck = false } = $$props;
	let { tab = "\t" } = $$props;
	let { withLineNumbers: withLineNumbers$1 = false } = $$props;
	let { highlightCode = null } = $$props;
	let { highlightElement = (element, syntax) => void 0 } = $$props;
	let { syntax = undefined } = $$props;
	let { value = "" } = $$props;
	let container = null;
	let codejar = null;

	function destroy() {
		codejar.destroy();
		const wrap = container.parentElement;

		if (wrap.classList.contains("codejar-wrap")) {
			const parent = wrap.parentElement;
			$$invalidate(5, container.style.padding = "", container);
			parent.appendChild(container);
			wrap.remove();
		}
	}

	function mount(element, highlightElement, withLineNumbers$1, syntax) {
		if (codejar) destroy();

		const highlight = withLineNumbers$1
		? withLineNumbers(element => highlightElement(element, syntax))
		: element => highlightElement(element, syntax);

		$$invalidate(6, codejar = CodeJar(element, highlight, { addClosing, indentOn, spellcheck, tab }));

		codejar.onUpdate(text => {
			if (text !== value) $$invalidate(0, value = text);
		});
	}

	function pre_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			container = $$value;
			$$invalidate(5, container);
		});
	}

	$$self.$$set = $$props => {
		if ("class" in $$props) $$invalidate(1, _class = $$props.class);
		if ("style" in $$props) $$invalidate(2, style = $$props.style);
		if ("addClosing" in $$props) $$invalidate(7, addClosing = $$props.addClosing);
		if ("indentOn" in $$props) $$invalidate(8, indentOn = $$props.indentOn);
		if ("spellcheck" in $$props) $$invalidate(9, spellcheck = $$props.spellcheck);
		if ("tab" in $$props) $$invalidate(10, tab = $$props.tab);
		if ("withLineNumbers" in $$props) $$invalidate(11, withLineNumbers$1 = $$props.withLineNumbers);
		if ("highlightCode" in $$props) $$invalidate(3, highlightCode = $$props.highlightCode);
		if ("highlightElement" in $$props) $$invalidate(12, highlightElement = $$props.highlightElement);
		if ("syntax" in $$props) $$invalidate(4, syntax = $$props.syntax);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*container, highlightElement, withLineNumbers, syntax*/ 6192) {
			 if (container) mount(container, highlightElement, withLineNumbers$1, syntax);
		}

		if ($$self.$$.dirty & /*codejar, addClosing, indentOn, spellcheck, tab*/ 1984) {
			 if (codejar) codejar.updateOptions({ addClosing, indentOn, spellcheck, tab });
		}

		if ($$self.$$.dirty & /*codejar, value*/ 65) {
			 if (codejar && codejar.toString() !== value) codejar.updateCode(value);
		}
	};

	return [
		value,
		_class,
		style,
		highlightCode,
		syntax,
		container,
		codejar,
		addClosing,
		indentOn,
		spellcheck,
		tab,
		withLineNumbers$1,
		highlightElement,
		pre_binding
	];
}

class CodeJar_1 extends SvelteComponent {
	constructor(options) {
		super();

		init$1(this, options, instance, create_fragment, safe_not_equal, {
			class: 1,
			style: 2,
			addClosing: 7,
			indentOn: 8,
			spellcheck: 9,
			tab: 10,
			withLineNumbers: 11,
			highlightCode: 3,
			highlightElement: 12,
			syntax: 4,
			value: 0
		});
	}
}

export { CodeJar_1 as CodeJar };
