<script setup lang="ts">
import { ref } from "vue";
import { usePostsStore } from "@/store/posts/posts.store";

const store = usePostsStore();

const title = ref("");
const content = ref("");
const tags = ref("");

const createPost = () => {
  const date = new Date().toISOString();
  const tagsList = tags.value.split(",").map((v) => v.trim()) || [""];
  const data = {
    date: date,
    title: title.value,
    content: content.value,
    tags: tagsList,
    images: [""],
  };

  store.createPost(data).then((res) => {
    if (res) clearInputs();
  });
};
const clearInputs = () => {
  content.value = "";
  title.value = "";
  tags.value = "";
};
</script>
<template>
  <div class="create-form">
    <h3 class="create-form__title">Create post</h3>
    <div class="create-form__input">
      <label for="title">Title</label>
      <input v-model="title" name="title" type="text" />
    </div>
    <div class="create-form__input">
      <label for="content">Content</label>
      <textarea v-model="content" name="content"></textarea>
    </div>
    <div class="create-form__input">
      <label for="tags">Tags</label>
      <input
        v-model="tags"
        name="tags"
        type="text"
        placeholder="list separated by commas"
      />
    </div>

    <button type="button" @click="createPost()">Create post</button>
  </div>
</template>
