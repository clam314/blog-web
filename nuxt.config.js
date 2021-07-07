import path from 'path'
require('dotenv').config()
// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')
// eslint-disable-next-line nuxt/no-cjs-in-config
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const GitRevision = new GitRevisionPlugin()
const buildDate = JSON.stringify(new Date().toLocaleString())
// check Git
function getGitHash() {
  try {
    return GitRevision.version()
  } catch (e) {}
  return 'unknown'
}

const config = {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '前端实验室',
    meta: [
      { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '在这里，你可以看到我的一些技术文章和网络日志，中间可能还夹杂着自己的一些随笔杂文',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '前端、技术、Android、Linux、Docker、Node、HTML、CSS',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }],
    script: [{ src: 'https://hm.baidu.com/hm.js?976bf3f1e3dd75a740aae527d2af0be6' } /* 引入百度统计的js */],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/style/reset', '~assets/style/variables'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/filter/index.js',
    '@/plugins/axios',
    '@/plugins/api-center',
    '@/plugins/vue-infinite-scroll.js',
    { src: '@/plugins/highlight/highlight', ssr: false },
    { src: '~plugins/analysis.js', ssr: false },
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
    // analyze: true,
    parallel: true,
    cache: false,
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          atdv: {
            test: /node_modules[\\/]ant-design-vue/,
            chunks: 'all',
            priority: 20,
            name: true,
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            // cacheGroupKey here is `commons` as the key of the cacheGroup
            name(module, chunks, cacheGroupKey) {
              const moduleFileName = module
                .identifier()
                .split('/')
                .reduceRight((item) => item)
              const allChunksNames = chunks.map((item) => item.name).join('~')
              return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`
            },
            chunks: 'all',
          },
        },
      },
    },
    plugins: [new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /zh-cn/)],
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true,
          },
        ],
      ],
    },
    transpile: [/ant-design-vue/],
    extend(config) {
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './plugins/antd-icon.js')
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: false,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: false,
        removeComments: false,
        removeEmptyAttributes: true,
        removeOptionalTags: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        removeTagWhitespace: false,
        sortClassName: false,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    // 修改打包成单独的CSS文件引入
    // extractCSS: {
    //   // allChunks: true,
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    //   ignoreOrder: true,
    // },
  },
  env: {
    appBaseUrl: process.env.APP_BASE_URL,
    APP_VERSION: `"${require('./package.json').version}"`,
    GIT_HASH: JSON.stringify(getGitHash()),
    BUILD_DATE: buildDate,
  },
  server: {
    port: 5432,
    host: '0.0.0.0',
  },
  axios: {
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
