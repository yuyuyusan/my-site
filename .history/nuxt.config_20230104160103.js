export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'y-web',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Web制作会社に務め、コーダーorマークアップエンジニア。近い目標でフロントエンドエンジニアを目指し日々奮闘中。'
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex,nofollow'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/yu.jpg',
    }],
    script: [{
      src: 'common.js',
    }],
  },
  // loading: '~/components/Loading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{
    src: '~/assets/scss/common.scss'
  }, ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

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
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
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
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'info/index.vue'),
        name: 'page',
      })
    },
  },
  // generate: {
  //   async routes() {
  //     const limit = 10
  //     const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  //     // 一覧のページング
  //     const pages = await axios
  //       .get(`https://yushi.microcms.io/api/v1/info?limit=0`, {
  //         headers: {
  //           'X-MICROCMS-API-KEY': API_KEY
  //         },
  //       })
  //       .then((res) =>
  //         range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
  //           route: `/info/${p}`,
  //         }))
  //       )
  //     return pages
  //   },
  // },



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
