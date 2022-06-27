import { resolve } from 'path'

export default {
  ssr: process.env.NODE_ENV !== 'mobile',

  router: {
    mode: process.env.NODE_ENV === 'mobile' ? 'hash' : 'history',
  },

  generate: {
    minify: {
      collapseWhitespace: false,
    },
    fallback: 'error.html',
  },

  head: {
    title: `The page title | ${process.env.APP_NAME}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  srcDir: 'src/',

  alias: {
    icons: resolve(__dirname, './src/assets/icons'),
    atoms: resolve(__dirname, './src/components/atoms'),
    molecules: resolve(__dirname, './src/components/molecules'),
    organisms: resolve(__dirname, './src/components/organisms'),
    templates: resolve(__dirname, './src/components/templates'),
    directives: resolve(__dirname, './src//directives'),
    services: resolve(__dirname, './src/services'),
    repositories: resolve(__dirname, './src/repositories'),
    types: resolve(__dirname, './src/types'),
    plugins: resolve(__dirname, './src/plugins'),
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/services/index.ts' },
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
    { src: '~/plugins/repositories/index.ts' },
    { src: '~/plugins/matchMedia.js', mode: 'client' },
    { src: '~/plugins/vClickOutside.js', ssr: false },
    { src: '~/plugins/vue2PerfectScrollBar.js', ssr: false },
    { src: '~/plugins/v-mask.js' },
    { src: '~/plugins/socials.js' },
  ],

  components: false,

  modern: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    'nuxt-build-optimisations',
    '@nuxtjs/svg-sprite',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'vue-social-sharing/nuxt',
  ],

  buildOptimisations: {
    profile: process.env.NODE_ENV === 'development' ? 'risky' : 'expiremental',
  },

  styleResources: {
    scss: [
      './src/assets/scss/_mixins.scss',
      './src/assets/scss/_variables.scss',
    ],
  },

  svgSprite: {
    input: '~/assets/icons/',
  },

  axios: {
    baseUrl: process.env.baseUrl
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    publicPath: '/nuxt/',
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
    extend(config, _) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },
}
