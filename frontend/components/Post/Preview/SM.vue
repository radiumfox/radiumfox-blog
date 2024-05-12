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
  <div class="post-preview-Sm">
    <v-card variant="outlined" :href="props.href">
      <v-card-title v-if="props.badgeText">
        <div
          :class="[
            'post-preview-small__badge',
            {
              'post-preview-small__badge--feature': props.isFeatured,
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
      <v-img height="200px" :src="props.image" cover></v-img>
    </v-card>
  </div>
</template>
