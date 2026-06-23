<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const { to } = defineProps({
    /** The name of the route to request. */
    to: { type: String, default: 'home' },
});

const page = usePage();
const href = computed(() => route(to));
const isActive = computed(() => page.props.route?.name === to);
</script>

<template>
    <Link :class="{'bg-primary': isActive}" :href>
        <slot></slot>
    </Link>
</template>
