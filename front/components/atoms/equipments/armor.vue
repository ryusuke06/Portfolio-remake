<template>
  <div>
    E {{ armor }}
  </div>
</template>

<script>
export default{
  computed: {
  	armor(){
      return this.$store.state.user.equipment.armor
    }
  }
}
</script>