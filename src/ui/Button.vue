<script setup>

defineProps({
    name: String,
    type: String,
})

</script>

<template>

    <button 
        class="px-16 py-2 bg-baseColor-secondary text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-baseColor-secondary/75"
        :class="type === 'pill' ? 'rounded-full' : ''"
        >{{ name }}
    </button>

</template>