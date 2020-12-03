import {readable} from "svelte/store";

export function hash() {
    return readable(window.location.hash, (set) => {
        function on_hash_change(event) {
            set(window.location.hash);
        }

        set(window.location.hash);

        window.addEventListener("hashchange", on_hash_change);
        return () => window.removeEventListener("hashchange", on_hash_change);
    });
}
