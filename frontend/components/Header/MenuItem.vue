<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  path: {
    type: String,
    default: '/',
  },
})
</script>
<template>
  <NuxtLink :to="props.path">
    {{ props.text }}
  </NuxtLink>
</template>
