<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import AppLayout from '@/shared/AppLayout.vue';
defineProps({ time: String });
</script>

<template>
    <AppLayout>
        <template #header>
            <h1 class="text-5xl font-bold">Settings</h1>
            <p class="py-6">Explore your application with a modern navbar design powered by daisyUI.</p>
        </template>
    </AppLayout>
</template>
