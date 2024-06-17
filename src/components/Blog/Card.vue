<script setup>
import Button from '../../ui/Button.vue';
defineProps({
    title: String,
    description: String,
    image: String,
})
</script>

<template>

    <div class=" mt-6">
        <div class="h-[200px] bg-blue-200 overflow-hidden rounded-tr-2xl rounded-tl-2xl">
            <img :src="image" alt="" class="object-cover w-full h-full">
        </div>

        <div class="pt-2 pb-6 border-b border-black">
            <h3 class="font-secondary font-semibold text-lg">{{ title }}</h3>
            <p class="font-secondary mt-2 font-thin">{{ description }}</p>

            <Button name="Read More" class="mt-6" />
        </div>
    </div>

</template>