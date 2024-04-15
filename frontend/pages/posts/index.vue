<script setup lang="ts">
import { ref } from 'vue'
import { usePostsStore } from '@/store/posts/posts.store'

const store = usePostsStore()
const title = ref('')
const content = ref('')
const tags = ref('')
const editedPost = ref(-1)
const posts = store.posts;

store.getPosts();

const updatePost = (id, index) => {
  const tagsList = tags.value.split(',').map((v) => v.trim()) || ['']
  const data = {
    id: id,
    title: title.value,
    content: content.value,
    tags: tagsList,
    images: [''],
  }

  store.updatePost(id, data, index)
}

const deletePost = (id: string, index: number) => {
  store.deletePost(id, index)
}

const editPost = (index) => {
  clearInputs()

  const post = posts[index]
  content.value = post.content
  title.value = post.title
  tags.value = post.tags.join(',')
  editedPost.value = index
}

const closeForm = () => {
  editedPost.value = -1
}

const clearInputs = () => {
  content.value = ''
  title.value = ''
  tags.value = ''
}
</script>
<template>
  <div>
      <template v-for="(post, idx) in posts" :key="idx">
        <div class="post">
          <h3 class="post__title">{{ post.title }}</h3>
          <p class="post__content">{{ post.content }}</p>
          <em class="post__date">Date: {{ post.date }}</em>
          <div>
            <template v-for="(tag, index) in post.tags">
              <em>{{ tag }}{{ index < post.tags.length - 1 ? ', ' : '' }}</em>
            </template>
          </div>

          <div class="edit-form" v-if="editedPost === idx">
            <h3>Edit post</h3>
            <div class="edit-form__item">
              <label for="title">Title</label>
              <input name="title" v-model="title" type="text" />
            </div>
            <div class="edit-form__item">
              <label for="content">Content</label>
              <textarea name="content" v-model="content"></textarea>
            </div>
            <div class="edit-form__item">
              <label for="tags">Tags</label>
              <input
                name="tags"
                v-model="tags"
                type="text"
                placeholder="list separated by commas"
              />
            </div>

            <button type="button" @click="updatePost(post._id, idx)">
              Save
            </button>
            <button type="button" @click="closeForm()">Close</button>
          </div>
          <template v-else>
            <button @click="editPost(idx)" type="button">Edit</button>
            <button @click="deletePost(post._id, idx)" type="button">
              Delete
            </button>
          </template>
          <hr />
        </div>
      </template>
  </div>
</template>
