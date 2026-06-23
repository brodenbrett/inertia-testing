<template>
    <div class="navbar bg-base-200">
        <div class="navbar-start">
            <Link href="/">
                <img src="/assets/logo.svg" class="h-full" alt="{{ $page.props.name }}" />
            </Link>
        </div>

        <div class="navbar-center">
            {{ $page.props.time }}
        </div>

        <div class="navbar-end">
            <ul class="menu menu-horizontal px-1 space-x-2">
                <li v-for="route in $page.props.navRoutes" :key="route.name">
                    <RouterLink :to="route.name">{{ route.label }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
