<template>
  <div>
    Gold: {{ gold }} G
  </div>
</template>

<script>
export default{
  computed: {
    gold(){
  	  return this.$store.state.user.gold
    }
  }
}
</script>