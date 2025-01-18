// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { ssr: true },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Guitar chords search NuxtJS | Typesense',
    },
  },

  runtimeConfig: {
    public: {
      typesenseSearchOnlyApiKey: 'xyz',
      typesenseServerUrl: 'http://localhost:8108',
    },
  },

  compatibilityDate: '2025-01-10',
});
