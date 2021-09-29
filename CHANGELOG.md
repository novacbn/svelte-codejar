# CHANGELOG

## v0.1.1 - 2021/09/29

-   Fixed `TypeError: wrap is null` exception.
-   Fixed `<CodeJar bind:value>` not being replicated.

## v0.1.0 - 2021/08/24

-   Refactored into TypeScript, providing typing support.
-   Fixed publish to NPM, import via `@novacbn/svelte-codejar`.
-   Updated to mount CodeJar via Svelte Action.

## v0.0.4 - 2021/06/09

-   Added getting the `HTMLElement` to the `<pre>` element via `<CodeJar bind:element={XXX}>`
    -   Works similarly to how you would do something like `<div bind:this={XXX}>`

## v0.0.3 - 2021/05/14

-   Added `language-${SYNTAX}` class to `<pre>` for PrismJS
-   Bump dependency versions

## v0.0.2 - 2021/03/15

-   Bump dependency versions
