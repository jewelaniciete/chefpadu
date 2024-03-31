<script setup>
    import meal from "../assets/meal.jpg";
    import snack from "../assets/snack.jpg";
    import peanut from "../assets/peanut.jpg";

    const categories = [
        {
            title: 'Meal',
            image: meal,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Snack',
            image: snack,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Peanut',
            image: peanut,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
</script>


<template>
  <section id="category" class="flex flex-col items-center py-20">
    <h2 class="my-10 text-5xl md:text-6xl font-bold text-white border-b-2 py-5">Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 place-items-center">
      <div v-for="category of categories" :key="category.title" class="text-white grid place-items-center gap-5 text-center">
        <div class="p-9">
          <img :src="category.image" class="w-72 rounded-3xl drop-shadow-2xl" alt="category1">
        </div>
        <h3 class="text-3xl font-bold">{{ category.title }}</h3>
        <p class="w-3/4">{{ category.desc}}</p>
      </div>
    </div>
  </section>

  <section id="about" class="grid grid-flow-col grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
    <div class="md:p-10">
        <img src="../assets/cooking.png" alt="">
    </div>
    <div class="text-center flex flex-col items-center">
      <h2 class="text-5xl md:text-6xl font-bold text-white">What's that</h2>
      <div class="flex items-center gap-3">
        <h2 class="text-2xl md:text-4xl font-bold text-white mt-5">Chef <span class="text-secondary-100">Padu</span>kto all about? </h2>
        <img src="../assets/hot-soup.png" class="w-9 md:w-12" alt="head2">
      </div>
      <p class="mt-6 md:mt-12 text-white text-lg md:text-xl w-full md:w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.</p>
    </div>
  </section>
</template>
