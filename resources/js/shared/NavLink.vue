<script setup lang="ts">
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { route as ziggyRoute } from '../../../vendor/tightenco/ziggy';

const { route } = defineProps({
    /** The name of the route to request. */
    route: String,
});
const page = usePage();
const href = computed(() => ziggyRoute(route ?? '') || '#');
const isActive = computed(() => page.props.route?.name === route);
</script>

<template>
    <Link :class="{'bg-primary': isActive}" :href>
        <slot></slot>
    </Link>
</template>
