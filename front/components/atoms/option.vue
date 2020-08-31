<template>
  <div class="blackboard answer">
    <span><p class="blink-before">{{ option1 }}</p></span>
    <span><p class="blink-before">{{ option2 }}</p></span>
  </div>
</template>

<script>
export default{
  data() {
    return{
    	option1: '',
    	option2: '',
    }
  }
}
</script>