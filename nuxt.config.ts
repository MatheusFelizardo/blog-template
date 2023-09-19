// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    title: 'Welcome to my blog',
    head:{
      meta: [
        { hid: 'google-font', rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { hid: 'google-font', rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { hid: 'google-font', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,200;1,6..72,300;1,6..72,400;1,6..72,500;1,6..72,600;1,6..72,700;1,6..72,800&display=swap' },
      ]
    }
  },
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
