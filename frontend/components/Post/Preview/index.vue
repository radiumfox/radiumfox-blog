<script setup lang="ts">
import type { PropType } from 'vue'

const MODES = {
  FEATURE: 'feature',
  NORMAL: 'normal',
}

type Modes = MODES.NORMAL | MODES.FEATURE

const props = defineProps({
  mode: {
    type: String as PropType<Modes>,
    default: 'normal',
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
          <v-card-title>
            <div
              :class="[
                'post-preview__badge',
                {
                  'post-preview__badge--feature': props.mode === MODES.FEATURE,
                },
              ]"
            >
              {{ props.badgeText }}
            </div>
          </v-card-title>
          <v-card-title>
            {{ props.text }}
          </v-card-title>
          <v-card-subtitle>
            {{ props.date }}
          </v-card-subtitle>
        </div>
        <v-img
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-img>
      </div>
    </v-card>
  </div>
</template>
