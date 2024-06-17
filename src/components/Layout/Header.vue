<script setup>
import NavMobile from './NavMobile.vue';
import { ref } from 'vue'
import { menu } from '../../data/menu';

const nav = ref(false);
const toggleHamburger = () => nav.value = !nav.value;
</script>

<template>

    <header class="sticky bg-accent top-0 h-[75px] z-30">
        <div class="container flex justify-between items-center h-full mx-auto border-b border-black">
            <a href="" class="font-secondary text-[18px] font-bold hover:text-accent-second">Academia</a>


            <!-- Navigation Bar -->
            <nav>
                <fa-icon @click="toggleHamburger()" icon="fa-solid fa-bars" class="lg:hidden cursor-pointer text-xl" />

                <ul class="lg:flex gap-12 h-full hidden items-center justify-center">
                    <li v-for="e in menu" :key="e.id">
                        <a :href="e.link">{{ e.name }}</a>
                    </li>
                </ul>

                <NavMobile :nav="nav" />
            </nav>
        </div>
    </header>

</template>