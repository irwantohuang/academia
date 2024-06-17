<script setup>
import Button from '../../ui/Button.vue';
defineProps({
    title: String,
    description: String,
    price: String
})

</script>

<template>
    <div class=" px-4 py-6 border border-black text-baseColor-secondary">
        <h3 class="font-light text-xl mb-1 lg:text-3xl lg:mb-2">{{ title }}</h3>
        <p class="font-extralight border-b border-black pb-2 lg:pb-3 lg:text-lg">{{ description }}</p>
        <p class="mt-4 font-extralight text-base lg:mt-5 lg:text-lg">{{ price }}</p>

        <Button name="Book Now" class="w-full mt-6" />
    </div>
</template>