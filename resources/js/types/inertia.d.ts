import type { PageProps as _PageProps } from '@inertiajs/core';

declare module '@inertiajs/core' {
    interface PageProps extends _PageProps {
        navRoutes?: { name: string, label: string, url: string }[]
        name?: string
        time?: string
        auth?: { user?: unknown } | null
        route?: unknown
        routeName?: string | null
        sidebarOpen?: boolean
    }
}
