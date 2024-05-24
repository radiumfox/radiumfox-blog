<script setup lang="ts">
const props = defineProps({
  isFeatured: {
    type: Boolean,
    default: false,
  },
  badgeText: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="post-preview">
    <v-card variant="outlined" :href="props.href">
      <div class="post-preview__wrapper">
        <div class="post-preview__text">
          <v-card-title v-if="props.badgeText">
            <div
              :class="[
                'post-preview__badge',
                {
                  'post-preview__badge--feature': props.isFeatured,
                },
              ]"
            >
              {{ props.badgeText }}
            </div>
          </v-card-title>
          <v-card-title>
            {{ props.text }}
          </v-card-title>
          <v-card-subtitle v-if="props.date">
            {{ props.date }}
          </v-card-subtitle>
        </div>
        <v-img height="200px" :src="props.image" cover></v-img>
      </div>
    </v-card>
  </div>
</template>
