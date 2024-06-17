<script setup>
import {course} from './../data/course'
import Card from '../components/Booking/Card.vue';
</script>

<template>

    <section id="book" class="w-full relative mt-[80px]">
        <div class="container mx-auto">

            <h1 class="text-title">Course Registration</h1>
            <!-- flex flex-col gap-4 px-2 mt-6 lg:flex-row -->

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 mt-6">
                <Card v-for="data in course" :key="data.title" :title="data.title" :description="data.description" :price="data.price" />
            </div>
        </div>
    </section>

</template>