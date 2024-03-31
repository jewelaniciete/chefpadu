<script setup>
  import NavBar from './components/NavBar.vue';
  import Home from './components/Home.vue';
  import Category from './components/Category.vue';
  import ComingSoon from './components/ComingSoon.vue';
  import Footer from './components/Footer.vue';
  import BackToTop from './components/BackToTop.vue';

</script>

<template>
    <div class="container overflow-x-hidden">
        <NavBar/>
        <Home />
        <Category />
        <ComingSoon />
        <Footer />
    </div>
    <BackToTop />

</template>
