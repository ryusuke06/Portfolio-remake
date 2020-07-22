import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//このアロー関数の意味は引数Appの内容をレンダリングする
}).$mount('#app')//$mountメソッドはelプロパティと同じく指定したタグにVueオブジェクトをマウントする役割
