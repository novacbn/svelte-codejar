if(typeof document!="undefined"){const r=`/*! chota.css v0.8.0 | MIT License | github.com/jenil/chota */
:root {
    --bg-color: #fff;
    --bg-secondary-color: #f3f3f6;
    --color-primary: #14854f;
    --color-lightGrey: #d2d6dd;
    --color-grey: #747681;
    --color-darkGrey: #3f4144;
    --color-error: #d43939;
    --color-success: #28bd14;
    --grid-maxWidth: 120rem;
    --grid-gutter: 2rem;
    --font-size: 1.6rem;
    --font-color: #333;
    --font-family-sans: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    --font-family-mono: monaco, "Consolas", "Lucida Console", monospace;
}
html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
* {
    scrollbar-width: thin;
    scrollbar-color: var(--color-lightGrey) var(--bg-primary);
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: var(--bg-primary);
}
::-webkit-scrollbar-thumb {
    background: var(--color-lightGrey);
}
body {
    background-color: var(--bg-color);
    line-height: 1.6;
    font-size: var(--font-size);
    color: var(--font-color);
    font-family: Segoe UI, Helvetica Neue, sans-serif;
    font-family: var(--font-family-sans);
    margin: 0;
    padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 500;
    margin: 0.35em 0 0.7em;
}
h1 {
    font-size: 2em;
}
h2 {
    font-size: 1.75em;
}
h3 {
    font-size: 1.5em;
}
h4 {
    font-size: 1.25em;
}
h5 {
    font-size: 1em;
}
h6 {
    font-size: 0.85em;
}
a {
    color: var(--color-primary);
    text-decoration: none;
}
a:hover:not(.button) {
    opacity: 0.75;
}
button {
    font-family: inherit;
}
p {
    margin-top: 0;
}
blockquote {
    background-color: var(--bg-secondary-color);
    padding: 1.5rem 2rem;
    border-left: 3px solid var(--color-lightGrey);
}
dl dt {
    font-weight: 700;
}
hr {
    background-color: var(--color-lightGrey);
    height: 1px;
    margin: 1rem 0;
}
hr,
table {
    border: none;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
}
table.striped tr:nth-of-type(2n) {
    background-color: var(--bg-secondary-color);
}
td,
th {
    vertical-align: middle;
    padding: 1.2rem 0.4rem;
}
thead {
    border-bottom: 2px solid var(--color-lightGrey);
}
tfoot {
    border-top: 2px solid var(--color-lightGrey);
}
code,
kbd,
pre,
samp,
tt {
    font-family: var(--font-family-mono);
}
code,
kbd {
    font-size: 90%;
    white-space: pre-wrap;
    border-radius: 4px;
    padding: 0.2em 0.4em;
    color: var(--color-error);
}
code,
kbd,
pre {
    background-color: var(--bg-secondary-color);
}
pre {
    font-size: 1em;
    padding: 1rem;
    overflow-x: auto;
}
pre code {
    background: none;
    padding: 0;
}
abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
}
img {
    max-width: 100%;
}
fieldset {
    border: 1px solid var(--color-lightGrey);
}
iframe {
    border: 0;
}
.container {
    max-width: var(--grid-maxWidth);
    margin: 0 auto;
    width: 96%;
    padding: 0 calc(var(--grid-gutter) / 2);
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-left: calc(var(--grid-gutter) / -2);
    margin-right: calc(var(--grid-gutter) / -2);
}
.row,
.row.reverse {
    -webkit-box-orient: horizontal;
}
.row.reverse {
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}
.col {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.col,
[class*=" col-"],
[class^="col-"] {
    margin: 0 calc(var(--grid-gutter) / 2) calc(var(--grid-gutter) / 2);
}
.col-1 {
    -ms-flex: 0 0 calc(8.33333% - var(--grid-gutter));
    flex: 0 0 calc(8.33333% - var(--grid-gutter));
    max-width: calc(8.33333% - var(--grid-gutter));
}
.col-1,
.col-2 {
    -webkit-box-flex: 0;
}
.col-2 {
    -ms-flex: 0 0 calc(16.66667% - var(--grid-gutter));
    flex: 0 0 calc(16.66667% - var(--grid-gutter));
    max-width: calc(16.66667% - var(--grid-gutter));
}
.col-3 {
    -ms-flex: 0 0 calc(25% - var(--grid-gutter));
    flex: 0 0 calc(25% - var(--grid-gutter));
    max-width: calc(25% - var(--grid-gutter));
}
.col-3,
.col-4 {
    -webkit-box-flex: 0;
}
.col-4 {
    -ms-flex: 0 0 calc(33.33333% - var(--grid-gutter));
    flex: 0 0 calc(33.33333% - var(--grid-gutter));
    max-width: calc(33.33333% - var(--grid-gutter));
}
.col-5 {
    -ms-flex: 0 0 calc(41.66667% - var(--grid-gutter));
    flex: 0 0 calc(41.66667% - var(--grid-gutter));
    max-width: calc(41.66667% - var(--grid-gutter));
}
.col-5,
.col-6 {
    -webkit-box-flex: 0;
}
.col-6 {
    -ms-flex: 0 0 calc(50% - var(--grid-gutter));
    flex: 0 0 calc(50% - var(--grid-gutter));
    max-width: calc(50% - var(--grid-gutter));
}
.col-7 {
    -ms-flex: 0 0 calc(58.33333% - var(--grid-gutter));
    flex: 0 0 calc(58.33333% - var(--grid-gutter));
    max-width: calc(58.33333% - var(--grid-gutter));
}
.col-7,
.col-8 {
    -webkit-box-flex: 0;
}
.col-8 {
    -ms-flex: 0 0 calc(66.66667% - var(--grid-gutter));
    flex: 0 0 calc(66.66667% - var(--grid-gutter));
    max-width: calc(66.66667% - var(--grid-gutter));
}
.col-9 {
    -ms-flex: 0 0 calc(75% - var(--grid-gutter));
    flex: 0 0 calc(75% - var(--grid-gutter));
    max-width: calc(75% - var(--grid-gutter));
}
.col-9,
.col-10 {
    -webkit-box-flex: 0;
}
.col-10 {
    -ms-flex: 0 0 calc(83.33333% - var(--grid-gutter));
    flex: 0 0 calc(83.33333% - var(--grid-gutter));
    max-width: calc(83.33333% - var(--grid-gutter));
}
.col-11 {
    -ms-flex: 0 0 calc(91.66667% - var(--grid-gutter));
    flex: 0 0 calc(91.66667% - var(--grid-gutter));
    max-width: calc(91.66667% - var(--grid-gutter));
}
.col-11,
.col-12 {
    -webkit-box-flex: 0;
}
.col-12 {
    -ms-flex: 0 0 calc(100% - var(--grid-gutter));
    flex: 0 0 calc(100% - var(--grid-gutter));
    max-width: calc(100% - var(--grid-gutter));
}
@media screen and (max-width: 599px) {
    .container {
        width: 100%;
    }
    .col,
    [class*="col-"],
    [class^="col-"] {
        -webkit-box-flex: 0;
        -ms-flex: 0 1 100%;
        flex: 0 1 100%;
        max-width: 100%;
    }
}
@media screen and (min-width: 900px) {
    .col-1-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(8.33333% - var(--grid-gutter));
        flex: 0 0 calc(8.33333% - var(--grid-gutter));
        max-width: calc(8.33333% - var(--grid-gutter));
    }
    .col-2-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(16.66667% - var(--grid-gutter));
        flex: 0 0 calc(16.66667% - var(--grid-gutter));
        max-width: calc(16.66667% - var(--grid-gutter));
    }
    .col-3-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(25% - var(--grid-gutter));
        flex: 0 0 calc(25% - var(--grid-gutter));
        max-width: calc(25% - var(--grid-gutter));
    }
    .col-4-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(33.33333% - var(--grid-gutter));
        flex: 0 0 calc(33.33333% - var(--grid-gutter));
        max-width: calc(33.33333% - var(--grid-gutter));
    }
    .col-5-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(41.66667% - var(--grid-gutter));
        flex: 0 0 calc(41.66667% - var(--grid-gutter));
        max-width: calc(41.66667% - var(--grid-gutter));
    }
    .col-6-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(50% - var(--grid-gutter));
        flex: 0 0 calc(50% - var(--grid-gutter));
        max-width: calc(50% - var(--grid-gutter));
    }
    .col-7-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(58.33333% - var(--grid-gutter));
        flex: 0 0 calc(58.33333% - var(--grid-gutter));
        max-width: calc(58.33333% - var(--grid-gutter));
    }
    .col-8-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(66.66667% - var(--grid-gutter));
        flex: 0 0 calc(66.66667% - var(--grid-gutter));
        max-width: calc(66.66667% - var(--grid-gutter));
    }
    .col-9-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(75% - var(--grid-gutter));
        flex: 0 0 calc(75% - var(--grid-gutter));
        max-width: calc(75% - var(--grid-gutter));
    }
    .col-10-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(83.33333% - var(--grid-gutter));
        flex: 0 0 calc(83.33333% - var(--grid-gutter));
        max-width: calc(83.33333% - var(--grid-gutter));
    }
    .col-11-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(91.66667% - var(--grid-gutter));
        flex: 0 0 calc(91.66667% - var(--grid-gutter));
        max-width: calc(91.66667% - var(--grid-gutter));
    }
    .col-12-md {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(100% - var(--grid-gutter));
        flex: 0 0 calc(100% - var(--grid-gutter));
        max-width: calc(100% - var(--grid-gutter));
    }
}
@media screen and (min-width: 1200px) {
    .col-1-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(8.33333% - var(--grid-gutter));
        flex: 0 0 calc(8.33333% - var(--grid-gutter));
        max-width: calc(8.33333% - var(--grid-gutter));
    }
    .col-2-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(16.66667% - var(--grid-gutter));
        flex: 0 0 calc(16.66667% - var(--grid-gutter));
        max-width: calc(16.66667% - var(--grid-gutter));
    }
    .col-3-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(25% - var(--grid-gutter));
        flex: 0 0 calc(25% - var(--grid-gutter));
        max-width: calc(25% - var(--grid-gutter));
    }
    .col-4-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(33.33333% - var(--grid-gutter));
        flex: 0 0 calc(33.33333% - var(--grid-gutter));
        max-width: calc(33.33333% - var(--grid-gutter));
    }
    .col-5-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(41.66667% - var(--grid-gutter));
        flex: 0 0 calc(41.66667% - var(--grid-gutter));
        max-width: calc(41.66667% - var(--grid-gutter));
    }
    .col-6-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(50% - var(--grid-gutter));
        flex: 0 0 calc(50% - var(--grid-gutter));
        max-width: calc(50% - var(--grid-gutter));
    }
    .col-7-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(58.33333% - var(--grid-gutter));
        flex: 0 0 calc(58.33333% - var(--grid-gutter));
        max-width: calc(58.33333% - var(--grid-gutter));
    }
    .col-8-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(66.66667% - var(--grid-gutter));
        flex: 0 0 calc(66.66667% - var(--grid-gutter));
        max-width: calc(66.66667% - var(--grid-gutter));
    }
    .col-9-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(75% - var(--grid-gutter));
        flex: 0 0 calc(75% - var(--grid-gutter));
        max-width: calc(75% - var(--grid-gutter));
    }
    .col-10-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(83.33333% - var(--grid-gutter));
        flex: 0 0 calc(83.33333% - var(--grid-gutter));
        max-width: calc(83.33333% - var(--grid-gutter));
    }
    .col-11-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(91.66667% - var(--grid-gutter));
        flex: 0 0 calc(91.66667% - var(--grid-gutter));
        max-width: calc(91.66667% - var(--grid-gutter));
    }
    .col-12-lg {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(100% - var(--grid-gutter));
        flex: 0 0 calc(100% - var(--grid-gutter));
        max-width: calc(100% - var(--grid-gutter));
    }
}
fieldset {
    padding: 0.5rem 2rem;
}
legend {
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0.1rem;
}
input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]),
select,
textarea,
textarea[type="text"] {
    font-family: inherit;
    padding: 0.8rem 1rem;
    border-radius: 4px;
    border: 1px solid var(--color-lightGrey);
    font-size: 1em;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    display: block;
    width: 100%;
}
input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]):not(:disabled):hover,
select:hover,
textarea:hover,
textarea[type="text"]:hover {
    border-color: var(--color-grey);
}
input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]):focus,
select:focus,
textarea:focus,
textarea[type="text"]:focus {
    outline: none;
    border-color: var(--color-primary);
    -webkit-box-shadow: 0 0 1px var(--color-primary);
    box-shadow: 0 0 1px var(--color-primary);
}
input.error:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]),
textarea.error {
    border-color: var(--color-error);
}
input.success:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="color"]):not([type="button"]):not([type="reset"]),
textarea.success {
    border-color: var(--color-success);
}
select {
    -webkit-appearance: none;
    background: #f3f3f6 no-repeat 100%;
    background-size: 1ex;
    background-origin: content-box;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='40' fill='%23555'><polygon points='0,0 60,0 30,40'/></svg>");
}
[type="checkbox"],
[type="radio"] {
    width: 1.6rem;
    height: 1.6rem;
}
.button,
[type="button"],
[type="reset"],
[type="submit"],
button {
    padding: 1rem 2.5rem;
    color: var(--color-darkGrey);
    background: var(--color-lightGrey);
    border-radius: 4px;
    border: 1px solid transparent;
    font-size: var(--font-size);
    line-height: 1;
    text-align: center;
    -webkit-transition: opacity 0.2s ease;
    transition: opacity 0.2s ease;
    text-decoration: none;
    -webkit-transform: scale(1);
    transform: scale(1);
    display: inline-block;
    cursor: pointer;
}
.grouped {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.grouped > :not(:last-child) {
    margin-right: 16px;
}
.grouped.gapless > * {
    margin: 0 0 0 -1px !important;
    border-radius: 0 !important;
}
.grouped.gapless > :first-child {
    margin: 0 !important;
    border-radius: 4px 0 0 4px !important;
}
.grouped.gapless > :last-child {
    border-radius: 0 4px 4px 0 !important;
}
.button + .button {
    margin-left: 1rem;
}
.button:hover,
[type="button"]:hover,
[type="reset"]:hover,
[type="submit"]:hover,
button:hover {
    opacity: 0.8;
}
.button:active,
[type="button"]:active,
[type="reset"]:active,
[type="submit"]:active,
button:active {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
}
button:disabled,
button:disabled:hover,
input:disabled,
input:disabled:hover {
    opacity: 0.4;
    cursor: not-allowed;
}
.button.dark,
.button.error,
.button.primary,
.button.secondary,
.button.success,
[type="submit"] {
    color: #fff;
    z-index: 1;
    background-color: #000;
    background-color: var(--color-primary);
}
.button.secondary {
    background-color: var(--color-grey);
}
.button.dark {
    background-color: var(--color-darkGrey);
}
.button.error {
    background-color: var(--color-error);
}
.button.success {
    background-color: var(--color-success);
}
.button.outline {
    background-color: transparent;
    border-color: var(--color-lightGrey);
}
.button.outline.primary {
    border-color: var(--color-primary);
    color: var(--color-primary);
}
.button.outline.secondary {
    border-color: var(--color-grey);
    color: var(--color-grey);
}
.button.outline.dark {
    border-color: var(--color-darkGrey);
    color: var(--color-darkGrey);
}
.button.clear {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary);
}
.button.icon {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.button.icon > img {
    margin-left: 2px;
}
.button.icon-only {
    padding: 1rem;
}
::-webkit-input-placeholder {
    color: #bdbfc4;
}
::-moz-placeholder {
    color: #bdbfc4;
}
:-ms-input-placeholder {
    color: #bdbfc4;
}
::-ms-input-placeholder {
    color: #bdbfc4;
}
::placeholder {
    color: #bdbfc4;
}
.nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 5rem;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
}
.nav img {
    max-height: 3rem;
}
.nav-center,
.nav-left,
.nav-right,
.nav > .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.nav-center,
.nav-left,
.nav-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.nav-left {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.nav-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.nav-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
@media screen and (max-width: 480px) {
    .nav,
    .nav > .container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .nav-center,
    .nav-left,
    .nav-right {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}
.nav .brand,
.nav a {
    text-decoration: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 1rem 2rem;
    color: var(--color-darkGrey);
}
.nav .active:not(.button),
.nav [aria-current="page"]:not(.button) {
    color: #000;
    color: var(--color-primary);
}
.nav .brand {
    font-size: 1.75em;
    padding-top: 0;
    padding-bottom: 0;
}
.nav .brand img {
    padding-right: 1rem;
}
.nav .button {
    margin: auto 1rem;
}
.card {
    padding: 1rem 2rem;
    border-radius: 4px;
    background: var(--bg-color);
    -webkit-box-shadow: 0 1px 3px var(--color-grey);
    box-shadow: 0 1px 3px var(--color-grey);
}
.card p:last-child {
    margin: 0;
}
.card header > * {
    margin-top: 0;
    margin-bottom: 1rem;
}
.tabs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.tabs a {
    text-decoration: none;
}
.tabs > .dropdown > summary,
.tabs > a {
    padding: 1rem 2rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    color: var(--color-darkGrey);
    border-bottom: 2px solid var(--color-lightGrey);
    text-align: center;
}
.tabs > a.active,
.tabs > a:hover,
.tabs > a[aria-current="page"] {
    opacity: 1;
    border-bottom: 2px solid var(--color-darkGrey);
}
.tabs > a.active,
.tabs > a[aria-current="page"] {
    border-color: var(--color-primary);
}
.tabs.is-full a {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.tag {
    display: inline-block;
    border: 1px solid var(--color-lightGrey);
    text-transform: uppercase;
    color: var(--color-grey);
    padding: 0.5rem;
    line-height: 1;
    letter-spacing: 0.5px;
}
.tag.is-small {
    padding: 0.4rem;
    font-size: 0.75em;
}
.tag.is-large {
    padding: 0.7rem;
    font-size: 1.125em;
}
.tag + .tag {
    margin-left: 1rem;
}
details.dropdown {
    position: relative;
    display: inline-block;
}
details.dropdown > :last-child {
    position: absolute;
    left: 0;
    white-space: nowrap;
}
.bg-primary {
    background-color: var(--color-primary) !important;
}
.bg-light {
    background-color: var(--color-lightGrey) !important;
}
.bg-dark {
    background-color: var(--color-darkGrey) !important;
}
.bg-grey {
    background-color: var(--color-grey) !important;
}
.bg-error {
    background-color: var(--color-error) !important;
}
.bg-success {
    background-color: var(--color-success) !important;
}
.bd-primary {
    border: 1px solid var(--color-primary) !important;
}
.bd-light {
    border: 1px solid var(--color-lightGrey) !important;
}
.bd-dark {
    border: 1px solid var(--color-darkGrey) !important;
}
.bd-grey {
    border: 1px solid var(--color-grey) !important;
}
.bd-error {
    border: 1px solid var(--color-error) !important;
}
.bd-success {
    border: 1px solid var(--color-success) !important;
}
.text-primary {
    color: var(--color-primary) !important;
}
.text-light {
    color: var(--color-lightGrey) !important;
}
.text-dark {
    color: var(--color-darkGrey) !important;
}
.text-grey {
    color: var(--color-grey) !important;
}
.text-error {
    color: var(--color-error) !important;
}
.text-success {
    color: var(--color-success) !important;
}
.text-white {
    color: #fff !important;
}
.pull-right {
    float: right !important;
}
.pull-left {
    float: left !important;
}
.text-center {
    text-align: center;
}
.text-left {
    text-align: left;
}
.text-right {
    text-align: right;
}
.text-justify {
    text-align: justify;
}
.text-uppercase {
    text-transform: uppercase;
}
.text-lowercase {
    text-transform: lowercase;
}
.text-capitalize {
    text-transform: capitalize;
}
.is-full-screen {
    width: 100%;
    min-height: 100vh;
}
.is-full-width {
    width: 100% !important;
}
.is-vertical-align {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.is-center,
.is-horizontal-align {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.is-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.is-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.is-left,
.is-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.is-left {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.is-fixed {
    position: fixed;
    width: 100%;
}
.is-paddingless {
    padding: 0 !important;
}
.is-marginless {
    margin: 0 !important;
}
.is-pointer {
    cursor: pointer !important;
}
.is-rounded {
    border-radius: 100%;
}
.clearfix {
    content: "";
    display: table;
    clear: both;
}
.is-hidden {
    display: none !important;
}
@media screen and (max-width: 599px) {
    .hide-xs {
        display: none !important;
    }
}
@media screen and (min-width: 600px) and (max-width: 899px) {
    .hide-sm {
        display: none !important;
    }
}
@media screen and (min-width: 900px) and (max-width: 1199px) {
    .hide-md {
        display: none !important;
    }
}
@media screen and (min-width: 1200px) {
    .hide-lg {
        display: none !important;
    }
}
@media print {
    .hide-pr {
        display: none !important;
    }
}
`,n=document.createElement("style"),t=document.createTextNode(r);n.type="text/css",n.appendChild(t),document.head.appendChild(n)}
