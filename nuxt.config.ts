// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { ssr: false }, // for the veaury library to work (import error)
  },
  runtimeConfig: {
    public: {
      PUBLIC_TYPESENSE_SEARCH_ONLY: process.env.PUBLIC_TYPESENSE_SEARCH_ONLY,
      PUBLIC_TYPESENSE_HOST: process.env.PUBLIC_TYPESENSE_HOST,
      PUBLIC_TYPESENSE_PORT: process.env.PUBLIC_TYPESENSE_PORT,
      PUBLIC_TYPESENSE_PROTOCOL: process.env.PUBLIC_TYPESENSE_PROTOCOL,
    },
  },
});
