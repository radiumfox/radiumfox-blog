<script lang="ts" setup>
import type { PropType } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['click'])
</script>
<template>
  <button class="button-base" @click="emits('click')">
    <span class="button-base__icon">
      <img :src="props.icon" />
    </span>
    {{ props.text }}
  </button>
</template>
