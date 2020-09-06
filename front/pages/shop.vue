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
            <span><p class="blink-before" @click="test">しんだん</p></span>
            <span><p class="blink-before" @click="goods">かいもの</p></span>
            <v-dialog v-model="disclose">
              <component :is="currentShopView" />
            </v-dialog>
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
import shopGoods from '@/components/molecules/shop_goods'
import test from '@/components/molecules/test'

export default{
  components: {
    shopGoods,
    test,
  },
  data(){
    return {
      talk: '＊「何か用かな？」',
      ambiance: '閑散としている、、、',
      alignment: 'end',
      justify: 'space-around',
      disclose: false,
      dark: true,
      currentShopView: 'test',
    };
  },
  methods: {
    test(){
      this.disclose = !this.disclose;
      this.currentShopView = 'test';
    },
    goods(){
      this.disclose = !this.disclose;
      this.currentShopView = 'shopGoods';
    },
    experience(){
      this.$store.commit('experience');
    }
  }
}

</script>