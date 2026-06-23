import type { route as ziggyRoute } from 'ziggy-js';

declare global {
    var route: typeof ziggyRoute;
}

declare global {
    interface GlobalThis {
        Ziggy?: typeof Ziggy
    }
}
