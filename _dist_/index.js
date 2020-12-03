import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import "../web_modules/highlightjs/styles/github.css.proxy.js";

import "../extern/styles/chota.css.proxy.js";

import Application from "./Application.js";

window._application = new Application({
    target: document.body,
});

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        window._application.$destroy();
    });
}
