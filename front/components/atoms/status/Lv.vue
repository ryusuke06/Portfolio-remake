<template>
  <div>
    Lv：{{ lv }}
  </div>
</template>

<script>
export default{
  computed: {
  	lv(){
  	  return this.$store.state.user.status.level;
    }
  }
}
</script>