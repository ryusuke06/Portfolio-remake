<template>
  <div class="font">
    <div class="blackboard question">
      <p>{{ talk }}</p>
    </div>
    <v-img
      :src="(require('../assets/imgs/backgrounds/shop.jpg'))"
      height="450"
    >
      <v-row
        :align="alignment"
        :justify="justify"
      >
        <v-spacer></v-spacer>
        <v-col>
          <v-img
            :src="(require('../assets/imgs/jobs/panda.gif'))"
            height="325"
            contain
          ></v-img>
        </v-col>
        <v-col>
          <div class="blackboard answer">
            <span><p class="blink-before">しんだん</p></span>
            <span><p class="blink-before">かいもの</p></span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="blackboard answer">
            <p>{{ ambiance }}</p>
          </div>
        </v-col>
      </v-row>
    </v-img><!-- height固定、containなし（画像全体を含めないこと）v-imgでの画像の参照は上記のようにする -->
  </div>
</template>

<script>
export default{
  data: function(){
    return {
      talk: '＊「何か用かな？」',
      ambiance: '閑散としている、、、',
      alignment: 'end',
      justify: 'space-around',
    };
  },
}

</script>