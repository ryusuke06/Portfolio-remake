
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
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vue-draggable',
    //{ src: '~/plugins/axios.js', ssr: false },
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
    '@nuxtjs/auth',
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
  // 以下JWT認証用
  axios: {
    proxy: true
  },
  auth: {
    redirect: {
      login: '/users/login',   // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/',             // ログアウト時のリダイレクトURL
      callback: false,         // Oauth認証等で必要となる コールバックルート
      home: '/users/profile',  // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/v1/auth/sign_in', method: 'post', propertyName: 'token' },
          logout: { url: '/api/v1/auth/sign_out', method: 'delete' },//書いたはいいけどトークンを消すだけでいいからいらないかも
          user: false,
        }
      }
    }
  },
  router: {
    //ログアウト状態でログイン画面に強制遷移させる。不必要な場合はauth:false
    middleware: ['auth']
  },
  // ローディング画面に独自コンポーネントを使うことを明示
  loading: '~/components/loading.vue',
  //グローバルcss
  css: [
    '@/assets/css/black_board.css',
    '@/assets/css/list.css',
  ],
}

//開発モードの場合 proxyを挟めばCORS対策になる（あんまり分かってない
if (process.env.NODE_ENV === 'development') {
  config.proxy = { '/api/': {target: 'http://localhost:3000'} }
}

export default config