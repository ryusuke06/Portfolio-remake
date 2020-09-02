<template>
  <div class="blackboard answer">
    <ul>
      <span><p class="blink-before" @click="isWepons">ぶき</p></span>
      <span><p class="blink-before" @click="isArmors">ぼうぐ</p></span>
      <span><p class="blink-before" @click="isAccesories">アクセサリー</p></span>
    </ul>
  </div>
</template>
<script>
export default{
  methods: {
    isWepons(){
      this.$emit('wepons');
    },
    isArmors(){
      this.$emit('armors');
    },
    isAccesories(){
      this.$emit('accesories');
    },
  }
}
</script>