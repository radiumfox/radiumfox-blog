import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    exclude: ['node_modules', '.nuxt', '.output'],
    // include: ["components", "composables", "layouts", "middleware", "pages", "store"]
  },
  environment: 'happy-dom',
})
