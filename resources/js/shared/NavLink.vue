<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { route as routeFn } from '../../../vendor/tightenco/ziggy';

const props = defineProps({ route: String });
</script>

<template>
    <Link :class="{'font-bold': $page.props.routeName === route}" :href="routeFn(props.route ?? '')">
        <slot></slot>
    </Link>
</template>
