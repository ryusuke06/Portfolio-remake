<template>
  <div>
    E {{ accesory }}
  </div>
</template>

<script>
export default{
  computed: {
  	accesory(){
      return this.$store.state.user.equipment.accesory
    }
  }
}
</script>