<template>
  <div>
    E {{ wepon }}
  </div>
</template>

<script>
export default{
  computed: {
  	wepon(){
      return this.$store.state.user.equipment.wepon
    }
  }
}
</script>