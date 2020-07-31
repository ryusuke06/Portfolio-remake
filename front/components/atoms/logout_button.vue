<template>
  <div>
    <v-btn block class="mr-4 blue white--text" @click="logout">ログアウト</v-btn>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  }
}

</script>