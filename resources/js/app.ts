import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { ZiggyVue } from 'ziggy-js';
import AppLayout from './shared/AppLayout.vue';
import RouterLink from './shared/RouterLink.vue';
import { Ziggy } from './ziggy';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Fix undefined property error in vite
if (typeof globalThis !== 'undefined' && !(globalThis as GlobalThis).Ziggy) {
    (globalThis as GlobalThis).Ziggy = Ziggy;
}

createInertiaApp({
    title: title => (title ? `${title} - ${appName}` : appName),
    withApp(app) {
        app.use(createPinia());
        app.use(ZiggyVue);
        app.component('Link', Link);
        app.component('RouterLink', RouterLink);
        app.component('AppLayout', AppLayout);
        app.component('Head', Head);
    },
    layout: () => AppLayout,
    progress: {
        delay: 250, // ms before bar appears
        color: '#29d',
        includeCSS: true,
        showSpinner: false,
    },
});
