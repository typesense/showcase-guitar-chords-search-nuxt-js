// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { ssr: false }, // for the veaury library to work (import error)
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
      PUBLIC_TYPESENSE_SEARCH_ONLY: process.env.PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY,
      PUBLIC_TYPESENSE_HOST: process.env.PUBLIC_TYPESENSE_HOST,
      PUBLIC_TYPESENSE_PORT: process.env.PUBLIC_TYPESENSE_PORT,
      PUBLIC_TYPESENSE_PROTOCOL: process.env.PUBLIC_TYPESENSE_PROTOCOL,
    },
  },
});
