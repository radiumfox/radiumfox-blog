<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>
<template>
  <div class="main-page">
    <section class="main-page__section">
      <h2 class="main-page__title">Featured Post</h2>
      <PostPreview
        text="Designers who changed the web"
        date="July 28, 2022 · 6 min read"
        badge-text="feature"
        mode="feature"
      />
    </section>
    <section class="main-page__section">
      <div>
        <h2 class="main-page__title">Recent Posts</h2>
      </div>
    </section>
  </div>
</template>
