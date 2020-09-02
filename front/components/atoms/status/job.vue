<template>
  <div>
    job：{{ job }}
  </div>
</template>

<script>
export default{
  computed: {
  	job(){
  	  return this.$store.state.user.status.job;
    }
  }
}
</script>