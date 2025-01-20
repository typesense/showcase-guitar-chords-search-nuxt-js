// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-ignore
import veauryVitePlugins from 'veaury/vite/index.js';

export default defineNuxtConfig({
  devtools: { enabled: true },
  debug: true,

  runtimeConfig: {
    public: {
      typesenseSearchOnlyApiKey: 'xyz',
      typesenseServerUrl: 'http://localhost:8108',
    },
  },

  build: {
    transpile: [
      ({ isDev }) => !isDev && 'typesense-instantsearch-adapter',
      'veaury',
    ],
  },

  vite: {
    plugins: [
      veauryVitePlugins({
        type: 'vue',
        isNuxt: true,
      }),
    ],
    optimizeDeps: {
      include: ['typesense-instantsearch-adapter', 'veaury'],
    },
  },

  compatibilityDate: '2025-01-20',
});
