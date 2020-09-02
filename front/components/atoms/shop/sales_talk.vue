<template>
  <div class="blackboard question">
    <p>{{ salesTalk }}</p>
    <p>所持金　{{ money }} G</p> <!-- 減ったゴールドをどこかのタイミングでバックエンドにポストして状態保存!!!!!!!!!!! -->
    <p @click="doBack">戻る -></p>
  </div>
</template>

<script>
export default{
  computed: {
    salesTalk(){
      return this.$store.state.shop.salesTalk; //storeを使って文章を変える場合、算出プロパティの再評価を発生させる
    },
    money(){
      return this.$store.state.user.status.gold;
    },
  },
  methods: {
  	doBack(){
  	  this.$emit('back');
  	},
  },
}
</script>