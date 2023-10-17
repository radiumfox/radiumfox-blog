<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import index from './pages/index.vue';
import posts from './pages/posts.vue';
import CreatePost from './pages/create-post.vue';
const route = useRoute();

</script>
<template>
    <Header/>
    <NuxtPage />
    <Footer/>
</template>
