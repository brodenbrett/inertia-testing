<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import NavLink from './NavLink.vue';
defineProps({ time: String });

</script>

<template>
    <div class="navbar bg-base-200">
        <div class="navbar-start">
            <Link href="/" class="btn btn-ghost text-xl">Inertia Learning</Link>
        </div>

        <div class="navbar-center">
            <p>{{ time }}</p>
        </div>

        <div class="navbar-end">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NavLink route="home">Home</NavLink>
                </li>

                <li>
                    <NavLink route="users">Users</NavLink>
                </li>

                <li>
                    <NavLink route="settings">Settings</NavLink>
                </li>

                <li>
                    <Link :class="{'font-bold': $page.props.currentRouteName === 'logout'}"
                          href="/logout"
                          method="post"
                          as="button"
                          :data="{foo: 'bar'}">
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</template>
