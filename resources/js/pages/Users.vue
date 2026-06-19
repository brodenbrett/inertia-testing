<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import NavMenu from '../shared/NavMenu.vue';
import ViewContent from '../shared/ViewContent.vue';
defineProps({ time: String });
</script>

<template>
    <NavMenu :time />

    <ViewContent>
        <h1 class="text-5xl font-bold">Users</h1>
        <p class="py-6">Explore your application with a modern navbar design powered by daisyUI.</p>

        <div class="mt-100">
            <Link href="/users" preserve-scroll class="btn btn-primary">Refresh</Link>
        </div>
    </ViewContent>
</template>
