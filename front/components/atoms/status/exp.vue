<template>
  <div>
    Exp：{{ exp }}
  </div>
</template>

<script>
export default{
  computed: {
  	exp(){
      return this.$store.state.user.experiencePoint
    }
  }
}
</script>