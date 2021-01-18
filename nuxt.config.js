export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog-web',
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
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/dotenv'],

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
  },
  axios: {
    proxy: true,
  },

  proxy: {
    '/blog': {
      target: 'http://0.0.0.0:4000/api',
      // target: 'http://192.168.50.13:4000/api',
      // target: 'http://106.52.118.68:4000/api',
      changeOrigin: true,
    },
  },
}
