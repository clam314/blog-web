require('dotenv').config()
export default {
  mode: 'universal',
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '前端实验室',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/style/reset', '~assets/style/variables'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/filter/index.js',
    '@/plugins/axios',
    '@/plugins/api-center',
    { src: '~plugins/vue-infinite-scroll.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  devModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/dotenv', 'cookie-universal-nuxt'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    parallel: true,
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    // 修改打包成单独的CSS文件引入
    extractCSS: {
      // allChunks: true,
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: true,
    },
  },
  env: {
    appBaseUrl: process.env.APP_BASE_URL,
  },
  server: {
    port: 5000,
    // host: '192.168.50.88',
    host: '127.0.0.1',
  },
  axios: {
    proxy: true,
  },

  proxy: {
    '/blog': {
      // target: 'http://0.0.0.0:4000/api',
      // target: 'http://192.168.50.13:4000/api',
      target: process.env.APP_BASE_URL,
      changeOrigin: true,
    },
  },
}
