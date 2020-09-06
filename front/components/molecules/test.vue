<template>
  <section>
    <question />
    <options @selectOption="selectOption" />
  </section>
</template>

<script>
import question from '../atoms/test/question'
import options from '../atoms/test/options'

export default {
  data() {
  	return {
      currentTestTalk: 'question',
      currentTestState: 'options',
    };
  },
  methods: {
    selectOption(optionId) {
      this.$store.dispatch.doResult;
  	},
  },
}
</script>