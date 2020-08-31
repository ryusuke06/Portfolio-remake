<template>
  <div>
    E {{ accesories }}
  </div>
</template>

<script>
export default{
  computed: {
  	accesories(){
      return this.$store.state.user.equipment.accesories
    }
  }
}
</script>