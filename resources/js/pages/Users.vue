<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import AppLayout from '@/shared/AppLayout.vue';
defineProps({ time: String });
</script>

<template>
    <AppLayout>
        <template #navCenter>{{ time }}</template>

        <template #header>
            <h1 class="text-5xl font-bold">Users</h1>
            <p class="py-6">Explore your application with a modern navbar design powered by daisyUI.</p>
        </template>

        <template #default>
            <div class="mt-100">
                <Link href="/users" preserve-scroll class="btn btn-primary">Refresh</Link>
            </div>
        </template>
    </AppLayout>
</template>
