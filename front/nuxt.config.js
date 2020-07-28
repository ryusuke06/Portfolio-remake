
const config = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/vuetify',
     '@/plugins/vue-draggable',
    { src: '~/plugins/axios.js', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    /* module options */
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  presets({
    isServer
  }) {
    return [
      [
        // require.resolve('@nuxt/babel-preset-app'),
        // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
        {
          corejs: {
            version: 3
          }
        }
      ]
    ]
  },
  //以下JWT認証用
  axios: {
    baseURL: 'http:localhost:5000'
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/sign_in', method: 'post', propertyName: false },
          logout: false,
          user: false
        }
      }
    }
  },
  router: {
    //ログインの有無でリダイレクト先を変更
    middleware: ['auth']
  },
  //ローディング画面に独自コンポーネントを使うことを明示
  loading: '~/components/loading.vue'
}

//開発モードの場合
if (process.env.NODE_ENV === 'development') {
  config.proxy = { '/v1': 'http://localhost:5000' }
}

export default config