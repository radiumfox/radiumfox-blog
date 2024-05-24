// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  $production: {},
  $development: {
    devtools: { enabled: true },
  },
  runtimeConfig: {
    apiSecret: process.env.API_SECRET || '',
    public: {
      baseURL: process.env.BASE_URL || '',
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  alias: {
    assets: '/<rootDir>/assets',
  },
  css: ['~/assets/scss/main.scss'],
  modules: [
    // '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
