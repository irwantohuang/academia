<script setup>
import { menu } from '../../data/menu';

defineProps({
    nav: Boolean
})
</script>

<template>
    <Transition name="slide-up">
        <ul v-show="nav" class="fixed inset-x-0 bottom-0 lg:hidden flex flex-col gap-4 px-4 py-6 bg-accent-first shadow-xl ">
            <li v-for="e in menu" :key="e.id">
                <a class="hover:text-baseColor-secondary/75" :href="e.link">{{ e.name }}</a>
            </li>
        </ul>
    </Transition>
</template>


<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
    @apply duration-500 transition-all ease-in-out transform
}

.slide-up-enter-from, .slide-up-leave-to {
    @apply translate-y-[100%]
}

.slide-up-enter-to, .slide-up-leave {
    @apply translate-y-0
}
</style>