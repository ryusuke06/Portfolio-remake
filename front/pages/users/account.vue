<template>
  <div>
    <v-img
      :src="(require('../../assets/imgs/backgrounds/castle.jpg'))"
      height="480"
    >

      <v-row
        :align="alignment"
        :justify="justify"
      >
        <v-col
          cols="7"
          height="480"
        >
          <v-img
            :src="(require('../../assets/imgs/jobs/mahou.gif'))"
            height="325"
            contain
          ></v-img>
        </v-col>

        <v-col
          cols="5"
          height="480"
        >
          <v-row>
            <v-col cols="12">
              <v-row cols="auto">
                <div class="blackboard answer">
                  <span @click="overlay = !overlay">
                    <p class="blink-before">つよさ</p>
                  </span>
                  <span><p class="blink-before">そうび</p></span>
                  <span><p class="blink-before">じゅもん</p></span>
                  <span @click="deleteUser"><p class="blink-before">記録を消す</p></span>
                </div>
              </v-row>
            </v-col>
          </v-row>

          <v-row
            :align="alignment"
            :justify="justify"
          >
            <v-col cols="12">
              <v-img
                :src="(require('../../assets/imgs/transparent.png'))"
                height="250"
              >
                <v-overlay
                  :absolute="absolute"
                  :value="overlay"
                  :opacity=0
                >
                <v-row cols="auto">
                  <div class="blackboard answer">
                    <p>Lv:99</p>
                    <p>Exp:9999</p>
                    <p>job:</p>
                    <p>けんじゃ</p>
                  </div>
                </v-row>
                </v-overlay>
              </v-img>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    alignment: 'center',
    justify: 'center',
    absolute: true,
    overlay: false,
  }),
  methods: {
    deleteUser() {
      this.$axios
        .delete('api/v1/auth', {
          headers: {
            // ローカルストレージのtokenから必要な情報をdeleteリクエストで送信
            'access-token': localStorage.getItem('access-token'),
            'uid': localStorage.getItem('uid'),
            'client': localStorage.getItem('client'),
          },
        })
        .then((response) => {
          // APIからログアウト後AuthModuleでもログアウト関数を実行
          this.$auth.logout()
          window.location.href = '/'
        })
    },
  },
}
</script>