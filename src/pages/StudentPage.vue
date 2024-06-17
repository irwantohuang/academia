<script setup>
import CardSwiper from '../components/Student/CardSwiper.vue';
import { students } from '../data/students.js'
import { Swiper } from 'swiper/vue'
</script>

<template>
    <section class="relative mt-[80px] lg:mt-[200px] w-full">
        <div class="container mx-auto">

            <div class="flex flex-col mb-12">
                <div>
                    <h1 class="text-title">Student Stories</h1>
                    <h5 class="text-subtitle">Inspiring Journeys of Our Learners</h5>
                </div>
            </div>
            <CardSwiper />
        </div>
    </section>
</template>