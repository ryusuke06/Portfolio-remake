<template>
  <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="user" @click="logOutWindow = true">
        <v-list-item-action>
          <v-icon>mdi-key</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>ログアウト</v-list-item-title>
        </v-list-item-content>
        <v-dialog v-model="logOutWindow">
          <v-card>
            <v-card-title>ログアウトしますか？</v-card-title>
            <v-btn @click="deleteUser">はい</v-btn>
            <v-btn @click="logOutWindow = false">いいえ</v-btn>
          </v-card>
        </v-dialog>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: "ITchie",
        logOutWindow: false,
        logoutConfirm: false,
      };
    },
    computed: {
      user() {
        return this.$store.state.currentUser;
      },
      items() {
        if (this.user) {
          return [{
              icon: "mdi-home",
              title: "トップ",
              to: "/"
            },
            {
              icon: "mdi-feather",
              title: "Test",
              to: "/test"
            },
          ];
        } else {
          return [{
              icon: "mdi-skull-crossbones",
              title: "トップ",
              to: "/"
            },
            {
              icon: "mdi-key-variant",
              title: "ログイン",
              to: "/users/login"
            },
            {
              icon: "mdi-account-arrow-right",
              title: "新規登録",
              to: "/users/signup"
            }
          ];
        }
      }
    },
    methods: {
      deleteUser() {
      this.$axios
        .delete('api/v1/auth', {
          headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
        })
        .then((response) => {
          this.$auth.logout()
          window.location.href = '/'
        })
      },
    }
  };
</script>

  </script>