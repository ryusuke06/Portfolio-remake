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
            <span><p class="blink-before" @click="shop">しんだん</p></span>
            <span><p class="blink-before" @click="shop">かいもの</p></span>
            <v-dialog v-model="disclose">
              <div class="blackboard question">
                <p>{{ salesTalk }}</p>
                <p>{{ money }} G</p> <!-- 減ったゴールドをどこかのタイミングでバックエンドにポストして状態保存!!!!!!!!!!! -->
              </div>
              <div class="blackboard answer">
                <ul>
                  <li v-for="item in items">
                    <span @click="pay(item)"><p class="blink-before">{{ item.name }}  {{ item.gold }}G</p></span>
                  </li>
                </ul>
              </div>
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
export default{
  data(){
    return {
      talk: '＊「何か用かな？」',
      ambiance: '閑散としている、、、',
      alignment: 'end',
      justify: 'space-around',
      disclose: false,
      items: [
        {name:'どうのつるぎ', gold:100},
        {name:'はがねのつるぎ', gold:800},
      ],
    };
  },
  computed: {
    salesTalk(){
      return this.$store.state.shop.salesTalk; //storeを使って文章を変える場合、算出プロパティの再評価を発生させる
    },
    money(){
      return this.$store.state.user.gold;
    },
  },
  methods: {
    shop(){
      this.disclose = !this.disclose;
    },
    experience(){
      this.$store.commit('experience');
    },
    pay(item){
      this.$store.commit('pay', item);
    }
  }
}

</script>