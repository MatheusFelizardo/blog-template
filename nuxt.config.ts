// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    public: {
      user: process.env.LOGIN,
      password:  process.env.PASS,
      notion:  process.env.NOTION_API_KEY,
      database:  process.env.NOTION_DATABASE,
    }
  }
})
