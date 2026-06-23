<script setup>
import { router } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import { debounce } from '@/utils/debounce.js';
import Pagination from '@/components/Shared/Pagination.vue';
import TheUsers from '@/components/Users/TheUsers.vue';

const props = defineProps({
    users: Object,
    filters: Object,
});

const search = ref(props.filters.q || '');
watch(search, debounce((q) => {
    const data = q ? { q } : {};
    router.get('/users', data, {
        preserveState: true,
        replace: true,
    });
}));

</script>
<template>
    <div>
        <Head title="Users" />
        <h1 class="text-5xl font-bold">Users</h1>
        <p class="py-6">Explore your application with a modern navbar design powered by daisyUI.</p>

        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div class="form-control w-full sm:w-auto ml-auto">
                <input v-model="search"
                       type="search"
                       placeholder="Search by name or email"
                       class="input input-bordered w-75" />
            </div>
        </div>

        <TheUsers :users="users" />

        <Pagination :links="users.links" />
    </div>
</template>
