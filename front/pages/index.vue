<template>
  <div class="font">
    <p>{{ result }}Hello</p>
  	<nuxt-link to="/users/login">ログイン</nuxt-link>
  </div>
</template>

<script>

export default {
  //ログインしていなくても入れるように
  auth: false,
  data: function(){
    return {
      result: 'no event.',
    };
  },
}
</script>

<style>
.font {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>