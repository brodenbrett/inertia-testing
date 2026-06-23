<script setup>
defineProps({ users: Object });
</script>
<template>
    <Head title="Users" />
    <h1 class="text-5xl font-bold">Users</h1>
    <p class="py-6">Explore your application with a modern navbar design powered by daisyUI.</p>

    <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                </tr>
            </thead>

            <tbody>
                <!-- row 1 -->
                <tr v-for="user in users.data" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.created_at }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="w-full flex mt-4 justify-center">
        <div class="join">
            <template v-for="link in users.links" :key="link.label">
                <component :is="link.url ? 'Link' : 'span'"
                           :href="link.url"
                           class="join-item btn btn-ghost"
                           :class="{ 'text-gray-500': !link.url, 'btn-primary': link.active }">
                    <span v-html="link.label"></span>
                </component>
            </template>
        </div>
    </div>
</template>
