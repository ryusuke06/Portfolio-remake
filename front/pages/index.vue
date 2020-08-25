<template>
  <div class="font">
    <div class="blackboard question">
      <p>{{ talk }}</p>
    </div>
    <v-img
      :src="(require('../assets/imgs/backgrounds/castle.jpg'))"
      height="450"
    >
      <v-row>
        <v-img
          :src="(require('../assets/imgs/monsters/last.gif'))"
          height="325"
          contain
        ></v-img>
      </v-row>
      <v-row
        :align="alignment"
        :justify="justify"
        height="125"
      >
        <div class="blackboard answer">
          <p>ジョブ：けんじゃ</p>
          <span>レベル：９９</span>
        </div>
        <div class="blackboard answer">
          <span><p class="blink-before">たたかう</p></span>
          <span><p class="blink-before">はなす</p></span>
        </div>
      </v-row>
    </v-img><!-- height固定、containなし（画像全体を含めないこと）v-imgでの画像の参照は上記のようにする -->
  </div>
</template>

<script>

export default {
  //ログインしていなくても入れるように
  auth: false,
  data: function(){
    return {
      talk: '＊「このおいぼれに何のようじゃ？」',
      alignment: 'start',
      justify: 'end'
    };
  },
}
</script>

<style>
/* 今後ドットフォントと切り替えできるように */
.font {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3vw;
  font-size: 1vw;
}
</style>