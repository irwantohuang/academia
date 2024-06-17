<script setup>
import Card from '../components/Blog/Card.vue';
import { blogs } from './../data/blogs.js'
</script>

<template>

    <section id="blog" class="relative mt-[80px] w-full">
        <div class="container mx-auto">

            <div class="flex flex-col items-center justify-center">
                <h1 class="text-title">Blog</h1>
                <h5 class="text-subtitle">Insights and Tips from Education Experts</h5>
                <p class="text-description text-center max-w-2xl mt-3">Stay updated with the latest educational trends, tips, and insights through our blog. Our team of educators and industry experts share valuable content to help you stay ahead in your learning journey.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card v-for="data in blogs" :image="data.image" :title="data.title" :description="data.description" />
            </div>

        </div>
    </section>

</template>