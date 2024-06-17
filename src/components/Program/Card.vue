<script setup>
defineProps({
    number: String,
    title: String,
    description: String,
    duration: String,
    startDate: String
})
</script>

<template>
    <div class="px-6 py-8 border border-black rounded-lg">
        <h5 class="text-3xl font-secondary text-baseColor-secondary">{{ number }}</h5>
        <h3 class="font-secondary font-semibold">{{ title }}</h3>
        <p class="font-secondary mt-2">{{ description }}</p>

        <div class="mt-12 flex items-center justify-between">
            <div class="duration flex gap-2 items-center">
                <fa-icon icon="fa-solid fa-clock" />
                <p class="leading-none text-sm">{{ duration }}</p>
            </div>

            <div class="start-date flex gap-2 items-center">
                <fa-icon icon="fa-solid fa-calendar" />
                <p class="leading-none text-sm">{{ startDate }}</p>
            </div>
        </div>
    </div>
</template>