<template>
  <v-app class="app" dark>
    <Loading />
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
              <v-btn @click="logOut">はい</v-btn>
              <v-btn @click="logOutWindow = false">いいえ</v-btn>
            </v-card>
          </v-dialog>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar class="tool-bar" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon id="v-step-3" @click.stop="drawer = !drawer" />

      <v-toolbar-title class="pl-0">
        <router-link to="/" class="toolbar-title">
          <span class="title-first">ITQuest</span>
        </router-link>
      </v-toolbar-title>

      <v-toolbar-items class="page-link" v-if="user">
        <v-btn to="/test" nuxt class="header-btn ml-2">
          <v-icon>mdi-feather</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="page-link" v-if="user">
        <v-btn to="/users/account" nuxt class="header-btn ml-1">
          <v-icon>mdi-lock</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="page-link" v-if="user">
        <v-btn class="header-btn ml-1" @click="logOutWindow = true">
          <v-icon>mdi-key</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>トップページ素材提供「RPGドット」様｜ご意見、ご要望は<a href="mailto:dtodo.contact@gmail.com">こちら</a>まで</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Loading from "@/components/loading";
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: "ITQuest",
        logOutWindow: false,
        logoutConfirm: false,
      };
    },
    components: {
      Loading,
    },
    computed: {
      user() {
        return this.$nuxt.$store.state.auth.loggedIn;
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
              title: "診断",
              to: "/test"
            },
            {
              icon: "mdi-lock",
              title: "マイページ",
              to: "/users/account"
            }
          ];
        } else {
          return [{
              icon: "mdi-home",
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
      logOut() {
        this.$auth.logout()
      }
    }
  };
</script>

<style lang="scss">
  $main-color: #fc7b03;
  $pc: 1024px;
  $tab: 680px;
  $sp: 480px;
  @mixin pc {
    @media (max-width: ($pc)) {
      @content;
    }
  }
  @mixin tab {
    @media (max-width: ($tab)) {
      @content;
    }
  }
  @mixin sp {
    @media (max-width: ($sp)) {
      @content;
    }
  }
  @font-face {
    font-family: "dot";
    src: url("../assets/fonts/k8x12L.ttf") format("truetype");
  }
  .app {
    .toolbar-title {
      color: white;
      text-decoration: none;
      font-family: "dot";
      letter-spacing: 7px;
      font-size: 30px;
      font-weight: bold;
      .title-first {
        color: $main-color;
      }
    }
    .tool-bar {
      .page-link {
        .page-link-title {
          padding-top: 15px;
        }
        .header-btn {
          background-color: rgb(45, 47, 48) !important;
          @include tab {
            display: none;
          }
          @include sp {
            width: 100% !important;
          }
        }
      }
    }
    .v-content__wrap {
      background-color: black !important;
    }
  }
  .v-dialog {
    width: 70%;
    display: flex;
    .v-btn {
      background-color: rgb(29, 29, 29) !important;
      border: 2px solid $main-color;
      color: $main-color !important;
      float: left;
      margin: 0px 5% 15px;
      width: 40%;
      font-weight: bold;
    }
  }
  .v-navigation-drawer__content {
    margin: 0;
  }
</style>