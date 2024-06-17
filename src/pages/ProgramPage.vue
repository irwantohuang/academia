<script setup>
import Card from '../components/Program/Card.vue';
import {programs} from './../data/programs'
</script>

<template>

    <section id="program" class="mt-[80px] w-full bg-baseColor relative">
        
        <div class="h-auto flex flex-col lg:flex-row">
            
            <div class="h-[300px] md:h-[400px] lg:min-w-[400px] lg:h-[900px] bg-black">
                <img src="./../assets/programs.jpg" alt="" class="w-full h-full object-cover object-left">
            </div>

            <div class="container mx-auto mt-8 lg:px-32">
                <h1 class="text-title">Our Program's</h1>
                <h5 class="text-subtitle">Explore Our Diverse Range of Educational Programs</h5>
                <p class="text-description mt-3">At Academia, we offer a variety of programs designed to cater to different interests and learning styles. Each program is crafted by experienced educators to ensure a comprehensive and engaging educational experience.</p>

                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card v-for="data in programs" :number="data.number" :title="data.title" :description="data.description" :duration="data.duration" :start-date="data.startDate" />
                </div>
            </div>

        </div>

    </section>

</template>