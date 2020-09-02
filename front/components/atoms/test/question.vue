<template>
  <div class="blackboard question">
    <p>{{ question }}</p>
  </div>
</template>

<script>
export default{
  computed: {
    question() {
      return this.$store.state.test.question;
    },
  },
}
</script>