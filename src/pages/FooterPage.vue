<script setup>
import Button from '../ui/Button.vue';

</script>

<template>

    <footer class="relative mt-[100px] w-full py-[100px] bg-accent-first">
        <div class="container mx-auto">
            <div class="flex flex-col lg:flex-row items-start justify-between gap-6">
               
            <div class="">
                <a href="" class="text-3xl font-secondary font-bold hover:text-baseColor-secondary">Academia.</a>
            </div>    

            <div class="flex flex-col mt-16 lg:mt-0 lg:ms-[400px] w-full">
                <div class="font-light text-lg">
                    <p>123-456-7890</p>
                    <p>info@mysite.com</p>

                    <p class="mt-8 max-w-xs lg:max-w-2xl">500 Terry Fracine Street, 6th Floor. San Fransisco, CA 94158</p>
                </div>


                <h1 class="text-title mt-10 max-w-xs lg:max-w-2xl lg:text-[50px]">Stay updated with our newsletter</h1>

                <div class="form mt-6 flex flex-col w-full">
                    <label for="email" class="font-extralight lg:text-xl">Your Email *</label>
                    <input type="email" name="email" id="email"
                        class="w-full py-2 text-xl font-light outline-none border-b border-black bg-transparent focus:border-b-blue-500">
                </div>

                <div class="w-full mt-6">
                    <Button name="Subscribe" type="pill" class="w-full" />
                    <p class="font-light mt-2">Thank you for subscribing!</p>
                </div>
            </div>
            </div>
        </div>
    </footer>

</template>