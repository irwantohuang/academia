<script setup>
import Button from '../ui/Button.vue';
</script>

<template>

    <section id="home" class="h-[850px] w-full relative">

        <div class="container mx-auto flex flex-col items-center py-[75px] px-0 max-w-full">

            <h1 class="text-title">Empower Learning</h1>
            <h5 class="text-subtitle">Unleash Your Potential</h5>


            <div class="w-full px-0 mx-0 mt-4 lg:mt-12 bg-baseColor flex flex-col lg:flex-row">
                <div class="w-full h-[380px] lg:h-[580px]">
                    <img src="./../assets/home.jpg" alt="" class="w-full h-full object-cover object-right">
                </div>

                <div class="w-full flex flex-col lg:justify-center lg:items-center px-4 py-12 text-center ">
                    <p class="text-sm px-6 font-secondary lg:max-w-lg lg:text-base text-baseColor-secondary">At academia, we empower students with a personalized and
                        flexible educational experience. Explore our site to discover the endless possibilities.</p>

                    <div class="mt-6 lg:mt-12 flex items-center justify-center">
                        <Button name="Discover" type="pill" />
                    </div>
                </div>

            </div>
        </div>

    </section>

</template>