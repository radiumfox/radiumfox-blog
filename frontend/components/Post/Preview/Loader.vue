<script setup lang="ts"></script>
<template>
  <div class="post-preview">
    <v-card variant="outlined">
      <div class="post-preview__wrapper">
        <div class="post-preview__text">
          <v-skeleton-loader
            type="list-item-two-line"
            height="200"
          ></v-skeleton-loader>
        </div>
        <div class="post-preview__image">
          <v-skeleton-loader height="200"></v-skeleton-loader>
        </div>
      </div>
    </v-card>
  </div>
</template>
