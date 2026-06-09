export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      title: 'Portfolio - Steven LADOUR',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de Steven LADOUR – UI Designer, Développeur Front-end' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css' }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_variables.scss" as *;'
        }
      }
    }
  }
})
