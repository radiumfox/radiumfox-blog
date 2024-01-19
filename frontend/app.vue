<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const route = useRoute();

</script>
<template>
    <Header/>
    <NuxtPage />
    <Footer/>
</template>
