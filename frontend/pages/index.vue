<script setup lang="ts">
import { ref } from 'vue'
import { MainPageProvider } from '@/classes/providers/main-page.provider'
import { usePostsStore } from '@/store/posts/posts.store'

const store = usePostsStore()
const posts = store.posts
const $MainPageProvider = ref(null)
const showPreloader = ref(true)
store.getPosts().then(() => {
  $MainPageProvider.value = new MainPageProvider(posts)
  showPreloader.value = false
})
</script>
<template>
  <div class="main-page">
    <section class="main-page__section">
      <h2 class="main-page__title">Featured Post</h2>
      <PostPreviewLoader v-if="showPreloader" />
      <PostPreview
        v-else
        :text="$MainPageProvider.featuredPost.title"
        :date="$MainPageProvider.featuredPost.date"
        :image="
          $MainPageProvider.featuredPost.mainImage ||
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        "
        badge-text="featured"
        is-featured
      />
    </section>
    <section class="main-page__section">
      <div>
        <h2 class="main-page__title">Recent Posts</h2>
        <div v-if="showPreloader" class="main-page__posts">
          <PostPreviewLoader />
          <PostPreviewLoader />
        </div>
        <div v-else class="main-page__posts">
          <div
            v-for="(post, index) in $MainPageProvider.recentPosts"
            :key="index"
            class="main-page__post"
          >
            <!-- <PostPreview
              :text="post.title"
              :image="
                post.mainImage ||
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
              "
            /> -->

            <PostPreviewSM
              :text="post.title"
              :image="
                post.mainImage ||
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
              "
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
