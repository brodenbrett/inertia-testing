import { exec } from 'child_process';
import inertia from '@inertiajs/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        watch: {
            ignored: [
                '**/.junie/**',
                '**/.github/**',
                '**/.vscode/**',
                '**/.cursor/**',
                '**/.claude/**',
            ],
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        // Custom plugin keeps ziggy in sync with routes
        {
            name: 'ziggy-generate',
            configureServer(server) {
                const log = (msg: any) => console.log('\x1b[35m%s\x1b[0m', '[ziggy-generate]', msg);

                const generate = () => {
                    exec(
                        'mkdir -p resources/js/ziggy/types && php artisan ziggy:generate resources/js/ziggy/ziggy.js --types=resources/js/ziggy/types/ziggy.d.ts',
                        (error, stdout, stderr) => {
                            if (error) console.error(error);
                            if (stderr) console.error(stderr);
                            log(stdout);
                        },
                    );
                };

                generate();

                server.watcher.add(['routes/**/*.php', 'config/ziggy.php']);
                server.watcher.on('change', (path) => {
                    if (path.startsWith('config/ziggy.php') || path.startsWith('routes/')) {
                        log(`Detected change to ${path}`);
                        generate();
                    }
                });
            },
        },
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
            },
        },
    },
});
