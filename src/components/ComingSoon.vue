<script setup>
 import coming_soon from "../data/ComingSoon";
</script>

<template>
    <section id="coming-soon" class="flex flex-col items-center py-20">
        <h2 class="mt-7 md:mb-16 text-5xl md:text-6xl font-bold text-white border-b-2 py-5 ">Coming Soon</h2>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            <div v-for="item of coming_soon" :key="item.title" class="grid place-items-center text-center gap-5 p-8 bg-primary-200/10 shadow-2xl rounded-md text-white">           
                <div>
                    <img :src="item.image" alt="" class="w-64 rounded-md">
                </div>
                <h3 class="text-2xl lg:text-4xl font-bold">{{ item.title }}</h3>
                <p class="w-[90%] hidden md:block">{{ item.desc }}</p>
            </div>
        </div>
    </section>
</template>
