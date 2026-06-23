<script setup lang="ts">
import NavMenu from './NavMenu.vue';
</script>

<template>
    <NavMenu />

    <div class="min-h-screen bg-base-200 grid items-center">
        <div class="max-w-325 w-full m-auto">
            <slot></slot>
        </div>
    </div>
</template>
