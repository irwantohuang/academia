<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css'
import { students } from '../../data/students';

const modules = [Pagination]
const breakpoints = ref(
    {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
)
</script>

<template>
    <swiper class="mySwiper" :pagination="true" :modules="modules" :space-between="25" :breakpoints="breakpoints">
        <swiper-slide v-for="data in students" :key="data.id">
            <div class="bg-baseColor px-4 py-6 h-[250px] rounded-tl-3xl rounded-br-3xl shadow-md cursor-pointer">
                <div class="flex items-center gap-4">
                    <div class="w-[95px] h-[95px] rounded-full overflow-hidden">
                        <img :src="data.image" alt="" class="object-cover w-full h-full" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="font-secondary text-xl leading-none">{{ data.name }}</h1>
                        <h5 class="text-base">{{ data.title }}</h5>
                    </div>
                </div>

                <p class="mt-6 text-justify font-light px-2">{{ data.description }}</p>
            </div>
        </swiper-slide>
    </swiper>
</template>