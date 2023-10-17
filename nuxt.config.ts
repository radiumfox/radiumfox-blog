// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
  },
  $development: {
    devtools: { enabled: true },
  },
  runtimeConfig: {
    apiSecret: '12345',
    public: {
      apiBase: '/api'
    }
  },
  alias: {
    "@": "/",
  }
})
