// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  runtimeConfig: {
    mongoDBURI: process.env.MONGODB_URI,
    mongoDBCertificate: process.env.MONGODB_CERTIFICATE,
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  }
})
