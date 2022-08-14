export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'y-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/yu.jpg'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{
    src: '~/assets/scss/common.scss'
  }, ],
  script: [{
    src: 'common.js'
  }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-microcms-module',
  ],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.GET_API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  styleResources: {
    scss: ['~/assets/scss/_variable.scss'],
  },
  buildModules: [
    '@nuxtjs/date-fns',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: true
      },
      display: 'block',
      download: true,
      inject: true
    }]
  ],
  //いらないかも
  googleFonts: {
    googleFonts: {
      families: {
        Roboto: [100, 400, 500, 700],
        download: true, //追加
        inject: true
      }
    },

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}

}
