require('dotenv').config()

const config = {
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
  buildModules: [
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
    port: 5432,
  },
  axios: {
    // 线上采用nginx作为代理，需要关闭
    proxy: true,
    prefix: '/api',
    baseUrl: process.env.APP_BASE_URL,
  },

  proxy: {
    '/api/blog': {
      target: process.env.APP_BASE_URL,
      changeOrigin: true,
    },
  },
}
console.log('NODE_ENV: ', process.env.NODE_ENV)

export default config
