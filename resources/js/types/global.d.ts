import type { route as ziggyRoute } from 'ziggy-js';

// Make IDE aware route() is avaliable globally
declare global {
    var route: typeof ziggyRoute;
}

// Make route() avaliable in Vue component and template properties
declare module 'vue' {
    interface ComponentCustomProperties {
        route: typeof routeFn
    }
}
