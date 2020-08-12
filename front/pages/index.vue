<template>
  <div class="font">
    <div class="blackboard question">
      <p>＊「このおいぼれに何のようじゃ？」</p>
    </div>
    <v-img
    :src="(require('../assets/imgs/castle.jpg'))"
    height="450">
      <v-row
        :align="center"
        :justify="center"
      >
        <v-img
        :src="(require('../assets/imgs/last.gif'))"
        height="350"
        contain
        ></v-img>
      </v-row>
      <div class="clearfix">
        <div class="blackboard answer float-r">
          <span><p class="blink-before">はい</p></span>
          <span><p class="blink-before">いいえ</p></span>
        </div>
      </div>
    </v-img><!-- height固定、containなし（画像全体を含めないこと）v-imgでの画像の参照は上記のようにする -->
  </div>
</template>

<script>
import BlackFrame from '@/assets/css/black_frame.css'

export default {
  //ログインしていなくても入れるように
  auth: false,
  data: function(){
    return {
      result: 'no event.',
    };
  },
}
</script>

<style>
.font {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>