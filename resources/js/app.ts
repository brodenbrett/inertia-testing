import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => (title ? `${title} - ${appName}` : appName),
    withApp(app) {
        app.use(createPinia());
    },
    progress: {
        delay: 250, // ms before bar appears
        color: '#29d',
        includeCSS: true,
        showSpinner: false,
    },
});
