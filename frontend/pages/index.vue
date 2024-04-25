<script setup lang="ts">
import { ref } from 'vue'
import { MainPageProvider } from '@/classes/providers/main-page.provider'
import { usePostsStore } from '@/store/posts/posts.store'

const store = usePostsStore()
const posts = store.posts
const $MainPageProvider = ref(null)
const loaded = ref(false)

store.getPosts().then(()=> {
  $MainPageProvider.value = new MainPageProvider(posts)
  loaded.value = true
})
</script>
<template>
  <div class="main-page">
    <template v-if="loaded">
      <section class="main-page__section">
        <h2 class="main-page__title">Featured Post</h2>
        <PostPreview
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
          <div>
            <div
              v-for="(post, index) in $MainPageProvider.recentPosts"
              :key="index"
            >
              <PostPreview
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
    </template>
  </div>
</template>
