import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  build: {
    transpile: ["@headlessui/vue"],
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    ga: process.env.GOOGLE_ANALYTICS,
  },
  ssr: false,
});
