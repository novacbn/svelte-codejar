// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".card.svelte-1u7d2ky{padding:0}.card.svelte-1u7d2ky,.card.svelte-1u7d2ky>*{max-height:70vh;min-height:4.5ex}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}